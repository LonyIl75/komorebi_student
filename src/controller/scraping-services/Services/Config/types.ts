import { removeElementsFromArr, arrToUnion, getElementNumberI, getIndexOfElement, getElemAtIndex } from "@shared/type.js";
import { t_arrRouteIdAndRemoteAddress, idx_remoteAddressFromRouteIdAndRemoteAddress, t_routeIdAndRemoteAddress, t_base_id_serviceRoutes, t_str_doProcessFunctionName, t_str_rootRepertoryName, t_str_idRoutes, t_str_mainAddress, t_str_remoteAddress, t_str_idRouteAndRemoteAddresss } from "../../class/Config/types.js";


import { json_ConfigService} from "./main.js";
import { _IJson_ServiceConfig } from "../../class/Config/IJson_ServiceConfig.js";

export type t_json_ConfigService= typeof json_ConfigService

export type t_serviceName_MainService = keyof t_json_ConfigService;

export type keyofJsonService_1 = Exclude < keyof _IJson_ServiceConfig, t_str_doProcessFunctionName| t_str_rootRepertoryName>

export type getPropsFromServiceName_ConfigService<SN extends t_serviceName_MainService > = t_json_ConfigService[SN] 

export type getPropsFromServiceNamePropsName<SN extends t_serviceName_MainService , Props extends keyofJsonService_1> = 
getPropsFromServiceName_ConfigService<SN> [Props] 

type getUnionServiceNameProps <Props extends keyofJsonService_1> = getPropsFromServiceNamePropsName<t_serviceName_MainService,Props> ;

export type getConfigFromServiceName < SN extends t_serviceName_MainService> = getPropsFromServiceName_ConfigService<SN> ;
export type t_main_service_union_config = getConfigFromServiceName<t_serviceName_MainService> ;

export type getRemoteAddressFromMainServiceName<SN extends t_serviceName_MainService > =  getPropsFromServiceNamePropsName<SN,t_str_remoteAddress> ;


export type getPropsFromServiceName_ServiceRoutes < SN extends t_serviceName_MainService> = getPropsFromServiceNamePropsName<SN,t_str_idRoutes> ;
export type getOnlyRoutesFromServiceName <SN extends t_serviceName_MainService> = getPropsFromServiceName_ServiceRoutes<SN> extends infer Res ? Res extends readonly string[] /*t_arr_allRoutes_service[number]*/ ? removeElementsFromArr < Res,t_base_id_serviceRoutes> : never :never


export type t_main_service_idroutes = arrToUnion<getPropsFromServiceName_ServiceRoutes<t_serviceName_MainService> >;
export type getUnionRouteOfServiceFromServiceName <SN extends t_serviceName_MainService> = arrToUnion<getPropsFromServiceName_ServiceRoutes<SN>> ;




export type getIdroutesAndRemoteAddress <SN extends t_serviceName_MainService> = getPropsFromServiceNamePropsName<SN, t_str_idRouteAndRemoteAddresss> ;
export type t_main_service_idroutesAndRemoteAddress =getIdroutesAndRemoteAddress<t_serviceName_MainService> ;


export type t_arr_main_service_routesRemoteAddress <  SN extends t_serviceName_MainService> =  getIdroutesAndRemoteAddress<SN> extends infer Res ?
Res extends t_arrRouteIdAndRemoteAddress/*t_main_service_idroutesAndRemoteAddress*/ ?  getElementNumberI<idx_remoteAddressFromRouteIdAndRemoteAddress,Res> : never : never 



export type  t_main_service_remoteAddress =  arrToUnion<t_arr_main_service_routesRemoteAddress<t_serviceName_MainService>>

export type getIdxOfRouteFromServiceNameAndIdRoute < SN extends t_serviceName_MainService , R extends t_main_service_idroutes> =
getPropsFromServiceName_ServiceRoutes <SN> extends infer tmp ? 
tmp extends readonly string[] /*t_arr_allRoutes_service[number]*/ ?
getIndexOfElement<R,tmp> extends infer Res ? Res extends number ? Res : never : never : never : never

export type getRouteRemoteAddressFromServiceNameAndIdRoute < SN extends t_serviceName_MainService , R extends t_main_service_idroutes> = 
t_arr_main_service_routesRemoteAddress<SN> extends infer Res ?
Res extends (t_routeIdAndRemoteAddress[idx_remoteAddressFromRouteIdAndRemoteAddress])[] /*t_main_service_remoteAddress*/ ?
getIdxOfRouteFromServiceNameAndIdRoute<SN,R> extends infer Res2 ?
Res2 extends number ? getElemAtIndex<Res2,Res> 
: never : never : never : never  

