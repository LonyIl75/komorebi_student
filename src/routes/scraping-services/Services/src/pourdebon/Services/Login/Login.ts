import { t_serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import pipelineBuilder from "./pipeline.js"
import { PourdebonService } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import { t_str_login, str_login } from "@/controller/scraping-services/class/Config/types.js"
import HA_PourdebonServiceLogin from "./human-actions.js"
import { req_login, res_login } from "./routes.input.js"

export class PourdebonServiceLogin extends PourdebonService<t_str_login> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_pourdebon , t_str_login > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_pourdebon>  

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_pourdebon , t_str_login > = PourdebonServiceLogin.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_pourdebon> = PourdebonServiceLogin.databaseLocalAndRemote) {
        if(PourdebonServiceLogin.address === undefined )PourdebonServiceLogin.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(PourdebonServiceLogin.databaseLocalAndRemote === undefined ){
            PourdebonServiceLogin.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_PourdebonServiceLogin.getDatabaseLocalAndRemote = ()=>PourdebonServiceLogin.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_login,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_PourdebonServiceLogin.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return PourdebonServiceLogin.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return PourdebonServiceLogin.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_login,res:res_login )  {

        return null 
    }

    getServicePipelineFunction(req : req_login,res:res_login )  {
        type t_arr_fcts = ReturnType< typeof PourdebonServiceLogin.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
