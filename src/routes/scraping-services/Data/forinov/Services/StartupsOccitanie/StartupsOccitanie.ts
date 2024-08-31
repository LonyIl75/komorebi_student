
import { buildArrClassNameType, getChildArr, rootClassName, t_builtArrClassNameType, t_getLeaf } from "@/utils/scraping/PageParsing/types.js";
import { MapRegexToIdPath, item_field, pagination_field, str_Pagination, t_mapRegexToIdPathFromArrArr } from "@shared/m_regexMapping.js";
import { arrToUnion, ApplyGetElementNumberIArrArr, addSuffix, removePrefix } from "@shared/type.js";
import { forinov_startupsOccitanie_rootClassName, forinov_startupsOccitanie_mainOfComponents, str_StartupsOccitanie, t_str_StartupsOccitanie, embedName } from "./types.js";
import { ScrapingComponent, getTypesFromImportedComponentAndFct } from "@/utils/scraping/PageParsing/ComponentObject.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import {FunctionalWrapperJsonComponentConfig, IFunctionalWrapperJsonComponent}from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/IFunctionalWrapperJsonComponents.js";
import { fieldName_st_cst_buildFromFWJson, str_get_arrClassName } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _IComponent, _Component } from "@/utils/scraping/PageParsing/Schema/_Component/_Component.js";
import { Selector, char_child, classProp, containOp, fct_mod_hasDirectChild, fct_mod_not, idProp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { nil_value, str_childs_selectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getConfig } from "@shared/m_json.js";
import { getForinovHelpers } from "../../util/helpers.js";
import { fjson_forinov_utilMain, json_forinov_utilMain, t_IJsonComponents_forinov_utilMain } from "../../util/UtilMain/UtilMain.js";
import { t_arr_classNameType_forinov_utilText, t_union_classNameType_forinov_utilText, t_arr_forinov_utilText,t__IJsonComponents_forinov_utilText, fjson_forinov_utilText, json_forinov_utilText, t_IJsonComponents_forinov_utilText } from "../../util/UtilText/UtilText.js";
import { str_attribute_name, str_attribute_name_function, str_args_setting, cst_args_getCustomAttribute } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import ChildAttributeType from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/ChildAttributeType.js";
import { str_value_init } from "@/utils/scraping/PageParsing/Schema/_Component/ValTextContent/types.js";
import { strRegexPrice, strRegexPricePerUnit, strRegexQuantity } from "@shared/m_regex_product.js";
import { embedCapturingGroupStrOrRegex, getUnionNonMatchingGroups } from "@shared/m_regex_prefixAndSuffix.js";
import { embedding_selector_scope } from "@/utils/scraping/PageParsing/Schema/utils/misc.js";

export const _id_field = "Type" as const
const _id_item = item_field 
const _optional_field = ["Link","FilterText","Summary","Category"] as const 

//TODO map + cast type 
export const arr_classNameType_forinov_startupsOccitanie = [
    rootClassName,`${str_StartupsOccitanie}${rootClassName}`,`${str_StartupsOccitanie}ContainerGrid`,`${str_StartupsOccitanie}Grid`,
    `${str_StartupsOccitanie}${_id_item}`,`${str_StartupsOccitanie}${_id_item}${_optional_field[0]}`,
        `${str_StartupsOccitanie}${_id_field}`,
        `${str_StartupsOccitanie}${_id_item}${_optional_field[1]}`,
            `${str_StartupsOccitanie}${_id_item}${_optional_field[2]}`,`${str_StartupsOccitanie}${_id_item}${_optional_field[3]}`
] as const   

export type t_arr_classNameType_forinov_startupsOccitanie = typeof arr_classNameType_forinov_startupsOccitanie

export type t_union_classNameType_forinov_startupsOccitanie = arrToUnion<t_arr_classNameType_forinov_startupsOccitanie>

const imported_classNameTypeParent_forinov_main =  [] as const
type t_imported_classNameTypeParent_forinov_main = typeof imported_classNameTypeParent_forinov_main
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_forinov_main,t_IJsonComponents_forinov_utilMain>(json_forinov_utilMain,imported_classNameTypeParent_forinov_main)

const imported_classNameTypeParent_forinov_text = [] as const
type t_imported_classNameTypeParent_forinov_text = typeof imported_classNameTypeParent_forinov_text
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_forinov_text,t_IJsonComponents_forinov_utilText>(json_forinov_utilText,imported_classNameTypeParent_forinov_text)


export const arr_forinov_startupsOccitanie  = 
    [
        getChildArr<t_arr_classNameType_forinov_startupsOccitanie,0,[1]>(arr_classNameType_forinov_startupsOccitanie,0,[1]),
        getChildArr<t_arr_classNameType_forinov_startupsOccitanie,1,[2]>(arr_classNameType_forinov_startupsOccitanie,1,[2]),
        getChildArr<t_arr_classNameType_forinov_startupsOccitanie,2,[3]>(arr_classNameType_forinov_startupsOccitanie,2,[3]),
        getChildArr<t_arr_classNameType_forinov_startupsOccitanie,3,[4]>(arr_classNameType_forinov_startupsOccitanie,3,[4]),
        getChildArr<t_arr_classNameType_forinov_startupsOccitanie,4,[5,6,7,8,9]>(arr_classNameType_forinov_startupsOccitanie,4,[5,6,7,8,9]),
        getChildArr<t_arr_classNameType_forinov_startupsOccitanie,5>(arr_classNameType_forinov_startupsOccitanie,5),
        getChildArr<t_arr_classNameType_forinov_startupsOccitanie,6>(arr_classNameType_forinov_startupsOccitanie,6),
        getChildArr<t_arr_classNameType_forinov_startupsOccitanie,7>(arr_classNameType_forinov_startupsOccitanie,7),
        getChildArr<t_arr_classNameType_forinov_startupsOccitanie,8>(arr_classNameType_forinov_startupsOccitanie,8),
        getChildArr<t_arr_classNameType_forinov_startupsOccitanie,9>(arr_classNameType_forinov_startupsOccitanie,9)

    ] as const

export type t_arr_forinov_startupsOccitanie = typeof arr_forinov_startupsOccitanie

type t_classNameType_leaf_forinov_startupsOccitanie =  t_getLeaf < t_union_classNameType_forinov_startupsOccitanie, t_arr_forinov_startupsOccitanie> 

const imported_classNameType_forinov_main = [] as const 
type t_imported_classNameType_forinov_main = typeof imported_classNameType_forinov_main


const imported_classNameType_forinov_text = [] as const 
type t_imported_classNameType_forinov_text = typeof imported_classNameType_forinov_text

type _t_union_notSpecified_classNameType = 'Container' 

type t_classNameType_notSpecified_union_text = removePrefix<t_str_StartupsOccitanie,t_union_classNameType_forinov_startupsOccitanie|_t_union_notSpecified_classNameType> extends infer A ?
 A extends string ? addSuffix <A,'Text'> extends infer B ? B : never : never :never 

type t_union_notSpecified_classNameType = _t_union_notSpecified_classNameType| t_classNameType_notSpecified_union_text

type t_classNameType_forinov_startupsOccitanie = t_union_classNameType_forinov_startupsOccitanie|t_imported_classNameType_forinov_main[number]|t_imported_classNameType_forinov_text[number]|t_union_notSpecified_classNameType
const forinov_startupsOccitanie_helpers = getForinovHelpers<t_classNameType_forinov_startupsOccitanie>()


const __IJsonComponents_leaf_forinov_startupsOccitanie : _IJsonComponents<t_classNameType_leaf_forinov_startupsOccitanie> = {
 
    [arr_classNameType_forinov_startupsOccitanie[5]]:{
        childs_selectors : Component.df[str_childs_selectors],
        [str_value_init] : nil_value,
        childs_attributes : [{[str_attribute_name] : "href"}]
    },
    [arr_classNameType_forinov_startupsOccitanie[6]]:{
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupsOccitanie[7]]:{
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupsOccitanie[8]]:{
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupsOccitanie[9]]:{
        childs_selectors : Component.df[str_childs_selectors],
    }
}

const __IJsonComponents_forinov_startupsOccitanie : _IJsonComponents<t_union_classNameType_forinov_startupsOccitanie> = {

    ...__IJsonComponents_leaf_forinov_startupsOccitanie,

    [rootClassName]:{
        ...forinov_startupsOccitanie_mainOfComponents
    },
    [forinov_startupsOccitanie_rootClassName] :{
        childs_selectors : [...forinov_startupsOccitanie_helpers.arr_selector_join_arrArr(
                                [

                                    [[
                                            {selector:Selector.cst_onePropAndTagg(classProp,'tab-content',"div",containOp)},
                                            {selector:Selector.cst_onePropAndTagg(idProp,'tabPaneOne',"div",containOp)}
                                    ]]
                                ]
                                ,(arr:string[])=>arr.join(char_child))
                        ],
        isScoped : false
    },
    StartupsOccitanieContainerGrid:{
        childs_selectors : 
            [
                [Selector.cst_onePropAndTagg(classProp,'row',"div",containOp).toString()]
            ]
           

    },
    StartupsOccitanieGrid:{
        childs_selectors : [
            ...forinov_startupsOccitanie_helpers.arr_selector_join_arrArr(
            [
                [[
                        {selector:Selector.cst_onePropAndTagg(classProp,'container-card-startup',"div",containOp)}
                ]]
            ],
            (arr:string[])=>Selector.cst_onePropAndTagg("",'',"div").toString() + char_child + arr.join(char_child)
        )]
    },
    StartupsOccitanieItem : {
        childs_selectors :  [
            [
                embedding_selector_scope(Selector.cst_onePropAndTagg("",'',"a").toString())
            ],...forinov_startupsOccitanie_helpers.arr_selector_join_arrArr(
            [
                [[
                    {selector:Selector.cst_onePropAndTagg(classProp,'startup-name-desktop',"div",containOp)},
                    {selector:Selector.cst_onePropAndTagg("",'',"h3")}
                ]],
                [[
                    {selector:Selector.cst_onePropAndTagg(classProp,'card-startup-filter-principal',"p",containOp)},
                    {selector:Selector.cst_onePropAndTagg(classProp,'principal-filter-text',"span",containOp)}
                ]]
            ],(arr:string[])=>arr.join(char_child))
            ,...forinov_startupsOccitanie_helpers.arr_selector([
                fct_mod_not(fct_mod_hasDirectChild(Selector.cst_onePropAndTagg(classProp,'badge',"span",containOp).toString())),
                char_child + Selector.cst_onePropAndTagg(classProp,'badge',"span",containOp).toString()
            ]
                ,
                (str_selector)=>  Selector.cst_onePropAndTagg(classProp,'description',"div",containOp).toString() + char_child + Selector.cst_onePropAndTagg(classProp,'card-startup-description',"p",containOp).toString() + str_selector).map((elm)=>[elm])
            ],
            isScoped : false
            
    }
}


export type t__IJsonComponents_forinov_startupsOccitanie = typeof __IJsonComponents_leaf_forinov_startupsOccitanie

const imported_fjson_forinov_utilMain = fjson_forinov_utilMain.getSubJsonComponent<t_imported_classNameType_forinov_main>(imported_classNameType_forinov_main)
const imported_fjson_forinov_startupsOccitanie = imported_fjson_forinov_utilMain.getAddedSubJsonComponent< t_arr_classNameType_forinov_utilText,t_union_classNameType_forinov_utilText,t_arr_forinov_utilText,t__IJsonComponents_forinov_utilText,t_imported_classNameType_forinov_text>(imported_classNameType_forinov_text,fjson_forinov_utilText)

type t_imported_fjson_forinov_startupsOccitanie = typeof imported_fjson_forinov_startupsOccitanie

type t_arrClassName_import = t_imported_fjson_forinov_startupsOccitanie extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
type t_unionClassName_import = t_imported_fjson_forinov_startupsOccitanie extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
type t_arrChilds_imported_startupsOccitanie = t_imported_fjson_forinov_startupsOccitanie extends IFunctionalWrapperJsonComponent <any,any,infer A , any >? A : never 
type t__IJsonComponent_imported_startupsOccitanie = t_imported_fjson_forinov_startupsOccitanie extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

export const fjson_forinov_startupsOccitanie  = imported_fjson_forinov_startupsOccitanie[fieldName_st_cst_buildFromFWJson](
    new FunctionalWrapperJsonComponentConfig(arr_classNameType_forinov_startupsOccitanie,arr_forinov_startupsOccitanie,__IJsonComponents_forinov_startupsOccitanie)
)

type t_fjson_forinov_startupsOccitanie = typeof fjson_forinov_startupsOccitanie


export type t_arrClassName_startupsOccitanie = t_fjson_forinov_startupsOccitanie extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
export type t_unionClassName_startupsOccitanie = t_fjson_forinov_startupsOccitanie extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
export type t_arrChilds_startupsOccitanie = t_fjson_forinov_startupsOccitanie extends IFunctionalWrapperJsonComponent <any,any, infer A ,any >? A : never 
export type t_IJsonComponent_startupsOccitanie = t_fjson_forinov_startupsOccitanie extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

//create type file with getConfig and arrClassName and all , give it a value in another file with IJsonComponent
// the getConfig is used to configure ScrapingComponent for each route 

export const configJson_forinov_startupsOccitanie  = fjson_forinov_startupsOccitanie[getConfig]()
export type t_configJson_forinov_startupsOccitanie = typeof configJson_forinov_startupsOccitanie

export const json_forinov_startupsOccitanie  = fjson_forinov_startupsOccitanie["toJson"]()
export type t_json_forinov_startupsOccitanie = typeof json_forinov_startupsOccitanie

export const id_field = embedName(_id_field)
export const id_item = embedName(_id_item)
const required_field = [] as const 
const optional_field = _optional_field.map(embedName)

const arr_pathId = [id_field,...required_field,...optional_field] as const 
type t_arr_pathId =  typeof arr_pathId
type t_path_id = t_arr_pathId[number]

export type t_resParsing = {
    [r_k in typeof required_field[number]] : string
} 
&{
    [key in t_path_id] ?: string
}

const _mapRegexPathIds_forinov_startupsOccitanie = [
    [[rootClassName,forinov_startupsOccitanie_rootClassName,"StartupsOccitanieContainerGrid","StartupsOccitanieGrid",id_item,["StartupsOccitanieItemLink"]],["StartupsOccitanieLink"]],
    [[rootClassName,forinov_startupsOccitanie_rootClassName,"StartupsOccitanieContainerGrid","StartupsOccitanieGrid",id_item,["StartupsOccitanieType"]],[id_field]],
    [[rootClassName,forinov_startupsOccitanie_rootClassName,"StartupsOccitanieContainerGrid","StartupsOccitanieGrid",id_item,["StartupsOccitanieItemFilterText"]],["StartupsOccitanieFilterText"]],
    [[rootClassName,forinov_startupsOccitanie_rootClassName,"StartupsOccitanieContainerGrid","StartupsOccitanieGrid",id_item,["StartupsOccitanieItemSummary"]],["StartupsOccitanieSummary"]],
    [[rootClassName,forinov_startupsOccitanie_rootClassName,"StartupsOccitanieContainerGrid","StartupsOccitanieGrid",id_item,["StartupsOccitanieItemCategory"]],["StartupsOccitanieCategory"]]

 ] as const 

//t_mapRegexToIdPath< UnionRegex,UnionIdPath ,ArrUnionClassNameType


const mapRegexPathIds_forinov_startupsOccitanie = _mapRegexPathIds_forinov_startupsOccitanie.map((e)=> [MapRegexToIdPath.convertArrKeyInRegexKey(e[0]),e[1]]) as unknown   as t_mapRegexToIdPathFromArrArr<t_path_id,t_arrClassName_startupsOccitanie,typeof _mapRegexPathIds_forinov_startupsOccitanie >
type t_mapRegexPathIds_forinov_startupsOccitanie = typeof mapRegexPathIds_forinov_startupsOccitanie

type t_unionRegex_mapRegexPathIds_forinov_startupsOccitanie = arrToUnion<ApplyGetElementNumberIArrArr<[t_mapRegexPathIds_forinov_startupsOccitanie],0>[0]>

const mapRegex_forinov_startupsOccitanie = new MapRegexToIdPath<t_unionRegex_mapRegexPathIds_forinov_startupsOccitanie,t_path_id,t_arrClassName_startupsOccitanie,t_unionClassName_startupsOccitanie>( {_arrClassname : fjson_forinov_startupsOccitanie[str_get_arrClassName]()} , { _mapRegexToIdPath : mapRegexPathIds_forinov_startupsOccitanie } ) 

export type t_unionRegex_mapRegex_forinov_startupsOccitanie = typeof mapRegex_forinov_startupsOccitanie extends MapRegexToIdPath<infer A , any , any, any  > ? A : never
export type t_unionIdPath_mapRegex_forinov_startupsOccitanie = typeof mapRegex_forinov_startupsOccitanie extends MapRegexToIdPath<any , infer A , any, any  > ? A : never


export const scrapingComponent_forinov_startupsOccitanie = new ScrapingComponent<t_unionRegex_mapRegex_forinov_startupsOccitanie,t_unionIdPath_mapRegex_forinov_startupsOccitanie,t_arrClassName_startupsOccitanie,t_unionClassName_startupsOccitanie,t_arrChilds_startupsOccitanie,t_IJsonComponent_startupsOccitanie>( mapRegex_forinov_startupsOccitanie , fjson_forinov_startupsOccitanie  )
export type t_scrapingComponent_forinov_startupsOccitanie = typeof scrapingComponent_forinov_startupsOccitanie