
import { stringLengthInferiorTo, t_alphabet, t_strDigit, t_getSubStrNotMatchUnionFromStr, t_getSubStrMatchUnionFromStr } from "@shared/type.js";




import * as types from "./types.js" ;
import { t_union_tld_df } from "./union.js";
import { t_char_join_reqAssign } from "./types.js";
// Validate url with the following regex :
/*
https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b\/([-a-zA-Z0-9%_\.~]+\/?)+(\?[-a-zA-Z0-9%_\.~]+=[-a-zA-Z0-9%_\.~]+\&?)*
*/

//longest TLD == "XN--VERMGENSBERATUNG-PWB"["length"] == 24 => 25 is the max length of TLD
type t_TLD_limit = 25 ;
type isTLD<S extends string > = stringLengthInferiorTo<S,t_TLD_limit>  extends true ? false : true ;


type t_union_urlReservedChar = "!"|"#"|"$"|"&"|"'"|"("|")"|"*"|"+"|","|"/"|":"|";"|"="|"?"|"@"|"["|"]"
type t_union_urlUnReservedChar_specialChar = "-"|"_"|"."|"~" 
type t_union_urlUnReservedChar = 	 t_alphabet | t_strDigit |	t_union_urlUnReservedChar_specialChar


//TYPE : HEAD
type t_rest_head_http_https<Ss extends string> = Ss extends `${types.t_head_http_https<infer R>}` ? R : Ss ;
type t_add_head_http_https<Ss extends string , isHttps extends boolean = boolean > = `${types.t_head_http_https<Ss,isHttps>}`

//TYPE : WWWs
type t_rest_wwwsDomain <Ss extends string>  = Ss extends `${types.t_wwwsDomain<infer D>}` ? D : Ss ;
type t_add_wwwsDomain <Ss extends string > =  `${types.t_wwwsDomain<Ss>}`

//TYPE : TLD
type t_rest_strAndTld <Ss extends string>  =  
Ss extends `${types.t_full_strAndTld<infer S_TLD,infer R>}` ? 
  isTLD<S_TLD> extends true ? R : Ss 
:  Ss extends `${types.t_deb_strAndTld<infer S_TLD>}` ?
  isTLD<S_TLD> extends true ? "" : Ss 
: Ss ;
type t_add_strAndTld <Ss extends string ,S_TLD extends string = t_union_tld_df > = types.t_deb_strAndTld<S_TLD,Ss>


//TYPE : PART OF URL 
type t_rest_partOfUrl <Ss extends string > = t_getSubStrMatchUnionFromStr<Ss , t_union_urlUnReservedChar> extends [infer SPartOfUrl,any] ? SPartOfUrl :  never 
type t_rest_notPartOfUrl <Ss extends string > = t_getSubStrNotMatchUnionFromStr<Ss , t_union_urlReservedChar> extends [infer A ,infer SNotPartOfUrl] ? A extends "" ? SNotPartOfUrl :  never :  never 

//TYPE : BODY URL 
type t_rest_bodyUrl <Ss extends string > = 
Ss extends `${types.t_bodyUrl<infer B,infer R>}` ?
B extends "" ? Ss :t_rest_partOfUrl<B> extends B ? t_rest_bodyUrl<R> :never
: Ss extends "" ? Ss : t_rest_notPartOfUrl<Ss> extends infer P  ? P extends Ss ? P : never : never 
export type t_add_bodyUrl <Ss extends string ,SBody extends string = string > = types.t_bodyUrl<Ss,SBody>

//TYPE : REQ BODY URL 
type t_rest_partOfReqValue <Ss extends string > = t_rest_partOfUrl<Ss>
type t_rest_partOfReqID <Ss extends string > = t_rest_partOfUrl<Ss>

export type t_param_body = `${string}/`
export type t_param_req =  types.t_full_reqUrlBody<string,string,string> | types.t_beg_reqUrlBody<string,string>
type t_add_reqUrl <Ss extends string , SReq extends t_param_req  =t_param_req>= 
Ss extends t_param_body?
`${Ss}${SReq}`
:never 

export type t_url<SJson extends {name:string,tld?:string,body?:t_param_body,reqBody?:t_param_req} = {name:string,tld?:string,body:t_param_body,reqBody:t_param_req}> = 
t_add_head_http_https<t_add_wwwsDomain<(SJson["tld"] extends string ? t_add_strAndTld<SJson["name"],SJson["tld"]>: t_add_strAndTld<SJson["name"]>) >> extends infer Result ? Result extends string ? 
(SJson["body"] extends t_param_body ? t_add_bodyUrl<Result,SJson["body"]> :Result  ) extends infer Result ? Result extends string ?
(SJson["reqBody"] extends t_param_req ? t_add_reqUrl<Result,SJson["reqBody"]> :Result ) extends infer Result ? Result extends string? 
Result : never : never : never : never : never : never 


type _t_rest_reqUrlBody <ID extends string , V extends string , R extends string = undefined > =
V extends "" ? never :
  t_rest_partOfReqID<ID> extends infer P1 ? 
    P1 extends ID ?
      t_rest_partOfReqValue<V> extends infer P2 ? 
        P2 extends V ?
          R extends undefined ? "" :t_rest_reqUrlBody<R>
        :R extends undefined ? types.t_beg_reqUrlBody<ID,V> : types.t_full_reqUrlBody<ID,V,R>
      :never 
    :`${P1 extends "" ? t_char_join_reqAssign :""}${R extends undefined ? types.t_beg_reqUrlBody<ID,V> : types.t_full_reqUrlBody<ID,V,R>}`
  :never


//`${types.t_end_reqUrlBody<SR,R>}`
type t_rest_reqUrlBody <Ss extends string > = 
Ss extends types.t_full_reqUrlBody<infer ID,infer V,infer R> ?
  _t_rest_reqUrlBody<ID,V,R> extends infer SR ? SR : never 
: Ss extends types.t_beg_reqUrlBody<infer ID,infer V> ? 
  _t_rest_reqUrlBody<ID,V> extends infer SR ?SR : never
:Ss

//TYPE : REQ
type t_rest_reqUrl <Ss extends string > =
Ss extends `${types.t_reqUrl<infer R>}` ?
    t_rest_reqUrlBody<R>
: Ss;



//TYPE : URL 
type t_isUrl <Ss extends string > =
t_rest_head_http_https<Ss> extends infer RH ? RH extends string ?
RH extends "" ? false :
  t_rest_wwwsDomain<RH> extends infer RW ? RW extends string ?
  RW extends "" ? false :
    t_rest_strAndTld<RW> extends infer RD ? RD extends string ?
    RD extends "" ? true: RD extends `${RW}` ? false : 
      t_rest_bodyUrl<RD> extends infer RB ? RB extends string ?
      RB extends "" ? true :
        t_rest_reqUrl<RB> extends infer RQ ? RQ extends string ? 
          RQ extends "" ? true : false

: false : false : false : false : false : false : false : false : false : false


export default t_isUrl

export type {
    t_rest_head_http_https,
    t_rest_wwwsDomain,
    t_rest_strAndTld,
    t_rest_partOfUrl,
    t_rest_notPartOfUrl,
    t_rest_bodyUrl,
    t_rest_reqUrlBody,
    t_rest_reqUrl
}