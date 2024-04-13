import { serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js";
import { PourdebonServiceBouchers } from "../Services/src/pourdebon/Services/Bouchers/Bouchers.js";
import { str_bouchers } from "../Services/src/pourdebon/Services/Bouchers/human-actions.js";
import { PourdebonServiceLegumes } from "../Services/src/pourdebon/Services/Legumes/Legumes.js";
import { str_legumes } from "../Services/src/pourdebon/Services/Legumes/human-actions.js";
import { PourdebonServiceLogin } from "../Services/src/pourdebon/Services/Login/Login.js";
import { str_login } from "../Services/src/pourdebon/Services/Login/human-actions.js";
import { PourdebonServiceMain } from "../Services/src/pourdebon/Services/Main/Main.js";
import { str_main } from "../Services/src/pourdebon/Services/Main/human-actions.js";

export const json_serviceRoute = {
    //#ADD NEW SERVICE HERE
    [serviceName_pourdebon] :{
      [str_login]:PourdebonServiceLogin,
      [str_main]:PourdebonServiceMain,
      [str_legumes]:PourdebonServiceLegumes,
      [str_bouchers]:PourdebonServiceBouchers
    }
  }