import { validateServiceName, validateRemoteAddress, validateIdHome, validateRoute, FnValidateRouteAndAddress, _C_RA, FnValidateServiceName, _C_SN, _fnValidateServiceName, t_args_validateServiceName } from "@/controller/scraping-services/Services/class/constraints.js";
import { str_doService, str_config, str_routes } from "../../class/Services/ScrapingService.js";
import {ScrapingService as _ScrapingService } from "@/routes/scraping-services/class/Services/ScrapingService.js";
import { getPropsFromServiceName_doService } from "@/controller/scraping-services/Services/src/types.js";
import { getPropsFromServiceName_ConfigService, getPropsFromServiceName_ServiceRoutes } from "@/controller/scraping-services/Services/Config/types.js";

export interface t_body_scrapingService <SN extends validateServiceName> { 
    [str_doService] : getPropsFromServiceName_doService<SN>;
    [str_config] : getPropsFromServiceName_ConfigService<SN>;
    [str_routes] : getPropsFromServiceName_ServiceRoutes<SN>
  }
  

  export type t_ScrapingServices<SN extends validateServiceName ,R extends validateRemoteAddress<SN> , H extends validateIdHome<SN> , T1 extends validateRoute<SN> >  = t_body_scrapingService <SN> 
  

  export class ScrapingService < SN extends validateServiceName ,R extends validateRemoteAddress<SN> , H extends validateIdHome<SN>, T1 extends validateRoute<SN>,RA extends _C_RA<FnValidateRouteAndAddress, _fnValidateServiceName<t_args_validateServiceName> & [SN, R, T1]>   > extends _ScrapingService<SN,R,H,T1,RA> {}