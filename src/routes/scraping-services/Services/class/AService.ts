import { AService as BAService, _AService as __AService, str_process,t_service_functions as _t_service_functions} from "@/routes/scraping-services/class/Services/AService.js";
import { validateServiceName, validateRemoteAddress, validateRoute } from "@/controller/scraping-services/Services/class/constraints.js";
import { getUnionRouteOfServiceFromServiceName } from "@/controller/scraping-services/Services/Config/types.js";
import { json_scrapingJsonType } from "../Config/main.js";
import { _validateRemoteAddress } from "@/controller/scraping-services/class/constraints.js";
import { t_routeHandler } from "./ServiceRouter.js";
import { t_any_routeHandler} from "../../class/Services/ServiceRouter.js";
import { extJsonWithJson } from "@shared/type.js";
import { t_add_bodyUrl } from "@shared/validate-url/_types.js";


type t_service_functions_<SN extends validateServiceName ,_R extends T1[number] & getUnionRouteOfServiceFromServiceName<SN> ,
 T1 extends validateRoute<SN> = validateRoute<SN> >  = 
{[str_process] : t_routeHandler<SN,_R,T1> ;}&{[key in string ] : t_any_routeHandler ;} 


export type t_service_functions<SN extends validateServiceName ,_R extends T1[number] & getUnionRouteOfServiceFromServiceName<SN> ,
 T1 extends validateRoute<SN> = validateRoute<SN> >  = 
extJsonWithJson<t_service_functions_<SN,_R,T1> ,_t_service_functions<SN,_R,T1>>

//TODO :  Addr extends t_add_bodyUrl<RA,string> = t_add_bodyUrl<RA,_R> 
export  abstract class AService<
SN extends validateServiceName ,_R extends  T1[number] & getUnionRouteOfServiceFromServiceName<SN>, 
R extends validateRemoteAddress<SN> = validateRemoteAddress<SN> ,T1 extends validateRoute<SN>=validateRoute<SN>,
Addr extends t_add_bodyUrl<R,string> = t_add_bodyUrl<R,string>,
TServiceF extends t_service_functions<SN,_R,T1> = t_service_functions<SN,_R,T1>
> extends BAService<SN,R,T1,_R,Addr,TServiceF> 
{
    getJsonScraping() {
        return json_scrapingJsonType[this.getService().serviceName][this.str_route]
    }
} 

export class _AService<SN extends validateServiceName=  validateServiceName > extends __AService<SN>{}