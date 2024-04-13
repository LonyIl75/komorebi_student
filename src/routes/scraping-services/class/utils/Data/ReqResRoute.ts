import { EmptyInit, haveSerializer, haveSerializerAndEmptyInit, t_configObject } from "@shared/m_json.js";
import { IJson } from "@shared/m_object.js";
import { _passAndEmail } from "./DataRoute.js";
import { AServiceRequest, ServiceRequestBodyBase, ServiceRequestHeaderBase } from "./ServiceRoute.js";
import { t_clientId, t_browserId, t_targetId, IOptionScraping, OptionScraping } from "@/utils/browser/BrowsersPool.js";
import { df_pipeline_json, t_pipeline_json } from "@shared/m_pipeline.js";

            export type ReqAndResType <Req extends any = any , Res extends any = any> = readonly [Req,Res] ;
            export const cst_ReqAndResType = <Req extends any = any , Res extends any = any>(req: Req, res: Res) : ReqAndResType<Req,Res> => [req,res] ;
            export type t_req_idx = 0 ;
            export type t_res_idx = 1 ;

            export const req_idx :t_req_idx = 0 ;
            export const res_idx :t_res_idx = 1 ;
            export type t_getReq <RAR extends ReqAndResType >=  RAR[t_req_idx] ;
            export const getReq =  <RAR extends ReqAndResType>(reqAndRes : RAR) :t_getReq<RAR> => ((reqAndRes[req_idx]) as any) ;
            export type t_getRes <RAR extends ReqAndResType>=  RAR[t_res_idx] ;
            export const getRes = <RAR extends ReqAndResType>(reqAndRes : RAR) :t_getRes<RAR> => ((reqAndRes[res_idx]) as any) ;

            export type EmptyReqAndResType = ReqAndResType<never,never> ;


            //Describe type that is extended by __res__ of each route for each service (../${service_name}/config.ts )

            //A FAIRE - : merge with Req thanks to ReqResType

            export class res_main extends AServiceRequest {

                body : ServiceRequestBodyBase
                header : ServiceRequestHeaderBase
            
                static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(res_main as unknown as (new (header?: ServiceRequestHeaderBase, body?: ServiceRequestBodyBase) => AServiceRequest) ) ;
            
                static _getEmptyInit: () =>AServiceRequest= () => {
                    return res_main.emptyObject.emptyInit() ;
                }
            
                getEmptyInit: () => AServiceRequest= () => {
                    return res_main._getEmptyInit() ;
                }
            
                static isTypeof: (obj: haveSerializer<AServiceRequest>) => boolean = (obj:haveSerializer<AServiceRequest>)=>{
                    return haveSerializerAndEmptyInit.st_isTypeof(res_main._getEmptyInit(),obj)
                }
            
                isTypeof = res_main.isTypeof
            
            
                constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
                    super(header,body);
            
                }
            
                static fromJson = (json: IJson) : AServiceRequest => {
                    return AServiceRequest.fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(json,res_main)
                }
                
            } ;
            
            export class req_main extends AServiceRequest {

                body : ServiceRequestBodyBase
                header : ServiceRequestHeaderBase
            
                static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(req_main as unknown as (new (header?: ServiceRequestHeaderBase, body?: ServiceRequestBodyBase) => AServiceRequest) ) ;
            
                static _getEmptyInit: () =>AServiceRequest= () => {
                    return req_main.emptyObject.emptyInit() ;
                }
            
                getEmptyInit: () => AServiceRequest= () => {
                    return req_main._getEmptyInit() ;
                }
            
                static isTypeof: (obj: haveSerializer<AServiceRequest>) => boolean = (obj:haveSerializer<AServiceRequest>)=>{
                    return haveSerializerAndEmptyInit.st_isTypeof(req_main._getEmptyInit(),obj)
                }
            
                isTypeof = req_main.isTypeof
            
            
                constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
                    super(header,body);
            
                }
            
                static fromJson = (json: IJson) : AServiceRequest => {
                    return AServiceRequest.fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(json,req_main)
                }
                
            } ;

            export class  req_body_login<L extends _passAndEmail , P extends t_pipeline_json > extends t_configObject< req_body_login<L,P>>  {
            
            
                static emptyObject : EmptyInit< req_body_login<any,any>>  = new EmptyInit< req_body_login<any,any>>(req_body_login) ;
            
                static _getEmptyInit: () =>  req_body_login<any,any>= () => {
                    return  req_body_login.emptyObject.emptyInit() ;
                }
            
                getEmptyInit: () =>  req_body_login<L,P>= () => {
                    return  req_body_login._getEmptyInit() ;
                }

                static isTypeof: (obj: haveSerializer<t_configObject<req_body_login<any,any>>>) => boolean = (obj:haveSerializer<t_configObject<req_body_login<any,any>>>)=>{
                    return haveSerializerAndEmptyInit.st_isTypeof(req_body_login._getEmptyInit(),obj)
                }

                isTypeof = req_body_login.isTypeof


                login_data : L ; 
                client_id ?: t_clientId ; 
                optionsScraping : IOptionScraping
                browserId ?: t_browserId 
                targetId ?: t_targetId
                result : IJson
                pipeline :P
            
                /*
                    FilePathSession ?: IJson  ; // puppet repertory path
                    login_data : L ; // needed to login 
                */
            
                constructor( login_data : L =  {... _passAndEmail.df} as L  ,optionsScraping : IOptionScraping =  {...  OptionScraping.df}, pipeline :P = {...df_pipeline_json} as P  ,browserId ?: t_browserId  , targetId ?: t_targetId , result : IJson = {}) {
                    super( {toJson: req_body_login.toJson , fromJson: req_body_login.fromJson});
                    this.optionsScraping = optionsScraping
                    this.login_data = login_data ;
                    this.result = result
                    this.pipeline = pipeline
                    if(browserId)this.browserId = browserId
                    if(targetId)this.targetId = targetId
                }
            
                setClientId(client_id : t_clientId){
                    this.client_id = client_id ;
                }
            
            
            
                static toJson = (obj: req_body_login<any,any>):IJson  =>
                {
                    let probablyUndefined : IJson = {}
                    if(obj?.browserId)probablyUndefined.browserId = obj.browserId
                    if(obj?.targetId)probablyUndefined.targetId = obj.targetId
                    return { optionsScraping : {...obj.optionsScraping} , login_data : obj.login_data , result : obj.result,...probablyUndefined}
                }
            
                static fromJson = (json: IJson) :  req_body_login<any,any> => {
                    return new  req_body_login (  json.login_data , json.optionsScraping ,json?.browserId, json?.targetId ,json.result)
                }
            
            
            } ;
            type t_login_ext_AserviceRequest = AServiceRequest<req_body_login<any,any>>
            export class req_login<L extends _passAndEmail , P extends t_pipeline_json = t_pipeline_json> extends AServiceRequest<req_body_login<L,P>>  {
            
                body : req_body_login<L,P>
                header : ServiceRequestHeaderBase
            
                static emptyObject : EmptyInit<t_login_ext_AserviceRequest>  = new EmptyInit<t_login_ext_AserviceRequest>(req_login) ;
            
                static _getEmptyInit: () =>t_login_ext_AserviceRequest= () => {
                    return req_login.emptyObject.emptyInit() ;
                }
            
                getEmptyInit: () => t_login_ext_AserviceRequest = () => {
                    return req_login._getEmptyInit() ;
                }

                
                static isTypeof: (obj: haveSerializer<t_login_ext_AserviceRequest>) => boolean = (obj:haveSerializer<t_login_ext_AserviceRequest>)=>{
                    return haveSerializerAndEmptyInit.st_isTypeof(req_login._getEmptyInit(),obj)
                }

                isTypeof = req_login.isTypeof
         
                constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : req_body_login<L,P> = new req_body_login<L,P>()) {
                    super(header,body);
                    
                }
            
                static fromJson = (json: IJson) : t_login_ext_AserviceRequest => {
                    return AServiceRequest.fromJson<req_body_login<any,any>,ServiceRequestHeaderBase>(json,req_login)
                }
            }
            

            export class  res_login  extends AServiceRequest {
                body : ServiceRequestBodyBase
                header : ServiceRequestHeaderBase
            
                static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(res_login as unknown as (new (header?: ServiceRequestHeaderBase, body?: ServiceRequestBodyBase) => AServiceRequest) ) ;
            
                static _getEmptyInit: () =>AServiceRequest= () => {
                    return res_login.emptyObject.emptyInit() ;
                }
            
                getEmptyInit: () => AServiceRequest= () => {
                    return res_login._getEmptyInit() ;
                }
            
                static isTypeof: (obj: haveSerializer<AServiceRequest>) => boolean = (obj:haveSerializer<AServiceRequest>)=>{
                    return haveSerializerAndEmptyInit.st_isTypeof(res_login._getEmptyInit(),obj)
                }
            
                isTypeof = res_login.isTypeof
            
            
                constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
                    super(header,body);
            
                }
            
                static fromJson = (json: IJson) : AServiceRequest => {
                    return AServiceRequest.fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(json,req_main)
                }
                
            
            } ;
