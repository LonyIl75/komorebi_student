
import { t_idRouteUnion_forinov, t_idRoutes_forinov, idRoutes_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js";
import { scrapingComponent_forinov_login } from "@/routes/scraping-services/Data/forinov/Services/Login/Login.js";
import { scrapingComponent_forinov_main } from "@/routes/scraping-services/Data/forinov/Services/Main/Main.js";
import { scrapingComponent_forinov_startupOccitanie, t_scrapingComponent_forinov_startupOccitanie } from "@/routes/scraping-services/Data/forinov/Services/StartupOccitanie/StartupOccitanie.js";
import { scrapingComponent_forinov_startupsOccitanie, t_scrapingComponent_forinov_startupsOccitanie } from "@/routes/scraping-services/Data/forinov/Services/StartupsOccitanie/StartupsOccitanie.js"
import { getPairedElementValue } from "@shared/type.js";


const forinov_ScrapingJsonTypeHome = scrapingComponent_forinov_main
type t_forinov_ScrapingJsonTypeHome =  typeof forinov_ScrapingJsonTypeHome;



const arrOfScrapingJsonType_baseService_forinovRoute = [
   scrapingComponent_forinov_login
]  as const;

type t_arrOfScrapingJsonType_baseService_forinovRoute = typeof arrOfScrapingJsonType_baseService_forinovRoute;


const arrOfScrapingJsonType_only_forinovRoute = [scrapingComponent_forinov_startupsOccitanie,scrapingComponent_forinov_startupOccitanie] as const 
type t_arrOfScrapingJsonType_only_forinovRoute = [t_scrapingComponent_forinov_startupsOccitanie,t_scrapingComponent_forinov_startupOccitanie]

export const arrOfScrapingJsonType_forinovRoute = [...arrOfScrapingJsonType_baseService_forinovRoute,forinov_ScrapingJsonTypeHome,...arrOfScrapingJsonType_only_forinovRoute] as const;
type t_arrOfScrapingJsonType_forinovRoute = [...t_arrOfScrapingJsonType_baseService_forinovRoute,t_forinov_ScrapingJsonTypeHome,...t_arrOfScrapingJsonType_only_forinovRoute];


export type ForinovScrapingJsonType<T extends t_idRouteUnion_forinov > = getPairedElementValue< T, t_idRoutes_forinov, t_arrOfScrapingJsonType_forinovRoute> 


export const json_forinovScrapingJsonType = {
    [idRoutes_forinov[0]] : arrOfScrapingJsonType_forinovRoute[0],
    [idRoutes_forinov[1]] : arrOfScrapingJsonType_forinovRoute[1],
    [idRoutes_forinov[2]] : arrOfScrapingJsonType_forinovRoute[2],
    [idRoutes_forinov[3]] : arrOfScrapingJsonType_forinovRoute[3],
} as const ;

export type t_json_forinovScrapingJsonType = typeof json_forinovScrapingJsonType ;