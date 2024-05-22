import { ITypeChilds } from "@/utils/scraping/PageParsing/TypeChilds/TypeChilds.js"
import { IComponent, Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js"
import { t_childs_components } from "@/utils/scraping/PageParsing/Schema/Component/types.js"
import { t_childsSelectors, t_childSelector } from "@/utils/scraping/PageParsing/Schema/_Component/types.js"
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js"
import { t_rootClassName, rootClassName, getRootType } from "@/utils/scraping/PageParsing/types.js"
import { enum_lespepitestech_style, getLespepitestechHelpers } from "../../util/helpers.js"
import { StrChildType, empty_ids } from "@/utils/scraping/PageParsing/TypeChilds/types.js"
import { idRoutes_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js"
import { majFirstChar } from "@shared/m_string.js"

export const str_startupsMtp = idRoutes_lespepitestech[2] 
export type t_str_startupsMtp = typeof str_startupsMtp

export const str_StartupsMtp = majFirstChar(str_startupsMtp)
export type t_str_StartupsMtp = typeof str_StartupsMtp

export const embedName = <T extends string>(_str:T)=> `${str_StartupsMtp }${_str}` as const 

export const lespepitestech_startupsMtp_rootClassName = `${str_StartupsMtp}${rootClassName}` as const
export type t_lespepitestech_startupsMtp_rootClassName = typeof lespepitestech_startupsMtp_rootClassName
export const rootStartupsMtpLespepitestechChildType = StrChildType.compClassnameToChildType(lespepitestech_startupsMtp_rootClassName)


type t_base_union =  t_lespepitestech_startupsMtp_rootClassName
const lespepitestech_startupsMtp_base_helpers = getLespepitestechHelpers<t_base_union>()


export const lespepitestech_startupsMtp_mainOfComponents: IComponent<t_rootClassName,t_lespepitestech_startupsMtp_rootClassName> = {
    class_name:rootClassName,
    type : getRootType,
    childs_selectors : [...lespepitestech_startupsMtp_base_helpers.arr_selector_join_arrArr(
        [
            [[
                {selector:Selector.cst_onePropAndTagg("",'',"html")},
                {selector:Selector.cst_onePropAndTagg(classProp,'container-fluid',"div",containOp)},
                {selector:Selector.cst_onePropAndTagg(classProp,'region-content',"div",containOp)}
            ]],
        ],(arr:string[])=>arr.join(" ")
        ),
    ],
    isScoped : false ,
    childs_components : [{type : rootStartupsMtpLespepitestechChildType , ids : empty_ids}],
}

export const root_startupsMtpPage_classname : t_rootClassName  =  Component.getClass_name<t_rootClassName,t_lespepitestech_startupsMtp_rootClassName>(lespepitestech_startupsMtp_mainOfComponents)
export const root_startupsMtpPage_type :StrChildType.t_childType<t_rootClassName> = Component.getType<t_rootClassName,t_lespepitestech_startupsMtp_rootClassName>(lespepitestech_startupsMtp_mainOfComponents)
const root_startupsMtpPage_childs_selectors : t_childsSelectors = [Component.getChilds_selectors<t_rootClassName,t_lespepitestech_startupsMtp_rootClassName>(lespepitestech_startupsMtp_mainOfComponents)[0]]
export const root_startupsMtpPage_child_selectors : t_childSelector = root_startupsMtpPage_childs_selectors[0]
const root_startupsMtpPage_childs_components : t_childs_components<t_lespepitestech_startupsMtp_rootClassName> = Component.getChilds_components(lespepitestech_startupsMtp_mainOfComponents)
const root_startupsMtpPage_child_component : ITypeChilds<t_lespepitestech_startupsMtp_rootClassName> = root_startupsMtpPage_childs_components[0]
export const root_startupsMtpPage_child_type : StrChildType.t_childType<t_lespepitestech_startupsMtp_rootClassName> = root_startupsMtpPage_child_component.type
