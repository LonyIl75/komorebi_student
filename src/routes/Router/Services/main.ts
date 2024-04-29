import { serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js";
import BooksToscrapeRoutes from "./src/booksToscrape/Routes.js";

export const json_ServiceRoutes = {
    //#ADD NEW SERVICE HERE
    [serviceName_booksToscrape] :  BooksToscrapeRoutes,
} as const 
