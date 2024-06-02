import getCurrentLine from "get-current-line"
import { t_serviceName_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import HA_ForinovServiceStartupOccitanie , { t_str_startupOccitanie, str_startupOccitanie } from "./human-actions.js"
import pipelineBuilder from "./pipeline.js"
import { req_startupOccitanie, res_startupOccitanie } from "./routes.input.js"
import { ForinovService, IAService_3 } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import {  t_verifyStatic } from "@shared/type.js"
import { t_st_service_3 } from "@/routes/scraping-services/Services/class/AService.js"
import { t_st_AService } from "@/routes/scraping-services/class/Services/AService.js"


export abstract class _st_ForinovServiceStartupOccitanie extends ForinovService<t_str_startupOccitanie> {
    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_forinov , t_str_startupOccitanie > = undefined 
    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_forinov>  
}


type IStForinovServiceStartupOccitanie = t_verifyStatic<typeof _st_ForinovServiceStartupOccitanie ,t_st_service_3<t_serviceName_forinov>,true> 
& t_verifyStatic<typeof _st_ForinovServiceStartupOccitanie ,t_st_AService<t_serviceName_forinov>,true>  

const _ForinovServiceStartupOccitanie = _st_ForinovServiceStartupOccitanie as {
    new (...args:ConstructorParameters<typeof ForinovService<t_str_startupOccitanie>>): ForinovService<t_str_startupOccitanie>
} & IStForinovServiceStartupOccitanie


export class ForinovServiceStartupOccitanie extends _ForinovServiceStartupOccitanie implements IAService_3<t_str_startupOccitanie> {

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_forinov , t_str_startupOccitanie > = ForinovServiceStartupOccitanie.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_forinov>  = ForinovServiceStartupOccitanie.databaseLocalAndRemote) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if(ForinovServiceStartupOccitanie.address === undefined )ForinovServiceStartupOccitanie.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(ForinovServiceStartupOccitanie.databaseLocalAndRemote === undefined ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            ForinovServiceStartupOccitanie.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_ForinovServiceStartupOccitanie.getDatabaseLocalAndRemote = ()=>ForinovServiceStartupOccitanie.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_startupOccitanie,_address,_databaseLocalAndRemote);
    }

    getNamesOfPipelineFunction() {
        return [...HA_ForinovServiceStartupOccitanie.namesOfPipelineFunction()] as const
    }

    getLocalPipelineFunction(req : req_startupOccitanie,res:res_startupOccitanie )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        return null 
    }

    getServicePipelineFunction(req : req_startupOccitanie,res:res_startupOccitanie )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_arr_fcts = ReturnType< typeof this.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }

}
