import { idRoutes_booksToscrape, t_idRouteUnion_booksToscrape, t_idRoutes_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js";
import { req_books, res_books } from "@/routes/scraping-services/Services/src/booksToscrape/Services/Books/routes.input.js";
import { _passAndEmail } from "@/routes/scraping-services/class/utils/Data/DataRoute.js";
import { req_main, req_login, res_main, res_login} from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";
import {  mapFromArrAndArr } from "@shared/type.js";

const booksToscrape_ReqTypeHome = req_main;
type t_booksToscrape_ReqTypeHome = req_main ;

const arrOfReqType_baseService_booksToscrapeRoute = [
   req_login<_passAndEmail>
]  as const;

type t_arrOfReqType_baseService_booksToscrapeRoute =  [ req_login<_passAndEmail>]

const booksToscrape_ResTypeHome = res_main ;
type t_booksToscrape_ResTypeHome = res_main;


const  arrOfResType_baseService_booksToscrapeRoute = [
    res_login
] as const;

type t_arrOfResType_baseService_booksToscrapeRoute = [res_login]


const arrOfReqType_only_booksToscrapeRoute = [req_books] as const;
type t_arrOfReqType_only_booksToscrapeRoute = [req_books]

export const arrOfReqType_booksToscrapeRoute = [...arrOfReqType_baseService_booksToscrapeRoute,booksToscrape_ReqTypeHome,...arrOfReqType_only_booksToscrapeRoute] as const;
type t_arrOfReqType_booksToscrapeRoute =  [...t_arrOfReqType_baseService_booksToscrapeRoute,t_booksToscrape_ReqTypeHome,...t_arrOfReqType_only_booksToscrapeRoute]


const arrOfResType_only_booksToscrapeRoute = [res_books] as const;
type t_arrOfResType_only_booksToscrapeRoute =  [res_books]


export const arrOfResType_booksToscrapeRoute = [...arrOfResType_baseService_booksToscrapeRoute,booksToscrape_ResTypeHome,...arrOfResType_only_booksToscrapeRoute] as const  ;
type t_arrOfResType_booksToscrapeRoute = [...t_arrOfResType_baseService_booksToscrapeRoute,t_booksToscrape_ResTypeHome,...t_arrOfResType_only_booksToscrapeRoute]

export const arrOfReqResType_booksToscrapeRoute = [[arrOfReqType_booksToscrapeRoute[0].getEmptyInit(), arrOfResType_booksToscrapeRoute[0].getEmptyInit()],[arrOfReqType_booksToscrapeRoute[1].getEmptyInit(), arrOfResType_booksToscrapeRoute[1].getEmptyInit()],[arrOfReqType_booksToscrapeRoute[2].getEmptyInit(), arrOfResType_booksToscrapeRoute[2].getEmptyInit()]] as const  ;
type t_arrOfReqResType_booksToscrapeRoute = [readonly [t_arrOfReqType_booksToscrapeRoute[0], t_arrOfResType_booksToscrapeRoute[0]],readonly[t_arrOfReqType_booksToscrapeRoute[1], t_arrOfResType_booksToscrapeRoute[1]],readonly [t_arrOfReqType_booksToscrapeRoute[2], t_arrOfResType_booksToscrapeRoute[2]]]




export const json_ReqResType_booksToscrape = {
    [idRoutes_booksToscrape[0]] : arrOfReqResType_booksToscrapeRoute[0],
    [idRoutes_booksToscrape[1]] : arrOfReqResType_booksToscrapeRoute[1],
    [idRoutes_booksToscrape[2]] : arrOfReqResType_booksToscrapeRoute[2]
} as const ;

export type t_json_ReqResType_booksToscrape =typeof json_ReqResType_booksToscrape//mapFromArrAndArr<t_idRoutes_booksToscrape,t_arrOfReqResType_booksToscrapeRoute>