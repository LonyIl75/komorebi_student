import { t_serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import HA_PourdebonServiceBouchers , { t_str_bouchers, str_bouchers } from "./human-actions.js"
import pipelineBuilder from "./pipeline.js"
import { req_bouchers, res_bouchers } from "./routes.input.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import { PourdebonService } from "../../class/AService.js"

export class PourdebonServiceBouchers extends PourdebonService<t_str_bouchers> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_pourdebon , t_str_bouchers > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_pourdebon> 

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_pourdebon , t_str_bouchers > = PourdebonServiceBouchers.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_pourdebon> = PourdebonServiceBouchers.databaseLocalAndRemote) {
        if(PourdebonServiceBouchers.address === undefined )PourdebonServiceBouchers.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(PourdebonServiceBouchers.databaseLocalAndRemote === undefined ){
            PourdebonServiceBouchers.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_PourdebonServiceBouchers.getDatabaseLocalAndRemote = ()=>PourdebonServiceBouchers.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")
        super(str_bouchers,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_PourdebonServiceBouchers.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return PourdebonServiceBouchers.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return PourdebonServiceBouchers.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_bouchers,res:res_bouchers )  {

        return null 
    }

    getServicePipelineFunction(req : req_bouchers,res:res_bouchers )  {
        type t_arr_fcts = ReturnType< typeof PourdebonServiceBouchers.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
