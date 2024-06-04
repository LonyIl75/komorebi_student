import getCurrentLine from "get-current-line"
import { t_serviceName_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import HA_SocieteTechServiceStartupsMtp , { t_str_startupsMtp, str_startupsMtp } from "./human-actions.js"
import pipelineBuilder from "./pipeline.js"
import { req_startupsMtp, res_startupsMtp } from "./routes.input.js"
import { SocieteTechService, IAService_3 } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import {  t_verifyStatic } from "@shared/type.js"
import { t_st_service_3 } from "@/routes/scraping-services/Services/class/AService.js"
import { t_st_AService } from "@/routes/scraping-services/class/Services/AService.js"


export abstract class _st_SocieteTechServiceStartupsMtp extends SocieteTechService<t_str_startupsMtp> {
    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_societeTech , t_str_startupsMtp > = undefined 
    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_societeTech>  
}


type IStSocieteTechServiceStartupsMtp = t_verifyStatic<typeof _st_SocieteTechServiceStartupsMtp ,t_st_service_3<t_serviceName_societeTech>,true> 
& t_verifyStatic<typeof _st_SocieteTechServiceStartupsMtp ,t_st_AService<t_serviceName_societeTech>,true>  

const _SocieteTechServiceStartupsMtp = _st_SocieteTechServiceStartupsMtp as {
    new (...args:ConstructorParameters<typeof SocieteTechService<t_str_startupsMtp>>): SocieteTechService<t_str_startupsMtp>
} & IStSocieteTechServiceStartupsMtp


export class SocieteTechServiceStartupsMtp extends _SocieteTechServiceStartupsMtp implements IAService_3<t_str_startupsMtp> {

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_societeTech , t_str_startupsMtp > = SocieteTechServiceStartupsMtp.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_societeTech>  = SocieteTechServiceStartupsMtp.databaseLocalAndRemote) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if(SocieteTechServiceStartupsMtp.address === undefined )SocieteTechServiceStartupsMtp.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(SocieteTechServiceStartupsMtp.databaseLocalAndRemote === undefined ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            SocieteTechServiceStartupsMtp.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_SocieteTechServiceStartupsMtp.getDatabaseLocalAndRemote = ()=>SocieteTechServiceStartupsMtp.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_startupsMtp,_address,_databaseLocalAndRemote);
    }

    getNamesOfPipelineFunction() {
        return [...HA_SocieteTechServiceStartupsMtp.namesOfPipelineFunction()] as const
    }

    getLocalPipelineFunction(req : req_startupsMtp,res:res_startupsMtp )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        return null 
    }

    getServicePipelineFunction(req : req_startupsMtp,res:res_startupsMtp )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_arr_fcts = ReturnType< typeof this.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }

}
