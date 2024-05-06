import { AServiceRequest, ServiceRequestBodyBase, ServiceRequestHeaderBase, t_st_AServiceRequest } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { EmptyInit, AHaveSerializer, haveSerializerAndEmptyInit } from "@shared/m_json.js";
import { IJson } from "@shared/m_object.js";
import { t_verifyStatic } from "@shared/type.js";



 class _req_books extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    getEmptyInit: () => AServiceRequest= () => {
        return _req_books.getEmptyInit() ;
    }

    
    isTypeof = _req_books.isTypeof

    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
        super(header,body,_req_books.fromJson);
    }

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_req_books ) ;

    static getEmptyInit: () =>AServiceRequest= () => {
        return _req_books.emptyObject.emptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{
        return haveSerializerAndEmptyInit._isTypeof(_req_books.getEmptyInit(),obj)
    }


    static fromJson = (json: IJson) : AServiceRequest => {
        return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_req_books,json)
    }
 
}

type IReq_books = t_verifyStatic<typeof _req_books ,t_st_AServiceRequest,true> 
export const _Req_books = _req_books  as {
    new (...args:ConstructorParameters<typeof _req_books >): _req_books 
} & IReq_books

export class req_books extends _Req_books {}

class _res_books extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_res_books) ;

    static getEmptyInit: () =>AServiceRequest= () => {
        return _res_books.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => AServiceRequest= () => {
        return _res_books.getEmptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{
        return haveSerializerAndEmptyInit._isTypeof(_res_books.getEmptyInit(),obj)
    }

    isTypeof = _res_books.isTypeof


    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
        super(header,body,_res_books.fromJson);

    }

    static fromJson = (json: IJson) : AServiceRequest => {
        return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_res_books,json)
    }
}

type IRes_books = t_verifyStatic<typeof _res_books ,t_st_AServiceRequest,true> 
export const _Res_books = _res_books  as {
    new (...args:ConstructorParameters<typeof _res_books >): _res_books 
} & IRes_books


export class res_books extends _Res_books {}