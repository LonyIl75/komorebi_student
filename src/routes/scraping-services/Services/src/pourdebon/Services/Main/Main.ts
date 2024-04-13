import { t_serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import pipelineBuilder from "./pipeline.js"
import { PourdebonService } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import { t_str_main, str_main } from "./human-actions.js"
import HA_PourdebonServiceMain from "./human-actions.js"
import { req_main, res_main } from "./routes.input.js"

export class PourdebonServiceMain extends PourdebonService<t_str_main> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_pourdebon , t_str_main > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_pourdebon>  

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_pourdebon , t_str_main > = PourdebonServiceMain.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_pourdebon> = PourdebonServiceMain.databaseLocalAndRemote) {
        if(PourdebonServiceMain.address === undefined )PourdebonServiceMain.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(PourdebonServiceMain.databaseLocalAndRemote === undefined ){
            PourdebonServiceMain.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_PourdebonServiceMain.getDatabaseLocalAndRemote = ()=>PourdebonServiceMain.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_main,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_PourdebonServiceMain.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return PourdebonServiceMain.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return PourdebonServiceMain.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_main,res:res_main )  {

        return null 
    }

    getServicePipelineFunction(req : req_main,res:res_main )  {
        type t_arr_fcts = ReturnType< typeof PourdebonServiceMain.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
