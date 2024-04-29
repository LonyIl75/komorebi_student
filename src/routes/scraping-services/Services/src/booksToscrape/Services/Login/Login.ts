import { t_serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import pipelineBuilder from "./pipeline.js"
import { BooksToscrapeService } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import HA_BooksToscrapeServiceLogin, { t_str_login, str_login } from "./human-actions.js"
import { req_login, res_login } from "./routes.input.js"

export class BooksToscrapeServiceLogin extends BooksToscrapeService<t_str_login> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_booksToscrape , t_str_login > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_booksToscrape>  

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_booksToscrape , t_str_login > = BooksToscrapeServiceLogin.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_booksToscrape> = BooksToscrapeServiceLogin.databaseLocalAndRemote) {
        if(BooksToscrapeServiceLogin.address === undefined )BooksToscrapeServiceLogin.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(BooksToscrapeServiceLogin.databaseLocalAndRemote === undefined ){
            BooksToscrapeServiceLogin.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_BooksToscrapeServiceLogin.getDatabaseLocalAndRemote = ()=>BooksToscrapeServiceLogin.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_login,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_BooksToscrapeServiceLogin.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return BooksToscrapeServiceLogin.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return BooksToscrapeServiceLogin.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_login,res:res_login )  {

        return null 
    }

    getServicePipelineFunction(req : req_login,res:res_login )  {
        type t_arr_fcts = ReturnType< typeof BooksToscrapeServiceLogin.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
