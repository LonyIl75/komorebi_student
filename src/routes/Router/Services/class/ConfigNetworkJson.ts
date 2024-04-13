import { FnValidateJsonReqRes, FnValidateRemoteAddress, FnValidateRoute, FnValidateServiceName, _C_JsonReqRes, _C_R, _C_SN, _C_T1, validateRoute, validateServiceName } from "@/controller/scraping-services/Services/class/constraints.js";
import { f_ServiceReqResType as f_SServiceReqResType} from "@/routes/Router/class/ConfigNetworkJson.js";

export  function f_ServiceReqResType<C_SN extends validateServiceName ,C_FR extends FnValidateRemoteAddress , C_FT1 extends FnValidateRoute, C_FSN extends FnValidateServiceName=FnValidateServiceName ,C_FRqRs extends FnValidateJsonReqRes=FnValidateJsonReqRes >( ) {
    class ServiceReqResType <SN extends C_SN , R extends _C_R<C_FR,[SN]> ,T1 extends  _C_T1<C_FT1,[SN]> , Args extends  _C_JsonReqRes<C_FRqRs,_C_SN_Result> ,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1])  >  extends f_SServiceReqResType<C_SN,C_FR,C_FT1,C_FSN,C_FRqRs>()<SN,R,T1,Args,_C_SN_Result>{}
    return ServiceReqResType
}
    
export class ServiceReqResType 
<SN extends validateServiceName , R extends _C_R<FnValidateRemoteAddress,[SN]> ,T1 extends  _C_T1<FnValidateRoute,[SN]> ,
 Args extends  _C_JsonReqRes<FnValidateJsonReqRes,_C_SN_Result> ,_C_SN_Result extends (_C_SN<FnValidateServiceName,[SN]>& [SN, R, T1]) = (_C_SN<FnValidateServiceName,[SN]>& [SN, R, T1])  > 
 extends f_ServiceReqResType<validateServiceName,FnValidateRemoteAddress,FnValidateRoute,FnValidateServiceName,FnValidateJsonReqRes>()<SN,R,T1,Args,_C_SN_Result>{}