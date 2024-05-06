import { routename as routenameHelpers } from "../../util/helpers.js"

import { CodeGenerator } from "@/generator/utils/types.js"
import { IVoid } from "@shared/m_object.js"
import { majFirstChar } from "@shared/m_string.js"

export type I_RouteData<SN extends string , R extends string > = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

class _RouteData<SN extends string , R extends string > implements I_RouteData<SN,R>{
    _serviceName :SN
    _routeName :R 

    constructor(_serviceName:SN,_routeName:R){
        this._serviceName = _serviceName
        this._routeName = _routeName
    }
    
    getFile(){
        return `export const str_${this._routeName} = idRoutes_${this._serviceName}[2] 
        export type t_str_${this._routeName} = typeof str_${this._routeName}

        export const str_${majFirstChar(this._routeName)} = majFirstChar(str_${this._routeName})
        export type t_str_${majFirstChar(this._routeName)} = typeof str_${majFirstChar(this._routeName)}

        export const ${this._serviceName}_${this._routeName}_rootClassName = \`\${str_${majFirstChar(this._routeName)}}\${rootClassName}\` as const
        export type t_${this._serviceName}_${this._routeName}_rootClassName = typeof ${this._serviceName}_${this._routeName}_rootClassName
        export const root${majFirstChar(this._routeName)}${majFirstChar(this._serviceName)}ChildType = StrChildType.compClassnameToChildType(${this._serviceName}_${this._routeName}_rootClassName)


        type t_base_union =  t_${this._serviceName}_${this._routeName}_rootClassName
        const ${this._serviceName}_${this._routeName}_base_${routenameHelpers} = get${majFirstChar(this._serviceName)}${majFirstChar(routenameHelpers)}<t_base_union>()


        export const ${this._serviceName}_${this._routeName}_mainOfComponents: IComponent<t_rootClassName,t_${this._serviceName}_${this._routeName}_rootClassName> = {
            class_name:rootClassName,
            type : getRootType,
            childs_selectors : [...${this._serviceName}_${this._routeName}_base_${routenameHelpers}.arr_selector_join_arrArr(
                [
                    [[
                        {selector:Selector.cst_onePropAndTagg("",'',"html")},
                        {selector:Selector.cst_onePropAndTagg(classProp,'container-fluid page',"div",containOp)},
                        {selector:Selector.cst_onePropAndTagg(classProp,'page_inner',"div",containOp)}
                    ]],
                ],(arr:string[])=>arr.join(" ")
                ),
            ],
            isScoped : false ,
            childs_components : [{type : root${majFirstChar(this._routeName)}${majFirstChar(this._serviceName)}ChildType , ids : empty_ids}],
        }

        export const root_${this._routeName}Page_classname : t_rootClassName  =  Component.getClass_name<t_rootClassName,t_${this._serviceName}_${this._routeName}_rootClassName>(${this._serviceName}_${this._routeName}_mainOfComponents)
        export const root_${this._routeName}Page_type :StrChildType.t_childType<t_rootClassName> = Component.getType<t_rootClassName,t_${this._serviceName}_${this._routeName}_rootClassName>(${this._serviceName}_${this._routeName}_mainOfComponents)
        const root_${this._routeName}Page_childs_selectors : t_childsSelectors = [Component.getChilds_selectors<t_rootClassName,t_${this._serviceName}_${this._routeName}_rootClassName>(${this._serviceName}_${this._routeName}_mainOfComponents)[0]]
        export const root_${this._routeName}Page_child_selectors : t_childSelector = root_${this._routeName}Page_childs_selectors[0]
        const root_${this._routeName}Page_childs_components : t_childs_components<t_${this._serviceName}_${this._routeName}_rootClassName> = Component.getChilds_components(${this._serviceName}_${this._routeName}_mainOfComponents)
        const root_${this._routeName}Page_child_component : ITypeChilds<t_${this._serviceName}_${this._routeName}_rootClassName> = root_${this._routeName}Page_childs_components[0]
        export const root_${this._routeName}Page_child_type : StrChildType.t_childType<t_${this._serviceName}_${this._routeName}_rootClassName> = root_${this._routeName}Page_child_component.type` as const
    }
}