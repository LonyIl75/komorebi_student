import { idRoutes_societeTech, t_idRouteUnion_societeTech, t_idRoutes_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js";
import { req_startupMtp, res_startupMtp } from "@/routes/scraping-services/Services/src/societeTech/Services/StartupMtp/routes.input.js";
import { req_startupsMtp, res_startupsMtp } from "@/routes/scraping-services/Services/src/societeTech/Services/StartupsMtp/routes.input.js";
import { _passAndEmail } from "@/routes/scraping-services/class/utils/Data/DataRoute.js";
import { req_main, req_login, res_main, res_login} from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";
import {  mapFromArrAndArr } from "@shared/type.js";

const societeTech_ReqTypeHome = req_main;
type t_societeTech_ReqTypeHome = req_main ;

const arrOfReqType_baseService_societeTechRoute = [
   req_login<_passAndEmail>
]  as const;

type t_arrOfReqType_baseService_societeTechRoute =  [ req_login<_passAndEmail>]

const societeTech_ResTypeHome = res_main ;
type t_societeTech_ResTypeHome = res_main;


const  arrOfResType_baseService_societeTechRoute = [
    res_login
] as const;

type t_arrOfResType_baseService_societeTechRoute = [res_login]


const arrOfReqType_only_societeTechRoute = [req_startupsMtp,req_startupMtp] as const;
type t_arrOfReqType_only_societeTechRoute = [req_startupsMtp,req_startupMtp]

export const arrOfReqType_societeTechRoute = [...arrOfReqType_baseService_societeTechRoute,societeTech_ReqTypeHome,...arrOfReqType_only_societeTechRoute] as const;
type t_arrOfReqType_societeTechRoute =  [...t_arrOfReqType_baseService_societeTechRoute,t_societeTech_ReqTypeHome,...t_arrOfReqType_only_societeTechRoute]


const arrOfResType_only_societeTechRoute = [res_startupsMtp,res_startupMtp] as const;
type t_arrOfResType_only_societeTechRoute =  [res_startupsMtp,res_startupMtp]


export const arrOfResType_societeTechRoute = [...arrOfResType_baseService_societeTechRoute,societeTech_ResTypeHome,...arrOfResType_only_societeTechRoute] as const  ;
type t_arrOfResType_societeTechRoute = [...t_arrOfResType_baseService_societeTechRoute,t_societeTech_ResTypeHome,...t_arrOfResType_only_societeTechRoute]

export const arrOfReqResType_societeTechRoute = [[arrOfReqType_societeTechRoute[0].getEmptyInit(), arrOfResType_societeTechRoute[0].getEmptyInit()],[arrOfReqType_societeTechRoute[1].getEmptyInit(), arrOfResType_societeTechRoute[1].getEmptyInit()],[arrOfReqType_societeTechRoute[2].getEmptyInit(), arrOfResType_societeTechRoute[2].getEmptyInit()],[arrOfReqType_societeTechRoute[3].getEmptyInit(), arrOfResType_societeTechRoute[3].getEmptyInit()]] as const  ;
type t_arrOfReqResType_societeTechRoute = [readonly [t_arrOfReqType_societeTechRoute[0], t_arrOfResType_societeTechRoute[0]],readonly[t_arrOfReqType_societeTechRoute[1], t_arrOfResType_societeTechRoute[1]],readonly [t_arrOfReqType_societeTechRoute[2], t_arrOfResType_societeTechRoute[2]],readonly [t_arrOfReqType_societeTechRoute[3], t_arrOfResType_societeTechRoute[3]]]




export const json_ReqResType_societeTech = {
    [idRoutes_societeTech[0]] : arrOfReqResType_societeTechRoute[0],
    [idRoutes_societeTech[1]] : arrOfReqResType_societeTechRoute[1],
    [idRoutes_societeTech[2]] : arrOfReqResType_societeTechRoute[2],
    [idRoutes_societeTech[3]] : arrOfReqResType_societeTechRoute[3],
} as const ;

export type t_json_ReqResType_societeTech =typeof json_ReqResType_societeTech//mapFromArrAndArr<t_idRoutes_societeTech,t_arrOfReqResType_societeTechRoute>