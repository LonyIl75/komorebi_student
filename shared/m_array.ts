
import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_array"


import { AllPermutation, Enumerate, NestedArray, PermutationNb, PermutationU, UnionToArray, filterNotNullOrUndefinedArr, t_JoinChar, t_booleanFunction,t_getLastElementArr} from "./type.js"
import { _isNullOrUndefined } from "./m_primitives.js";
import _ from "lodash";

export const compareArray  = ( array1:any[] , array2 :any[]) =>{  return array1.length === array2.length && array1.every((value, index) => value === array2[index]) } 

export const arrayOnlyIndices = (arr :NestedArray<any> , indices :number[]) =>{ 
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

export const convertToArray = <T>(arg :T | T[]) =>{ 
    return Array.isArray(arg) ? arg : [arg]
}

export function arrayIsEqual(a1,a2) { 
    return _.isEqual(a1, a2)
}

//A FAIRE : typing :
export const arrayToString = (arr :NestedArray<any> , separator :string = ",") =>{ 
    return isNullArray(arr) ? undefined : "["+arr.join(separator)+"]"
}

//A FAIRE : typing
export const joinArray_with_char = <T extends readonly string [], JoinChar extends string = "">(paramArr:T, paramChar :JoinChar = "" as JoinChar) =>{ 
    let _paramArr  = paramArr.filter((elm) => elm) as filterNotNullOrUndefinedArr<T>
    return _paramArr.join(paramChar) as t_JoinChar <typeof _paramArr,JoinChar>
}

export const concatArraysAndRemoveDuplicates = <T> (...argsArrays:T[]) => Array.from(new Set(argsArrays.reduce((acc, elm) => acc.concat(elm), [])))

export const arrayFilterIndices = (arr :readonly any[] | readonly NestedArray<any>[] , indices :number[]) =>{ 
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
                let res : NestedArray<R> = _arr_elements.reduce((acc:any,elem:NestedArray<T>) =>{ 
                    let [_b , val ] = applyFunctionArrToDeepArr(funct,elem,embedAfterFunct) 
                    return _b ? [...acc,val] : acc 
                },[] as NestedArray<R>)

            return [res?.length != 0 , res ]
        }
        else return embedAfterFunct(funct(arr_elements as T[]))
    }else throw new Error(`applyFunctionArrToDeepArr : arr_elements is not an array`)
    }


export const applyFunctionElmToDeepArr = <T>(funct :(arg:T)=>any , arr_elements : NestedArray<T>)=>{ 
    return arr_elements.map((elem) =>{ 
        if( Array.isArray(elem ) && elem.some((el_elem )=>Array.isArray(el_elem)) ) return applyFunctionElmToDeepArr(funct,elem)
        else return funct(elem)
        })
    }


export function getPermutation <T extends readonly any[], SZ extends number = 0> (list :T, maxLen:SZ  = 0 as SZ) { 

        var perm = list.map(function(val) { 
            return [val];
        });

        var generate = function(perm, maxLen, currLen) { 

            if (currLen === maxLen) { 
                return perm;
            }

            for (var i = 0, len = perm.length; i < len; i++) { 
                var currPerm = perm.shift();
                for (var k = 0; k < list.length; k++) { 
                    perm.push(currPerm.concat(list[k]));
                }
            }
            return generate(perm, maxLen, currLen + 1);
        };

        return generate(perm, maxLen, 1) as  PermutationNb<T,SZ>
    };

export function enumerate <End extends number, Beg extends number = 0 > ( end :End,beg :Beg= 0 as Beg){ 
    let result = [] 
    for(let i = beg ; i <= end ; i++) result.push(i)
    return result as Enumerate<End,Beg>
}



//credits : @M Oehm

export function getPermutationAll<T extends readonly any[]>(array:T) { 

    function xpermute_rec(res, sub, array) { 
        if (array.length == 0) { 
            if (sub.length > 0) permute_rec(res, "", sub);
        } else {
            xpermute_rec(res, sub, array.slice(1));
            xpermute_rec(res, sub.concat(array[0]), array.slice(1));
        }
    }

    function swap(array, i, j) { 
        if (i != j) { 
            var swap = array[i];
            array[i] = array[j];
            array[j] = swap;
        }
    }
    
    function permute_rec(res, str, array) { 
        if (array.length == 0) { 
            res.push(str);
        } else {
            for (var i = 0; i < array.length; i++) { 
                swap(array, 0, i);
                permute_rec(res, str + array[0], array.slice(1));
                swap(array, 0, i);
            }
        }
    }
    
    var res = [];

    xpermute_rec(res, [], array);
    return res as  AllPermutation<T>
}


export const splitArr = (arr,idxSplits) =>{ 
    
    let res = [arr.slice(0,idxSplits[0])]
    
    res= [...res,...idxSplits.slice(1).reduce((acc,idxSplit,num)=>{ 
    return       [...acc,arr.slice(idxSplits[num]+(num+1),idxSplit)]
}
    ,[])]
    
    res = [...res,arr.slice(idxSplits[idxSplits.length-1]+idxSplits.length)]

    return res 
}