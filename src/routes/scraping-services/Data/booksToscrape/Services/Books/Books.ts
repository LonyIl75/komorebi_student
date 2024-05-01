
import { buildArrClassNameType, getChildArr, rootClassName, t_getLeaf } from "@/utils/scraping/PageParsing/types.js";
import { MapRegexToIdPath, pagination_field, t_mapRegexToIdPathFromArrArr } from "@shared/m_regexMapping.js";
import { arrToUnion, ApplyGetElementNumberIArrArr, addSuffix, removePrefix } from "@shared/type.js";
import { booksToscrape_books_rootClassName, booksToscrape_books_mainOfComponents, str_Books, t_str_Books } from "./types.js";
import { ScrapingComponent, getTypesFromImportedComponentAndFct } from "@/utils/scraping/PageParsing/ComponentObject.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import {FunctionalWrapperJsonComponentConfig, IFunctionalWrapperJsonComponent}from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/IFunctionalWrapperJsonComponents.js";
import { fieldName_st_cst_buildFromFWJson, str_get_arrClassName } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _IComponent, _Component } from "@/utils/scraping/PageParsing/Schema/_Component/_Component.js";
import { Selector, char_child, classProp, containOp, fct_mod_hasDirectChild, fct_mod_not, idProp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { nil_value, str_childs_selectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getConfig } from "@shared/m_json.js";
import { getBooksToscrapeHelpers } from "../../util/helpers.js";
import { fjson_booksToscrape_utilMain, json_booksToscrape_utilMain, t_IJsonComponents_booksToscrape_utilMain } from "../../util/UtilMain/UtilMain.js";
import { t_arr_classNameType_booksToscrape_utilText, t_union_classNameType_booksToscrape_utilText, t_arr_booksToscrape_utilText,t__IJsonComponents_booksToscrape_utilText, fjson_booksToscrape_utilText, json_booksToscrape_utilText, t_IJsonComponents_booksToscrape_utilText } from "../../util/UtilText/UtilText.js";
import { str_attribute_name, str_attribute_name_function, str_args_setting, cst_args_getCustomAttribute } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import ChildAttributeType from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/ChildAttributeType.js";
import { str_value_init } from "@/utils/scraping/PageParsing/Schema/_Component/ValTextContent/types.js";
import { strRegexPrice, strRegexPricePerUnit, strRegexQuantity } from "@shared/m_regex_product.js";
import { embedCapturingGroupStrOrRegex, getUnionNonMatchingGroups } from "@shared/m_regex_prefixAndSuffix.js";


const _arr_classNameType_booksToscrape_books = [
    rootClassName,"ContainerGrid","Grid",
    "ContainerPagination","Pagination","SelectedPagination","NextPagination",
    "Item","Type"
] as const  

export const arr_classNameType_booksToscrape_books = buildArrClassNameType(str_Books,_arr_classNameType_booksToscrape_books)
export type t_arr_classNameType_booksToscrape_books = typeof arr_classNameType_booksToscrape_books

export type t_union_classNameType_booksToscrape_books = arrToUnion<t_arr_classNameType_booksToscrape_books>

const imported_classNameTypeParent_booksToscrape_main =  [] as const
type t_imported_classNameTypeParent_booksToscrape_main = typeof imported_classNameTypeParent_booksToscrape_main
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_booksToscrape_main,t_IJsonComponents_booksToscrape_utilMain>(json_booksToscrape_utilMain,imported_classNameTypeParent_booksToscrape_main)

const imported_classNameTypeParent_booksToscrape_text = [] as const
type t_imported_classNameTypeParent_booksToscrape_text = typeof imported_classNameTypeParent_booksToscrape_text
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_booksToscrape_text,t_IJsonComponents_booksToscrape_utilText>(json_booksToscrape_utilText,imported_classNameTypeParent_booksToscrape_text)


export const arr_booksToscrape_books  = 
    [
        getChildArr<t_arr_classNameType_booksToscrape_books,0,[1]>(arr_classNameType_booksToscrape_books,0,[1]),
        getChildArr<t_arr_classNameType_booksToscrape_books,1,[2,4]>(arr_classNameType_booksToscrape_books,1,[2,4]),
        getChildArr<t_arr_classNameType_booksToscrape_books,4,[5]>(arr_classNameType_booksToscrape_books,4,[5]),
        getChildArr<t_arr_classNameType_booksToscrape_books,5,[6,7]>(arr_classNameType_booksToscrape_books,5,[6,7]),
        getChildArr<t_arr_classNameType_booksToscrape_books,6>(arr_classNameType_booksToscrape_books,6),
        getChildArr<t_arr_classNameType_booksToscrape_books,7>(arr_classNameType_booksToscrape_books,7),
        getChildArr<t_arr_classNameType_booksToscrape_books,2,[3]>(arr_classNameType_booksToscrape_books,2,[3]),
        getChildArr<t_arr_classNameType_booksToscrape_books,3,[8]>(arr_classNameType_booksToscrape_books,3,[8]),
        getChildArr<t_arr_classNameType_booksToscrape_books,8,[9]>(arr_classNameType_booksToscrape_books,8,[9]),
        getChildArr<t_arr_classNameType_booksToscrape_books,9>(arr_classNameType_booksToscrape_books,9),
    ] as const

export type t_arr_booksToscrape_books = typeof arr_booksToscrape_books

type t_classNameType_leaf_booksToscrape_books =  t_getLeaf < t_union_classNameType_booksToscrape_books, t_arr_booksToscrape_books> 

const imported_classNameType_booksToscrape_main = [] as const 
type t_imported_classNameType_booksToscrape_main = typeof imported_classNameType_booksToscrape_main


const imported_classNameType_booksToscrape_text = [] as const 
type t_imported_classNameType_booksToscrape_text = typeof imported_classNameType_booksToscrape_text

type _t_union_notSpecified_classNameType = 'Container' 

type t_classNameType_notSpecified_union_text = removePrefix<t_str_Books,t_union_classNameType_booksToscrape_books|_t_union_notSpecified_classNameType> extends infer A ?
 A extends string ? addSuffix <A,'Text'> extends infer B ? B : never : never :never 

type t_union_notSpecified_classNameType = _t_union_notSpecified_classNameType| t_classNameType_notSpecified_union_text

type t_classNameType_booksToscrape_books = t_union_classNameType_booksToscrape_books|t_imported_classNameType_booksToscrape_main[number]|t_imported_classNameType_booksToscrape_text[number]|t_union_notSpecified_classNameType
const booksToscrape_books_helpers = getBooksToscrapeHelpers<t_classNameType_booksToscrape_books>()


const __IJsonComponents_leaf_booksToscrape_books : _IJsonComponents<t_classNameType_leaf_booksToscrape_books> = {
 
    [arr_classNameType_booksToscrape_books[6]]:{
        childs_selectors : Component.df[str_childs_selectors],
        value_validation_strRegex : embedCapturingGroupStrOrRegex("\\S[\\S ]+\\S",true)
    },
    [arr_classNameType_booksToscrape_books[7]]:{
        childs_selectors : Component.df[str_childs_selectors],
        childs_attributes : [{[str_attribute_name] : "href"}],
    },
    [arr_classNameType_booksToscrape_books[9]]:{
        childs_selectors : Component.df[str_childs_selectors],
    }
}

const __IJsonComponents_booksToscrape_books : _IJsonComponents<t_union_classNameType_booksToscrape_books> = {

    ...__IJsonComponents_leaf_booksToscrape_books,

    [rootClassName]:{
        ...booksToscrape_books_mainOfComponents
    },
    [booksToscrape_books_rootClassName] :{
        childs_selectors : [...booksToscrape_books_helpers.arrArr_selector(booksToscrape_books_helpers.arr_selector_join_arrArr(
                                [

                                    [[
                                            {selector:Selector.cst_onePropAndTagg(classProp,'row',"ol",containOp)}
                                    ],[
                                            {selector:Selector.cst_onePropAndTagg(classProp,'u-grid',"article",containOp)}
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
    BooksContainerGrid:{
        childs_selectors : 
            [
                [Selector.cst_onePropAndTagg(classProp,'row',"ol",containOp).toString(),Selector.cst_onePropAndTagg(classProp,'u-grid',"article",containOp).toString()]
            ]

    },
    BooksGrid:{
        childs_selectors : [...booksToscrape_books_helpers.arr_selector_join_arrArr(
            [
                [[
                        {selector:Selector.cst_onePropAndTagg("",'',"li")},
                        {selector:Selector.cst_onePropAndTagg(classProp,'product_pod',"article",containOp)}
                ],[
                        {selector:Selector.cst_onePropAndTagg(classProp,'card-product',"div",containOp)}
                ]]
            ],
            (arr:string[])=>arr.join(char_child)
        )]
    },
    BooksItem:{
        childs_selectors : [
            [
                Selector.cst_onePropAndTagg("",'',"h3").toString(), 
                Selector.cst_onePropAndTagg(classProp,'card-product-container',"article",containOp).toString()
            ]
            
        ]
    },

    BooksContainerPagination :{
        childs_selectors : [...booksToscrape_books_helpers.arr_selector_join_arrArr(
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
    BooksPagination:{
        childs_selectors : [
            [
                Selector.cst_onePropAndTagg(classProp,'active',"li",containOp).toString(),
                Selector.cst_onePropAndTagg(classProp,'current',"li",containOp).toString(),
                Selector.cst_onePropAndTagg(classProp,'selected',"li",containOp).toString(),
            ],
            booksToscrape_books_helpers.arr_selector([
                Selector.cst_multPropAndTagg(classProp,['active','current','selected','previous'],"li",containOp,[fct_mod_not]).toString(),
            ],
            (str_selector)=> str_selector + char_child + Selector.cst_onePropAndTagg("",'',"a").toString()
            )
        ]

    }
}


export type t__IJsonComponents_booksToscrape_books = typeof __IJsonComponents_leaf_booksToscrape_books

const imported_fjson_booksToscrape_utilMain = fjson_booksToscrape_utilMain.getSubJsonComponent<t_imported_classNameType_booksToscrape_main>(imported_classNameType_booksToscrape_main)
const imported_fjson_booksToscrape_books = imported_fjson_booksToscrape_utilMain.getAddedSubJsonComponent< t_arr_classNameType_booksToscrape_utilText,t_union_classNameType_booksToscrape_utilText,t_arr_booksToscrape_utilText,t__IJsonComponents_booksToscrape_utilText,t_imported_classNameType_booksToscrape_text>(imported_classNameType_booksToscrape_text,fjson_booksToscrape_utilText)

type t_imported_fjson_booksToscrape_books = typeof imported_fjson_booksToscrape_books

type t_arrClassName_import = t_imported_fjson_booksToscrape_books extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
type t_unionClassName_import = t_imported_fjson_booksToscrape_books extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
type t_arrChilds_imported_books = t_imported_fjson_booksToscrape_books extends IFunctionalWrapperJsonComponent <any,any,infer A , any >? A : never 
type t__IJsonComponent_imported_books = t_imported_fjson_booksToscrape_books extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

export const fjson_booksToscrape_books  = imported_fjson_booksToscrape_books[fieldName_st_cst_buildFromFWJson](
    new FunctionalWrapperJsonComponentConfig(arr_classNameType_booksToscrape_books,arr_booksToscrape_books,__IJsonComponents_booksToscrape_books)
)

type t_fjson_booksToscrape_books = typeof fjson_booksToscrape_books


export type t_arrClassName_books = t_fjson_booksToscrape_books extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
export type t_unionClassName_books = t_fjson_booksToscrape_books extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
export type t_arrChilds_books = t_fjson_booksToscrape_books extends IFunctionalWrapperJsonComponent <any,any, infer A ,any >? A : never 
export type t_IJsonComponent_books = t_fjson_booksToscrape_books extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

//create type file with getConfig and arrClassName and all , give it a value in another file with IJsonComponent
// the getConfig is used to configure ScrapingComponent for each route 

export const configJson_booksToscrape_books  = fjson_booksToscrape_books[getConfig]()
export type t_configJson_booksToscrape_books = typeof configJson_booksToscrape_books

export const json_booksToscrape_books  = fjson_booksToscrape_books["toJson"]()
export type t_json_booksToscrape_books = typeof json_booksToscrape_books

export const id_field = `${str_Books}Type` as const 
const required_field = [] as const 
const optional_field = [] as const

const arr_pathId = [id_field,...required_field,...optional_field,...pagination_field] as const 
type t_arr_pathId =  typeof arr_pathId
type t_path_id = t_arr_pathId[number]

export type t_resParsing = {
    [r_k in typeof required_field[number]] : string
} 
&{
    [key in t_path_id] ?: string
}

const _mapRegexPathIds_booksToscrape_books = [
    [[rootClassName,booksToscrape_books_rootClassName,"BooksContainerGrid","BooksGrid","BooksItem",["BooksType"]],["BooksType"]],
    [[rootClassName,booksToscrape_books_rootClassName,"BooksContainerPagination","BooksPagination",["BooksNextPagination"]],[pagination_field[0]]],
    [[rootClassName,booksToscrape_books_rootClassName,"BooksContainerPagination","BooksPagination",["BooksSelectedPagination"]],[pagination_field[1]]],
 ] as const 

//t_mapRegexToIdPath< UnionRegex,UnionIdPath ,ArrUnionClassNameType


const mapRegexPathIds_booksToscrape_books = _mapRegexPathIds_booksToscrape_books.map((e)=> [MapRegexToIdPath.convertArrKeyInRegexKey(e[0]),e[1]]) as unknown   as t_mapRegexToIdPathFromArrArr<t_path_id,t_arrClassName_books,typeof _mapRegexPathIds_booksToscrape_books >
type t_mapRegexPathIds_booksToscrape_books = typeof mapRegexPathIds_booksToscrape_books

type t_unionRegex_mapRegexPathIds_booksToscrape_books = arrToUnion<ApplyGetElementNumberIArrArr<[t_mapRegexPathIds_booksToscrape_books],0>[0]>

const mapRegex_booksToscrape_books = new MapRegexToIdPath<t_unionRegex_mapRegexPathIds_booksToscrape_books,t_path_id,t_arrClassName_books,t_unionClassName_books>( {_arrClassname : fjson_booksToscrape_books[str_get_arrClassName]()} , { _mapRegexToIdPath : mapRegexPathIds_booksToscrape_books } ) 

export type t_unionRegex_mapRegex_booksToscrape_books = typeof mapRegex_booksToscrape_books extends MapRegexToIdPath<infer A , any , any, any  > ? A : never
export type t_unionIdPath_mapRegex_booksToscrape_books = typeof mapRegex_booksToscrape_books extends MapRegexToIdPath<any , infer A , any, any  > ? A : never


export const scrapingComponent_booksToscrape_books = new ScrapingComponent<t_unionRegex_mapRegex_booksToscrape_books,t_unionIdPath_mapRegex_booksToscrape_books,t_arrClassName_books,t_unionClassName_books,t_arrChilds_books,t_IJsonComponent_books>( mapRegex_booksToscrape_books , fjson_booksToscrape_books  )
export type t_scrapingComponent_booksToscrape_books = typeof scrapingComponent_booksToscrape_books