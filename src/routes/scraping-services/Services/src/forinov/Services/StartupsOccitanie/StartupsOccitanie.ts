import getCurrentLine from "get-current-line"
import { t_serviceName_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import HA_ForinovServiceStartupsOccitanie , { t_str_startupsOccitanie, str_startupsOccitanie } from "./human-actions.js"
import pipelineBuilder from "./pipeline.js"
import { req_startupsOccitanie, res_startupsOccitanie } from "./routes.input.js"
import { ForinovService, IAService_3 } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import {  t_verifyStatic } from "@shared/type.js"
import { t_st_service_3 } from "@/routes/scraping-services/Services/class/AService.js"
import { t_st_AService } from "@/routes/scraping-services/class/Services/AService.js"


export abstract class _st_ForinovServiceStartupsOccitanie extends ForinovService<t_str_startupsOccitanie> {
    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_forinov , t_str_startupsOccitanie > = undefined 
    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_forinov>  
}


type IStForinovServiceStartupsOccitanie = t_verifyStatic<typeof _st_ForinovServiceStartupsOccitanie ,t_st_service_3<t_serviceName_forinov>,true> 
& t_verifyStatic<typeof _st_ForinovServiceStartupsOccitanie ,t_st_AService<t_serviceName_forinov>,true>  

const _ForinovServiceStartupsOccitanie = _st_ForinovServiceStartupsOccitanie as {
    new (...args:ConstructorParameters<typeof ForinovService<t_str_startupsOccitanie>>): ForinovService<t_str_startupsOccitanie>
} & IStForinovServiceStartupsOccitanie


export class ForinovServiceStartupsOccitanie extends _ForinovServiceStartupsOccitanie implements IAService_3<t_str_startupsOccitanie> {

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_forinov , t_str_startupsOccitanie > = ForinovServiceStartupsOccitanie.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_forinov>  = ForinovServiceStartupsOccitanie.databaseLocalAndRemote) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if(ForinovServiceStartupsOccitanie.address === undefined )ForinovServiceStartupsOccitanie.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(ForinovServiceStartupsOccitanie.databaseLocalAndRemote === undefined ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            ForinovServiceStartupsOccitanie.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_ForinovServiceStartupsOccitanie.getDatabaseLocalAndRemote = ()=>ForinovServiceStartupsOccitanie.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_startupsOccitanie,_address,_databaseLocalAndRemote);
    }

    getNamesOfPipelineFunction() {
        return [...HA_ForinovServiceStartupsOccitanie.namesOfPipelineFunction()] as const
    }

    getLocalPipelineFunction(req : req_startupsOccitanie,res:res_startupsOccitanie )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        return null 
    }

    getServicePipelineFunction(req : req_startupsOccitanie,res:res_startupsOccitanie )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_arr_fcts = ReturnType< typeof this.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }

}
