import { t_idRouteUnion_booksToscrape, t_serviceName_booksToscrape, serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js"
import { base_id_serviceRoutes } from "@/controller/scraping-services/class/Config/types.js"
import { AService, IAService_2, _AService , IAService_3 as IBAService_3, t_st_service_2 } from "../../../class/AService.js"
import { t_verifyStatic } from "@shared/type.js"

export abstract class _st_BooksToscrapeService<R extends t_idRouteUnion_booksToscrape> extends AService<t_serviceName_booksToscrape ,R>  {
    static service :_AService<t_serviceName_booksToscrape> = new _AService<t_serviceName_booksToscrape>(serviceName_booksToscrape)
    //static _database = new DatabaseMongo.cst_and_connect(undefined , undefined ,getClusterKOB(),_getGibert22DatabaseName() )

}

type IStBooksToscrapeService = t_verifyStatic<typeof _st_BooksToscrapeService ,t_st_service_2<t_serviceName_booksToscrape>,true> 

const _BooksToscrapeService = _st_BooksToscrapeService as {
    new <R extends t_idRouteUnion_booksToscrape>(...args:ConstructorParameters<typeof AService<t_serviceName_booksToscrape,R>>): AService<t_serviceName_booksToscrape,R>
} & IStBooksToscrapeService

export type IAService_3<R extends t_idRouteUnion_booksToscrape > = IBAService_3<t_serviceName_booksToscrape,R> 
export abstract class BooksToscrapeService<R extends t_idRouteUnion_booksToscrape> extends _BooksToscrapeService<R> implements IAService_2<t_serviceName_booksToscrape,R>{
   
    getService() {
        return BooksToscrapeService.service
    }

}

export abstract class BaseBooksToscrapeService < R extends base_id_serviceRoutes> extends BooksToscrapeService<R>{}