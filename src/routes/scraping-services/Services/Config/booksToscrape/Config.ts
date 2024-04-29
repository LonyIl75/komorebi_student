
import { t_idRouteUnion_booksToscrape, t_idRoutes_booksToscrape, idRoutes_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js";
import { scrapingComponent_booksToscrape_books, t_scrapingComponent_booksToscrape_books } from "@/routes/scraping-services/Data/booksToscrape/Services/Books/Books.js"
import { getPairedElementValue } from "@shared/type.js";


const booksToscrape_ScrapingJsonTypeHome = {} as any;//main
type t_booksToscrape_ScrapingJsonTypeHome = {} ;



const arrOfScrapingJsonType_baseService_booksToscrapeRoute = [
   {} as any //login
]  as const;

type t_arrOfScrapingJsonType_baseService_booksToscrapeRoute = [
   {}
] ;


const arrOfScrapingJsonType_only_booksToscrapeRoute = [scrapingComponent_booksToscrape_books] as const 
type t_arrOfScrapingJsonType_only_booksToscrapeRoute = [t_scrapingComponent_booksToscrape_books]

export const arrOfScrapingJsonType_booksToscrapeRoute = [...arrOfScrapingJsonType_baseService_booksToscrapeRoute,booksToscrape_ScrapingJsonTypeHome,...arrOfScrapingJsonType_only_booksToscrapeRoute] as const;
type t_arrOfScrapingJsonType_booksToscrapeRoute = [...t_arrOfScrapingJsonType_baseService_booksToscrapeRoute,t_booksToscrape_ScrapingJsonTypeHome,...t_arrOfScrapingJsonType_only_booksToscrapeRoute];


export type BooksToscrapeScrapingJsonType<T extends t_idRouteUnion_booksToscrape > = getPairedElementValue< T, t_idRoutes_booksToscrape, t_arrOfScrapingJsonType_booksToscrapeRoute> 


export const json_booksToscrapeScrapingJsonType = {
    [idRoutes_booksToscrape[0]] : arrOfScrapingJsonType_booksToscrapeRoute[0],
    [idRoutes_booksToscrape[1]] : arrOfScrapingJsonType_booksToscrapeRoute[1],
    [idRoutes_booksToscrape[2]] : arrOfScrapingJsonType_booksToscrapeRoute[2]
} as const ;

export type t_json_booksToscrapeScrapingJsonType = typeof json_booksToscrapeScrapingJsonType ;