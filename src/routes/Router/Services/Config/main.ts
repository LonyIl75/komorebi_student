import { serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js";
import { json_ReqResType_booksToscrape } from "./booksToscrape/ConfigReqRes.js";


export const json_ReqResType = {
    // #ADD NEW SERVICE HERE
    [serviceName_booksToscrape]: json_ReqResType_booksToscrape
} as const 