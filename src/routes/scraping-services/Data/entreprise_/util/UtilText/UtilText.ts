import { getChildArr, t_getChildTypeFromArrComponent, t_getClassNameTypeFromArrComponent } from "@/utils/scraping/PageParsing/types.js"
import { arrToUnion } from "@shared/type.js"
import { enum_entreprise__style, getEntreprise_Helpers } from "../helpers.js"
import { entreprise__spanText_selectors } from "./types.js"
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js"
import { FunctionalWrapperJsonComponent } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/FunctionalWrapperJsonComponents.js"
import { IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js"
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js"
import { _IComponent, _Component } from "@/utils/scraping/PageParsing/Schema/_Component/_Component.js"
import { strToSelector } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js"
import { ValTextContent } from "@/utils/scraping/PageParsing/Schema/_Component/ValTextContent/ValTextContent.js"

const _1_arr_classNameType_entreprise__utilText = [
] as const

const _2_arr_classNameType_entreprise__utilText = [
] as const

export const arr_classNameType_entreprise__utilText = [ ..._1_arr_classNameType_entreprise__utilText , ..._2_arr_classNameType_entreprise__utilText] as const

export type t_arr_classNameType_entreprise__utilText = typeof arr_classNameType_entreprise__utilText

export type t_union_classNameType_entreprise__utilText = arrToUnion<t_arr_classNameType_entreprise__utilText>

export const arr_entreprise__utilText = [
        //getChildArr<t_arr_classNameType_entreprise__utilText,0> (arr_classNameType_entreprise__utilText,0),
] as const 

export type t_arr_entreprise__utilText = typeof arr_entreprise__utilText


export type t_arr_childType_entreprise__utilText = Readonly<t_getChildTypeFromArrComponent<t_union_classNameType_entreprise__utilText,t_arr_entreprise__utilText>>
export type t_union_childType_entreprise__expert = arrToUnion<t_arr_childType_entreprise__utilText>

type t_union_all = t_union_classNameType_entreprise__utilText
const entreprise__utilText_helpers = getEntreprise_Helpers<t_union_all>()

export const df__IComponent_entreprise__utilText :_IComponent = {
    childs_selectors : [entreprise__spanText_selectors],
} as const 

const getDfEntreprise_TextIJsonComponent = <arrClassName extends readonly t_union_classNameType_entreprise__utilText[] ,  t_idx extends  number >(arr_className : arrClassName ,idx:t_idx,isDfSelectors : boolean = true  , _json : _IComponent = df__IComponent_entreprise__utilText )  :_IComponent=> {
    const className :arrClassName[t_idx] = isDfSelectors ? arr_className[idx] : undefined 
    const _selectors = className ? [entreprise__utilText_helpers.val_selector(className).toString()] : undefined 
    return new _Component(_selectors, _json.childs_selectors, _json.isScoped, [...ValTextContent.dfArgsCst], _json.childs_attributes)
}


const __IJsonComponents_entreprise__utilText : _IJsonComponents<t_union_classNameType_entreprise__utilText> = {
    //[arr_classNameType_entreprise__utilText[0]]:getDfEntreprise_TextIJsonComponent<t_arr_classNameType_entreprise__utilText,0>(arr_classNameType_entreprise__utilText,0),
} as const

export type t__IJsonComponents_entreprise__utilText = typeof __IJsonComponents_entreprise__utilText
export type t_IJsonComponents_entreprise__utilText = IJsonComponents<t_getClassNameTypeFromArrComponent<t_union_classNameType_entreprise__utilText,t_arr_entreprise__utilText>,t_union_classNameType_entreprise__utilText,t_arr_entreprise__utilText>

export  const fjson_entreprise__utilText = new FunctionalWrapperJsonComponent<t_arr_classNameType_entreprise__utilText,t_union_classNameType_entreprise__utilText,t_arr_entreprise__utilText,t__IJsonComponents_entreprise__utilText>(arr_classNameType_entreprise__utilText,arr_entreprise__utilText,__IJsonComponents_entreprise__utilText)
export const json_entreprise__utilText = fjson_entreprise__utilText.json