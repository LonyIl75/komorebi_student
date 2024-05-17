import { ServiceConfig } from "@/controller/scraping-services/class/Config/ServiceConfig.js";
import config_lespepitestech, { t_serviceName_lespepitestech, t_remoteAddress_lespepitestech, t_idRoute_home_lespepitestech, t_idRoutes_lespepitestech, t_idRouteAndRemoteAddresss_lespepitestech, t_idRouteUnion_lespepitestech, serviceName_lespepitestech } from "../../Config/lespepitestech/config.js";
import {  t_str_doProcessFunctionName } from "@/controller/scraping-services/class/Config/types.js";
import { MainService, t_doServiceFunction } from "../../class/MainService.js";
import { json_localAndRemoteDatabase } from "@/database/scraping-services/Services/main.js";
import { _C_H, _C_R, _C_RA, _C_SN, _C_ServJson, _C_T1, validateServJson } from "../../class/constraints.js";


export const  LespepitestechMainService =   MainService.cst<t_serviceName_lespepitestech,t_remoteAddress_lespepitestech , t_idRoute_home_lespepitestech ,t_idRoutes_lespepitestech,t_idRouteAndRemoteAddresss_lespepitestech,validateServJson<t_serviceName_lespepitestech,t_remoteAddress_lespepitestech,t_idRoutes_lespepitestech>>(config_lespepitestech,json_localAndRemoteDatabase[serviceName_lespepitestech])

export type lespepitestech_doProcessFunctionName = typeof ServiceConfig.df[t_str_doProcessFunctionName];

export const doServiceLespepitestech : t_doServiceFunction<t_serviceName_lespepitestech,t_remoteAddress_lespepitestech , t_idRoute_home_lespepitestech,t_idRoutes_lespepitestech,t_idRouteAndRemoteAddresss_lespepitestech>
= async (id_route : t_idRouteUnion_lespepitestech , functionName : string  ,  ...args:any[]) => {   
    return  LespepitestechMainService.then(  async (obj ) => {   
        return  await MainService.doServiceFunction(obj,id_route , functionName , ...args);
    })
}