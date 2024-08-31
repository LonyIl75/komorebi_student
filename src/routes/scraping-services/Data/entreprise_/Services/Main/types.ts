import { ITypeChilds } from "@/utils/scraping/PageParsing/TypeChilds/TypeChilds.js"
import { IComponent, Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js"
import { t_childs_components } from "@/utils/scraping/PageParsing/Schema/Component/types.js"
import { t_childsSelectors, t_childSelector } from "@/utils/scraping/PageParsing/Schema/_Component/types.js"
import { Selector, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js"
import { t_rootClassName, rootClassName, getRootType } from "@/utils/scraping/PageParsing/types.js"
import { enum_entreprise__style, getEntreprise_Helpers } from "../../util/helpers.js"
import { StrChildType, empty_ids } from "@/utils/scraping/PageParsing/TypeChilds/types.js"



export const entreprise__main_rootClassName :"_Page" = "_Page"
export type t_entreprise__main_rootClassName = typeof entreprise__main_rootClassName
export const rootMainEntreprise_ChildType :StrChildType.t_childType<t_entreprise__main_rootClassName> = "_-page"


type t_base_union =  t_entreprise__main_rootClassName
const entreprise__main_base_helpers = getEntreprise_Helpers<t_base_union>()


export const entreprise__main_mainOfComponents: IComponent<t_rootClassName,t_entreprise__main_rootClassName> = {
    class_name:rootClassName,
    type : getRootType,
    childs_selectors : [...entreprise__main_base_helpers.arr_selector_join_arrArr(
        [
            [[
                {selector:Selector.cst_onePropAndTagg("",'',"html")},
            ]],
        ],(arr:string[])=>arr.join(" ")
        ),
    ],
    isScoped : false ,
    childs_components : [{type : rootMainEntreprise_ChildType , ids : empty_ids}],
}

export const root_mainPage_classname : t_rootClassName  =  Component.getClass_name<t_rootClassName,t_entreprise__main_rootClassName>(entreprise__main_mainOfComponents)
export const root_mainPage_type :StrChildType.t_childType<t_rootClassName> = Component.getType<t_rootClassName,t_entreprise__main_rootClassName>(entreprise__main_mainOfComponents)
const root_mainPage_childs_selectors : t_childsSelectors = [Component.getChilds_selectors<t_rootClassName,t_entreprise__main_rootClassName>(entreprise__main_mainOfComponents)[0]]
export const root_mainPage_child_selectors : t_childSelector = root_mainPage_childs_selectors[0]
const root_mainPage_childs_components : t_childs_components<t_entreprise__main_rootClassName> = Component.getChilds_components(entreprise__main_mainOfComponents)
const root_mainPage_child_component : ITypeChilds<t_entreprise__main_rootClassName> = root_mainPage_childs_components[0]
export const root_mainPage_child_type : StrChildType.t_childType<t_entreprise__main_rootClassName> = root_mainPage_child_component.type
