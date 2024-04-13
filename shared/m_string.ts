import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_string"

import { char_join_hyphen, char_join_underscore, t_JoinChar_hyphen, t_JoinChar_underscore, t_JoinChar_underscore_lowercase } from "./type.js";
import { _isNullOrUndefined, nullOrUndefined } from "./m_primitives.js";

export const todo_str ="TODO"

export const emptyStr = "" as const 
export type t_emptyStr = typeof emptyStr
export type t_isStrEmpty <T extends string> = T extends t_emptyStr  ? true : false
export const isStrEmpty = <T extends string>(str :T) => ((str === emptyStr) as t_isStrEmpty<T>)

export type t_isStrEmptyOrNullOrUndefined <T extends string> = T extends nullOrUndefined|"" ? true : false
export const isStrEmptyOrNullOrUndefined = (str :string) => _isNullOrUndefined(str) || isStrEmpty(str) 

export const stringToArray = (paramStr: string, delimiter : string = ".") : any[]=> paramStr.split(delimiter)

const join_filter = (char_join : string, ...args:string[]  ) => args.filter((_)=>_).join(char_join)
export const join_underscore = < T extends readonly string[]>(...args:T ) => join_filter(char_join_underscore,...args) as t_JoinChar_underscore<T>;

export const join_underscore_lowercase = < T extends readonly string[]>(..._args:T )  => {
    const args = _args.map((e)=>minFirstChar(e))
    return join_filter(char_join_underscore,...args) as t_JoinChar_underscore_lowercase<T>
}

export const join_hyphen = < T extends readonly string[]>(...args:T ) => join_filter(char_join_hyphen,...args) as t_JoinChar_hyphen<T>; 

export const join_hyphen_lowercase = < T extends readonly string[]>(..._args:T )  => {
    const args = _args.map((e)=>minFirstChar(e))
    return join_filter(char_join_hyphen,...args) as t_JoinChar_underscore_lowercase<T>
}

export const join_dot = < T extends readonly string[]>(...args:T ) =>join_filter(".",...args) as t_JoinChar_hyphen<T>;

export const str_df = "df" as const
export const getDfPrefixName = <T extends string >(name:T) => join_underscore(str_df,name)

export const str_cst = "cst" as const
export const str_st = "st" as const

export const getStaticPrefixName = < P extends string, T extends string > ( prefix : P , name : T )=> join_underscore(prefix,name)
export const getCstPrefixName = <T extends string >(name:T) => getStaticPrefixName(str_cst,name)
export const getStPrefixName = <T extends string >(name:T) => getStaticPrefixName(str_st,name)



export const str_get = "get" as const 
export const str_set = "set" as const 
export const getMemberPrefixName = <T extends string , P extends string > (prefix : P , name:T) => join_underscore(prefix,name)
export const getGetterPrefixName = <T extends string > (name:T)=> getMemberPrefixName(str_get,name)
export const getSetterPrefixName = <T extends string > (name:T)=> getMemberPrefixName(str_set,name)


export const majAllStr = <Z extends string > (str:Z) : Uppercase<Z> => str.toUpperCase() as Uppercase<Z>  ;
export const majFirstChar = <Z extends string > (str:Z) : Capitalize<Z> => str.charAt(0).toUpperCase() + str.slice(1) as Capitalize<Z>  ;
export const minAllStr = <Z extends string > (str:Z) : Lowercase<Z> => str.toLowerCase() as Lowercase<Z>  ;
export const minFirstChar = <Z extends string > (str:Z) : Lowercase<Z> => str.charAt(0).toLowerCase() + str.slice(1) as Lowercase<Z>  ;

export const str_validation_strRegex = "validation_strRegex" as const
export type t_str_validation_strRegex = typeof str_validation_strRegex

export const str_init = "init" as const
export type t_str_init = typeof str_init

export const dottedName = (str:string) => {
    let res = "";
    let _car = str.charAt(0);
    res += _car.toLowerCase();

    for ( let i = 1 ; i < str.length ; i++) {
        _car = str.charAt(i);
        if(_car == _car.toUpperCase()) res += "."+_car.toLowerCase();
        else res += _car;
    }
    return res;
}

export const putSuffix = <T extends string , TSuff extends string> (str:T,suffix:TSuff) => (`${str}${suffix}` as const )
export const toPlural = <T extends string>(str:T) => putSuffix<T,"s">(str,"s")