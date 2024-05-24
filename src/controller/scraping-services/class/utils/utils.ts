import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';
import { majFirstChar } from '@shared/m_string.js';

const name_module :string  = getNameModule("scrapingServices_utils","utils")
const debug_scrapingService_utils : Debugger = debug(name_module)


const str_service = "service" as const 

export const str_Service  = majFirstChar(str_service)
export const str_Services = `${str_Service}s` as const
export const str_src = "src" as const

export const getNameModuleService = <SN extends string , PN extends string >(serviceName:SN , page_name:PN) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return getNameModule(serviceName,page_name,str_service)
}

const str_serviceCommander = str_service + "Commander"

export const getNameModuleServiceCommander = <SN extends string , PN extends string >(serviceName:SN , page_name:PN) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return getNameModule(serviceName,page_name,str_serviceCommander)
}
