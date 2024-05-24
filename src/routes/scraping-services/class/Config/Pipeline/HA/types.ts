import getCurrentLine from "get-current-line"
import { IJson } from "@shared/m_object.js"
import { m_regex_getContext } from "@shared/m_regex_getContext.js"
import { joinEndParamUrlIfNotEmpty } from "@shared/validate-url/functions.js"
import { joinReqUrl, joinBegParamUrl, char_headQuery } from "@shared/validate-url/types.js"

export const str_getServiceFunction = "getServiceFunction" as const
export type t_str_getServiceFunction = typeof str_getServiceFunction
export const str_getLocalFunction = "getLocalFunction" as const
export type t_str_getLocalFunction = typeof str_getLocalFunction
export const str_save_serviceFunction = "save_serviceFunction" as const
export type t_str_save_serviceFunction = typeof str_save_serviceFunction
export const str_transformAfterGetServiceFunction = "transformAfterGetServiceFunction" as const
export type t_str_transformAfterGetServiceFunction = typeof str_transformAfterGetServiceFunction

export const df_arr_fct_name = [str_getServiceFunction,str_getLocalFunction,str_transformAfterGetServiceFunction] as const
export type t_df_arr_fct_name = typeof df_arr_fct_name
export type t_df_fct_name = typeof df_arr_fct_name[number]

export const str_getNextPage = "getNextPage" as const 
export type t_str_getNextPage = typeof str_getNextPage

export const str_transformAfterGetNextPage = "transformAfterGetNextPage" as const
export type t_str_transformAfterGetNextPage = typeof str_transformAfterGetNextPage

export const str_nextPage = "nextPage" as const
export type t_str_nextPage = typeof str_nextPage

export const str_transformAfterNextPage= "transformAfterNextPage" as const 
export type t_str_transformAfterNextPage = typeof str_transformAfterNextPage



const name_queryParamNumberScrapPage = "pageScrap" as const 
const name_queryParamNumberScrapItem = "itemScrap" as const 

export const getUrlToScrap = (cur_url : string , result:IJson)=>{ 
    return m_regex_getContext.getIthContextSuffix(joinBegParamUrl(name_queryParamNumberScrapPage,""),cur_url,result,char_headQuery)
}

export const getUrlToScrapItem = <S extends string , PA extends string , Idx extends number > (cur_url : S ,paramsUrl : PA ,  idx: Idx )=>{ 
    return joinReqUrl(cur_url,joinEndParamUrlIfNotEmpty(paramsUrl,joinBegParamUrl(name_queryParamNumberScrapItem,`${idx}`)))
}