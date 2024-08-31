import getCurrentLine from "get-current-line"
import { AServiceRequest, ServiceRequestBodyBase, ServiceRequestHeaderBase, buildSaved, t_st_AServiceRequest } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { EmptyInit, AHaveSerializer, haveSerializerAndEmptyInit } from "@shared/m_json.js";
import { IJson } from "@shared/m_object.js";
import { t_verifyStatic } from "@shared/type.js";



 class _req_startupMtp extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    getEmptyInit: () => AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _req_startupMtp.getEmptyInit() ;
    }

    
    isTypeof = _req_startupMtp.isTypeof

    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = ServiceRequestBodyBase.fromJson({...ServiceRequestBodyBase.df,saved:buildSaved()})) {
        super(header,body,_req_startupMtp.fromJson);
    }

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_req_startupMtp ) ;

    static getEmptyInit: () =>AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _req_startupMtp.emptyObject.emptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return haveSerializerAndEmptyInit._isTypeof(_req_startupMtp.getEmptyInit(),obj)
    }


    static fromJson = (json: IJson) : AServiceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_req_startupMtp,json)
    }
 
}

type IReq_startupMtp = t_verifyStatic<typeof _req_startupMtp ,t_st_AServiceRequest,true> 
export const _Req_startupMtp = _req_startupMtp  as {
    new (...args:ConstructorParameters<typeof _req_startupMtp >): _req_startupMtp 
} & IReq_startupMtp

export class req_startupMtp extends _Req_startupMtp {}

class _res_startupMtp extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_res_startupMtp) ;

    static getEmptyInit: () =>AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _res_startupMtp.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _res_startupMtp.getEmptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return haveSerializerAndEmptyInit._isTypeof(_res_startupMtp.getEmptyInit(),obj)
    }

    isTypeof = _res_startupMtp.isTypeof


    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
        super(header,body,_res_startupMtp.fromJson);

    }

    static fromJson = (json: IJson) : AServiceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_res_startupMtp,json)
    }
}

type IRes_startupMtp = t_verifyStatic<typeof _res_startupMtp ,t_st_AServiceRequest,true> 
export const _Res_startupMtp = _res_startupMtp  as {
    new (...args:ConstructorParameters<typeof _res_startupMtp >): _res_startupMtp 
} & IRes_startupMtp


export class res_startupMtp extends _Res_startupMtp {}