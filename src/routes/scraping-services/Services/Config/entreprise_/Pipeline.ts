import { idRoutes_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js";
import { df_config_routes_pipeline } from "@/routes/scraping-services/class/Config/Pipeline/config.js";

export const json_entreprise_ConfigPipeline = {
    [idRoutes_entreprise_[0]]:{...df_config_routes_pipeline} ,
    [idRoutes_entreprise_[1]]:{...df_config_routes_pipeline},

} as const 
