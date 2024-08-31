import { t_idRouteUnion_forinov, t_serviceName_forinov, serviceName_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js"
import { base_id_serviceRoutes } from "@/controller/scraping-services/class/Config/types.js"
import { AService, IAService_2, _AService , IAService_3 as IBAService_3, t_st_service_2 } from "../../../class/AService.js"
import { t_verifyStatic } from "@shared/type.js"

export abstract class _st_ForinovService<R extends t_idRouteUnion_forinov> extends AService<t_serviceName_forinov ,R>  {
    static service :_AService<t_serviceName_forinov> = new _AService<t_serviceName_forinov>(serviceName_forinov)
    //static _database = new DatabaseMongo.cst_and_connect(undefined , undefined ,getClusterKOB(),_getGibert22DatabaseName() )

}

type IStForinovService = t_verifyStatic<typeof _st_ForinovService ,t_st_service_2<t_serviceName_forinov>,true> 

const _ForinovService = _st_ForinovService as {
    new <R extends t_idRouteUnion_forinov>(...args:ConstructorParameters<typeof AService<t_serviceName_forinov,R>>): AService<t_serviceName_forinov,R>
} & IStForinovService

export type IAService_3<R extends t_idRouteUnion_forinov > = IBAService_3<t_serviceName_forinov,R> 
export abstract class ForinovService<R extends t_idRouteUnion_forinov> extends _ForinovService<R> implements IAService_2<t_serviceName_forinov,R>{
   
    getService() {
        return ForinovService.service
    }

}

export abstract class BaseForinovService < R extends base_id_serviceRoutes> extends ForinovService<R>{}