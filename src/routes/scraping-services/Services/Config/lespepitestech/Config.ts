
import { t_idRouteUnion_lespepitestech, t_idRoutes_lespepitestech, idRoutes_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import { scrapingComponent_lespepitestech_login } from "@/routes/scraping-services/Data/lespepitestech/Services/Login/Login.js";
import { scrapingComponent_lespepitestech_main } from "@/routes/scraping-services/Data/lespepitestech/Services/Main/Main.js";
import { scrapingComponent_lespepitestech_startupsMtp, t_scrapingComponent_lespepitestech_startupsMtp } from "@/routes/scraping-services/Data/lespepitestech/Services/StartupsMtp/StartupsMtp.js"
import { getPairedElementValue } from "@shared/type.js";


const lespepitestech_ScrapingJsonTypeHome = scrapingComponent_lespepitestech_main
type t_lespepitestech_ScrapingJsonTypeHome =  typeof lespepitestech_ScrapingJsonTypeHome;



const arrOfScrapingJsonType_baseService_lespepitestechRoute = [
   scrapingComponent_lespepitestech_login
]  as const;

type t_arrOfScrapingJsonType_baseService_lespepitestechRoute = typeof arrOfScrapingJsonType_baseService_lespepitestechRoute;


const arrOfScrapingJsonType_only_lespepitestechRoute = [scrapingComponent_lespepitestech_startupsMtp] as const 
type t_arrOfScrapingJsonType_only_lespepitestechRoute = [t_scrapingComponent_lespepitestech_startupsMtp]

export const arrOfScrapingJsonType_lespepitestechRoute = [...arrOfScrapingJsonType_baseService_lespepitestechRoute,lespepitestech_ScrapingJsonTypeHome,...arrOfScrapingJsonType_only_lespepitestechRoute] as const;
type t_arrOfScrapingJsonType_lespepitestechRoute = [...t_arrOfScrapingJsonType_baseService_lespepitestechRoute,t_lespepitestech_ScrapingJsonTypeHome,...t_arrOfScrapingJsonType_only_lespepitestechRoute];


export type LespepitestechScrapingJsonType<T extends t_idRouteUnion_lespepitestech > = getPairedElementValue< T, t_idRoutes_lespepitestech, t_arrOfScrapingJsonType_lespepitestechRoute> 


export const json_lespepitestechScrapingJsonType = {
    [idRoutes_lespepitestech[0]] : arrOfScrapingJsonType_lespepitestechRoute[0],
    [idRoutes_lespepitestech[1]] : arrOfScrapingJsonType_lespepitestechRoute[1],
    [idRoutes_lespepitestech[2]] : arrOfScrapingJsonType_lespepitestechRoute[2]
} as const ;

export type t_json_lespepitestechScrapingJsonType = typeof json_lespepitestechScrapingJsonType ;