import { concatNameAndValueQueryParam, queryParamOperator } from "@/utils/scraping/primitives/page.js"
import { IJson } from "@shared/m_object.js"
import { m_regex_getContext } from "@shared/m_regex_getContext.js"

export const str_getServiceFunction = "getServiceFunction" as const
export const str_getLocalFunction = "getLocalFunction" as const
export const str_save_serviceFunction = "save_serviceFunction" as const
export const str_transformAfterGetServiceFunction = "transformAfterGetServiceFunction" as const

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



const name_queryParamNumberScrapPage = "pageScrap"

export const getUrlToScrap = (cur_url : string , result:IJson)=> {
    return m_regex_getContext.getIthContextSuffix(concatNameAndValueQueryParam(name_queryParamNumberScrapPage,""),cur_url,result,queryParamOperator)
}