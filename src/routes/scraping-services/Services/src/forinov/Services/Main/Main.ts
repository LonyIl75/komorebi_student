import getCurrentLine from "get-current-line"
import { t_serviceName_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import pipelineBuilder from "./pipeline.js"
import { ForinovService } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import HA_ForinovServiceMain ,{ t_str_main, str_main } from "./human-actions.js"
import { req_main, res_main } from "./routes.input.js"

export class ForinovServiceMain extends ForinovService<t_str_main> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_forinov , t_str_main > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_forinov>  

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_forinov , t_str_main > = ForinovServiceMain.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_forinov> = ForinovServiceMain.databaseLocalAndRemote) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if(ForinovServiceMain.address === undefined )ForinovServiceMain.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(ForinovServiceMain.databaseLocalAndRemote === undefined ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            ForinovServiceMain.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_ForinovServiceMain.getDatabaseLocalAndRemote = ()=>ForinovServiceMain.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_main,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_ForinovServiceMain.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return ForinovServiceMain.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return ForinovServiceMain.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_main,res:res_main )  { /*console.log("DEBUG_ME",getCurrentLine());*/

        return null 
    }

    getServicePipelineFunction(req : req_main,res:res_main )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_arr_fcts = ReturnType< typeof ForinovServiceMain.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
