import { serviceName_entreprise_ } from "../Config/entreprise_/config.js"
import { serviceName_forinov } from "../Config/forinov/config.js"
import { serviceName_lespepitestech } from "../Config/lespepitestech/config.js"
import { Entreprise_MainService, doServiceEntreprise_ } from "./entreprise_/Entreprise_.js"
import { LespepitestechMainService, doServiceLespepitestech } from "./lespepitestech/Lespepitestech.js"
import { ForinovMainService, doServiceForinov } from "./forinov/Forinov.js"
import { SocieteTechMainService, doServiceSocieteTech } from "./societeTech/SocieteTech.js"
import { serviceName_societeTech } from "../Config/societeTech/config.js"

export const json_MainService = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  await LespepitestechMainService,
    [serviceName_entreprise_] :  await Entreprise_MainService,
    [serviceName_forinov] :  await ForinovMainService,
    [serviceName_societeTech] :  await SocieteTechMainService,
} as const 




export const json_doService = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :  doServiceLespepitestech,
    [serviceName_entreprise_] :  doServiceEntreprise_,
    [serviceName_forinov] :  doServiceForinov,
    [serviceName_societeTech] :  doServiceSocieteTech,
} as const 