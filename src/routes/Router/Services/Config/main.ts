import { serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js";
import { json_ReqResType_pourdebon } from "./pourdebon/ConfigReqRes.js";

export const json_ReqResType = {
    [serviceName_pourdebon]: json_ReqResType_pourdebon
} as const 