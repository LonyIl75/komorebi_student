import { serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import lespepitestechLocalAndRemoteDatabase from "./lespepitestech/database.js";
import { serviceName_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js";
import entreprise_LocalAndRemoteDatabase from "./entreprise_/database.js";

export const json_localAndRemoteDatabase = {
    // #ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  lespepitestechLocalAndRemoteDatabase,
    [serviceName_entreprise_] :  entreprise_LocalAndRemoteDatabase
} as const 