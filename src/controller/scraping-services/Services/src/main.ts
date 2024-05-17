import { serviceName_lespepitestech } from "../Config/lespepitestech/config.js"
import { LespepitestechMainService, doServiceLespepitestech } from "./lespepitestech/Lespepitestech.js"



export const json_MainService = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  await LespepitestechMainService,
} as const 




export const json_doService = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  doServiceLespepitestech,
} as const 