import getCurrentLine from "get-current-line"
import { AServiceRequest, ServiceRequestBodyBase, ServiceRequestHeaderBase, buildSaved, t_st_AServiceRequest } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { EmptyInit, AHaveSerializer, haveSerializerAndEmptyInit } from "@shared/m_json.js";
import { IJson } from "@shared/m_object.js";
import { t_verifyStatic } from "@shared/type.js";



 class _req_startupsMtp extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    getEmptyInit: () => AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _req_startupsMtp.getEmptyInit() ;
    }

    
    isTypeof = _req_startupsMtp.isTypeof

    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = ServiceRequestBodyBase.fromJson({...ServiceRequestBodyBase.df,saved:buildSaved()})) {
        super(header,body,_req_startupsMtp.fromJson);
    }

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_req_startupsMtp ) ;

    static getEmptyInit: () =>AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _req_startupsMtp.emptyObject.emptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return haveSerializerAndEmptyInit._isTypeof(_req_startupsMtp.getEmptyInit(),obj)
    }


    static fromJson = (json: IJson) : AServiceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_req_startupsMtp,json)
    }
 
}

type IReq_startupsMtp = t_verifyStatic<typeof _req_startupsMtp ,t_st_AServiceRequest,true> 
export const _Req_startupsMtp = _req_startupsMtp  as {
    new (...args:ConstructorParameters<typeof _req_startupsMtp >): _req_startupsMtp 
} & IReq_startupsMtp

export class req_startupsMtp extends _Req_startupsMtp {}

class _res_startupsMtp extends AServiceRequest {

    body : ServiceRequestBodyBase
    header : ServiceRequestHeaderBase

    static emptyObject : EmptyInit<AServiceRequest>  = new EmptyInit<AServiceRequest>(_res_startupsMtp) ;

    static getEmptyInit: () =>AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _res_startupsMtp.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => AServiceRequest= () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return _res_startupsMtp.getEmptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<AServiceRequest>) => boolean = (obj:AHaveSerializer<AServiceRequest>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return haveSerializerAndEmptyInit._isTypeof(_res_startupsMtp.getEmptyInit(),obj)
    }

    isTypeof = _res_startupsMtp.isTypeof


    constructor(header : ServiceRequestHeaderBase= new ServiceRequestHeaderBase(),body : ServiceRequestBodyBase = new ServiceRequestBodyBase()) {
        super(header,body,_res_startupsMtp.fromJson);

    }

    static fromJson = (json: IJson) : AServiceRequest =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return AServiceRequest.abstract_fromJson<ServiceRequestBodyBase,ServiceRequestHeaderBase>(_res_startupsMtp,json)
    }
}

type IRes_startupsMtp = t_verifyStatic<typeof _res_startupsMtp ,t_st_AServiceRequest,true> 
export const _Res_startupsMtp = _res_startupsMtp  as {
    new (...args:ConstructorParameters<typeof _res_startupsMtp >): _res_startupsMtp 
} & IRes_startupsMtp


export class res_startupsMtp extends _Res_startupsMtp {}