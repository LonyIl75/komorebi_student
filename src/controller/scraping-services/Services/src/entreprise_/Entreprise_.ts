import { ServiceConfig } from "@/controller/scraping-services/class/Config/ServiceConfig.js";
import config_entreprise_, { t_serviceName_entreprise_, t_remoteAddress_entreprise_, t_idRoute_home_entreprise_, t_idRoutes_entreprise_, t_idRouteAndRemoteAddresss_entreprise_, t_idRouteUnion_entreprise_, serviceName_entreprise_ } from "../../Config/entreprise_/config.js";
import {  t_str_doProcessFunctionName } from "@/controller/scraping-services/class/Config/types.js";
import { MainService, t_doServiceFunction } from "../../class/MainService.js";
import { json_localAndRemoteDatabase } from "@/database/scraping-services/Services/main.js";
import { _C_H, _C_R, _C_RA, _C_SN, _C_ServJson, _C_T1, validateServJson } from "../../class/constraints.js";


export const  Entreprise_MainService =   MainService.cst<t_serviceName_entreprise_,t_remoteAddress_entreprise_ , t_idRoute_home_entreprise_ ,t_idRoutes_entreprise_,t_idRouteAndRemoteAddresss_entreprise_,validateServJson<t_serviceName_entreprise_,t_remoteAddress_entreprise_,t_idRoutes_entreprise_>>(config_entreprise_,json_localAndRemoteDatabase[serviceName_entreprise_])

export type entreprise__doProcessFunctionName = typeof ServiceConfig.df[t_str_doProcessFunctionName];

export const doServiceEntreprise_ : t_doServiceFunction<t_serviceName_entreprise_,t_remoteAddress_entreprise_ , t_idRoute_home_entreprise_,t_idRoutes_entreprise_,t_idRouteAndRemoteAddresss_entreprise_>
= async (id_route : t_idRouteUnion_entreprise_ , functionName : string  ,  ...args:any[]) => {   
    return  Entreprise_MainService.then(  async (obj ) => {   
        return  await MainService.doServiceFunction(obj,id_route , functionName , ...args);
    })
}