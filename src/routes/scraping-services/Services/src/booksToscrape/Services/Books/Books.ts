import { t_serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import HA_BooksToscrapeServiceBooks , { t_str_books, str_books } from "./human-actions.js"
import pipelineBuilder from "./pipeline.js"
import { req_books, res_books } from "./routes.input.js"
import { BooksToscrapeService } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"

export class BooksToscrapeServiceBooks extends BooksToscrapeService<t_str_books> {

    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_booksToscrape , t_str_books > = undefined 

    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_booksToscrape>  

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_booksToscrape , t_str_books > = BooksToscrapeServiceBooks.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_booksToscrape>  = BooksToscrapeServiceBooks.databaseLocalAndRemote) {
        if(BooksToscrapeServiceBooks.address === undefined )BooksToscrapeServiceBooks.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(BooksToscrapeServiceBooks.databaseLocalAndRemote === undefined ){
            BooksToscrapeServiceBooks.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_BooksToscrapeServiceBooks.getDatabaseLocalAndRemote = ()=>BooksToscrapeServiceBooks.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_books,_address,_databaseLocalAndRemote);
    }
    static arrPipelineFct = [...HA_BooksToscrapeServiceBooks.namesOfPipelineFunction()] as const

    static getNamesOfPipelineFunction() {
        return BooksToscrapeServiceBooks.arrPipelineFct
    }

    getNamesOfPipelineFunction() {
        return BooksToscrapeServiceBooks.getNamesOfPipelineFunction()
    }

    getLocalPipelineFunction(req : req_books,res:res_books )  {

        return null 
    }

    getServicePipelineFunction(req : req_books,res:res_books )  {
        type t_arr_fcts = ReturnType< typeof BooksToscrapeServiceBooks.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }




}
