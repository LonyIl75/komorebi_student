import { arrToUnion} from "@/../shared/type.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import { FunctionalWrapperJsonComponent } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/FunctionalWrapperJsonComponents.js";
import { IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { empty_childSelectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getChildArr, t_getChildTypeFromArrComponent, t_getClassNameTypeFromArrComponent } from "@/utils/scraping/PageParsing/types.js";
import { getForinovHelpers, enum_forinov_style } from "../helpers.js";
import {str_attribute_name } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { forinov_imgImage_selectors } from "./types.js";


const _1_arr_classNameType_forinov_utilMain= [
    //'Image','ImageValue'
] as const

const _2_arr_classNameType_forinov_utilMain = [
] as const

export const arr_classNameType_forinov_utilMain = [ ..._1_arr_classNameType_forinov_utilMain , ..._2_arr_classNameType_forinov_utilMain] as const

export type t_arr_classNameType_forinov_utilMain = typeof arr_classNameType_forinov_utilMain

export type t_union_classNameType_forinov_utilMain = arrToUnion<t_arr_classNameType_forinov_utilMain>

export const arr_forinov_utilMain  = [
        /*getChildArr<t_arr_classNameType_forinov_utilMain,0,[1]>(arr_classNameType_forinov_utilMain,0,[1]),
        getChildArr<t_arr_classNameType_forinov_utilMain,1> (arr_classNameType_forinov_utilMain,1),*/
] as const

export type t_arr_forinov_utilMain = typeof arr_forinov_utilMain


export type t_arr_childType_forinov_utilMain = Readonly<t_getChildTypeFromArrComponent<t_union_classNameType_forinov_utilMain,t_arr_forinov_utilMain>>
export type t_union_childType_forinov_utilMain = arrToUnion<t_arr_childType_forinov_utilMain>

type t_union_all = t_union_classNameType_forinov_utilMain
const forinov_utilMain_helpers = getForinovHelpers<t_union_all>()


const __IJsonComponents_forinov_utilMain : _IJsonComponents<t_union_classNameType_forinov_utilMain> = {

    /*[_1_arr_classNameType_forinov_utilMain[0]]:{
        selectors : [Selector.cst_onePropAndTagg(classProp,_1_arr_classNameType_forinov_utilMain[0],"span",containOp).toString()] ,
        childs_selectors : [
            forinov_imgImage_selectors
        ],

    },*/
   
} as const

export type t__IJsonComponents_forinov_utilMain = typeof __IJsonComponents_forinov_utilMain
export type t_IJsonComponents_forinov_utilMain = IJsonComponents< t_getClassNameTypeFromArrComponent<t_union_classNameType_forinov_utilMain,t_arr_forinov_utilMain>,t_union_classNameType_forinov_utilMain, t_arr_forinov_utilMain>

export  const fjson_forinov_utilMain = new FunctionalWrapperJsonComponent<t_arr_classNameType_forinov_utilMain,t_union_classNameType_forinov_utilMain,t_arr_forinov_utilMain,t__IJsonComponents_forinov_utilMain>(arr_classNameType_forinov_utilMain,arr_forinov_utilMain,__IJsonComponents_forinov_utilMain)
export const json_forinov_utilMain = fjson_forinov_utilMain.json
