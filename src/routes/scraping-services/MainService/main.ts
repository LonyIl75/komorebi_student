import { serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import { str_login } from "../Services/src/lespepitestech/Services/Login/human-actions.js";
import { str_main } from "../Services/src/lespepitestech/Services/Main/human-actions.js";
import { str_startupsMtp } from "../Services/src/lespepitestech/Services/StartupsMtp/human-actions.js";
import { LespepitestechServiceStartupsMtp } from "../Services/src/lespepitestech/Services/StartupsMtp/StartupsMtp.js";
import { LespepitestechServiceLogin } from "../Services/src/lespepitestech/Services/Login/Login.js";
import { LespepitestechServiceMain } from "../Services/src/lespepitestech/Services/Main/Main.js";
import { serviceName_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js";
import { Entreprise_ServiceLogin } from "../Services/src/entreprise_/Services/Login/Login.js";
import { Entreprise_ServiceMain } from "../Services/src/entreprise_/Services/Main/Main.js";

export const json_serviceRoute = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :{
      [str_login]:LespepitestechServiceLogin,
      [str_main]:LespepitestechServiceMain,
      [str_startupsMtp]:LespepitestechServiceStartupsMtp,
    },
    [serviceName_entreprise_] :{
      [str_login]:Entreprise_ServiceLogin,
      [str_main]:Entreprise_ServiceMain,
    }
  }