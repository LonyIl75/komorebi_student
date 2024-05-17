import { serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import LespepitestechRoutes from "./src/lespepitestech/Routes.js";

export const json_ServiceRoutes = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  LespepitestechRoutes,
} as const 
