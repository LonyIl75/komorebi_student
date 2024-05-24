import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule, str_idRouteAndRemoteAddresss } from '@/../shared/str_debug.js';


const name_module :string = "RouterDeclaration"
const debug_scraping : Debugger = debug(getNameModule(`${str_idRouteAndRemoteAddresss}_utils`,name_module))


import { Router } from "express";
import {  isNotLoginRoute } from '@/controller/scraping-services/class/Config/types.js';
import { ServiceConfig, f_ServiceConfig } from '@/controller/scraping-services/class/Config/ServiceConfig.js';
import { IJson } from '@shared/m_object.js';
import { ReqAndResType, getReq, getRes, t_getReq, t_getRes} from '../utils/Data/ReqResRoute.js';
import { getExtractedPropsFromPick, haveSerializerAndEmptyInit, pickAndFilterProps_firstLevelProps } from '@shared/m_json.js';
import { _passAndEmail } from '../utils/Data/DataRoute.js';
import { t_doServiceFunction, MainService } from '@/controller/scraping-services/class/Services/MainService.js';
import { _C_RA, _fnValidateServiceName, _validateIdHome, _validateRemoteAddress, _validateRoute, _validateRouteAndAddress, _validateServiceName, t_args_validateServiceName, FnValidateRouteAndAddress, FnValidateRemoteAddress, FnValidateJsonReqRes, FnValidateRoute, FnValidateServiceName, FnValidateIdHome, _C_H, _C_R, _C_SN, _C_T1, _C_JsonReqRes, _validateJsonReqRes } from '@/controller/scraping-services/class/constraints.js';
import { t_body_scrapingService } from './ScrapingService.js';
import { IJson_ServiceConfig } from '@/controller/scraping-services/class/Config/IJson_ServiceConfig.js';


export  function f_RouterDeclaration<C_SN extends _validateServiceName  , C_FR extends FnValidateRemoteAddress , C_FH extends FnValidateIdHome   ,C_FT1 extends FnValidateRoute, C_FSN extends FnValidateServiceName=FnValidateServiceName ,C_FRA extends FnValidateRouteAndAddress =FnValidateRouteAndAddress, C_FRqRs extends FnValidateJsonReqRes=FnValidateJsonReqRes >( ) { /*console.log("DEBUG_ME",getCurrentLine());*/
    class RouterDeclaration<SN extends C_SN  , R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]>  , T1 extends _C_T1<C_FT1,[SN]>   ,RA extends _C_RA<C_FRA,_C_SN_Result> ,JsonReqRes extends _C_JsonReqRes<C_FRqRs,_C_SN_Result> , _C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1])>  implements t_body_scrapingService<SN,R,H,T1,RA> { 


        router:  Router ;
        routes : JsonReqRes 
        doService : t_doServiceFunction<SN,R,H,T1>;
        config : IJson_ServiceConfig<SN,R,H,T1 ,RA> ;
        
        /*
        Test : create router with a map of handler
        */

        constructor(  body_scrapingService : t_body_scrapingService <SN,R,H,T1,RA >,routesConfig :JsonReqRes ) { /*console.log("DEBUG_ME",getCurrentLine());*/
            this.router = Router();
            this.routes =  routesConfig ; //createJsonAsForEach(Object.values(routesHandler).map((routeHandler : t_routeHandler<SN , any>) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ return  { handler_function : routeHandler }})) as  serviceRoutesHandler<SN>;
            this.doService = body_scrapingService.doService ;
            this.config = body_scrapingService.config ;
            //this.routes = Object.keys(config_parms).map((route:string)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/  //as getUnionRouteOfServiceFromServiceName <SN> ;
        }
        getRouter():Router{
            return this.router ;
        }

        getRoutes(){
            return this.config.routes ;
        }

        getConfig(){
            return this.config ;
        }
        async setRoutes<M extends MainService<SN , R, H ,T1,RA>> (mainService : M) { /*console.log("DEBUG_ME",getCurrentLine());*/

            type t_T1 = M extends MainService<SN , any,any ,infer ArrR,any> ? ArrR : never ;

            return Object.keys(this.routes).forEach(async(str_idRoute:T1 [number]  ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            
                if(!isNotLoginRoute(str_idRoute)){
                    //TODO-IMP:
                    console.log("IS LOGIN ROUTE : " , str_idRoute)
                }
                else{ 
                    const service = await MainService.getService(mainService,str_idRoute) ;
                    for (const nameFunction of service.getNamesOfFunction() ){
                        let fct_route = (_req: IJson , _res:IJson ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/

                                let reqRes = this.routes[str_idRoute]  ;
                                let [req,res]  = [getExtractedPropsFromPick (pickAndFilterProps_firstLevelProps(_req,getReq(reqRes))), getExtractedPropsFromPick (pickAndFilterProps_firstLevelProps(_res, getRes(reqRes)  ))]
                                return this.doService(str_idRoute ,nameFunction, req,res)
                                
                        }

                        let url_idRoute : string = ServiceConfig.strToStrRoute<SN,t_T1> (str_idRoute ,this.config);
                        this.router.get('/'+ url_idRoute, fct_route);
                    }
                }
                
            });
        }
    }
    return RouterDeclaration
    
}

export class RouterDeclaration <SN extends _validateServiceName  , R extends _validateRemoteAddress<SN>  , H extends _validateIdHome<SN>  , T1 extends _validateRoute<SN> ,
RA extends _C_RA<FnValidateRouteAndAddress, _C_SN<FnValidateServiceName,[SN]> & [SN, R, T1]>, 
JsonReqRes extends _C_JsonReqRes<FnValidateJsonReqRes, _C_SN<FnValidateServiceName,[SN]>& [SN, R, T1]> =_C_JsonReqRes<FnValidateJsonReqRes, _C_SN<FnValidateServiceName,[SN]> & [SN, R, T1]>> extends 
f_RouterDeclaration<_validateServiceName,FnValidateRemoteAddress,FnValidateIdHome,FnValidateRoute,FnValidateServiceName,FnValidateRouteAndAddress,FnValidateJsonReqRes>()<SN,R,H,T1,RA,JsonReqRes> {}

