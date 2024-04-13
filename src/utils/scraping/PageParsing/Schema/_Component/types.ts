import { emptyStr, isStrEmpty } from "@shared/m_string.js";
import { selectors } from "../../../DOMElements/Selector/_Selector/type.js";
import { ValTextContent } from "./ValTextContent/ValTextContent.js";

export const str_selectors = "selectors" as const
export type t_str_selectors = typeof str_selectors 
  

export const str_childs_selectors = "childs_selectors" as const
export type t_str_childs_selectors = typeof str_childs_selectors

export type t_childSelector = selectors;
export type t_childsSelectors =  [ ...  t_childSelector[] ] ;
export  const  empty_childSelectors :[[]]  = [[]]
export type t_empty_childsSelectors = typeof empty_childSelectors
type t_isEmptyChildSelectors <T extends t_childsSelectors> = T extends t_empty_childsSelectors ? true : false
export const isEmptyChildSelectors = <T extends t_childsSelectors>(childSelectors : T)  => {
    return (childSelectors.length == 1 && childSelectors[0].length == 0) as t_isEmptyChildSelectors<T>
}


export const str_childs_attributes = "childs_attributes" as const
export type t_str_childs_attributes = typeof str_childs_attributes

export const str_isScoped = "isScoped" as const
export type t_str_isScoped =  typeof str_isScoped
export const df_isScoped :true  = true


export const nil_value : undefined  = undefined 
export type t_nil_value = typeof nil_value
export type t_isNilValue <T extends string> = T extends t_nil_value ? true : false
export const isNilValue = < T extends string> (value : T) => (value === nil_value) as t_isNilValue<T>

export const df_value = emptyStr 
export type t_df_value = typeof df_value

export const cannotInitializedValue = (value : string )=> {
    if(value !== undefined && !isStrEmpty(value) ) throw new Error("Value cannot be initialized ")
    else value = df_value
    return value as t_df_value
}


export const df :{
    [str_childs_selectors] : t_empty_childsSelectors,//[[ChildAttributeType.df_selector]]
    [str_isScoped] : typeof df_isScoped,
} & typeof ValTextContent.df
= {
    [str_childs_selectors] :  empty_childSelectors ,
    [str_isScoped] : df_isScoped ,
    ...ValTextContent.df
}