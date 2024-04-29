import { serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js";
import { t_getReq, t_getRes, cst_ReqAndResType, getReq, getRes } from "../../../scraping-services/class/utils/Data/ReqResRoute.js";
import { t_serviceName_MainService, getUnionRouteOfServiceFromServiceName ,getPropsFromServiceName_ServiceRoutes} from "@/controller/scraping-services/Services/Config/types.js";
import { t_json_ReqResType_booksToscrape } from "./booksToscrape/ConfigReqRes.js";

export type t_json_main_service_ReqRes ={
    //#ADD NEW SERVICE HERE
    [serviceName_booksToscrape] : t_json_ReqResType_booksToscrape
}

    
export type getPropsFromServiceName_ReqRes<SN extends t_serviceName_MainService > = t_json_main_service_ReqRes[SN]

export type getReqResTypeFromServiceNameAndRoute <SN extends t_serviceName_MainService ,R extends getUnionRouteOfServiceFromServiceName <SN> > = getPropsFromServiceName_ReqRes<SN>[R]
export type getReqTypeFromServiceNameAndRouteClass <SN extends t_serviceName_MainService ,R extends getUnionRouteOfServiceFromServiceName <SN> > =t_getReq<getReqResTypeFromServiceNameAndRoute<SN,R>>  ;
export type getResTypeFromServiceNameAndRouteClass <SN extends t_serviceName_MainService ,R extends getUnionRouteOfServiceFromServiceName <SN> > = t_getRes<getReqResTypeFromServiceNameAndRoute<SN,R>> ;

export type getReqTypeFromServiceNameAndRoute <SN extends t_serviceName_MainService ,R extends getUnionRouteOfServiceFromServiceName <SN> > = getReqTypeFromServiceNameAndRouteClass<SN,R>["toJson"]  ;
export type getResTypeFromServiceNameAndRoute <SN extends t_serviceName_MainService ,R extends getUnionRouteOfServiceFromServiceName <SN> > = getResTypeFromServiceNameAndRouteClass<SN,R>["toJson"] ;



export const cst_ServiceReqResType = <SN extends t_serviceName_MainService ,R extends getUnionRouteOfServiceFromServiceName <SN> , _Args extends  getReqResTypeFromServiceNameAndRoute<SN,R> =  getReqResTypeFromServiceNameAndRoute<SN,R> >(...args: _Args)  => {
       const r = cst_ReqAndResType(getReq<_Args>(args), getRes<_Args>(args) ) 
       return r as _Args   
} ;
