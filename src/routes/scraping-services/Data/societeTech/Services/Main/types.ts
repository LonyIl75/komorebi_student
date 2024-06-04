import { ITypeChilds } from "@/utils/scraping/PageParsing/TypeChilds/TypeChilds.js"
import { IComponent, Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js"
import { t_childs_components } from "@/utils/scraping/PageParsing/Schema/Component/types.js"
import { t_childsSelectors, t_childSelector } from "@/utils/scraping/PageParsing/Schema/_Component/types.js"
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js"
import { t_rootClassName, rootClassName, getRootType } from "@/utils/scraping/PageParsing/types.js"
import { enum_societeTech_style, getSocieteTechHelpers } from "../../util/helpers.js"
import { StrChildType, empty_ids } from "@/utils/scraping/PageParsing/TypeChilds/types.js"



export const societeTech_main_rootClassName :"MainPage" = "MainPage"
export type t_societeTech_main_rootClassName = typeof societeTech_main_rootClassName
export const rootMainSocieteTechChildType :StrChildType.t_childType<t_societeTech_main_rootClassName> = "main-page"


type t_base_union =  t_societeTech_main_rootClassName
const societeTech_main_base_helpers = getSocieteTechHelpers<t_base_union>()


export const societeTech_main_mainOfComponents: IComponent<t_rootClassName,t_societeTech_main_rootClassName> = {
    class_name:rootClassName,
    type : getRootType,
    childs_selectors : [...societeTech_main_base_helpers.arr_selector_join_arrArr(
        [
            [[
                {selector:Selector.cst_onePropAndTagg("",'',"body")},
                {selector:Selector.cst_onePropAndTagg(classProp,'main',"div",containOp)},
            ]],
        ],(arr:string[])=>arr.join(" ")
        ),
    ],
    isScoped : false ,
    childs_components : [{type : rootMainSocieteTechChildType , ids : empty_ids}],
}

export const root_mainPage_classname : t_rootClassName  =  Component.getClass_name<t_rootClassName,t_societeTech_main_rootClassName>(societeTech_main_mainOfComponents)
export const root_mainPage_type :StrChildType.t_childType<t_rootClassName> = Component.getType<t_rootClassName,t_societeTech_main_rootClassName>(societeTech_main_mainOfComponents)
const root_mainPage_childs_selectors : t_childsSelectors = [Component.getChilds_selectors<t_rootClassName,t_societeTech_main_rootClassName>(societeTech_main_mainOfComponents)[0]]
export const root_mainPage_child_selectors : t_childSelector = root_mainPage_childs_selectors[0]
const root_mainPage_childs_components : t_childs_components<t_societeTech_main_rootClassName> = Component.getChilds_components(societeTech_main_mainOfComponents)
const root_mainPage_child_component : ITypeChilds<t_societeTech_main_rootClassName> = root_mainPage_childs_components[0]
export const root_mainPage_child_type : StrChildType.t_childType<t_societeTech_main_rootClassName> = root_mainPage_child_component.type
