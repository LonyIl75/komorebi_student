import { arrToUnion} from "@/../shared/type.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import { FunctionalWrapperJsonComponent } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/FunctionalWrapperJsonComponents.js";
import { IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { empty_childSelectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getChildArr, t_getChildTypeFromArrComponent, t_getClassNameTypeFromArrComponent } from "@/utils/scraping/PageParsing/types.js";
import { getLespepitestechHelpers, enum_lespepitestech_style } from "../helpers.js";
import {str_attribute_name } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { lespepitestech_imgImage_selectors } from "./types.js";


const _1_arr_classNameType_lespepitestech_utilMain= [
    //'Image','ImageValue'
] as const

const _2_arr_classNameType_lespepitestech_utilMain = [
] as const

export const arr_classNameType_lespepitestech_utilMain = [ ..._1_arr_classNameType_lespepitestech_utilMain , ..._2_arr_classNameType_lespepitestech_utilMain] as const

export type t_arr_classNameType_lespepitestech_utilMain = typeof arr_classNameType_lespepitestech_utilMain

export type t_union_classNameType_lespepitestech_utilMain = arrToUnion<t_arr_classNameType_lespepitestech_utilMain>

export const arr_lespepitestech_utilMain  = [
        /*getChildArr<t_arr_classNameType_lespepitestech_utilMain,0,[1]>(arr_classNameType_lespepitestech_utilMain,0,[1]),
        getChildArr<t_arr_classNameType_lespepitestech_utilMain,1> (arr_classNameType_lespepitestech_utilMain,1),*/
] as const

export type t_arr_lespepitestech_utilMain = typeof arr_lespepitestech_utilMain


export type t_arr_childType_lespepitestech_utilMain = Readonly<t_getChildTypeFromArrComponent<t_union_classNameType_lespepitestech_utilMain,t_arr_lespepitestech_utilMain>>
export type t_union_childType_lespepitestech_utilMain = arrToUnion<t_arr_childType_lespepitestech_utilMain>

type t_union_all = t_union_classNameType_lespepitestech_utilMain
const lespepitestech_utilMain_helpers = getLespepitestechHelpers<t_union_all>()


const __IJsonComponents_lespepitestech_utilMain : _IJsonComponents<t_union_classNameType_lespepitestech_utilMain> = {

    /*[_1_arr_classNameType_lespepitestech_utilMain[0]]:{
        selectors : [Selector.cst_onePropAndTagg(classProp,_1_arr_classNameType_lespepitestech_utilMain[0],"span",containOp).toString()] ,
        childs_selectors : [
            lespepitestech_imgImage_selectors
        ],

    },*/
   
} as const

export type t__IJsonComponents_lespepitestech_utilMain = typeof __IJsonComponents_lespepitestech_utilMain
export type t_IJsonComponents_lespepitestech_utilMain = IJsonComponents< t_getClassNameTypeFromArrComponent<t_union_classNameType_lespepitestech_utilMain,t_arr_lespepitestech_utilMain>,t_union_classNameType_lespepitestech_utilMain, t_arr_lespepitestech_utilMain>

export  const fjson_lespepitestech_utilMain = new FunctionalWrapperJsonComponent<t_arr_classNameType_lespepitestech_utilMain,t_union_classNameType_lespepitestech_utilMain,t_arr_lespepitestech_utilMain,t__IJsonComponents_lespepitestech_utilMain>(arr_classNameType_lespepitestech_utilMain,arr_lespepitestech_utilMain,__IJsonComponents_lespepitestech_utilMain)
export const json_lespepitestech_utilMain = fjson_lespepitestech_utilMain.json
