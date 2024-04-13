import { _C_H, _C_R, _C_RA, _C_ServJson, _C_SN, _C_T1, FnValidateIdHome, FnValidateRemoteAddress, FnValidateRoute, FnValidateRouteAndAddress, FnValidateServiceName, FnValidateServJson, validateIdHome, validateRemoteAddress, validateRoute, validateRouteAndAddress, validateServiceName, validateServJson } from "./constraints.js";
import { f_AMainService as f_SAMainService } from "../../class/Services/AMainService.js";
import { _validateServiceName, _validateRemoteAddress, _validateIdHome, _validateRoute, _validateRouteAndAddress, _validateServJson } from "../../class/constraints.js";


export  function f_AMainService<C_SN extends validateServiceName , C_FR extends  FnValidateRemoteAddress ,C_FH extends  FnValidateIdHome , C_FT1 extends FnValidateRoute , C_FSN extends FnValidateServiceName=FnValidateServiceName , C_FRA extends FnValidateRouteAndAddress = FnValidateRouteAndAddress, C_FServJson extends FnValidateServJson = FnValidateServJson   >(){
    class AMainService<SN extends C_SN  ,R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]>  , T1 extends _C_T1<C_FT1,[SN]> ,RA extends _C_RA<C_FRA,_C_SN_Result> ,
    ServJson extends _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])>=_C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])> ,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1]) 
     >  extends f_SAMainService<C_SN,C_FR,C_FH,C_FT1,C_FSN,C_FRA,C_FServJson>()<SN,R,H,T1,RA,ServJson,_C_SN_Result>{}

        return AMainService
    }

export class AMainService<SN extends validateServiceName  , R extends _C_R<FnValidateRemoteAddress, [SN]> , H extends _C_H<FnValidateIdHome, [SN]>  , 
T1 extends _C_T1<FnValidateRoute, [SN]> ,RA extends _C_RA<FnValidateRouteAndAddress, _C_SN<FnValidateServiceName, [SN]> & [SN, R, T1]> 
, ServJson extends _C_ServJson<FnValidateServJson, _C_SN<FnValidateServiceName, [SN]> & [SN, R, T1]> = _C_ServJson<FnValidateServJson, _C_SN<FnValidateServiceName, [SN]> & [SN, R, T1]>> extends 
f_AMainService<validateServiceName,FnValidateRemoteAddress,FnValidateIdHome,FnValidateRoute,FnValidateServiceName,FnValidateRouteAndAddress,FnValidateServJson>()<SN,R,H,T1,RA,ServJson> {}

