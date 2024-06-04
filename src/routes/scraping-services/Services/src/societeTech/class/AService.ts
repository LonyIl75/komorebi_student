import { t_idRouteUnion_societeTech, t_serviceName_societeTech, serviceName_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js"
import { base_id_serviceRoutes } from "@/controller/scraping-services/class/Config/types.js"
import { AService, IAService_2, _AService , IAService_3 as IBAService_3, t_st_service_2 } from "../../../class/AService.js"
import { t_verifyStatic } from "@shared/type.js"

export abstract class _st_SocieteTechService<R extends t_idRouteUnion_societeTech> extends AService<t_serviceName_societeTech ,R>  {
    static service :_AService<t_serviceName_societeTech> = new _AService<t_serviceName_societeTech>(serviceName_societeTech)
    //static _database = new DatabaseMongo.cst_and_connect(undefined , undefined ,getClusterKOB(),_getGibert22DatabaseName() )

}

type IStSocieteTechService = t_verifyStatic<typeof _st_SocieteTechService ,t_st_service_2<t_serviceName_societeTech>,true> 

const _SocieteTechService = _st_SocieteTechService as {
    new <R extends t_idRouteUnion_societeTech>(...args:ConstructorParameters<typeof AService<t_serviceName_societeTech,R>>): AService<t_serviceName_societeTech,R>
} & IStSocieteTechService

export type IAService_3<R extends t_idRouteUnion_societeTech > = IBAService_3<t_serviceName_societeTech,R> 
export abstract class SocieteTechService<R extends t_idRouteUnion_societeTech> extends _SocieteTechService<R> implements IAService_2<t_serviceName_societeTech,R>{
   
    getService() {
        return SocieteTechService.service
    }

}

export abstract class BaseSocieteTechService < R extends base_id_serviceRoutes> extends SocieteTechService<R>{}