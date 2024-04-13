
import { t_idRouteUnion_pourdebon, t_idRoutes_pourdebon, idRoutes_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js";
import { scrapingComponent_pourdebon_legumes, t_scrapingComponent_pourdebon_legumes } from "@/routes/scraping-services/Data/pourdebon/Services/Legumes/Legumes.js";
import { scrapingComponent_pourdebon_bouchers, t_scrapingComponent_pourdebon_bouchers } from "@/routes/scraping-services/Data/pourdebon/Services/Bouchers/Bouchers.js";
import { getPairedElementValue } from "@shared/type.js";


const pourdebon_ScrapingJsonTypeHome = {} as any;//main
type t_pourdebon_ScrapingJsonTypeHome = {} ;



const arrOfScrapingJsonType_baseService_pourdebonRoute = [
   {} as any //login
]  as const;

type t_arrOfScrapingJsonType_baseService_pourdebonRoute = [
   {}
] ;


const arrOfScrapingJsonType_only_pourdebonRoute = [scrapingComponent_pourdebon_legumes,scrapingComponent_pourdebon_bouchers] as const 
type t_arrOfScrapingJsonType_only_pourdebonRoute = [t_scrapingComponent_pourdebon_legumes,t_scrapingComponent_pourdebon_bouchers]

export const arrOfScrapingJsonType_pourdebonRoute = [...arrOfScrapingJsonType_baseService_pourdebonRoute,pourdebon_ScrapingJsonTypeHome,...arrOfScrapingJsonType_only_pourdebonRoute] as const;
type t_arrOfScrapingJsonType_pourdebonRoute = [...t_arrOfScrapingJsonType_baseService_pourdebonRoute,t_pourdebon_ScrapingJsonTypeHome,...t_arrOfScrapingJsonType_only_pourdebonRoute];


export type PourdebonScrapingJsonType<T extends t_idRouteUnion_pourdebon > = getPairedElementValue< T, t_idRoutes_pourdebon, t_arrOfScrapingJsonType_pourdebonRoute> 


export const json_pourdebonScrapingJsonType = {
    [idRoutes_pourdebon[0]] : arrOfScrapingJsonType_pourdebonRoute[0],
    [idRoutes_pourdebon[1]] : arrOfScrapingJsonType_pourdebonRoute[1],
    [idRoutes_pourdebon[2]] : arrOfScrapingJsonType_pourdebonRoute[2],
    [idRoutes_pourdebon[3]] : arrOfScrapingJsonType_pourdebonRoute[3]
} as const ;

export type t_json_pourdebonScrapingJsonType = typeof json_pourdebonScrapingJsonType ;