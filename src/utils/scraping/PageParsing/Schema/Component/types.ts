
import { ITypeChilds } from "../../TypeChilds/TypeChilds.js";
import { t_noneCompClassName, t_noneChildType, noneCompClassName, noneChildType } from "../../TypeChilds/types.js";
import { _Component } from "../_Component/_Component.js";



export  const  empty_child_component :  undefined  = undefined
export type t_empty_child_component = typeof empty_child_component
export type t_child_component <classname extends string > = classname extends t_noneCompClassName ? t_empty_child_component :  ITypeChilds<classname> 
type t_isEmptyChildComponent < T extends t_child_component<string> > = T extends t_empty_child_component ? true : false 
export const isEmptyChildComponent = < T extends t_child_component<string> > (child_component : T)  => {
    return (child_component === empty_child_component) as t_isEmptyChildComponent<T>
}



export  const  empty_childs_components :  t_empty_child_component[]  = [empty_child_component]
export type t_empty_childs_components = typeof empty_childs_components
export type t_childs_components <unionclassname extends string > = t_child_component<unionclassname>[]
type t_isEmptyChildsComponents< T extends t_childs_components<string> > =  T extends t_empty_childs_components ? true : false 
export const isEmptyChildsComponents = < T extends t_childs_components<string> > (childs_components : T)  => {
    return childs_components.length ==0 || (childs_components.length == 1 && (childs_components[0] === empty_childs_components[0])) as t_isEmptyChildsComponents<T>//TODO not correct union but necessary 
}



export const str_type = "type" as const 
export type t_str_type =  typeof str_type
export function getStrType (){
    return "type"

}



export const str_childs_components = "childs_components" as const
export type t_str_childs_components = typeof str_childs_components

export const str_class_name = "class_name" as const
export type t_str_class_name =  typeof str_class_name





export const df:{
    [str_childs_components ]: t_empty_childs_components,
    [str_class_name] : t_noneCompClassName,
    [str_type] : t_noneChildType,
} & typeof _Component.df = {
    ..._Component.df ,
    [str_childs_components ] : empty_childs_components ,
    [str_class_name] :  noneCompClassName,
    [str_type] :  noneChildType,
}

