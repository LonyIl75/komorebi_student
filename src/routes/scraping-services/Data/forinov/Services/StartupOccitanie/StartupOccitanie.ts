
import { buildArrClassNameType, getChildArr, rootClassName, t_builtArrClassNameType, t_getLeaf } from "@/utils/scraping/PageParsing/types.js";
import { MapRegexToIdPath, item_field, pagination_field, str_Pagination, t_mapRegexToIdPathFromArrArr } from "@shared/m_regexMapping.js";
import { arrToUnion, ApplyGetElementNumberIArrArr, addSuffix, removePrefix } from "@shared/type.js";
import { forinov_startupOccitanie_rootClassName, forinov_startupOccitanie_mainOfComponents, str_StartupOccitanie, t_str_StartupOccitanie, embedName } from "./types.js";
import { ScrapingComponent, getTypesFromImportedComponentAndFct } from "@/utils/scraping/PageParsing/ComponentObject.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import {FunctionalWrapperJsonComponentConfig, IFunctionalWrapperJsonComponent}from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/IFunctionalWrapperJsonComponents.js";
import { fieldName_st_cst_buildFromFWJson, str_get_arrClassName } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _IComponent, _Component } from "@/utils/scraping/PageParsing/Schema/_Component/_Component.js";
import { Selector, char_child, classProp, containOp, fct_mod_has, fct_mod_hasDirectChild, fct_mod_not, idProp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
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
const _optional_field = ["Link","FilterText","Summary","Category","Geoloc","CreationDate","People","Technologies","Objectifs","Presence","Immat","Addresse","Contact","TargetSector","TargetJobs","PartnerShip","Client","Paternaire"] as const 

//TODO map + cast type 
export const arr_classNameType_forinov_startupOccitanie = [
    rootClassName,`${str_StartupOccitanie}${rootClassName}`,`${str_StartupOccitanie}ContainerProfil`,

    `${str_StartupOccitanie}ProfilHeader`,
        `${str_StartupOccitanie}ProfilName`,`${str_StartupOccitanie}Geoloc`,`${str_StartupOccitanie}Description`,`${str_StartupOccitanie}FilterText`,
        `${str_StartupOccitanie}ProfilHeaderFooter`,
            `${str_StartupOccitanie}CreationDate`,`${str_StartupOccitanie}People`,
    `${str_StartupOccitanie}Journal`,
            `${str_StartupOccitanie}JournalMenu`,`${str_StartupOccitanie}JournalContainer`,
                `${str_StartupOccitanie}Technologies`, `${str_StartupOccitanie}CardObjectifs`,`${str_StartupOccitanie}Presence`,`${str_StartupOccitanie}Immat`,`${str_StartupOccitanie}Addresse`,`${str_StartupOccitanie}ContainerWebsite`,`${str_StartupOccitanie}Contact`,
                `${str_StartupOccitanie}TargetJobs`,`${str_StartupOccitanie}TargetSector`,`${str_StartupOccitanie}TargetPartnership`,


    `${str_StartupOccitanie}MarcheEcosystem`,
        `${str_StartupOccitanie}Clients`,
            `${str_StartupOccitanie}Client`,

        `${str_StartupOccitanie}Partenaires`,
            `${str_StartupOccitanie}Partenaire`,

] as const   

export type t_arr_classNameType_forinov_startupOccitanie = typeof arr_classNameType_forinov_startupOccitanie

export type t_union_classNameType_forinov_startupOccitanie = arrToUnion<t_arr_classNameType_forinov_startupOccitanie>

const imported_classNameTypeParent_forinov_main =  [] as const
type t_imported_classNameTypeParent_forinov_main = typeof imported_classNameTypeParent_forinov_main
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_forinov_main,t_IJsonComponents_forinov_utilMain>(json_forinov_utilMain,imported_classNameTypeParent_forinov_main)

const imported_classNameTypeParent_forinov_text = [] as const
type t_imported_classNameTypeParent_forinov_text = typeof imported_classNameTypeParent_forinov_text
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_forinov_text,t_IJsonComponents_forinov_utilText>(json_forinov_utilText,imported_classNameTypeParent_forinov_text)


export const arr_forinov_startupOccitanie  = 
    [
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,0,[1]>(arr_classNameType_forinov_startupOccitanie,0,[1]),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,1,[2]>(arr_classNameType_forinov_startupOccitanie,1,[2]),

        getChildArr<t_arr_classNameType_forinov_startupOccitanie,2,[3,11,24]>(arr_classNameType_forinov_startupOccitanie,2,[3,11,24]),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,3,[4,5,6,7,8]>(arr_classNameType_forinov_startupOccitanie,3,[4,5,6,7,8]),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,4>(arr_classNameType_forinov_startupOccitanie,4),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,5>(arr_classNameType_forinov_startupOccitanie,5),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,6>(arr_classNameType_forinov_startupOccitanie,6),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,7>(arr_classNameType_forinov_startupOccitanie,7),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,8,[9,10]>(arr_classNameType_forinov_startupOccitanie,8,[9,10]),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,9>(arr_classNameType_forinov_startupOccitanie,9),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,10>(arr_classNameType_forinov_startupOccitanie,10),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,11,[12,13]>(arr_classNameType_forinov_startupOccitanie,11,[12,13]),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,12,[14,15,16,17,18,19,20]>(arr_classNameType_forinov_startupOccitanie,12,[14,15,16,17,18,19,20]),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,14>(arr_classNameType_forinov_startupOccitanie,14),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,15>(arr_classNameType_forinov_startupOccitanie,15),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,16>(arr_classNameType_forinov_startupOccitanie,16),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,17>(arr_classNameType_forinov_startupOccitanie,17),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,18>(arr_classNameType_forinov_startupOccitanie,18),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,19>(arr_classNameType_forinov_startupOccitanie,19),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,20>(arr_classNameType_forinov_startupOccitanie,20),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,13,[21,22,23]>(arr_classNameType_forinov_startupOccitanie,13,[21,22,23]),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,21>(arr_classNameType_forinov_startupOccitanie,21),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,22>(arr_classNameType_forinov_startupOccitanie,22),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,23>(arr_classNameType_forinov_startupOccitanie,23),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,24,[25,26]>(arr_classNameType_forinov_startupOccitanie,24,[25,26]),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,25,[26]>(arr_classNameType_forinov_startupOccitanie,25,[26]),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,26>(arr_classNameType_forinov_startupOccitanie,26),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,27,[28]>(arr_classNameType_forinov_startupOccitanie,27,[28]),
        getChildArr<t_arr_classNameType_forinov_startupOccitanie,28>(arr_classNameType_forinov_startupOccitanie,28),

    ] as const

export type t_arr_forinov_startupOccitanie = typeof arr_forinov_startupOccitanie

type t_classNameType_leaf_forinov_startupOccitanie =  t_getLeaf < t_union_classNameType_forinov_startupOccitanie, t_arr_forinov_startupOccitanie> 

const imported_classNameType_forinov_main = [] as const 
type t_imported_classNameType_forinov_main = typeof imported_classNameType_forinov_main


const imported_classNameType_forinov_text = [] as const 
type t_imported_classNameType_forinov_text = typeof imported_classNameType_forinov_text

type _t_union_notSpecified_classNameType = 'Container' 

type t_classNameType_notSpecified_union_text = removePrefix<t_str_StartupOccitanie,t_union_classNameType_forinov_startupOccitanie|_t_union_notSpecified_classNameType> extends infer A ?
 A extends string ? addSuffix <A,'Text'> extends infer B ? B : never : never :never 

type t_union_notSpecified_classNameType = _t_union_notSpecified_classNameType| t_classNameType_notSpecified_union_text

type t_classNameType_forinov_startupOccitanie = t_union_classNameType_forinov_startupOccitanie|t_imported_classNameType_forinov_main[number]|t_imported_classNameType_forinov_text[number]|t_union_notSpecified_classNameType
const forinov_startupOccitanie_helpers = getForinovHelpers<t_classNameType_forinov_startupOccitanie>()


const __IJsonComponents_leaf_forinov_startupOccitanie : _IJsonComponents<t_classNameType_leaf_forinov_startupOccitanie> = {
    [arr_classNameType_forinov_startupOccitanie[4]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[5]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[6]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[7]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[9]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[10]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[14]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[15]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[16]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[17]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[18]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[19]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[20]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[21]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },

    [arr_classNameType_forinov_startupOccitanie[22]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_forinov_startupOccitanie[23]] : {
        childs_selectors : Component.df[str_childs_selectors],

    },
    [arr_classNameType_forinov_startupOccitanie[26]] : {
        childs_selectors : Component.df[str_childs_selectors],
        childs_attributes : [{[str_attribute_name] : "href"}]
    },
    [arr_classNameType_forinov_startupOccitanie[28]] : {
        childs_selectors : Component.df[str_childs_selectors],
    },
 
   
}
//container-corpo-tag

const __IJsonComponents_forinov_startupOccitanie : _IJsonComponents<t_union_classNameType_forinov_startupOccitanie> = {

    ...__IJsonComponents_leaf_forinov_startupOccitanie,

    [rootClassName]:{
        ...forinov_startupOccitanie_mainOfComponents
    },
    [forinov_startupOccitanie_rootClassName] :{
        childs_selectors : [[Selector.cst_onePropAndTagg(idProp,'container-page-profil',"div",containOp).toString()]],
    },
    StartupOccitanieContainerProfil:{
        childs_selectors : 
        [
            ...forinov_startupOccitanie_helpers.arr_selector_join_arrArr(
                [

                    [[
                            {selector:Selector.cst_onePropAndTagg(idProp,'container-card-profil-head',"div",containOp)},
                            {selector:Selector.cst_onePropAndTagg(idProp,'section-profil-startup-head',"section",containOp)},
                            {selector:Selector.cst_onePropAndTagg(classProp,'profil-startup-container',"div",containOp)},
                            {selector:Selector.cst_onePropAndTagg(classProp,'profil-head',"div",containOp)},
                            {selector: Selector.cst_multPropAndTagg(classProp,['row'],"div","=",[fct_mod_not])},
                    ]]
            ],(arr:string[])=>arr.join(char_child)),
            ...forinov_startupOccitanie_helpers.arr_selector_join_arrArr(
                [

                    [[
                            {selector :Selector.cst_onePropAndTagg("",'',"div")},
                            {selector:Selector.cst_onePropAndTagg(classProp,'section-journal',"section",containOp)},
                            {selector:Selector.cst_onePropAndTagg(classProp,"row","div","=")}
                    ]]
                ],(arr:string[])=>arr.join(char_child)),
                [
                    Selector.cst_onePropAndTagg(idProp,'marche-ecosysteme',"div",containOp).toString()
                ]

    ],
    isScoped : false
           

    },
    StartupOccitanieProfilHeader:{
        childs_selectors : [...forinov_startupOccitanie_helpers.arr_selector_join_arrArr(
            [
                [[
                    {selector:Selector.cst_onePropAndTagg(classProp,'profil-name',"h3",containOp)}
                ]],
                [[
                    {selector:Selector.cst_onePropAndTagg(classProp,'container-geolocalisation',"div",containOp)},
                    {selector:Selector.cst_onePropAndTagg(classProp,'geolocalisation',"p",containOp)},
                ]],
                [[
                    {selector:Selector.cst_onePropAndTagg(classProp,'profil-description',"p",containOp)}
                ]],
                [[
                    {selector:Selector.cst_onePropAndTagg(idProp,'container-tag-principal',"div",containOp)},
                    {selector:Selector.cst_onePropAndTagg("",'',"p")}
                ]]],
                (arr:string[])=>arr.join(" ")),

                [Selector.cst_onePropAndTagg(classProp,'people',"span",containOp),Selector.cst_onePropAndTagg(classProp,'creation-date',"span",containOp)].map((_has_elem)=>Selector.cst_onePropAndTagg(classProp,'profil-footer',"div",containOp).toString()
                    + fct_mod_has(` ${_has_elem.toString()}`))
                
            ],
            isScoped : false
    },
    StartupOccitanieProfilHeaderFooter:{
        childs_selectors : [
            [Selector.cst_onePropAndTagg(classProp,'creation-date',"span",containOp).toString()],
            [Selector.cst_onePropAndTagg(classProp,'people',"span",containOp).toString()]
        ],
        isScoped : false
    },
    StartupOccitanieJournal : {
        childs_selectors :  [
           [Selector.cst_onePropAndTagg(idProp,'menu-en-bref',"div",containOp).toString()],
           [Selector.cst_onePropAndTagg(idProp,'container-journal',"div",containOp).toString()]
        ],
        isScoped : false
            
    },
    StartupOccitanieJournalMenu: {
        childs_selectors :[...forinov_startupOccitanie_helpers.arr_selector_join_arrArr(
            [
                [[
                    {selector:Selector.cst_onePropAndTagg(classProp,'en-bref-technologies',"div",containOp)},
                    {selector:Selector.cst_onePropAndTagg("",'',"p")},
                    {selector:Selector.cst_onePropAndTagg(classProp,'principal-filter',"span",containOp)}
                ]], 
                [[
                    {selector:Selector.cst_onePropAndTagg(classProp,'en-bref-businessmodel',"div",containOp)},
                    {selector:Selector.cst_onePropAndTagg("",'',"p")},
                    {selector:Selector.cst_onePropAndTagg(classProp,'principal-filter',"span",containOp)}
                ]],
                [[
                    {selector:Selector.cst_onePropAndTagg(classProp,'en-bref-presence',"div",containOp)},
                    {selector:Selector.cst_onePropAndTagg("",'',"p")},
                    {selector:Selector.cst_onePropAndTagg(classProp,'principal-filter',"span",containOp)}
                ]]
            ],
            (arr:string[])=>arr.join(" ")),
            [Selector.cst_onePropAndTagg(classProp,'row',"div",containOp).toString()+" "+Selector.cst_onePropAndTagg(classProp,'immat',"p",containOp).toString()],
            [Selector.cst_onePropAndTagg(classProp,'enbref-adresse',"div",containOp).toString()+char_child+Selector.cst_onePropAndTagg(classProp,'adresse',"p",containOp).toString()],
            [Selector.cst_onePropAndTagg(classProp,'container-website',"div",containOp).toString()+char_child+Selector.cst_onePropAndTagg("",'',"a").toString()],
        ],
        isScoped : false
    },
    StartupOccitanieJournalContainer:{
        childs_selectors : [
            [Selector.cst_onePropAndTagg(classProp,'secteur-cible',"div",containOp).toString()+" "+ Selector.cst_onePropAndTagg("",'',"p").toString()+char_child +Selector.cst_onePropAndTagg(classProp,'principal-filter-text',"span",containOp).toString()],
            [Selector.cst_onePropAndTagg(classProp,'target-jobs',"div",containOp).toString()+" "+ Selector.cst_onePropAndTagg("",'',"p").toString()+char_child +Selector.cst_onePropAndTagg(classProp,'principal-filter-text',"span",containOp).toString()],
            [Selector.cst_onePropAndTagg(classProp,'target-partnership',"div",containOp).toString()+" "+ Selector.cst_onePropAndTagg("",'',"p").toString()+char_child +Selector.cst_onePropAndTagg(classProp,'principal-filter-text',"span",containOp).toString()]
        ],
        isScoped : false
    },

    StartupOccitanieMarcheEcosystem:{
        childs_selectors : [...forinov_startupOccitanie_helpers.arr_selector_join_arrArr(
            [

                [[
                        {selector:Selector.cst_onePropAndTagg(classProp,'container-corpo-tag',"div",containOp)},
                        {selector:Selector.cst_onePropAndTagg(idProp,'container-wishlist',"div",containOp)}
                ]],
            ],(arr:string[])=>arr.join(char_child)+fct_mod_has(` ${Selector.cst_onePropAndTagg(classProp,'card-clients',"div",containOp).toString()}`)),
            [
                Selector.cst_onePropAndTagg(classProp,'wishlists',"div",containOp).toString() + fct_mod_has(` ${Selector.cst_onePropAndTagg(idProp,'nos-partenaires-title-number',"div",containOp).toString()}`),
            
            ]
        ],
        isScoped : false
    },
    StartupOccitanieClients:{
        childs_selectors : [
            [Selector.cst_onePropAndTagg("",'',"a").toString()+ fct_mod_hasDirectChild(`${Selector.cst_onePropAndTagg("",'',"h5").toString()}`)],
        ],
        isScoped : false
    },
    StartupOccitaniePartenaires:{
        childs_selectors : [
            [
                Selector.cst_onePropAndTagg(classProp,'container-corpo-tag',"div",containOp).toString() + char_child +  Selector.cst_onePropAndTagg(idProp,'container-wishlist',"div",containOp).toString() + " " + Selector.cst_onePropAndTagg(classProp,'wishlist-corpo-tag',"a",containOp).toString() 
            ],
        ],
        isScoped : false
    },
    

    
}


export type t__IJsonComponents_forinov_startupOccitanie = typeof __IJsonComponents_leaf_forinov_startupOccitanie

const imported_fjson_forinov_utilMain = fjson_forinov_utilMain.getSubJsonComponent<t_imported_classNameType_forinov_main>(imported_classNameType_forinov_main)
const imported_fjson_forinov_startupOccitanie = imported_fjson_forinov_utilMain.getAddedSubJsonComponent< t_arr_classNameType_forinov_utilText,t_union_classNameType_forinov_utilText,t_arr_forinov_utilText,t__IJsonComponents_forinov_utilText,t_imported_classNameType_forinov_text>(imported_classNameType_forinov_text,fjson_forinov_utilText)

type t_imported_fjson_forinov_startupOccitanie = typeof imported_fjson_forinov_startupOccitanie

type t_arrClassName_import = t_imported_fjson_forinov_startupOccitanie extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
type t_unionClassName_import = t_imported_fjson_forinov_startupOccitanie extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
type t_arrChilds_imported_startupOccitanie = t_imported_fjson_forinov_startupOccitanie extends IFunctionalWrapperJsonComponent <any,any,infer A , any >? A : never 
type t__IJsonComponent_imported_startupOccitanie = t_imported_fjson_forinov_startupOccitanie extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

export const fjson_forinov_startupOccitanie  = imported_fjson_forinov_startupOccitanie[fieldName_st_cst_buildFromFWJson](
    new FunctionalWrapperJsonComponentConfig(arr_classNameType_forinov_startupOccitanie,arr_forinov_startupOccitanie,__IJsonComponents_forinov_startupOccitanie)
)

type t_fjson_forinov_startupOccitanie = typeof fjson_forinov_startupOccitanie


export type t_arrClassName_startupOccitanie = t_fjson_forinov_startupOccitanie extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
export type t_unionClassName_startupOccitanie = t_fjson_forinov_startupOccitanie extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
export type t_arrChilds_startupOccitanie = t_fjson_forinov_startupOccitanie extends IFunctionalWrapperJsonComponent <any,any, infer A ,any >? A : never 
export type t_IJsonComponent_startupOccitanie = t_fjson_forinov_startupOccitanie extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

//create type file with getConfig and arrClassName and all , give it a value in another file with IJsonComponent
// the getConfig is used to configure ScrapingComponent for each route 

export const configJson_forinov_startupOccitanie  = fjson_forinov_startupOccitanie[getConfig]()
export type t_configJson_forinov_startupOccitanie = typeof configJson_forinov_startupOccitanie

export const json_forinov_startupOccitanie  = fjson_forinov_startupOccitanie["toJson"]()
export type t_json_forinov_startupOccitanie = typeof json_forinov_startupOccitanie

export const id_field = embedName(_id_field)
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

const _mapRegexPathIds_forinov_startupOccitanie = [
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieProfilHeader",["StartupOccitanieProfilName"]],[id_field]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieProfilHeader",["StartupOccitanieGeoloc"]],["StartupOccitanieGeoloc"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieProfilHeader",["StartupOccitanieDescription"]],["StartupOccitanieSummary"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieProfilHeader",["StartupOccitanieFilterText"]],["StartupOccitanieFilterText"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieProfilHeader","StartupOccitanieProfilHeaderFooter",["StartupOccitanieCreationDate"]],["StartupOccitanieCreationDate"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieProfilHeader","StartupOccitanieProfilHeaderFooter",["StartupOccitaniePeople"]],["StartupOccitaniePeople"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieJournal","StartupOccitanieJournalMenu",["StartupOccitanieTechnologies"]],["StartupOccitanieTechnologies"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieJournal","StartupOccitanieJournalMenu",["StartupOccitanieCardObjectifs"]],["StartupOccitanieObjectifs"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieJournal","StartupOccitanieJournalMenu",["StartupOccitaniePresence"]],["StartupOccitaniePresence"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieJournal","StartupOccitanieJournalMenu",["StartupOccitanieImmat"]],["StartupOccitanieImmat"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieJournal","StartupOccitanieJournalMenu",["StartupOccitanieAddresse"]],["StartupOccitanieAddresse"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieJournal","StartupOccitanieJournalMenu",["StartupOccitanieContainerWebsite"]],["StartupOccitanieLink"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieJournal","StartupOccitanieJournalMenu",["StartupOccitanieContact"]],["StartupOccitanieContact"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieJournal","StartupOccitanieJournalContainer",["StartupOccitanieTargetJobs"]],["StartupOccitanieTargetJobs"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieJournal","StartupOccitanieJournalContainer",["StartupOccitanieTargetSector"]],["StartupOccitanieTargetSector"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieContainerProfil","StartupOccitanieJournal","StartupOccitanieJournalContainer",["StartupOccitanieTargetPartnership"]],["StartupOccitaniePartnerShip"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieMarcheEcosystem","StartupOccitanieClients",["StartupOccitanieClient"]],["StartupOccitanieClient"]],
    [[rootClassName,forinov_startupOccitanie_rootClassName,"StartupOccitanieMarcheEcosystem","StartupOccitaniePartenaires",["StartupOccitaniePartenaire"]],["StartupOccitaniePaternaire"]],

 ] as const 

//t_mapRegexToIdPath< UnionRegex,UnionIdPath ,ArrUnionClassNameType


const mapRegexPathIds_forinov_startupOccitanie = _mapRegexPathIds_forinov_startupOccitanie.map((e)=> [MapRegexToIdPath.convertArrKeyInRegexKey(e[0]),e[1]]) as unknown   as t_mapRegexToIdPathFromArrArr<t_path_id,t_arrClassName_startupOccitanie,typeof _mapRegexPathIds_forinov_startupOccitanie >
type t_mapRegexPathIds_forinov_startupOccitanie = typeof mapRegexPathIds_forinov_startupOccitanie

type t_unionRegex_mapRegexPathIds_forinov_startupOccitanie = arrToUnion<ApplyGetElementNumberIArrArr<[t_mapRegexPathIds_forinov_startupOccitanie],0>[0]>

const mapRegex_forinov_startupOccitanie = new MapRegexToIdPath<t_unionRegex_mapRegexPathIds_forinov_startupOccitanie,t_path_id,t_arrClassName_startupOccitanie,t_unionClassName_startupOccitanie>( {_arrClassname : fjson_forinov_startupOccitanie[str_get_arrClassName]()} , { _mapRegexToIdPath : mapRegexPathIds_forinov_startupOccitanie } ) 

export type t_unionRegex_mapRegex_forinov_startupOccitanie = typeof mapRegex_forinov_startupOccitanie extends MapRegexToIdPath<infer A , any , any, any  > ? A : never
export type t_unionIdPath_mapRegex_forinov_startupOccitanie = typeof mapRegex_forinov_startupOccitanie extends MapRegexToIdPath<any , infer A , any, any  > ? A : never


export const scrapingComponent_forinov_startupOccitanie = new ScrapingComponent<t_unionRegex_mapRegex_forinov_startupOccitanie,t_unionIdPath_mapRegex_forinov_startupOccitanie,t_arrClassName_startupOccitanie,t_unionClassName_startupOccitanie,t_arrChilds_startupOccitanie,t_IJsonComponent_startupOccitanie>( mapRegex_forinov_startupOccitanie , fjson_forinov_startupOccitanie  )
export type t_scrapingComponent_forinov_startupOccitanie = typeof scrapingComponent_forinov_startupOccitanie