import { arrToUnion} from "@/../shared/type.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import { FunctionalWrapperJsonComponent } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/FunctionalWrapperJsonComponents.js";
import { IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { empty_childSelectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getChildArr, t_getChildTypeFromArrComponent, t_getClassNameTypeFromArrComponent } from "@/utils/scraping/PageParsing/types.js";
import { getSocieteTechHelpers, enum_societeTech_style } from "../helpers.js";
import {str_attribute_name } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { societeTech_imgImage_selectors } from "./types.js";


const _1_arr_classNameType_societeTech_utilMain= [
    //'Image','ImageValue'
] as const

const _2_arr_classNameType_societeTech_utilMain = [
] as const

export const arr_classNameType_societeTech_utilMain = [ ..._1_arr_classNameType_societeTech_utilMain , ..._2_arr_classNameType_societeTech_utilMain] as const

export type t_arr_classNameType_societeTech_utilMain = typeof arr_classNameType_societeTech_utilMain

export type t_union_classNameType_societeTech_utilMain = arrToUnion<t_arr_classNameType_societeTech_utilMain>

export const arr_societeTech_utilMain  = [
        /*getChildArr<t_arr_classNameType_societeTech_utilMain,0,[1]>(arr_classNameType_societeTech_utilMain,0,[1]),
        getChildArr<t_arr_classNameType_societeTech_utilMain,1> (arr_classNameType_societeTech_utilMain,1),*/
] as const

export type t_arr_societeTech_utilMain = typeof arr_societeTech_utilMain


export type t_arr_childType_societeTech_utilMain = Readonly<t_getChildTypeFromArrComponent<t_union_classNameType_societeTech_utilMain,t_arr_societeTech_utilMain>>
export type t_union_childType_societeTech_utilMain = arrToUnion<t_arr_childType_societeTech_utilMain>

type t_union_all = t_union_classNameType_societeTech_utilMain
const societeTech_utilMain_helpers = getSocieteTechHelpers<t_union_all>()


const __IJsonComponents_societeTech_utilMain : _IJsonComponents<t_union_classNameType_societeTech_utilMain> = {

    /*[_1_arr_classNameType_societeTech_utilMain[0]]:{
        selectors : [Selector.cst_onePropAndTagg(classProp,_1_arr_classNameType_societeTech_utilMain[0],"span",containOp).toString()] ,
        childs_selectors : [
            societeTech_imgImage_selectors
        ],

    },*/
   
} as const

export type t__IJsonComponents_societeTech_utilMain = typeof __IJsonComponents_societeTech_utilMain
export type t_IJsonComponents_societeTech_utilMain = IJsonComponents< t_getClassNameTypeFromArrComponent<t_union_classNameType_societeTech_utilMain,t_arr_societeTech_utilMain>,t_union_classNameType_societeTech_utilMain, t_arr_societeTech_utilMain>

export  const fjson_societeTech_utilMain = new FunctionalWrapperJsonComponent<t_arr_classNameType_societeTech_utilMain,t_union_classNameType_societeTech_utilMain,t_arr_societeTech_utilMain,t__IJsonComponents_societeTech_utilMain>(arr_classNameType_societeTech_utilMain,arr_societeTech_utilMain,__IJsonComponents_societeTech_utilMain)
export const json_societeTech_utilMain = fjson_societeTech_utilMain.json
