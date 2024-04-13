import { AServiceRequest, ServiceRequestBodyBase, ServiceRequestHeaderBase } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { EmptyInit, haveSerializer, haveSerializerAndEmptyInit } from "@shared/m_json.js";
import { IJson } from "@shared/m_object.js";


export class req_bouchers extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(req_bouchers as unknown as (new (header?: ServiceRequestHeaderBase, body?: ServiceRequestBodyBase) => AServiceRequest) ) ;

    static _getEmptyInit: () =>AServiceRequest= () => {
        return req_bouchers.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => AServiceRequest= () => {
        return res_bouchers._getEmptyInit() ;
    }

    static isTypeof: (obj: haveSerializer<AServiceRequest>) => boolean = (obj:haveSerializer<AServiceRequest>)=>{
        return haveSerializerAndEmptyInit.st_isTypeof(req_bouchers._getEmptyInit(),obj)
    }

    isTypeof = req_bouchers.isTypeof


    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
        super(header,body);

    }

    static fromJson = (json: IJson) : AServiceRequest => {
        return AServiceRequest.fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(json,req_bouchers)
    }
}



export class res_bouchers extends AServiceRequest  {
    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(res_bouchers as unknown as (new (header?: ServiceRequestHeaderBase, body?: ServiceRequestBodyBase) => AServiceRequest) ) ;

    static _getEmptyInit: () =>AServiceRequest= () => {
        return res_bouchers.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => AServiceRequest= () => {
        return res_bouchers._getEmptyInit() ;
    }

    static isTypeof: (obj: haveSerializer<AServiceRequest>) => boolean = (obj:haveSerializer<AServiceRequest>)=>{
        return haveSerializerAndEmptyInit.st_isTypeof(res_bouchers._getEmptyInit(),obj)
    }

    isTypeof = res_bouchers.isTypeof


    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
        super(header,body);

    }

    static fromJson = (json: IJson) : AServiceRequest => {
        return AServiceRequest.fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(json,res_bouchers)
    }
}