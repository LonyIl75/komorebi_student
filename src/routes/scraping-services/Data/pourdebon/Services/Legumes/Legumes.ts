
import { getChildArr, rootClassName, t_getLeaf } from "@/utils/scraping/PageParsing/types.js";
import { MapRegexToIdPath, pagination_field, t_mapRegexToIdPathFromArrArr } from "@shared/m_regexMapping.js";
import { arrToUnion, ApplyGetElementNumberIArrArr, addSuffix, removePrefix } from "@shared/type.js";
import { pourdebon_legumes_rootClassName, pourdebon_legumes_mainOfComponents } from "./types.js";
import { ScrapingComponent, getTypesFromImportedComponentAndFct } from "@/utils/scraping/PageParsing/ComponentObject.js";
import { Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js";
import {FunctionalWrapperJsonComponentConfig, IFunctionalWrapperJsonComponent}from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/IFunctionalWrapperJsonComponents.js";
import { fieldName_st_cst_buildFromFWJson, str_get_arrClassName } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _IComponent, _Component } from "@/utils/scraping/PageParsing/Schema/_Component/_Component.js";
import { Selector, char_child, classProp, containOp, fct_mod_hasDirectChild, fct_mod_not, idProp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { nil_value, str_childs_selectors } from "@/utils/scraping/PageParsing/Schema/_Component/types.js";
import { getConfig } from "@shared/m_json.js";
import { getPourdebonHelpers } from "../../util/helpers.js";
import { fjson_pourdebon_utilMain, json_pourdebon_utilMain, t_IJsonComponents_pourdebon_utilMain } from "../../util/UtilMain/UtilMain.js";
import { t_arr_classNameType_pourdebon_utilText, t_union_classNameType_pourdebon_utilText, t_arr_pourdebon_utilText,t__IJsonComponents_pourdebon_utilText, fjson_pourdebon_utilText, json_pourdebon_utilText, t_IJsonComponents_pourdebon_utilText } from "../../util/UtilText/UtilText.js";
import { str_attribute_name, str_attribute_name_function, str_args_setting, cst_args_getCustomAttribute } from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/types.js";
import ChildAttributeType from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/ChildAttributeType.js";
import { str_value_init } from "@/utils/scraping/PageParsing/Schema/_Component/ValTextContent/types.js";
import { strRegexPrice, strRegexPricePerUnit, strRegexQuantity } from "@shared/m_regex_product.js";
import { embedBeginAndEndLineRegexStr, embedGroupStrRegex } from "@shared/m_regex.js";

const arr_classNameType_pourdebon_legumes = [
    rootClassName,pourdebon_legumes_rootClassName,"LegumesContainerGrid",//2
    "LegumesContainerPagination","LegumesPagination","LegumesSelectedPagination","LegumesNextPagination",//6
    "LegumesGrid",//7
    "LegumesItem",//8
    "LegumesProductInfo",//9
    "LegumesProductImage","LegumesProductDetails","LegumesProductType",//12
        "LegumesProductImageLinked",//13
        "LegumesProductShopNameLinked","LegumesProductTitleLinked","LegumesProductPriceContainer",//16
        "LegumesProductImageValue",//17
        "LegumesProductShopNameValue","LegumesProductTitleValue",//19
            "LegumesProductPrice","LegumesProductPricePerWeight","LegumesProductWeight",//22
] as const  

export type t_arr_classNameType_pourdebon_legumes = typeof arr_classNameType_pourdebon_legumes

export type t_union_classNameType_pourdebon_legumes = arrToUnion<t_arr_classNameType_pourdebon_legumes>

const imported_classNameTypeParent_pourdebon_main =  [] as const
type t_imported_classNameTypeParent_pourdebon_main = typeof imported_classNameTypeParent_pourdebon_main
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_pourdebon_main,t_IJsonComponents_pourdebon_utilMain>(json_pourdebon_utilMain,imported_classNameTypeParent_pourdebon_main)

const imported_classNameTypeParent_pourdebon_text = [] as const
type t_imported_classNameTypeParent_pourdebon_text = typeof imported_classNameTypeParent_pourdebon_text
const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_pourdebon_text,t_IJsonComponents_pourdebon_utilText>(json_pourdebon_utilText,imported_classNameTypeParent_pourdebon_text)


export const arr_pourdebon_legumes  = 
    [
        getChildArr<t_arr_classNameType_pourdebon_legumes,0,[1]>(arr_classNameType_pourdebon_legumes,0,[1]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,1,[2,3]>(arr_classNameType_pourdebon_legumes,1,[2,3]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,3,[4]>(arr_classNameType_pourdebon_legumes,3,[4]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,4,[5,6]>(arr_classNameType_pourdebon_legumes,4,[5,6]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,5>(arr_classNameType_pourdebon_legumes,5),
        getChildArr<t_arr_classNameType_pourdebon_legumes,6>(arr_classNameType_pourdebon_legumes,6),
        getChildArr<t_arr_classNameType_pourdebon_legumes,2,[7]>(arr_classNameType_pourdebon_legumes,2,[7]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,7,[8]>(arr_classNameType_pourdebon_legumes,7,[8]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,8,[9]>(arr_classNameType_pourdebon_legumes,8,[9]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,9,[10,11,12]>(arr_classNameType_pourdebon_legumes,9,[10,11,12]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,10,[13]>(arr_classNameType_pourdebon_legumes,10,[13]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,11,[14,15,16]>(arr_classNameType_pourdebon_legumes,11,[14,15,16]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,12>(arr_classNameType_pourdebon_legumes,12),
        getChildArr<t_arr_classNameType_pourdebon_legumes,13,[17]>(arr_classNameType_pourdebon_legumes,13,[17]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,14,[18]>(arr_classNameType_pourdebon_legumes,14,[18]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,15,[19]>(arr_classNameType_pourdebon_legumes,15,[19]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,16,[20,21,22]>(arr_classNameType_pourdebon_legumes,16,[20,21,22]),
        getChildArr<t_arr_classNameType_pourdebon_legumes,17>(arr_classNameType_pourdebon_legumes,17),
        getChildArr<t_arr_classNameType_pourdebon_legumes,18>(arr_classNameType_pourdebon_legumes,18),
        getChildArr<t_arr_classNameType_pourdebon_legumes,19>(arr_classNameType_pourdebon_legumes,19),
        getChildArr<t_arr_classNameType_pourdebon_legumes,20>(arr_classNameType_pourdebon_legumes,20),
        getChildArr<t_arr_classNameType_pourdebon_legumes,21>(arr_classNameType_pourdebon_legumes,21),
        getChildArr<t_arr_classNameType_pourdebon_legumes,22>(arr_classNameType_pourdebon_legumes,22),
    ] as const

export type t_arr_pourdebon_legumes = typeof arr_pourdebon_legumes

type t_classNameType_leaf_pourdebon_legumes =  t_getLeaf < t_union_classNameType_pourdebon_legumes, t_arr_pourdebon_legumes> 

const imported_classNameType_pourdebon_main = [] as const 
type t_imported_classNameType_pourdebon_main = typeof imported_classNameType_pourdebon_main


const imported_classNameType_pourdebon_text = [] as const 
type t_imported_classNameType_pourdebon_text = typeof imported_classNameType_pourdebon_text

type _t_union_notSpecified_classNameType = 'Container' 

type t_classNameType_notSpecified_union_text = removePrefix<'Legumes',t_union_classNameType_pourdebon_legumes|_t_union_notSpecified_classNameType> extends infer A ?
 A extends string ? addSuffix <A,'Text'> extends infer B ? B : never : never :never 

type t_union_notSpecified_classNameType = _t_union_notSpecified_classNameType| t_classNameType_notSpecified_union_text

type t_classNameType_pourdebon_legumes = t_union_classNameType_pourdebon_legumes|t_imported_classNameType_pourdebon_main[number]|t_imported_classNameType_pourdebon_text[number]|t_union_notSpecified_classNameType
const pourdebon_legumes_helpers = getPourdebonHelpers<t_classNameType_pourdebon_legumes>()


const __IJsonComponents_leaf_pourdebon_legumes : _IJsonComponents<t_classNameType_leaf_pourdebon_legumes> = {
    [arr_classNameType_pourdebon_legumes[5]]:{
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_pourdebon_legumes[6]]:{
        childs_selectors : Component.df[str_childs_selectors],
        childs_attributes : [{[str_attribute_name] : "href", selector : "a"}],
    },
    [arr_classNameType_pourdebon_legumes[12]]:{
        childs_selectors : Component.df[str_childs_selectors],
        [str_value_init] : nil_value,
        childs_attributes : [{[str_attribute_name_function] : "getCustomAttribute",[str_args_setting]:cst_args_getCustomAttribute("content")}],
    },
    [arr_classNameType_pourdebon_legumes[17]]:{
        childs_selectors : Component.df[str_childs_selectors],
        [str_value_init] : nil_value,
        childs_attributes : [
            {[str_attribute_name] : "src"},
            {[str_attribute_name] : "alt"}
        ]
    },
    [arr_classNameType_pourdebon_legumes[18]]:{
        childs_selectors : Component.df[str_childs_selectors],
        childs_attributes : [{[str_attribute_name] : "href"}],
    },
    [arr_classNameType_pourdebon_legumes[19]]:{
        childs_selectors : Component.df[str_childs_selectors],
        childs_attributes : [{[str_attribute_name] : "href"}],
    },
    [arr_classNameType_pourdebon_legumes[20]]:{
        value_validation_strRegex : strRegexPrice,
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_pourdebon_legumes[21]]:{
        value_validation_strRegex : strRegexPricePerUnit,
        childs_selectors : Component.df[str_childs_selectors],
    },
    [arr_classNameType_pourdebon_legumes[22]]:{
        value_validation_strRegex : strRegexQuantity,
        childs_selectors : Component.df[str_childs_selectors],
    },
}
   
const __IJsonComponents_pourdebon_legumes : _IJsonComponents<t_union_classNameType_pourdebon_legumes> = {

    ...__IJsonComponents_leaf_pourdebon_legumes,

    [rootClassName]:{
        ...pourdebon_legumes_mainOfComponents
    },
    [pourdebon_legumes_rootClassName] :{
        childs_selectors : [...pourdebon_legumes_helpers.arr_selector(
                    [
                        [Selector.cst_onePropAndTagg(classProp,'u-grid',"article",containOp)],
                        [Selector.cst_onePropAndTagg(classProp,'pagination',"ul",containOp)]
                    ],
                    (str_selector)=>
                   Selector.cst_onePropAndTagg(classProp,'u-container',"div",containOp).toString() + fct_mod_hasDirectChild(str_selector))
            ]
    },
    LegumesContainerPagination:{
        childs_selectors : 
            [
                [Selector.cst_onePropAndTagg(classProp,'pagination',"ul",containOp).toString()]
            ]

    },
    LegumesPagination:{
        childs_selectors : [
            [
                Selector.cst_onePropAndTagg(classProp,'active',"li",containOp).toString()+char_child+Selector.cst_onePropAndTagg("","","span").toString(),
            ],
            [
                Selector.cst_onePropAndTagg(classProp,'active',"li",containOp,fct_mod_not).toString()+fct_mod_hasDirectChild(Selector.cst_onePropAndTagg("","","a").toString()),
            
            ]
        ]

    },
    LegumesContainerGrid:{
        childs_selectors : 
            [
                [Selector.cst_onePropAndTagg(classProp,'u-grid',"article",containOp).toString()]
            ]

    },
    LegumesGrid:{
        childs_selectors : [
            [
                Selector.cst_onePropAndTagg(classProp,'card-product',"div",containOp).toString()
            ]
        ]
    },
    LegumesItem:{
        childs_selectors : [
            [
                Selector.cst_onePropAndTagg(classProp,'card-product-container',"article",containOp).toString()
            ]
        ]
    },
    LegumesProductInfo:{
        childs_selectors : [
            [
                Selector.cst_onePropAndTagg(classProp,'card-product-image',"div",containOp).toString()
            ],
            [
                Selector.cst_onePropAndTagg(classProp,'card-product-content',"div",containOp).toString()
            ],
            [
                Selector.cst_onePropAndTagg("itemprop",'sku',"span",containOp).toString()
            ]
        ]
    },
    LegumesProductImage:{
        childs_selectors : [
            [
                Selector.cst_onePropAndTagg("","","picture").toString()
            ],
        ]
    },
    LegumesProductImageLinked:{
        childs_selectors : [
            [
                Selector.cst_onePropAndTagg(classProp,"card-product-media","img",containOp).toString()
            ],
        ]
    },
    LegumesProductDetails:{
        childs_selectors :[...pourdebon_legumes_helpers.arr_selector(
            [
                [Selector.cst_onePropAndTagg(classProp,'card-product-shop-name',"h3",containOp)],
                [Selector.cst_onePropAndTagg(classProp,'card-product-title',"h4",containOp)],
            ],
            (str_selector)=>Selector.cst_onePropAndTagg(classProp,'card-product-shop',"header",containOp).toString() + char_child + str_selector
        ),
        [Selector.cst_onePropAndTagg(classProp,'card-product-prices',"div",containOp).toString()],
        ]
    },
    LegumesProductShopNameLinked:{
        childs_selectors : [
            [
                Selector.cst_onePropAndTagg(classProp,"card-product-shop-link","a",containOp).toString()
            ],
        ]
    },
    LegumesProductTitleLinked:{
        childs_selectors : [
            [
                Selector.cst_onePropAndTagg(classProp,"card-product-link","a",containOp).toString()
            ],
        ]
    },
    LegumesProductPriceContainer:{
        childs_selectors : [
            [Selector.cst_onePropAndTagg(classProp,'card-product-price',"div",containOp).toString()],
            [Selector.cst_onePropAndTagg(classProp,'card-product-unit-price',"span",containOp).toString()],
            [Selector.cst_onePropAndTagg(classProp,'card-product-quantity',"span",containOp).toString()],
        ]
    },
}
    

export type t__IJsonComponents_pourdebon_legumes = typeof __IJsonComponents_leaf_pourdebon_legumes

const imported_fjson_pourdebon_utilMain = fjson_pourdebon_utilMain.getSubJsonComponent<t_imported_classNameType_pourdebon_main>(imported_classNameType_pourdebon_main)
const imported_fjson_pourdebon_legumes = imported_fjson_pourdebon_utilMain.getAddedSubJsonComponent< t_arr_classNameType_pourdebon_utilText,t_union_classNameType_pourdebon_utilText,t_arr_pourdebon_utilText,t__IJsonComponents_pourdebon_utilText,t_imported_classNameType_pourdebon_text>(imported_classNameType_pourdebon_text,fjson_pourdebon_utilText)

type t_imported_fjson_pourdebon_legumes = typeof imported_fjson_pourdebon_legumes

type t_arrClassName_import = t_imported_fjson_pourdebon_legumes extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
type t_unionClassName_import = t_imported_fjson_pourdebon_legumes extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
type t_arrChilds_imported_legumes = t_imported_fjson_pourdebon_legumes extends IFunctionalWrapperJsonComponent <any,any,infer A , any >? A : never 
type t__IJsonComponent_imported_legumes = t_imported_fjson_pourdebon_legumes extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

export const fjson_pourdebon_legumes  = imported_fjson_pourdebon_legumes[fieldName_st_cst_buildFromFWJson](
    new FunctionalWrapperJsonComponentConfig(arr_classNameType_pourdebon_legumes,arr_pourdebon_legumes,__IJsonComponents_pourdebon_legumes)
)

type t_fjson_pourdebon_legumes = typeof fjson_pourdebon_legumes


export type t_arrClassName_legumes = t_fjson_pourdebon_legumes extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
export type t_unionClassName_legumes = t_fjson_pourdebon_legumes extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
export type t_arrChilds_legumes = t_fjson_pourdebon_legumes extends IFunctionalWrapperJsonComponent <any,any, infer A ,any >? A : never 
export type t_IJsonComponent_legumes = t_fjson_pourdebon_legumes extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never

//create type file with getConfig and arrClassName and all , give it a value in another file with IJsonComponent
// the getConfig is used to configure ScrapingComponent for each route 

export const configJson_pourdebon_legumes  = fjson_pourdebon_legumes[getConfig]()
export type t_configJson_pourdebon_legumes = typeof configJson_pourdebon_legumes

export const json_pourdebon_legumes  = fjson_pourdebon_legumes["toJson"]()
export type t_json_pourdebon_legumes = typeof json_pourdebon_legumes

export const id_field = "ProductType"
const required_field = ["ProductTitle","ProductPrice","ProductPricePerWeight","ProductWeight"] as const 
const optional_field = ["ProductImage","ProductShopName"] as const

const arr_pathId = [id_field,...required_field,...optional_field,...pagination_field] as const 
type t_arr_pathId =  typeof arr_pathId
type t_path_id = t_arr_pathId[number]

export type t_resParsing = {
    [r_k in typeof required_field[number]] : string
} 
&{
    [key in t_path_id] ?: string
}

const _mapRegexPathIds_pourdebon_legumes = [
    [[rootClassName,pourdebon_legumes_rootClassName,"LegumesContainerGrid","LegumesGrid","LegumesItem","LegumesProductInfo",["LegumesProductType"]],["ProductType"]],
    [[rootClassName,pourdebon_legumes_rootClassName,"LegumesContainerGrid","LegumesGrid","LegumesItem","LegumesProductInfo","LegumesProductImage","LegumesProductImageLinked",["LegumesProductImageValue"]],["ProductImage"]],
    [[rootClassName,pourdebon_legumes_rootClassName,"LegumesContainerGrid","LegumesGrid","LegumesItem","LegumesProductInfo","LegumesProductDetails","LegumesProductShopNameLinked",["LegumesProductShopNameValue"]],["ProductShopName"]],
    [[rootClassName,pourdebon_legumes_rootClassName,"LegumesContainerGrid","LegumesGrid","LegumesItem","LegumesProductInfo","LegumesProductDetails","LegumesProductTitleLinked",["LegumesProductTitleValue"]],["ProductTitle"]],
    [[rootClassName,pourdebon_legumes_rootClassName,"LegumesContainerGrid","LegumesGrid","LegumesItem","LegumesProductInfo","LegumesProductDetails","LegumesProductPriceContainer",["LegumesProductPricePerWeight","LegumesProductPrice","LegumesProductWeight"]],["ProductPricePerWeight","ProductPrice","ProductWeight"]],
    [[rootClassName,pourdebon_legumes_rootClassName,"LegumesContainerPagination","LegumesPagination",["LegumesNextPagination"]],[pagination_field[0]]],
    [[rootClassName,pourdebon_legumes_rootClassName,"LegumesContainerPagination","LegumesPagination",["LegumesSelectedPagination"]],[pagination_field[1]]],
 ] as const 

//t_mapRegexToIdPath< UnionRegex,UnionIdPath ,ArrUnionClassNameType


const mapRegexPathIds_pourdebon_legumes = _mapRegexPathIds_pourdebon_legumes.map((e)=> [MapRegexToIdPath.convertArrKeyInRegexKey(e[0]),e[1]]) as unknown   as t_mapRegexToIdPathFromArrArr<t_path_id,t_arrClassName_legumes,typeof _mapRegexPathIds_pourdebon_legumes >
type t_mapRegexPathIds_pourdebon_legumes = typeof mapRegexPathIds_pourdebon_legumes

type t_unionRegex_mapRegexPathIds_pourdebon_legumes = arrToUnion<ApplyGetElementNumberIArrArr<[t_mapRegexPathIds_pourdebon_legumes],0>[0]>

const mapRegex_pourdebon_legumes = new MapRegexToIdPath<t_unionRegex_mapRegexPathIds_pourdebon_legumes,t_path_id,t_arrClassName_legumes,t_unionClassName_legumes>( {_arrClassname : fjson_pourdebon_legumes[str_get_arrClassName]()} , { _mapRegexToIdPath : mapRegexPathIds_pourdebon_legumes } ) 

export type t_unionRegex_mapRegex_pourdebon_legumes = typeof mapRegex_pourdebon_legumes extends MapRegexToIdPath<infer A , any , any, any  > ? A : never
export type t_unionIdPath_mapRegex_pourdebon_legumes = typeof mapRegex_pourdebon_legumes extends MapRegexToIdPath<any , infer A , any, any  > ? A : never


export const scrapingComponent_pourdebon_legumes = new ScrapingComponent<t_unionRegex_mapRegex_pourdebon_legumes,t_unionIdPath_mapRegex_pourdebon_legumes,t_arrClassName_legumes,t_unionClassName_legumes,t_arrChilds_legumes,t_IJsonComponent_legumes>( mapRegex_pourdebon_legumes , fjson_pourdebon_legumes  )
export type t_scrapingComponent_pourdebon_legumes = typeof scrapingComponent_pourdebon_legumes
