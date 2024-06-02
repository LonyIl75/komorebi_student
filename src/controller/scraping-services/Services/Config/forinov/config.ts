import { createAddress } from "@/../shared/routePath.js";
import { arrToUnion } from "@/../shared/type.js";
import { id_arr_serviceRoutes, str_idRoute_home } from "@/controller/scraping-services/class/Config/types.js";
import { ServiceConfig } from "@/controller/scraping-services/class/Config/ServiceConfig.js";
import { IJson_ServiceConfig } from "@/controller/scraping-services/class/Config/IJson_ServiceConfig.js";
import { _validateRouteAndAddress } from "@/controller/scraping-services/class/constraints.js";

export const serviceName_forinov = "forinov"  as const ;

export const remoteAddress_forinov = "https://forinov.com" as const ;
const mainAddress_forinov = "" as const ;

export const idRoute_home_forinov =  ServiceConfig.df[str_idRoute_home] ;
export type t_idRoute_home_forinov = typeof idRoute_home_forinov ;
export const idRoute_only_forinov = ["startupsOccitanie","startupOccitanie"] as const ;
export const remoteAddressRoute_only_forinov = ["startups/france-Occitanie_3","startups"] as const ;
export type t_idRoute_only_forinov = typeof idRoute_only_forinov ;
export const idRoutes_forinov = [...id_arr_serviceRoutes,idRoute_home_forinov,...idRoute_only_forinov] as const ;
//TODO : remove createAddress we need to make idRouteAndRemoteAddresss , for ex : [..., [idRoute_only_forinov[i] , `./${remoteAddressRoute_only_forinov[i]}`]] as const ;
const idRouteAndRemoteAddresss_forinov = [
    //COMMON ROUTES
    [idRoutes_forinov[0],createAddress<[typeof remoteAddress_forinov] , typeof idRoutes_forinov[0] > ([remoteAddress_forinov],idRoutes_forinov[0])],//LOGIN

    [idRoute_home_forinov,createAddress<[typeof remoteAddress_forinov] , ""> ([remoteAddress_forinov],"")],//OTHER REQUIRED/BASE ROUTE ,eg : home 

    //ONLY SERVICE ROUTES
    [idRoute_only_forinov[0],createAddress<[typeof remoteAddress_forinov] , typeof remoteAddressRoute_only_forinov[0] > ([remoteAddress_forinov],remoteAddressRoute_only_forinov[0])],
    [idRoute_only_forinov[1],createAddress<[typeof remoteAddress_forinov] , typeof remoteAddressRoute_only_forinov[1] > ([remoteAddress_forinov],remoteAddressRoute_only_forinov[1])],
] as const ;




export type t_serviceName_forinov = typeof serviceName_forinov ;
export type t_remoteName_forinov = typeof serviceName_forinov ;
export type t_idRouteAndRemoteAddresss_forinov = typeof idRouteAndRemoteAddresss_forinov ;
export type t_idRoutes_forinov = typeof idRoutes_forinov ;
export type t_remoteAddress_forinov =  typeof remoteAddress_forinov;
export type t_mainAddress_forinov = typeof mainAddress_forinov;
export type t_idRouteUnion_forinov =  arrToUnion<t_idRoutes_forinov> ;


const config_forinov : IJson_ServiceConfig<t_serviceName_forinov ,  t_remoteAddress_forinov  , t_idRoute_home_forinov ,t_idRoutes_forinov ,  t_idRouteAndRemoteAddresss_forinov> = {
    serviceName :serviceName_forinov ,
    remoteName : "",
    remoteAddress : remoteAddress_forinov,
    mainAddress : mainAddress_forinov, 
    idRoute_home : idRoute_home_forinov,
    idRoutes : idRoutes_forinov,
    idRouteAndRemoteAddresss : idRouteAndRemoteAddresss_forinov,

}

export default config_forinov ;