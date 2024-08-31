
import { t_idRouteUnion_entreprise_, t_idRoutes_entreprise_, idRoutes_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js";
import { scrapingComponent_entreprise__login } from "@/routes/scraping-services/Data/entreprise_/Services/Login/Login.js";
import { scrapingComponent_entreprise__main } from "@/routes/scraping-services/Data/entreprise_/Services/Main/Main.js";
import { getPairedElementValue } from "@shared/type.js";


const entreprise__ScrapingJsonTypeHome = scrapingComponent_entreprise__main 
type t_entreprise__ScrapingJsonTypeHome =  typeof entreprise__ScrapingJsonTypeHome;



const arrOfScrapingJsonType_baseService_entreprise_Route = [
   scrapingComponent_entreprise__login 
]  as const;

type t_arrOfScrapingJsonType_baseService_entreprise_Route = typeof arrOfScrapingJsonType_baseService_entreprise_Route;


const arrOfScrapingJsonType_only_entreprise_Route = [] as const 
type t_arrOfScrapingJsonType_only_entreprise_Route = []

export const arrOfScrapingJsonType_entreprise_Route = [...arrOfScrapingJsonType_baseService_entreprise_Route,entreprise__ScrapingJsonTypeHome,...arrOfScrapingJsonType_only_entreprise_Route] as const;
type t_arrOfScrapingJsonType_entreprise_Route = [...t_arrOfScrapingJsonType_baseService_entreprise_Route,t_entreprise__ScrapingJsonTypeHome,...t_arrOfScrapingJsonType_only_entreprise_Route];


export type LespepitestechScrapingJsonType<T extends t_idRouteUnion_entreprise_ > = getPairedElementValue< T, t_idRoutes_entreprise_, t_arrOfScrapingJsonType_entreprise_Route> 


export const json_entreprise_ScrapingJsonType = {
    [idRoutes_entreprise_[0]] : arrOfScrapingJsonType_entreprise_Route[0],
    [idRoutes_entreprise_[1]] : arrOfScrapingJsonType_entreprise_Route[1]
} as const ;

export type t_json_entreprise_ScrapingJsonType = typeof json_entreprise_ScrapingJsonType ;