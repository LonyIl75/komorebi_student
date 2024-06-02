import { idRoutes_forinov, t_idRouteUnion_forinov, t_idRoutes_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js";
import { _passAndEmail } from "@/routes/scraping-services/class/utils/Data/DataRoute.js";
import { req_main, req_login, res_main, res_login} from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";
import {  mapFromArrAndArr } from "@shared/type.js";

const forinov_ReqTypeHome = req_main;
type t_forinov_ReqTypeHome = req_main ;

const arrOfReqType_baseService_forinovRoute = [
   req_login<_passAndEmail>
]  as const;

type t_arrOfReqType_baseService_forinovRoute =  [ req_login<_passAndEmail>]

const forinov_ResTypeHome = res_main ;
type t_forinov_ResTypeHome = res_main;


const  arrOfResType_baseService_forinovRoute = [
    res_login
] as const;

type t_arrOfResType_baseService_forinovRoute = [res_login]


const arrOfReqType_only_forinovRoute = [] as const;
type t_arrOfReqType_only_forinovRoute = []

export const arrOfReqType_forinovRoute = [...arrOfReqType_baseService_forinovRoute,forinov_ReqTypeHome,...arrOfReqType_only_forinovRoute] as const;
type t_arrOfReqType_forinovRoute =  [...t_arrOfReqType_baseService_forinovRoute,t_forinov_ReqTypeHome,...t_arrOfReqType_only_forinovRoute]


const arrOfResType_only_forinovRoute = [] as const;
type t_arrOfResType_only_forinovRoute =  []


export const arrOfResType_forinovRoute = [...arrOfResType_baseService_forinovRoute,forinov_ResTypeHome,...arrOfResType_only_forinovRoute] as const  ;
type t_arrOfResType_forinovRoute = [...t_arrOfResType_baseService_forinovRoute,t_forinov_ResTypeHome,...t_arrOfResType_only_forinovRoute]

export const arrOfReqResType_forinovRoute = [[arrOfReqType_forinovRoute[0].getEmptyInit(), arrOfResType_forinovRoute[0].getEmptyInit()],[arrOfReqType_forinovRoute[1].getEmptyInit(), arrOfResType_forinovRoute[1].getEmptyInit()],] as const  ;
type t_arrOfReqResType_forinovRoute = [readonly [t_arrOfReqType_forinovRoute[0], t_arrOfResType_forinovRoute[0]],readonly[t_arrOfReqType_forinovRoute[1], t_arrOfResType_forinovRoute[1]]]




export const json_ReqResType_forinov = {
    [idRoutes_forinov[0]] : arrOfReqResType_forinovRoute[0],
    [idRoutes_forinov[1]] : arrOfReqResType_forinovRoute[1]
} as const ;

export type t_json_ReqResType_forinov =typeof json_ReqResType_forinov//mapFromArrAndArr<t_idRoutes_forinov,t_arrOfReqResType_forinovRoute>