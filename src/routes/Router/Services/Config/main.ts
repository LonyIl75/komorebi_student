import { serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import { json_ReqResType_lespepitestech } from "./lespepitestech/ConfigReqRes.js";


export const json_ReqResType = {
    // #ADD NEW SERVICE HERE
    [serviceName_lespepitestech]: json_ReqResType_lespepitestech
} as const 