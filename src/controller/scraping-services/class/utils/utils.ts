import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("scrapingServices_utils","utils")
const debug_scrapingService_utils : Debugger = debug(name_module)


const str_service = "service"

export const str_Service = str_service.charAt(0).toUpperCase() + str_service.slice(1)
export const str_Services = str_Service + "s"
export const str_src = "src" as const

export const getNameModuleService = (serviceName:string , page_name:string) : string => {
    return getNameModule(serviceName,page_name,str_service)
}

const str_serviceCommander = str_service + "Commander"

export const getNameModuleServiceCommander = (serviceName:string , page_name:string) : string => {
    return getNameModule(serviceName,page_name,str_serviceCommander)
}
