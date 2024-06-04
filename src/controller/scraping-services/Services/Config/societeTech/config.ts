import { createAddress } from "@/../shared/routePath.js";
import { arrToUnion } from "@/../shared/type.js";
import { id_arr_serviceRoutes, str_idRoute_home } from "@/controller/scraping-services/class/Config/types.js";
import { ServiceConfig } from "@/controller/scraping-services/class/Config/ServiceConfig.js";
import { IJson_ServiceConfig } from "@/controller/scraping-services/class/Config/IJson_ServiceConfig.js";
import { _validateRouteAndAddress } from "@/controller/scraping-services/class/constraints.js";

export const serviceName_societeTech = "societeTech"  as const ;

export const remoteAddress_societeTech = "https://www.societe.tech" as const ;
const mainAddress_societeTech = "" as const ;

export const idRoute_home_societeTech =  ServiceConfig.df[str_idRoute_home] ;
export type t_idRoute_home_societeTech = typeof idRoute_home_societeTech ;
export const idRoute_only_societeTech = ["startupsMtp","startupMtp"] as const ;
export const remoteAddressRoute_only_societeTech = ["actus/startup-du-monde/startup-europe/startup-france/startup-occitanie/startup-herault/startup-montpellier","actu"] as const ;
export type t_idRoute_only_societeTech = typeof idRoute_only_societeTech ;
export const idRoutes_societeTech = [...id_arr_serviceRoutes,idRoute_home_societeTech,...idRoute_only_societeTech] as const ;
//TODO : remove createAddress we need to make idRouteAndRemoteAddresss , for ex : [..., [idRoute_only_societeTech[i] , `./${remoteAddressRoute_only_societeTech[i]}`]] as const ;
const idRouteAndRemoteAddresss_societeTech = [
    //COMMON ROUTES
    [idRoutes_societeTech[0],createAddress<[typeof remoteAddress_societeTech] , typeof idRoutes_societeTech[0] > ([remoteAddress_societeTech],idRoutes_societeTech[0])],//LOGIN

    [idRoute_home_societeTech,createAddress<[typeof remoteAddress_societeTech] , ""> ([remoteAddress_societeTech],"")],//OTHER REQUIRED/BASE ROUTE ,eg : home 

    //ONLY SERVICE ROUTES
    [idRoute_only_societeTech[0],createAddress<[typeof remoteAddress_societeTech] , typeof remoteAddressRoute_only_societeTech[0] > ([remoteAddress_societeTech],remoteAddressRoute_only_societeTech[0])],
    [idRoute_only_societeTech[1],createAddress<[typeof remoteAddress_societeTech] , typeof remoteAddressRoute_only_societeTech[1] > ([remoteAddress_societeTech],remoteAddressRoute_only_societeTech[1])],
] as const ;




export type t_serviceName_societeTech = typeof serviceName_societeTech ;
export type t_remoteName_societeTech = typeof serviceName_societeTech ;
export type t_idRouteAndRemoteAddresss_societeTech = typeof idRouteAndRemoteAddresss_societeTech ;
export type t_idRoutes_societeTech = typeof idRoutes_societeTech ;
export type t_remoteAddress_societeTech =  typeof remoteAddress_societeTech;
export type t_mainAddress_societeTech = typeof mainAddress_societeTech;
export type t_idRouteUnion_societeTech =  arrToUnion<t_idRoutes_societeTech> ;


const config_societeTech : IJson_ServiceConfig<t_serviceName_societeTech ,  t_remoteAddress_societeTech  , t_idRoute_home_societeTech ,t_idRoutes_societeTech ,  t_idRouteAndRemoteAddresss_societeTech> = {
    serviceName :serviceName_societeTech ,
    remoteName : "",
    remoteAddress : remoteAddress_societeTech,
    mainAddress : mainAddress_societeTech, 
    idRoute_home : idRoute_home_societeTech,
    idRoutes : idRoutes_societeTech,
    idRouteAndRemoteAddresss : idRouteAndRemoteAddresss_societeTech,

}

export default config_societeTech ;