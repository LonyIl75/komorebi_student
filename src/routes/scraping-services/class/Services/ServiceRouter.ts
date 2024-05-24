import getCurrentLine from "get-current-line"
import { IJson } from "@shared/m_object.js";
import {FilePathSession} from "@/utils/browser/m_cookie.js" 
import DebugScrapingService, { debug_scrapingServiceKeys } from "./Debug/DebugScrapingService.js";
import { _C_RA, _fnValidateServiceName, _validateIdHome, _validateRemoteAddress, _validateRoute, _validateRouteAndAddress, _validateServiceName, t_args_validateServiceName, FnValidateRouteAndAddress, FnValidateJsonReqRes, _C_JsonReqRes } from "@/controller/scraping-services/class/constraints.js";
import { MainService } from "@/controller/scraping-services/class/Services/MainService.js";
import { ReqAndResType, t_getReq, t_getRes } from "../utils/Data/ReqResRoute.js";
import { t_body_scrapingService } from "./ScrapingService.js";
import { _C_SN, _C_ServJson, FnValidateServJson, FnValidateServiceName } from "@/controller/scraping-services/class/constraints.js";
import { RouterDeclaration } from "./RouterDeclaration.js";



export type t_any_routeHandler = (req:IJson,res:IJson  ) =>  void ;
export type t_routeHandler<_R extends _validateRoute<string>[number] ,
 IConfig extends {[k in _validateRoute<string>[number] ] : ( req:t_getReq<ReqAndResType> ,res:t_getRes<ReqAndResType>) => void}={[k in _validateRoute<string>[number] ] : ( req:t_getReq<ReqAndResType> ,res:t_getRes<ReqAndResType>) => void}>= 
IConfig[_R];


export type serviceRoutesHandler< SN extends _validateServiceName , T1 extends _validateRoute<SN>   > = 
 {[key in T1[number] ] : {handler_function :t_routeHandler<key>}} 

 // the logic is hide in functionalities of {serviceName}Service.ts so the type is the same then the functionalities of {serviceName}Service.ts 

 

 export default class ServiceRouter<SN extends _validateServiceName , R extends  _validateRemoteAddress<SN>, H extends _validateIdHome<SN>  , T1 extends _validateRoute<SN> ,
 FRA extends  FnValidateRouteAndAddress , RA extends _C_RA<FRA, _fnValidateServiceName<t_args_validateServiceName> & [SN, R, T1]>,
 FJson extends FnValidateServJson =FnValidateServJson,
 ServJson extends  _C_ServJson<FJson,(_C_SN<FnValidateServiceName,[SN]>& [SN, R, T1])>  = _C_ServJson<FJson,(_C_SN<FnValidateServiceName,[SN]>& [SN, R, T1])>,
 FRqRs extends FnValidateJsonReqRes=FnValidateJsonReqRes ,
 JsonReqRes extends _C_JsonReqRes<FRqRs,(_C_SN<FnValidateServiceName,[SN]>& [SN, R, T1])> = _C_JsonReqRes<FRqRs,(_C_SN<FnValidateServiceName,[SN]>& [SN, R, T1])>
 ,_RouterDeclaration extends RouterDeclaration<SN,R,H,T1,RA,JsonReqRes> = RouterDeclaration<SN,R,H,T1,RA,JsonReqRes>
 ,_Mainservice extends MainService<SN,R,H,T1,RA,ServJson>   =  MainService<SN,R,H,T1,RA,ServJson> >{



    debug_service : DebugScrapingService<debug_scrapingServiceKeys> ;
    service : _Mainservice ;
    router : RouterDeclaration<SN,R,H,T1,RA>;
    session : any ;// A FAIRE ?login_data


    //constructor( className :string,remoteName :string ,remoteAddress :R  , login_data : IJson , FilePathSession ?: FilePathSession , debug_service ?: DebugScrapingService<debug_scrapingServiceKeys> ) { /*console.log("DEBUG_ME",getCurrentLine());*/

    constructor(service : _Mainservice,body_scrapingService : t_body_scrapingService <SN,R,H,T1,RA> ,routesConfig :JsonReqRes  , login_data : IJson , FilePathSession ?: FilePathSession , debug_service ?: DebugScrapingService<debug_scrapingServiceKeys>   ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        this.service = service ;
        this.router = new RouterDeclaration<SN,R,H,T1,RA>(body_scrapingService,routesConfig);
        this.router.setRoutes(service) ;
        this.debug_service = debug_service ;
        this.session = null ; // TODO 
    }

    getRouterDeclaration(): RouterDeclaration<SN,R,H,T1,RA>{
        return this.router;
    }




}