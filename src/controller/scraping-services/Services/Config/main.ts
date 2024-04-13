import config_pourdebon, { serviceName_pourdebon } from "./pourdebon/config.js";

export const json_ConfigService = {
    //#ADD NEW SERVICE HERE
    [serviceName_pourdebon] :  config_pourdebon
} as const 