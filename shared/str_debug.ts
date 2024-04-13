
import * as m_debug from "./m_debug.js"
import { getBaseFileName } from "./m_file.js";

export const nameFile = "str_debug"//TODO = getBaseFileName(__filename)

import { embedBeginAndEndLineRegexStr, embedGroupStrRegex, end_line_js, getRegexG, getRegexGM, getUnionStrRegex, isAssignationRegex, match_balanced_parantheses_str_regex } from "./m_regex.js";
import { deb_commentary } from "./m_regex_comment.js";
import { join_underscore, majFirstChar } from "./m_string.js";
import { Page } from "puppeteer";


export class RemoveDebug{

    constructor(ignore_function:string[]=[],ignore_variable:string[]=[]){
        this.debug_functions_regex = getRegexG(RemoveDebug.getDebugFunctionRegex(ignore_function))
        this.debug_variables_regex = getRegexG(RemoveDebug.getDebugVariablesRegex(ignore_variable))
    }


    static getDebugFunctionRegex(ignored_function){
        const debug_functions = Object.keys(m_debug).filter((_str)=>!Object.keys(m_debug.helpers).concat(Object.keys(m_debug.assignation)).includes(_str))
        const all_debug = ignored_function.concat(debug_functions)
        let all_debugFunction_regex = getUnionStrRegex(all_debug)
        let function_debug_regex = embedGroupStrRegex(all_debugFunction_regex + match_balanced_parantheses_str_regex+end_line_js);
        return function_debug_regex
    }

    static getDebugVariablesRegex(ignored_variable){
        const debug_variables = Object.keys(m_debug.assignation)
        const all_debug = ignored_variable.concat(debug_variables)
        let all_debugVariable_regex = getUnionStrRegex(all_debug)
        let variable_debug_regex = isAssignationRegex + all_debugVariable_regex + '\\([^;]*?;\\s*' ;
        return variable_debug_regex
    }

    debug_functions_regex;
        debug_variables_regex ;



    static getIgnoreImportRegex(str_comment_debug :string ){
        return  deb_commentary+'[^\\S\\n]*' +str_comment_debug
    }

    removeDebugFunctions(str_src:string) :[string,RegExpExecArray|null]{
        let m= getRegexGM(embedBeginAndEndLineRegexStr("(.+)")).exec( str_src);//notPatternLookahead(".*import")+// .*?; MAYBE A FAIRE 
        let word =""
        if(m){
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

export const getNameModule = (serviceName:string , page_name:string, category?: string ) : string => {
    let _res = category==undefined ? [serviceName,page_name] : [serviceName,category,page_name]
    return m_debug.debug_join(_res)
}


export const concatNameModuleAndDebug = (name_module:string , name_debug:string) : string => {
    return m_debug.debug_join([name_module,name_debug])
}

export const getNameDebugAllNameModule = (name_module:string  ) : string => {
    return concatNameModuleAndDebug(name_module,"a")
}

export const join_screenshot = (...args: string[]) => join_underscore(...args);

export const take_screenshot = async (page:Page, path:string,num:number) => {
    await page.screenshot({ path: join_screenshot(num.toString() , path ) });
}

export const getTestName = (_str:string)=> {
    return "test" + majFirstChar(_str)
}

export const getNameHumanActions = (_str:string)=> {
    return "humanActions" + majFirstChar(_str)
}
export const str_idRouteAndRemoteAddresss = "routes"

export const str_connection ="connection"