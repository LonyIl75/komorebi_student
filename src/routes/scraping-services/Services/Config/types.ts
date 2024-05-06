import { getUnionRouteOfServiceFromServiceName, t_serviceName_MainService } from "@/controller/scraping-services/Services/Config/types.js";
import { t_FunctionalWrapperJsonComponentConfig_any, t_key_FunctionalWrapperJsonComponentConfig } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/IFunctionalWrapperJsonComponents.js";
import { t_ScrapingComponent_any } from "@/utils/scraping/PageParsing/ComponentObject.js";
import { t_FunctionalWrapperJsonComponent_any  } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/FunctionalWrapperJsonComponents.js";
import { getConfig, t_IFunctionalWrapperIJson_getConfig } from "@shared/m_json.js";
import { json_scrapingJsonType } from "./main.js";


type t_json_scrapingJsonType = typeof json_scrapingJsonType ;

export type keyofJsonService_1 = keyof t_json_scrapingJsonType[t_serviceName_MainService]

export type getPropsFromServiceNamePropsName<SN extends t_serviceName_MainService , Props extends keyofJsonService_1> = 
t_json_scrapingJsonType[SN][Props] 


export type getConfigFromServiceName < SN extends t_serviceName_MainService> = t_json_scrapingJsonType[SN] ;
export type t_main_service_union_config = getConfigFromServiceName<t_serviceName_MainService> ;

export type getScrapingComponentFromMainServiceNameAndRoute<SN extends t_serviceName_MainService , R extends getUnionRouteOfServiceFromServiceName<SN>>  =  
getPropsFromServiceNamePropsName<SN,R> extends infer A  ? A extends t_ScrapingComponent_any ? A["fwJsonComponent"] : never : never ;

export type getConfigScrapingComponentFromMainServiceNameAndRoute<SN extends t_serviceName_MainService , R extends getUnionRouteOfServiceFromServiceName<SN>>  =  
getScrapingComponentFromMainServiceNameAndRoute<SN,R> extends infer A  ? A extends t_FunctionalWrapperJsonComponent_any ? t_IFunctionalWrapperIJson_getConfig<A>: never : never ;


export type getSchemaScrapingConfigPropsFromMainServiceNameAndRouteAndProps < SN extends t_serviceName_MainService , R extends getUnionRouteOfServiceFromServiceName<SN> , K extends t_key_FunctionalWrapperJsonComponentConfig = t_key_FunctionalWrapperJsonComponentConfig> = 
getConfigScrapingComponentFromMainServiceNameAndRoute<SN,R> extends infer A ? A extends t_FunctionalWrapperJsonComponentConfig_any ? A[K] : never: never ;


export type getSchemaScrapingConfigArrClassNameFromMainServiceNameAndRoute < SN extends t_serviceName_MainService , R extends getUnionRouteOfServiceFromServiceName<SN> > = 
getSchemaScrapingConfigPropsFromMainServiceNameAndRouteAndProps<SN,R> extends infer A ? A extends t_FunctionalWrapperJsonComponentConfig_any ? A["arrClassName"] : never: never ;


export type getSchemaScrapingConfigArrClassNameAndChildsComponentsFromMainServiceNameAndRoute < SN extends t_serviceName_MainService , R extends getUnionRouteOfServiceFromServiceName<SN> > = 
getSchemaScrapingConfigPropsFromMainServiceNameAndRouteAndProps<SN,R> extends infer A ? A extends t_FunctionalWrapperJsonComponentConfig_any ? A["arrClassNameAndChildsComponents"] : never: never ;

export type getSchemaScrapingConfigJsonArrComponentJsonFromMainServiceNameAndRoute < SN extends t_serviceName_MainService , R extends getUnionRouteOfServiceFromServiceName<SN> > = 
getSchemaScrapingConfigPropsFromMainServiceNameAndRouteAndProps<SN,R> extends infer A ? A extends t_FunctionalWrapperJsonComponentConfig_any ? A["jsonArr_component_json"] : never: never ;

