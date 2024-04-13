
import { validateServiceName, validateRemoteAddress, validateIdHome, validateRoute, validateRouteAndAddress, _C_H, _C_R, _C_RA, _C_T1, FnValidateIdHome, FnValidateRemoteAddress, FnValidateRoute, _C_SN, FnValidateServiceName, FnValidateRouteAndAddress } from "./constraints.js";
import { f_ServiceConfig as f_SServiceConfig, IServiceConfig as _IServiceConfig } from "../../class/Config/ServiceConfig.js";
import { _validateIdHome, _validateRemoteAddress, _validateRoute, _validateRouteAndAddress } from "../../class/constraints.js";



export interface IServiceConfig<SN extends validateServiceName  , R extends validateRemoteAddress<SN> , H extends validateIdHome<SN> , T1 extends validateRoute<SN> ,RA extends validateRouteAndAddress<SN>  &  _validateRouteAndAddress<SN,R,T1> > extends _IServiceConfig<SN , R  , H , T1,RA >{}





export function f_ServiceConfig<C_SN extends validateServiceName , C_FR extends  FnValidateRemoteAddress ,C_FH extends  FnValidateIdHome , C_FT1 extends FnValidateRoute , C_FSN extends FnValidateServiceName=FnValidateServiceName , C_FRA extends FnValidateRouteAndAddress = FnValidateRouteAndAddress  >(){
        class ServiceConfig<SN extends C_SN  ,R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]>  , T1 extends _C_T1<C_FT1,[SN]> ,RA extends _C_RA<C_FRA,_C_SN_Result>  ,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1])>  extends f_SServiceConfig<C_SN,C_FR,C_FH,C_FT1,C_FSN,C_FRA>()<SN,R,H,T1,RA,_C_SN_Result>{}
        return ServiceConfig
    }