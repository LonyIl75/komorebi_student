import { t_char_join_pathRoutes } from "@shared/routePath.js";

export const str_http = "http" as const
export type t_str_http = typeof str_http
export const str_https = "https" as const
export type t_str_https = typeof str_https
export type t_http_https<isHttps extends boolean >  = boolean extends isHttps ? t_str_http|t_str_https:
isHttps extends true ? t_str_https : t_str_http;

//TYPE : HEAD
export const str_join_protocol = "://" as const
export type t_str_join_protocol = typeof str_join_protocol
export type t_head_http_https <S extends string =string , isHttps extends boolean = boolean  > = `${t_http_https<isHttps>}${t_str_join_protocol}${S}`

//TYPE : DOMAIN
export const str_www = "www" as const
export type t_str_www = typeof str_www
export const str_df_subdomain = str_www
export type t_str_df_subdomain = t_str_www
export type t_subdomain <S extends string=string , D extends string = t_str_df_subdomain > = `${D}.${S}`


//TYPE : TLD
export type t_deb_strAndTld < S_TLD extends string , B extends string = string  > = `${B}.${S_TLD}`
export type t_full_strAndTld < S_TLD extends string =string , R extends string =string , B extends string = string > = `${t_deb_strAndTld<S_TLD,B>}${t_char_join_pathRoutes}${R}`


//TYPE : BODY URL 
export type t_bodyUrl <B extends string =string , R extends string =string > = `${B}${t_char_join_pathRoutes}${R}`

export const char_join_paramAssign = "&" 
export type t_char_join_paramAssign = typeof char_join_paramAssign
export const char_paramAssign = "="
export type t_char_paramAssign = typeof char_paramAssign 
export type t_union_char_param_specialChar = t_char_join_paramAssign| t_char_paramAssign

export type t_beg_paramUrlBody <ID extends string=string  , V extends string=string > = `${ID}${t_char_paramAssign}${V}`
export const joinBegParamUrl = <ID extends string  , V extends string> (id:ID , value:V) :t_beg_paramUrlBody<ID,V>=> `${id}${char_paramAssign}${value}` as const
export type t_end_paramUrl <V extends string =string , R extends string=string  > = `${V}${t_char_join_paramAssign}${R}`
export const joinEndParamUrl = <V extends string , R extends string> (value:V , rest:R) :t_end_paramUrl<V,R> => `${value}${char_join_paramAssign}${rest}` as const
export type t_full_paramUrlBody <ID extends string =string , V extends string =string , R extends string =string  > = `${ID}${t_char_paramAssign}${t_end_paramUrl<V,R>}`




//TYPE : REQ 
export const char_headQuery = "?"
export type t_char_headQuery = typeof char_headQuery 
export type t_reqUrl <S extends string =string > = `${t_char_headQuery}${S}`
export const _joinReqUrl = <S extends string> (str:S) :t_reqUrl<S> => `${char_headQuery}${str}` as const
export const joinReqUrl = <S extends string, PA extends string > (str:S, params : PA)  => `${str}${_joinReqUrl(params)}` as const 



