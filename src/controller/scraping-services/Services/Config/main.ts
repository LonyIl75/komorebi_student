import config_entreprise_, { serviceName_entreprise_ } from "./entreprise_/config.js";
import config_lespepitestech, { serviceName_lespepitestech } from "./lespepitestech/config.js";

export const json_ConfigService = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  config_lespepitestech,
    [serviceName_entreprise_] :  config_entreprise_
} as const 