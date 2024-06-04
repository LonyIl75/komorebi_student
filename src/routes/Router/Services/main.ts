import { serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import LespepitestechRoutes from "./src/lespepitestech/Routes.js";
import { serviceName_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js";
import Entrepise_Routes from "./src/entreprise_/Routes.js";
import { serviceName_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js";
import ForinovRoutes from "./src/forinov/Routes.js";
import { serviceName_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js";
import SocieteTechRoutes from "./src/societeTech/Routes.js";

export const json_ServiceRoutes = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  LespepitestechRoutes,
    [serviceName_entreprise_] :  Entrepise_Routes,
    [serviceName_forinov] :  ForinovRoutes,
    [serviceName_societeTech] :  SocieteTechRoutes,
} as const 
