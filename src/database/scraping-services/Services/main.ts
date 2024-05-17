import { serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import lespepitestechLocalAndRemoteDatabase from "./lespepitestech/database.js";

export const json_localAndRemoteDatabase = {
    // #ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  lespepitestechLocalAndRemoteDatabase,
} as const 