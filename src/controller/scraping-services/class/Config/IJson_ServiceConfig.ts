import { IJson } from "@shared/m_object.js";
import { _validateServiceName, _validateRemoteAddress, _validateIdHome, _validateRoute, _validateRouteAndAddress } from "../constraints.js";
import { df_idRoute_home, df, str_rootRepertoryName, t_df_idRoute_home, t_base_id_serviceRoutes, getPatternArrRouteIdAndRemoteAddress, str_remoteAddress, str_mainAddress, str_idRoute_home, str_idRoutes, str_idRouteAndRemoteAddresss, str_doProcessFunctionName, initMap, t_str_rootRepertoryName } from "./types.js";


export  interface _IJson_ServiceConfig<
SN extends _validateServiceName =_validateServiceName,
R extends _validateRemoteAddress<SN> =_validateRemoteAddress<SN> ,
H extends _validateIdHome<SN> = t_df_idRoute_home ,
T1 extends _validateRoute<SN>= t_base_id_serviceRoutes ,
RA extends _validateRouteAndAddress<SN,R,T1> 
//@ts-ignore 
= Readonly<[...initMap<[ ...t_base_id_serviceRoutes ],R>] extends infer A ? A extends _validateRouteAndAddress<SN,R,T1> ? A :never :never> 
>  {
    

    serviceName : SN,
    remoteName : string,
    [str_remoteAddress] : R,
    [str_mainAddress] : string,
    [str_idRoute_home] :H,
    [str_idRoutes] : T1,
    [str_idRouteAndRemoteAddresss] : RA ,// isIterable<T>,
    [str_doProcessFunctionName] ?: string
    [str_rootRepertoryName] ?: string ; 
}
export type t_IJson_ServiceConfig_any = IJson_ServiceConfig<_validateServiceName,_validateRemoteAddress<_validateServiceName>,_validateIdHome<_validateServiceName>,_validateRoute<_validateServiceName>,_validateRouteAndAddress<_validateServiceName>>
export  interface IJson_ServiceConfig<
SN extends _validateServiceName ,
R extends _validateRemoteAddress<SN> ,
H extends _validateIdHome<SN> = t_df_idRoute_home ,
T1 extends _validateRoute<SN> = t_base_id_serviceRoutes ,
RA extends _validateRouteAndAddress<SN,R,T1>
//@ts-ignore
= Readonly<[...initMap<[ ...t_base_id_serviceRoutes ],R>] extends infer A ? A extends _validateRouteAndAddress<SN,R,T1> ? A :never :never> 
> extends _IJson_ServiceConfig<SN,R,H,T1,RA> , IJson {}

export type t_transformRootIdIfAny <T extends string , T2 extends string =t_df_idRoute_home>= T extends T2 ? typeof df[t_str_rootRepertoryName] : T
//TODO incorporate [str_rootRepertoryName] : RootRep in IJson_ServiceConfig generic type and remove this : 
export const transformRootIdIfAny = <T extends string , T2 extends string =t_df_idRoute_home> (idRoute : T,idRoute_home:T2 = df_idRoute_home as T2) :t_transformRootIdIfAny<T,T2>=> {
    //@ts-ignore
    return (idRoute !== idRoute_home ? idRoute:df[str_rootRepertoryName]) 
}
export const getRootRepertoryName = (config : t_IJson_ServiceConfig_any ) => config.rootRepertoryName ==undefined ?  df[str_rootRepertoryName] : config.rootRepertoryName ;
