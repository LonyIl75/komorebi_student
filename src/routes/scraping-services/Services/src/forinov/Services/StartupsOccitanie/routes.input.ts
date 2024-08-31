import getCurrentLine from "get-current-line"
import { AServiceRequest, ServiceRequestBodyBase, ServiceRequestHeaderBase, buildSaved, t_st_AServiceRequest } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { EmptyInit, AHaveSerializer, haveSerializerAndEmptyInit } from "@shared/m_json.js";
import { IJson } from "@shared/m_object.js";
import { t_verifyStatic } from "@shared/type.js";



 class _req_startupsOccitanie extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    getEmptyInit: () => AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _req_startupsOccitanie.getEmptyInit() ;
    }

    
    isTypeof = _req_startupsOccitanie.isTypeof

    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = ServiceRequestBodyBase.fromJson({...ServiceRequestBodyBase.df,saved:buildSaved()})) {
        super(header,body,_req_startupsOccitanie.fromJson);
    }

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_req_startupsOccitanie ) ;

    static getEmptyInit: () =>AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _req_startupsOccitanie.emptyObject.emptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return haveSerializerAndEmptyInit._isTypeof(_req_startupsOccitanie.getEmptyInit(),obj)
    }


    static fromJson = (json: IJson) : AServiceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_req_startupsOccitanie,json)
    }
 
}

type IReq_startupsOccitanie = t_verifyStatic<typeof _req_startupsOccitanie ,t_st_AServiceRequest,true> 
export const _Req_startupsOccitanie = _req_startupsOccitanie  as {
    new (...args:ConstructorParameters<typeof _req_startupsOccitanie >): _req_startupsOccitanie 
} & IReq_startupsOccitanie

export class req_startupsOccitanie extends _Req_startupsOccitanie {}

class _res_startupsOccitanie extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_res_startupsOccitanie) ;

    static getEmptyInit: () =>AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _res_startupsOccitanie.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _res_startupsOccitanie.getEmptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return haveSerializerAndEmptyInit._isTypeof(_res_startupsOccitanie.getEmptyInit(),obj)
    }

    isTypeof = _res_startupsOccitanie.isTypeof


    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
        super(header,body,_res_startupsOccitanie.fromJson);

    }

    static fromJson = (json: IJson) : AServiceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_res_startupsOccitanie,json)
    }
}

type IRes_startupsOccitanie = t_verifyStatic<typeof _res_startupsOccitanie ,t_st_AServiceRequest,true> 
export const _Res_startupsOccitanie = _res_startupsOccitanie  as {
    new (...args:ConstructorParameters<typeof _res_startupsOccitanie >): _res_startupsOccitanie 
} & IRes_startupsOccitanie


export class res_startupsOccitanie extends _Res_startupsOccitanie {}