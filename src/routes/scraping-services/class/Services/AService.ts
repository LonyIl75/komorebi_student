import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("scrapingServices_Services","AService")
const debug_AService : Debugger = debug(name_module)


import {  _getIsLocal } from "@/config/envVar.js";
import {getFileLock, releaseFileLock, t_fileLock} from "@/../shared/m_file.js";

import puppeteer, {  Protocol } from "puppeteer";
import { _passAndEmail } from '@/routes/scraping-services/class/utils/Data/DataRoute.js';
import { req_login } from '@/routes/scraping-services/class/utils/Data/ReqResRoute.js';
import { AServiceRequest, ServiceRequestHeaderBase } from '@/routes/scraping-services/class/utils/Data/ServiceRoute.js';
import { getDfClientIdIfUndefined, clientIdOrBrowserId, tryWithRessourcePage, t_clientId, t_mpageTargetIdBrowserId, IOptionScraping, OptionScraping, fillfctWithOptionScraping, t_optionsScraping, t_jsonScrapIdx, jsonScrapIdx, _t_cst_optionScraping } from '@/utils/browser/BrowsersPool.js';
import { incorrect_cookie, t_connectionCookie, getCookieValue, CookieFilePath, readFileArrCookies, isIncorrect_cookie } from '@/utils/browser/m_cookie.js';
import { DatabaseLocalAndRemote, t_enum_databaseType } from '@shared/m_database.js';
import { IJson, isEmptyJson, isNotEmptyJson } from '@shared/m_object.js';
import { t_function, getReqAndOptFromFct, getDescSubArray } from '@shared/type.js';
import { ServiceConfig } from '../../../../controller/scraping-services/class/Config/ServiceConfig.js';
import { t_any_routeHandler, t_routeHandler } from '@/routes/scraping-services/class/Services/ServiceRouter.js';

import { str_doProcessFunctionName } from '@/controller/scraping-services/class/Config/types.js';
import { JsonWithScrapingComponents, t_ScrapingComponent_any } from '@/utils/scraping/PageParsing/ComponentObject.js';
import { _validateRemoteAddress, _validateRoute, _validateServiceName, t_req_any, t_res_any } from '@/controller/scraping-services/class/constraints.js';
import { t_add_bodyUrl } from '@shared/validate-url/_types.js';
import { str_getLocalFunction } from '../Config/Pipeline/HA/types.js';
import { createAddress } from '@shared/routePath.js';

export const str_process = ServiceConfig.df[str_doProcessFunctionName] 
export type t_str_process = typeof str_process

export type t_service_functions<SN extends _validateServiceName , _R extends T1[number], T1 extends _validateRoute<SN>=_validateRoute<SN>>=
{[str_process] : t_routeHandler<_R> ;}&{[key in string ] : t_any_routeHandler ;}//&{[key in string as key extends "process" ? never : key ] : t_any_routeHandler ;} 



//TODO integrate
export type t_st_AService<SN extends string> = {
    address:  `${_validateRemoteAddress<SN>}/${string}` //A FAIRE : redo
    databaseLocalAndRemote : DatabaseLocalAndRemote<SN>
    service :_AService<SN>
}

export interface IAService<SN extends _validateServiceName,R extends _validateRemoteAddress<SN> , T1 extends _validateRoute<SN>, _R extends T1[number]   , 
Addr extends t_add_bodyUrl<R,string> = t_add_bodyUrl<R,string>,
TServiceF extends t_service_functions<SN,_R,T1> = t_service_functions<SN,_R,T1> 
> {
    address : Addr
    routeName : _R
    databaseLocalAndRemote : DatabaseLocalAndRemote<SN>
    optionsScraping: IOptionScraping

    getNamesOfPipelineFunction() : readonly string[]
    getAddress():Addr
    getDatabaseLocalAndRemote(): DatabaseLocalAndRemote<SN>
    isInFunctions(key : string) : boolean
    setOptionsScraping(optionsScraping: IOptionScraping) : void
    initIfNotSetOptionsScraping(optionsScraping: IOptionScraping) : IOptionScraping
    process( req:Parameters<TServiceF[t_str_process]>[0] & t_req_any ,res:Parameters<TServiceF[t_str_process]>[1] & t_res_any ) : Promise<void>
    getJsonScraping() : t_ScrapingComponent_any
    process_serviceFunction( req:Parameters<TServiceF[t_str_process]>[0] & t_req_any ,res:Parameters<TServiceF[t_str_process]>[1] & t_res_any ) :Promise<t_connectionCookie>
    process_localFunction (   req:Parameters<TServiceF[t_str_process]>[0] & t_req_any ,res:Parameters<TServiceF[t_str_process]>[1] & t_res_any ) :Promise<t_connectionCookie>
    getNamesOfFunction() : readonly string[]
    getServicePipelineFunction(req : Parameters<t_service_functions<SN,_R,T1>[t_str_process]>[0]  ,res:Parameters<t_service_functions<SN,_R,T1>[t_str_process]>[1]  ) : any
    getLocalPipelineFunction(req : Parameters<t_service_functions<SN,_R,T1>[t_str_process]>[0]  ,res:Parameters<t_service_functions<SN,_R,T1>[t_str_process]>[1]  ) : any
    getService():_AService<SN>
}

type t_IAService_1_union_nameFct_ToImplement = "getJsonScraping"
export type IAService_1<
SN extends _validateServiceName ,_R extends  T1[number] , 
R extends _validateRemoteAddress<SN> = _validateRemoteAddress<SN> ,T1 extends _validateRoute<SN>=_validateRoute<SN>,
Addr extends t_add_bodyUrl<R,string> = t_add_bodyUrl<R,string>,
TServiceF extends t_service_functions<SN,_R,T1> = t_service_functions<SN,_R,T1>> =
{[k in t_IAService_1_union_nameFct_ToImplement]:IAService<SN,R,T1,_R,Addr,TServiceF>[k]}




type t_st_service_2_union_nameFct_ToImplement = "service"
export type t_st_service_2<SN extends _validateServiceName> = 
    {[k in t_st_service_2_union_nameFct_ToImplement]:t_st_AService<SN>[k]}

type t_IAService_2_union_nameFct_ToImplement = "getService"
export type IAService_2<
SN extends _validateServiceName ,_R extends  T1[number] , 
R extends _validateRemoteAddress<SN> = _validateRemoteAddress<SN> ,T1 extends _validateRoute<SN>=_validateRoute<SN>,
Addr extends t_add_bodyUrl<R,string> = t_add_bodyUrl<R,string>,
TServiceF extends t_service_functions<SN,_R,T1> = t_service_functions<SN,_R,T1>
> = {[k in t_IAService_2_union_nameFct_ToImplement]:IAService<SN,R,T1,_R,Addr,TServiceF>[k]}
 

type t_st_service_3_union_nameFct_ToImplement = Exclude<keyof t_st_AService<string>,t_st_service_2_union_nameFct_ToImplement>
export type t_st_service_3<SN extends _validateServiceName> = 
    {[k in t_st_service_3_union_nameFct_ToImplement]:t_st_AService<SN>[k]}


type t_IAService_3_union_nameFct_ToImplement = "getNamesOfPipelineFunction"|"getLocalPipelineFunction"|"getServicePipelineFunction"
export type IAService_3<
SN extends _validateServiceName ,_R extends  T1[number] ,
R extends _validateRemoteAddress<SN> = _validateRemoteAddress<SN> ,T1 extends _validateRoute<SN>=_validateRoute<SN>,
Addr extends t_add_bodyUrl<R,string> = t_add_bodyUrl<R,string>,
TServiceF extends t_service_functions<SN,_R,T1> = t_service_functions<SN,_R,T1>
> = {[k in t_IAService_3_union_nameFct_ToImplement]:IAService<SN,R,T1,_R,Addr,TServiceF>[k]}

//TODO Addr
export  abstract class AService<SN extends _validateServiceName,R extends _validateRemoteAddress<SN> , T1 extends _validateRoute<SN>, _R extends T1[number]   , 
Addr extends t_add_bodyUrl<R,string> = t_add_bodyUrl<R,string>,
TServiceF extends t_service_functions<SN,_R,T1> = t_service_functions<SN,_R,T1> 
> implements IAService<SN,R,T1,_R,Addr,TServiceF>{ 

    address : Addr
    routeName : _R
    databaseLocalAndRemote : DatabaseLocalAndRemote<SN>
    //functions :  t_service_functions<SN,R>; //ICI 28
    optionsScraping: IOptionScraping

    abstract getNamesOfPipelineFunction() : readonly string[]

    static getPropsDBFromHeader < Req extends AServiceRequest<any ,ServiceRequestHeaderBase>> (req : Req): keyof DatabaseLocalAndRemote {
        return req.header.isPrivate ? t_enum_databaseType.localDatabase : t_enum_databaseType.remoteDatabase
    }

    getAddress():Addr {
        return this.address
    }

    getDatabaseLocalAndRemote(): DatabaseLocalAndRemote<SN> {
        return this.databaseLocalAndRemote
    }

    //abstract getPropsDBFromHeader (req : Parameters<t_service_functions<SN,R>[t_str_process]>[0]  ) : keyof DatabaseLocalAndRemote<SN>

    isInFunctions(key : string) : boolean {
        return this.getNamesOfPipelineFunction().includes(key)
    }

    constructor(routeName : _R , address :Addr , databaseLocalAndRemote : DatabaseLocalAndRemote<SN> ,optionsScraping: IOptionScraping ={} as any   ) { /*console.log("DEBUG_ME",getCurrentLine());*/
        //@ts-ignore
        this.address = address ;
        this.optionsScraping = {...optionsScraping,...OptionScraping.df};
        this.databaseLocalAndRemote = databaseLocalAndRemote;
        this.routeName = routeName;
        
    }

    setOptionsScraping(optionsScraping: IOptionScraping) { /*console.log("DEBUG_ME",getCurrentLine());*/
        this.optionsScraping = {...this.optionsScraping,...optionsScraping};
    }

    initIfNotSetOptionsScraping(optionsScraping: IOptionScraping) { /*console.log("DEBUG_ME",getCurrentLine());*/
        return  {...this.optionsScraping,...(optionsScraping||{})};
    }

    async process( req:Parameters<TServiceF[t_str_process]>[0] & t_req_any ,res:Parameters<TServiceF[t_str_process]>[1] & t_res_any ) { /*console.log("DEBUG_ME",getCurrentLine());*/ 
        req.body.optionsScraping = this.initIfNotSetOptionsScraping(req.body?.optionsScraping)
        req.header.client_id = getDfClientIdIfUndefined()
        //A FAIRE req.header.url != default  req.header.url better then logical op checking
        req.header.url = req.header.url || createAddress([this.getAddress()],req.header.url);res.header.url = req.header.url;//TODO test 
        const local_result = incorrect_cookie() 
        if(isIncorrect_cookie(local_result))await this.process_serviceFunction( req,res)
        else req.body.result = {...req.body.result,...local_result}
    }

    abstract getJsonScraping() : t_ScrapingComponent_any
        //return json_scrapingJsonType[this.getService().serviceName][this.routeName]
    

    async process_serviceFunction( req:Parameters<TServiceF[t_str_process]>[0] & t_req_any ,res:Parameters<TServiceF[t_str_process]>[1] & t_res_any ) :Promise<t_connectionCookie> {
        type TF = any //TODO : Pipeline
        return ((args_4:TF)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                        return fillfctWithOptionScraping(
                                (...args_3:t_optionsScraping ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                                    req.body.optionsScraping = OptionScraping.cst_optionScraping(args_3)
                                    return ((...args_34 :[t_optionsScraping[t_jsonScrapIdx],TF])=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                                        return ((...args_2:[clientIdOrBrowserId]) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                                            return this.getService().function_serviceName((...args_12:[clientIdOrBrowserId,string])=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                                                const fct_change_args = (res_page : t_mpageTargetIdBrowserId ,...args:any[])=>{ /*console.log("DEBUG_ME",getCurrentLine());*///ICI _mpageTargetIdBrowserId
                                                    args[0].body.browserId = res_page.browserId
                                                    args[0].body.targetId = res_page.targetId
                                                    return args 
                                                }
                                                return  tryWithRessourcePage(...args_12,...args_34,fct_change_args,req,res)
                                            },...args_2)
                                        })({clientId:req.header.client_id}) 
                                    } )(args_3[jsonScrapIdx],args_4)
                                }
                        ,req.body.optionsScraping,new JsonWithScrapingComponents({scrapingComponent:this.getJsonScraping()}))
                    })(this.getServicePipelineFunction(req,res))

    }

    async process_localFunction (   req:Parameters<TServiceF[t_str_process]>[0] & t_req_any ,res:Parameters<TServiceF[t_str_process]>[1] & t_res_any ) :Promise<t_connectionCookie> {
        throw new Error("not implemented")
    }

    static isValidResult(result: IJson): boolean {
        return isNotEmptyJson(result)
    }

    getNamesOfFunction() : readonly string[] {
        return [str_process]
    }

    abstract getServicePipelineFunction(req : Parameters<t_service_functions<SN,_R,T1>[t_str_process]>[0]  ,res:Parameters<t_service_functions<SN,_R,T1>[t_str_process]>[1]  ) : any
    abstract getLocalPipelineFunction(req : Parameters<t_service_functions<SN,_R,T1>[t_str_process]>[0]  ,res:Parameters<t_service_functions<SN,_R,T1>[t_str_process]>[1]  ) : any

    abstract getService():_AService<SN>

      //: t_functionNeedCookieFile 
      //A FAIRE , client_id and service_name not already in ? 
    static async df_localFunction()  {
        return incorrect_cookie()
    }

    //: t_getServiceFunction_ConnectionCookie
    static async df_serviceFunction()  {
            return incorrect_cookie()
    }
    

}



export class _AService<SN extends _validateServiceName=  _validateServiceName > {

    serviceName : SN ;
    constructor(serviceName : SN) { /*console.log("DEBUG_ME",getCurrentLine());*/
        this.serviceName = serviceName;
    }

    async function_serviceName <
    t_funct extends t_function  ,
    _reqAndOpt extends readonly any[] = getReqAndOptFromFct<t_funct>,
    _opt extends  readonly  any[] = _reqAndOpt[1] ,
    _req extends readonly any [] = _reqAndOpt[0],
     _subReq  extends readonly  any[]   = getDescSubArray<_req,1> 
    //ArrArgs extends (_ArrArgs[_desc['length']] extends SN ? _desc : [])  = (_ArrArgs[_desc['length']] extends SN ?_desc : [] )
    >(funct: t_function<any,[..._subReq ,SN]> ,...args:[..._subReq])  { /*console.log("DEBUG_ME",getCurrentLine());*/
        return funct(...args , this.serviceName)//,name_page ?: string,debug_options?:DebuggingOptions )
    }

    async getValueCookieService(client_id: t_clientId ):Promise<Protocol.Network.Cookie[]>{
        type T = typeof _ALoginService.getCookieFromFile<SN> 
        return await this.function_serviceName<T>(_ALoginService.getCookieFromFile<SN>  ,client_id )
    }
   

}

export class _ALoginService  {

    cookie_name : string ;

    constructor(cookie_name:string){ /*console.log("DEBUG_ME",getCurrentLine());*/
        this.cookie_name = cookie_name;
    }


    function_cookieName (funct: Function,...args:any[])  { /*console.log("DEBUG_ME",getCurrentLine());*/
        return funct(...args, this.cookie_name)//,name_page ?: string,debug_options?:DebuggingOptions )
    }

    getLoginCookieValue ( user:string , json_cookiesArr:Protocol.Network.Cookie[]):t_connectionCookie{
        return  this.function_cookieName ( getCookieValue , user , json_cookiesArr )
    }
    
    static async getCookieFromFile<SN extends string = string >(client_id :t_clientId ,service_name:SN ): Promise<Protocol.Network.Cookie[]>{ 
        console.log("getCookieFromFile",client_id,service_name)
        const filePathSession = CookieFilePath.getCookieFilePathFromClientAndService(client_id,service_name)
        const cookieFullFilePath = filePathSession.cookiesFilePath
        const file_lock :t_fileLock = await getFileLock(cookieFullFilePath)
        const json_cookiesArr =  readFileArrCookies(cookieFullFilePath)  
        releaseFileLock(file_lock)
        return json_cookiesArr;

    }

    [str_getLocalFunction]( req:req_login<_passAndEmail>   )  { /*console.log("DEBUG_ME",getCurrentLine());*/ //ICI 18

        return ((client_id:t_clientId , login_data :_passAndEmail) => async(service_name ):Promise<t_connectionCookie> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                const json_cookiesArr = await _ALoginService.getCookieFromFile(client_id,service_name) 
                return this.getLoginCookieValue(  login_data.user , json_cookiesArr )

        })(req.header.client_id,req.body.login_data)
    }

    static isValidResult(result: t_connectionCookie): boolean {
        return AService.isValidResult(result) && !isIncorrect_cookie(result )
    }



}