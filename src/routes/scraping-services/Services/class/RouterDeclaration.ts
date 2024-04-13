import {f_RouterDeclaration as f_SRouterDeclaration} from "@/routes/scraping-services/class/Services/RouterDeclaration.js";
import { validateServiceName, validateRemoteAddress, validateIdHome, validateRoute, validateRouteAndAddress, _fnValidateServiceName, FnValidateRouteAndAddress, _C_RA, t_args_validateServiceName, FnValidateIdHome, FnValidateJsonReqRes, FnValidateRemoteAddress, FnValidateRoute, FnValidateServiceName, _C_H, _C_JsonReqRes, _C_R, _C_SN, _C_T1 } from "@/controller/scraping-services/Services/class/constraints.js";

export  function f_RouterDeclaration<C_SN extends validateServiceName  , C_FR extends FnValidateRemoteAddress , C_FH extends FnValidateIdHome   ,C_FT1 extends FnValidateRoute, C_FSN extends FnValidateServiceName=FnValidateServiceName ,C_FRA extends FnValidateRouteAndAddress =FnValidateRouteAndAddress, C_FRqRs extends FnValidateJsonReqRes=FnValidateJsonReqRes >( ) {
    class RouterDeclaration<SN extends C_SN  , R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]>  , T1 extends _C_T1<C_FT1,[SN]>   ,RA extends _C_RA<C_FRA,_C_SN_Result> ,JsonReqRes extends _C_JsonReqRes<C_FRqRs,_C_SN_Result> , _C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1])>  extends f_SRouterDeclaration<C_SN,C_FR,C_FH,C_FT1,C_FSN,C_FRA,C_FRqRs>()<SN,R,H,T1,RA,JsonReqRes,_C_SN_Result> { 
    }
    return RouterDeclaration
}

export class RouterDeclaration <SN extends validateServiceName  , R extends _C_R<FnValidateRemoteAddress, [SN]> , H extends _C_H<FnValidateIdHome, [SN]>  , T1 extends _C_T1<FnValidateRoute, [SN]> ,
RA extends _C_RA<FnValidateRouteAndAddress, _C_SN_Result>, 
JsonReqRes extends _C_JsonReqRes<FnValidateJsonReqRes,_C_SN_Result>,
_C_SN_Result extends (_C_SN<FnValidateServiceName,[SN]>& [SN, R, T1]) = (_C_SN<FnValidateServiceName,[SN]>& [SN, R, T1]) 
> extends 
f_RouterDeclaration<validateServiceName,FnValidateRemoteAddress,FnValidateIdHome,FnValidateRoute,FnValidateServiceName,FnValidateRouteAndAddress,FnValidateJsonReqRes>()<SN,R,H,T1,RA,JsonReqRes,_C_SN_Result> {}

