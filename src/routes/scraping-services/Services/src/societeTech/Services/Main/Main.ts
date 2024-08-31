import getCurrentLine from "get-current-line"
import { t_serviceName_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import pipelineBuilder from "./pipeline.js"
import { SocieteTechService } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import HA_SocieteTechServiceMain ,{ t_str_main, str_main } from "./human-actions.js"
import { req_main, res_main } from "./routes.input.js"

export class SocieteTechServiceMain extends SocieteTechService<t_str_main> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_societeTech , t_str_main > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_societeTech>  

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_societeTech , t_str_main > = SocieteTechServiceMain.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_societeTech> = SocieteTechServiceMain.databaseLocalAndRemote) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if(SocieteTechServiceMain.address === undefined )SocieteTechServiceMain.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(SocieteTechServiceMain.databaseLocalAndRemote === undefined ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            SocieteTechServiceMain.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_SocieteTechServiceMain.getDatabaseLocalAndRemote = ()=>SocieteTechServiceMain.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_main,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_SocieteTechServiceMain.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return SocieteTechServiceMain.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return SocieteTechServiceMain.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_main,res:res_main )  { /*console.log("DEBUG_ME",getCurrentLine());*/

        return null 
    }

    getServicePipelineFunction(req : req_main,res:res_main )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_arr_fcts = ReturnType< typeof SocieteTechServiceMain.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
