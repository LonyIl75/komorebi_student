import getCurrentLine from "get-current-line"
import { ServiceConfig } from "@/controller/scraping-services/class/Config/ServiceConfig.js";
import config_forinov, { t_serviceName_forinov, t_remoteAddress_forinov, t_idRoute_home_forinov, t_idRoutes_forinov, t_idRouteAndRemoteAddresss_forinov, t_idRouteUnion_forinov, serviceName_forinov } from "../../Config/forinov/config.js";
import {  t_str_doProcessFunctionName } from "@/controller/scraping-services/class/Config/types.js";
import { MainService, t_doServiceFunction } from "../../class/MainService.js";
import { json_localAndRemoteDatabase } from "@/database/scraping-services/Services/main.js";
import { _C_H, _C_R, _C_RA, _C_SN, _C_ServJson, _C_T1, validateServJson } from "../../class/constraints.js";


export const  ForinovMainService =   MainService.cst<t_serviceName_forinov,t_remoteAddress_forinov , t_idRoute_home_forinov ,t_idRoutes_forinov,t_idRouteAndRemoteAddresss_forinov,validateServJson<t_serviceName_forinov,t_remoteAddress_forinov,t_idRoutes_forinov>>(config_forinov,json_localAndRemoteDatabase[serviceName_forinov])

export type forinov_doProcessFunctionName = typeof ServiceConfig.df[t_str_doProcessFunctionName];

export const doServiceForinov : t_doServiceFunction<t_serviceName_forinov,t_remoteAddress_forinov , t_idRoute_home_forinov,t_idRoutes_forinov,t_idRouteAndRemoteAddresss_forinov>
= async (id_route : t_idRouteUnion_forinov , functionName : string  ,  ...args:any[]) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/   
    return  ForinovMainService.then(  async (obj ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/   
        return  await MainService.doServiceFunction(obj,id_route , functionName , ...args);
    })
}