import { t_browserId, t_targetId, t_clientId, df_client_id, IOptionScraping, OptionScraping } from "@/utils/browser/BrowsersPool.js"
import { hours } from "@shared/hours.js"
import { t_configObject, EmptyInit, haveSerializer, haveSerializerAndEmptyInit, getReqOrResJsonFromTConfigObj } from "@shared/m_json.js"
import { IJson } from "@shared/m_object.js"
import { df_pipeline_json, t_pipeline_json } from "@shared/m_pipeline.js"

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
    static _getEmptyInit: () =>ServiceRequestBodyBase= () => {
        return ServiceRequestBodyBase.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => ServiceRequestBodyBase= () => {
        return ServiceRequestBodyBase._getEmptyInit() ;
    }

    static isTypeof: (obj: haveSerializer<ServiceRequestBodyBase>) => boolean = (obj:haveSerializer<ServiceRequestBodyBase>)=>{
        return haveSerializerAndEmptyInit.st_isTypeof(ServiceRequestBodyBase._getEmptyInit(),obj)
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
    client_id : t_clientId
    is_streaming : boolean 
    url_toScrap ?:string
    needUpdate:ReturnType<typeof hours.getTimeNow>
    
    isPrivate : boolean
    isStreaming : boolean

    static df = {
        routeName:null,//TODO incorrect routeName
        client_id : df_client_id,
        url :"",
        url_toScrap : undefined,
        needUpdate : hours.dayToMilli(7) , 
        //privacy //TODO ?  
        is_streaming: false 
    }
    constructor(routeName : string = ServiceRequestHeaderBase.df.routeName, client_id : t_clientId =  ServiceRequestHeaderBase.df.client_id , url : string = ServiceRequestHeaderBase.df.url,url_toScrap:string = undefined , privacy:ServiceRequestHeaderBase.enum_privacy = ServiceRequestHeaderBase.getDefault(),is_streaming :boolean = ServiceRequestHeaderBase.df.is_streaming,needUpdate :ReturnType<typeof hours.getTimeNow> = ServiceRequestHeaderBase.df.needUpdate) {
        super({toJson:ServiceRequestHeaderBase.toJson , fromJson:ServiceRequestHeaderBase.fromJson});
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
    static _getEmptyInit: () =>ServiceRequestHeaderBase= () => {
        return ServiceRequestHeaderBase.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => ServiceRequestHeaderBase= () => {
        return ServiceRequestHeaderBase._getEmptyInit() ;
    }

    static isTypeof: (obj: haveSerializer<ServiceRequestHeaderBase>) => boolean = (obj:haveSerializer<ServiceRequestHeaderBase>)=>{
        return haveSerializerAndEmptyInit.st_isTypeof(ServiceRequestHeaderBase._getEmptyInit(),obj)
    }

    isTypeof = ServiceRequestHeaderBase.isTypeof

    static emptyObject : EmptyInit<ServiceRequestHeaderBase>  = new EmptyInit<ServiceRequestHeaderBase>(ServiceRequestHeaderBase) ;



    static toJson = (obj:ServiceRequestHeaderBase)  =>
    {
        return {routeName: obj.routeName,client_id :obj.client_id ,url : obj.url,url_toScrap :obj.url_toScrap,privacy:obj.privacy ,isStreaming : obj.isStreaming, needUpdate : obj.needUpdate} as const 
    }

    static fromJson = (json: IJson) : ServiceRequestHeaderBase => {
        return new ServiceRequestHeaderBase(json.routeName ,json.client_id ,json.url,json.url_toScrap,json.privacy,json.isStreaming,json.needUpdate)
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



export interface IAServiceRequest <B extends t_configObject<B> = ServiceRequestBodyBase , H extends t_configObject<H>= ServiceRequestHeaderBase > {
    body :  ReturnType<typeof getReqOrResJsonFromTConfigObj <B>>
    header : ReturnType<typeof getReqOrResJsonFromTConfigObj <H>>
}


export abstract class AServiceRequest<B extends t_configObject<B> = ServiceRequestBodyBase, H extends t_configObject<H>= ServiceRequestHeaderBase> extends t_configObject<AServiceRequest<B,H>>{
    body : B
    header : H

    abstract getEmptyInit: () => AServiceRequest<B,H>


    constructor(header:H,body:B ) {
        super({toJson:AServiceRequest.toJson , fromJson:AServiceRequest.fromJson});
        this.body = body
        this.header = header
        
    }

    getEmptyJson = () => {
        return this.getEmptyInit().toJson()
    }


    static toJson = <B extends t_configObject<B> , H extends t_configObject<H>>(obj:AServiceRequest<B,H>)  =>
    {
        return {body:obj.body.toJson() , header : obj.header.toJson()} as const 
    }

    static fromJson = <B extends t_configObject<B> , H extends t_configObject<H>>(json: IJson, _class :  new (...args : ConstructorParameters<typeof AServiceRequest<B,H>>) => AServiceRequest<B,H> ) : AServiceRequest<any,any> => {
        return new _class(json.header,json.body )
    }
}
