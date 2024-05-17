import { serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import { json_lespepitestechScrapingJsonType } from "./lespepitestech/Config.js";
import { json_lespepitestechConfigPipeline } from "./lespepitestech/Pipeline.js";


export const json_scrapingJsonType = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :json_lespepitestechScrapingJsonType,
} as const ;



export const json_ConfigPipeline = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :json_lespepitestechConfigPipeline,
} as const ;