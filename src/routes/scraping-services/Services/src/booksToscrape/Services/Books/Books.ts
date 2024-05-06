import { t_serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import HA_BooksToscrapeServiceBooks , { t_str_books, str_books } from "./human-actions.js"
import pipelineBuilder from "./pipeline.js"
import { req_books, res_books } from "./routes.input.js"
import { BooksToscrapeService, IAService_3 } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import {  t_verifyStatic } from "@shared/type.js"
import { t_st_service_3 } from "@/routes/scraping-services/Services/class/AService.js"
import { t_st_AService } from "@/routes/scraping-services/class/Services/AService.js"


export abstract class _st_BooksToscrapeServiceBooks extends BooksToscrapeService<t_str_books> {
    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_booksToscrape , t_str_books > = undefined 
    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_booksToscrape>  
}


type IStBooksToscrapeServiceBooks = t_verifyStatic<typeof _st_BooksToscrapeServiceBooks ,t_st_service_3<t_serviceName_booksToscrape>,true> 
& t_verifyStatic<typeof _st_BooksToscrapeServiceBooks ,t_st_AService<t_serviceName_booksToscrape>,true>  

const _BooksToscrapeServiceBooks = _st_BooksToscrapeServiceBooks as {
    new (...args:ConstructorParameters<typeof BooksToscrapeService<t_str_books>>): BooksToscrapeService<t_str_books>
} & IStBooksToscrapeServiceBooks


export class BooksToscrapeServiceBooks extends _BooksToscrapeServiceBooks implements IAService_3<t_str_books> {

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

    getNamesOfPipelineFunction() {
        return [...HA_BooksToscrapeServiceBooks.namesOfPipelineFunction()] as const
    }

    getLocalPipelineFunction(req : req_books,res:res_books )  {
        return null 
    }

    getServicePipelineFunction(req : req_books,res:res_books )  {
        type t_arr_fcts = ReturnType< typeof this.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }

}
