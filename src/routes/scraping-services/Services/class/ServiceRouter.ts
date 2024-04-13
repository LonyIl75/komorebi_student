import { t_serviceName_MainService, getUnionRouteOfServiceFromServiceName } from "@/controller/scraping-services/Services/Config/types.js";
import { _validateServiceName, _validateRemoteAddress, _validateIdHome, _validateRoute, _validateRouteAndAddress } from "@/controller/scraping-services/class/constraints.js";
import { _C_H, _C_RA, _C_SN, _C_ServJson, _C_JsonReqRes, _C_T1, _fnValidateServiceName, t_args_validateServiceName, FnValidateIdHome, FnValidateRoute, FnValidateRouteAndAddress, FnValidateServJson, FnValidateServiceName, validateIdHome, FnValidateJsonReqRes, validateRemoteAddress, validateRoute, validateRouteAndAddress, validateServiceName } from "@/controller/scraping-services/Services/class/constraints.js";
import{ FnValidateRouteAndAddress as _FnValidateRouteAndAddress ,t_param_args as _t_param_args, _fnValidateServiceName as __fnValidateServiceName, _C_RA as __C_RA , t_args_validateServiceName as _t_args_validateServiceName } from "@/controller/scraping-services/class/constraints.js";
import { getPropsFromServiceName_MainService } from "@/controller/scraping-services/Services/src/types.js";
import _ServiceRouter from "@/routes/scraping-services/class/Services/ServiceRouter.js"
import { MainService } from "@/controller/scraping-services/Services/class/MainService.js";
import {t_routeHandler as _t_routeHandler ,serviceRoutesHandler as _serviceRoutesHandler } from "@/routes/scraping-services/class/Services/ServiceRouter.js";
import { RouterDeclaration } from "./RouterDeclaration.js";

//TODO-IMP : 
export type t_routeHandler< SN extends validateServiceName , _R extends T1[number] & getUnionRouteOfServiceFromServiceName<SN>, T1 extends validateRoute<SN>=validateRoute<SN>> = 
_t_routeHandler <_R>  //& (( req:getReqTypeFromServiceNameAndRoute<SN,_R> ,res:getResTypeFromServiceNameAndRoute<SN,_R>) => void)


export type serviceRoutesHandler< SN extends t_serviceName_MainService , T1 extends validateRoute<SN>=validateRoute<SN> 
, _df extends _serviceRoutesHandler<SN,T1>= _serviceRoutesHandler<SN,T1>> = 
getUnionRouteOfServiceFromServiceName<SN> extends infer _Key extends getUnionRouteOfServiceFromServiceName<SN> & keyof _df ? 
    _Key extends string ? {[key in _Key ] : {handler_function :t_routeHandler< SN,key> & _df[_Key]}} 
: never : never 

 // the logic is hide in functionalities of {serviceName}Service.ts so the type is the same then the functionalities of {serviceName}Service.ts 
//TODO-IMP ? MainService<SN,R,H,T1,RA> & getPropsFromServiceName_MainService<SN> ??? 
 export default class ServiceRouter<SN extends validateServiceName , R extends  validateRemoteAddress<SN>, H extends _C_H<FnValidateIdHome, [SN]> , T1 extends _C_T1<FnValidateRoute, [SN]> ,
 RA extends _C_RA<FnValidateRouteAndAddress, _C_SN_Result>, 
ServJson extends _C_ServJson<FnValidateServJson, _C_SN_Result> ,
JsonReqRes extends _C_JsonReqRes<FnValidateJsonReqRes, _C_SN_Result> ,
 _RouterDeclaration extends RouterDeclaration<SN,R,H,T1,RA,JsonReqRes,_C_SN_Result> ,
 _Mainservice extends MainService<SN, R, H, T1, RA,ServJson,_C_SN_Result> & getPropsFromServiceName_MainService<SN>,
 _C_SN_Result extends (_C_SN<FnValidateServiceName,[SN]>& [SN, R, T1]) = (_C_SN<FnValidateServiceName,[SN]>& [SN, R, T1]) > extends _ServiceRouter<SN,R,H,T1,FnValidateRouteAndAddress,RA,FnValidateServJson,ServJson,FnValidateJsonReqRes,JsonReqRes,_RouterDeclaration,_Mainservice >{}
