import { t_serviceName_lespepitestech, idRoutes_lespepitestech,t_idRoute_home_lespepitestech, t_idRouteUnion_lespepitestech, t_idRoutes_lespepitestech,t_idRoute_only_lespepitestech, t_remoteAddress_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import { str_login, t_str_login } from "@/controller/scraping-services/class/Config/types.js";
import { t_json_ReqResType_lespepitestech,json_ReqResType_lespepitestech } from "@/routes/Router/Services/Config/lespepitestech/ConfigReqRes.js";
import { getReqResTypeFromServiceNameAndRoute } from "@/routes/Router/Services/Config/types.js";
import { str_startupsMtp } from "@/routes/scraping-services/Services/src/lespepitestech/Services/StartupsMtp/human-actions.js";
import { ServiceReqResType } from "../../class/ConfigNetworkJson.js";

class LespepitestechRoutes implements t_json_ReqResType_lespepitestech{
    _: getReqResTypeFromServiceNameAndRoute<t_serviceName_lespepitestech  ,t_idRoute_home_lespepitestech> ;
    [str_login] :  getReqResTypeFromServiceNameAndRoute< t_serviceName_lespepitestech  ,t_str_login> ;
    [str_startupsMtp] : getReqResTypeFromServiceNameAndRoute<t_serviceName_lespepitestech  ,t_idRoute_only_lespepitestech[0]> ;

    private constructor(){
        ServiceReqResType.construct_configNetworkJson<t_serviceName_lespepitestech,t_remoteAddress_lespepitestech,  t_idRoutes_lespepitestech , t_json_ReqResType_lespepitestech>(this,idRoutes_lespepitestech,json_ReqResType_lespepitestech)
    }
    //[x: Exclude<string,id_union_lespepitestechRoutes> ]: [any,any];

    static provider = new LespepitestechRoutes();
}


export default LespepitestechRoutes;