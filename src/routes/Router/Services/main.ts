import { serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js";

import PourdebonRoutes from "./src/pourdebon/Routes.js";

export const json_ServiceRoutes = {
    //#ADD NEW SERVICE HERE
    [serviceName_pourdebon] :  PourdebonRoutes,
} as const 
