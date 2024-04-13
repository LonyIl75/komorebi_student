import { t_char_join_pathRoutes } from "@shared/routePath.js";


type t_http_https<isHttps extends boolean >  = boolean extends isHttps ? `http`|`https`:
isHttps extends true ? `https` : `http`;

//TYPE : HEAD
export type t_head_http_https <S extends string , isHttps extends boolean = boolean  > = `${t_http_https<isHttps>}://${S}`

//TYPE : WWWs
export type t_wwwsDomain <S extends string> = `www.${S}`


//TYPE : TLD
export type t_deb_strAndTld < S_TLD extends string , B extends string = string  > = `${B}.${S_TLD}`
export type t_full_strAndTld < S_TLD extends string , R extends string , B extends string = string > = `${t_deb_strAndTld<S_TLD,B>}${t_char_join_pathRoutes}${R}`


//TYPE : BODY URL 
export type t_bodyUrl <B extends string , R extends string > = `${B}${t_char_join_pathRoutes}${R}`


export type t_char_join_reqAssign = "&"
export type t_char_reqAssign = "="

export type t_beg_reqUrlBody <ID extends string , V extends string > = `${ID}${t_char_reqAssign}${V}`
export type t_end_reqUrlBody <V extends string , R extends string > = `${V}${t_char_join_reqAssign}${R}`
export type t_full_reqUrlBody <ID extends string , V extends string , R extends string  > = `${ID}${t_char_reqAssign}${t_end_reqUrlBody<V,R>}`




//TYPE : REQ 
type t_char_headQuery = "?"

export type t_reqUrl <S extends string > = `${t_char_headQuery}${S}`




