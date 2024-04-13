
import { getChildArr, rootClassName, t_getLeaf } from "@/utils/scraping/PageParsing/types.js";
import { MapRegexToIdPath, pagination_field, t_mapRegexToIdPathFromArrArr } from "@shared/m_regexMapping.js";
import { arrToUnion, ApplyGetElementNumberIArrArr, addSuffix, removePrefix } from "@shared/type.js";
import { pourdebon_bouchers_rootClassName, pourdebon_bouchers_mainOfComponents } from "./types.js";
import { ScrapingComponent } from "@/utils/scraping/PageParsing/ComponentObject.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import {FunctionalWrapperJsonComponentConfig, IFunctionalWrapperJsonComponent}from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/IFunctionalWrapperJsonComponents.js";
import { fieldName_st_cst_buildFromFWJson, str_get_arrClassName } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _IComponent, _Component } from "@/utils/scraping/PageParsing/Schema/_Component/_Component.js";
import { Selector, char_child, classProp, containOp, fct_mod_not, idProp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { str_childs_selectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getConfig } from "@shared/m_json.js";
import { getPourdebonHelpers } from "../../util/helpers.js";
import { fjson_pourdebon_utilMain } from "../../util/UtilMain/UtilMain.js";
import { t_arr_classNameType_pourdebon_utilText, t_union_classNameType_pourdebon_utilText, t_arr_pourdebon_utilText,t__IJsonComponents_pourdebon_utilText, fjson_pourdebon_utilText } from "../../util/UtilText/UtilText.js";
import { str_attribute_name } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import ChildAttributeType from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/ChildAttributeType.js";

const arr_classNameType_pourdebon_bouchers = [
    rootClassName,pourdebon_bouchers_rootClassName,"BouchersContainerGrid",
    "BouchersContainerPagination","BouchersPagination","BouchersSelectedPagination","BouchersNextPagination",
] as const  

export type t_arr_classNameType_pourdebon_bouchers = typeof arr_classNameType_pourdebon_bouchers

export type t_union_classNameType_pourdebon_bouchers = arrToUnion<t_arr_classNameType_pourdebon_bouchers>

const imported_classNameTypeParent_pourdebon_main =  [] as const
type t_imported_classNameTypeParent_pourdebon_main = typeof imported_classNameTypeParent_pourdebon_main

const imported_classNameTypeParent_pourdebon_text = [] as const
type t_imported_classNameTypeParent_pourdebon_text = typeof imported_classNameTypeParent_pourdebon_text


export const arr_pourdebon_bouchers  = 
    [
        getChildArr<t_arr_classNameType_pourdebon_bouchers,0,[1]>(arr_classNameType_pourdebon_bouchers,0,[1]),
        getChildArr<t_arr_classNameType_pourdebon_bouchers,1,[2]>(arr_classNameType_pourdebon_bouchers,1,[2]),
        getChildArr<t_arr_classNameType_pourdebon_bouchers,3,[4]>(arr_classNameType_pourdebon_bouchers,3,[4]),
        getChildArr<t_arr_classNameType_pourdebon_bouchers,4,[5,6]>(arr_classNameType_pourdebon_bouchers,4,[5,6]),
        getChildArr<t_arr_classNameType_pourdebon_bouchers,5>(arr_classNameType_pourdebon_bouchers,5),
        getChildArr<t_arr_classNameType_pourdebon_bouchers,6>(arr_classNameType_pourdebon_bouchers,6),
        getChildArr<t_arr_classNameType_pourdebon_bouchers,2>(arr_classNameType_pourdebon_bouchers,2),
    ] as const

export type t_arr_pourdebon_bouchers = typeof arr_pourdebon_bouchers


type t_classNameType_leaf_pourdebon_bouchers =  t_getLeaf < t_union_classNameType_pourdebon_bouchers, t_arr_pourdebon_bouchers> 

const imported_classNameType_pourdebon_main = [] as const 
type t_imported_classNameType_pourdebon_main = typeof imported_classNameType_pourdebon_main


const imported_classNameType_pourdebon_text = [] as const 
type t_imported_classNameType_pourdebon_text = typeof imported_classNameType_pourdebon_text

type _t_union_notSpecified_classNameType = 'Container' 

type t_classNameType_notSpecified_union_text = removePrefix<'Bouchers',t_union_classNameType_pourdebon_bouchers|_t_union_notSpecified_classNameType> extends infer A ?
 A extends string ? addSuffix <A,'Text'> extends infer B ? B : never : never :never 

type t_union_notSpecified_classNameType = _t_union_notSpecified_classNameType| t_classNameType_notSpecified_union_text

type t_classNameType_pourdebon_bouchers = t_union_classNameType_pourdebon_bouchers|t_imported_classNameType_pourdebon_main[number]|t_imported_classNameType_pourdebon_text[number]|t_union_notSpecified_classNameType
const pourdebon_bouchers_helpers = getPourdebonHelpers<t_classNameType_pourdebon_bouchers>()


const __IJsonComponents_leaf_pourdebon_bouchers : _IJsonComponents<t_classNameType_leaf_pourdebon_bouchers> = {
    [arr_classNameType_pourdebon_bouchers[2]]:{
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_pourdebon_bouchers[5]]:{
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_pourdebon_bouchers[6]]:{
        childs_selectors : Component.df[str_childs_selectors],
        childs_attributes : [{[str_attribute_name] : "href",selector : "a"}],
    },
}
   
const __IJsonComponents_pourdebon_bouchers : _IJsonComponents<t_union_classNameType_pourdebon_bouchers> = {

    ...__IJsonComponents_leaf_pourdebon_bouchers,

    [rootClassName]:{
        ...pourdebon_bouchers_mainOfComponents
    },
    [pourdebon_bouchers_rootClassName] :{
        childs_selectors : [...pourdebon_bouchers_helpers.arr_selector(
            [
                [           
                    Selector.cst_onePropAndTagg(classProp,'pagination',"div",containOp,fct_mod_not),
                ],
                [
                    Selector.cst_onePropAndTagg(classProp,'pagination',"ul",containOp),
                ],
            ],
            (str_selector)=>
                Selector.cst_onePropAndTagg(classProp,'container',"div",containOp).toString() + ":has(" + char_child + str_selector +")")
            ]
    },
    BouchersContainerPagination :{
        childs_selectors : 
            [
                [Selector.cst_onePropAndTagg(classProp,'pagination',"ul",containOp).toString()]
            ]
    },
    BouchersPagination:{
        childs_selectors : [
            [
                Selector.cst_onePropAndTagg(classProp,'active',"li",containOp).toString(),
                Selector.cst_onePropAndTagg(classProp,'current',"li",containOp).toString(),
                Selector.cst_onePropAndTagg(classProp,'selected',"li",containOp).toString(),
            ],
            [
                Selector.cst_onePropAndTagg(classProp,'active',"li",containOp,fct_mod_not).toString()+":has(> a)",
                Selector.cst_onePropAndTagg(classProp,'current',"li",containOp,fct_mod_not).toString()+":has(> a)",
                Selector.cst_onePropAndTagg(classProp,'selected',"li",containOp,fct_mod_not).toString()+":has(> a)",
            
            ]
        ]
    }

}

export type t__IJsonComponents_pourdebon_bouchers = typeof __IJsonComponents_leaf_pourdebon_bouchers

const imported_fjson_pourdebon_utilMain = fjson_pourdebon_utilMain.getSubJsonComponent<t_imported_classNameType_pourdebon_main>(imported_classNameType_pourdebon_main)
const imported_fjson_pourdebon_bouchers = imported_fjson_pourdebon_utilMain.getAddedSubJsonComponent< t_arr_classNameType_pourdebon_utilText,t_union_classNameType_pourdebon_utilText,t_arr_pourdebon_utilText,t__IJsonComponents_pourdebon_utilText,t_imported_classNameType_pourdebon_text>(imported_classNameType_pourdebon_text,fjson_pourdebon_utilText)

type t_imported_fjson_pourdebon_bouchers = typeof imported_fjson_pourdebon_bouchers

type t_arrClassName_import = t_imported_fjson_pourdebon_bouchers extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
type t_unionClassName_import = t_imported_fjson_pourdebon_bouchers extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
type t_arrChilds_imported_bouchers = t_imported_fjson_pourdebon_bouchers extends IFunctionalWrapperJsonComponent <any,any,infer A , any >? A : never 
type t__IJsonComponent_imported_bouchers = t_imported_fjson_pourdebon_bouchers extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

export const fjson_pourdebon_bouchers  = imported_fjson_pourdebon_bouchers[fieldName_st_cst_buildFromFWJson](
    new FunctionalWrapperJsonComponentConfig(arr_classNameType_pourdebon_bouchers,arr_pourdebon_bouchers,__IJsonComponents_pourdebon_bouchers)
)

type t_fjson_pourdebon_bouchers = typeof fjson_pourdebon_bouchers


export type t_arrClassName_bouchers = t_fjson_pourdebon_bouchers extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
export type t_unionClassName_bouchers = t_fjson_pourdebon_bouchers extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
export type t_arrChilds_bouchers = t_fjson_pourdebon_bouchers extends IFunctionalWrapperJsonComponent <any,any, infer A ,any >? A : never
export type t_IJsonComponent_bouchers = t_fjson_pourdebon_bouchers extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never


export const configJson_pourdebon_bouchers  = fjson_pourdebon_bouchers[getConfig]()
export type t_configJson_pourdebon_bouchers = typeof configJson_pourdebon_bouchers

export const json_pourdebon_bouchers  = fjson_pourdebon_bouchers["toJson"]()
export type t_json_pourdebon_bouchers = typeof json_pourdebon_bouchers

const required_field = ["BodyContent"] as const 
const optional_field = [] as const

const arr_pathId = [...required_field,...optional_field,...pagination_field] as const 
type t_arr_pathId =  typeof arr_pathId
type t_path_id = t_arr_pathId[number]

export type t_resParsing = {
    [r_k in typeof required_field[number]] : string
} 
&{
    [key in t_path_id] ?: string
}

const _mapRegexPathIds_pourdebon_bouchers = [
    [[rootClassName,pourdebon_bouchers_rootClassName,["BouchersContainerGrid"]]
    ,["BodyContent"]],
    [[rootClassName,pourdebon_bouchers_rootClassName,"BouchersContainerPagination","BouchersPagination",["BouchersNextPagination"]],["NextPagination"]],
    [[rootClassName,pourdebon_bouchers_rootClassName,"BouchersContainerPagination","BouchersPagination",["BouchersSelectedPagination"]],["SelectedPagination"]],
 ] as const 



const mapRegexPathIds_pourdebon_bouchers = _mapRegexPathIds_pourdebon_bouchers.map((e)=> [MapRegexToIdPath.convertArrKeyInRegexKey(e[0]),e[1]]) as unknown   as t_mapRegexToIdPathFromArrArr<t_path_id,t_arrClassName_bouchers,typeof _mapRegexPathIds_pourdebon_bouchers >
type t_mapRegexPathIds_pourdebon_bouchers = typeof mapRegexPathIds_pourdebon_bouchers

type t_unionRegex_mapRegexPathIds_pourdebon_bouchers = arrToUnion<ApplyGetElementNumberIArrArr<[t_mapRegexPathIds_pourdebon_bouchers],0>[0]>

const mapRegex_pourdebon_bouchers = new MapRegexToIdPath<t_unionRegex_mapRegexPathIds_pourdebon_bouchers,t_path_id,t_arrClassName_bouchers,t_unionClassName_bouchers>( {_arrClassname : fjson_pourdebon_bouchers[str_get_arrClassName]()} , { _mapRegexToIdPath : mapRegexPathIds_pourdebon_bouchers } ) 

export type t_unionRegex_mapRegex_pourdebon_bouchers = typeof mapRegex_pourdebon_bouchers extends MapRegexToIdPath<infer A , any , any, any  > ? A : never
export type t_unionIdPath_mapRegex_pourdebon_bouchers = typeof mapRegex_pourdebon_bouchers extends MapRegexToIdPath<any , infer A , any, any  > ? A : never


export const scrapingComponent_pourdebon_bouchers = new ScrapingComponent<t_unionRegex_mapRegex_pourdebon_bouchers,t_unionIdPath_mapRegex_pourdebon_bouchers,t_arrClassName_bouchers,t_unionClassName_bouchers,t_arrChilds_bouchers,t_IJsonComponent_bouchers>( mapRegex_pourdebon_bouchers , fjson_pourdebon_bouchers  )
export type t_scrapingComponent_pourdebon_bouchers = typeof scrapingComponent_pourdebon_bouchers
