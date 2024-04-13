import { idRoutes_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js";
import { df_config_routes_pipeline } from "@/routes/scraping-services/class/Config/Pipeline/config.js";

export const json_pourdebonConfigPipeline = {
    [idRoutes_pourdebon[0]]:{...df_config_routes_pipeline} ,
    [idRoutes_pourdebon[1]]:{...df_config_routes_pipeline} ,
    [idRoutes_pourdebon[2]]:{...df_config_routes_pipeline} 

} as const 