import { ITypeChilds } from "@/utils/scraping/PageParsing/TypeChilds/TypeChilds.js"
import { IComponent, Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js"
import { t_childs_components } from "@/utils/scraping/PageParsing/Schema/Component/types.js"
import { t_childsSelectors, t_childSelector } from "@/utils/scraping/PageParsing/Schema/_Component/types.js"
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js"
import { t_rootClassName, rootClassName, getRootType } from "@/utils/scraping/PageParsing/types.js"
import { enum_societeTech_style, getSocieteTechHelpers } from "../../util/helpers.js"
import { StrChildType, empty_ids } from "@/utils/scraping/PageParsing/TypeChilds/types.js"
import { idRoutes_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js"
import { majFirstChar } from "@shared/m_string.js"

export const str_startupMtp = idRoutes_societeTech[3]
export type t_str_startupMtp = typeof str_startupMtp

export const str_StartupMtp = "StartupMtp" as const//majFirstChar(str_startupMtp)
export type t_str_StartupMtp = typeof str_StartupMtp

export const embedName = <T extends string>(_str:T)=> `${str_StartupMtp}${_str}` as const 

export const societeTech_startupMtp_rootClassName = `${str_StartupMtp}${rootClassName}` as const
export type t_societeTech_startupMtp_rootClassName = typeof societeTech_startupMtp_rootClassName
export const rootStartupMtpSocieteTechChildType = StrChildType.compClassnameToChildType(societeTech_startupMtp_rootClassName)


type t_base_union =  t_societeTech_startupMtp_rootClassName
const societeTech_startupMtp_base_helpers = getSocieteTechHelpers<t_base_union>()


export const societeTech_startupMtp_mainOfComponents: IComponent<t_rootClassName,t_societeTech_startupMtp_rootClassName> = {
    class_name:rootClassName,
    type : getRootType,
    childs_selectors : [...societeTech_startupMtp_base_helpers.arr_selector_join_arrArr(
        [
            [[
                {selector:Selector.cst_onePropAndTagg("",'',"html")},
                {selector:Selector.cst_onePropAndTagg("",'',"body")},
                {selector:Selector.cst_onePropAndTagg(classProp,'product type-product',"div",containOp)},
            ]],
        ],(arr:string[])=>arr.join(" ")
        ),
    ],
    isScoped : false ,
    childs_components : [{type : rootStartupMtpSocieteTechChildType , ids : empty_ids}],
}

export const root_startupMtpPage_classname : t_rootClassName  =  Component.getClass_name<t_rootClassName,t_societeTech_startupMtp_rootClassName>(societeTech_startupMtp_mainOfComponents)
export const root_startupMtpPage_type :StrChildType.t_childType<t_rootClassName> = Component.getType<t_rootClassName,t_societeTech_startupMtp_rootClassName>(societeTech_startupMtp_mainOfComponents)
const root_startupMtpPage_childs_selectors : t_childsSelectors = [Component.getChilds_selectors<t_rootClassName,t_societeTech_startupMtp_rootClassName>(societeTech_startupMtp_mainOfComponents)[0]]
export const root_startupMtpPage_child_selectors : t_childSelector = root_startupMtpPage_childs_selectors[0]
const root_startupMtpPage_childs_components : t_childs_components<t_societeTech_startupMtp_rootClassName> = Component.getChilds_components(societeTech_startupMtp_mainOfComponents)
const root_startupMtpPage_child_component : ITypeChilds<t_societeTech_startupMtp_rootClassName> = root_startupMtpPage_childs_components[0]
export const root_startupMtpPage_child_type : StrChildType.t_childType<t_societeTech_startupMtp_rootClassName> = root_startupMtpPage_child_component.type
