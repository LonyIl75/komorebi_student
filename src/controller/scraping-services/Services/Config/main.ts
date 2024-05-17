import config_lespepitestech, { serviceName_lespepitestech } from "./lespepitestech/config.js";

export const json_ConfigService = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  config_lespepitestech
} as const 