import { createAddress } from "@/../shared/routePath.js";
import { arrToUnion } from "@/../shared/type.js";
import { id_arr_serviceRoutes, str_idRoute_home } from "@/controller/scraping-services/class/Config/types.js";
import { ServiceConfig } from "@/controller/scraping-services/class/Config/ServiceConfig.js";
import { IJson_ServiceConfig } from "@/controller/scraping-services/class/Config/IJson_ServiceConfig.js";
import { _validateRouteAndAddress } from "@/controller/scraping-services/class/constraints.js";

export const serviceName_booksToscrape = "booksToscrape"  as const ;

export const remoteAddress_booksToscrape = "https://www.books.toscrape.com/catalogue/category" as const ;
const mainAddress_booksToscrape = "" as const ;

export const idRoute_home_booksToscrape =  ServiceConfig.df[str_idRoute_home] ;
export type t_idRoute_home_booksToscrape = typeof idRoute_home_booksToscrape ;
export const idRoute_only_booksToscrape = ["books"] as const ;
export const remoteAddressRoute_only_booksToscrape = ["books_1"] as const ;
export type t_idRoute_only_booksToscrape = typeof idRoute_only_booksToscrape ;
export const idRoutes_booksToscrape = [...id_arr_serviceRoutes,idRoute_home_booksToscrape,...idRoute_only_booksToscrape] as const ;
const idRouteAndRemoteAddresss_booksToscrape = [
    //COMMON ROUTES
    [idRoutes_booksToscrape[0],createAddress<[typeof remoteAddress_booksToscrape] , typeof idRoutes_booksToscrape[0] > ([remoteAddress_booksToscrape],idRoutes_booksToscrape[0])],//LOGIN

    [idRoute_home_booksToscrape,createAddress<[typeof remoteAddress_booksToscrape] , ""> ([remoteAddress_booksToscrape],"")],//OTHER REQUIRED/BASE ROUTE ,eg : home 

    //ONLY SERVICE ROUTES
    [idRoute_only_booksToscrape[0],createAddress<[typeof remoteAddress_booksToscrape] , typeof remoteAddressRoute_only_booksToscrape[0] > ([remoteAddress_booksToscrape],remoteAddressRoute_only_booksToscrape[0])],
] as const ;




export type t_serviceName_booksToscrape = typeof serviceName_booksToscrape ;
export type t_remoteName_booksToscrape = typeof serviceName_booksToscrape ;
export type t_idRouteAndRemoteAddresss_booksToscrape = typeof idRouteAndRemoteAddresss_booksToscrape ;
export type t_idRoutes_booksToscrape = typeof idRoutes_booksToscrape ;
export type t_remoteAddress_booksToscrape =  typeof remoteAddress_booksToscrape;
export type t_mainAddress_booksToscrape = typeof mainAddress_booksToscrape;
export type t_idRouteUnion_booksToscrape =  arrToUnion<t_idRoutes_booksToscrape> ;


const config_booksToscrape : IJson_ServiceConfig<t_serviceName_booksToscrape ,  t_remoteAddress_booksToscrape  , t_idRoute_home_booksToscrape ,t_idRoutes_booksToscrape ,  t_idRouteAndRemoteAddresss_booksToscrape> = {
    serviceName :serviceName_booksToscrape ,
    remoteName : "",
    remoteAddress : remoteAddress_booksToscrape,
    mainAddress : mainAddress_booksToscrape, 
    idRoute_home : idRoute_home_booksToscrape,
    idRoutes : idRoutes_booksToscrape,
    idRouteAndRemoteAddresss : idRouteAndRemoteAddresss_booksToscrape,

}

export default config_booksToscrape ;