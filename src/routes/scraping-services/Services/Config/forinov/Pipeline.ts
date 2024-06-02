import { idRoutes_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js";
import { df_config_routes_pipeline } from "@/routes/scraping-services/class/Config/Pipeline/config.js";

export const json_forinovConfigPipeline = {
    [idRoutes_forinov[0]]:{...df_config_routes_pipeline} ,
    [idRoutes_forinov[1]]:{...df_config_routes_pipeline},
    [idRoutes_forinov[2]]:{...df_config_routes_pipeline},

} as const 
