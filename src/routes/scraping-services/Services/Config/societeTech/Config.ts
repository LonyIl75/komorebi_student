
import { t_idRouteUnion_societeTech, t_idRoutes_societeTech, idRoutes_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js";
import { scrapingComponent_societeTech_login } from "@/routes/scraping-services/Data/societeTech/Services/Login/Login.js";
import { scrapingComponent_societeTech_main } from "@/routes/scraping-services/Data/societeTech/Services/Main/Main.js";
import { scrapingComponent_societeTech_startupsMtp, t_scrapingComponent_societeTech_startupsMtp } from "@/routes/scraping-services/Data/societeTech/Services/StartupsMtp/StartupsMtp.js"
import { getPairedElementValue } from "@shared/type.js";
import { scrapingComponent_societeTech_startupMtp, t_scrapingComponent_societeTech_startupMtp } from "@/routes/scraping-services/Data/societeTech/Services/StartupMtp/StartupMtp.js";


const societeTech_ScrapingJsonTypeHome = scrapingComponent_societeTech_main
type t_societeTech_ScrapingJsonTypeHome =  typeof societeTech_ScrapingJsonTypeHome;



const arrOfScrapingJsonType_baseService_societeTechRoute = [
   scrapingComponent_societeTech_login
]  as const;

type t_arrOfScrapingJsonType_baseService_societeTechRoute = typeof arrOfScrapingJsonType_baseService_societeTechRoute;


const arrOfScrapingJsonType_only_societeTechRoute = [scrapingComponent_societeTech_startupsMtp,scrapingComponent_societeTech_startupMtp] as const 
type t_arrOfScrapingJsonType_only_societeTechRoute = [t_scrapingComponent_societeTech_startupsMtp,t_scrapingComponent_societeTech_startupMtp]

export const arrOfScrapingJsonType_societeTechRoute = [...arrOfScrapingJsonType_baseService_societeTechRoute,societeTech_ScrapingJsonTypeHome,...arrOfScrapingJsonType_only_societeTechRoute] as const;
type t_arrOfScrapingJsonType_societeTechRoute = [...t_arrOfScrapingJsonType_baseService_societeTechRoute,t_societeTech_ScrapingJsonTypeHome,...t_arrOfScrapingJsonType_only_societeTechRoute];


export type SocieteTechScrapingJsonType<T extends t_idRouteUnion_societeTech > = getPairedElementValue< T, t_idRoutes_societeTech, t_arrOfScrapingJsonType_societeTechRoute> 


export const json_societeTechScrapingJsonType = {
    [idRoutes_societeTech[0]] : arrOfScrapingJsonType_societeTechRoute[0],
    [idRoutes_societeTech[1]] : arrOfScrapingJsonType_societeTechRoute[1],
    [idRoutes_societeTech[2]] : arrOfScrapingJsonType_societeTechRoute[2],
    [idRoutes_societeTech[3]] : arrOfScrapingJsonType_societeTechRoute[3],
} as const ;

export type t_json_societeTechScrapingJsonType = typeof json_societeTechScrapingJsonType ;