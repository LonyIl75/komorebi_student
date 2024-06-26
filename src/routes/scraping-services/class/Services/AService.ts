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

export const str_process = ServiceConfig.df[str_doProcessFunctionName] 
export type t_str_process = typeof str_process

export type t_service_functions<SN extends _validateServiceName , _R extends T1[number], T1 extends _validateRoute<SN>=_validateRoute<SN>>=
{[str_process] : t_routeHandler<_R> ;}&{[key in string ] : t_any_routeHandler ;}//&{[key in string as key extends "process" ? never : key ] : t_any_routeHandler ;} 



//TODO Addr
export  abstract class AService<SN extends _validateServiceName,R extends _validateRemoteAddress<SN> , T1 extends _validateRoute<SN>, _R extends T1[number]   , 
Addr extends t_add_bodyUrl<R,string> = t_add_bodyUrl<R,string>,
TServiceF extends t_service_functions<SN,_R,T1> = t_service_functions<SN,_R,T1> 
> { 
    address : Addr
    str_route : _R 
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

    constructor(str_route : _R , address :Addr , databaseLocalAndRemote : DatabaseLocalAndRemote<SN> ,optionsScraping: IOptionScraping ={} as any   ) {
        //@ts-ignore
        this.address = address ;
        this.optionsScraping = {...optionsScraping,...OptionScraping.df};
        this.databaseLocalAndRemote = databaseLocalAndRemote;
        this.str_route = str_route;
        
    }

    setOptionsScraping(optionsScraping: IOptionScraping) {
        this.optionsScraping = {...this.optionsScraping,...optionsScraping};
    }

    initIfNotSetOptionsScraping(optionsScraping: IOptionScraping) {
        return  {...this.optionsScraping,...(optionsScraping||{})};
    }

    async process( req:Parameters<TServiceF[t_str_process]>[0] & t_req_any ,res:Parameters<TServiceF[t_str_process]>[1] & t_res_any ) { 
        req.body.optionsScraping = this.initIfNotSetOptionsScraping(req.body?.optionsScraping)
        req.header.client_id = getDfClientIdIfUndefined()
        req.header.url = req.header.url/*createAddress([this.getAddress()],req.header.url)*/;res.header.url = req.header.url;//TODO test 
        res.body.result = incorrect_cookie() 
        console.log("res_local",res.body.result)
        if(isIncorrect_cookie(res.body.result )) await this.process_serviceFunction( req,res)
    }

    abstract getJsonScraping() : t_ScrapingComponent_any
        //return json_scrapingJsonType[this.getService().serviceName][this.str_route]
    

    async process_serviceFunction( req:Parameters<TServiceF[t_str_process]>[0] & t_req_any ,res:Parameters<TServiceF[t_str_process]>[1] & t_res_any ) :Promise<t_connectionCookie> {
        type TF = any //TODO : Pipeline
        return ((args_4:TF)=>{
                        return fillfctWithOptionScraping(
                                (...args_3:t_optionsScraping ) =>{
                                    req.body.optionsScraping = OptionScraping.cst_optionScraping(args_3)
                                    return ((...args_34 :[t_optionsScraping[t_jsonScrapIdx],TF])=>{
                                        return ((...args_2:[clientIdOrBrowserId]) => {
                                            return this.getService().function_serviceName((...args_12:[clientIdOrBrowserId,string])=>{
                                                const fct_change_args = (res_page : t_mpageTargetIdBrowserId ,...args:any[])=>{//ICI _mpageTargetIdBrowserId
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
    constructor(serviceName : SN) {
        this.serviceName = serviceName;
    }

    async function_serviceName <
    t_funct extends t_function  ,
    _reqAndOpt extends readonly any[] = getReqAndOptFromFct<t_funct>,
    _opt extends  readonly  any[] = _reqAndOpt[1] ,
    _req extends readonly any [] = _reqAndOpt[0],
     _subReq  extends readonly  any[]   = getDescSubArray<_req,1> 
    //ArrArgs extends (_ArrArgs[_desc['length']] extends SN ? _desc : [])  = (_ArrArgs[_desc['length']] extends SN ?_desc : [] )
    >(funct: t_function<any,[..._subReq ,SN]> ,...args:[..._subReq])  {
        console.log("function",funct)
        console.log("function_serviceName serviceName",this.serviceName)
        return funct(...args , this.serviceName)//,name_page ?: string,debug_options?:DebuggingOptions )
    }

    async getValueCookieService(client_id: t_clientId ):Promise<Protocol.Network.Cookie[]>{
        type T = typeof _ALoginService.getCookieFromFile<SN> 
        return await this.function_serviceName<T>(_ALoginService.getCookieFromFile<SN>  ,client_id )
    }
   

}

export class _ALoginService  {

    cookie_name : string ;

    constructor(cookie_name:string){
        this.cookie_name = cookie_name;
    }


    function_cookieName (funct: Function,...args:any[])  {
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

    getLocalFunction( req:req_login<_passAndEmail>   )  { //ICI 18
        console.log("getLocalFunction",req);

        return ((client_id:t_clientId , login_data :_passAndEmail) => async(service_name ):Promise<t_connectionCookie> => {
                const json_cookiesArr = await _ALoginService.getCookieFromFile(client_id,service_name) 
                return this.getLoginCookieValue(  login_data.user , json_cookiesArr )

        })(req.header.client_id,req.body.login_data)
    }

    static isValidResult(result: t_connectionCookie): boolean {
        return AService.isValidResult(result) && !isIncorrect_cookie(result )
    }



}