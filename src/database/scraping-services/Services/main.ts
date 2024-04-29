import { serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js";
import booksToscrapeLocalAndRemoteDatabase from "./booksToscrape/database.js";

export const json_localAndRemoteDatabase = {
    // #ADD NEW SERVICE HERE
    [serviceName_booksToscrape] :  booksToscrapeLocalAndRemoteDatabase,
} as const 