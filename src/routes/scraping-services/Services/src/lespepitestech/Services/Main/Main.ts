import getCurrentLine from "get-current-line"
import { t_serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import pipelineBuilder from "./pipeline.js"
import { LespepitestechService } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import HA_LespepitestechServiceMain ,{ t_str_main, str_main } from "./human-actions.js"
import { req_main, res_main } from "./routes.input.js"

export class LespepitestechServiceMain extends LespepitestechService<t_str_main> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_lespepitestech , t_str_main > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_lespepitestech>  

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_lespepitestech , t_str_main > = LespepitestechServiceMain.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_lespepitestech> = LespepitestechServiceMain.databaseLocalAndRemote) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if(LespepitestechServiceMain.address === undefined )LespepitestechServiceMain.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(LespepitestechServiceMain.databaseLocalAndRemote === undefined ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            LespepitestechServiceMain.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_LespepitestechServiceMain.getDatabaseLocalAndRemote = ()=>LespepitestechServiceMain.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_main,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_LespepitestechServiceMain.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return LespepitestechServiceMain.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return LespepitestechServiceMain.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_main,res:res_main )  { /*console.log("DEBUG_ME",getCurrentLine());*/

        return null 
    }

    getServicePipelineFunction(req : req_main,res:res_main )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_arr_fcts = ReturnType< typeof LespepitestechServiceMain.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
