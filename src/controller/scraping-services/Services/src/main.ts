import { serviceName_pourdebon } from "../Config/pourdebon/config.js";

import { PourdebonMainService } from "./pourdebon/PourdebonService.js";

export const json_MainService = {
    //#ADD NEW SERVICE HERE
    [serviceName_pourdebon] :  await PourdebonMainService,
} as const 


import { doServicePourdebon } from "./pourdebon/PourdebonService.js";

export const json_doService = {
    //#ADD NEW SERVICE HERE
    [serviceName_pourdebon] :  doServicePourdebon,
} as const 