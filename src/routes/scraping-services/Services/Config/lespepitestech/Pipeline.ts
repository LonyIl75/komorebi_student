import { idRoutes_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import { df_config_routes_pipeline } from "@/routes/scraping-services/class/Config/Pipeline/config.js";

export const json_lespepitestechConfigPipeline = {
    [idRoutes_lespepitestech[0]]:{...df_config_routes_pipeline} ,
    [idRoutes_lespepitestech[1]]:{...df_config_routes_pipeline}

} as const 
