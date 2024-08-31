import { idRoutes_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js";
import { df_config_routes_pipeline } from "@/routes/scraping-services/class/Config/Pipeline/config.js";

export const json_societeTechConfigPipeline = {
    [idRoutes_societeTech[0]]:{...df_config_routes_pipeline} ,
    [idRoutes_societeTech[1]]:{...df_config_routes_pipeline},
    [idRoutes_societeTech[2]]:{...df_config_routes_pipeline},
    [idRoutes_societeTech[3]]:{...df_config_routes_pipeline},

} as const 
