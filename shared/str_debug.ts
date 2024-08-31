
import getCurrentLine from "get-current-line"
import * as m_debug from "./m_debug.js"
import { getBaseFileName } from "./m_file.js";

export const nameFile = "str_debug"//TODO = getBaseFileName(__filename)

import { end_line_js, getRegexG, getRegexGM, isAssignationRegex, match_balanced_parantheses_str_regex } from "./m_regex.js";
import { deb_commentary } from "./m_regex_comment.js";
import { getGroupUnionStrRegex, embedCapturingGroupStrOrRegex, embedBeginAndEndOfLineStrOrRegex } from "./m_regex_prefixAndSuffix.js";
import { join_underscore, majFirstChar } from "./m_string.js";
import { Page } from "puppeteer";


export class RemoveDebug{

    constructor(ignore_function:string[]=[],ignore_variable:string[]=[]){ /*console.log("DEBUG_ME",getCurrentLine());*/
        this.debug_functions_regex = getRegexG(RemoveDebug.getDebugFunctionRegex(ignore_function))
        this.debug_variables_regex = getRegexG(RemoveDebug.getDebugVariablesRegex(ignore_variable))
    }


    static getDebugFunctionRegex(ignored_function){ /*console.log("DEBUG_ME",getCurrentLine());*/
        const debug_functions = Object.keys(m_debug).filter((_str)=>!Object.keys(m_debug.helpers).concat(Object.keys(m_debug.assignation)).includes(_str))
        const all_debug = ignored_function.concat(debug_functions)
        let all_debugFunction_regex = getGroupUnionStrRegex(all_debug)
        let function_debug_regex = embedCapturingGroupStrOrRegex(all_debugFunction_regex + match_balanced_parantheses_str_regex+end_line_js,true);
        return function_debug_regex
    }

    static getDebugVariablesRegex(ignored_variable){ /*console.log("DEBUG_ME",getCurrentLine());*/
        const debug_variables = Object.keys(m_debug.assignation)
        const all_debug = ignored_variable.concat(debug_variables)
        let all_debugVariable_regex = getGroupUnionStrRegex(all_debug)
        let variable_debug_regex = isAssignationRegex + all_debugVariable_regex + '\\([^;]*?;\\s*' ;
        return variable_debug_regex
    }

    debug_functions_regex;
        debug_variables_regex ;



    static getIgnoreImportRegex(str_comment_debug :string ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        return  deb_commentary+'[^\\S\\n]*' +str_comment_debug
    }

    removeDebugFunctions(str_src:string) :[string,RegExpExecArray|null]{
        let m= getRegexGM(embedBeginAndEndOfLineStrOrRegex("(.+)",true)).exec( str_src);//notPatternLookahead(".*import")+// .*?; MAYBE A FAIRE 
        let word =""
        if(m){ /*console.log("DEBUG_ME",getCurrentLine());*/
             word= m[1] 
            
            if((word.search(this.debug_variables_regex)!=-1 || word.search(/const\s+name_module\s*=/)!=-1 )){
                word=""
            }else{
                word = m[1].replace(this.debug_functions_regex,"")
            }
            
        }
        return [word as string ,m]
    }

}

export const getNameModule = <SN extends string , PN extends string , C extends string = undefined >(serviceName:SN , page_name:PN, category?: C )  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    let _res = (category==undefined ? [serviceName,page_name] : [serviceName,category,page_name]) as C extends undefined ? [SN,PN] : [SN,C,PN]
    return m_debug.debug_join(_res)
}


export const concatNameModuleAndDebug = <S1 extends string , S2 extends string > (name_module:S1 , name_debug:S2)  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return m_debug.debug_join([name_module,name_debug])
}

export const getNameDebugAllNameModule = <S1 extends string >(name_module:S1  )  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return concatNameModuleAndDebug(name_module,"a")
}

export const join_screenshot = <T extends readonly string[]> (...args: T) => join_underscore(...args);

export const take_screenshot = async (page:Page, path:string,num:number) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    await page.screenshot({ path: join_screenshot(num.toString() , path ) });
}

export const getTestName = <T extends string>(_str:T)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return `test${majFirstChar(_str)}` as const
}

export const getNameHumanActions = <T extends string>(_str:T)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return `humanActions${majFirstChar(_str)}` as const
}
export const str_idRouteAndRemoteAddresss = "routes" as const 

export const str_connection ="connection" as const