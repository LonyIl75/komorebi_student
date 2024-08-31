import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("scrapingServices_Services","AMainService")
const debug_AMainService : Debugger = debug(name_module)


import {  _getIsLocal } from "@/config/envVar.js";
import { getScrapingServicePathServices } from "@/config/pathFolder/srcPath.js";
import { req_login, res_login } from '@/routes/scraping-services/class/utils/Data/ReqResRoute.js';
import { t_clientId, getNewPage, t_opt_value_description, t_mpageTargetIdBrowserId } from '@/utils/browser/BrowsersPool.js';
import { joinFilePath, toFilePath } from '@shared/m_file.js';
import { isEmptyJson, isNotEmptyJson } from '@shared/m_object.js';
import { majFirstChar, dottedName } from '@shared/m_string.js';
import { getScrapingPageUrl, join_pathRoutes } from '@shared/routePath.js';
import { Protocol } from 'puppeteer';
import { __ServiceConfig, f_ServiceConfig } from '../Config/ServiceConfig.js';
import { str_Service, str_Services, str_src } from '../utils/utils.js';
import { _ALoginService } from '../../../../routes/scraping-services/class/Services/AService.js';
import { t_enum_level_0 } from '@/config/pathFolder/enum_path.js';
import { _C_H, _C_R, _C_RA, _C_SN, _C_ServJson, _C_T1, _fnValidateRouteAndAddress, _validateIdHome, _validateRemoteAddress, _validateRoute, _validateRouteAndAddress, _validateServJson, _validateServiceName, FnValidateIdHome, FnValidateRemoteAddress, FnValidateRoute, FnValidateRouteAndAddress, FnValidateServJson, FnValidateServiceName } from '../constraints.js';
import { DatabaseLocalAndRemote } from '@shared/m_database.js';

const prefix_service_name = str_Service
type t_prefix_service_name = typeof prefix_service_name ;

type t_service_login_forclientId = any 

                                                                         
export  function f_AMainService<C_SN extends _validateServiceName , C_FR extends FnValidateRemoteAddress , C_FH extends FnValidateIdHome   ,C_FT1 extends FnValidateRoute, C_FSN extends FnValidateServiceName=FnValidateServiceName ,C_FRA extends FnValidateRouteAndAddress=FnValidateRouteAndAddress , C_FServJson extends FnValidateServJson = FnValidateServJson >( ) { /*console.log("DEBUG_ME",getCurrentLine());*/
    abstract class AMainService<SN extends C_SN  , R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]>  , T1 extends  _C_T1<C_FT1,[SN]> ,RA extends _C_RA<C_FRA,_C_SN_Result>  , ServJson extends _C_ServJson<C_FServJson,_C_SN_Result> = _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])>,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1]) >   {

    
        config :__ServiceConfig<SN,R,H,T1,RA>;
        loginService :any ; //TODO  : AService<SN,str_login> ; //t_service_functions<SN,R>     //t_serviceFromServiceName<SN, keyofMap > //=> LoginService<SN>  
        services : ServJson ={} as any  ; //Exclude<unionArrRoutes<T1>,t_str_login> //getArrRouteOfService<MainService<SN,R,H,T1>
        map_connection : Map<t_clientId,t_service_login_forclientId> = new Map() ; //client_id => cookie
        localAndRemote_database : DatabaseLocalAndRemote<SN>;

            static async getImportClassService<SN extends C_SN , R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]> , T1 extends _C_T1<C_FT1,[SN]> ,RA extends _C_RA<C_FRA,_C_SN_Result> & _validateRouteAndAddress<SN>, _R extends ((keyof _C_ServJson<C_FServJson,_C_SN_Result>) & T1[number])  = ((keyof _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])> ) & T1[number]) , ServJson extends _C_ServJson<C_FServJson,_C_SN_Result> = _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1]) >,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1])>( obj:AMainService<SN ,R,H,T1,RA,ServJson,_C_SN_Result> , id_route : _R ) { /*console.log("DEBUG_ME",getCurrentLine());*/


        
                let _id_route = f_ServiceConfig<C_SN,C_FR,C_FH,C_FT1,C_FSN,C_FRA>().strToStrRoute<SN,T1,_R>(id_route,obj.config);
                let name_module =  obj.getServiceModuleName(_id_route);
        
                let path_module =  obj.getServicePath(_id_route );
                
                const full_path_module = toFilePath(joinFilePath( getScrapingServicePathServices(t_enum_level_0.routes),joinFilePath( path_module , name_module+".js" )))
        
        
                let className = obj.getClassName(_id_route);
                

                let res =  ( async( _full_path_module, _className) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    let m_module = await import(_full_path_module);
                    return new m_module[_className](obj.getAddressOfService(id_route),obj.localAndRemote_database );//TODO add rabbitMQ
                })( full_path_module,className);//.default(id_route)
        
                return res as ServJson[_R] ;
        
            }
        
            /* 
                1- getService instance from map services
                2- call function in this instance with given args return result if function find else null  
            */
            static doServiceFunction<SN extends C_SN , R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]> , T1 extends _C_T1<C_FT1,[SN]> ,RA extends _C_RA<C_FRA,_C_SN_Result> , _R extends ((keyof _C_ServJson<C_FServJson,_C_SN_Result>) & T1[number])  = ((keyof _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])> ) & T1[number]),ServJson extends _C_ServJson<C_FServJson,_C_SN_Result> = _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])>,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1]) >(  obj:AMainService<SN ,R,H,T1,RA,ServJson,_C_SN_Result> , id_route :_R , functionName : string  ,  ...args:any[])  { /*console.log("DEBUG_ME",getCurrentLine());*/
        
                return AMainService.getService( obj, id_route).then( (service : Awaited<ServJson[_R]>  ) =>
                {
                    if (functionName in service  && typeof service[functionName] === 'function') { /*console.log("DEBUG_ME",getCurrentLine());*/
                        return  service[functionName](...args);
                }
                return null 
                })
                
            }
        
            static  getService<SN extends C_SN , R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]> , T1 extends _C_T1<C_FT1,[SN]> ,RA extends _C_RA<C_FRA,_C_SN_Result> , _R extends ((keyof _C_ServJson<C_FServJson,_C_SN_Result>) & T1[number])  = ((keyof _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])> ) & T1[number]),ServJson extends _C_ServJson<C_FServJson,_C_SN_Result> = _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])>,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1]) >(  obj:AMainService<SN,R,H,T1,RA,ServJson,_C_SN_Result> , id_route : _R  ){ /*console.log("DEBUG_ME",getCurrentLine());*/ //classType : { new () : T }       
                return obj.services[id_route] as ServJson[_R];
            
            }
        
            
        //A FAIRE , voir si placer au bon endroit : 

        //getNewPage from browserPool  thanks to client_id  ( and setCookie if cookieFile exist for this client_id ) 
        async getNewPage(client_id : t_clientId , description_page : t_opt_value_description  ):Promise<t_mpageTargetIdBrowserId>{//ICI _mpageTargetIdBrowserId
            if(this.isConnected(client_id)){
                const res_mpageTargetIdBrowserId  = await getNewPage({clientId:client_id}  , description_page )
                const arrCookies :Protocol.Network.Cookie[] = await _ALoginService.getCookieFromFile(client_id,this.config.serviceName as string )
                await res_mpageTargetIdBrowserId.mpage.page.setCookie(...arrCookies)
                return res_mpageTargetIdBrowserId;
            }else{
                throw Error("loginService need to be connected for this service before creating a page  ")
            }
        }
    
        //Call process function of loginService from current mainService  
        async connection(req_data: req_login<any> , res_data: res_login):Promise<t_service_login_forclientId> { //flemme typer :getResTypeFromServiceNameAndRoute<SN,t_str_login> getReqTypeFromServiceNameAndRoute<SN,"login">
            let service_login_forclientId : t_service_login_forclientId = await this.loginService.functions.process(req_data,res_data)
            this.map_connection.set(req_data.header.client_id , service_login_forclientId ) //process :t_routeHandler<SN,t_str_login>
            return service_login_forclientId;
        }

        isConnected(client_id : t_clientId ,){ /*console.log("DEBUG_ME",getCurrentLine());*/
            let res = this.map_connection.get(client_id)?.ConnectionCookie 
            console.log("ConnectionCookie",res)
            return isNotEmptyJson(res) ;
        }

        getServiceName() {
            return this.config.serviceName;
        }

        getAddressOfService(req_add : ((keyof ServJson) & T1[number]) ) : string {
            return this.config.getAddressOfService(req_add);
        }
        
        //getServicePath in file system e.g > Service > ServiceName >  
        getServicePath<T extends string> ( id_route : T) { /*console.log("DEBUG_ME",getCurrentLine());*/
            type _t = SN extends string ? SN : never
            return join_pathRoutes<readonly [typeof str_src,_t ,typeof str_Services ,Capitalize<T> ]> (  [str_src,this.getServiceName() as _t , str_Services, majFirstChar<T>(id_route) ] );
        }

        //ClassName (in file ModuleName ) that is the service definition  
        getClassName<T extends string> ( id_route : T) { /*console.log("DEBUG_ME",getCurrentLine());*/
            type _t = SN extends string ? SN : never 
            return majFirstChar<_t>(this.getServiceName() as _t )+prefix_service_name + majFirstChar<T>(id_route);
        }
        //ModuleName/filename that contain service definition  
        getServiceModuleName<T extends string> ( id_route : T) { /*console.log("DEBUG_ME",getCurrentLine());*/
            return /*dottedName(this.getServiceName()+  */majFirstChar<T>(id_route)//);
        }



        constructor(  config : __ServiceConfig<SN,R,H,T1,RA>, localAndRemote_database : DatabaseLocalAndRemote<SN>  ) { /*console.log("DEBUG_ME",getCurrentLine());*/
            this.config = config;
            //type _t = R extends string ?  ReturnType<typeof getScrapingPageUrl<R,[H]>> :never
            //@ts-ignore
            this.url_main_page =  (getScrapingPageUrl(__ServiceConfig.isLocal() , this.config.remoteAddress ,[this.config.mainAddress]  ))[0] ;
            this.localAndRemote_database = localAndRemote_database ;
        }

        getRemoteDatabase(){ 
            return this.localAndRemote_database.getRemoteDatabase();
        }
        getLocalDatabase(){ 
            return this.localAndRemote_database.getLocalDatabase();
        }
        async waitForConnectionsLocalAndRemoteDatabase(){ 
            return await this.localAndRemote_database.connect()
        }

        url_main_page:string ;

    }

    return AMainService
}
