import getCurrentLine from "get-current-line"
import { EmptyInit, AHaveSerializer, haveSerializerAndEmptyInit, t_configObject, t_st_configObject } from "@shared/m_json.js";
import { IJson } from "@shared/m_object.js";
import { _passAndEmail } from "./DataRoute.js";
import { AServiceRequest, ServiceRequestBodyBase, ServiceRequestHeaderBase, t_st_AServiceRequest } from "./ServiceRoute.js";
import { t_clientId, t_browserId, t_targetId, IOptionScraping, OptionScraping } from "@/utils/browser/BrowsersPool.js";
import { df_pipeline_json, t_pipeline_json } from "@shared/m_pipeline.js";
import { t_verifyStatic } from "@shared/type.js";

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

            class _res_main extends AServiceRequest {
                body : ServiceRequestBodyBase
                header : ServiceRequestHeaderBase

                constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
                    super(header,body,_res_main.fromJson);
            
                }
                static fromJson = (json: IJson) : AServiceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_res_main,json)
                }

                getEmptyInit: () => AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return _res_main.getEmptyInit() ;
                }

                isTypeof = _res_main.isTypeof

                static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_res_main ) ;
        

                static getEmptyInit: () =>AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return _res_main.emptyObject.emptyInit() ;
                }

                static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return haveSerializerAndEmptyInit._isTypeof(_res_main.getEmptyInit(),obj)
                }
                static toJson = AServiceRequest.toJson
            
            
            }
            type IResMain = t_verifyStatic<typeof _res_main ,t_st_AServiceRequest,true> 
            export const _ResMain = _res_main  as {
                new (...args:ConstructorParameters<typeof _res_main>): _res_main
            } & IResMain

            export class res_main extends _ResMain {}

            
            class _req_main extends AServiceRequest {

                body : ServiceRequestBodyBase
                header : ServiceRequestHeaderBase
            
                static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_req_main ) ;
            
                static getEmptyInit: () =>AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return _req_main.emptyObject.emptyInit() ;
                }
            
                getEmptyInit: () => AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return _req_main.getEmptyInit() ;
                }
            
                static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return haveSerializerAndEmptyInit._isTypeof(_req_main.getEmptyInit(),obj)
                }
            
                isTypeof = _req_main.isTypeof
            
            
                constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
                    super(header,body,_req_main.fromJson);
            
                }
            
                static fromJson = (json: IJson) : AServiceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_req_main,json)
                }
                
            } ;

            type IReqMain = t_verifyStatic<typeof _req_main ,t_st_AServiceRequest,true> 
            export const _ReqMain = _req_main  as {
                new (...args:ConstructorParameters<typeof _req_main>): _req_main
            } & IReqMain

            export class req_main extends _ReqMain {}

            export interface IReqBodyLogin<L extends _passAndEmail , P extends t_pipeline_json > {
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

                setClientId(client_id : t_clientId):void 
            
            }


            class  _req_body_login<L extends _passAndEmail , P extends t_pipeline_json > extends t_configObject<_req_body_login<L,P>> implements IReqBodyLogin<L,P>  {
            
            
                static emptyObject : EmptyInit< _req_body_login<any,any>>  = new EmptyInit< _req_body_login<any,any>>(_req_body_login) ;
            
                static getEmptyInit: () =>  _req_body_login<any,any>= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return  _req_body_login.emptyObject.emptyInit() ;
                }
            
                getEmptyInit: () =>  _req_body_login<any,any>= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return  _req_body_login.getEmptyInit() ;
                }

                static isTypeof: (obj: AHaveSerializer<t_configObject<_req_body_login<any,any>>>) => boolean = (obj:AHaveSerializer<t_configObject<_req_body_login<any,any>>>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return haveSerializerAndEmptyInit._isTypeof(_req_body_login.getEmptyInit(),obj)
                }

                isTypeof = _req_body_login.isTypeof


                login_data : L ; 
                client_id ?: t_clientId ; 
                optionsScraping : IOptionScraping
                browserId ?: t_browserId 
                targetId ?: t_targetId
                result : IJson
                pipeline :P

                setClientId(client_id : t_clientId){ /*console.log("DEBUG_ME",getCurrentLine());*/
                    this.client_id = client_id ;
                }
            
                /*
                    FilePathSession ?: IJson  ; // puppet repertory path
                    login_data : L ; // needed to login 
                */
            
                constructor( login_data : L =  {... _passAndEmail.df} as L  ,optionsScraping : IOptionScraping =  {...  OptionScraping.df}, pipeline :P = {...df_pipeline_json} as P  ,browserId ?: t_browserId  , targetId ?: t_targetId , result : IJson = {}) { /*console.log("DEBUG_ME",getCurrentLine());*/
                    super( {toJson: _req_body_login.toJson , fromJson: _req_body_login.fromJson});
                    this.optionsScraping = optionsScraping
                    this.login_data = login_data ;
                    this.result = result
                    this.pipeline = pipeline
                    if(browserId)this.browserId = browserId
                    if(targetId)this.targetId = targetId
                }
            
                
            
            
            
                static toJson = (obj: _req_body_login<any,any>):IJson  =>
                {
                    let probablyUndefined : IJson = {}
                    if(obj?.browserId)probablyUndefined.browserId = obj.browserId
                    if(obj?.targetId)probablyUndefined.targetId = obj.targetId
                    return { optionsScraping : {...obj.optionsScraping} , login_data : obj.login_data , result : obj.result,...probablyUndefined}
                }
            
                static fromJson = (json: IJson) :  _req_body_login<any,any> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return new  _req_body_login (  json.login_data , json.optionsScraping ,json?.browserId, json?.targetId ,json.result)
                }
            
            
            } ;

            type IReqbody_login<L extends _passAndEmail , P extends t_pipeline_json > = t_verifyStatic<typeof _req_body_login<L,P> ,t_st_configObject<_req_body_login<_passAndEmail,t_pipeline_json>>,true> 
            export const _Reqbody_login = _req_body_login  as {
                new <L extends _passAndEmail , P extends t_pipeline_json >(...args:ConstructorParameters<typeof _req_body_login<L,P> >): _req_body_login<L,P> 
            } & IReqbody_login<_passAndEmail,t_pipeline_json>

            export class req_body_login<L extends _passAndEmail , P extends t_pipeline_json > extends _Reqbody_login<L,P> {}

            type t_login_ext_AserviceRequest = AServiceRequest<req_body_login<any,any>>
            class _req_login<L extends _passAndEmail =_passAndEmail , P extends t_pipeline_json = t_pipeline_json> extends AServiceRequest<req_body_login<L,P>>  {
            
                body : req_body_login<L,P>
                header : ServiceRequestHeaderBase
            
                static emptyObject : EmptyInit<t_login_ext_AserviceRequest>  = new EmptyInit<t_login_ext_AserviceRequest>(_req_login) ;
            
                static getEmptyInit: () =>t_login_ext_AserviceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return _req_login.emptyObject.emptyInit() ;
                }
            
                getEmptyInit: () => t_login_ext_AserviceRequest = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return _req_login.getEmptyInit() ;
                }

                
                static isTypeof: (obj: AHaveSerializer<t_login_ext_AserviceRequest>) => boolean = (obj:AHaveSerializer<t_login_ext_AserviceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return haveSerializerAndEmptyInit._isTypeof(_req_login.getEmptyInit(),obj)
                }

                isTypeof = _req_login.isTypeof
         
                constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : req_body_login<L,P> = new req_body_login<L,P>()) {
                    super(header,body,_req_login.fromJson);
                    
                }
            
                static fromJson = (json: IJson) : t_login_ext_AserviceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return AServiceRequest.abstract_fromJson<req_body_login<any,any>,ServiceRequestHeaderBase>(_req_login,json)
                }
            }


            type IReq_login<L extends _passAndEmail , P extends t_pipeline_json > = t_verifyStatic<typeof _req_login<L,P> ,t_st_configObject<t_login_ext_AserviceRequest>,true> 
            export const _Req_login = _req_login  as {
                new <L extends _passAndEmail , P extends t_pipeline_json >(...args:ConstructorParameters<typeof _req_login<L,P> >): _req_login<L,P> 
            } & IReq_login<_passAndEmail,t_pipeline_json>


            export class req_login<L extends _passAndEmail =_passAndEmail, P extends t_pipeline_json = t_pipeline_json> extends _Req_login<L,P> {}

            

            class _res_login  extends AServiceRequest {
                body : ServiceRequestBodyBase
                header : ServiceRequestHeaderBase
            
                static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_res_login ) ;
            
                static getEmptyInit: () =>AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return _res_login.emptyObject.emptyInit() ;
                }
            
                getEmptyInit: () => AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return _res_login.getEmptyInit() ;
                }
            
                static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return haveSerializerAndEmptyInit._isTypeof(_res_login.getEmptyInit(),obj)
                }
            
                isTypeof = _res_login.isTypeof
            
            
                constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
                    super(header,body,_res_login.fromJson);
            
                }
            
                static fromJson = (json: IJson) : AServiceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_res_login,json)
                }
                
            
            } ;

            type IRes_login = t_verifyStatic<typeof _res_login ,t_st_AServiceRequest,true> 
            export const _Res_login = _res_login  as {
                new (...args:ConstructorParameters<typeof _res_login >): _res_login 
            } & IRes_login

            export class res_login extends _res_login {}
            