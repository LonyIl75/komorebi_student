import getCurrentLine from "get-current-line"
import { routename as routenameHelpers } from "../helpers.js"

import { majFirstChar } from "@shared/m_string.js"
import { IUtilData, embeddingUtil } from "../types.js"

export type IUtilMainData<SN extends string > = IUtilData< SN ,"Main">

export const routename = embeddingUtil("Main" as const)

class UtilMainData<SN extends string> implements IUtilMainData<SN>{
    _serviceName :SN
    _routeName = routename

    constructor(_serviceName:SN){ /*console.log("DEBUG_ME",getCurrentLine());*/
        this._serviceName = _serviceName
    }
    
    getFile(){
        return `const _1_arr_classNameType_${this._serviceName}_${this._routeName}= [
            'Image','ImageValue'
        ] as const

        const _2_arr_classNameType_${this._serviceName}_${this._routeName} = [
        ] as const

        export const arr_classNameType_${this._serviceName}_${this._routeName} = [ ..._1_arr_classNameType_${this._serviceName}_${this._routeName} , ..._2_arr_classNameType_${this._serviceName}_${this._routeName}] as const

        export type t_arr_classNameType_${this._serviceName}_${this._routeName} = typeof arr_classNameType_${this._serviceName}_${this._routeName}

        export type t_union_classNameType_${this._serviceName}_${this._routeName} = arrToUnion<t_arr_classNameType_${this._serviceName}_${this._routeName}>

        export const arr_${this._serviceName}_${this._routeName}  = [
                getChildArr<t_arr_classNameType_${this._serviceName}_${this._routeName},0,[1]>(arr_classNameType_${this._serviceName}_${this._routeName},0,[1]),
                getChildArr<t_arr_classNameType_${this._serviceName}_${this._routeName},1> (arr_classNameType_${this._serviceName}_${this._routeName},1),
        ] as const

        export type t_arr_${this._serviceName}_${this._routeName} = typeof arr_${this._serviceName}_${this._routeName}


        export type t_arr_childType_${this._serviceName}_${this._routeName} = Readonly<t_getChildTypeFromArrComponent<t_union_classNameType_${this._serviceName}_${this._routeName},t_arr_${this._serviceName}_${this._routeName}>>
        export type t_union_childType_${this._serviceName}_${this._routeName} = arrToUnion<t_arr_childType_${this._serviceName}_${this._routeName}>

        type t_union_all = t_union_classNameType_${this._serviceName}_${this._routeName}
        const ${this._serviceName}_${this._routeName}_${routenameHelpers} = get${majFirstChar(this._serviceName)}${majFirstChar(routenameHelpers)}<t_union_all>()


        const __IJsonComponents_${this._serviceName}_${this._routeName} : _IJsonComponents<t_union_classNameType_${this._serviceName}_${this._routeName}> = {

            [_1_arr_classNameType_${this._serviceName}_${this._routeName}[0]]:{
                selectors : [Selector.cst_onePropAndTagg(classProp,_1_arr_classNameType_${this._serviceName}_${this._routeName}[0],"span",containOp).toString()] ,
                childs_selectors : [
                    ${this._serviceName}_imgImage_selectors
                ],

            },
            [_1_arr_classNameType_${this._serviceName}_${this._routeName}[1]]:{
                selectors : [${this._serviceName}_${this._routeName}_${routenameHelpers}.val_selector(_1_arr_classNameType_${this._serviceName}_${this._routeName}[0]).toString()] ,
                childs_selectors : empty_childSelectors,
                childs_attributes : [{[str_attribute_name] : "src",selector : "img"}]

            }

        } as const

        export type t__IJsonComponents_${this._serviceName}_${this._routeName} = typeof __IJsonComponents_${this._serviceName}_${this._routeName}
        export type t_IJsonComponents_${this._serviceName}_${this._routeName} = IJsonComponents< t_getClassNameTypeFromArrComponent<t_union_classNameType_${this._serviceName}_${this._routeName},t_arr_${this._serviceName}_${this._routeName}>,t_union_classNameType_${this._serviceName}_${this._routeName}, t_arr_${this._serviceName}_${this._routeName}>

        export  const fjson_${this._serviceName}_${this._routeName} = new FunctionalWrapperJsonComponent<t_arr_classNameType_${this._serviceName}_${this._routeName},t_union_classNameType_${this._serviceName}_${this._routeName},t_arr_${this._serviceName}_${this._routeName},t__IJsonComponents_${this._serviceName}_${this._routeName}>(arr_classNameType_${this._serviceName}_${this._routeName},arr_${this._serviceName}_${this._routeName},__IJsonComponents_${this._serviceName}_${this._routeName})
        export const json_${this._serviceName}_${this._routeName} = fjson_${this._serviceName}_${this._routeName}.json` as const
    }
}