import { t_serviceName_societeTech, idRoutes_societeTech,t_idRoute_home_societeTech, t_idRouteUnion_societeTech, t_idRoutes_societeTech,t_idRoute_only_societeTech, t_remoteAddress_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js";
import { str_login, t_str_login } from "@/controller/scraping-services/class/Config/types.js";
import { t_json_ReqResType_societeTech,json_ReqResType_societeTech } from "@/routes/Router/Services/Config/societeTech/ConfigReqRes.js";
import { getReqResTypeFromServiceNameAndRoute } from "@/routes/Router/Services/Config/types.js";
import { str_startupsMtp } from "@/routes/scraping-services/Services/src/societeTech/Services/StartupsMtp/human-actions.js";
import { ServiceReqResType } from "../../class/ConfigNetworkJson.js";
import { str_startupMtp } from "@/routes/scraping-services/Services/src/societeTech/Services/StartupMtp/human-actions.js";

class SocieteTechRoutes implements t_json_ReqResType_societeTech{
    _: getReqResTypeFromServiceNameAndRoute<t_serviceName_societeTech  ,t_idRoute_home_societeTech> ;
    [str_login] :  getReqResTypeFromServiceNameAndRoute< t_serviceName_societeTech  ,t_str_login> ;
    [str_startupsMtp] : getReqResTypeFromServiceNameAndRoute<t_serviceName_societeTech  ,t_idRoute_only_societeTech[0]> ;
    [str_startupMtp] : getReqResTypeFromServiceNameAndRoute<t_serviceName_societeTech  ,t_idRoute_only_societeTech[1]> ;

    private constructor(){
        ServiceReqResType.construct_configNetworkJson<t_serviceName_societeTech,t_remoteAddress_societeTech,  t_idRoutes_societeTech , t_json_ReqResType_societeTech>(this,idRoutes_societeTech,json_ReqResType_societeTech)
    }
    //[x: Exclude<string,id_union_societeTechRoutes> ]: [any,any];

    static provider = new SocieteTechRoutes();
}


export default SocieteTechRoutes;