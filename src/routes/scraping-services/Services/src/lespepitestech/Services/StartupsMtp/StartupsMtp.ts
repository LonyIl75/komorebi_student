import getCurrentLine from "get-current-line"
import { t_serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import HA_LespepitestechServiceStartupsMtp , { t_str_startupsMtp, str_startupsMtp } from "./human-actions.js"
import pipelineBuilder from "./pipeline.js"
import { req_startupsMtp, res_startupsMtp } from "./routes.input.js"
import { LespepitestechService, IAService_3 } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import {  t_verifyStatic } from "@shared/type.js"
import { t_st_service_3 } from "@/routes/scraping-services/Services/class/AService.js"
import { t_st_AService } from "@/routes/scraping-services/class/Services/AService.js"


export abstract class _st_LespepitestechServiceStartupsMtp extends LespepitestechService<t_str_startupsMtp> {
    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_lespepitestech , t_str_startupsMtp > = undefined 
    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_lespepitestech>  
}


type IStLespepitestechServiceStartupsMtp = t_verifyStatic<typeof _st_LespepitestechServiceStartupsMtp ,t_st_service_3<t_serviceName_lespepitestech>,true> 
& t_verifyStatic<typeof _st_LespepitestechServiceStartupsMtp ,t_st_AService<t_serviceName_lespepitestech>,true>  

const _LespepitestechServiceStartupsMtp = _st_LespepitestechServiceStartupsMtp as {
    new (...args:ConstructorParameters<typeof LespepitestechService<t_str_startupsMtp>>): LespepitestechService<t_str_startupsMtp>
} & IStLespepitestechServiceStartupsMtp


export class LespepitestechServiceStartupsMtp extends _LespepitestechServiceStartupsMtp implements IAService_3<t_str_startupsMtp> {

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_lespepitestech , t_str_startupsMtp > = LespepitestechServiceStartupsMtp.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_lespepitestech>  = LespepitestechServiceStartupsMtp.databaseLocalAndRemote) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if(LespepitestechServiceStartupsMtp.address === undefined )LespepitestechServiceStartupsMtp.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(LespepitestechServiceStartupsMtp.databaseLocalAndRemote === undefined ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            LespepitestechServiceStartupsMtp.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_LespepitestechServiceStartupsMtp.getDatabaseLocalAndRemote = ()=>LespepitestechServiceStartupsMtp.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_startupsMtp,_address,_databaseLocalAndRemote);
    }

    getNamesOfPipelineFunction() {
        return [...HA_LespepitestechServiceStartupsMtp.namesOfPipelineFunction()] as const
    }

    getLocalPipelineFunction(req : req_startupsMtp,res:res_startupsMtp )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        return null 
    }

    getServicePipelineFunction(req : req_startupsMtp,res:res_startupsMtp )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_arr_fcts = ReturnType< typeof this.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }

}
