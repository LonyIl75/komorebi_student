
import { getBaseFileName } from './m_file.js';

export const nameFile = "m_debug"//TODO = getBaseFileName(__filename)

import debug from 'debug';
import {config as package_config } from "./data/config.js"
import {Debugger} from "debug"  
import { t_JoinChar } from './type.js';

interface currentLine{
    method : string,
    file : string,
    line : number,
    char : number
    

}

export interface DebuggingOptions {
    isdebugging: boolean;
    screenshot: string;
}

export const df_debuggingOptions : DebuggingOptions = {isdebugging:false,screenshot:""}


const _:Function  = debug 
_("app:startup")("debugging is enabled")

//debug != str , create debug string with  filepath 

export const debug_sep =package_config.debug_sep


export const debug_join = <Arr extends readonly string[] >(arr_str : Arr)  => arr_str.join(debug_sep) as t_JoinChar<Arr,typeof debug_sep>


const get_embedding = (propNames : string[] , json_obj:any) :string => {
let res = propNames.map((propName) => {
    if(json_obj.hasOwnProperty(propName) ){
        if(typeof json_obj[propName] === "string" && json_obj[propName].length > 0 )return [propName ,json_obj[propName]].join(debug_sep) 
        if(typeof json_obj[propName] !== "string") return [propName ,json_obj[propName]].join(debug_sep) 
    }
    else return ""}
    ).filter((elm:string|undefined) => elm && elm.length > 0).join(" ")
return "(" + res + ")"
}

const props_debug_curLine = ["method","line"]

const debug_with_curLine = (debug_function : Debugger , curLine:currentLine , message ?:string  ) => debug_function( message +" " +get_embedding(props_debug_curLine,curLine) )
const debug_with_curLine_isresult = (debug_function : Debugger , curLine:currentLine , message ?:string  ) =>debug_function( "RESULT" + message +" " +get_embedding(props_debug_curLine,curLine) )

const _debug = (debug_function : Debugger , message ?:string  ) => debug_function( message  )

const debug_start_with_curLine = (debug_function : Debugger , curLine:currentLine  ) => debug_function("START")
const debug_end_with_curLine = (debug_function : Debugger , curLine:currentLine  ) => debug_function("END")


export const helpers = {debug_join,_debug,debug_sep}

export const assignation = {debug}

export {debug,_debug,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine,debug_with_curLine_isresult};

//# sourceMappingURL=m_debug.js.map