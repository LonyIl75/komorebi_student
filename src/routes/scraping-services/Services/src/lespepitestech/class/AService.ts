import { t_idRouteUnion_lespepitestech, t_serviceName_lespepitestech, serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js"
import { base_id_serviceRoutes } from "@/controller/scraping-services/class/Config/types.js"
import { AService, IAService_2, _AService , IAService_3 as IBAService_3, t_st_service_2 } from "../../../class/AService.js"
import { t_verifyStatic } from "@shared/type.js"

export abstract class _st_LespepitestechService<R extends t_idRouteUnion_lespepitestech> extends AService<t_serviceName_lespepitestech ,R>  {
    static service :_AService<t_serviceName_lespepitestech> = new _AService<t_serviceName_lespepitestech>(serviceName_lespepitestech)
    //static _database = new DatabaseMongo.cst_and_connect(undefined , undefined ,getClusterKOB(),_getGibert22DatabaseName() )

}

type IStLespepitestechService = t_verifyStatic<typeof _st_LespepitestechService ,t_st_service_2<t_serviceName_lespepitestech>,true> 

const _LespepitestechService = _st_LespepitestechService as {
    new <R extends t_idRouteUnion_lespepitestech>(...args:ConstructorParameters<typeof AService<t_serviceName_lespepitestech,R>>): AService<t_serviceName_lespepitestech,R>
} & IStLespepitestechService

export type IAService_3<R extends t_idRouteUnion_lespepitestech > = IBAService_3<t_serviceName_lespepitestech,R> 
export abstract class LespepitestechService<R extends t_idRouteUnion_lespepitestech> extends _LespepitestechService<R> implements IAService_2<t_serviceName_lespepitestech,R>{
   
    getService() {
        return LespepitestechService.service
    }

}

export abstract class BaseLespepitestechService < R extends base_id_serviceRoutes> extends LespepitestechService<R>{}