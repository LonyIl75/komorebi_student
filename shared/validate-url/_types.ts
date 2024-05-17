
import { stringLengthInferiorTo, t_alphabet, t_strDigit, t_getSubStrNotMatchUnionFromStr, t_getSubStrMatchUnionFromStr, t_strApplyReplaceIfExtends, reshapeObject, makeOptional, reshapeObjectIgnoreOpt } from "@shared/type.js";




import * as types from "./types.js" ;
import {  t_union_tld_df } from "./union.js";
import { t_jsonAddIfNotExist, t_jsonFilterUndefinedField } from "@shared/m_object.js";

// Validate url with the following regex :
/*
(https?):\/\/((?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b)(?:\/([-a-zA-Z0-9%_\.~]+\/?)+)?(?:\?((?:[-a-zA-Z0-9%_\.~]+=[-a-zA-Z0-9%_\.~]+\&?)+))?
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

//TYPE : DOMAIN
type t_rest_subdomain <Ss extends string , D extends string = types.t_str_www>  = Ss extends `${types.t_subdomain<infer SLD,D>}` ? SLD : Ss ;
type t_add_subdomain <Ss extends string , D extends string = types.t_str_www> =  `${types.t_subdomain<Ss,D>}`

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


type _t_param_body<T extends string > =
T extends types.t_bodyUrl<infer A,infer R> ? 
  A extends "" ? never : R extends types.t_bodyUrl<"",string> ? never : 
    types.t_bodyUrl<A,_t_param_body<R>>
:T

type _t_param_body_df <T extends string = string > = `${T}/`
export type t_param_body<T extends string = string > = 
string extends T ?_t_param_body_df: _t_param_body<T>

//TODO refactor : 
type _t_param_req<T extends string > =
T extends types.t_end_paramUrl<infer A,infer R> ? 
  A extends "" ? never : R extends  types.t_end_paramUrl<"",string> ? never :
    A extends types.t_beg_paramUrlBody<infer A1, infer A2> ? R extends types.t_beg_paramUrlBody<infer R1, infer R2> ?
    [A1,A2] extends [t_strApplyReplaceIfExtends<A1,types.t_union_char_param_specialChar,"">,t_strApplyReplaceIfExtends<A2,types.t_union_char_param_specialChar,"">] ? 
    [R1,R2] extends [t_strApplyReplaceIfExtends<R1,types.t_union_char_param_specialChar,"">,t_strApplyReplaceIfExtends<R2,types.t_union_char_param_specialChar,"">] ? 
    types.t_end_paramUrl<A,_t_param_body<R>>:never:never
    :never:never
:T

export type t_param_req <T extends string = string > =  
string extends T ? types.t_full_paramUrlBody<string,string,string> | types.t_beg_paramUrlBody<string,string>
: _t_param_req<T> 

type t_add_reqUrl <Ss extends string , _SReq extends t_param_req  =t_param_req>= 
types.t_reqUrl<_SReq> extends infer SReq ? SReq extends string ? 
Ss extends _t_param_body_df< infer Bd> ? Bd extends string ? Bd extends t_param_body ? never : 
`${Bd}${SReq}` :never :`${Ss}${SReq}`
:never:never
 
//TODO refactor : 
type t_paramReq_arr = readonly ( readonly [string,string])[]
export type getParamReqFromArrArr <T extends t_paramReq_arr, Acc extends string ="" > =
T extends readonly [infer A ,...infer R]  ? R extends t_paramReq_arr ?
A extends readonly [infer A1 ,infer A2] ? A1 extends string ? A2 extends string ? 
A1 extends "" ? never : A2 extends "" ? never :
[A1,A2] extends [t_strApplyReplaceIfExtends<A1,types.t_union_char_param_specialChar,"">,t_strApplyReplaceIfExtends<A2,types.t_union_char_param_specialChar,"">] ?
types.t_beg_paramUrlBody<A1,A2> extends infer Elm ? Elm extends string ?
getParamReqFromArrArr<R,Acc extends ""? Elm: types.t_end_paramUrl<Acc,Elm>>
:never:never
:never : never :never :never :never : Acc

export const str_head_http_https = "head_http_https" as const
export type t_str_head_http_https = typeof str_head_http_https
export const str_subdomain = "subdomain" as const 
export type t_str_subdomain = typeof str_subdomain 
export const str_sld = "sld" as const 
export type t_str_sld = typeof str_sld
export const str_tld = "tld" as const 
export type t_str_tld = typeof str_tld
export const str_bodyUrl = "bodyUrl" as const
export type t_str_bodyUrl = typeof str_bodyUrl
export const str_paramsUrl = "paramsUrl" as const
export type t_str_paramsUrl = typeof str_paramsUrl
export const str_domain = "domain" as const
export type t_str_domain = typeof str_domain

type t_df_url = {
  [str_head_http_https]:types.t_str_https,
  [str_subdomain]:types.t_str_www,
}

type _t_url_json = {[str_head_http_https]:string,[str_subdomain]:string,[str_sld]:string,[str_tld]?:string,[str_bodyUrl]?:t_param_body,[str_paramsUrl]?:t_param_req|t_paramReq_arr}
type t_url_json = reshapeObjectIgnoreOpt<_t_url_json,null,keyof t_df_url>
//update
export type t_url<_SJson extends t_url_json  = 
t_df_url & {[str_sld]:string,[str_bodyUrl]:t_param_body,[str_paramsUrl]:t_param_req}> = 
t_jsonFilterUndefinedField<t_jsonAddIfNotExist<_SJson,t_df_url>> extends infer SJson ? SJson extends t_url_json ?
  SJson[t_str_paramsUrl] extends infer PRQ ?
  (PRQ extends t_paramReq_arr ?  getParamReqFromArrArr<PRQ> : PRQ ) extends infer PRQ ? 
  (SJson[t_str_tld] extends string ? t_add_strAndTld<SJson[t_str_sld],SJson[t_str_tld]>: t_add_strAndTld<SJson[t_str_sld]>) extends infer Result ? Result extends string ? 
  (SJson[t_str_subdomain] extends string ? t_add_subdomain<Result,SJson[t_str_subdomain]> : Result) extends infer Result ? Result extends string ?
  t_add_head_http_https<Result,SJson[t_str_head_http_https] extends types.t_str_https ? true : false > extends infer Result ? Result extends string ?
  (SJson[t_str_bodyUrl] extends t_param_body ?  SJson[t_str_bodyUrl] extends t_param_body<SJson[t_str_bodyUrl]> ? t_add_bodyUrl<Result,SJson[t_str_bodyUrl]> : never:Result  ) extends infer Result ? Result extends string ?
  (PRQ extends t_param_req ? PRQ extends t_param_req<PRQ> ? t_add_reqUrl<Result,PRQ> : never:Result  ) extends infer Result ? Result extends string? 
Result : never : never : never : never : never : never : never : never : never : never : never : never : never : never 

type _t_rest_reqUrlBody <ID extends string , V extends string , R extends string = undefined > =
V extends "" ? never :
  t_rest_partOfReqID<ID> extends infer P1 ? 
    P1 extends ID ?
      t_rest_partOfReqValue<V> extends infer P2 ? 
        P2 extends V ?
          R extends undefined ? "" :t_rest_reqUrlBody<R>
        :R extends undefined ? types.t_beg_paramUrlBody<ID,V> : types.t_full_paramUrlBody<ID,V,R>
      :never 
    :`${P1 extends "" ? types.t_char_join_paramAssign :""}${R extends undefined ? types.t_beg_paramUrlBody<ID,V> : types.t_full_paramUrlBody<ID,V,R>}`
  :never


//`${types.t_end_paramUrl<SR,R>}`
type t_rest_reqUrlBody <Ss extends string > = 
Ss extends types.t_full_paramUrlBody<infer ID,infer V,infer R> ?
  _t_rest_reqUrlBody<ID,V,R> extends infer SR ? SR : never 
: Ss extends types.t_beg_paramUrlBody<infer ID,infer V> ? 
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
  t_rest_subdomain<RH> extends infer RW ? RW extends string ?
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
    t_rest_subdomain,
    t_rest_strAndTld,
    t_rest_partOfUrl,
    t_rest_notPartOfUrl,
    t_rest_bodyUrl,
    t_rest_reqUrlBody,
    t_rest_reqUrl
}