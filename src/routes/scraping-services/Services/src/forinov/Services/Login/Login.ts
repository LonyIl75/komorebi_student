import getCurrentLine from "get-current-line"
import { t_serviceName_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import pipelineBuilder from "./pipeline.js"
import { ForinovService } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import HA_ForinovServiceLogin, { t_str_login, str_login } from "./human-actions.js"
import { req_login, res_login } from "./routes.input.js"

export class ForinovServiceLogin extends ForinovService<t_str_login> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_forinov , t_str_login > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_forinov>  

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_forinov , t_str_login > = ForinovServiceLogin.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_forinov> = ForinovServiceLogin.databaseLocalAndRemote) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if(ForinovServiceLogin.address === undefined )ForinovServiceLogin.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(ForinovServiceLogin.databaseLocalAndRemote === undefined ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            ForinovServiceLogin.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_ForinovServiceLogin.getDatabaseLocalAndRemote = ()=>ForinovServiceLogin.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_login,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_ForinovServiceLogin.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return ForinovServiceLogin.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return ForinovServiceLogin.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_login,res:res_login )  { /*console.log("DEBUG_ME",getCurrentLine());*/

        return null 
    }

    getServicePipelineFunction(req : req_login,res:res_login )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_arr_fcts = ReturnType< typeof ForinovServiceLogin.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
