import { t_browserId, t_targetId, t_clientId, df_client_id, IOptionScraping, OptionScraping } from "@/utils/browser/BrowsersPool.js"
import { hours } from "@shared/hours.js"
import { t_configObject, EmptyInit, AHaveSerializer, haveSerializerAndEmptyInit, getReqOrResJsonFromTConfigObj, t_j, t_st_configObject } from "@shared/m_json.js"
import { IJson } from "@shared/m_object.js"
import { df_pipeline_json, t_pipeline_json } from "@shared/m_pipeline.js"
import { removeLastArray, t_function_staticToMember, t_verifyStatic } from "@shared/type.js"

export class ServiceRequestBodyBase extends t_configObject<ServiceRequestBodyBase>{

    browserId ?: t_browserId 
    targetId ?: t_targetId
    optionsScraping : IOptionScraping
    nexts ?: any[]
    result : IJson
    pipeline : t_pipeline_json
    
    constructor(pipeline : t_pipeline_json = {...df_pipeline_json} , optionsScraping : IOptionScraping =  OptionScraping.df ,nexts?: any[] , browserId ?: t_browserId  , targetId ?: t_targetId ,  result : IJson = {}) {
        super({toJson:ServiceRequestBodyBase.toJson , fromJson:ServiceRequestBodyBase.fromJson});
        this.optionsScraping = optionsScraping
        this.result = result
        this.pipeline = pipeline
        if(nexts)this.nexts = nexts
        if(browserId)this.browserId = browserId
        if(targetId)this.targetId = targetId
        
    }
    static getEmptyInit: () =>ServiceRequestBodyBase= () => {
        return ServiceRequestBodyBase.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => ServiceRequestBodyBase= () => {
        return ServiceRequestBodyBase.getEmptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<ServiceRequestBodyBase>) => boolean = (obj:AHaveSerializer<ServiceRequestBodyBase>)=>{
        return haveSerializerAndEmptyInit._isTypeof(ServiceRequestBodyBase.getEmptyInit(),obj)
    }

    isTypeof = ServiceRequestBodyBase.isTypeof

    static emptyObject : EmptyInit<ServiceRequestBodyBase>  = new EmptyInit<ServiceRequestBodyBase>(ServiceRequestBodyBase) ;

    static toJson = (obj:ServiceRequestBodyBase)  =>
    {
        let probablyUndefined : IJson = {}
        if(obj?.nexts)probablyUndefined.nexts = obj.nexts
        if(obj?.browserId)probablyUndefined.browserId = obj.browserId
        if(obj?.targetId)probablyUndefined.targetId = obj.targetId
        return {pipeline  :obj.pipeline, optionsScraping :obj.optionsScraping , result : obj.result,...probablyUndefined} as const 
    }

    static fromJson = (json: IJson) : ServiceRequestBodyBase => {
        return new ServiceRequestBodyBase(json.pipeline , json.optionsScraping,json?.nexts,json?.browserId,json?.targetId,json.result)
    }

    
}



export class ServiceRequestHeaderBase extends t_configObject<ServiceRequestHeaderBase>{

    privacy : ServiceRequestHeaderBase.enum_privacy
    url : string  
    routeName : string
    serviceName : string 
    client_id : t_clientId
    is_streaming : boolean 
    url_toScrap ?:string
    needUpdate:ReturnType<typeof hours.getTimeNow>
    
    isPrivate : boolean
    isStreaming : boolean

    static df = {
        //TODO incorrect serviceName & routeName  
        serviceName : null,
        routeName:null,
        client_id : df_client_id,
        url :"",
        url_toScrap : undefined,
        needUpdate : hours.dayToMilli(7) , 
        //privacy //TODO ?  
        is_streaming: false 
    }
    constructor(serviceName : string = ServiceRequestHeaderBase.df.serviceName , routeName : string = ServiceRequestHeaderBase.df.routeName, client_id : t_clientId =  ServiceRequestHeaderBase.df.client_id , url : string = ServiceRequestHeaderBase.df.url,url_toScrap:string = undefined , privacy:ServiceRequestHeaderBase.enum_privacy = ServiceRequestHeaderBase.getDefault(),is_streaming :boolean = ServiceRequestHeaderBase.df.is_streaming,needUpdate :ReturnType<typeof hours.getTimeNow> = ServiceRequestHeaderBase.df.needUpdate) {
        super({toJson:ServiceRequestHeaderBase.toJson , fromJson:ServiceRequestHeaderBase.fromJson});
        this.serviceName = serviceName
        this.routeName = routeName
        this.privacy = privacy
        this.url = url
        this.client_id = client_id
        this.url_toScrap = url_toScrap
        this.is_streaming = is_streaming
        this.needUpdate = this.is_streaming ? undefined : needUpdate

        this.setIsPrivate()
        this.setIsStreaming()
        
    }
    static getEmptyInit: () =>ServiceRequestHeaderBase= () => {
        return ServiceRequestHeaderBase.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => ServiceRequestHeaderBase= () => {
        return ServiceRequestHeaderBase.getEmptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<ServiceRequestHeaderBase>) => boolean = (obj:AHaveSerializer<ServiceRequestHeaderBase>)=>{
        return haveSerializerAndEmptyInit._isTypeof(ServiceRequestHeaderBase.getEmptyInit(),obj)
    }

    isTypeof = ServiceRequestHeaderBase.isTypeof

    static emptyObject : EmptyInit<ServiceRequestHeaderBase>  = new EmptyInit<ServiceRequestHeaderBase>(ServiceRequestHeaderBase) ;



    static toJson = (obj:ServiceRequestHeaderBase)  =>
    {
        return {serviceName : obj.serviceName ,routeName: obj.routeName,client_id :obj.client_id ,url : obj.url,url_toScrap :obj.url_toScrap,privacy:obj.privacy ,isStreaming : obj.isStreaming, needUpdate : obj.needUpdate} as const 
    }

    static fromJson = (json: IJson) : ServiceRequestHeaderBase => {
        return new ServiceRequestHeaderBase(json.serviceName ,json.routeName ,json.client_id ,json.url,json.url_toScrap,json.privacy,json.isStreaming,json.needUpdate)
    }

    setIsPrivate(){
        this.isPrivate = ServiceRequestHeaderBase.isPrivate(this.privacy)
    }

    setIsStreaming(){
        this.isStreaming = this.is_streaming
    }
    
}
export namespace ServiceRequestHeaderBase  {
    export enum enum_privacy {
        private = "private",
        public = "public"
    }

    export function getDefault(){
        return enum_privacy.public
    }

    export function isPrivate(_privacy : enum_privacy ){
        return _privacy == enum_privacy.private
    }
}




export abstract class  AAServiceRequest <B extends t_configObject<B> = ServiceRequestBodyBase , H extends t_configObject<H>= ServiceRequestHeaderBase >  {
    body : B
    header :H

    abstract getEmptyInit: () => AServiceRequest<B,H>

}

export interface t_st_AServiceRequest<B extends t_configObject<B> = ServiceRequestBodyBase, H extends t_configObject<H>= ServiceRequestHeaderBase> extends t_st_configObject<AServiceRequest<B,H>> {}


export abstract class AServiceRequest<B extends t_configObject<B> = ServiceRequestBodyBase, H extends t_configObject<H>= ServiceRequestHeaderBase> extends t_configObject<AServiceRequest<B,H>> implements AAServiceRequest<B,H> {

    body :  B
    header : H

    constructor(header:H,body:B , fromJson : t_function_staticToMember<typeof AServiceRequest.abstract_fromJson>,toJson : typeof AServiceRequest.toJson = AServiceRequest.toJson ){
        super({toJson:toJson , fromJson:fromJson});
        this.body = body
        this.header = header
        
    }

    getEmptyJson = () => {
        return this.getEmptyInit().toJson()
    }

    static abstract_fromJson = <B extends t_configObject<B> , H extends t_configObject<H>>(_class :  new (...args : [header:H,body:B]) => AServiceRequest<B,H>,json: IJson ) : AServiceRequest<any,any> => {
        return new _class(json.header,json.body )
    }

    static toJson = <B extends t_configObject<B> , H extends t_configObject<H>>(obj:AServiceRequest<B,H>)  =>
    {
            return {body:obj.body.toJson() , header : obj.header.toJson()} as const 
    }

}