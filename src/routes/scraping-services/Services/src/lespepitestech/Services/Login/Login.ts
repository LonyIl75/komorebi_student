import getCurrentLine from "get-current-line"
import { t_serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import pipelineBuilder from "./pipeline.js"
import { LespepitestechService } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import HA_LespepitestechServiceLogin, { t_str_login, str_login } from "./human-actions.js"
import { req_login, res_login } from "./routes.input.js"

export class LespepitestechServiceLogin extends LespepitestechService<t_str_login> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_lespepitestech , t_str_login > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_lespepitestech>  

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_lespepitestech , t_str_login > = LespepitestechServiceLogin.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_lespepitestech> = LespepitestechServiceLogin.databaseLocalAndRemote) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if(LespepitestechServiceLogin.address === undefined )LespepitestechServiceLogin.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(LespepitestechServiceLogin.databaseLocalAndRemote === undefined ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            LespepitestechServiceLogin.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_LespepitestechServiceLogin.getDatabaseLocalAndRemote = ()=>LespepitestechServiceLogin.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_login,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_LespepitestechServiceLogin.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return LespepitestechServiceLogin.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return LespepitestechServiceLogin.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_login,res:res_login )  { /*console.log("DEBUG_ME",getCurrentLine());*/

        return null 
    }

    getServicePipelineFunction(req : req_login,res:res_login )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_arr_fcts = ReturnType< typeof LespepitestechServiceLogin.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
