import { t_childsSelectors, t_childSelector } from "@/utils/scraping/PageParsing/Schema/_Component/types.js"
import { Selector, char_child, classProp, containOp, idProp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js"
import { t_rootClassName, rootClassName, getRootType } from "@/utils/scraping/PageParsing/types.js"
import { enum_pourdebon_style, getPourdebonHelpers } from "../../util/helpers.js"
import { IComponent, Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js"
import { t_childs_components } from "@/utils/scraping/PageParsing/Schema/Component/types.js"
import { ITypeChilds } from "@/utils/scraping/PageParsing/TypeChilds/TypeChilds.js"
import { StrChildType, empty_ids } from "@/utils/scraping/PageParsing/TypeChilds/types.js"



export const pourdebon_bouchers_rootClassName :"PageBouchers" = "PageBouchers"
export type t_pourdebon_bouchers_rootClassName = typeof pourdebon_bouchers_rootClassName
export const rootBouchersPourdebonChildType :StrChildType.t_childType<t_pourdebon_bouchers_rootClassName> = "page-bouchers"


type t_base_union =  t_pourdebon_bouchers_rootClassName
const pourdebon_bouchers_base_helpers = getPourdebonHelpers<t_base_union>()


export const pourdebon_bouchers_mainOfComponents: IComponent<t_rootClassName,t_pourdebon_bouchers_rootClassName> = {
    class_name:rootClassName,
    type : getRootType,
    childs_selectors :[...pourdebon_bouchers_base_helpers.arr_selector([
                    [
                        Selector.cst_onePropAndTagg("",'',"main"),
                        Selector.cst_onePropAndTagg(classProp,'content',"div",containOp),
                        Selector.cst_onePropAndTagg(idProp,'content',"div",containOp),
                        Selector.cst_onePropAndTagg(classProp,'content',"main",containOp),
                        Selector.cst_onePropAndTagg(idProp,'content',"main",containOp),
                    ]
                ],(str_selector)=>
                Selector.cst_onePropAndTagg("",'',"html").toString() + char_child + str_selector)
            ],
    childs_components : [{type : rootBouchersPourdebonChildType , ids : empty_ids}]
}

export const root_bouchersPage_classname : t_rootClassName  =  Component.getClass_name<t_rootClassName,t_pourdebon_bouchers_rootClassName>(pourdebon_bouchers_mainOfComponents)
export const root_bouchersPage_type :StrChildType.t_childType<t_rootClassName> = Component.getType<t_rootClassName,t_pourdebon_bouchers_rootClassName>(pourdebon_bouchers_mainOfComponents)
const root_bouchersPage_childs_selectors : t_childsSelectors = [Component.getChilds_selectors<t_rootClassName,t_pourdebon_bouchers_rootClassName>(pourdebon_bouchers_mainOfComponents)[0]]
export const root_bouchersPage_child_selectors : t_childSelector = root_bouchersPage_childs_selectors[0]
const root_bouchersPage_childs_components : t_childs_components<t_pourdebon_bouchers_rootClassName> = Component.getChilds_components(pourdebon_bouchers_mainOfComponents)
const root_bouchersPage_child_component : ITypeChilds<t_pourdebon_bouchers_rootClassName> = root_bouchersPage_childs_components[0]
export const root_bouchersPage_child_type : StrChildType.t_childType<t_pourdebon_bouchers_rootClassName> = root_bouchersPage_child_component.type