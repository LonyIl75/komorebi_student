import getCurrentLine from "get-current-line"
import { routename as routenameHelpers } from "../helpers.js"

import { majFirstChar } from "@shared/m_string.js"
import { IUtilData, embeddingUtil } from "../types.js"

export type IUtilTextData<SN extends string > = IUtilData< SN ,"Text">

export const routename = embeddingUtil("Text" as const)

class UtilTextData<SN extends string> implements IUtilTextData<SN>{
    _serviceName :SN
    _routeName = routename

    constructor(_serviceName:SN){ /*console.log("DEBUG_ME",getCurrentLine());*/
        this._serviceName = _serviceName
    }
    
    getFile(){
        return `const _1_arr_classNameType_${this._serviceName}_${this._routeName} = [
            'Text'
        ] as const
        
        const _2_arr_classNameType_${this._serviceName}_${this._routeName} = [
        ] as const
        
        export const arr_classNameType_${this._serviceName}_${this._routeName} = [ ..._1_arr_classNameType_${this._serviceName}_${this._routeName} , ..._2_arr_classNameType_${this._serviceName}_${this._routeName}] as const
        
        export type t_arr_classNameType_${this._serviceName}_${this._routeName} = typeof arr_classNameType_${this._serviceName}_${this._routeName}
        
        export type t_union_classNameType_${this._serviceName}_${this._routeName} = arrToUnion<t_arr_classNameType_${this._serviceName}_${this._routeName}>
        
        export const arr_${this._serviceName}_${this._routeName} = [
                getChildArr<t_arr_classNameType_${this._serviceName}_${this._routeName},0> (arr_classNameType_${this._serviceName}_${this._routeName},0),
        ] as const 
        
        export type t_arr_${this._serviceName}_${this._routeName} = typeof arr_${this._serviceName}_${this._routeName}
        
        
        export type t_arr_childType_${this._serviceName}_${this._routeName} = Readonly<t_getChildTypeFromArrComponent<t_union_classNameType_${this._serviceName}_${this._routeName},t_arr_${this._serviceName}_${this._routeName}>>
        export type t_union_childType_${this._serviceName}_expert = arrToUnion<t_arr_childType_${this._serviceName}_${this._routeName}>
        
        type t_union_all = t_union_classNameType_${this._serviceName}_${this._routeName}
        const ${this._serviceName}_${this._routeName}_${routenameHelpers} = get${majFirstChar(this._serviceName)}${majFirstChar(routenameHelpers)}<t_union_all>()
        
        export const df__IComponent_${this._serviceName}_${this._routeName} :_IComponent = {
            childs_selectors : [${this._serviceName}_spanText_selectors],
        } as const 
        
        const getDf${majFirstChar(this._serviceName)}${majFirstChar(this._routeName)}IJsonComponent = <arrClassName extends readonly t_union_classNameType_${this._serviceName}_${this._routeName}[] ,  t_idx extends  number >(arr_className : arrClassName ,idx:t_idx,isDfSelectors : boolean = true  , _json : _IComponent = df__IComponent_${this._serviceName}_${this._routeName} )  :_IComponent=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            const className :arrClassName[t_idx] = isDfSelectors ? arr_className[idx] : undefined 
            const _selectors = className ? [${this._serviceName}_${this._routeName}_${routenameHelpers}.val_selector(className).toString()] : undefined 
            return new _Component(_selectors, _json.childs_selectors, _json.isScoped, [...ValTextContent.dfArgsCst], _json.childs_attributes)
        }
        
        
        const __IJsonComponents_${this._serviceName}_${this._routeName} : _IJsonComponents<t_union_classNameType_${this._serviceName}_${this._routeName}> = {
            [arr_classNameType_${this._serviceName}_${this._routeName}[0]]:getDf${majFirstChar(this._serviceName)}${majFirstChar(this._routeName)}IJsonComponent<t_arr_classNameType_${this._serviceName}_${this._routeName},0>(arr_classNameType_${this._serviceName}_${this._routeName},0),
        } as const
        
        export type t__IJsonComponents_${this._serviceName}_${this._routeName} = typeof __IJsonComponents_${this._serviceName}_${this._routeName}
        export type t_IJsonComponents_${this._serviceName}_${this._routeName} = IJsonComponents<t_getClassNameTypeFromArrComponent<t_union_classNameType_${this._serviceName}_${this._routeName},t_arr_${this._serviceName}_${this._routeName}>,t_union_classNameType_${this._serviceName}_${this._routeName},t_arr_${this._serviceName}_${this._routeName}>
        
        export  const fjson_${this._serviceName}_${this._routeName} = new FunctionalWrapperJsonComponent<t_arr_classNameType_${this._serviceName}_${this._routeName},t_union_classNameType_${this._serviceName}_${this._routeName},t_arr_${this._serviceName}_${this._routeName},t__IJsonComponents_${this._serviceName}_${this._routeName}>(arr_classNameType_${this._serviceName}_${this._routeName},arr_${this._serviceName}_${this._routeName},__IJsonComponents_${this._serviceName}_${this._routeName})
        export const json_${this._serviceName}_${this._routeName} = fjson_${this._serviceName}_${this._routeName}.json` as const
    }
}