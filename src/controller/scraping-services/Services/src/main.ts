import { serviceName_entreprise_ } from "../Config/entreprise_/config.js"
import { serviceName_lespepitestech } from "../Config/lespepitestech/config.js"
import { Entreprise_MainService, doServiceEntreprise_ } from "./entreprise_/Entreprise_.js"
import { LespepitestechMainService, doServiceLespepitestech } from "./lespepitestech/Lespepitestech.js"



export const json_MainService = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  await LespepitestechMainService,
    [serviceName_entreprise_] :  await Entreprise_MainService
} as const 




export const json_doService = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  doServiceLespepitestech,
    [serviceName_entreprise_] :  doServiceEntreprise_
} as const 