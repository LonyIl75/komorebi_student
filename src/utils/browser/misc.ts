import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';


const name_module :string = "misc"
const debug_browserPool : Debugger = debug(getNameModule("scraping_services_utils",name_module))



import { Page } from "puppeteer";
import {c_clientBackendBaseUrl, _getIsLocal, t_clientBackendBaseUrl} from "@/config/envVar.js";
import { t_getLocalName, join_pathRoutes } from '@shared/routePath.js';
import { _validateRemoteAddress, _validateServiceName } from '@/controller/scraping-services/class/constraints.js';
import { t_IJson_ServiceConfig_any } from '@/controller/scraping-services/class/Config/IJson_ServiceConfig.js';

type t_returnTo = string|null ;

export function getReturnTo(req :any ):t_returnTo{
    let _returnTo :t_returnTo =null
    if (req.session && req.session.returnTo) { 
        _returnTo = req.session.returnTo;
        delete req.session.returnTo; 
    }
    return _returnTo
}

export function redirectIfNotNull (res:any , returnTo:t_returnTo){ 
    if(returnTo) return res.redirect(returnTo);
    return null;


}



export class LocalConfig< G extends t_getLocalName<string>  > {
    is_local : ()=> boolean ;
    static clientBackendBaseUrl : t_clientBackendBaseUrl = c_clientBackendBaseUrl  ;
    local_prefix : G ; 

    constructor(  local_prefix : G ,is_local: ()=> boolean = _getIsLocal ){
        this.is_local = is_local ;
        this.local_prefix = local_prefix ;
    }

}

// A FAIRE extends with constraints
//getConfigFromServiceName<SN> 
export  const _gereq_mainPage_url = <G extends t_getLocalName<string> , SN extends _validateServiceName , RA extends _validateRemoteAddress<SN> , MainAddress extends string = ""  > ( local_config : LocalConfig<G> ,service_config : t_IJson_ServiceConfig_any  )=>{ 
    return local_config.is_local() ? 
    join_pathRoutes<[G , typeof LocalConfig.clientBackendBaseUrl ]>  ([local_config.local_prefix,LocalConfig.clientBackendBaseUrl ] )  
    :join_pathRoutes<[RA,MainAddress]>([service_config.remoteAddress,service_config.mainAddress] as [RA,MainAddress]  );

}

//TODO : login feature
/*
    1- connect client to remoteService associate with var mainService thanks to data_login information
    2- getNewPage from browserPool , this page will be associate with client_id 
    3- page will go to main_url

*/
/*
import { getPropsFromServiceName_MainService } from '@/routes/Router/Services/types.js';
import { AMainService } from '@/controller/scraping-services/class/Services/AMainService.js';

type getAMainServiceFromServiceName <SN extends t_serviceName_MainService> = AMainService<SN,getRemoteAddressFromMainServiceName<SN>,getPropsFromServiceNamePropsName<SN>,getPropsFromServiceName_ServiceRoutes<SN>,getIdroutesAndRemoteAddress<SN>>

export async function fct_loginRoute<SN extends t_serviceName_MainService> (
    data_login: req_login<any>,p_mainService:Promise<getPropsFromServiceName_MainService<SN>>,main_url:string)
:Promise<[t_loginService<SN> ,t_mpageTargetIdBrowserId]> {//ICI mpageTargetIdBrowserId

    let serviceLogin :t_loginService<SN> ; let res_page :t_mpageTargetIdBrowserId;
    
    [serviceLogin , res_page ] = await (async (_mainService,_req_login , _main_url ) => 
        {
            console.log("_data",_req_login)
            // R extends validateRemoteAddress<SN> , H extends validateIdHome<SN>  , T1 extends validateRoute<SN>,RA extends validateRouteAndAddress<SN>
            type convert_AMainService <SN extends t_serviceName_MainService> =  getAMainServiceFromServiceName<SN> extends infer AMainService_SN ? getPropsFromServiceName_MainService<SN> extends AMainService_SN  ? AMainService_SN : never : never
            const _serviceLogin : t_loginService<SN>  = await (_mainService as convert_AMainService<SN>).connection(_req_login,{} as any ) 
            const _res_page = await (_mainService as convert_AMainService<SN> ).getNewPage(_req_login.header.client_id  , {name:str_connection} ) // A FAIRE extract 
            await _res_page.mpage.page.goto(main_url); //if cannot go to main then connection fail 
            return [_serviceLogin , _res_page]
        }
    )(await p_mainService , data_login,main_url)
    return [serviceLogin , res_page ]
          
  //req.session.ConnectionCookie =  serviceLogin.ConnectionCookie ;return redirectIfNotNull (res,getReturnTo(req))

}*/
