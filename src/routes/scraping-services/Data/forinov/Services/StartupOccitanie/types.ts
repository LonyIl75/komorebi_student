import { ITypeChilds } from "@/utils/scraping/PageParsing/TypeChilds/TypeChilds.js"
import { IComponent, Component } from "@/utils/scraping/PageParsing/Schema/Component/Component.js"
import { t_childs_components } from "@/utils/scraping/PageParsing/Schema/Component/types.js"
import { t_childsSelectors, t_childSelector } from "@/utils/scraping/PageParsing/Schema/_Component/types.js"
import { Selector, char_child, classProp, containOp, fct_mod_directChild, fct_mod_hasDirectChild, idProp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js"
import { t_rootClassName, rootClassName, getRootType } from "@/utils/scraping/PageParsing/types.js"
import { enum_forinov_style, getForinovHelpers } from "../../util/helpers.js"
import { StrChildType, empty_ids } from "@/utils/scraping/PageParsing/TypeChilds/types.js"
import { idRoutes_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js"
import { majFirstChar } from "@shared/m_string.js"
import { root_selectors } from "@/routes/scraping-services/Services/src/lespepitestech/Services/utils/selector.js"

export const str_startupOccitanie = idRoutes_forinov[3] 
export type t_str_startupOccitanie = typeof str_startupOccitanie

export const str_StartupOccitanie = majFirstChar(str_startupOccitanie)
export type t_str_StartupOccitanie = typeof str_StartupOccitanie

export const embedName = <T extends string>(_str:T)=> `${str_StartupOccitanie }${_str}` as const 

export const forinov_startupOccitanie_rootClassName = `${str_StartupOccitanie}${rootClassName}` as const
export type t_forinov_startupOccitanie_rootClassName = typeof forinov_startupOccitanie_rootClassName
export const rootStartupOccitanieForinovChildType = StrChildType.compClassnameToChildType(forinov_startupOccitanie_rootClassName)


type t_base_union =  t_forinov_startupOccitanie_rootClassName
const forinov_startupOccitanie_base_helpers = getForinovHelpers<t_base_union>()


export const forinov_startupOccitanie_mainOfComponents: IComponent<t_rootClassName,t_forinov_startupOccitanie_rootClassName> = {
    class_name:rootClassName,
    type : getRootType,
    childs_selectors : [...forinov_startupOccitanie_base_helpers.arr_selector_join_arrArr(
        [
            root_selectors.map((_str)=>[
                {selector:Selector.cst_onePropAndTagg(classProp,'row',"div",containOp),strDebRest:[`${_str} `,""]},
                {selector:Selector.cst_onePropAndTagg(classProp,'col',"div",containOp)},
            ]),
        ],(arr:string[])=>arr.join(char_child)+fct_mod_hasDirectChild(Selector.cst_onePropAndTagg(idProp,'container-page-profil',"div",containOp).toString())
        ),
    ],
    childs_components : [{type : rootStartupOccitanieForinovChildType , ids : empty_ids}],
    isScoped:false,
}

export const root_startupOccitaniePage_classname : t_rootClassName  =  Component.getClass_name<t_rootClassName,t_forinov_startupOccitanie_rootClassName>(forinov_startupOccitanie_mainOfComponents)
export const root_startupOccitaniePage_type :StrChildType.t_childType<t_rootClassName> = Component.getType<t_rootClassName,t_forinov_startupOccitanie_rootClassName>(forinov_startupOccitanie_mainOfComponents)
const root_startupOccitaniePage_childs_selectors : t_childsSelectors = [Component.getChilds_selectors<t_rootClassName,t_forinov_startupOccitanie_rootClassName>(forinov_startupOccitanie_mainOfComponents)[0]]
export const root_startupOccitaniePage_child_selectors : t_childSelector = root_startupOccitaniePage_childs_selectors[0]
const root_startupOccitaniePage_childs_components : t_childs_components<t_forinov_startupOccitanie_rootClassName> = Component.getChilds_components(forinov_startupOccitanie_mainOfComponents)
const root_startupOccitaniePage_child_component : ITypeChilds<t_forinov_startupOccitanie_rootClassName> = root_startupOccitaniePage_childs_components[0]
export const root_startupOccitaniePage_child_type : StrChildType.t_childType<t_forinov_startupOccitanie_rootClassName> = root_startupOccitaniePage_child_component.type
