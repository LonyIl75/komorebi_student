import { AServiceRequest, ServiceRequestBodyBase, ServiceRequestHeaderBase } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { EmptyInit, haveSerializer, haveSerializerAndEmptyInit } from "@shared/m_json.js";
import { IJson } from "@shared/m_object.js";

export class req_books extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(req_books as unknown as (new (header?: ServiceRequestHeaderBase, body?: ServiceRequestBodyBase) => AServiceRequest) ) ;

    static _getEmptyInit: () =>AServiceRequest= () => {
        return req_books.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => AServiceRequest= () => {
        return req_books._getEmptyInit() ;
    }

    static isTypeof: (obj: haveSerializer<AServiceRequest>) => boolean = (obj:haveSerializer<AServiceRequest>)=>{
        return haveSerializerAndEmptyInit.st_isTypeof(req_books._getEmptyInit(),obj)
    }

    isTypeof = req_books.isTypeof


    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
        super(header,body);

    }

    static fromJson = (json: IJson) : AServiceRequest => {
        return AServiceRequest.fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(json,req_books)
    }
}




export class res_books extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(res_books as unknown as (new (header?: ServiceRequestHeaderBase, body?: ServiceRequestBodyBase) => AServiceRequest) ) ;

    static _getEmptyInit: () =>AServiceRequest= () => {
        return res_books.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => AServiceRequest= () => {
        return res_books._getEmptyInit() ;
    }

    static isTypeof: (obj: haveSerializer<AServiceRequest>) => boolean = (obj:haveSerializer<AServiceRequest>)=>{
        return haveSerializerAndEmptyInit.st_isTypeof(res_books._getEmptyInit(),obj)
    }

    isTypeof = res_books.isTypeof


    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
        super(header,body);

    }

    static fromJson = (json: IJson) : AServiceRequest => {
        return AServiceRequest.fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(json,res_books)
    }
}