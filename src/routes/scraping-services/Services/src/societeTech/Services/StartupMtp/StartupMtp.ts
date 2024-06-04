import getCurrentLine from "get-current-line"
import { t_serviceName_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import HA_SocieteTechServiceStartupMtp , { t_str_startupMtp, str_startupMtp } from "./human-actions.js"
import pipelineBuilder from "./pipeline.js"
import { req_startupMtp, res_startupMtp } from "./routes.input.js"
import { SocieteTechService, IAService_3 } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import {  t_verifyStatic } from "@shared/type.js"
import { t_st_service_3 } from "@/routes/scraping-services/Services/class/AService.js"
import { t_st_AService } from "@/routes/scraping-services/class/Services/AService.js"


export abstract class _st_SocieteTechServiceStartupMtp extends SocieteTechService<t_str_startupMtp> {
    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_societeTech , t_str_startupMtp > = undefined 
    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_societeTech>  
}


type IStSocieteTechServiceStartupMtp = t_verifyStatic<typeof _st_SocieteTechServiceStartupMtp ,t_st_service_3<t_serviceName_societeTech>,true> 
& t_verifyStatic<typeof _st_SocieteTechServiceStartupMtp ,t_st_AService<t_serviceName_societeTech>,true>  

const _SocieteTechServiceStartupMtp = _st_SocieteTechServiceStartupMtp as {
    new (...args:ConstructorParameters<typeof SocieteTechService<t_str_startupMtp>>): SocieteTechService<t_str_startupMtp>
} & IStSocieteTechServiceStartupMtp


export class SocieteTechServiceStartupMtp extends _SocieteTechServiceStartupMtp implements IAService_3<t_str_startupMtp> {

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_societeTech , t_str_startupMtp > = SocieteTechServiceStartupMtp.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_societeTech>  = SocieteTechServiceStartupMtp.databaseLocalAndRemote) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if(SocieteTechServiceStartupMtp.address === undefined )SocieteTechServiceStartupMtp.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(SocieteTechServiceStartupMtp.databaseLocalAndRemote === undefined ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            SocieteTechServiceStartupMtp.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_SocieteTechServiceStartupMtp.getDatabaseLocalAndRemote = ()=>SocieteTechServiceStartupMtp.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_startupMtp,_address,_databaseLocalAndRemote);
    }

    getNamesOfPipelineFunction() {
        return [...HA_SocieteTechServiceStartupMtp.namesOfPipelineFunction()] as const
    }

    getLocalPipelineFunction(req : req_startupMtp,res:res_startupMtp )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        return null 
    }

    getServicePipelineFunction(req : req_startupMtp,res:res_startupMtp )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_arr_fcts = ReturnType< typeof this.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }

}
