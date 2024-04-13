import { serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js";

import { json_pourdebonScrapingJsonType } from "./pourdebon/Config.js";

export const json_scrapingJsonType = {
    //#ADD NEW SERVICE HERE
    [serviceName_pourdebon] :json_pourdebonScrapingJsonType,
} as const ;


import { json_pourdebonConfigPipeline } from "./pourdebon/Pipeline.js";

export const json_ConfigPipeline = {
    //#ADD NEW SERVICE HERE
    [serviceName_pourdebon] :json_pourdebonConfigPipeline,
} as const ;