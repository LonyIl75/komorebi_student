import { t_serviceName_entreprise_, idRoutes_entreprise_,t_idRoute_home_entreprise_, t_idRouteUnion_entreprise_, t_idRoutes_entreprise_,t_idRoute_only_entreprise_, t_remoteAddress_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js";
import { str_login, t_str_login } from "@/controller/scraping-services/class/Config/types.js";
import { t_json_ReqResType_entreprise_,json_ReqResType_entreprise_ } from "@/routes/Router/Services/Config/entreprise_/ConfigReqRes.js";
import { getReqResTypeFromServiceNameAndRoute } from "@/routes/Router/Services/Config/types.js";
import { ServiceReqResType } from "../../class/ConfigNetworkJson.js";

class Entrepise_Routes implements t_json_ReqResType_entreprise_{
    _: getReqResTypeFromServiceNameAndRoute<t_serviceName_entreprise_  ,t_idRoute_home_entreprise_> ;
    [str_login] :  getReqResTypeFromServiceNameAndRoute< t_serviceName_entreprise_  ,t_str_login> ;

    private constructor(){
        ServiceReqResType.construct_configNetworkJson<t_serviceName_entreprise_,t_remoteAddress_entreprise_,  t_idRoutes_entreprise_ , t_json_ReqResType_entreprise_>(this,idRoutes_entreprise_,json_ReqResType_entreprise_)
    }
    //[x: Exclude<string,id_union_entreprise_Routes> ]: [any,any];

    static provider = new Entrepise_Routes();
}


export default Entrepise_Routes;