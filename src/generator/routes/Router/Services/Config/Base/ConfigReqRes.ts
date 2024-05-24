import getCurrentLine from "get-current-line"
import { getIdxIdHomeRoute, getIdxIdLoginRoute, isNotHomeRoute, isNotLoginRoute, str_login, str_main, validIdRoutesOrThrow } from "@/controller/scraping-services/class/Config/types.js"
import { CodeGenerator, genericValueToString, t_genericValue } from "@/generator/utils/types.js"
import { arrayToString } from "@shared/m_array.js"
import { IVoid } from "@shared/m_object.js"

export type IPipeline = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

//A FAIRE :  add type constraint must contain home and login 
class PipelineService<IdRouteReq extends readonly string[] , IdRouteRes extends readonly string[]  > implements IPipeline{

    _routeName :string 
    _serviceName :string

    _req : IdRouteReq;
    _res : IdRouteRes;

    constructor(routeName :string , serviceName :string,req : IdRouteReq,res : IdRouteRes){ 
        this._routeName = routeName;
        this._serviceName = serviceName;
        validIdRoutesOrThrow(req,'req')
        this._req = req;
        validIdRoutesOrThrow(res,'res')
        this._res = res;
    }
    
    getFile(){
        return `const ${this._serviceName}_ReqTypeHome = req_${this._req[getIdxIdHomeRoute()]};
        type t_${this._serviceName}_ReqTypeHome = req_${this._req[getIdxIdHomeRoute()]} ;

        const arrOfReqType_baseService_${this._serviceName}Route = [
        req_${this._req[getIdxIdLoginRoute()]}
        ]  as const;

        type t_arrOfReqType_baseService_${this._serviceName}Route =  [ req_${this._res[getIdxIdLoginRoute()]}]

        const ${this._serviceName}_ResTypeHome = res_${this._res[getIdxIdHomeRoute()]} ;
        type t_${this._serviceName}_ResTypeHome = res_${this._res[getIdxIdHomeRoute()]};


        const  arrOfResType_baseService_${this._serviceName}Route = [
            res_${this._res[getIdxIdLoginRoute()]}
        ] as const;

        type t_arrOfResType_baseService_${this._serviceName}Route = [res_login]


        const arrOfReqType_only_${this._serviceName}Route = [${this._req.slice(getIdxIdHomeRoute())}] as const;
        type t_arrOfReqType_only_${this._serviceName}Route = [${this._req.slice(getIdxIdHomeRoute())}]

        export const arrOfReqType_${this._serviceName}Route = [...arrOfReqType_baseService_${this._serviceName}Route,${this._serviceName}_ReqTypeHome,...arrOfReqType_only_${this._serviceName}Route] as const;
        type t_arrOfReqType_${this._serviceName}Route =  [...t_arrOfReqType_baseService_${this._serviceName}Route,t_${this._serviceName}_ReqTypeHome,...t_arrOfReqType_only_${this._serviceName}Route]


        const arrOfResType_only_${this._serviceName}Route = [${this._res.slice(getIdxIdHomeRoute())}] as const;
        type t_arrOfResType_only_${this._serviceName}Route =  [${this._res.slice(getIdxIdHomeRoute())}]


        export const arrOfResType_${this._serviceName}Route = [...arrOfResType_baseService_${this._serviceName}Route,${this._serviceName}_ResTypeHome,...arrOfResType_only_${this._serviceName}Route] as const  ;
        type t_arrOfResType_${this._serviceName}Route = [...t_arrOfResType_baseService_${this._serviceName}Route,t_${this._serviceName}_ResTypeHome,...t_arrOfResType_only_${this._serviceName}Route]

        export const arrOfReqResType_${this._serviceName}Route = ${arrayToString(this._req.map((req,idx) => arrayToString([`arrOfReqType_${this._serviceName}Route[${idx}].getEmptyInit()`,`arrOfResType_${this._serviceName}Route[${idx}].getEmptyInit()`])))} as const;

        type t_arrOfReqResType_${this._serviceName}Route = ${arrayToString(this._req.map((req,idx) => `readonly ${arrayToString([`t_arrOfReqType_${this._serviceName}Route[${idx}].getEmptyInit()`,`t_arrOfResType_${this._serviceName}Route[${idx}].getEmptyInit()`])}`))} as const;



        export const json_ReqResType_${this._serviceName} = 
        {${this._req.map((req,idx) => `[idRoutes_${this._serviceName}[${idx}]]: arrOfReqResType_${this._serviceName}Route[${idx}],`)}} as const ;
        
        export type t_json_ReqResType_${this._serviceName} =typeof json_ReqResType_${this._serviceName}` as const
    }
}