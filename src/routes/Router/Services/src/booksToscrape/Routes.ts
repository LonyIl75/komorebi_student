import { t_serviceName_booksToscrape, idRoutes_booksToscrape,t_idRoute_home_booksToscrape, t_idRouteUnion_booksToscrape, t_idRoutes_booksToscrape,t_idRoute_only_booksToscrape, t_remoteAddress_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js";
import { str_login, t_str_login } from "@/controller/scraping-services/class/Config/types.js";
import { t_json_ReqResType_booksToscrape,json_ReqResType_booksToscrape } from "@/routes/Router/Services/Config/booksToscrape/ConfigReqRes.js";
import { getReqResTypeFromServiceNameAndRoute } from "@/routes/Router/Services/Config/types.js";
import { str_books } from "@/routes/scraping-services/Services/src/booksToscrape/Services/Books/human-actions.js";
import { ServiceReqResType } from "../../class/ConfigNetworkJson.js";

class BooksToscrapeRoutes implements t_json_ReqResType_booksToscrape{
    _: getReqResTypeFromServiceNameAndRoute<t_serviceName_booksToscrape  ,t_idRoute_home_booksToscrape> ;
    [str_login] :  getReqResTypeFromServiceNameAndRoute< t_serviceName_booksToscrape  ,t_str_login> ;
    [str_books] : getReqResTypeFromServiceNameAndRoute<t_serviceName_booksToscrape  ,t_idRoute_only_booksToscrape[0]> ;

    private constructor(){
        ServiceReqResType.construct_configNetworkJson<t_serviceName_booksToscrape,t_remoteAddress_booksToscrape,  t_idRoutes_booksToscrape , t_json_ReqResType_booksToscrape>(this,idRoutes_booksToscrape,json_ReqResType_booksToscrape)
    }
    //[x: Exclude<string,id_union_booksToscrapeRoutes> ]: [any,any];

    static provider = new BooksToscrapeRoutes();
}


export default BooksToscrapeRoutes;