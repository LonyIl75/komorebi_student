import getCurrentLine from "get-current-line"
import { getNameModule } from "@shared/str_debug.js"

const str_scrap = "scrap"
export const getNameModuleScraping = (serviceName:string , page_name:string) : string =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return getNameModule(serviceName,page_name,str_scrap)
}