import { t_strRegex, embedBeginAndEndLineRegexStr, embedGroupStrRegex } from "@shared/m_regex.js"
import { str_validation_strRegex, str_init, emptyStr, isStrEmpty } from "@shared/m_string.js"

export const str_value = "value" as const 
export type t_str_value = typeof str_value

export const str_value_validation_strRegex = `${str_value}_${str_validation_strRegex}` as const
export type t_str_value_validation_strRegex = typeof str_value_validation_strRegex
export type t_value_validation_strRegex = t_strRegex

export const df_value_validation_strRegex = embedBeginAndEndLineRegexStr(embedGroupStrRegex("[\\S\\s]*"))
export type t_df_value_validation_strRegex = typeof df_value_validation_strRegex

export const str_joinChar_group = "joinChar_group" as const
export type t_str_joinChar_group = typeof str_joinChar_group

export const df_joinChar_group = " " as const
export type t_df_joinChar_group = typeof df_joinChar_group

export const str_value_init = `${str_value}_${str_init}` as const
export type t_str_value_init = typeof str_value_init
export type t_value_init = string


export const empty_value  = emptyStr
export type t_empty_value = typeof empty_value
export const isEmptyValue = isStrEmpty

export const df_value_init = empty_value
export type t_df_value_init = typeof df_value_init

export const df :{
    [str_value_init] : t_df_value_init,
    [str_value_validation_strRegex] : t_df_value_validation_strRegex,
    [str_joinChar_group] : t_df_joinChar_group
} ={
    [str_value_init] :   df_value_init,
    [str_value_validation_strRegex] : df_value_validation_strRegex,
    [str_joinChar_group] : df_joinChar_group
} as const 