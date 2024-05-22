import { idRoutes_entreprise_, t_idRouteUnion_entreprise_, t_idRoutes_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js";
import { _passAndEmail } from "@/routes/scraping-services/class/utils/Data/DataRoute.js";
import { req_main, req_login, res_main, res_login} from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";
import {  mapFromArrAndArr } from "@shared/type.js";

const entreprise__ReqTypeHome = req_main;
type t_entreprise__ReqTypeHome = req_main ;

const arrOfReqType_baseService_entreprise_Route = [
   req_login<_passAndEmail>
]  as const;

type t_arrOfReqType_baseService_entreprise_Route =  [ req_login<_passAndEmail>]

const entreprise__ResTypeHome = res_main ;
type t_entreprise__ResTypeHome = res_main;


const  arrOfResType_baseService_entreprise_Route = [
    res_login
] as const;

type t_arrOfResType_baseService_entreprise_Route = [res_login]


const arrOfReqType_only_entreprise_Route = [] as const;
type t_arrOfReqType_only_entreprise_Route = []

export const arrOfReqType_entreprise_Route = [...arrOfReqType_baseService_entreprise_Route,entreprise__ReqTypeHome,...arrOfReqType_only_entreprise_Route] as const;
type t_arrOfReqType_entreprise_Route =  [...t_arrOfReqType_baseService_entreprise_Route,t_entreprise__ReqTypeHome,...t_arrOfReqType_only_entreprise_Route]


const arrOfResType_only_entreprise_Route = [] as const;
type t_arrOfResType_only_entreprise_Route =  []


export const arrOfResType_entreprise_Route = [...arrOfResType_baseService_entreprise_Route,entreprise__ResTypeHome,...arrOfResType_only_entreprise_Route] as const  ;
type t_arrOfResType_entreprise_Route = [...t_arrOfResType_baseService_entreprise_Route,t_entreprise__ResTypeHome,...t_arrOfResType_only_entreprise_Route]

export const arrOfReqResType_entreprise_Route = [[arrOfReqType_entreprise_Route[0].getEmptyInit(), arrOfResType_entreprise_Route[0].getEmptyInit()],[arrOfReqType_entreprise_Route[1].getEmptyInit(), arrOfResType_entreprise_Route[1].getEmptyInit()],] as const  ;
type t_arrOfReqResType_entreprise_Route = [readonly [t_arrOfReqType_entreprise_Route[0], t_arrOfResType_entreprise_Route[0]],readonly[t_arrOfReqType_entreprise_Route[1], t_arrOfResType_entreprise_Route[1]]]




export const json_ReqResType_entreprise_ = {
    [idRoutes_entreprise_[0]] : arrOfReqResType_entreprise_Route[0],
    [idRoutes_entreprise_[1]] : arrOfReqResType_entreprise_Route[1]
} as const ;

export type t_json_ReqResType_entreprise_ =typeof json_ReqResType_entreprise_//mapFromArrAndArr<t_idRoutes_entreprise_,t_arrOfReqResType_entreprise_Route>