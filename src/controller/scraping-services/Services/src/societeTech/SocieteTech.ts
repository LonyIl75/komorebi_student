import getCurrentLine from "get-current-line"
import { ServiceConfig } from "@/controller/scraping-services/class/Config/ServiceConfig.js";
import config_societeTech, { t_serviceName_societeTech, t_remoteAddress_societeTech, t_idRoute_home_societeTech, t_idRoutes_societeTech, t_idRouteAndRemoteAddresss_societeTech, t_idRouteUnion_societeTech, serviceName_societeTech } from "../../Config/societeTech/config.js";
import {  t_str_doProcessFunctionName } from "@/controller/scraping-services/class/Config/types.js";
import { MainService, t_doServiceFunction } from "../../class/MainService.js";
import { json_localAndRemoteDatabase } from "@/database/scraping-services/Services/main.js";
import { _C_H, _C_R, _C_RA, _C_SN, _C_ServJson, _C_T1, validateServJson } from "../../class/constraints.js";


export const  SocieteTechMainService =   MainService.cst<t_serviceName_societeTech,t_remoteAddress_societeTech , t_idRoute_home_societeTech ,t_idRoutes_societeTech,t_idRouteAndRemoteAddresss_societeTech,validateServJson<t_serviceName_societeTech,t_remoteAddress_societeTech,t_idRoutes_societeTech>>(config_societeTech,json_localAndRemoteDatabase[serviceName_societeTech])

export type societeTech_doProcessFunctionName = typeof ServiceConfig.df[t_str_doProcessFunctionName];

export const doServiceSocieteTech : t_doServiceFunction<t_serviceName_societeTech,t_remoteAddress_societeTech , t_idRoute_home_societeTech,t_idRoutes_societeTech,t_idRouteAndRemoteAddresss_societeTech>
= async (id_route : t_idRouteUnion_societeTech , functionName : string  ,  ...args:any[]) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/   
    return  SocieteTechMainService.then(  async (obj ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/   
        return  await MainService.doServiceFunction(obj,id_route , functionName , ...args);
    })
}