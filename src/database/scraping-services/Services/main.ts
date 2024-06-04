import { serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import lespepitestechLocalAndRemoteDatabase from "./lespepitestech/database.js";
import { serviceName_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js";
import entreprise_LocalAndRemoteDatabase from "./entreprise_/database.js";
import { serviceName_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js";
import forinovLocalAndRemoteDatabase from "./forinov/database.js";
import { serviceName_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js";
import societeTechLocalAndRemoteDatabase from "./societeTech/database.js";

export const json_localAndRemoteDatabase = {
    // #ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  lespepitestechLocalAndRemoteDatabase,
    [serviceName_entreprise_] :  entreprise_LocalAndRemoteDatabase,
    [serviceName_forinov] :  forinovLocalAndRemoteDatabase,
    [serviceName_societeTech] :  societeTechLocalAndRemoteDatabase,
} as const 