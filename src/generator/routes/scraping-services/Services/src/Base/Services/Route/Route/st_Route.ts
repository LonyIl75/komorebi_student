import { _validateRemoteAddress } from "@/controller/scraping-services/class/constraints.js"
import { CodeGenerator, FnMbTyped, t_function_codeGenerator } from "@/generator/utils/types.js"
import { t_st_service_3 } from "@/routes/scraping-services/class/Services/AService.js"
import { IVoid } from "@shared/m_object.js"


type IStRoute <SN extends string , R extends string  > =
CodeGenerator<{static: t_st_service_3<SN>,_:IVoid},"class",{_:IVoid , static : 
    {address:{
        type:`getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_${SN} , t_str_${R} >`,
        value : "undefined"
    },
    databaseLocalAndRemote:{
        type : ` DatabaseLocalAndRemote<t_serviceName_${SN}>`
    }   
}},true>

export class StRoute<SN extends string , R extends string  > implements IStRoute<string,string>{
   
    name : string 
    _routeName :SN 
    _serviceName :R

    generics: readonly { id: string; extends: string }[]
    extends: { id: string; generics: readonly string[] }
    implements: {id:string,generics:readonly string[]}[]
    isAbstract: true

    st_address(){
        return `static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_${this._serviceName} , t_str_${this._routeName} >=undefined` as const 
    }

    st_databaseLocalAndRemote(){
        return `static databaseLocalAndRemote: DatabaseLocalAndRemote<t_serviceName_${this._serviceName}>` as const 
    }

   
    
}
