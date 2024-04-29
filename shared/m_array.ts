
import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_array"


import { NestedArray, filterNotNullOrUndefinedArr, t_JoinChar, t_booleanFunction,t_getLastElementArr} from "./type.js"
import { _isNullOrUndefined } from "./m_primitives.js";

export const compareArray  = ( array1:any[] , array2 :any[]) => { return array1.length === array2.length && array1.every((value, index) => value === array2[index]) } 

export const arrayOnlyIndices = (arr :NestedArray<any> , indices :number[]) => {
    return indices.map((index) => arr[index])
}

export function isNullArray(arr:any[]) {
    return _isNullOrUndefined(arr)  || isEmptyArray(arr) 
}
export function isEmptyArray(arr:any[]) {
    return arr.length == 0
}

export const isArray = (arg :any) => Array.isArray(arg)

export const isStrictArray = (arg :any) => Array.isArray(arg) && !isNullArray(arg)

export const convertToArray = <T>(arg :T | T[]) => {
    return Array.isArray(arg) ? arg : [arg]
}

//A FAIRE : typing :
export const arrayToString = (arr :NestedArray<any> , separator :string = ",") => {
    return isNullArray(arr) ? undefined : "["+arr.join(separator)+"]"
}

//A FAIRE : typing
export const joinArray_with_char = <T extends readonly string [], JoinChar extends string = "">(paramArr:T, paramChar :JoinChar = "" as JoinChar) => {
    let _paramArr  = paramArr.filter((elm) => elm) as filterNotNullOrUndefinedArr<T>
    return _paramArr.join(paramChar) as t_JoinChar <typeof _paramArr,JoinChar>
}

export const permutator = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  
   permute(inputArr)
  
   return result;
  }

export const concatArraysAndRemoveDuplicates = <T> (...argsArrays:T[]) => Array.from(new Set(argsArrays.reduce((acc, elm) => acc.concat(elm), [])))

export const arrayFilterIndices = (arr :readonly any[] | readonly NestedArray<any>[] , indices :number[]) => {
    return arr.reduce((acc,elm,idx) => indices.includes(idx)? acc : [...acc,elm] ,[] as any[])
}

export function arrStarFilterFunction < T = any  , NArr extends NestedArray<T> = NestedArray<T> > 
(nestedArr : NArr , predicate: t_booleanFunction, thisArg?: any)  {
    const funct = (arr : T[]) => (arr.filter(predicate,thisArg) as T[])
    return applyFunctionArrToDeepArr<T,NArr,T>(funct,nestedArr)
}
export const getLastElementArr = <T extends any[] = any[]>(arr : T) => (arr[arr.length-1] as  t_getLastElementArr<T>)

export const applyFunctionArrToDeepArr = <T,NArr extends NestedArray<T> ,  R = any >
(funct :(arg:T[])=>R[] , arr_elements : NArr ,
 embedAfterFunct : (arg:R[])=>[boolean,R[]] = (arg:R[])=>[arg?.length != 0 , arg]) : [boolean ,NestedArray<R> ]=>{
    if( Array.isArray(arr_elements )) {
        let _arr_elements = null 
        if((_arr_elements = arr_elements?.filter((el_elem )=>Array.isArray(el_elem)))?.length != 0) {
                let res : NestedArray<R> = _arr_elements.reduce((acc:any,elem:NestedArray<T>) => {
                    let [_b , val ] = applyFunctionArrToDeepArr(funct,elem,embedAfterFunct) 
                    return _b ? [...acc,val] : acc 
                },[] as NestedArray<R>)

            return [res?.length != 0 , res ]
        }
        else return embedAfterFunct(funct(arr_elements as T[]))
    }else throw new Error(`applyFunctionArrToDeepArr : arr_elements is not an array`)
    }


export const applyFunctionElmToDeepArr = <T>(funct :(arg:T)=>any , arr_elements : NestedArray<T>)=>{
    return arr_elements.map((elem) => {
        if( Array.isArray(elem ) && elem.some((el_elem )=>Array.isArray(el_elem)) ) return applyFunctionElmToDeepArr(funct,elem)
        else return funct(elem)
        })
    }