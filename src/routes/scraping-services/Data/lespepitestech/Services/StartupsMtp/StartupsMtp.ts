
import { buildArrClassNameType, getChildArr, rootClassName, t_getLeaf } from "@/utils/scraping/PageParsing/types.js";
import { MapRegexToIdPath, pagination_field, t_mapRegexToIdPathFromArrArr } from "@shared/m_regexMapping.js";
import { arrToUnion, ApplyGetElementNumberIArrArr, addSuffix, removePrefix } from "@shared/type.js";
import { lespepitestech_startupsMtp_rootClassName, lespepitestech_startupsMtp_mainOfComponents, str_StartupsMtp, t_str_StartupsMtp } from "./types.js";
import { ScrapingComponent, getTypesFromImportedComponentAndFct } from "@/utils/scraping/PageParsing/ComponentObject.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import {FunctionalWrapperJsonComponentConfig, IFunctionalWrapperJsonComponent}from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/IFunctionalWrapperJsonComponents.js";
import { fieldName_st_cst_buildFromFWJson, str_get_arrClassName } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _IComponent, _Component } from "@/utils/scraping/PageParsing/Schema/_Component/_Component.js";
import { Selector, char_child, classProp, containOp, fct_mod_hasDirectChild, fct_mod_not, idProp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { nil_value, str_childs_selectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getConfig } from "@shared/m_json.js";
import { getLespepitestechHelpers } from "../../util/helpers.js";
import { fjson_lespepitestech_utilMain, json_lespepitestech_utilMain, t_IJsonComponents_lespepitestech_utilMain } from "../../util/UtilMain/UtilMain.js";
import { t_arr_classNameType_lespepitestech_utilText, t_union_classNameType_lespepitestech_utilText, t_arr_lespepitestech_utilText,t__IJsonComponents_lespepitestech_utilText, fjson_lespepitestech_utilText, json_lespepitestech_utilText, t_IJsonComponents_lespepitestech_utilText } from "../../util/UtilText/UtilText.js";
import { str_attribute_name, str_attribute_name_function, str_args_setting, cst_args_getCustomAttribute } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import ChildAttributeType from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/ChildAttributeType.js";
import { str_value_init } from "@/utils/scraping/PageParsing/Schema/_Component/ValTextContent/types.js";
import { strRegexPrice, strRegexPricePerUnit, strRegexQuantity } from "@shared/m_regex_product.js";
import { embedCapturingGroupStrOrRegex, getUnionNonMatchingGroups } from "@shared/m_regex_prefixAndSuffix.js";


const _arr_classNameType_lespepitestech_startupsMtp = [
    rootClassName,"ContainerGrid","Grid",
    "ContainerPagination","Pagination","SelectedPagination","NextPagination",
    "Item",
        "Type","ItemSummary","ItemContentBottom",
            "ItemLink","ItemCategories",
                "ItemCategory",
] as const   

export const arr_classNameType_lespepitestech_startupsMtp = buildArrClassNameType(str_StartupsMtp,_arr_classNameType_lespepitestech_startupsMtp)
export type t_arr_classNameType_lespepitestech_startupsMtp = typeof arr_classNameType_lespepitestech_startupsMtp

export type t_union_classNameType_lespepitestech_startupsMtp = arrToUnion<t_arr_classNameType_lespepitestech_startupsMtp>

const imported_classNameTypeParent_lespepitestech_main =  [] as const
type t_imported_classNameTypeParent_lespepitestech_main = typeof imported_classNameTypeParent_lespepitestech_main
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_lespepitestech_main,t_IJsonComponents_lespepitestech_utilMain>(json_lespepitestech_utilMain,imported_classNameTypeParent_lespepitestech_main)

const imported_classNameTypeParent_lespepitestech_text = [] as const
type t_imported_classNameTypeParent_lespepitestech_text = typeof imported_classNameTypeParent_lespepitestech_text
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_lespepitestech_text,t_IJsonComponents_lespepitestech_utilText>(json_lespepitestech_utilText,imported_classNameTypeParent_lespepitestech_text)


export const arr_lespepitestech_startupsMtp  = 
    [
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,0,[1]>(arr_classNameType_lespepitestech_startupsMtp,0,[1]),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,1,[2,4]>(arr_classNameType_lespepitestech_startupsMtp,1,[2,4]),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,4,[5]>(arr_classNameType_lespepitestech_startupsMtp,4,[5]),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,5,[6,7]>(arr_classNameType_lespepitestech_startupsMtp,5,[6,7]),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,6>(arr_classNameType_lespepitestech_startupsMtp,6),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,7>(arr_classNameType_lespepitestech_startupsMtp,7),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,2,[3]>(arr_classNameType_lespepitestech_startupsMtp,2,[3]),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,3,[8]>(arr_classNameType_lespepitestech_startupsMtp,3,[8]),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,8,[9,10,11]>(arr_classNameType_lespepitestech_startupsMtp,8,[9,10,11]),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,9>(arr_classNameType_lespepitestech_startupsMtp,9),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,10>(arr_classNameType_lespepitestech_startupsMtp,10),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,11,[12,13]>(arr_classNameType_lespepitestech_startupsMtp,11,[12,13]),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,12>(arr_classNameType_lespepitestech_startupsMtp,12),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,13,[14]>(arr_classNameType_lespepitestech_startupsMtp,13,[14]),
        getChildArr<t_arr_classNameType_lespepitestech_startupsMtp,14>(arr_classNameType_lespepitestech_startupsMtp,14),
    ] as const

export type t_arr_lespepitestech_startupsMtp = typeof arr_lespepitestech_startupsMtp

type t_classNameType_leaf_lespepitestech_startupsMtp =  t_getLeaf < t_union_classNameType_lespepitestech_startupsMtp, t_arr_lespepitestech_startupsMtp> 

const imported_classNameType_lespepitestech_main = [] as const 
type t_imported_classNameType_lespepitestech_main = typeof imported_classNameType_lespepitestech_main


const imported_classNameType_lespepitestech_text = [] as const 
type t_imported_classNameType_lespepitestech_text = typeof imported_classNameType_lespepitestech_text

type _t_union_notSpecified_classNameType = 'Container' 

type t_classNameType_notSpecified_union_text = removePrefix<t_str_StartupsMtp,t_union_classNameType_lespepitestech_startupsMtp|_t_union_notSpecified_classNameType> extends infer A ?
 A extends string ? addSuffix <A,'Text'> extends infer B ? B : never : never :never 

type t_union_notSpecified_classNameType = _t_union_notSpecified_classNameType| t_classNameType_notSpecified_union_text

type t_classNameType_lespepitestech_startupsMtp = t_union_classNameType_lespepitestech_startupsMtp|t_imported_classNameType_lespepitestech_main[number]|t_imported_classNameType_lespepitestech_text[number]|t_union_notSpecified_classNameType
const lespepitestech_startupsMtp_helpers = getLespepitestechHelpers<t_classNameType_lespepitestech_startupsMtp>()


const __IJsonComponents_leaf_lespepitestech_startupsMtp : _IJsonComponents<t_classNameType_leaf_lespepitestech_startupsMtp> = {
 
    [arr_classNameType_lespepitestech_startupsMtp[6]]:{
        childs_selectors : Component.df[str_childs_selectors]
    },
    [arr_classNameType_lespepitestech_startupsMtp[7]]:{
        childs_selectors : Component.df[str_childs_selectors],
        childs_attributes : [{[str_attribute_name] : "href"}],
    },
    [arr_classNameType_lespepitestech_startupsMtp[9]]:{
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_lespepitestech_startupsMtp[10]]:{
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_lespepitestech_startupsMtp[12]]:{
        childs_selectors : Component.df[str_childs_selectors],
        [str_value_init] : nil_value,
        childs_attributes : [{[str_attribute_name] : "href"}],
    },
    [arr_classNameType_lespepitestech_startupsMtp[14]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex : embedCapturingGroupStrOrRegex("\\S[\\S ]+\\S",true)
    }
}

const __IJsonComponents_lespepitestech_startupsMtp : _IJsonComponents<t_union_classNameType_lespepitestech_startupsMtp> = {

    ...__IJsonComponents_leaf_lespepitestech_startupsMtp,

    [rootClassName]:{
        ...lespepitestech_startupsMtp_mainOfComponents
    },
    [lespepitestech_startupsMtp_rootClassName] :{
        childs_selectors : [...lespepitestech_startupsMtp_helpers.arrArr_selector(lespepitestech_startupsMtp_helpers.arr_selector_join_arrArr(
                                [

                                    [[
                                            {selector:Selector.cst_onePropAndTagg(classProp,'row',"ol",containOp)}
                                    ],[
                                            {selector:Selector.cst_onePropAndTagg(classProp,'view-content',"div",containOp)}
                                    ]],

                                    [[
                                            {selector:Selector.cst_onePropAndTagg("",'',"div")},
                                            {selector:Selector.cst_onePropAndTagg(classProp,"pager","ul",containOp)}
                                    ],[
                                            {selector:Selector.cst_onePropAndTagg("",'',"div")},
                                            {selector:Selector.cst_onePropAndTagg(classProp,"pagination","ul",containOp)}
                                    ]]

                                ],(arr:string[])=>arr.join(char_child)
                            ),(str_selector)=>Selector.cst_onePropAndTagg("",'',"div").toString() + fct_mod_hasDirectChild(str_selector))
                        ],
        isScoped : false
    },
    StartupsMtpContainerGrid:{
        childs_selectors : 
            [
                [Selector.cst_onePropAndTagg(classProp,'row',"ol",containOp).toString(),Selector.cst_onePropAndTagg(classProp,'view-content',"div",containOp).toString()]
            ]

    },
    StartupsMtpGrid:{
        childs_selectors : [...lespepitestech_startupsMtp_helpers.arr_selector_join_arrArr(
            [
                [[
                        {selector:Selector.cst_onePropAndTagg(classProp,'startup-entry',"article",containOp)},
                ],[
                        {selector:Selector.cst_onePropAndTagg(classProp,'card-product',"div",containOp)}
                ]]
            ],
            (arr:string[])=>Selector.cst_onePropAndTagg("",'',"div").toString() + char_child + arr.join(char_child)
        )]
    },
    StartupsMtpItem : {
        childs_selectors :  [...lespepitestech_startupsMtp_helpers.arr_selector_join_arrArr(
            [
                [[
                    {selector:Selector.cst_onePropAndTagg(classProp,'s-e-title',"div",containOp)},
                    {selector:Selector.cst_onePropAndTagg(classProp,'s-e-title-c',"div",containOp)},
                    {selector:Selector.cst_onePropAndTagg("",'',"h3")}
                ]],[[
                    {selector:Selector.cst_onePropAndTagg(classProp,'s-u-summary',"div",containOp)}
                ]],[[
                    {selector:Selector.cst_onePropAndTagg(classProp,'lpt-card-bottom',"div",containOp)},
                ]]
            
            ],(arr:string[])=>Selector.cst_onePropAndTagg(classProp,'s-e-content',"div",containOp).toString() + char_child + arr.join(char_child)) ]
    },

    StartupsMtpItemContentBottom: {
        childs_selectors :  [...lespepitestech_startupsMtp_helpers.arr_selector_join_arrArr(
            [
                [[
                    {selector:Selector.cst_onePropAndTagg(classProp,'s-e-link',"div",containOp)},
                    {selector:Selector.cst_onePropAndTagg("",'',"a")}
                ]],
                [[
                    {selector:Selector.cst_onePropAndTagg(classProp,'lpt-dropdown-counter',"div",containOp)},
                    {selector:Selector.cst_onePropAndTagg(classProp,'lpt-dropdown-all-categories',"ul",containOp)},
                ]]
            ],(arr:string[])=>arr.join(char_child)) ]
    },

    StartupsMtpItemCategories : {
        childs_selectors : 
            [
                [Selector.cst_onePropAndTagg(classProp,'leaf',"li",containOp).toString() + fct_mod_hasDirectChild("a")]
            ]
    },

    StartupsMtpContainerPagination :{
        childs_selectors : [...lespepitestech_startupsMtp_helpers.arr_selector_join_arrArr(
            [
                [[
                        {selector:Selector.cst_onePropAndTagg("",'',"div")},
                        {selector:Selector.cst_onePropAndTagg(classProp,"pager","ul",containOp)}
                ],[
                        {selector:Selector.cst_onePropAndTagg("",'',"div")},
                        {selector:Selector.cst_onePropAndTagg(classProp,"pagination","ul",containOp)}
                ]]
        ],(arr:string[])=>arr.join(char_child))]
    },
    StartupsMtpPagination:{
        childs_selectors : [
            [
                Selector.cst_onePropAndTagg(classProp,'active',"li",containOp).toString(),
                Selector.cst_onePropAndTagg(classProp,'current',"li",containOp).toString(),
                Selector.cst_onePropAndTagg(classProp,'selected',"li",containOp).toString(),
            ],
            lespepitestech_startupsMtp_helpers.arr_selector([
                Selector.cst_multPropAndTagg(classProp,['active','current','selected','previous'],"li",containOp,[fct_mod_not]).toString(),
            ],
            (str_selector)=> str_selector + char_child + Selector.cst_onePropAndTagg("",'',"a").toString()
            )
        ]

    }
}


export type t__IJsonComponents_lespepitestech_startupsMtp = typeof __IJsonComponents_leaf_lespepitestech_startupsMtp

const imported_fjson_lespepitestech_utilMain = fjson_lespepitestech_utilMain.getSubJsonComponent<t_imported_classNameType_lespepitestech_main>(imported_classNameType_lespepitestech_main)
const imported_fjson_lespepitestech_startupsMtp = imported_fjson_lespepitestech_utilMain.getAddedSubJsonComponent< t_arr_classNameType_lespepitestech_utilText,t_union_classNameType_lespepitestech_utilText,t_arr_lespepitestech_utilText,t__IJsonComponents_lespepitestech_utilText,t_imported_classNameType_lespepitestech_text>(imported_classNameType_lespepitestech_text,fjson_lespepitestech_utilText)

type t_imported_fjson_lespepitestech_startupsMtp = typeof imported_fjson_lespepitestech_startupsMtp

type t_arrClassName_import = t_imported_fjson_lespepitestech_startupsMtp extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
type t_unionClassName_import = t_imported_fjson_lespepitestech_startupsMtp extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
type t_arrChilds_imported_startupsMtp = t_imported_fjson_lespepitestech_startupsMtp extends IFunctionalWrapperJsonComponent <any,any,infer A , any >? A : never 
type t__IJsonComponent_imported_startupsMtp = t_imported_fjson_lespepitestech_startupsMtp extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

export const fjson_lespepitestech_startupsMtp  = imported_fjson_lespepitestech_startupsMtp[fieldName_st_cst_buildFromFWJson](
    new FunctionalWrapperJsonComponentConfig(arr_classNameType_lespepitestech_startupsMtp,arr_lespepitestech_startupsMtp,__IJsonComponents_lespepitestech_startupsMtp)
)

type t_fjson_lespepitestech_startupsMtp = typeof fjson_lespepitestech_startupsMtp


export type t_arrClassName_startupsMtp = t_fjson_lespepitestech_startupsMtp extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
export type t_unionClassName_startupsMtp = t_fjson_lespepitestech_startupsMtp extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
export type t_arrChilds_startupsMtp = t_fjson_lespepitestech_startupsMtp extends IFunctionalWrapperJsonComponent <any,any, infer A ,any >? A : never 
export type t_IJsonComponent_startupsMtp = t_fjson_lespepitestech_startupsMtp extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

//create type file with getConfig and arrClassName and all , give it a value in another file with IJsonComponent
// the getConfig is used to configure ScrapingComponent for each route 

export const configJson_lespepitestech_startupsMtp  = fjson_lespepitestech_startupsMtp[getConfig]()
export type t_configJson_lespepitestech_startupsMtp = typeof configJson_lespepitestech_startupsMtp

export const json_lespepitestech_startupsMtp  = fjson_lespepitestech_startupsMtp["toJson"]()
export type t_json_lespepitestech_startupsMtp = typeof json_lespepitestech_startupsMtp

export const id_field = `${str_StartupsMtp}Type` as const 
const required_field = [] as const 
const optional_field = ["StartupsMtpSummary", "StartupsMtpLink","StartupsMtpCategory"] as const

const arr_pathId = [id_field,...required_field,...optional_field,...pagination_field] as const 
type t_arr_pathId =  typeof arr_pathId
type t_path_id = t_arr_pathId[number]

export type t_resParsing = {
    [r_k in typeof required_field[number]] : string
} 
&{
    [key in t_path_id] ?: string
}

const _mapRegexPathIds_lespepitestech_startupsMtp = [
    [[rootClassName,lespepitestech_startupsMtp_rootClassName,"StartupsMtpContainerGrid","StartupsMtpGrid","StartupsMtpItem",["StartupsMtpType"]],["StartupsMtpType"]],
    [[rootClassName,lespepitestech_startupsMtp_rootClassName,"StartupsMtpContainerPagination","StartupsMtpPagination",["StartupsMtpNextPagination"]],[pagination_field[0]]],
    [[rootClassName,lespepitestech_startupsMtp_rootClassName,"StartupsMtpContainerPagination","StartupsMtpPagination",["StartupsMtpSelectedPagination"]],[pagination_field[1]]],
    [[rootClassName,lespepitestech_startupsMtp_rootClassName,"StartupsMtpContainerGrid","StartupsMtpGrid","StartupsMtpItem",["StartupsMtpItemSummary"]],["StartupsMtpSummary"]],
    [[rootClassName,lespepitestech_startupsMtp_rootClassName,"StartupsMtpContainerGrid","StartupsMtpGrid","StartupsMtpItem","StartupsMtpItemContentBottom",["StartupsMtpItemLink"]],["StartupsMtpLink"]],
    [[rootClassName,lespepitestech_startupsMtp_rootClassName,"StartupsMtpContainerGrid","StartupsMtpGrid","StartupsMtpItem","StartupsMtpItemContentBottom","StartupsMtpItemCategories",["StartupsMtpItemCategory"]],["StartupsMtpCategory"]],

 ] as const 

//t_mapRegexToIdPath< UnionRegex,UnionIdPath ,ArrUnionClassNameType


const mapRegexPathIds_lespepitestech_startupsMtp = _mapRegexPathIds_lespepitestech_startupsMtp.map((e)=> [MapRegexToIdPath.convertArrKeyInRegexKey(e[0]),e[1]]) as unknown   as t_mapRegexToIdPathFromArrArr<t_path_id,t_arrClassName_startupsMtp,typeof _mapRegexPathIds_lespepitestech_startupsMtp >
type t_mapRegexPathIds_lespepitestech_startupsMtp = typeof mapRegexPathIds_lespepitestech_startupsMtp

type t_unionRegex_mapRegexPathIds_lespepitestech_startupsMtp = arrToUnion<ApplyGetElementNumberIArrArr<[t_mapRegexPathIds_lespepitestech_startupsMtp],0>[0]>

const mapRegex_lespepitestech_startupsMtp = new MapRegexToIdPath<t_unionRegex_mapRegexPathIds_lespepitestech_startupsMtp,t_path_id,t_arrClassName_startupsMtp,t_unionClassName_startupsMtp>( {_arrClassname : fjson_lespepitestech_startupsMtp[str_get_arrClassName]()} , { _mapRegexToIdPath : mapRegexPathIds_lespepitestech_startupsMtp } ) 

export type t_unionRegex_mapRegex_lespepitestech_startupsMtp = typeof mapRegex_lespepitestech_startupsMtp extends MapRegexToIdPath<infer A , any , any, any  > ? A : never
export type t_unionIdPath_mapRegex_lespepitestech_startupsMtp = typeof mapRegex_lespepitestech_startupsMtp extends MapRegexToIdPath<any , infer A , any, any  > ? A : never


export const scrapingComponent_lespepitestech_startupsMtp = new ScrapingComponent<t_unionRegex_mapRegex_lespepitestech_startupsMtp,t_unionIdPath_mapRegex_lespepitestech_startupsMtp,t_arrClassName_startupsMtp,t_unionClassName_startupsMtp,t_arrChilds_startupsMtp,t_IJsonComponent_startupsMtp>( mapRegex_lespepitestech_startupsMtp , fjson_lespepitestech_startupsMtp  )
export type t_scrapingComponent_lespepitestech_startupsMtp = typeof scrapingComponent_lespepitestech_startupsMtp