
import { buildArrClassNameType, getChildArr, rootClassName, t_getLeaf } from "@/utils/scraping/PageParsing/types.js";
import { MapRegexToIdPath, item_field, pagination_field, str_Pagination, t_mapRegexToIdPathFromArrArr } from "@shared/m_regexMapping.js";
import { arrToUnion, ApplyGetElementNumberIArrArr, addSuffix, removePrefix } from "@shared/type.js";
import { societeTech_startupsMtp_rootClassName, societeTech_startupsMtp_mainOfComponents, str_StartupsMtp, t_str_StartupsMtp, embedName } from "./types.js";
import { ScrapingComponent, getTypesFromImportedComponentAndFct } from "@/utils/scraping/PageParsing/ComponentObject.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import {FunctionalWrapperJsonComponentConfig, IFunctionalWrapperJsonComponent}from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/IFunctionalWrapperJsonComponents.js";
import { fieldName_st_cst_buildFromFWJson, str_get_arrClassName } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _IComponent, _Component } from "@/utils/scraping/PageParsing/Schema/_Component/_Component.js";
import { Selector, SelectorProp, char_child, classProp, containOp, fct_mod_has, fct_mod_hasDirectChild, fct_mod_not, idProp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { nil_value, str_childs_selectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getConfig } from "@shared/m_json.js";
import { getSocieteTechHelpers } from "../../util/helpers.js";
import { fjson_societeTech_utilMain, json_societeTech_utilMain, t_IJsonComponents_societeTech_utilMain } from "../../util/UtilMain/UtilMain.js";
import { t_arr_classNameType_societeTech_utilText, t_union_classNameType_societeTech_utilText, t_arr_societeTech_utilText,t__IJsonComponents_societeTech_utilText, fjson_societeTech_utilText, json_societeTech_utilText, t_IJsonComponents_societeTech_utilText } from "../../util/UtilText/UtilText.js";
import { str_attribute_name, str_attribute_name_function, str_args_setting, cst_args_getCustomAttribute } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import ChildAttributeType from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/ChildAttributeType.js";
import { str_value_init } from "@/utils/scraping/PageParsing/Schema/_Component/ValTextContent/types.js";
import { strRegexPrice, strRegexPricePerUnit, strRegexQuantity } from "@shared/m_regex_product.js";
import { embedCapturingGroupStrOrRegex, getUnionNonMatchingGroups } from "@shared/m_regex_prefixAndSuffix.js";

export const _id_field = "Link" as const
const _id_item = item_field 
const _optional_field = [] as const 

const _arr_classNameType_societeTech_startupsMtp = [
    rootClassName,"Grid",
    `Container${str_Pagination}`,str_Pagination,...pagination_field,
    _id_item,`${_id_item}Content`,
        `${_id_item}Middle`,
        `${_id_item}${_id_field}`
] as const   


export const arr_classNameType_societeTech_startupsMtp = buildArrClassNameType(str_StartupsMtp,_arr_classNameType_societeTech_startupsMtp)
export type t_arr_classNameType_societeTech_startupsMtp = typeof arr_classNameType_societeTech_startupsMtp

export type t_union_classNameType_societeTech_startupsMtp = arrToUnion<t_arr_classNameType_societeTech_startupsMtp>

const imported_classNameTypeParent_societeTech_main =  [] as const
type t_imported_classNameTypeParent_societeTech_main = typeof imported_classNameTypeParent_societeTech_main
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_societeTech_main,t_IJsonComponents_societeTech_utilMain>(json_societeTech_utilMain,imported_classNameTypeParent_societeTech_main)

const imported_classNameTypeParent_societeTech_text = [] as const
type t_imported_classNameTypeParent_societeTech_text = typeof imported_classNameTypeParent_societeTech_text
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_societeTech_text,t_IJsonComponents_societeTech_utilText>(json_societeTech_utilText,imported_classNameTypeParent_societeTech_text)


export const arr_societeTech_startupsMtp  = 
    [
        getChildArr<t_arr_classNameType_societeTech_startupsMtp,0,[1]>(arr_classNameType_societeTech_startupsMtp,0,[1]),
        getChildArr<t_arr_classNameType_societeTech_startupsMtp,1,[2,3]>(arr_classNameType_societeTech_startupsMtp,1,[2,3]),
        getChildArr<t_arr_classNameType_societeTech_startupsMtp,3,[4]>(arr_classNameType_societeTech_startupsMtp,3,[4]),
        getChildArr<t_arr_classNameType_societeTech_startupsMtp,4,[5,6]>(arr_classNameType_societeTech_startupsMtp,4,[5,6]),
        getChildArr<t_arr_classNameType_societeTech_startupsMtp,5>(arr_classNameType_societeTech_startupsMtp,5),
        getChildArr<t_arr_classNameType_societeTech_startupsMtp,6>(arr_classNameType_societeTech_startupsMtp,6),
        getChildArr<t_arr_classNameType_societeTech_startupsMtp,2,[7]>(arr_classNameType_societeTech_startupsMtp,2,[7]),
        getChildArr<t_arr_classNameType_societeTech_startupsMtp,7,[8]>(arr_classNameType_societeTech_startupsMtp,7,[8]),
        getChildArr<t_arr_classNameType_societeTech_startupsMtp,8,[9]>(arr_classNameType_societeTech_startupsMtp,8,[9]),
        getChildArr<t_arr_classNameType_societeTech_startupsMtp,9,[10]>(arr_classNameType_societeTech_startupsMtp,9,[10]),
        getChildArr<t_arr_classNameType_societeTech_startupsMtp,10>(arr_classNameType_societeTech_startupsMtp,10)
    ] as const

export type t_arr_societeTech_startupsMtp = typeof arr_societeTech_startupsMtp

type t_classNameType_leaf_societeTech_startupsMtp =  t_getLeaf < t_union_classNameType_societeTech_startupsMtp, t_arr_societeTech_startupsMtp> 

const imported_classNameType_societeTech_main = [] as const 
type t_imported_classNameType_societeTech_main = typeof imported_classNameType_societeTech_main


const imported_classNameType_societeTech_text = [] as const 
type t_imported_classNameType_societeTech_text = typeof imported_classNameType_societeTech_text

type _t_union_notSpecified_classNameType = 'Container' 

type t_classNameType_notSpecified_union_text = removePrefix<t_str_StartupsMtp,t_union_classNameType_societeTech_startupsMtp|_t_union_notSpecified_classNameType> extends infer A ?
 A extends string ? addSuffix <A,'Text'> extends infer B ? B : never : never :never 

type t_union_notSpecified_classNameType = _t_union_notSpecified_classNameType| t_classNameType_notSpecified_union_text

type t_classNameType_societeTech_startupsMtp = t_union_classNameType_societeTech_startupsMtp|t_imported_classNameType_societeTech_main[number]|t_imported_classNameType_societeTech_text[number]|t_union_notSpecified_classNameType
const societeTech_startupsMtp_helpers = getSocieteTechHelpers<t_classNameType_societeTech_startupsMtp>()


const __IJsonComponents_leaf_societeTech_startupsMtp : _IJsonComponents<t_classNameType_leaf_societeTech_startupsMtp> = {
 
    [arr_classNameType_societeTech_startupsMtp[5]]:{
        childs_selectors : Component.df[str_childs_selectors],
        childs_attributes : [{[str_attribute_name] : "href",selector:Selector.cst_onePropAndTagg("",'',"a").toString()}]
    },
    [arr_classNameType_societeTech_startupsMtp[6]]:{
        childs_selectors : Component.df[str_childs_selectors]
    },
    [arr_classNameType_societeTech_startupsMtp[10]]:{
        childs_selectors : Component.df[str_childs_selectors],
        [str_value_init] : nil_value,
        childs_attributes : [{[str_attribute_name] : "href",selector:Selector.cst_onePropAndTagg("",'',"a").toString()}],
    }
}

const __IJsonComponents_societeTech_startupsMtp : _IJsonComponents<t_union_classNameType_societeTech_startupsMtp> = {

    ...__IJsonComponents_leaf_societeTech_startupsMtp,

    [rootClassName]:{
        ...societeTech_startupsMtp_mainOfComponents
    },
    [societeTech_startupsMtp_rootClassName] :{
        childs_selectors : [...societeTech_startupsMtp_helpers.arr_selector_join_arrArr(
                                [

                                    [[
                                            {selector:Selector.cst_onePropAndTagg(classProp,'row',"ol",containOp)}
                                    ],[
                                            {selector:Selector.cst_onePropAndTagg(classProp,'view-content',"div",containOp)}
                                    ],
                                    [
                                            {selector:Selector.cst_onePropAndTagg(classProp,'products list_woo',"div",containOp)}
                                    ]],

                                    [[
                                            {selector:Selector.cst_onePropAndTagg("",'',"div")},
                                            {selector:Selector.cst_onePropAndTagg(classProp,"pager","ul",containOp)}
                                    ],[
                                            {selector:Selector.cst_onePropAndTagg("",'',"div")},
                                            {selector:Selector.cst_onePropAndTagg(classProp,"pagination","ul",containOp)}
                                    ],
                                    [
                                            {selector:Selector.cst_onePropAndTagg(classProp,'woocommerce-pagination',"nav",containOp)},
                                    ]],
                                ],(arr:string[])=>arr.join(char_child)
                            )
                        ],
        isScoped : false
    },
    StartupsMtpGrid:{
        childs_selectors : 
        [
            [    Selector.cst_onePropAndTagg(classProp,'r_offer_details',"div",containOp).toString()]
        ]
    },
    StartupsMtpItem : {
        childs_selectors :  
            [
                [Selector.cst_onePropAndTagg(classProp,'rh_grid',"div",containOp).toString()]
            
            ]
    },

    StartupsMtpItemContent: {
        childs_selectors :
            [
                [Selector.cst_onePropAndTagg(classProp,'rh_gr_top_middle',"div",containOp).toString()]
            ]
    },

    StartupsMtpItemMiddle : {
        childs_selectors : 
            [
                [Selector.cst_onePropAndTagg("",'',"h3").toString() /*+ char_child + Selector.cst_onePropAndTagg("",'',"a").toString()*/]
            ]
    },

    StartupsMtpContainerPagination :{
        childs_selectors : [...societeTech_startupsMtp_helpers.arr_selector_join_arrArr(
            [
                [[
                        {selector:Selector.cst_onePropAndTagg("",'',"div")},
                        {selector:Selector.cst_onePropAndTagg(classProp,"pager","ul",containOp)}
                ],[
                        {selector:Selector.cst_onePropAndTagg("",'',"div")},
                        {selector:Selector.cst_onePropAndTagg(classProp,"pagination","ul",containOp)}
                ],
                [ {selector:Selector.cst_onePropAndTagg(classProp,'page-numbers',"ul",containOp)}]
            ]
        ],(arr:string[])=>arr.join(char_child))]
    },
    StartupsMtpPagination:{
        childs_selectors : 
            [ [['active','current','selected','previous'].reduce((acc,str_class:string)=>{
                return acc+SelectorProp.cst_val(classProp,str_class,containOp,fct_mod_not).toString()+fct_mod_not(fct_mod_hasDirectChild(Selector.cst_onePropAndTagg(classProp,str_class,"span",containOp).toString()))
            },Selector.cst_onePropAndTagg("","","li").toString()+fct_mod_has(Selector.cst_onePropAndTagg("","","a").toString()))],
            ['active','current','selected','previous'].reduce((acc,str_class:string)=>{
                    return [...acc,...[Selector.cst_onePropAndTagg(classProp,str_class,"li",containOp).toString(),
                        Selector.cst_onePropAndTagg("","","li").toString()+fct_mod_hasDirectChild(Selector.cst_onePropAndTagg(classProp,str_class,"span",containOp).toString())]]
                },[] as string[])
            ]

    }
}


export type t__IJsonComponents_societeTech_startupsMtp = typeof __IJsonComponents_leaf_societeTech_startupsMtp

const imported_fjson_societeTech_utilMain = fjson_societeTech_utilMain.getSubJsonComponent<t_imported_classNameType_societeTech_main>(imported_classNameType_societeTech_main)
const imported_fjson_societeTech_startupsMtp = imported_fjson_societeTech_utilMain.getAddedSubJsonComponent< t_arr_classNameType_societeTech_utilText,t_union_classNameType_societeTech_utilText,t_arr_societeTech_utilText,t__IJsonComponents_societeTech_utilText,t_imported_classNameType_societeTech_text>(imported_classNameType_societeTech_text,fjson_societeTech_utilText)

type t_imported_fjson_societeTech_startupsMtp = typeof imported_fjson_societeTech_startupsMtp

type t_arrClassName_import = t_imported_fjson_societeTech_startupsMtp extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
type t_unionClassName_import = t_imported_fjson_societeTech_startupsMtp extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
type t_arrChilds_imported_startupsMtp = t_imported_fjson_societeTech_startupsMtp extends IFunctionalWrapperJsonComponent <any,any,infer A , any >? A : never 
type t__IJsonComponent_imported_startupsMtp = t_imported_fjson_societeTech_startupsMtp extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

export const fjson_societeTech_startupsMtp  = imported_fjson_societeTech_startupsMtp[fieldName_st_cst_buildFromFWJson](
    new FunctionalWrapperJsonComponentConfig(arr_classNameType_societeTech_startupsMtp,arr_societeTech_startupsMtp,__IJsonComponents_societeTech_startupsMtp)
)

type t_fjson_societeTech_startupsMtp = typeof fjson_societeTech_startupsMtp


export type t_arrClassName_startupsMtp = t_fjson_societeTech_startupsMtp extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
export type t_unionClassName_startupsMtp = t_fjson_societeTech_startupsMtp extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
export type t_arrChilds_startupsMtp = t_fjson_societeTech_startupsMtp extends IFunctionalWrapperJsonComponent <any,any, infer A ,any >? A : never 
export type t_IJsonComponent_startupsMtp = t_fjson_societeTech_startupsMtp extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

//create type file with getConfig and arrClassName and all , give it a value in another file with IJsonComponent
// the getConfig is used to configure ScrapingComponent for each route 

export const configJson_societeTech_startupsMtp  = fjson_societeTech_startupsMtp[getConfig]()
export type t_configJson_societeTech_startupsMtp = typeof configJson_societeTech_startupsMtp

export const json_societeTech_startupsMtp  = fjson_societeTech_startupsMtp["toJson"]()
export type t_json_societeTech_startupsMtp = typeof json_societeTech_startupsMtp

export const id_field = embedName(_id_field)
export const id_item = embedName(_id_item)
const required_field = [] as const 
const optional_field = _optional_field.map(embedName)

const arr_pathId = [id_field,...required_field,...optional_field,...pagination_field] as const 
type t_arr_pathId =  typeof arr_pathId
type t_path_id = t_arr_pathId[number]

export type t_resParsing = {
    [r_k in typeof required_field[number]] : string
} 
&{
    [key in t_path_id] ?: string
}

const _mapRegexPathIds_societeTech_startupsMtp = [
    [[rootClassName,societeTech_startupsMtp_rootClassName,"StartupsMtpContainerPagination","StartupsMtpPagination",["StartupsMtpNextPagination"]],[pagination_field[0]]],
    [[rootClassName,societeTech_startupsMtp_rootClassName,"StartupsMtpContainerPagination","StartupsMtpPagination",["StartupsMtpSelectedPagination"]],[pagination_field[1]]],
    //[[rootClassName,societeTech_startupsMtp_rootClassName,"StartupsMtpGrid",id_item,"StartupsMtpItemContent","StartupsMtpMiddle",["StartupsMtpItemSummary"]],["StartupsMtpSummary"]],
    [[rootClassName,societeTech_startupsMtp_rootClassName,"StartupsMtpGrid",id_item,"StartupsMtpItemContent","StartupsMtpItemMiddle",["StartupsMtpItemLink"]],[id_field]]

 ] as const 

//t_mapRegexToIdPath< UnionRegex,UnionIdPath ,ArrUnionClassNameType


const mapRegexPathIds_societeTech_startupsMtp = _mapRegexPathIds_societeTech_startupsMtp.map((e)=> [MapRegexToIdPath.convertArrKeyInRegexKey(e[0]),e[1]]) as unknown   as t_mapRegexToIdPathFromArrArr<t_path_id,t_arrClassName_startupsMtp,typeof _mapRegexPathIds_societeTech_startupsMtp >
type t_mapRegexPathIds_societeTech_startupsMtp = typeof mapRegexPathIds_societeTech_startupsMtp

type t_unionRegex_mapRegexPathIds_societeTech_startupsMtp = arrToUnion<ApplyGetElementNumberIArrArr<[t_mapRegexPathIds_societeTech_startupsMtp],0>[0]>

const mapRegex_societeTech_startupsMtp = new MapRegexToIdPath<t_unionRegex_mapRegexPathIds_societeTech_startupsMtp,t_path_id,t_arrClassName_startupsMtp,t_unionClassName_startupsMtp>( {_arrClassname : fjson_societeTech_startupsMtp[str_get_arrClassName]()} , { _mapRegexToIdPath : mapRegexPathIds_societeTech_startupsMtp } ) 

export type t_unionRegex_mapRegex_societeTech_startupsMtp = typeof mapRegex_societeTech_startupsMtp extends MapRegexToIdPath<infer A , any , any, any  > ? A : never
export type t_unionIdPath_mapRegex_societeTech_startupsMtp = typeof mapRegex_societeTech_startupsMtp extends MapRegexToIdPath<any , infer A , any, any  > ? A : never


export const scrapingComponent_societeTech_startupsMtp = new ScrapingComponent<t_unionRegex_mapRegex_societeTech_startupsMtp,t_unionIdPath_mapRegex_societeTech_startupsMtp,t_arrClassName_startupsMtp,t_unionClassName_startupsMtp,t_arrChilds_startupsMtp,t_IJsonComponent_startupsMtp>( mapRegex_societeTech_startupsMtp , fjson_societeTech_startupsMtp  )
export type t_scrapingComponent_societeTech_startupsMtp = typeof scrapingComponent_societeTech_startupsMtp