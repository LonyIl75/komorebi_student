import { idRoutes_pourdebon, t_idRouteUnion_pourdebon, t_idRoutes_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js";
import { req_bouchers, res_bouchers } from "@/routes/scraping-services/Services/src/pourdebon/Services/Bouchers/routes.input.js";
import { req_legumes, res_legumes } from "@/routes/scraping-services/Services/src/pourdebon/Services/Legumes/routes.input.js";
import { _passAndEmail } from "@/routes/scraping-services/class/utils/Data/DataRoute.js";
import { req_main, req_login, res_main, res_login} from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";
import {  mapFromArrAndArr } from "@shared/type.js";

const pourdebon_ReqTypeHome = req_main;
type t_pourdebon_ReqTypeHome = req_main ;

const arrOfReqType_baseService_pourdebonRoute = [
   req_login<_passAndEmail>
]  as const;

type t_arrOfReqType_baseService_pourdebonRoute =  [ req_login<_passAndEmail>]

const pourdebon_ResTypeHome = res_main ;
type t_pourdebon_ResTypeHome = res_main;


const  arrOfResType_baseService_pourdebonRoute = [
    res_login
] as const;

type t_arrOfResType_baseService_pourdebonRoute = [res_login]


const arrOfReqType_only_pourdebonRoute = [req_legumes,req_bouchers] as const;
type t_arrOfReqType_only_pourdebonRoute = [req_legumes,req_bouchers]

export const arrOfReqType_pourdebonRoute = [...arrOfReqType_baseService_pourdebonRoute,pourdebon_ReqTypeHome,...arrOfReqType_only_pourdebonRoute] as const;
type t_arrOfReqType_pourdebonRoute =  [...t_arrOfReqType_baseService_pourdebonRoute,t_pourdebon_ReqTypeHome,...t_arrOfReqType_only_pourdebonRoute]


const arrOfResType_only_pourdebonRoute = [res_legumes,res_bouchers] as const;
type t_arrOfResType_only_pourdebonRoute =  [res_legumes,res_bouchers]


export const arrOfResType_pourdebonRoute = [...arrOfResType_baseService_pourdebonRoute,pourdebon_ResTypeHome,...arrOfResType_only_pourdebonRoute] as const  ;
type t_arrOfResType_pourdebonRoute = [...t_arrOfResType_baseService_pourdebonRoute,t_pourdebon_ResTypeHome,...t_arrOfResType_only_pourdebonRoute]

export const arrOfReqResType_pourdebonRoute = [[arrOfReqType_pourdebonRoute[0]._getEmptyInit(), arrOfResType_pourdebonRoute[0]._getEmptyInit()],[arrOfReqType_pourdebonRoute[1]._getEmptyInit(), arrOfResType_pourdebonRoute[1]._getEmptyInit()],[arrOfReqType_pourdebonRoute[2]._getEmptyInit(), arrOfResType_pourdebonRoute[2]._getEmptyInit()],[arrOfReqType_pourdebonRoute[3]._getEmptyInit(), arrOfResType_pourdebonRoute[3]._getEmptyInit()]] as const  ;
type t_arrOfReqResType_pourdebonRoute = [readonly [t_arrOfReqType_pourdebonRoute[0], t_arrOfResType_pourdebonRoute[0]],readonly[t_arrOfReqType_pourdebonRoute[1], t_arrOfResType_pourdebonRoute[1]],readonly [t_arrOfReqType_pourdebonRoute[2], t_arrOfResType_pourdebonRoute[2]],readonly [t_arrOfReqType_pourdebonRoute[3], t_arrOfResType_pourdebonRoute[3]]]




export const json_ReqResType_pourdebon = {
    [idRoutes_pourdebon[0]] : arrOfReqResType_pourdebonRoute[0],
    [idRoutes_pourdebon[1]] : arrOfReqResType_pourdebonRoute[1],
    [idRoutes_pourdebon[2]] : arrOfReqResType_pourdebonRoute[2],
    [idRoutes_pourdebon[3]] : arrOfReqResType_pourdebonRoute[3],
} as const ;

export type t_json_ReqResType_pourdebon =typeof json_ReqResType_pourdebon//mapFromArrAndArr<t_idRoutes_pourdebon,t_arrOfReqResType_pourdebonRoute>
