import getCurrentLine from "get-current-line"
import { getIdxIdHomeRoute, getIdxIdLoginRoute, validIdRoutesOrThrow } from "@/controller/scraping-services/class/Config/types.js"
import { CodeGenerator } from "@/generator/utils/types.js"
import { IVoid } from "@shared/m_object.js"
import { majFirstChar } from "@shared/m_string.js"

export type IBaseRoutes<SN extends string> = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

//A FAIRE :  add type constraint must contain home and login 
class BaseRoutes<SN extends string , T1 extends readonly string[]> implements IBaseRoutes<SN>{
    _serviceName :SN
    idRoutes: T1

    constructor(_serviceName:SN,idRoutes:T1){ 
        this._serviceName = _serviceName
        validIdRoutesOrThrow(idRoutes)
        this.idRoutes = idRoutes
    }
    
    getFile(){
        return `export default class ${majFirstChar(this._serviceName)}Routes implements t_json_ReqResType_${this._serviceName}{
            ${this.idRoutes[getIdxIdHomeRoute()]}: getReqResTypeFromServiceNameAndRoute<t_serviceName_${this._serviceName}  ,t_idRoute_${this.idRoutes[getIdxIdHomeRoute()]}_${this._serviceName}> ;
            [str_${this.idRoutes[getIdxIdLoginRoute()]}]: getReqResTypeFromServiceNameAndRoute< t_serviceName_${this._serviceName}  ,t_str_${this.idRoutes[getIdxIdLoginRoute()]}> ;
            
            
            ${this.idRoutes.slice(getIdxIdHomeRoute()).map((_,idx)=>
                `[str_${this.idRoutes[idx]}] : getReqResTypeFromServiceNameAndRoute<t_serviceName_${this._serviceName}  ,t_idRoute_only_${this._serviceName}[${idx}]> ;`)}

            private constructor(){
                ServiceReqResType.construct_configNetworkJson<t_serviceName_${this._serviceName},t_remoteAddress_${this._serviceName},  t_idRoutes_${this._serviceName} , t_json_ReqResType_${this._serviceName}>(this,idRoutes_${this._serviceName},json_ReqResType_${this._serviceName})
            }
            static provider = new ${majFirstChar(this._serviceName)}Routes();
        }` as const 
    }
}