import { t_idRouteUnion_entreprise_, t_serviceName_entreprise_, serviceName_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js"
import { base_id_serviceRoutes } from "@/controller/scraping-services/class/Config/types.js"
import { AService, IAService_2, _AService , IAService_3 as IBAService_3, t_st_service_2 } from "../../../class/AService.js"
import { t_verifyStatic } from "@shared/type.js"

export abstract class _st_Entreprise_Service<R extends t_idRouteUnion_entreprise_> extends AService<t_serviceName_entreprise_ ,R>  {
    static service :_AService<t_serviceName_entreprise_> = new _AService<t_serviceName_entreprise_>(serviceName_entreprise_)
    //static _database = new DatabaseMongo.cst_and_connect(undefined , undefined ,getClusterKOB(),_getGibert22DatabaseName() )

}

type IStEntreprise_Service = t_verifyStatic<typeof _st_Entreprise_Service ,t_st_service_2<t_serviceName_entreprise_>,true> 

const _Entreprise_Service = _st_Entreprise_Service as {
    new <R extends t_idRouteUnion_entreprise_>(...args:ConstructorParameters<typeof AService<t_serviceName_entreprise_,R>>): AService<t_serviceName_entreprise_,R>
} & IStEntreprise_Service

export type IAService_3<R extends t_idRouteUnion_entreprise_ > = IBAService_3<t_serviceName_entreprise_,R> 
export abstract class Entreprise_Service<R extends t_idRouteUnion_entreprise_> extends _Entreprise_Service<R> implements IAService_2<t_serviceName_entreprise_,R>{
   
    getService() {
        return Entreprise_Service.service
    }

}

export abstract class BaseEntreprise_Service < R extends base_id_serviceRoutes> extends Entreprise_Service<R>{}