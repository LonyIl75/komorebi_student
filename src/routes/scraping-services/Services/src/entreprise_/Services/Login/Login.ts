import getCurrentLine from "get-current-line"
import { t_serviceName_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import pipelineBuilder from "./pipeline.js"
import { Entreprise_Service } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import HA_Entreprise_ServiceLogin, { t_str_login, str_login } from "./human-actions.js"
import { req_login, res_login } from "./routes.input.js"

export class Entreprise_ServiceLogin extends Entreprise_Service<t_str_login> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_entreprise_ , t_str_login > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_entreprise_>  

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_entreprise_ , t_str_login > = Entreprise_ServiceLogin.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_entreprise_> = Entreprise_ServiceLogin.databaseLocalAndRemote) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if(Entreprise_ServiceLogin.address === undefined )Entreprise_ServiceLogin.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(Entreprise_ServiceLogin.databaseLocalAndRemote === undefined ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            Entreprise_ServiceLogin.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_Entreprise_ServiceLogin.getDatabaseLocalAndRemote = ()=>Entreprise_ServiceLogin.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_login,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_Entreprise_ServiceLogin.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return Entreprise_ServiceLogin.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return Entreprise_ServiceLogin.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_login,res:res_login )  { /*console.log("DEBUG_ME",getCurrentLine());*/

        return null 
    }

    getServicePipelineFunction(req : req_login,res:res_login )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_arr_fcts = ReturnType< typeof Entreprise_ServiceLogin.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
