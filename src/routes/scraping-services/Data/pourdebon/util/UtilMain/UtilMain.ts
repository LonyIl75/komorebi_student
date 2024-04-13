import { arrToUnion} from "@/../shared/type.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import { FunctionalWrapperJsonComponent } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/FunctionalWrapperJsonComponents.js";
import { IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { empty_childSelectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getChildArr, t_getChildTypeFromArrComponent, t_getClassNameTypeFromArrComponent } from "@/utils/scraping/PageParsing/types.js";
import { getPourdebonHelpers, enum_pourdebon_style } from "../helpers.js";
import {str_attribute_name } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { pourdebon_imgImage_selectors } from "./types.js";


const _1_arr_classNameType_pourdebon_utilMain= [
    'Image','ImageValue'
] as const

const _2_arr_classNameType_pourdebon_utilMain = [
] as const

export const arr_classNameType_pourdebon_utilMain = [ ..._1_arr_classNameType_pourdebon_utilMain , ..._2_arr_classNameType_pourdebon_utilMain] as const

export type t_arr_classNameType_pourdebon_utilMain = typeof arr_classNameType_pourdebon_utilMain

export type t_union_classNameType_pourdebon_utilMain = arrToUnion<t_arr_classNameType_pourdebon_utilMain>

export const arr_pourdebon_utilMain  = [
        getChildArr<t_arr_classNameType_pourdebon_utilMain,0,[1]>(arr_classNameType_pourdebon_utilMain,0,[1]),
        getChildArr<t_arr_classNameType_pourdebon_utilMain,1> (arr_classNameType_pourdebon_utilMain,1),
] as const

export type t_arr_pourdebon_utilMain = typeof arr_pourdebon_utilMain


export type t_arr_childType_pourdebon_utilMain = Readonly<t_getChildTypeFromArrComponent<t_union_classNameType_pourdebon_utilMain,t_arr_pourdebon_utilMain>>
export type t_union_childType_pourdebon_utilMain = arrToUnion<t_arr_childType_pourdebon_utilMain>

type t_union_all = t_union_classNameType_pourdebon_utilMain
const pourdebon_utilMain_helpers = getPourdebonHelpers<t_union_all>()


const __IJsonComponents_pourdebon_utilMain : _IJsonComponents<t_union_classNameType_pourdebon_utilMain> = {

    [_1_arr_classNameType_pourdebon_utilMain[0]]:{
        selectors : [Selector.cst_onePropAndTagg(classProp,_1_arr_classNameType_pourdebon_utilMain[0],"span",containOp).toString()] ,
        childs_selectors : [
            pourdebon_imgImage_selectors
        ],

    },
    [_1_arr_classNameType_pourdebon_utilMain[1]]:{
        selectors : [pourdebon_utilMain_helpers.val_selector(_1_arr_classNameType_pourdebon_utilMain[0]).toString()] ,
        childs_selectors : empty_childSelectors,
        childs_attributes : [{[str_attribute_name] : "src",selector : "img"}]//,{name : "alt",  value : ComponentJson.df_value,selector : "img"}], //TODO possibility declare childs_selectors and attributes , select on child then getAttributes

    }

} as const

export type t__IJsonComponents_pourdebon_utilMain = typeof __IJsonComponents_pourdebon_utilMain
export type t_IJsonComponents_pourdebon_utilMain = IJsonComponents< t_getClassNameTypeFromArrComponent<t_union_classNameType_pourdebon_utilMain,t_arr_pourdebon_utilMain>,t_union_classNameType_pourdebon_utilMain, t_arr_pourdebon_utilMain>

export  const fjson_pourdebon_utilMain = new FunctionalWrapperJsonComponent<t_arr_classNameType_pourdebon_utilMain,t_union_classNameType_pourdebon_utilMain,t_arr_pourdebon_utilMain,t__IJsonComponents_pourdebon_utilMain>(arr_classNameType_pourdebon_utilMain,arr_pourdebon_utilMain,__IJsonComponents_pourdebon_utilMain)
export const json_pourdebon_utilMain = fjson_pourdebon_utilMain.json