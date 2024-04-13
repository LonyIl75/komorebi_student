import { createAddress } from "@/../shared/routePath.js";
import { arrToUnion } from "@/../shared/type.js";
import { id_arr_serviceRoutes, str_idRoute_home } from "@/controller/scraping-services/class/Config/types.js";
import { ServiceConfig } from "@/controller/scraping-services/class/Config/ServiceConfig.js";
import { IJson_ServiceConfig } from "@/controller/scraping-services/class/Config/IJson_ServiceConfig.js";
import { _validateRouteAndAddress } from "@/controller/scraping-services/class/constraints.js";

export const serviceName_pourdebon = "pourdebon"  as const ;

export const remoteAddress_pourdebon = "https://www.pourdebon.com" as const ;
const mainAddress_pourdebon = "" as const ;

export const idRoute_home_pourdebon =  ServiceConfig.df[str_idRoute_home] ;
export type t_idRoute_home_pourdebon = typeof idRoute_home_pourdebon ;
export const idRoute_only_pourdebon = ["legumes","bouchers"] as const ;
export const remoteAddressRoute_only_pourdebon = ["legumes-cp21","bouchers-cp59"] as const ;
export type t_idRoute_only_pourdebon = typeof idRoute_only_pourdebon ;
export const idRoutes_pourdebon = [...id_arr_serviceRoutes,idRoute_home_pourdebon,...idRoute_only_pourdebon] as const ;
const idRouteAndRemoteAddresss_pourdebon = [
    //COMMON ROUTES
    [idRoutes_pourdebon[0],createAddress<[typeof remoteAddress_pourdebon] , typeof idRoutes_pourdebon[0] > ([remoteAddress_pourdebon],idRoutes_pourdebon[0])],//LOGIN
    
    [idRoute_home_pourdebon,createAddress<[typeof remoteAddress_pourdebon] , ""> ([remoteAddress_pourdebon],"")],//OTHER REQUIRED/BASE ROUTE ,eg : home 
    
    //ONLY SERVICE ROUTES
    [idRoute_only_pourdebon[0],createAddress<[typeof remoteAddress_pourdebon] , typeof remoteAddressRoute_only_pourdebon[0] > ([remoteAddress_pourdebon],remoteAddressRoute_only_pourdebon[0])],
    [idRoute_only_pourdebon[1],createAddress<[typeof remoteAddress_pourdebon] , typeof remoteAddressRoute_only_pourdebon[1] > ([remoteAddress_pourdebon],remoteAddressRoute_only_pourdebon[1])]
] as const ;




export type t_serviceName_pourdebon = typeof serviceName_pourdebon ;
export type t_remoteName_pourdebon = typeof serviceName_pourdebon ;
export type t_idRouteAndRemoteAddresss_pourdebon = typeof idRouteAndRemoteAddresss_pourdebon ;
export type t_idRoutes_pourdebon = typeof idRoutes_pourdebon ;
export type t_remoteAddress_pourdebon =  typeof remoteAddress_pourdebon;
export type t_mainAddress_pourdebon = typeof mainAddress_pourdebon;
export type t_idRouteUnion_pourdebon =  arrToUnion<t_idRoutes_pourdebon> ;


const config_pourdebon : IJson_ServiceConfig<t_serviceName_pourdebon ,  t_remoteAddress_pourdebon  , t_idRoute_home_pourdebon ,t_idRoutes_pourdebon ,  t_idRouteAndRemoteAddresss_pourdebon> = {
    serviceName :serviceName_pourdebon ,
    remoteName : "",
    remoteAddress : remoteAddress_pourdebon,
    mainAddress : mainAddress_pourdebon, 
    idRoute_home : idRoute_home_pourdebon,
    idRoutes : idRoutes_pourdebon,
    idRouteAndRemoteAddresss : idRouteAndRemoteAddresss_pourdebon,

}

export default config_pourdebon ;