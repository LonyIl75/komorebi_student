//import { t_url } from "@shared/validate-url/_types.js"
import { AServiceRequest } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js"
import { getPatternArrRouteIdAndRemoteAddress } from "./Config/types.js"
import { AService } from "@/routes/scraping-services/class/Services/AService.js"
import { IJson } from "@shared/m_object.js"
import { Apply, Args, Fn, t_indexable_key } from "@shared/type.js"
import { t_param_body, t_param_req, t_url } from "@shared/validate-url/_types.js"
import { ReqAndResType } from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js"

export type _validateServiceName = string


export type _validateRemoteAddress<SN extends _validateServiceName > =  t_url<{name:SN,tld:string}>
export type t_args_validateRemoteAddress = [_validateServiceName] 
export type t_fnValidateRemoteAddress = Fn<t_args_validateRemoteAddress,_fnValidateRemoteAddress<t_args_validateRemoteAddress>>
export interface FnValidateRemoteAddress extends t_fnValidateRemoteAddress {
    return: _fnValidateRemoteAddress<Args<this>>
}
export type _fnValidateRemoteAddress<Args extends t_args_validateRemoteAddress > = _validateRemoteAddress<Args[0]>
export type _C_R< T_Fn extends FnValidateRemoteAddress , T extends t_args_validateRemoteAddress>=  
Apply<T_Fn,T> extends infer A ? A extends _validateRemoteAddress<T[0]> ? A : never : never



export type _validateIdHome<SN extends _validateServiceName > = string 
export type t_args_validateIdHome = [_validateServiceName] 
export type t_fnValidateIdHome = Fn<t_args_validateIdHome,_fnvalidateIdHome<t_args_validateIdHome>>
export interface FnValidateIdHome extends t_fnValidateIdHome {
    return: _fnvalidateIdHome<Args<this>>
}
export type _fnvalidateIdHome<Args extends t_args_validateIdHome > = _validateIdHome<Args[0]>
export type _C_H< T_Fn extends FnValidateIdHome , T extends t_args_validateIdHome>=  Apply<T_Fn,T> 


export type _validateRoute <SN extends _validateServiceName > = readonly string[]
export type t_args_validateRoute = [_validateServiceName] 
export type t_fnValidateRoute = Fn<t_args_validateRoute,_fnvalidateRoute<t_args_validateRoute>>
export interface FnValidateRoute extends t_fnValidateRoute {
    return: _fnvalidateRoute<Args<this>>
}
export type _fnvalidateRoute<Args extends t_args_validateRoute > = _validateRoute<Args[0]>

export type _C_T1< T_Fn extends FnValidateRoute , T extends t_args_validateRoute>= Apply<T_Fn,T> 



export type t_args_validateServiceName=  [_validateServiceName] 
export type t_fnValidateServiceName = Fn<t_args_validateServiceName,_fnValidateServiceName<t_args_validateServiceName>>
export interface FnValidateServiceName extends t_fnValidateServiceName {
    return: _fnValidateServiceName<Args<this>>
}

export type _fnValidateServiceName<Args extends t_args_validateServiceName > =
[Args[0],_validateRemoteAddress<Args[0]>,_validateRoute<Args[0]>]

export type _C_SN< T_Fn extends FnValidateServiceName , T extends t_args_validateServiceName>= Apply<T_Fn,T>  



export type t_param_args = [_validateServiceName,_validateRemoteAddress<_validateServiceName>,_validateRoute<_validateServiceName>]


export type _validateRouteAndAddress<SN extends _validateServiceName, R extends _validateRemoteAddress<SN>=_validateRemoteAddress<SN> , T extends _validateRoute<SN> = _validateRoute<SN> >  =
getPatternArrRouteIdAndRemoteAddress<T,R> extends infer A ? A extends getPatternArrRouteIdAndRemoteAddress<_validateRoute<string>,_validateRemoteAddress<string>> ? Readonly<A> : never : never

export type t_args_validateRouteAndAddress=  t_param_args
export type t_fnValidateRouteAndAddress = Fn<t_args_validateRouteAndAddress,_fnValidateRouteAndAddress<t_args_validateRouteAndAddress>>
export interface FnValidateRouteAndAddress extends t_fnValidateRouteAndAddress {
    return: _fnValidateRouteAndAddress<Args<this>> 
}

export type _fnValidateRouteAndAddress<Args extends t_args_validateRouteAndAddress > = 
Args[0] extends _validateServiceName ?
Args[1] extends _validateRemoteAddress<Args[0]> ? Args[2] extends _validateRoute<Args[0]> ?
_validateRouteAndAddress<Args[0],Args[1], Args[2]> 
: never : never : never


export type _C_RA< T_Fn extends FnValidateRouteAndAddress , Args extends t_args_validateRouteAndAddress>=  
Args[0] extends _validateServiceName ?
Args[1] extends _validateRemoteAddress<Args[0]> ? Args[2] extends _validateRoute<Args[0]> ?
Apply<T_Fn,Args> extends infer A ? A extends _validateRouteAndAddress<Args[0],Args[1],Args[2]> ? A : never : never
: never : never : never


export type _validateServJson<SN extends _validateServiceName ,R extends _validateRemoteAddress<SN>=_validateRemoteAddress<SN> ,T1 extends _validateRoute<SN>=_validateRoute<SN>> = 
{[k in T1[number]]:Promise<AService<SN,R,T1,k>>}
export type t_args_validateServJson = t_param_args
export type t_fnValidateServJson  = Fn<t_args_validateServJson,_fnValidateServJson<t_args_validateServJson>>
export interface FnValidateServJson extends t_fnValidateServJson {
    return: _fnValidateServJson<Args<this>>
}

export type _fnValidateServJson<Args extends t_args_validateServJson > = 
Args[0] extends _validateServiceName ?
Args[1] extends _validateRemoteAddress<Args[0]> ? Args[2] extends _validateRoute<Args[0]> 
? _validateServJson<Args[0],Args[1],Args[2]>
: never : never : never


export type _C_ServJson< T_Fn extends FnValidateServJson , Args extends t_args_validateServJson>= 
Args[0] extends _validateServiceName ?
Args[1] extends _validateRemoteAddress<Args[0]> ? Args[2] extends _validateRoute<Args[0]> ?
 Apply<T_Fn,Args> extends infer A ? A extends _validateServJson<Args[0],Args[1],Args[2]> ? A : never : never
 : never : never : never


export type t_req_any = AServiceRequest<any,any>
export type t_res_any = AServiceRequest<any,any>

type t_body_jsonReqRes = ReqAndResType<t_req_any,t_res_any>

export type _validateJsonReqRes<SN extends _validateServiceName , T1 extends _validateRoute<SN>=_validateRoute<SN> > = IJson<T1[number],t_body_jsonReqRes>
export type t_args_validateJsonReqRes = t_param_args
export type t_fnValidateJsonReqRes  = Fn<t_args_validateJsonReqRes,_fnValidateJsonReqRes<t_args_validateJsonReqRes>>
export interface FnValidateJsonReqRes extends t_fnValidateJsonReqRes {
    return: _fnValidateJsonReqRes<Args<this>>
}

export type _fnValidateJsonReqRes<Args extends t_args_validateJsonReqRes > = 
Args[0] extends _validateServiceName ?
Args[1] extends _validateRemoteAddress<Args[0]> ? Args[2] extends _validateRoute<Args[0]> 
? _validateJsonReqRes<Args[0],Args[2]>
: never : never : never


export type _C_JsonReqRes< T_Fn extends FnValidateJsonReqRes , Args extends t_args_validateJsonReqRes>= 
Args[0] extends _validateServiceName ?
Args[1] extends _validateRemoteAddress<Args[0]> ? Args[2] extends _validateRoute<Args[0]> ?
 Apply<T_Fn,Args> extends infer A ? A extends _validateJsonReqRes<Args[0],Args[2]> ? A : never : never
 : never : never : never


type fgds = _C_RA<FnValidateRouteAndAddress,["pourdebon","https://www.pourdebon.com", readonly ["login","_","legumes","bouchers"]]>
type fdsxfds =  _validateServJson<string, `http://www.${string}.${string}` | `https://www.${string}.${string}`, _validateRoute<string>>

type fdsfd = _C_ServJson<FnValidateServJson, _fnValidateServiceName<t_args_validateServiceName & ["pourdebon"]> & ["pourdebon","https://www.pourdebon.com", readonly ["login","_","legumes","bouchers"]]>
type vfcxvcx = _fnValidateServJson<t_param_args & _fnValidateServiceName<t_args_validateServiceName & ["pourdebon"]> & ["pourdebon","https://www.pourdebon.com", readonly ["login","_","legumes","bouchers"]]>

type fdsfds = vfcxvcx extends fdsfd ? true : false

//' is not assignable to type '_fnValidateServJson<t_param_args &

/*
type A_ffdsfvd = {
    [x: string]: Promise<AService<any, `http://www.${string}.${string}` | `https://www.${string}.${string}`, _validateRoute<string>, string, `http://www.${string}.${string}/${string}` | `https://www.${string}.${string}/${string}`, t_service_functions<any, string, _validateRoute<string>>>>;
}

type T_ffdsfvd =  {
    login: Promise<AService<any, "https://www.pourdebon.com", _validateRoute<string> & readonly ["login", "_", "legumes", "bouchers"], "login", `https://www.pourdebon.com/${string}`, t_service_functions<any, "login", _validateRoute<string> & readonly ["login", "_", "legumes", "bouchers"]>>>;
    _: Promise<AService<any, "https://www.pourdebon.com", _validateRoute<string> & readonly ["login", "_", "legumes", "bouchers"], "_", `https://www.pourdebon.com/${string}`, t_service_functions<any, "_", _validateRoute<string> & readonly ["login", "_", "legumes", "bouchers"]>>>;
    legumes: Promise<AService<any, "https://www.pourdebon.com", _validateRoute<string> & readonly ["login", "_", "legumes", "bouchers"], "legumes", `https://www.pourdebon.com/${string}`, t_service_functions<any, "legumes", _validateRoute<string> & readonly ["login", "_", "legumes", "bouchers"]>>>;
    bouchers: Promise<AService<any, "https://www.pourdebon.com", _validateRoute<string> & readonly ["login", "_", "legumes", "bouchers"], "bouchers", `https://www.pourdebon.com/${string}`, t_service_functions<any, "bouchers", _validateRoute<string> & readonly ["login", "_", "legumes", "bouchers"]>>>;
}*/