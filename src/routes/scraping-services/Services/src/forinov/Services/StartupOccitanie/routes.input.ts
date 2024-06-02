import getCurrentLine from "get-current-line"
import { AServiceRequest, ServiceRequestBodyBase, ServiceRequestHeaderBase, buildSaved, t_st_AServiceRequest } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { EmptyInit, AHaveSerializer, haveSerializerAndEmptyInit } from "@shared/m_json.js";
import { IJson } from "@shared/m_object.js";
import { t_verifyStatic } from "@shared/type.js";



 class _req_startupOccitanie extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    getEmptyInit: () => AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _req_startupOccitanie.getEmptyInit() ;
    }

    
    isTypeof = _req_startupOccitanie.isTypeof

    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = ServiceRequestBodyBase.fromJson({...ServiceRequestBodyBase.df,saved:buildSaved()})) {
        super(header,body,_req_startupOccitanie.fromJson);
    }

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_req_startupOccitanie ) ;

    static getEmptyInit: () =>AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _req_startupOccitanie.emptyObject.emptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return haveSerializerAndEmptyInit._isTypeof(_req_startupOccitanie.getEmptyInit(),obj)
    }


    static fromJson = (json: IJson) : AServiceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_req_startupOccitanie,json)
    }
 
}

type IReq_startupOccitanie = t_verifyStatic<typeof _req_startupOccitanie ,t_st_AServiceRequest,true> 
export const _Req_startupOccitanie = _req_startupOccitanie  as {
    new (...args:ConstructorParameters<typeof _req_startupOccitanie >): _req_startupOccitanie 
} & IReq_startupOccitanie

export class req_startupOccitanie extends _Req_startupOccitanie {}

class _res_startupOccitanie extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_res_startupOccitanie) ;

    static getEmptyInit: () =>AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _res_startupOccitanie.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _res_startupOccitanie.getEmptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return haveSerializerAndEmptyInit._isTypeof(_res_startupOccitanie.getEmptyInit(),obj)
    }

    isTypeof = _res_startupOccitanie.isTypeof


    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
        super(header,body,_res_startupOccitanie.fromJson);

    }

    static fromJson = (json: IJson) : AServiceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_res_startupOccitanie,json)
    }
}

type IRes_startupOccitanie = t_verifyStatic<typeof _res_startupOccitanie ,t_st_AServiceRequest,true> 
export const _Res_startupOccitanie = _res_startupOccitanie  as {
    new (...args:ConstructorParameters<typeof _res_startupOccitanie >): _res_startupOccitanie 
} & IRes_startupOccitanie


export class res_startupOccitanie extends _Res_startupOccitanie {}