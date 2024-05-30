
import { buildArrClassNameType, getChildArr, rootClassName, t_getLeaf } from "@/utils/scraping/PageParsing/types.js";
import { MapRegexToIdPath, pagination_field, t_mapRegexToIdPathFromArrArr } from "@shared/m_regexMapping.js";
import { arrToUnion, ApplyGetElementNumberIArrArr, addSuffix, removePrefix } from "@shared/type.js";
import { entreprise__main_rootClassName, entreprise__main_mainOfComponents } from "./types.js";
import { ScrapingComponent, getTypesFromImportedComponentAndFct } from "@/utils/scraping/PageParsing/ComponentObject.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import {FunctionalWrapperJsonComponentConfig, IFunctionalWrapperJsonComponent}from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/IFunctionalWrapperJsonComponents.js";
import { fieldName_st_cst_buildFromFWJson, str_get_arrClassName } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _IComponent, _Component } from "@/utils/scraping/PageParsing/Schema/_Component/_Component.js";
import { Selector, char_child, classProp, containOp, fct_mod_has, fct_mod_hasDirectChild, fct_mod_not, idProp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { nil_value, str_childs_selectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getConfig } from "@shared/m_json.js";
import { getEntreprise_Helpers } from "../../util/helpers.js";
import { fjson_entreprise__utilMain, json_entreprise__utilMain, t_IJsonComponents_entreprise__utilMain } from "../../util/UtilMain/UtilMain.js";
import { t_arr_classNameType_entreprise__utilText, t_union_classNameType_entreprise__utilText, t_arr_entreprise__utilText,t__IJsonComponents_entreprise__utilText, fjson_entreprise__utilText, json_entreprise__utilText, t_IJsonComponents_entreprise__utilText } from "../../util/UtilText/UtilText.js";
import { str_attribute_name, str_attribute_name_function, str_args_setting, cst_args_getCustomAttribute } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import ChildAttributeType from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/ChildAttributeType.js";
import { str_value_init } from "@/utils/scraping/PageParsing/Schema/_Component/ValTextContent/types.js";
import { strRegexPrice, strRegexPricePerUnit, strRegexQuantity } from "@shared/m_regex_product.js";
import { embedBeginAndEndOfLineStrOrRegex, embedCapturingGroupStrOrRegex, getGroupUnionStrRegex, getUnionNonMatchingGroups } from "@shared/m_regex_prefixAndSuffix.js";
import { regex_domain_tld, regex_head_http_https, regex_head_http_https_complete, regex_join_domain, regex_subdomain } from "@shared/validate-url/regexp.js";
import { str_StartupsMtp } from "@/routes/scraping-services/Services/src/lespepitestech/Services/StartupsMtp/human-actions.js";
import {id_field as id_field_StartupsMtp} from "@/routes/scraping-services/Data/lespepitestech/Services/StartupsMtp/StartupsMtp.js";
import { elem_selector, str_footer, str_header, str_script } from "@/utils/scraping/PageParsing/Schema/utils/misc.js";

export const arr_classNameType_entreprise__main = [
    rootClassName,entreprise__main_rootClassName,"_TextMainContent","_AllLinks"
] as const  


export type t_arr_classNameType_entreprise__main = typeof arr_classNameType_entreprise__main

export type t_union_classNameType_entreprise__main = arrToUnion<t_arr_classNameType_entreprise__main>

const imported_classNameTypeParent_entreprise__main =  [] as const
type t_imported_classNameTypeParent_entreprise__main = typeof imported_classNameTypeParent_entreprise__main
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_entreprise__main,t_IJsonComponents_entreprise__utilMain>(json_entreprise__utilMain,imported_classNameTypeParent_entreprise__main)

const imported_classNameTypeParent_entreprise__text = [] as const
type t_imported_classNameTypeParent_entreprise__text = typeof imported_classNameTypeParent_entreprise__text
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_entreprise__text,t_IJsonComponents_entreprise__utilText>(json_entreprise__utilText,imported_classNameTypeParent_entreprise__text)


export const arr_entreprise__main  = 
    [
        getChildArr<t_arr_classNameType_entreprise__main,0,[1]>(arr_classNameType_entreprise__main,0,[1]),
        getChildArr<t_arr_classNameType_entreprise__main,1,[2,3]>(arr_classNameType_entreprise__main,1,[2,3]),
        getChildArr<t_arr_classNameType_entreprise__main,2>(arr_classNameType_entreprise__main,2),
        getChildArr<t_arr_classNameType_entreprise__main,3>(arr_classNameType_entreprise__main,3),
    ] as const

export type t_arr_entreprise__main = typeof arr_entreprise__main

type t_classNameType_leaf_entreprise__main =  t_getLeaf < t_union_classNameType_entreprise__main, t_arr_entreprise__main> 

const imported_classNameType_entreprise__main = [] as const 
type t_imported_classNameType_entreprise__main = typeof imported_classNameType_entreprise__main


const imported_classNameType_entreprise__text = [] as const 
type t_imported_classNameType_entreprise__text = typeof imported_classNameType_entreprise__text

type _t_union_notSpecified_classNameType = 'Container' 

type t_classNameType_notSpecified_union_text = removePrefix<'Main',t_union_classNameType_entreprise__main|_t_union_notSpecified_classNameType> extends infer A ?
 A extends string ? addSuffix <A,'Text'> extends infer B ? B : never : never :never 

type t_union_notSpecified_classNameType = _t_union_notSpecified_classNameType| t_classNameType_notSpecified_union_text

type t_classNameType_entreprise__main = t_union_classNameType_entreprise__main|t_imported_classNameType_entreprise__main[number]|t_imported_classNameType_entreprise__text[number]|t_union_notSpecified_classNameType
const entreprise__main_helpers = getEntreprise_Helpers<t_classNameType_entreprise__main>()


export const arr_socials = ["linkedin","twitter","instagram","facebook","tiktok","youtube","twitch"] as const
export type t_union_socials = typeof arr_socials[number]

const capturing_name_social = embedCapturingGroupStrOrRegex(getUnionNonMatchingGroups(...arr_socials ),true)
const capturing_url_social = embedCapturingGroupStrOrRegex(`(?:${regex_head_http_https_complete})(?:${regex_subdomain})?${capturing_name_social}${regex_join_domain}${regex_domain_tld}\\/.+`,true)

const notCapturing_name_email = "[a-zA-Z0-9_.+-]+"
const capturing_mail_social = `(?:mailto:)?${embedCapturingGroupStrOrRegex(`${notCapturing_name_email}@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+`,true)}`
const capturing_social = getUnionNonMatchingGroups(capturing_url_social,capturing_mail_social)



const arr_t = elem_selector[str_footer].map(fct_mod_hasDirectChild).map((_str)=>elem_selector[str_footer].map(fct_mod_not).join("")+_str + ">" + 
elem_selector[str_footer].map(fct_mod_not).join("") + elem_selector[str_header].map(fct_mod_not).join("") 
+" "+elem_selector[str_script].map(fct_mod_not).join("")+ elem_selector[str_script].map((_str)=>fct_mod_not(fct_mod_has(_str))).join("")).join(",")



const __IJsonComponents_leaf_entreprise__main : _IJsonComponents<t_classNameType_leaf_entreprise__main> = {
    [arr_classNameType_entreprise__main[2]]:{
        childs_selectors : Component.df[str_childs_selectors],
        childs_attributes : [{[str_attribute_name_function] : "getChildsTextContent"}],
        value_init : nil_value,
        //joinChar_group : "\n"
    },
    [arr_classNameType_entreprise__main[3]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_init : nil_value,
        childs_attributes : [{[str_attribute_name] : "href",value_validation_strRegex : capturing_social}]
    },
}

const __IJsonComponents_entreprise__main : _IJsonComponents<t_union_classNameType_entreprise__main> = {

    ...__IJsonComponents_leaf_entreprise__main,

    [rootClassName]:{
        ...entreprise__main_mainOfComponents
    },
    [arr_classNameType_entreprise__main[1]] :{
        childs_selectors : [
            [arr_t],
            [           
                Selector.cst_onePropAndTagg("",'',"a").toString(),
            ]
            ],
            isScoped : false , 
    },
}


export type t__IJsonComponents_entreprise__main = typeof __IJsonComponents_leaf_entreprise__main

const imported_fjson_entreprise__utilMain = fjson_entreprise__utilMain.getSubJsonComponent<t_imported_classNameType_entreprise__main>(imported_classNameType_entreprise__main)
const imported_fjson_entreprise__main = imported_fjson_entreprise__utilMain.getAddedSubJsonComponent< t_arr_classNameType_entreprise__utilText,t_union_classNameType_entreprise__utilText,t_arr_entreprise__utilText,t__IJsonComponents_entreprise__utilText,t_imported_classNameType_entreprise__text>(imported_classNameType_entreprise__text,fjson_entreprise__utilText)

type t_imported_fjson_entreprise__main = typeof imported_fjson_entreprise__main

type t_arrClassName_import = t_imported_fjson_entreprise__main extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
type t_unionClassName_import = t_imported_fjson_entreprise__main extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
type t_arrChilds_imported_main = t_imported_fjson_entreprise__main extends IFunctionalWrapperJsonComponent <any,any,infer A , any >? A : never 
type t__IJsonComponent_imported_main = t_imported_fjson_entreprise__main extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

export const fjson_entreprise__main  = imported_fjson_entreprise__main[fieldName_st_cst_buildFromFWJson](
    new FunctionalWrapperJsonComponentConfig(arr_classNameType_entreprise__main,arr_entreprise__main,__IJsonComponents_entreprise__main)
)

type t_fjson_entreprise__main = typeof fjson_entreprise__main


export type t_arrClassName_main = t_fjson_entreprise__main extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
export type t_unionClassName_main = t_fjson_entreprise__main extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
export type t_arrChilds_main = t_fjson_entreprise__main extends IFunctionalWrapperJsonComponent <any,any, infer A ,any >? A : never 
export type t_IJsonComponent_main = t_fjson_entreprise__main extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

//create type file with getConfig and arrClassName and all , give it a value in another file with IJsonComponent
// the getConfig is used to configure ScrapingComponent for each route 

export const configJson_entreprise__main  = fjson_entreprise__main[getConfig]()
export type t_configJson_entreprise__main = typeof configJson_entreprise__main

export const json_entreprise__main  = fjson_entreprise__main["toJson"]()
export type t_json_entreprise__main = typeof json_entreprise__main
 
const str_fk= "fk" as const 

const fct_fk = <T extends string > (key :T)=>`${str_fk}_${str_StartupsMtp}_${key}` as  const
export const id_field = fct_fk(id_field_StartupsMtp)

const required_field = [] as const 
const optional_field = ["TextMainContent","AllLinks"] as const

const arr_pathId = [...required_field,...optional_field,...pagination_field] as const 
type t_arr_pathId =  typeof arr_pathId
type t_path_id = t_arr_pathId[number]

export type t_resParsing = {
    [r_k in typeof required_field[number]] : string
} 
&{
    [key in t_path_id] ?: string
}

const _mapRegexPathIds_entreprise__main = [
    [[rootClassName,arr_classNameType_entreprise__main[1],[arr_classNameType_entreprise__main[2]]],["TextMainContent"]],
    [[rootClassName,arr_classNameType_entreprise__main[1],[arr_classNameType_entreprise__main[3]]],["AllLinks"]],
 ] as const 

//t_mapRegexToIdPath< UnionRegex,UnionIdPath ,ArrUnionClassNameType


const mapRegexPathIds_entreprise__main = _mapRegexPathIds_entreprise__main.map((e)=> [MapRegexToIdPath.convertArrKeyInRegexKey(e[0]),e[1]]) as unknown   as t_mapRegexToIdPathFromArrArr<t_path_id,t_arrClassName_main,typeof _mapRegexPathIds_entreprise__main >
type t_mapRegexPathIds_entreprise__main = typeof mapRegexPathIds_entreprise__main

type t_unionRegex_mapRegexPathIds_entreprise__main = arrToUnion<ApplyGetElementNumberIArrArr<[t_mapRegexPathIds_entreprise__main],0>[0]>

const mapRegex_entreprise__main = new MapRegexToIdPath<t_unionRegex_mapRegexPathIds_entreprise__main,t_path_id,t_arrClassName_main,t_unionClassName_main>( {_arrClassname : fjson_entreprise__main[str_get_arrClassName]()} , { _mapRegexToIdPath : mapRegexPathIds_entreprise__main } ) 

export type t_unionRegex_mapRegex_entreprise__main = typeof mapRegex_entreprise__main extends MapRegexToIdPath<infer A , any , any, any  > ? A : never
export type t_unionIdPath_mapRegex_entreprise__main = typeof mapRegex_entreprise__main extends MapRegexToIdPath<any , infer A , any, any  > ? A : never


export const scrapingComponent_entreprise__main = new ScrapingComponent<t_unionRegex_mapRegex_entreprise__main,t_unionIdPath_mapRegex_entreprise__main,t_arrClassName_main,t_unionClassName_main,t_arrChilds_main,t_IJsonComponent_main>( mapRegex_entreprise__main , fjson_entreprise__main  )
export type t_scrapingComponent_entreprise__main = typeof scrapingComponent_entreprise__main