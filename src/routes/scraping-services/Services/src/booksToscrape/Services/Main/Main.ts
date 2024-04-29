import { t_serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import pipelineBuilder from "./pipeline.js"
import { BooksToscrapeService } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import HA_BooksToscrapeServiceMain ,{ t_str_main, str_main } from "./human-actions.js"
import { req_main, res_main } from "./routes.input.js"

export class BooksToscrapeServiceMain extends BooksToscrapeService<t_str_main> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_booksToscrape , t_str_main > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_booksToscrape>  

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_booksToscrape , t_str_main > = BooksToscrapeServiceMain.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_booksToscrape> = BooksToscrapeServiceMain.databaseLocalAndRemote) {
        if(BooksToscrapeServiceMain.address === undefined )BooksToscrapeServiceMain.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(BooksToscrapeServiceMain.databaseLocalAndRemote === undefined ){
            BooksToscrapeServiceMain.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_BooksToscrapeServiceMain.getDatabaseLocalAndRemote = ()=>BooksToscrapeServiceMain.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_main,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_BooksToscrapeServiceMain.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return BooksToscrapeServiceMain.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return BooksToscrapeServiceMain.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_main,res:res_main )  {

        return null 
    }

    getServicePipelineFunction(req : req_main,res:res_main )  {
        type t_arr_fcts = ReturnType< typeof BooksToscrapeServiceMain.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
