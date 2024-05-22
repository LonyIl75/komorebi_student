import { ITypeChilds } from "@/utils/scraping/PageParsing/TypeChilds/TypeChilds.js"
import { IComponent, Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js"
import { t_childs_components } from "@/utils/scraping/PageParsing/Schema/Component/types.js"
import { t_childsSelectors, t_childSelector } from "@/utils/scraping/PageParsing/Schema/_Component/types.js"
import { Selector, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js"
import { t_rootClassName, rootClassName, getRootType } from "@/utils/scraping/PageParsing/types.js"
import { enum_entreprise__style, getEntreprise_Helpers } from "../../util/helpers.js"
import { StrChildType, empty_ids } from "@/utils/scraping/PageParsing/TypeChilds/types.js"



export const entreprise__login_rootClassName :"LoginPage" = "LoginPage"
export type t_entreprise__login_rootClassName = typeof entreprise__login_rootClassName
export const rootLoginEntreprise_ChildType :StrChildType.t_childType<t_entreprise__login_rootClassName> = "login-page"


type t_base_union =  t_entreprise__login_rootClassName
const entreprise__login_base_helpers = getEntreprise_Helpers<t_base_union>()


export const entreprise__login_mainOfComponents: IComponent<t_rootClassName,t_entreprise__login_rootClassName> = {
    class_name:rootClassName,
    type : getRootType,
    childs_selectors : [...entreprise__login_base_helpers.arr_selector_join_arrArr(
        [
            [[
                {selector:Selector.cst_onePropAndTagg("",'',"html")},
                {selector:Selector.cst_onePropAndTagg("",'',"main")}
            ]],
        ],(arr:string[])=>arr.join(" ")
        ),
    ],
    isScoped : false ,
    childs_components : [{type : rootLoginEntreprise_ChildType , ids : empty_ids}],
}

export const root_loginPage_classname : t_rootClassName  =  Component.getClass_name<t_rootClassName,t_entreprise__login_rootClassName>(entreprise__login_mainOfComponents)
export const root_loginPage_type :StrChildType.t_childType<t_rootClassName> = Component.getType<t_rootClassName,t_entreprise__login_rootClassName>(entreprise__login_mainOfComponents)
const root_loginPage_childs_selectors : t_childsSelectors = [Component.getChilds_selectors<t_rootClassName,t_entreprise__login_rootClassName>(entreprise__login_mainOfComponents)[0]]
export const root_loginPage_child_selectors : t_childSelector = root_loginPage_childs_selectors[0]
const root_loginPage_childs_components : t_childs_components<t_entreprise__login_rootClassName> = Component.getChilds_components(entreprise__login_mainOfComponents)
const root_loginPage_child_component : ITypeChilds<t_entreprise__login_rootClassName> = root_loginPage_childs_components[0]
export const root_loginPage_child_type : StrChildType.t_childType<t_entreprise__login_rootClassName> = root_loginPage_child_component.type
