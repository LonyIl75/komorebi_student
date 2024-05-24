import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';


const name_module :string = "m_session"
const debug_browserPool : Debugger = debug(getNameModule("scraping_services_utils",name_module))


import { hours } from '@shared/hours.js';

export const get_session_maxAge = ():number =>{  return hours.minuteToMilli(30) } 
export const get_session_originalMaxAge = ():number =>{  return hours.hourToMilli(2) }