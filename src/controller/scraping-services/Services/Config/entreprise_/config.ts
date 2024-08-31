import { createAddress } from "@/../shared/routePath.js";
import { arrToUnion } from "@/../shared/type.js";
import { id_arr_serviceRoutes, str_idRoute_home } from "@/controller/scraping-services/class/Config/types.js";
import { ServiceConfig } from "@/controller/scraping-services/class/Config/ServiceConfig.js";
import { IJson_ServiceConfig } from "@/controller/scraping-services/class/Config/IJson_ServiceConfig.js";
import { _validateRouteAndAddress } from "@/controller/scraping-services/class/constraints.js";

export const serviceName_entreprise_ = "entreprise_"  as const ;

export const remoteAddress_entreprise_ = "https://entreprise_.com/" ; //TODO IMP: allow to have undefined remoteAddress => need to specify in req object
const mainAddress_entreprise_ = "" as const ;

export const idRoute_home_entreprise_ =  ServiceConfig.df[str_idRoute_home] ;
export type t_idRoute_home_entreprise_ = typeof idRoute_home_entreprise_ ;
export const idRoute_only_entreprise_ = [] as const ;
export const remoteAddressRoute_only_entreprise_ = [] as const ;
export type t_idRoute_only_entreprise_ = typeof idRoute_only_entreprise_ ;
export const idRoutes_entreprise_ = [...id_arr_serviceRoutes,idRoute_home_entreprise_,...idRoute_only_entreprise_] as const ;
//TODO : remove createAddress we need to make idRouteAndRemoteAddresss , for ex : [..., [idRoute_only_entreprise_[i] , `./${remoteAddressRoute_only_entreprise_[i]}`]] as const ;
const idRouteAndRemoteAddresss_entreprise_ = [
    //COMMON ROUTES
    [idRoutes_entreprise_[0],createAddress<[typeof remoteAddress_entreprise_] , typeof idRoutes_entreprise_[0] > ([remoteAddress_entreprise_],idRoutes_entreprise_[0])],//LOGIN

    [idRoute_home_entreprise_,createAddress<[typeof remoteAddress_entreprise_] , ""> ([remoteAddress_entreprise_],"")],//OTHER REQUIRED/BASE ROUTE ,eg : home 

    ] as const ;




export type t_serviceName_entreprise_ = typeof serviceName_entreprise_ ;
export type t_remoteName_entreprise_ = typeof serviceName_entreprise_ ;
export type t_idRouteAndRemoteAddresss_entreprise_ = typeof idRouteAndRemoteAddresss_entreprise_ ;
export type t_idRoutes_entreprise_ = typeof idRoutes_entreprise_ ;
export type t_remoteAddress_entreprise_ =  typeof remoteAddress_entreprise_;
export type t_mainAddress_entreprise_ = typeof mainAddress_entreprise_;
export type t_idRouteUnion_entreprise_ =  arrToUnion<t_idRoutes_entreprise_> ;


const config_entreprise_ : IJson_ServiceConfig<t_serviceName_entreprise_ ,  t_remoteAddress_entreprise_  , t_idRoute_home_entreprise_ ,t_idRoutes_entreprise_ ,  t_idRouteAndRemoteAddresss_entreprise_> = {
    serviceName :serviceName_entreprise_ ,
    remoteName : "",
    remoteAddress : remoteAddress_entreprise_,
    mainAddress : mainAddress_entreprise_, 
    idRoute_home : idRoute_home_entreprise_,
    idRoutes : idRoutes_entreprise_,
    idRouteAndRemoteAddresss : idRouteAndRemoteAddresss_entreprise_,

}

export default config_entreprise_ ;