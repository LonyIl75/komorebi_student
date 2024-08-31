import getCurrentLine from "get-current-line"
import { AServiceRequest, ServiceRequestBodyBase, ServiceRequestHeaderBase, t_st_AServiceRequest } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { EmptyInit, AHaveSerializer, haveSerializerAndEmptyInit } from "@shared/m_json.js";
import { IJson } from "@shared/m_object.js";
import { t_verifyStatic } from "@shared/type.js";



 class _req_main extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    getEmptyInit: () => AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _req_main.getEmptyInit() ;
    }

    
    isTypeof = _req_main.isTypeof

    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
        super(header,body,_req_main.fromJson);
    }

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_req_main ) ;

    static getEmptyInit: () =>AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _req_main.emptyObject.emptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return haveSerializerAndEmptyInit._isTypeof(_req_main.getEmptyInit(),obj)
    }


    static fromJson = (json: IJson) : AServiceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_req_main,json)
    }
 
}

type IReq_main = t_verifyStatic<typeof _req_main ,t_st_AServiceRequest,true> 
export const _Req_main = _req_main  as {
    new (...args:ConstructorParameters<typeof _req_main >): _req_main 
} & IReq_main

export class req_main extends _Req_main {}

class _res_main extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_res_main) ;

    static getEmptyInit: () =>AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _res_main.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _res_main.getEmptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return haveSerializerAndEmptyInit._isTypeof(_res_main.getEmptyInit(),obj)
    }

    isTypeof = _res_main.isTypeof


    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
        super(header,body,_res_main.fromJson);

    }

    static fromJson = (json: IJson) : AServiceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_res_main,json)
    }
}

type IRes_main = t_verifyStatic<typeof _res_main ,t_st_AServiceRequest,true> 
export const _Res_main = _res_main  as {
    new (...args:ConstructorParameters<typeof _res_main >): _res_main 
} & IRes_main


export class res_main extends _Res_main {}