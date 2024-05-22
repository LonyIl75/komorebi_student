import { serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import LespepitestechRoutes from "./src/lespepitestech/Routes.js";
import { serviceName_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js";
import Entrepise_Routes from "./src/entreprise_/Routes.js";

export const json_ServiceRoutes = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  LespepitestechRoutes,
    [serviceName_entreprise_] :  Entrepise_Routes
} as const 
