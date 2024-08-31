
import { getChildArr, rootClassName, t_getLeaf } from "@/utils/scraping/PageParsing/types.js";
import { MapRegexToIdPath, pagination_field, t_mapRegexToIdPathFromArrArr } from "@shared/m_regexMapping.js";
import { arrToUnion, ApplyGetElementNumberIArrArr, addSuffix, removePrefix } from "@shared/type.js";
import { lespepitestech_login_rootClassName, lespepitestech_login_mainOfComponents } from "./types.js";
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
import { embedBeginAndEndOfLineStrOrRegex, embedCapturingGroupStrOrRegex } from "@shared/m_regex_prefixAndSuffix.js";

const arr_classNameType_lespepitestech_login = [
    rootClassName,lespepitestech_login_rootClassName,"LoginBody"
] as const  

export type t_arr_classNameType_lespepitestech_login = typeof arr_classNameType_lespepitestech_login

export type t_union_classNameType_lespepitestech_login = arrToUnion<t_arr_classNameType_lespepitestech_login>

const imported_classNameTypeParent_lespepitestech_main =  [] as const
type t_imported_classNameTypeParent_lespepitestech_main = typeof imported_classNameTypeParent_lespepitestech_main
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_lespepitestech_main,t_IJsonComponents_lespepitestech_utilMain>(json_lespepitestech_utilMain,imported_classNameTypeParent_lespepitestech_main)

const imported_classNameTypeParent_lespepitestech_text = [] as const
type t_imported_classNameTypeParent_lespepitestech_text = typeof imported_classNameTypeParent_lespepitestech_text
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_lespepitestech_text,t_IJsonComponents_lespepitestech_utilText>(json_lespepitestech_utilText,imported_classNameTypeParent_lespepitestech_text)


export const arr_lespepitestech_login  = 
    [
        getChildArr<t_arr_classNameType_lespepitestech_login,0,[1]>(arr_classNameType_lespepitestech_login,0,[1]),
        getChildArr<t_arr_classNameType_lespepitestech_login,1,[2]>(arr_classNameType_lespepitestech_login,1,[2]),
        getChildArr<t_arr_classNameType_lespepitestech_login,2>(arr_classNameType_lespepitestech_login,2),
    ] as const

export type t_arr_lespepitestech_login = typeof arr_lespepitestech_login

type t_classNameType_leaf_lespepitestech_login =  t_getLeaf < t_union_classNameType_lespepitestech_login, t_arr_lespepitestech_login> 

const imported_classNameType_lespepitestech_main = [] as const 
type t_imported_classNameType_lespepitestech_main = typeof imported_classNameType_lespepitestech_main


const imported_classNameType_lespepitestech_text = [] as const 
type t_imported_classNameType_lespepitestech_text = typeof imported_classNameType_lespepitestech_text

type _t_union_notSpecified_classNameType = 'Container' 

type t_classNameType_notSpecified_union_text = removePrefix<'Login',t_union_classNameType_lespepitestech_login|_t_union_notSpecified_classNameType> extends infer A ?
 A extends string ? addSuffix <A,'Text'> extends infer B ? B : never : never :never 

type t_union_notSpecified_classNameType = _t_union_notSpecified_classNameType| t_classNameType_notSpecified_union_text

type t_classNameType_lespepitestech_login = t_union_classNameType_lespepitestech_login|t_imported_classNameType_lespepitestech_main[number]|t_imported_classNameType_lespepitestech_text[number]|t_union_notSpecified_classNameType
const lespepitestech_login_helpers = getLespepitestechHelpers<t_classNameType_lespepitestech_login>()


const __IJsonComponents_leaf_lespepitestech_login : _IJsonComponents<t_classNameType_leaf_lespepitestech_login> = {
    [arr_classNameType_lespepitestech_login[2]]:{
        childs_selectors : Component.df[str_childs_selectors],
    },
}

const __IJsonComponents_lespepitestech_login : _IJsonComponents<t_union_classNameType_lespepitestech_login> = {

    ...__IJsonComponents_leaf_lespepitestech_login,

    [rootClassName]:{
        ...lespepitestech_login_mainOfComponents
    },
    [lespepitestech_login_rootClassName] :{
        childs_selectors : [
            [           
                Selector.cst_onePropAndTagg("",'',"main").toString(),
                Selector.cst_onePropAndTagg(classProp,'content',"div",containOp).toString(),
                Selector.cst_onePropAndTagg(idProp,'content',"div",containOp).toString(),
                Selector.cst_onePropAndTagg(classProp,'content',"main",containOp).toString(),
                Selector.cst_onePropAndTagg(idProp,'content',"main",containOp).toString(),
            ]
            ]
    },
}


export type t__IJsonComponents_lespepitestech_login = typeof __IJsonComponents_leaf_lespepitestech_login

const imported_fjson_lespepitestech_utilMain = fjson_lespepitestech_utilMain.getSubJsonComponent<t_imported_classNameType_lespepitestech_main>(imported_classNameType_lespepitestech_main)
const imported_fjson_lespepitestech_login = imported_fjson_lespepitestech_utilMain.getAddedSubJsonComponent< t_arr_classNameType_lespepitestech_utilText,t_union_classNameType_lespepitestech_utilText,t_arr_lespepitestech_utilText,t__IJsonComponents_lespepitestech_utilText,t_imported_classNameType_lespepitestech_text>(imported_classNameType_lespepitestech_text,fjson_lespepitestech_utilText)

type t_imported_fjson_lespepitestech_login = typeof imported_fjson_lespepitestech_login

type t_arrClassName_import = t_imported_fjson_lespepitestech_login extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
type t_unionClassName_import = t_imported_fjson_lespepitestech_login extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
type t_arrChilds_imported_login = t_imported_fjson_lespepitestech_login extends IFunctionalWrapperJsonComponent <any,any,infer A , any >? A : never 
type t__IJsonComponent_imported_login = t_imported_fjson_lespepitestech_login extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

export const fjson_lespepitestech_login  = imported_fjson_lespepitestech_login[fieldName_st_cst_buildFromFWJson](
    new FunctionalWrapperJsonComponentConfig(arr_classNameType_lespepitestech_login,arr_lespepitestech_login,__IJsonComponents_lespepitestech_login)
)

type t_fjson_lespepitestech_login = typeof fjson_lespepitestech_login


export type t_arrClassName_login = t_fjson_lespepitestech_login extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
export type t_unionClassName_login = t_fjson_lespepitestech_login extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
export type t_arrChilds_login = t_fjson_lespepitestech_login extends IFunctionalWrapperJsonComponent <any,any, infer A ,any >? A : never 
export type t_IJsonComponent_login = t_fjson_lespepitestech_login extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

//create type file with getConfig and arrClassName and all , give it a value in another file with IJsonComponent
// the getConfig is used to configure ScrapingComponent for each route 

export const configJson_lespepitestech_login  = fjson_lespepitestech_login[getConfig]()
export type t_configJson_lespepitestech_login = typeof configJson_lespepitestech_login

export const json_lespepitestech_login  = fjson_lespepitestech_login["toJson"]()
export type t_json_lespepitestech_login = typeof json_lespepitestech_login


const required_field = [] as const 
const optional_field = ["LoginBody"] as const

const arr_pathId = [...required_field,...optional_field] as const 
type t_arr_pathId =  typeof arr_pathId
type t_path_id = t_arr_pathId[number]

export type t_resParsing = {
    [r_k in typeof required_field[number]] : string
} 
&{
    [key in t_path_id] ?: string
}

const _mapRegexPathIds_lespepitestech_login = [
    [[rootClassName,lespepitestech_login_rootClassName,["LoginBody"]]
    ,["LoginBody"]],
 ] as const 

//t_mapRegexToIdPath< UnionRegex,UnionIdPath ,ArrUnionClassNameType


const mapRegexPathIds_lespepitestech_login = _mapRegexPathIds_lespepitestech_login.map((e)=> [MapRegexToIdPath.convertArrKeyInRegexKey(e[0]),e[1]]) as unknown   as t_mapRegexToIdPathFromArrArr<t_path_id,t_arrClassName_login,typeof _mapRegexPathIds_lespepitestech_login >
type t_mapRegexPathIds_lespepitestech_login = typeof mapRegexPathIds_lespepitestech_login

type t_unionRegex_mapRegexPathIds_lespepitestech_login = arrToUnion<ApplyGetElementNumberIArrArr<[t_mapRegexPathIds_lespepitestech_login],0>[0]>

const mapRegex_lespepitestech_login = new MapRegexToIdPath<t_unionRegex_mapRegexPathIds_lespepitestech_login,t_path_id,t_arrClassName_login,t_unionClassName_login>( {_arrClassname : fjson_lespepitestech_login[str_get_arrClassName]()} , { _mapRegexToIdPath : mapRegexPathIds_lespepitestech_login } ) 

export type t_unionRegex_mapRegex_lespepitestech_login = typeof mapRegex_lespepitestech_login extends MapRegexToIdPath<infer A , any , any, any  > ? A : never
export type t_unionIdPath_mapRegex_lespepitestech_login = typeof mapRegex_lespepitestech_login extends MapRegexToIdPath<any , infer A , any, any  > ? A : never


export const scrapingComponent_lespepitestech_login = new ScrapingComponent<t_unionRegex_mapRegex_lespepitestech_login,t_unionIdPath_mapRegex_lespepitestech_login,t_arrClassName_login,t_unionClassName_login,t_arrChilds_login,t_IJsonComponent_login>( mapRegex_lespepitestech_login , fjson_lespepitestech_login  )
export type t_scrapingComponent_lespepitestech_login = typeof scrapingComponent_lespepitestech_login