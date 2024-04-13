import { t_idRouteUnion_pourdebon, t_serviceName_pourdebon, serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js"
import { base_id_serviceRoutes } from "@/controller/scraping-services/class/Config/types.js"
import { AService, _AService } from "../../../class/AService.js"


export abstract class PourdebonService<R extends t_idRouteUnion_pourdebon> extends AService<t_serviceName_pourdebon ,R> {
    static service :_AService<t_serviceName_pourdebon> = new _AService<t_serviceName_pourdebon>(serviceName_pourdebon)
    //static _database = new DatabaseMongo.cst_and_connect(undefined , undefined ,getClusterKOB(),_getGibert22DatabaseName() )

    getService() {
        return PourdebonService.service
    }

}

export abstract class BasePourdebonService < R extends base_id_serviceRoutes> extends PourdebonService<R>{}