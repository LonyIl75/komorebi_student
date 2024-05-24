import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_error"


import process from "process";
import { Message, t_jsonResponse, t_resp_message } from "./m_message.js";
import { IJson } from "./m_object.js";

export const EXIT_FAILURE  = 1 as const ;

export type t_fct_errorHandler<T = void> = (error: any) => T;

export const df_fct_errorHandler : t_fct_errorHandler = (error: any) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    console.log(error);
    return process.exit(EXIT_FAILURE);
};

export const ifNotGetDfErrorHandler  = <T>(errorHandler ?: t_fct_errorHandler<T>) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return errorHandler ?errorHandler : df_fct_errorHandler
}


//type t_getErrorFunct = t_function<string>

export const df_error_status = 500
export const df_error_auth = 401 
export const df_error_invalidDataRq = 400
export const df_error_forbiden = 403

export const df_error_conflict = 409

class ErrorMessage extends Message{
    name_module :string // location de l'erreur : par exemple la route/module 
    message :string
    value :string
    static type : t_resp_message = "Error"

    constructor( name_module:string , message :string , value :string ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        super(ErrorMessage.type,name_module, message,value)
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
        return new ErrorMessage(json.from,json.message,json.value)
    }
    static fromParamsToJson = (name_module:string , message :string , value :any ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        const valueStr = typeof value === "string" ? value : JSON.stringify(value)
        return new ErrorMessage(name_module,message,valueStr).toJson()
    }

    
    

}
type tf_getErrorFunct =(name_module :string , value ?: IJson,name_field ?:string ) =>  t_jsonResponse

type FunctionSet = {
    [key :string ]:  tf_getErrorFunct;
};

type JsonErrorFunction ={
    [key :string ]:  FunctionSet; // YUP : champ_1 : [ "getErrorFunct_1" , "getErrorFunct_2" , ...] ,  SERV : status_1 : [ "getErrorFunct_1" , "getErrorFunct_2" , ...] ,  DB : status_1 : [ "getErrorFunct_1" , "getErrorFunct_2" , ...]
}

export const getErrorsMessages = ( name_module :string , value : IJson, getErrorFunct : tf_getErrorFunct ,errors : string[]  ) => getErrorFunct( name_module , value ,errors.join("\n") )

export const yup_errors : FunctionSet = {
    getDfErrorMessages : (name_module , value , errors  ) => ErrorMessage.fromParamsToJson(name_module ,`Errors ${errors}` ,value)
    , getRequiredErrorMessages : ( name_module ,value ,name_field   ) => ErrorMessage.fromParamsToJson(name_module ,`Required field ${name_field}` ,value)
    , getInvalidErrorMessages : (name_module ,value ,name_field   ) => ErrorMessage.fromParamsToJson(name_module ,`Invalid field ${name_field}` ,value)
    , getInvalidTypeErrorMessages : (name_module ,value ,name_field  ) => ErrorMessage.fromParamsToJson(name_module ,`Invalid type field ${name_field}` , value)
    , getUnothorizedErrorMessages : (name_module ,_id  ) => ErrorMessage.fromParamsToJson(name_module ,`Unothorized ID received ` , _id)
}

export const server_errors : FunctionSet = {
    getDfErrorMessages : (name_module ,value , errors  ) =>ErrorMessage.fromParamsToJson( name_module ,`Errors ${errors}` , value),
    getNoSessionFound : (name_module ,value  ) =>ErrorMessage.fromParamsToJson( name_module ,`No session found` , value),
    getNoSessionCookieFound : (name_module ,value ) =>ErrorMessage.fromParamsToJson( name_module ,`No session cookie found` , value),
    getNoJwtCookieFound : (name_module ,value  ) =>ErrorMessage.fromParamsToJson( name_module ,`No jwt cookie found` , value),
    getJwtTokenIncorrect : (name_module ,value ,errors ) =>ErrorMessage.fromParamsToJson( name_module ,`Jwt token incorrect , errors : ${errors} ` , value), 

}

export const database_errors : FunctionSet = {
    getNotFoundIDErrorMessages : (name_module ,_id  ) => ErrorMessage.fromParamsToJson( name_module ,`ID not found` , _id),
    getMisMatchInfoErrorMessages : (name_module ,_id ,name_field  ) => ErrorMessage.fromParamsToJson( name_module ,`Mismatch information ${name_field}` , _id),
    getDuplicateErrorMessage : (name_module ,_id  ) => ErrorMessage.fromParamsToJson( name_module ,`Duplicate ID` , _id),

    getCreationErrorMessage :  (name_module ,_id  ) => ErrorMessage.fromParamsToJson( name_module ,`Creation error` , _id),
    getUpdateErrorMessage :  (name_module ,_id  ) => ErrorMessage.fromParamsToJson( name_module ,`Update error` , _id),
    getDeleteErrorMessage :  (name_module ,_id  ) => ErrorMessage.fromParamsToJson( name_module ,`Delete error` , _id),
}