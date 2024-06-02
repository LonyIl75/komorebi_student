import { ITypeChilds } from "@/utils/scraping/PageParsing/TypeChilds/TypeChilds.js"
import { IComponent, Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js"
import { t_childs_components } from "@/utils/scraping/PageParsing/Schema/Component/types.js"
import { t_childsSelectors, t_childSelector } from "@/utils/scraping/PageParsing/Schema/_Component/types.js"
import { Selector, char_child, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js"
import { t_rootClassName, rootClassName, getRootType } from "@/utils/scraping/PageParsing/types.js"
import { enum_forinov_style, getForinovHelpers } from "../../util/helpers.js"
import { StrChildType, empty_ids } from "@/utils/scraping/PageParsing/TypeChilds/types.js"
import { idRoutes_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js"
import { majFirstChar } from "@shared/m_string.js"
import { root_selectors } from "@/routes/scraping-services/Services/src/lespepitestech/Services/utils/selector.js"

export const str_startupsOccitanie = idRoutes_forinov[2] 
export type t_str_startupsOccitanie = typeof str_startupsOccitanie

export const str_StartupsOccitanie = majFirstChar(str_startupsOccitanie)
export type t_str_StartupsOccitanie = typeof str_StartupsOccitanie

export const embedName = <T extends string>(_str:T)=> `${str_StartupsOccitanie }${_str}` as const 

export const forinov_startupsOccitanie_rootClassName = `${str_StartupsOccitanie}${rootClassName}` as const
export type t_forinov_startupsOccitanie_rootClassName = typeof forinov_startupsOccitanie_rootClassName
export const rootStartupsOccitanieForinovChildType = StrChildType.compClassnameToChildType(forinov_startupsOccitanie_rootClassName)


type t_base_union =  t_forinov_startupsOccitanie_rootClassName
const forinov_startupsOccitanie_base_helpers = getForinovHelpers<t_base_union>()


export const forinov_startupsOccitanie_mainOfComponents: IComponent<t_rootClassName,t_forinov_startupsOccitanie_rootClassName> = {
    class_name:rootClassName,
    type : getRootType,
    childs_selectors : [...forinov_startupsOccitanie_base_helpers.arr_selector_join_arrArr( [root_selectors.map((_str)=>[
                {selector:Selector.cst_onePropAndTagg(classProp,'main-content',"div",containOp),strDebRest:[`${_str} `,""]},
                {selector:Selector.cst_onePropAndTagg(classProp,'container-fluid',"div",containOp)},
                {selector:Selector.cst_onePropAndTagg(classProp,'row',"div",containOp)},
                {selector:Selector.cst_onePropAndTagg(classProp,'col',"div",containOp)},
            ]),
        ],(arr:string[])=>arr.join(char_child)
        )],
    isScoped : false ,
    childs_components : [{type : rootStartupsOccitanieForinovChildType , ids : empty_ids}],
}

export const root_startupsOccitaniePage_classname : t_rootClassName  =  Component.getClass_name<t_rootClassName,t_forinov_startupsOccitanie_rootClassName>(forinov_startupsOccitanie_mainOfComponents)
export const root_startupsOccitaniePage_type :StrChildType.t_childType<t_rootClassName> = Component.getType<t_rootClassName,t_forinov_startupsOccitanie_rootClassName>(forinov_startupsOccitanie_mainOfComponents)
const root_startupsOccitaniePage_childs_selectors : t_childsSelectors = [Component.getChilds_selectors<t_rootClassName,t_forinov_startupsOccitanie_rootClassName>(forinov_startupsOccitanie_mainOfComponents)[0]]
export const root_startupsOccitaniePage_child_selectors : t_childSelector = root_startupsOccitaniePage_childs_selectors[0]
const root_startupsOccitaniePage_childs_components : t_childs_components<t_forinov_startupsOccitanie_rootClassName> = Component.getChilds_components(forinov_startupsOccitanie_mainOfComponents)
const root_startupsOccitaniePage_child_component : ITypeChilds<t_forinov_startupsOccitanie_rootClassName> = root_startupsOccitaniePage_childs_components[0]
export const root_startupsOccitaniePage_child_type : StrChildType.t_childType<t_forinov_startupsOccitanie_rootClassName> = root_startupsOccitaniePage_child_component.type
