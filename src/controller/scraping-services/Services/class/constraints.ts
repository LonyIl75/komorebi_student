import { Apply, Args, Fn} from "@shared/type.js";
import { t_str_idRoute_home, t_str_idRouteAndRemoteAddresss, t_str_idRoutes, t_str_remoteAddress } from "../../class/Config/types.js";
import { _validateIdHome, _validateRemoteAddress, _validateRoute, _validateRouteAndAddress, _C_JsonReqRes as __C_JsonReqRes , _C_ServJson as __C_ServJson ,_C_RA as __C_RA ,_C_SN as __C_SN, _C_T1 as __C_T1,_C_R as __C_R,_C_H as __C_H, _validateServiceName, _validateServJson, _validateJsonReqRes  } from "../../class/constraints.js";
import { keyofJsonService_1, t_serviceName_MainService, getPropsFromServiceNamePropsName } from "../Config/types.js";
import { AService } from "@/routes/scraping-services/class/Services/AService.js";
import { getPropsFromServiceName_ReqRes } from "@/routes/Router/Services/Config/types.js";

export type validateByServiceName <SN extends t_serviceName_MainService,Props extends  keyofJsonService_1 > =  getPropsFromServiceNamePropsName<SN,Props> 

export type validateServiceName =  t_serviceName_MainService & _validateServiceName
export type C_SN<SN> = SN extends validateServiceName ? SN : never; 

export type validateRemoteAddress<SN extends t_serviceName_MainService > =   validateByServiceName <SN,t_str_remoteAddress> & _validateRemoteAddress<SN>
export type t_args_validateRemoteAddress = [validateServiceName] 
export type t_fnValidateRemoteAddress = Fn<t_args_validateRemoteAddress,_fnValidateRemoteAddress<t_args_validateRemoteAddress>>
export interface FnValidateRemoteAddress extends t_fnValidateRemoteAddress {
    return: _fnValidateRemoteAddress<Args<this>>
}
export type _fnValidateRemoteAddress<Args extends t_args_validateRemoteAddress > = validateRemoteAddress<Args[0]>
export type _C_R< T_Fn extends FnValidateRemoteAddress , T extends t_args_validateRemoteAddress>=  
Apply<T_Fn,T> extends infer A ? A extends __C_R<T_Fn,T> ? A: never: never

export type validateIdHome<SN extends t_serviceName_MainService > =  validateByServiceName <SN,t_str_idRoute_home> & _validateIdHome<SN>
export type t_args_validateIdHome = [validateServiceName] 
export type t_fnValidateIdHome = Fn<t_args_validateIdHome,_fnvalidateIdHome<t_args_validateIdHome>>
export interface FnValidateIdHome extends t_fnValidateIdHome {
    return: _fnvalidateIdHome<Args<this>>
}
export type _fnvalidateIdHome<Args extends t_args_validateIdHome > = validateIdHome<Args[0]>
export type _C_H< T_Fn extends FnValidateIdHome , T extends t_args_validateIdHome>=  
Apply<T_Fn,T> extends infer A ? A extends __C_H<T_Fn,T> ? A: never: never



export type validateRoute<SN extends t_serviceName_MainService > = validateByServiceName <SN,t_str_idRoutes>  & _validateRoute<SN>
export type t_args_validateRoute = [validateServiceName] 
export type t_fnValidateServiceNameValidateRoute = Fn<t_args_validateRoute,_fnvalidateRoute<t_args_validateRoute>>
export interface FnValidateRoute extends t_fnValidateServiceNameValidateRoute {
    return: _fnvalidateRoute<Args<this>>
}
export type _fnvalidateRoute<Args extends t_args_validateRoute > = validateRoute<Args[0]>
export type _C_T1< T_Fn extends FnValidateRoute , T extends t_args_validateRoute>=  
Apply<T_Fn,T> extends infer A ? A extends __C_T1<T_Fn,T> ? A: never: never


export type t_args_validateServiceName=  [validateServiceName] 
export type t_fnValidateServiceName = Fn<t_args_validateServiceName,_fnValidateServiceName<t_args_validateServiceName>>
export interface FnValidateServiceName extends t_fnValidateServiceName {
    return: _fnValidateServiceName<Args<this>>
}

export type _fnValidateServiceName<Args extends t_args_validateServiceName > =
[Args[0],validateRemoteAddress<Args[0]>,validateRoute<Args[0]>]

export type _C_SN< T_Fn extends FnValidateServiceName , T extends t_args_validateServiceName>=  
Apply<T_Fn,T>  extends infer A ? A extends __C_SN<T_Fn,T> ? A: never: never




export type t_param_args = [validateServiceName,validateRemoteAddress<validateServiceName>,validateRoute<validateServiceName>]

export type validateRouteAndAddress<SN extends t_serviceName_MainService > =  
validateByServiceName <SN,t_str_idRouteAndRemoteAddresss> extends infer A ? 
A extends  _validateRouteAndAddress<SN,validateRemoteAddress<SN>,validateRoute<SN>> ? A : never : never


export type t_args_validateRouteAndAddress=  t_param_args

export type t_fnValidateRouteAndAddress = Fn<t_args_validateRouteAndAddress,_fnValidateRouteAndAddress<t_args_validateRouteAndAddress>>
export interface FnValidateRouteAndAddress extends t_fnValidateRouteAndAddress {
    return: _fnValidateRouteAndAddress<Args<this>>
}

export type _fnValidateRouteAndAddress<Args extends t_args_validateRouteAndAddress > = 
validateRouteAndAddress<Args[0]>

export type _C_RA< T_Fn extends FnValidateRouteAndAddress , T extends t_args_validateRouteAndAddress>=  
Apply<T_Fn,T> extends infer A ? A extends __C_RA<T_Fn,T>  ? A : never: never



export type validateServJson<SN extends t_serviceName_MainService ,R extends validateRemoteAddress<SN> ,T1 extends validateRoute<SN>> =  
{[k in T1[number]]:Promise<AService<SN,R,T1,k>>}extends infer A ?  
A extends _validateServJson<SN,R,T1> ? A : never : never


export type t_args_validateServJson = t_param_args
export type t_fnValidateServJson  = Fn<t_args_validateServJson,_fnValidateServJson<t_args_validateServJson>>
export interface FnValidateServJson extends t_fnValidateServJson {
    return: _fnValidateServJson<Args<this>>
}

export type _fnValidateServJson<Args extends t_args_validateServJson > = Args extends [infer SN ,infer R ,infer T1 ]?
SN extends validateServiceName ?  SN extends validateServiceName ? R extends validateRemoteAddress<SN> ? T1 extends validateRoute<SN> ?
 validateServJson<SN,R,T1>: never : never : never : never : never

export type _C_ServJson< T_Fn extends FnValidateServJson , T extends t_args_validateServJson>=  
Apply<T_Fn,T> extends infer A ? A extends __C_ServJson<T_Fn,T>  ? A : never : never 


export type validateReqResByServiceName <SN extends t_serviceName_MainService > =  getPropsFromServiceName_ReqRes<SN> 


export type validateJsonReqRes<SN extends t_serviceName_MainService,T1 extends validateRoute<SN> =validateRoute<SN>>  = getPropsFromServiceName_ReqRes<SN> & _validateJsonReqRes<SN,T1>
export type t_args_validateJsonReqRes = t_param_args
export type t_fnValidateJsonReqRes  = Fn<t_args_validateJsonReqRes,_fnValidateJsonReqRes<t_args_validateJsonReqRes>>
export interface FnValidateJsonReqRes extends t_fnValidateJsonReqRes {
    return: _fnValidateJsonReqRes<Args<this>>
}

export type _fnValidateJsonReqRes<Args extends t_args_validateJsonReqRes > = 
Args extends [infer SN ,infer R ,infer T1 ]?
SN extends validateServiceName ?  SN extends validateServiceName ? R extends validateRemoteAddress<SN> ? T1 extends validateRoute<SN> ?
validateJsonReqRes<SN,T1>: never : never : never : never : never


export type _C_JsonReqRes< T_Fn extends FnValidateJsonReqRes , T extends t_args_validateJsonReqRes>= 
Apply<T_Fn,T> extends infer A ? A extends __C_JsonReqRes<T_Fn,T> ? A : never : never