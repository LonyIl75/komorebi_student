import { serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js";
import { json_booksToscrapeScrapingJsonType } from "./booksToscrape/Config.js";
import { json_booksToscrapeConfigPipeline } from "./booksToscrape/Pipeline.js";


export const json_scrapingJsonType = {
    //#ADD NEW SERVICE HERE
    [serviceName_booksToscrape] :json_booksToscrapeScrapingJsonType,
} as const ;



export const json_ConfigPipeline = {
    //#ADD NEW SERVICE HERE
    [serviceName_booksToscrape] :json_booksToscrapeConfigPipeline,
} as const ;