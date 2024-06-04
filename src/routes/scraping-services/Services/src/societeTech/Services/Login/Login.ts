import getCurrentLine from "get-current-line"
import { t_serviceName_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import pipelineBuilder from "./pipeline.js"
import { SocieteTechService } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import HA_SocieteTechServiceLogin, { t_str_login, str_login } from "./human-actions.js"
import { req_login, res_login } from "./routes.input.js"

export class SocieteTechServiceLogin extends SocieteTechService<t_str_login> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_societeTech , t_str_login > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_societeTech>  

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_societeTech , t_str_login > = SocieteTechServiceLogin.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_societeTech> = SocieteTechServiceLogin.databaseLocalAndRemote) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if(SocieteTechServiceLogin.address === undefined )SocieteTechServiceLogin.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(SocieteTechServiceLogin.databaseLocalAndRemote === undefined ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            SocieteTechServiceLogin.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_SocieteTechServiceLogin.getDatabaseLocalAndRemote = ()=>SocieteTechServiceLogin.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_login,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_SocieteTechServiceLogin.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return SocieteTechServiceLogin.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return SocieteTechServiceLogin.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_login,res:res_login )  { /*console.log("DEBUG_ME",getCurrentLine());*/

        return null 
    }

    getServicePipelineFunction(req : req_login,res:res_login )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_arr_fcts = ReturnType< typeof SocieteTechServiceLogin.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
