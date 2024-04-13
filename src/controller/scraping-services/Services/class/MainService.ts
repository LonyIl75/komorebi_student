import { f_MainService as f_SMainService  } from "../../class/Services/MainService.js";
import { validateServiceName, validateRemoteAddress, validateIdHome, validateRoute, validateRouteAndAddress, validateServJson, _C_H, _C_R, FnValidateRemoteAddress, _C_T1, FnValidateIdHome, _C_RA, _C_ServJson, FnValidateRoute, _C_SN, FnValidateRouteAndAddress, FnValidateServiceName, FnValidateServJson } from "./constraints.js";
import { _validateIdHome, _validateRemoteAddress, _validateRoute, _validateRouteAndAddress, _validateServJson, _validateServiceName } from "../../class/constraints.js";

export type t_doServiceFunction<SN extends validateServiceName   , R extends validateRemoteAddress<SN> , H extends validateIdHome<SN>  , T1 extends validateRoute<SN>   ,RA extends validateRouteAndAddress<SN> , ServJson extends validateServJson<SN,R,T1> = validateServJson<SN,R,T1>>= 
 (id_route : ((keyof ServJson) & T1[number]), functionName : string  ,  ...args:any[]) => Promise<any|null>


 export  function f_MainService<C_SN extends validateServiceName , C_FR extends  FnValidateRemoteAddress ,C_FH extends  FnValidateIdHome , C_FT1 extends FnValidateRoute , C_FSN extends FnValidateServiceName=FnValidateServiceName , C_FRA extends FnValidateRouteAndAddress = FnValidateRouteAndAddress, C_FServJson extends FnValidateServJson = FnValidateServJson   >(){
    class MainService<SN extends C_SN  ,R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]>  , T1 extends _C_T1<C_FT1,[SN]> ,RA extends _C_RA<C_FRA,_C_SN_Result> ,ServJson extends _C_ServJson<C_FServJson,_C_SN_Result>,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1]) >  extends f_SMainService<C_SN,C_FR,C_FH,C_FT1,C_FSN,C_FRA,C_FServJson>()<SN,R,H,T1,RA,ServJson,_C_SN_Result>{}
        return MainService
    }
    
    
export class MainService<SN extends validateServiceName  , R extends _C_R<FnValidateRemoteAddress, [SN]> ,
 H extends _C_H<FnValidateIdHome, [SN]>  , T1 extends _C_T1<FnValidateRoute, [SN]> ,
 RA extends _C_RA<FnValidateRouteAndAddress,_C_SN_Result> ,
  ServJson extends _C_ServJson<FnValidateServJson, _C_SN_Result>
  ,_C_SN_Result extends (_C_SN<FnValidateServiceName,[SN]>& [SN, R, T1]) = (_C_SN<FnValidateServiceName,[SN]>& [SN, R, T1]) 
  > extends 
f_MainService<validateServiceName,FnValidateRemoteAddress,FnValidateIdHome,FnValidateRoute,FnValidateServiceName,FnValidateRouteAndAddress,FnValidateServJson>()<SN,R,H,T1,RA,ServJson,_C_SN_Result> {}