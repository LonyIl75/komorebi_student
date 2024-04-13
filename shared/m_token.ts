import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_token"

import {hours} from './hours.js'

export const expiresIn ={ access_token : hours.minuteToMilli(5), refresh_token : hours.dayToMilli(1)}


