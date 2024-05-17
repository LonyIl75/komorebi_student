import { serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";
import { str_login } from "../Services/src/lespepitestech/Services/Login/human-actions.js";
import { str_main } from "../Services/src/lespepitestech/Services/Main/human-actions.js";
import { str_startupsMtp } from "../Services/src/lespepitestech/Services/StartupsMtp/human-actions.js";
import { LespepitestechServiceStartupsMtp } from "../Services/src/lespepitestech/Services/StartupsMtp/StartupsMtp.js";
import { LespepitestechServiceLogin } from "../Services/src/lespepitestech/Services/Login/Login.js";
import { LespepitestechServiceMain } from "../Services/src/lespepitestech/Services/Main/Main.js";

export const json_serviceRoute = {
    //#ADD NEW SERVICE HERE
    [serviceName_lespepitestech] :{
      [str_login]:LespepitestechServiceLogin,
      [str_main]:LespepitestechServiceMain,
      [str_startupsMtp]:LespepitestechServiceStartupsMtp,
    }
  }