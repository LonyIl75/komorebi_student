import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_success"

import { IJson } from './m_object.js';
import { Message, t_jsonResponse, t_resp_message } from "./m_message.js"

export const df_success_status = 200
export const df_sucessNoContent_status = 204
export const df_success_creation = 201

class SuccessMessage extends Message{
    name_module :string
    message :string
    value :string
    static type : t_resp_message = "Success"
    constructor( name_module:string , message :string , value :string ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        super(SuccessMessage.type,name_module, message,value)
    } 
    toJson = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return {
            type : this.type,
            from : this.name_module,
            message : this.message,
            value : this.value
        }
    }
    static fromJson = (json : t_jsonResponse) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return new SuccessMessage(json.from,json.message,json.value)
    }
    static fromParamsToJson = (name_module:string , message :string , value :any ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        const valueStr = typeof value === "string" ? value : JSON.stringify(value)
        return new SuccessMessage(name_module,message,valueStr).toJson()
    }

    
    

}
type tf_getSuccessFunct =(name_module :string , value ?: IJson,name_field ?:string ) =>  t_jsonResponse

type FunctionSet = {
    [key :string ]:  tf_getSuccessFunct;
};

type JsonSuccessFunction ={
    [key :string ]:  FunctionSet; // YUP : champ_1 : [ "getSuccessFunct_1" , "getSuccessFunct_2" , ...] ,  SERV : status_1 : [ "getSuccessFunct_1" , "getSuccessFunct_2" , ...] ,  DB : status_1 : [ "getSuccessFunct_1" , "getSuccessFunct_2" , ...]
}

export const getErrorsMessages = ( name_module :string , value : IJson, getSuccessFunct : tf_getSuccessFunct ,errors : string[]  ) => getSuccessFunct( name_module , value ,errors.join("\n") )

export const yup_success : FunctionSet = {
    getDfSuccessMessages : (name_module , value , obj_name  ) => SuccessMessage.fromParamsToJson(name_module ,`Success of Yup Validation on : ${obj_name}` ,value)
}

export const server_success : FunctionSet = {
    getDfSuccessMessages : (name_module , value , act_name  ) => SuccessMessage.fromParamsToJson(name_module ,`Success of Server action : ${act_name}` ,value)
}

export const database_success : FunctionSet = {
    getCreateSuccessMessages : (name_module , value , obj_name  ) => SuccessMessage.fromParamsToJson(name_module ,`Success of Create on : ${obj_name}` ,value),
    getUpdateSuccessMessages : (name_module , value , obj_name  ) => SuccessMessage.fromParamsToJson(name_module ,`Success of Update on : ${obj_name}` ,value),
    getDeleteSuccessMessages : (name_module , value , obj_name  ) => SuccessMessage.fromParamsToJson(name_module ,`Success of Delete on : ${obj_name}` ,value),
    //getFindSuccessMessages : (name_module , value , obj_name  ) => SuccessMessage.fromParamsToJson(name_module ,`Success of Find on : ${obj_name}` ,value),
}