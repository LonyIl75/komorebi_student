import config_booksToscrape, { serviceName_booksToscrape } from "./booksToscrape/config.js";

export const json_ConfigService = {
    //#ADD NEW SERVICE HERE
    [serviceName_booksToscrape] :  config_booksToscrape
} as const 