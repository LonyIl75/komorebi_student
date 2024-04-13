import { t_serviceName_pourdebon, idRoutes_pourdebon,t_idRoute_home_pourdebon, t_idRouteUnion_pourdebon, t_idRoutes_pourdebon,t_idRoute_only_pourdebon, t_remoteAddress_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js";
import { str_login, t_str_login } from "@/controller/scraping-services/class/Config/types.js";
import { t_json_ReqResType_pourdebon,json_ReqResType_pourdebon } from "@/routes/Router/Services/Config/pourdebon/ConfigReqRes.js";
import { getReqResTypeFromServiceNameAndRoute } from "@/routes/Router/Services/Config/types.js";
import { str_bouchers } from "@/routes/scraping-services/Services/src/pourdebon/Services/Bouchers/human-actions.js";
import { str_legumes } from "@/routes/scraping-services/Services/src/pourdebon/Services/Legumes/human-actions.js";
import { ServiceReqResType } from "../../class/ConfigNetworkJson.js";

class PourdebonRoutes implements t_json_ReqResType_pourdebon{
    _: getReqResTypeFromServiceNameAndRoute<t_serviceName_pourdebon  ,t_idRoute_home_pourdebon> ;
    [str_login] :  getReqResTypeFromServiceNameAndRoute< t_serviceName_pourdebon  ,t_str_login> ;
    [str_legumes] : getReqResTypeFromServiceNameAndRoute<t_serviceName_pourdebon  ,t_idRoute_only_pourdebon[0]> ;
    [str_bouchers] : getReqResTypeFromServiceNameAndRoute<t_serviceName_pourdebon  ,t_idRoute_only_pourdebon[1]> ;
        
    private constructor(){
        ServiceReqResType.construct_configNetworkJson<t_serviceName_pourdebon,t_remoteAddress_pourdebon,  t_idRoutes_pourdebon , t_json_ReqResType_pourdebon>(this,idRoutes_pourdebon,json_ReqResType_pourdebon)
    }
    //[x: Exclude<string,id_union_pourdebonRoutes> ]: [any,any];

    static df = new PourdebonRoutes();
}


export default PourdebonRoutes;
