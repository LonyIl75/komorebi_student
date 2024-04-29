import { arrToUnion} from "@/../shared/type.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import { FunctionalWrapperJsonComponent } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/FunctionalWrapperJsonComponents.js";
import { IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { empty_childSelectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getChildArr, t_getChildTypeFromArrComponent, t_getClassNameTypeFromArrComponent } from "@/utils/scraping/PageParsing/types.js";
import { getBooksToscrapeHelpers, enum_booksToscrape_style } from "../helpers.js";
import {str_attribute_name } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { booksToscrape_imgImage_selectors } from "./types.js";


const _1_arr_classNameType_booksToscrape_utilMain= [
    //'Image','ImageValue'
] as const

const _2_arr_classNameType_booksToscrape_utilMain = [
] as const

export const arr_classNameType_booksToscrape_utilMain = [ ..._1_arr_classNameType_booksToscrape_utilMain , ..._2_arr_classNameType_booksToscrape_utilMain] as const

export type t_arr_classNameType_booksToscrape_utilMain = typeof arr_classNameType_booksToscrape_utilMain

export type t_union_classNameType_booksToscrape_utilMain = arrToUnion<t_arr_classNameType_booksToscrape_utilMain>

export const arr_booksToscrape_utilMain  = [
        /*getChildArr<t_arr_classNameType_booksToscrape_utilMain,0,[1]>(arr_classNameType_booksToscrape_utilMain,0,[1]),
        getChildArr<t_arr_classNameType_booksToscrape_utilMain,1> (arr_classNameType_booksToscrape_utilMain,1),*/
] as const

export type t_arr_booksToscrape_utilMain = typeof arr_booksToscrape_utilMain


export type t_arr_childType_booksToscrape_utilMain = Readonly<t_getChildTypeFromArrComponent<t_union_classNameType_booksToscrape_utilMain,t_arr_booksToscrape_utilMain>>
export type t_union_childType_booksToscrape_utilMain = arrToUnion<t_arr_childType_booksToscrape_utilMain>

type t_union_all = t_union_classNameType_booksToscrape_utilMain
const booksToscrape_utilMain_helpers = getBooksToscrapeHelpers<t_union_all>()


const __IJsonComponents_booksToscrape_utilMain : _IJsonComponents<t_union_classNameType_booksToscrape_utilMain> = {

    /*[_1_arr_classNameType_booksToscrape_utilMain[0]]:{
        selectors : [Selector.cst_onePropAndTagg(classProp,_1_arr_classNameType_booksToscrape_utilMain[0],"span",containOp).toString()] ,
        childs_selectors : [
            booksToscrape_imgImage_selectors
        ],

    },*/
   
} as const

export type t__IJsonComponents_booksToscrape_utilMain = typeof __IJsonComponents_booksToscrape_utilMain
export type t_IJsonComponents_booksToscrape_utilMain = IJsonComponents< t_getClassNameTypeFromArrComponent<t_union_classNameType_booksToscrape_utilMain,t_arr_booksToscrape_utilMain>,t_union_classNameType_booksToscrape_utilMain, t_arr_booksToscrape_utilMain>

export  const fjson_booksToscrape_utilMain = new FunctionalWrapperJsonComponent<t_arr_classNameType_booksToscrape_utilMain,t_union_classNameType_booksToscrape_utilMain,t_arr_booksToscrape_utilMain,t__IJsonComponents_booksToscrape_utilMain>(arr_classNameType_booksToscrape_utilMain,arr_booksToscrape_utilMain,__IJsonComponents_booksToscrape_utilMain)
export const json_booksToscrape_utilMain = fjson_booksToscrape_utilMain.json
