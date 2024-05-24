import getCurrentLine from "get-current-line"
import { CodeGenerator } from "@/generator/utils/types.js"
import { IVoid } from "@shared/m_object.js"

export type ITypeHABaseServiceRoute<SN extends string , R extends string  >  = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

class TypeHABaseServiceRoute<SN extends string , R extends string  >  implements ITypeHABaseServiceRoute<SN,R>{
    _routeName :R 
    _serviceName :SN

    constructor(routeName :R , serviceName :SN){ /*console.log("DEBUG_ME",getCurrentLine());*/
        this._routeName = routeName;
        this._serviceName = serviceName;
    }
    
    getFile(){
        return `type t_args_getTree < BaseElement extends t_unionClassName_${this._routeName}=t_rootClassName>= t_AHA_Service_ArgsGetTree<t_serviceName_${this._serviceName},t_str_${this._routeName} ,BaseElement,t_unionRegex_mapRegex_${this._serviceName}_${this._routeName} ,t_unionIdPath_mapRegex_${this._serviceName}_${this._routeName} , t_arrClassName_${this._routeName},t_unionClassName_${this._routeName} ,t_arrChilds_${this._routeName} ,  t_IJsonComponent_${this._routeName}>
        type t_1 = t_unionRegex_mapRegex_${this._serviceName}_${this._routeName}
        type t_2 = t_unionIdPath_mapRegex_${this._serviceName}_${this._routeName}
        type t_3 = readonly[ t_rootClassName , ...readonly (Exclude<t_arrClassName_${this._routeName}[number],t_rootClassName>)[]]
        type t_4 = t_unionClassName_${this._routeName}
        type t_5 =   readonly (t_arrChilds_${this._routeName}[number])[]
        type t_6 =  {[k in keyof t_IJsonComponent_${this._routeName} ]: t_IJsonComponent_${this._routeName}[k]}
        ` as const 
    }
}