import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_message"

export type t_resp_message = "Error" |"Success" ;


export type t_jsonResponse = {type:string , from:string , message : string , value : string }

export abstract class Message {
    type : t_resp_message
    name_module :string
    message :string
    value :string
    constructor( type : t_resp_message , name_module:string , message :string , value :string ){
        this.type = type
        this.name_module = name_module
        this.message = message
        this.value = value
    }
    toJson : ()=> t_jsonResponse

    
    static fromJson :(json : t_jsonResponse) => Message 
    static fromParamsToJson :(type : t_resp_message , name_module:string , message :string , value :string ) => t_jsonResponse
}

