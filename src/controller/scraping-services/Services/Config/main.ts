import config_entreprise_, { serviceName_entreprise_ } from "./entreprise_/config.js";
import config_forinov, { serviceName_forinov } from "./forinov/config.js";
import config_lespepitestech, { serviceName_lespepitestech } from "./lespepitestech/config.js";
import config_societeTech, { serviceName_societeTech } from "./societeTech/config.js";

export const json_ConfigService = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  config_lespepitestech,
    [serviceName_entreprise_] :  config_entreprise_,
    [serviceName_forinov] :  config_forinov,
    [serviceName_societeTech] :  config_societeTech,
} as const 