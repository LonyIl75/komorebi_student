import { t_idRouteUnion_booksToscrape, t_serviceName_booksToscrape, serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js"
import { base_id_serviceRoutes } from "@/controller/scraping-services/class/Config/types.js"
import { AService, _AService } from "../../../class/AService.js"


export abstract class BooksToscrapeService<R extends t_idRouteUnion_booksToscrape> extends AService<t_serviceName_booksToscrape ,R> {
    static service :_AService<t_serviceName_booksToscrape> = new _AService<t_serviceName_booksToscrape>(serviceName_booksToscrape)
    //static _database = new DatabaseMongo.cst_and_connect(undefined , undefined ,getClusterKOB(),_getGibert22DatabaseName() )

    getService() {
        return BooksToscrapeService.service
    }

}

export abstract class BaseBooksToscrapeService < R extends base_id_serviceRoutes> extends BooksToscrapeService<R>{}