import { arrToUnion} from "@/../shared/type.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import { FunctionalWrapperJsonComponent } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/FunctionalWrapperJsonComponents.js";
import { IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { empty_childSelectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getChildArr, t_getChildTypeFromArrComponent, t_getClassNameTypeFromArrComponent } from "@/utils/scraping/PageParsing/types.js";
import { getEntreprise_Helpers, enum_entreprise__style } from "../helpers.js";
import {str_attribute_name } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { entreprise__imgImage_selectors } from "./types.js";


const _1_arr_classNameType_entreprise__utilMain= [
    //'Image','ImageValue'
] as const

const _2_arr_classNameType_entreprise__utilMain = [
] as const

export const arr_classNameType_entreprise__utilMain = [ ..._1_arr_classNameType_entreprise__utilMain , ..._2_arr_classNameType_entreprise__utilMain] as const

export type t_arr_classNameType_entreprise__utilMain = typeof arr_classNameType_entreprise__utilMain

export type t_union_classNameType_entreprise__utilMain = arrToUnion<t_arr_classNameType_entreprise__utilMain>

export const arr_entreprise__utilMain  = [
        /*getChildArr<t_arr_classNameType_entreprise__utilMain,0,[1]>(arr_classNameType_entreprise__utilMain,0,[1]),
        getChildArr<t_arr_classNameType_entreprise__utilMain,1> (arr_classNameType_entreprise__utilMain,1),*/
] as const

export type t_arr_entreprise__utilMain = typeof arr_entreprise__utilMain


export type t_arr_childType_entreprise__utilMain = Readonly<t_getChildTypeFromArrComponent<t_union_classNameType_entreprise__utilMain,t_arr_entreprise__utilMain>>
export type t_union_childType_entreprise__utilMain = arrToUnion<t_arr_childType_entreprise__utilMain>

type t_union_all = t_union_classNameType_entreprise__utilMain
const entreprise__utilMain_helpers = getEntreprise_Helpers<t_union_all>()


const __IJsonComponents_entreprise__utilMain : _IJsonComponents<t_union_classNameType_entreprise__utilMain> = {

    /*[_1_arr_classNameType_entreprise__utilMain[0]]:{
        selectors : [Selector.cst_onePropAndTagg(classProp,_1_arr_classNameType_entreprise__utilMain[0],"span",containOp).toString()] ,
        childs_selectors : [
            entreprise__imgImage_selectors
        ],

    },*/
   
} as const

export type t__IJsonComponents_entreprise__utilMain = typeof __IJsonComponents_entreprise__utilMain
export type t_IJsonComponents_entreprise__utilMain = IJsonComponents< t_getClassNameTypeFromArrComponent<t_union_classNameType_entreprise__utilMain,t_arr_entreprise__utilMain>,t_union_classNameType_entreprise__utilMain, t_arr_entreprise__utilMain>

export  const fjson_entreprise__utilMain = new FunctionalWrapperJsonComponent<t_arr_classNameType_entreprise__utilMain,t_union_classNameType_entreprise__utilMain,t_arr_entreprise__utilMain,t__IJsonComponents_entreprise__utilMain>(arr_classNameType_entreprise__utilMain,arr_entreprise__utilMain,__IJsonComponents_entreprise__utilMain)
export const json_entreprise__utilMain = fjson_entreprise__utilMain.json
