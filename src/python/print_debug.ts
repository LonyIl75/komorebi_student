
import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { concatNameModuleAndDebug, getNameModule } from '@/../shared/str_debug.js';

const name_module :string  =  getNameModule("python","print_debug")
const debug_print_debug : Debugger = debug(name_module)



// lib_processPythOutput , lines :[10 ; 20 ]

const message_sep : string = "|"
const feature_sep : string = ":"

enum Prefix {
    debug = "debug",
    err = "err",
    result = "result",

  }


const debug_message_prefix : Prefix = Prefix.debug
const err_message_prefix : Prefix =  Prefix.err
const res_message_prefix : Prefix =  Prefix.result



export type json_messages = {
    [key in keyof typeof Prefix]:Array<string>
}

export const print_debug= (name_module:string , messages:json_messages) => {
    let cur_arr_mssg : Array<string> = []
    let debug_message : {feature_name:string , feature_value:string} = {feature_name:"",feature_value:""}
    let map_debug_function : Map<string , Debugger> =  new Map<string , Debugger>()
    let arr_buff : Array<string> = []
    let cur_debug_function : Debugger = null as Debugger 
    console.log("messages",messages)
    for (const [key, value] of Object.entries(messages)) {
        cur_arr_mssg = value as Array<string>
        console.log("message",cur_arr_mssg ,value )
        for (const message of cur_arr_mssg ) {
            console.log("message",message)
            arr_buff=message.split(feature_sep,1)
            console.log("arr_buff",arr_buff)
            while (arr_buff.length < 2 ) arr_buff.push("")
            debug_message = {feature_name:arr_buff[0] , feature_value:arr_buff[1]}
            console.log("debug_message",debug_message)

            if((cur_debug_function=map_debug_function.get(debug_message.feature_name)) == undefined) {
                cur_debug_function=debug(concatNameModuleAndDebug(name_module ,debug_message.feature_name))
                map_debug_function.set(debug_message.feature_name,cur_debug_function)
            }   
            cur_debug_function(debug_message.feature_value)

      }
    }
    console.log("map_debug_function",map_debug_function)
}