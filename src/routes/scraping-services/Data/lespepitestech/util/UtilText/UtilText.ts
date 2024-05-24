import getCurrentLine from "get-current-line"
import { getChildArr, t_getChildTypeFromArrComponent, t_getClassNameTypeFromArrComponent } from "@/utils/scraping/PageParsing/types.js"
import { arrToUnion } from "@shared/type.js"
import { enum_lespepitestech_style, getLespepitestechHelpers } from "../helpers.js"
import { lespepitestech_spanText_selectors } from "./types.js"
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js"
import { FunctionalWrapperJsonComponent } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/FunctionalWrapperJsonComponents.js"
import { IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js"
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js"
import { _IComponent, _Component } from "@/utils/scraping/PageParsing/Schema/_Component/_Component.js"
import { strToSelector } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js"
import { ValTextContent } from "@/utils/scraping/PageParsing/Schema/_Component/ValTextContent/ValTextContent.js"

const _1_arr_classNameType_lespepitestech_utilText = [
] as const

const _2_arr_classNameType_lespepitestech_utilText = [
] as const

export const arr_classNameType_lespepitestech_utilText = [ ..._1_arr_classNameType_lespepitestech_utilText , ..._2_arr_classNameType_lespepitestech_utilText] as const

export type t_arr_classNameType_lespepitestech_utilText = typeof arr_classNameType_lespepitestech_utilText

export type t_union_classNameType_lespepitestech_utilText = arrToUnion<t_arr_classNameType_lespepitestech_utilText>

export const arr_lespepitestech_utilText = [
        //getChildArr<t_arr_classNameType_lespepitestech_utilText,0> (arr_classNameType_lespepitestech_utilText,0),
] as const 

export type t_arr_lespepitestech_utilText = typeof arr_lespepitestech_utilText


export type t_arr_childType_lespepitestech_utilText = Readonly<t_getChildTypeFromArrComponent<t_union_classNameType_lespepitestech_utilText,t_arr_lespepitestech_utilText>>
export type t_union_childType_lespepitestech_expert = arrToUnion<t_arr_childType_lespepitestech_utilText>

type t_union_all = t_union_classNameType_lespepitestech_utilText
const lespepitestech_utilText_helpers = getLespepitestechHelpers<t_union_all>()

export const df__IComponent_lespepitestech_utilText :_IComponent = {
    childs_selectors : [lespepitestech_spanText_selectors],
} as const 

const getDfLespepitestechTextIJsonComponent = <arrClassName extends readonly t_union_classNameType_lespepitestech_utilText[] ,  t_idx extends  number >(arr_className : arrClassName ,idx:t_idx,isDfSelectors : boolean = true  , _json : _IComponent = df__IComponent_lespepitestech_utilText )  :_IComponent=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const className :arrClassName[t_idx] = isDfSelectors ? arr_className[idx] : undefined 
    const _selectors = className ? [lespepitestech_utilText_helpers.val_selector(className).toString()] : undefined 
    return new _Component(_selectors, _json.childs_selectors, _json.isScoped, [...ValTextContent.dfArgsCst], _json.childs_attributes)
}


const __IJsonComponents_lespepitestech_utilText : _IJsonComponents<t_union_classNameType_lespepitestech_utilText> = {
    //[arr_classNameType_lespepitestech_utilText[0]]:getDfLespepitestechTextIJsonComponent<t_arr_classNameType_lespepitestech_utilText,0>(arr_classNameType_lespepitestech_utilText,0),
} as const

export type t__IJsonComponents_lespepitestech_utilText = typeof __IJsonComponents_lespepitestech_utilText
export type t_IJsonComponents_lespepitestech_utilText = IJsonComponents<t_getClassNameTypeFromArrComponent<t_union_classNameType_lespepitestech_utilText,t_arr_lespepitestech_utilText>,t_union_classNameType_lespepitestech_utilText,t_arr_lespepitestech_utilText>

export  const fjson_lespepitestech_utilText = new FunctionalWrapperJsonComponent<t_arr_classNameType_lespepitestech_utilText,t_union_classNameType_lespepitestech_utilText,t_arr_lespepitestech_utilText,t__IJsonComponents_lespepitestech_utilText>(arr_classNameType_lespepitestech_utilText,arr_lespepitestech_utilText,__IJsonComponents_lespepitestech_utilText)
export const json_lespepitestech_utilText = fjson_lespepitestech_utilText.json