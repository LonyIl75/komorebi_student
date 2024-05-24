import getCurrentLine from "get-current-line"
import { IJson_ServiceConfig } from "@/controller/scraping-services/class/Config/IJson_ServiceConfig.js";
import { t_doServiceFunction } from "@/controller/scraping-services/class/Services/MainService.js";
import { _C_RA, _fnValidateServiceName, _validateIdHome, _validateRemoteAddress, _validateRoute, _validateServiceName, t_args_validateServiceName, FnValidateRouteAndAddress } from "@/controller/scraping-services/class/constraints.js";


export const str_doService = "doService" as const ;
export type t_str_doService = typeof str_doService ;
export const str_config = "config" as const ;
export type t_str_config = typeof str_config ;
export const str_routes = "routes" as const ;
export type t_str_routes = typeof str_routes ;


  export interface t_body_scrapingService <SN extends _validateServiceName ,R extends _validateRemoteAddress<SN> , H extends _validateIdHome<SN> , T1 extends _validateRoute<SN> ,RA extends _C_RA<FnValidateRouteAndAddress, _fnValidateServiceName<t_args_validateServiceName> & [SN, R, T1]>  > { 
    [str_doService] : t_doServiceFunction<SN,R,H,T1>;
    [str_config] : IJson_ServiceConfig<SN,R,H,T1,RA>;
    [str_routes] : any //t_ConfigNetworkJson<T1>
  }
  

  export type t_ScrapingServices<SN extends _validateServiceName ,R extends _validateRemoteAddress<SN> , H extends _validateIdHome<SN> , T1 extends _validateRoute<SN>,RA extends _C_RA<FnValidateRouteAndAddress, _fnValidateServiceName<t_args_validateServiceName> & [SN, R, T1]>>  = t_body_scrapingService <SN,R,H,T1,RA> 
  

  export class ScrapingService < SN extends _validateServiceName ,R extends _validateRemoteAddress<SN> , H extends _validateIdHome<SN>, T1 extends _validateRoute<SN>,RA extends _C_RA<FnValidateRouteAndAddress, _fnValidateServiceName<t_args_validateServiceName> & [SN, R, T1]> >{

    scrapingService : t_ScrapingServices<SN,R,H,T1,RA> ; 

    constructor(_scrapingService :  t_ScrapingServices<SN,R,H,T1,RA> ){ 
        this.scrapingService =_scrapingService
    }

    getScrapingServiceFromScrapingServiceNam(){
          return this.scrapingService ;
    }

    getConfigFromScrapingService(){
      return this.scrapingService[str_config]  ; 
    }
    
    getDoServiceFromScrapingService(){
        return this.scrapingService[str_doService] 
    }

  }
    