import { AService as BAService,IAService as IBAService,t_st_service_2 as t_ba_st_service_2 , t_st_service_3 as t_ba_st_service_3 , _AService as __AService, str_process,t_service_functions as _t_service_functions, IAService_1 as IBAService_1, IAService_2 as IBAService_2 ,IAService_3 as IBAService_3} from "@/routes/scraping-services/class/Services/AService.js";
import { validateServiceName, validateRemoteAddress, validateRoute } from "@/controller/scraping-services/Services/class/constraints.js";
import { getUnionRouteOfServiceFromServiceName } from "@/controller/scraping-services/Services/Config/types.js";
import { json_scrapingJsonType } from "../Config/main.js";
import { _validateRemoteAddress} from "@/controller/scraping-services/class/constraints.js";
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



export type IAService_1<
SN extends validateServiceName ,_R extends  T1[number] & getUnionRouteOfServiceFromServiceName<SN>, 
R extends validateRemoteAddress<SN> = validateRemoteAddress<SN> ,T1 extends validateRoute<SN>=validateRoute<SN>,
Addr extends t_add_bodyUrl<R,string> = t_add_bodyUrl<R,string>,
TServiceF extends t_service_functions<SN,_R,T1> = t_service_functions<SN,_R,T1>> = IBAService_1< SN,_R,R,T1,Addr,TServiceF> 



export type t_st_service_2<SN extends validateServiceName> = t_ba_st_service_2<SN>


export type IAService_2<
SN extends validateServiceName ,_R extends  T1[number] & getUnionRouteOfServiceFromServiceName<SN>, 
R extends validateRemoteAddress<SN> = validateRemoteAddress<SN> ,T1 extends validateRoute<SN>=validateRoute<SN>,
Addr extends t_add_bodyUrl<R,string> = t_add_bodyUrl<R,string>,
TServiceF extends t_service_functions<SN,_R,T1> = t_service_functions<SN,_R,T1>
> =  IBAService_2< SN,_R,R,T1,Addr,TServiceF> 
 

export type t_st_service_3<SN extends validateServiceName> = t_ba_st_service_3<SN>

export type IAService_3<
SN extends validateServiceName ,_R extends  T1[number] & getUnionRouteOfServiceFromServiceName<SN>,
R extends validateRemoteAddress<SN> = validateRemoteAddress<SN> ,T1 extends validateRoute<SN>=validateRoute<SN>,
Addr extends t_add_bodyUrl<R,string> = t_add_bodyUrl<R,string>,
TServiceF extends t_service_functions<SN,_R,T1> = t_service_functions<SN,_R,T1>
> = IBAService_3< SN,_R,R,T1,Addr,TServiceF> 
 

//TODO :  Addr extends t_add_bodyUrl<RA,string> = t_add_bodyUrl<RA,_R> 
export  abstract class AService<
SN extends validateServiceName ,_R extends  T1[number] & getUnionRouteOfServiceFromServiceName<SN>, 
R extends validateRemoteAddress<SN> = validateRemoteAddress<SN> ,T1 extends validateRoute<SN>=validateRoute<SN>,
Addr extends t_add_bodyUrl<R,string> = t_add_bodyUrl<R,string>,
TServiceF extends t_service_functions<SN,_R,T1> = t_service_functions<SN,_R,T1>
> extends BAService<SN,R,T1,_R,Addr,TServiceF> implements IAService_1<SN,_R,R,T1,Addr,TServiceF> , IBAService< SN,R,T1,_R,Addr,TServiceF>
{
    getJsonScraping() {
        return json_scrapingJsonType[this.getService().serviceName][this.routeName] as any //TODO to fix .//TODO IMP //IMP 
    }
} 

export class _AService<SN extends validateServiceName=  validateServiceName > extends __AService<SN>{}