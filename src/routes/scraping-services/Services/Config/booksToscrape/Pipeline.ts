import { idRoutes_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js";
import { df_config_routes_pipeline } from "@/routes/scraping-services/class/Config/Pipeline/config.js";

export const json_booksToscrapeConfigPipeline = {
    [idRoutes_booksToscrape[0]]:{...df_config_routes_pipeline} ,
    [idRoutes_booksToscrape[1]]:{...df_config_routes_pipeline}

} as const 
