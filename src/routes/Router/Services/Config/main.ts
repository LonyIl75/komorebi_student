import { serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import { json_ReqResType_lespepitestech } from "./lespepitestech/ConfigReqRes.js";
import { serviceName_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js";
import { json_ReqResType_entreprise_ } from "./entreprise_/ConfigReqRes.js";
import { serviceName_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js";
import { json_ReqResType_forinov } from "./forinov/ConfigReqRes.js";
import { serviceName_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js";
import {json_ReqResType_societeTech} from "./societeTech/ConfigReqRes.js";

export const json_ReqResType = {
    // #ADD NEW SERVICE HERE
    [serviceName_lespepitestech]: json_ReqResType_lespepitestech,
    [serviceName_entreprise_] :  json_ReqResType_entreprise_,
    [serviceName_forinov] :  json_ReqResType_forinov,
    [serviceName_societeTech] :  json_ReqResType_societeTech,
} as const 