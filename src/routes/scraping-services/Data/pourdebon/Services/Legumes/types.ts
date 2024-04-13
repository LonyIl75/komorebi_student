import { ITypeChilds } from "@/utils/scraping/PageParsing/TypeChilds/TypeChilds.js"
import { IComponent, Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js"
import { t_childs_components } from "@/utils/scraping/PageParsing/Schema/Component/types.js"
import { t_childsSelectors, t_childSelector } from "@/utils/scraping/PageParsing/Schema/_Component/types.js"
import { Selector, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js"
import { t_rootClassName, rootClassName, getRootType } from "@/utils/scraping/PageParsing/types.js"
import { enum_pourdebon_style, getPourdebonHelpers } from "../../util/helpers.js"
import { StrChildType, empty_ids } from "@/utils/scraping/PageParsing/TypeChilds/types.js"



export const pourdebon_legumes_rootClassName :"LegumesPage" = "LegumesPage"
export type t_pourdebon_legumes_rootClassName = typeof pourdebon_legumes_rootClassName
export const rootLegumesPourdebonChildType :StrChildType.t_childType<t_pourdebon_legumes_rootClassName> = "legumes-page"


type t_base_union =  t_pourdebon_legumes_rootClassName
const pourdebon_legumes_base_helpers = getPourdebonHelpers<t_base_union>()


export const pourdebon_legumes_mainOfComponents: IComponent<t_rootClassName,t_pourdebon_legumes_rootClassName> = {
    class_name:rootClassName,
    type : getRootType,
    childs_selectors : [...pourdebon_legumes_base_helpers.arr_selector_join_arrArr(
        [
            [[
                {selector:Selector.cst_onePropAndTagg("",'',"html")},
                {selector:Selector.cst_onePropAndTagg("",'',"main")}
            ]],
        ],(arr:string[])=>arr.join(" ")
        ),
    ],
    isScoped : false ,
    childs_components : [{type : rootLegumesPourdebonChildType , ids : empty_ids}],
}

export const root_legumesPage_classname : t_rootClassName  =  Component.getClass_name<t_rootClassName,t_pourdebon_legumes_rootClassName>(pourdebon_legumes_mainOfComponents)
export const root_legumesPage_type :StrChildType.t_childType<t_rootClassName> = Component.getType<t_rootClassName,t_pourdebon_legumes_rootClassName>(pourdebon_legumes_mainOfComponents)
const root_legumesPage_childs_selectors : t_childsSelectors = [Component.getChilds_selectors<t_rootClassName,t_pourdebon_legumes_rootClassName>(pourdebon_legumes_mainOfComponents)[0]]
export const root_legumesPage_child_selectors : t_childSelector = root_legumesPage_childs_selectors[0]
const root_legumesPage_childs_components : t_childs_components<t_pourdebon_legumes_rootClassName> = Component.getChilds_components(pourdebon_legumes_mainOfComponents)
const root_legumesPage_child_component : ITypeChilds<t_pourdebon_legumes_rootClassName> = root_legumesPage_childs_components[0]
export const root_legumesPage_child_type : StrChildType.t_childType<t_pourdebon_legumes_rootClassName> = root_legumesPage_child_component.type