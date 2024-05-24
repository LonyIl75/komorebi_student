import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_primitives"


import { _notFoundIdx, isEqual, t_notFoundIdx } from "./type.js";

export type nullOrUndefined = null | undefined;

export type t__isNullOrUndefined <T> = isEqual<T,null> | isEqual<T,undefined>
export function _isNullOrUndefined<T>(value: T ) : value is nullOrUndefined {
    return value === null || value === undefined;
}

export const str_function = "function" as const

export type t__isFunction<T> = isEqual<T,Function>
export const _isFunction = (val: any): val is Function =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return typeof val === 'function';
}

//export const js_isFunction = (varToCheck) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    //return varToCheck && {}.toString.call(varToCheck) === "[object Function]"
//}

export type t__isObject<T> = isEqual<T,Object>
export const _isObject = (val: any): val is Object =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return typeof val === 'object';
}
export type t__isArray<T> = isEqual<T,Array<any>>
export const _isArray = (val: any): val is Array<any> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return Array.isArray(val);
}
export type t_emptyCond<T> = (...args:any[])=>true
export function emptyCond(...args) { /*console.log("DEBUG_ME",getCurrentLine());*/
    return true
}

export const noReturnValue : undefined = undefined
export type t_noReturnValue = typeof noReturnValue

export type t_isRetFunctionisNothing = isEqual<t_noReturnValue,t_noReturnValue>
export function isRetFunctionisNothing (res : any) : res is t_noReturnValue {
    return res === noReturnValue
}

export const  _undefined=  ():nullOrUndefined  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ return void 0; };
export type t__undefined = ReturnType<typeof _undefined>

export const  _notFound = ():nullOrUndefined  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ return _undefined() ; };
export type t__notFound = ReturnType<typeof _notFound>


export type t_is_notFound<T> = isEqual<T,t__notFound>
export const  is_notFound= (element:any) : element is t__notFound =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return element === _notFound();
};

export type t_isNotFoundIdx<T> = isEqual<T,t_notFoundIdx>
export const isNotFoundIdx = <T extends number>(idx:T) => (idx ===  _notFoundIdx()) as t_isNotFoundIdx<T>


export type t_m_isNil<T> = T extends null ? | T extends t__undefined ? true : false : false
export const  m_isNil = <T>(element:T) :boolean =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return element == null || element == _undefined();
}; 

export const  notFoundPromise = ():Promise<nullOrUndefined > =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return new Promise((resolve,reject) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        reject(_notFound());
    })
}

export const noFieldName = "_" as const
export type t_noFieldName = typeof noFieldName




export const getConstructorNew = <_T, T extends abstract new (...args: any) => any > (cst : { new (...args:ConstructorParameters<T>): _T } , ...args : ConstructorParameters<T> ):_T =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return new cst(...args);
}

export type t_getConstructorNew <_T, T extends abstract new (...args: any) => any > = typeof getConstructorNew<_T,T>

export const getFctConstructorNew = <_T, T extends abstract new (...args: any) => any > (cst : { new (...args:ConstructorParameters<T>): _T }  ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return ( ...args : ConstructorParameters<T>) => new cst(...args);
}

export type t_getFctConstructorNew <_T, T extends abstract new (...args: any) => any > = typeof getConstructorNew<_T,T>


export const undefined_address = 0x0000000000000000
export const str_undefined_address = `0x0000000000000000`

export const val_null_nullOrUndefined : nullOrUndefined = null;
export const val_undefined_nullOrUndefined : nullOrUndefined = undefined;

export function isNumeric (value : any) : boolean {
    return !isNaN(value - parseFloat(value));
}
export function isNotEmptyArray(arr) { /*console.log("DEBUG_ME",getCurrentLine());*/
     return !_isNullOrUndefined(arr) && arr.length > 0
  }