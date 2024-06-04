
import { buildArrClassNameType, getChildArr, rootClassName, t_getLeaf } from "@/utils/scraping/PageParsing/types.js";
import { MapRegexToIdPath, item_field, pagination_field, str_Pagination, t_mapRegexToIdPathFromArrArr } from "@shared/m_regexMapping.js";
import { arrToUnion, ApplyGetElementNumberIArrArr, addSuffix, removePrefix } from "@shared/type.js";
import { societeTech_startupMtp_rootClassName, societeTech_startupMtp_mainOfComponents, str_StartupMtp, t_str_StartupMtp, embedName } from "./types.js";
import { ScrapingComponent, getTypesFromImportedComponentAndFct } from "@/utils/scraping/PageParsing/ComponentObject.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import {FunctionalWrapperJsonComponentConfig, IFunctionalWrapperJsonComponent}from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/IFunctionalWrapperJsonComponents.js";
import { fieldName_st_cst_buildFromFWJson, str_get_arrClassName } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _IComponent, _Component } from "@/utils/scraping/PageParsing/Schema/_Component/_Component.js";
import { Selector, char_child, classProp, containOp, fct_mod_has, fct_mod_hasDirectChild, fct_mod_not, idProp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { nil_value, str_childs_selectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getConfig } from "@shared/m_json.js";
import { getSocieteTechHelpers } from "../../util/helpers.js";
import { fjson_societeTech_utilMain, json_societeTech_utilMain, t_IJsonComponents_societeTech_utilMain } from "../../util/UtilMain/UtilMain.js";
import { t_arr_classNameType_societeTech_utilText, t_union_classNameType_societeTech_utilText, t_arr_societeTech_utilText,t__IJsonComponents_societeTech_utilText, fjson_societeTech_utilText, json_societeTech_utilText, t_IJsonComponents_societeTech_utilText } from "../../util/UtilText/UtilText.js";
import { str_attribute_name, str_attribute_name_function, str_args_setting, cst_args_getCustomAttribute } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import ChildAttributeType from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/ChildAttributeType.js";
import { str_value_init } from "@/utils/scraping/PageParsing/Schema/_Component/ValTextContent/types.js";
import { strRegexPrice, strRegexPricePerUnit, strRegexQuantity } from "@shared/m_regex_product.js";
import { embedCapturingGroupStrOrRegex, embedNegativeClassStrOrRegex, embedOptNonCapturingGroupStrOrRegex, embedOptionalStrOrRegex, getUnionNonMatchingGroups } from "@shared/m_regex_prefixAndSuffix.js";
import { repeat } from "@shared/m_array.js";
import { convertStrToRegexStr } from "@shared/m_regex.js";

export const _id_field = "Type" as const
const _id_item = item_field 
const _optional_field = ["Presentation","CEOs","CreationDate","Headquarters","EmployeesNumber","ActivitySectors","OtherActivitySectors","MarketClients","Tech","FrenchTech","Business","JobsAdressed","ProductsServices","MainClients","InternationalPresence","IncubatorsAccelerators","FundRaisingDate","FundRaisingType","FundRaisingAmount","InvestorsShareholders","Link"] as const

export const arr_classNameType_societeTech_startupMtp = [
    rootClassName,`${str_StartupMtp}${rootClassName}`,
    `${str_StartupMtp}ContainerActu`,
    `${str_StartupMtp}${_id_item}`,
        //`${str_StartupMtp}Description`,
            `${str_StartupMtp}Presentation`,`${str_StartupMtp}${_id_field}`,`${str_StartupMtp}CEOs`,`${str_StartupMtp}CreationDate`,`${str_StartupMtp}Headquarters`,`${str_StartupMtp}EmployeesNumber`,`${str_StartupMtp}ActivitySectors`,`${str_StartupMtp}OtherActivitySectors`,`${str_StartupMtp}MarketClients`,`${str_StartupMtp}Tech`,`${str_StartupMtp}FrenchTech`,`${str_StartupMtp}Business`,`${str_StartupMtp}JobsAdressed`,`${str_StartupMtp}ProductsServices`,`${str_StartupMtp}MainClients`,`${str_StartupMtp}InternationalPresence`,`${str_StartupMtp}IncubatorsAccelerators`,`${str_StartupMtp}FundRaisingDate`,`${str_StartupMtp}FundRaisingType`,`${str_StartupMtp}FundRaisingAmount`,`${str_StartupMtp}InvestorsShareholders`,`${str_StartupMtp}Link`
] as const   

export type t_arr_classNameType_societeTech_startupMtp = typeof arr_classNameType_societeTech_startupMtp

export type t_union_classNameType_societeTech_startupMtp = arrToUnion<t_arr_classNameType_societeTech_startupMtp>

const imported_classNameTypeParent_societeTech_main =  [] as const
type t_imported_classNameTypeParent_societeTech_main = typeof imported_classNameTypeParent_societeTech_main
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_societeTech_main,t_IJsonComponents_societeTech_utilMain>(json_societeTech_utilMain,imported_classNameTypeParent_societeTech_main)

const imported_classNameTypeParent_societeTech_text = [] as const
type t_imported_classNameTypeParent_societeTech_text = typeof imported_classNameTypeParent_societeTech_text
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_societeTech_text,t_IJsonComponents_societeTech_utilText>(json_societeTech_utilText,imported_classNameTypeParent_societeTech_text)

export const arr_societeTech_startupMtp  = 
    [
        getChildArr<t_arr_classNameType_societeTech_startupMtp,0,[1]>(arr_classNameType_societeTech_startupMtp,0,[1]),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,1,[2]>(arr_classNameType_societeTech_startupMtp,1,[2]),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,2,[3]>(arr_classNameType_societeTech_startupMtp,2,[3]),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,3,[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]>(arr_classNameType_societeTech_startupMtp,3,[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,4>(arr_classNameType_societeTech_startupMtp,4),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,5>(arr_classNameType_societeTech_startupMtp,5),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,6>(arr_classNameType_societeTech_startupMtp,6),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,7>(arr_classNameType_societeTech_startupMtp,7),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,8>(arr_classNameType_societeTech_startupMtp,8),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,9>(arr_classNameType_societeTech_startupMtp,9),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,10>(arr_classNameType_societeTech_startupMtp,10),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,11>(arr_classNameType_societeTech_startupMtp,11),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,12>(arr_classNameType_societeTech_startupMtp,12),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,13>(arr_classNameType_societeTech_startupMtp,13),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,14>(arr_classNameType_societeTech_startupMtp,14),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,15>(arr_classNameType_societeTech_startupMtp,15),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,16>(arr_classNameType_societeTech_startupMtp,16),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,17>(arr_classNameType_societeTech_startupMtp,17),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,18>(arr_classNameType_societeTech_startupMtp,18),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,19>(arr_classNameType_societeTech_startupMtp,19),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,20>(arr_classNameType_societeTech_startupMtp,20),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,21>(arr_classNameType_societeTech_startupMtp,21),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,22>(arr_classNameType_societeTech_startupMtp,22),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,23>(arr_classNameType_societeTech_startupMtp,23),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,24>(arr_classNameType_societeTech_startupMtp,24),
        getChildArr<t_arr_classNameType_societeTech_startupMtp,25>(arr_classNameType_societeTech_startupMtp,25)
    ] as const

export type t_arr_societeTech_startupMtp = typeof arr_societeTech_startupMtp

type t_classNameType_leaf_societeTech_startupMtp =  t_getLeaf < t_union_classNameType_societeTech_startupMtp, t_arr_societeTech_startupMtp> 

const imported_classNameType_societeTech_main = [] as const 
type t_imported_classNameType_societeTech_main = typeof imported_classNameType_societeTech_main


const imported_classNameType_societeTech_text = [] as const 
type t_imported_classNameType_societeTech_text = typeof imported_classNameType_societeTech_text

type _t_union_notSpecified_classNameType = 'Container' 

type t_classNameType_notSpecified_union_text = removePrefix<t_str_StartupMtp,t_union_classNameType_societeTech_startupMtp|_t_union_notSpecified_classNameType> extends infer A ?
 A extends string ? addSuffix <A,'Text'> extends infer B ? B : never : never :never 

type t_union_notSpecified_classNameType = _t_union_notSpecified_classNameType| t_classNameType_notSpecified_union_text

type t_classNameType_societeTech_startupMtp = t_union_classNameType_societeTech_startupMtp|t_imported_classNameType_societeTech_main[number]|t_imported_classNameType_societeTech_text[number]|t_union_notSpecified_classNameType
const societeTech_startupMtp_helpers = getSocieteTechHelpers<t_classNameType_societeTech_startupMtp>()

export const fct_shorthand_regex = (str:string, capturingGroup_regexStr ?: string ,delimit : string = '\n') => {
    const strRegex_delim = convertStrToRegexStr(delimit)
    if(capturingGroup_regexStr === undefined) capturingGroup_regexStr = embedCapturingGroupStrOrRegex(`${embedNegativeClassStrOrRegex(strRegex_delim,true)}+`,true)
    str = convertStrToRegexStr(str)
    const strRegexValue =  embedOptNonCapturingGroupStrOrRegex(` ${capturingGroup_regexStr}`,true)
    return `${str} :${strRegexValue}`
}
const __IJsonComponents_leaf_societeTech_startupMtp : _IJsonComponents<t_classNameType_leaf_societeTech_startupMtp> = {
 
    [arr_classNameType_societeTech_startupMtp[4]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:`Voici une présentation de[^\\n]+\\n\\s*([^\\n]+)\\n`
    },
    [arr_classNameType_societeTech_startupMtp[5]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Dénomination sociale / nom commercial`)
    },
    [arr_classNameType_societeTech_startupMtp[6]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Fondateurs, Co-fondateurs & Dirigeants`)
    },
    [arr_classNameType_societeTech_startupMtp[7]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Date de création`)
    },
    [arr_classNameType_societeTech_startupMtp[8]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Siège social`)
    },
    [arr_classNameType_societeTech_startupMtp[9]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Effectif`)
    },
    [arr_classNameType_societeTech_startupMtp[10]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Secteurs d’activité`)
    },
    [arr_classNameType_societeTech_startupMtp[11]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Autres Secteurs d’activité`)
    },
    [arr_classNameType_societeTech_startupMtp[12]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Marché & Clients`)
    },
    [arr_classNameType_societeTech_startupMtp[13]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Tech`)
    },
    [arr_classNameType_societeTech_startupMtp[14]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`French Tech`)
    },
    [arr_classNameType_societeTech_startupMtp[15]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Business`)
    },
    [arr_classNameType_societeTech_startupMtp[16]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Métiers adressés`)
    },
    [arr_classNameType_societeTech_startupMtp[17]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Types de produits / services`)
    },
    [arr_classNameType_societeTech_startupMtp[18]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Principaux clients`)
    },
    [arr_classNameType_societeTech_startupMtp[19]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Présence internationale`)
    },
    [arr_classNameType_societeTech_startupMtp[20]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Incubateurs & Accélérateurs`)
    },
    [arr_classNameType_societeTech_startupMtp[21]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Date de la levée de fonds`)
    },
    [arr_classNameType_societeTech_startupMtp[22]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Type de levée de fonds`)
    },
    [arr_classNameType_societeTech_startupMtp[23]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Montant du financement`)
    },
    [arr_classNameType_societeTech_startupMtp[24]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex:fct_shorthand_regex(`Investisseurs & Actionnaires`)
    },
    [arr_classNameType_societeTech_startupMtp[25]]:{//TODO
        childs_selectors : Component.df[str_childs_selectors],
        //value_validation_strRegex:fct_shorthand_regex(`Site Internet`)
        childs_attributes:[{[str_attribute_name]: "href",selector:Selector.cst_onePropAndTagg("",'',"a").toString()}]
    }
}

const __IJsonComponents_societeTech_startupMtp : _IJsonComponents<t_union_classNameType_societeTech_startupMtp> = {

    ...__IJsonComponents_leaf_societeTech_startupMtp,

    [rootClassName]:{
        ...societeTech_startupMtp_mainOfComponents
    },
    [societeTech_startupMtp_rootClassName] :{
        childs_selectors : [[
            Selector.cst_onePropAndTagg(classProp,'content-woo-area',"div",containOp).toString() +char_child + Selector.cst_onePropAndTagg(classProp,'content-area',"div",containOp).toString() +fct_mod_has( Selector.cst_onePropAndTagg(classProp,'woocommerce',"nav",containOp).toString())
        ]],
        isScoped : false
    },
    StartupMtpContainerActu:{
        childs_selectors : [[
            Selector.cst_onePropAndTagg("",'',"div").toString() +fct_mod_hasDirectChild( Selector.cst_onePropAndTagg(classProp,'woocommerce',"nav",containOp).toString())
        ]],
        isScoped : false

    },
    StartupMtpItem:{
        childs_selectors : 
        [...repeat([Selector.cst_onePropAndTagg(classProp,'content-woo-section--description',"div",containOp).toString()],21),
        [Selector.cst_onePropAndTagg(classProp,'content-woo-section--description',"div",containOp).toString()+char_child + Selector.cst_onePropAndTagg('','',"p").toString()+fct_mod_hasDirectChild(Selector.cst_onePropAndTagg('','',"a").toString())]]//TODO allow value_validation_strRegex to filter component ( if valuation_strRegex i_child.filter((e)=>match(e.textContent,valuation_strRegex)) )
    },
    /*StartupMtpDescription: {
        childs_selectors :repeat([Selector.cst_onePropAndTagg('','',"p").toString()],22)
    }*/
}


export type t__IJsonComponents_societeTech_startupMtp = typeof __IJsonComponents_leaf_societeTech_startupMtp

const imported_fjson_societeTech_utilMain = fjson_societeTech_utilMain.getSubJsonComponent<t_imported_classNameType_societeTech_main>(imported_classNameType_societeTech_main)
const imported_fjson_societeTech_startupMtp = imported_fjson_societeTech_utilMain.getAddedSubJsonComponent< t_arr_classNameType_societeTech_utilText,t_union_classNameType_societeTech_utilText,t_arr_societeTech_utilText,t__IJsonComponents_societeTech_utilText,t_imported_classNameType_societeTech_text>(imported_classNameType_societeTech_text,fjson_societeTech_utilText)

type t_imported_fjson_societeTech_startupMtp = typeof imported_fjson_societeTech_startupMtp

type t_arrClassName_import = t_imported_fjson_societeTech_startupMtp extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
type t_unionClassName_import = t_imported_fjson_societeTech_startupMtp extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
type t_arrChilds_imported_startupMtp = t_imported_fjson_societeTech_startupMtp extends IFunctionalWrapperJsonComponent <any,any,infer A , any >? A : never 
type t__IJsonComponent_imported_startupMtp = t_imported_fjson_societeTech_startupMtp extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

export const fjson_societeTech_startupMtp  = imported_fjson_societeTech_startupMtp[fieldName_st_cst_buildFromFWJson](
    new FunctionalWrapperJsonComponentConfig(arr_classNameType_societeTech_startupMtp,arr_societeTech_startupMtp,__IJsonComponents_societeTech_startupMtp)
)

type t_fjson_societeTech_startupMtp = typeof fjson_societeTech_startupMtp


export type t_arrClassName_startupMtp = t_fjson_societeTech_startupMtp extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
export type t_unionClassName_startupMtp = t_fjson_societeTech_startupMtp extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
export type t_arrChilds_startupMtp = t_fjson_societeTech_startupMtp extends IFunctionalWrapperJsonComponent <any,any, infer A ,any >? A : never 
export type t_IJsonComponent_startupMtp = t_fjson_societeTech_startupMtp extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

//create type file with getConfig and arrClassName and all , give it a value in another file with IJsonComponent
// the getConfig is used to configure ScrapingComponent for each route 

export const configJson_societeTech_startupMtp  = fjson_societeTech_startupMtp[getConfig]()
export type t_configJson_societeTech_startupMtp = typeof configJson_societeTech_startupMtp

export const json_societeTech_startupMtp  = fjson_societeTech_startupMtp["toJson"]()
export type t_json_societeTech_startupMtp = typeof json_societeTech_startupMtp

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

const _mapRegexPathIds_societeTech_startupMtp = [
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpPresentation"]],["StartupMtpPresentation"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,[id_field]],[id_field]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpCEOs"]],["StartupMtpCEOs"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpCreationDate"]],["StartupMtpCreationDate"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpHeadquarters"]],["StartupMtpHeadquarters"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpEmployeesNumber"]],["StartupMtpEmployeesNumber"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpActivitySectors"]],["StartupMtpActivitySectors"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpOtherActivitySectors"]],["StartupMtpOtherActivitySectors"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpMarketClients"]],["StartupMtpMarketClients"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpTech"]],["StartupMtpTech"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpFrenchTech"]],["StartupMtpFrenchTech"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpBusiness"]],["StartupMtpBusiness"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpJobsAdressed"]],["StartupMtpJobsAdressed"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpProductsServices"]],["StartupMtpProductsServices"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpMainClients"]],["StartupMtpMainClients"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpInternationalPresence"]],["StartupMtpInternationalPresence"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpIncubatorsAccelerators"]],["StartupMtpIncubatorsAccelerators"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpFundRaisingDate"]],["StartupMtpFundRaisingDate"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpFundRaisingType"]],["StartupMtpFundRaisingType"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpFundRaisingAmount"]],["StartupMtpFundRaisingAmount"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpInvestorsShareholders"]],["StartupMtpInvestorsShareholders"]],
    [[rootClassName,societeTech_startupMtp_rootClassName,"StartupMtpContainerActu",id_item,["StartupMtpLink"]],["StartupMtpLink"]]

 ] as const 

//t_mapRegexToIdPath< UnionRegex,UnionIdPath ,ArrUnionClassNameType


const mapRegexPathIds_societeTech_startupMtp = _mapRegexPathIds_societeTech_startupMtp.map((e)=> [MapRegexToIdPath.convertArrKeyInRegexKey(e[0]),e[1]]) as unknown   as t_mapRegexToIdPathFromArrArr<t_path_id,t_arrClassName_startupMtp,typeof _mapRegexPathIds_societeTech_startupMtp >
type t_mapRegexPathIds_societeTech_startupMtp = typeof mapRegexPathIds_societeTech_startupMtp

type t_unionRegex_mapRegexPathIds_societeTech_startupMtp = arrToUnion<ApplyGetElementNumberIArrArr<[t_mapRegexPathIds_societeTech_startupMtp],0>[0]>

const mapRegex_societeTech_startupMtp = new MapRegexToIdPath<t_unionRegex_mapRegexPathIds_societeTech_startupMtp,t_path_id,t_arrClassName_startupMtp,t_unionClassName_startupMtp>( {_arrClassname : fjson_societeTech_startupMtp[str_get_arrClassName]()} , { _mapRegexToIdPath : mapRegexPathIds_societeTech_startupMtp } ) 

export type t_unionRegex_mapRegex_societeTech_startupMtp = typeof mapRegex_societeTech_startupMtp extends MapRegexToIdPath<infer A , any , any, any  > ? A : never
export type t_unionIdPath_mapRegex_societeTech_startupMtp = typeof mapRegex_societeTech_startupMtp extends MapRegexToIdPath<any , infer A , any, any  > ? A : never


export const scrapingComponent_societeTech_startupMtp = new ScrapingComponent<t_unionRegex_mapRegex_societeTech_startupMtp,t_unionIdPath_mapRegex_societeTech_startupMtp,t_arrClassName_startupMtp,t_unionClassName_startupMtp,t_arrChilds_startupMtp,t_IJsonComponent_startupMtp>( mapRegex_societeTech_startupMtp , fjson_societeTech_startupMtp  )
export type t_scrapingComponent_societeTech_startupMtp = typeof scrapingComponent_societeTech_startupMtp