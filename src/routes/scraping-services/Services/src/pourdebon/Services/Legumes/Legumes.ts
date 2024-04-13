import { t_serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import HA_PourdebonServiceLegumes , { t_str_legumes, str_legumes } from "./human-actions.js"
import pipelineBuilder from "./pipeline.js"
import { req_legumes, res_legumes } from "./routes.input.js"
import { PourdebonService } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"

export class PourdebonServiceLegumes extends PourdebonService<t_str_legumes> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_pourdebon , t_str_legumes > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_pourdebon>  

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_pourdebon , t_str_legumes > = PourdebonServiceLegumes.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_pourdebon>  = PourdebonServiceLegumes.databaseLocalAndRemote) {
        if(PourdebonServiceLegumes.address === undefined )PourdebonServiceLegumes.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(PourdebonServiceLegumes.databaseLocalAndRemote === undefined ){
            PourdebonServiceLegumes.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_PourdebonServiceLegumes.getDatabaseLocalAndRemote = ()=>PourdebonServiceLegumes.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_legumes,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_PourdebonServiceLegumes.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return PourdebonServiceLegumes.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return PourdebonServiceLegumes.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_legumes,res:res_legumes )  {

        return null 
    }

    getServicePipelineFunction(req : req_legumes,res:res_legumes )  {
        type t_arr_fcts = ReturnType< typeof PourdebonServiceLegumes.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
