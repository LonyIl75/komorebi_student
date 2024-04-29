import { ServiceConfig } from "@/controller/scraping-services/class/Config/ServiceConfig.js";
import config_booksToscrape, { t_serviceName_booksToscrape, t_remoteAddress_booksToscrape, t_idRoute_home_booksToscrape, t_idRoutes_booksToscrape, t_idRouteAndRemoteAddresss_booksToscrape, t_idRouteUnion_booksToscrape, serviceName_booksToscrape } from "../../Config/booksToscrape/config.js";
import {  t_str_doProcessFunctionName } from "@/controller/scraping-services/class/Config/types.js";
import { MainService, t_doServiceFunction } from "../../class/MainService.js";
import { json_localAndRemoteDatabase } from "@/database/scraping-services/Services/main.js";
import { _C_H, _C_R, _C_RA, _C_SN, _C_ServJson, _C_T1, validateServJson } from "../../class/constraints.js";


export const  BooksToscrapeMainService =   MainService.cst<t_serviceName_booksToscrape,t_remoteAddress_booksToscrape , t_idRoute_home_booksToscrape ,t_idRoutes_booksToscrape,t_idRouteAndRemoteAddresss_booksToscrape,validateServJson<t_serviceName_booksToscrape,t_remoteAddress_booksToscrape,t_idRoutes_booksToscrape>>(config_booksToscrape,json_localAndRemoteDatabase[serviceName_booksToscrape])

export type booksToscrape_doProcessFunctionName = typeof ServiceConfig.df[t_str_doProcessFunctionName];

export const doServiceBooksToscrape : t_doServiceFunction<t_serviceName_booksToscrape,t_remoteAddress_booksToscrape , t_idRoute_home_booksToscrape,t_idRoutes_booksToscrape,t_idRouteAndRemoteAddresss_booksToscrape>
= async (id_route : t_idRouteUnion_booksToscrape , functionName : string  ,  ...args:any[]) => {   
    return  BooksToscrapeMainService.then(  async (obj ) => {   
        return  await MainService.doServiceFunction(obj,id_route , functionName , ...args);
    })
}