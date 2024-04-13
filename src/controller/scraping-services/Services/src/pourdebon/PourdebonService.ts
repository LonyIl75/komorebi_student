import { ServiceConfig } from "@/controller/scraping-services/class/Config/ServiceConfig.js";
import config_pourdebon, { t_serviceName_pourdebon, t_remoteAddress_pourdebon, t_idRoute_home_pourdebon, t_idRoutes_pourdebon, t_idRouteAndRemoteAddresss_pourdebon, t_idRouteUnion_pourdebon, serviceName_pourdebon } from "../../Config/pourdebon/config.js";
import {  t_str_doProcessFunctionName } from "@/controller/scraping-services/class/Config/types.js";
import { MainService as _Mainservice, t_doServiceFunction } from "../../class/MainService.js";
import { json_localAndRemoteDatabase } from "@/database/scraping-services/Services/main.js";
import { validateServJson } from "../../class/constraints.js";


class MainService extends  _Mainservice<t_serviceName_pourdebon,t_remoteAddress_pourdebon , t_idRoute_home_pourdebon ,t_idRoutes_pourdebon,t_idRouteAndRemoteAddresss_pourdebon,validateServJson<t_serviceName_pourdebon,t_remoteAddress_pourdebon,t_idRoutes_pourdebon>>{}

export const  PourdebonMainService =   MainService.cst<t_serviceName_pourdebon,t_remoteAddress_pourdebon , t_idRoute_home_pourdebon ,t_idRoutes_pourdebon,t_idRouteAndRemoteAddresss_pourdebon>(config_pourdebon,json_localAndRemoteDatabase[serviceName_pourdebon])


export type pourdebon_doProcessFunctionName = typeof ServiceConfig.df[t_str_doProcessFunctionName];


export const doServicePourdebon : t_doServiceFunction<t_serviceName_pourdebon,t_remoteAddress_pourdebon , t_idRoute_home_pourdebon,t_idRoutes_pourdebon,t_idRouteAndRemoteAddresss_pourdebon>
= async (id_route : t_idRouteUnion_pourdebon , functionName : string  ,  ...args:any[]) => {   
    return  PourdebonMainService.then(  async (obj ) => {   
        return  await MainService.doServiceFunction(obj,id_route , functionName , ...args);
    })
}