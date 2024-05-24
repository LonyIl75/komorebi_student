import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_function"

import { t_booleanFunction, t_function } from "./type.js";

export type err_function<T> = (err:any)=>T ;

export const printError = (obj:any , e:any) =>{ 
    console.log(`[ ${obj.constructor.name} ]Error writing file: ${e.message}`)
}


export function getFunctionName(fun) { 
    var res = fun.toString();
    res = res.substr('function '.length);
    res = res.substr(0, res.indexOf('('));
    return res;
  }

export  const fct_alwaysTrue :t_booleanFunction<any[],true> = (...args:any[]) => true ;
export  type t_fct_alwaysTrue = typeof fct_alwaysTrue


export  const fct_alwaysFalse :t_booleanFunction<any[],false> = (...args:any[]) => false ;
export  type t_fct_alwaysFalse = typeof fct_alwaysFalse

export  function isNot<T extends t_booleanFunction = t_booleanFunction  >  (fct : T ) :t_booleanFunction {
    return (...args:Parameters<T>) => !fct(...args)
}
