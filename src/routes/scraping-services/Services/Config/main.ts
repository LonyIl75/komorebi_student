import { serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import { json_lespepitestechScrapingJsonType } from "./lespepitestech/Config.js";
import { json_lespepitestechConfigPipeline } from "./lespepitestech/Pipeline.js";
import { serviceName_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js";
import { json_entreprise_ScrapingJsonType } from "./entreprise_/Config.js";
import { json_entreprise_ConfigPipeline } from "./entreprise_/Pipeline.js";


export const json_scrapingJsonType = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :json_lespepitestechScrapingJsonType,
    [serviceName_entreprise_] : json_entreprise_ScrapingJsonType
} as const ;



export const json_ConfigPipeline = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :json_lespepitestechConfigPipeline,
    [serviceName_entreprise_] : json_entreprise_ConfigPipeline
} as const ;