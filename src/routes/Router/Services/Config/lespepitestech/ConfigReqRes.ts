import { idRoutes_lespepitestech, t_idRouteUnion_lespepitestech, t_idRoutes_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import { req_startupsMtp, res_startupsMtp } from "@/routes/scraping-services/Services/src/lespepitestech/Services/StartupsMtp/routes.input.js";
import { _passAndEmail } from "@/routes/scraping-services/class/utils/Data/DataRoute.js";
import { req_main, req_login, res_main, res_login} from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";
import {  mapFromArrAndArr } from "@shared/type.js";

const lespepitestech_ReqTypeHome = req_main;
type t_lespepitestech_ReqTypeHome = req_main ;

const arrOfReqType_baseService_lespepitestechRoute = [
   req_login<_passAndEmail>
]  as const;

type t_arrOfReqType_baseService_lespepitestechRoute =  [ req_login<_passAndEmail>]

const lespepitestech_ResTypeHome = res_main ;
type t_lespepitestech_ResTypeHome = res_main;


const  arrOfResType_baseService_lespepitestechRoute = [
    res_login
] as const;

type t_arrOfResType_baseService_lespepitestechRoute = [res_login]


const arrOfReqType_only_lespepitestechRoute = [req_startupsMtp] as const;
type t_arrOfReqType_only_lespepitestechRoute = [req_startupsMtp]

export const arrOfReqType_lespepitestechRoute = [...arrOfReqType_baseService_lespepitestechRoute,lespepitestech_ReqTypeHome,...arrOfReqType_only_lespepitestechRoute] as const;
type t_arrOfReqType_lespepitestechRoute =  [...t_arrOfReqType_baseService_lespepitestechRoute,t_lespepitestech_ReqTypeHome,...t_arrOfReqType_only_lespepitestechRoute]


const arrOfResType_only_lespepitestechRoute = [res_startupsMtp] as const;
type t_arrOfResType_only_lespepitestechRoute =  [res_startupsMtp]


export const arrOfResType_lespepitestechRoute = [...arrOfResType_baseService_lespepitestechRoute,lespepitestech_ResTypeHome,...arrOfResType_only_lespepitestechRoute] as const  ;
type t_arrOfResType_lespepitestechRoute = [...t_arrOfResType_baseService_lespepitestechRoute,t_lespepitestech_ResTypeHome,...t_arrOfResType_only_lespepitestechRoute]

export const arrOfReqResType_lespepitestechRoute = [[arrOfReqType_lespepitestechRoute[0].getEmptyInit(), arrOfResType_lespepitestechRoute[0].getEmptyInit()],[arrOfReqType_lespepitestechRoute[1].getEmptyInit(), arrOfResType_lespepitestechRoute[1].getEmptyInit()],[arrOfReqType_lespepitestechRoute[2].getEmptyInit(), arrOfResType_lespepitestechRoute[2].getEmptyInit()]] as const  ;
type t_arrOfReqResType_lespepitestechRoute = [readonly [t_arrOfReqType_lespepitestechRoute[0], t_arrOfResType_lespepitestechRoute[0]],readonly[t_arrOfReqType_lespepitestechRoute[1], t_arrOfResType_lespepitestechRoute[1]],readonly [t_arrOfReqType_lespepitestechRoute[2], t_arrOfResType_lespepitestechRoute[2]]]




export const json_ReqResType_lespepitestech = {
    [idRoutes_lespepitestech[0]] : arrOfReqResType_lespepitestechRoute[0],
    [idRoutes_lespepitestech[1]] : arrOfReqResType_lespepitestechRoute[1],
    [idRoutes_lespepitestech[2]] : arrOfReqResType_lespepitestechRoute[2]
} as const ;

export type t_json_ReqResType_lespepitestech =typeof json_ReqResType_lespepitestech//mapFromArrAndArr<t_idRoutes_lespepitestech,t_arrOfReqResType_lespepitestechRoute>