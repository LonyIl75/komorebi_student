import { createAddress } from "@/../shared/routePath.js";
import { arrToUnion } from "@/../shared/type.js";
import { id_arr_serviceRoutes, str_idRoute_home } from "@/controller/scraping-services/class/Config/types.js";
import { ServiceConfig } from "@/controller/scraping-services/class/Config/ServiceConfig.js";
import { IJson_ServiceConfig } from "@/controller/scraping-services/class/Config/IJson_ServiceConfig.js";
import { _validateRouteAndAddress } from "@/controller/scraping-services/class/constraints.js";

export const serviceName_lespepitestech = "lespepitestech"  as const ;

export const remoteAddress_lespepitestech = "https://lespepitestech.com" as const ;
const mainAddress_lespepitestech = "" as const ;

export const idRoute_home_lespepitestech =  ServiceConfig.df[str_idRoute_home] ;
export type t_idRoute_home_lespepitestech = typeof idRoute_home_lespepitestech ;
export const idRoute_only_lespepitestech = ["startupsMtp"] as const ;
export const remoteAddressRoute_only_lespepitestech = ["startup/montpellier"] as const ;
export type t_idRoute_only_lespepitestech = typeof idRoute_only_lespepitestech ;
export const idRoutes_lespepitestech = [...id_arr_serviceRoutes,idRoute_home_lespepitestech,...idRoute_only_lespepitestech] as const ;
//TODO : remove createAddress we need to make idRouteAndRemoteAddresss , for ex : [..., [idRoute_only_lespepitestech[i] , `./${remoteAddressRoute_only_lespepitestech[i]}`]] as const ;
const idRouteAndRemoteAddresss_lespepitestech = [
    //COMMON ROUTES
    [idRoutes_lespepitestech[0],createAddress<[typeof remoteAddress_lespepitestech] , typeof idRoutes_lespepitestech[0] > ([remoteAddress_lespepitestech],idRoutes_lespepitestech[0])],//LOGIN

    [idRoute_home_lespepitestech,createAddress<[typeof remoteAddress_lespepitestech] , ""> ([remoteAddress_lespepitestech],"")],//OTHER REQUIRED/BASE ROUTE ,eg : home 

    //ONLY SERVICE ROUTES
    [idRoute_only_lespepitestech[0],createAddress<[typeof remoteAddress_lespepitestech] , typeof remoteAddressRoute_only_lespepitestech[0] > ([remoteAddress_lespepitestech],remoteAddressRoute_only_lespepitestech[0])],
] as const ;




export type t_serviceName_lespepitestech = typeof serviceName_lespepitestech ;
export type t_remoteName_lespepitestech = typeof serviceName_lespepitestech ;
export type t_idRouteAndRemoteAddresss_lespepitestech = typeof idRouteAndRemoteAddresss_lespepitestech ;
export type t_idRoutes_lespepitestech = typeof idRoutes_lespepitestech ;
export type t_remoteAddress_lespepitestech =  typeof remoteAddress_lespepitestech;
export type t_mainAddress_lespepitestech = typeof mainAddress_lespepitestech;
export type t_idRouteUnion_lespepitestech =  arrToUnion<t_idRoutes_lespepitestech> ;


const config_lespepitestech : IJson_ServiceConfig<t_serviceName_lespepitestech ,  t_remoteAddress_lespepitestech  , t_idRoute_home_lespepitestech ,t_idRoutes_lespepitestech ,  t_idRouteAndRemoteAddresss_lespepitestech> = {
    serviceName :serviceName_lespepitestech ,
    remoteName : "",
    remoteAddress : remoteAddress_lespepitestech,
    mainAddress : mainAddress_lespepitestech, 
    idRoute_home : idRoute_home_lespepitestech,
    idRoutes : idRoutes_lespepitestech,
    idRouteAndRemoteAddresss : idRouteAndRemoteAddresss_lespepitestech,

}

export default config_lespepitestech ;