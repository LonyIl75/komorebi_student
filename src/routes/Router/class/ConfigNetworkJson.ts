import { makeOptional } from "@shared/type.js";
import { ReqAndResType, cst_ReqAndResType, getReq, getRes, req_idx, res_idx } from "../../scraping-services/class/utils/Data/ReqResRoute.js";
import { FnValidateJsonReqRes, FnValidateRemoteAddress, FnValidateRoute, FnValidateServiceName, _C_JsonReqRes, _C_R, _C_SN, _C_T1, _validateJsonReqRes, _validateRoute, _validateServiceName } from "@/controller/scraping-services/class/constraints.js";
//import { haveSerializerAndEmptyInit } from "@shared/m_json.js";

export  function f_ServiceReqResType<C_SN extends _validateServiceName ,C_FR extends FnValidateRemoteAddress , C_FT1 extends FnValidateRoute, C_FSN extends FnValidateServiceName=FnValidateServiceName ,C_FRqRs extends FnValidateJsonReqRes=FnValidateJsonReqRes >( ) {
    class ServiceReqResType <SN extends C_SN , R extends _C_R<C_FR,[SN]> ,T1 extends  _C_T1<C_FT1,[SN]> , JsonReqRes extends  _C_JsonReqRes<C_FRqRs,_C_SN_Result> ,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1])  > {
    
    static cst_ServiceReqResType<SN extends C_SN ,R extends _C_R<C_FR,[SN]> ,T1 extends _C_T1<C_FT1,[SN]> , JsonReqRes extends  _C_JsonReqRes<C_FRqRs,_C_SN_Result>, _R extends T1[number] , _JsonReqRes extends JsonReqRes[_R]=JsonReqRes[_R],_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1])  >(reqRes: _JsonReqRes) {
        const r = cst_ReqAndResType(getReq<_JsonReqRes>(reqRes), getRes<_JsonReqRes>(reqRes) ) 
        return r as _JsonReqRes   
    } ;

    static construct_configNetworkJson< SN extends C_SN ,R extends _C_R<C_FR,[SN]> ,T1 extends _C_T1<C_FT1,[SN]> , JsonReqRes extends  _C_JsonReqRes<C_FRqRs,_C_SN_Result>,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1])  > (obj:makeOptional<JsonReqRes>  ,idRoutes : T1 ,jsonReqAndResType_serviceRoutes:JsonReqRes  ){
            let key :T1[number] ;
            let class_reqRes :JsonReqRes[typeof key] ;
            for (const idx in idRoutes){
                key = idRoutes[idx]
                class_reqRes = jsonReqAndResType_serviceRoutes[key];
                obj[key] = ServiceReqResType.cst_ServiceReqResType<SN,R,T1,JsonReqRes,typeof key>(class_reqRes);
            
            }
    }
}
return ServiceReqResType
}

//}
