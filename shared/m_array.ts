
import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_array"


import { AllPermutation, Enumerate, NestedArray, PermutationNb, PermutationU, UnionToArray, filterNotNullOrUndefinedArr, t_JoinChar, t_booleanFunction,t_getLastElementArr} from "./type.js"
import { _isNullOrUndefined } from "./m_primitives.js";
import _ from "lodash";

export const compareArray  = ( array1:any[] , array2 :any[]) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ return array1.length === array2.length && array1.every((value, index) => value === array2[index]) } 

export const arrayOnlyIndices = (arr :NestedArray<any> , indices :number[]) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return indices.map((index) => arr[index])
}

export function isNullArray(arr:any[]) { /*console.log("DEBUG_ME",getCurrentLine());*/
    return _isNullOrUndefined(arr)  || isEmptyArray(arr) 
}
export function isEmptyArray(arr:any[]) { /*console.log("DEBUG_ME",getCurrentLine());*/
    return arr.length == 0
}

export const isArray = (arg :any) => Array.isArray(arg)

export const isStrictArray = (arg :any) => Array.isArray(arg) && !isNullArray(arg)

export const convertToArray = <T>(arg :T | T[]) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return Array.isArray(arg) ? arg : [arg]
}

export function arrayIsEqual(a1,a2) { /*console.log("DEBUG_ME",getCurrentLine());*/
    return _.isEqual(a1, a2)
}

//A FAIRE : typing :
export const arrayToString = (arr :NestedArray<any> , separator :string = ",") =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return isNullArray(arr) ? undefined : "["+arr.join(separator)+"]"
}

//A FAIRE : typing
export const joinArray_with_char = <T extends readonly string [], JoinChar extends string = "">(paramArr:T, paramChar :JoinChar = "" as JoinChar) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    let _paramArr  = paramArr.filter((elm) => elm) as filterNotNullOrUndefinedArr<T>
    return _paramArr.join(paramChar) as t_JoinChar <typeof _paramArr,JoinChar>
}

export const concatArraysAndRemoveDuplicates = <T> (...argsArrays:T[]) => Array.from(new Set(argsArrays.reduce((acc, elm) => acc.concat(elm), [])))

export const arrayFilterIndices = (arr :readonly any[] | readonly NestedArray<any>[] , indices :number[]) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return arr.reduce((acc,elm,idx) => indices.includes(idx)? acc : [...acc,elm] ,[] as any[])
}

export function arrStarFilterFunction < T = any  , NArr extends NestedArray<T> = NestedArray<T> > 
(nestedArr : NArr , predicate: t_booleanFunction, thisArg?: any)  { /*console.log("DEBUG_ME",getCurrentLine());*/
    const funct = (arr : T[]) => (arr.filter(predicate,thisArg) as T[])
    return applyFunctionArrToDeepArr<T,NArr,T>(funct,nestedArr)
}
export const getLastElementArr = <T extends any[] = any[]>(arr : T) => (arr[arr.length-1] as  t_getLastElementArr<T>)

export const applyFunctionArrToDeepArr = <T,NArr extends NestedArray<T> ,  R = any >
(funct :(arg:T[])=>R[] , arr_elements : NArr ,
 embedAfterFunct : (arg:R[])=>[boolean,R[]] = (arg:R[])=>[arg?.length != 0 , arg]) : [boolean ,NestedArray<R> ]=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    if( Array.isArray(arr_elements )) {
        let _arr_elements = null 
        if((_arr_elements = arr_elements?.filter((el_elem )=>Array.isArray(el_elem)))?.length != 0) {
                let res : NestedArray<R> = _arr_elements.reduce((acc:any,elem:NestedArray<T>) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    let [_b , val ] = applyFunctionArrToDeepArr(funct,elem,embedAfterFunct) 
                    return _b ? [...acc,val] : acc 
                },[] as NestedArray<R>)

            return [res?.length != 0 , res ]
        }
        else return embedAfterFunct(funct(arr_elements as T[]))
    }else throw new Error(`applyFunctionArrToDeepArr : arr_elements is not an array`)
    }


export const applyFunctionElmToDeepArr = <T>(funct :(arg:T)=>any , arr_elements : NestedArray<T>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return arr_elements.map((elem) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        if( Array.isArray(elem ) && elem.some((el_elem )=>Array.isArray(el_elem)) ) return applyFunctionElmToDeepArr(funct,elem)
        else return funct(elem)
        })
    }


export function getPermutation <T extends readonly any[], SZ extends number = 0> (list :T, maxLen:SZ  = 0 as SZ) { /*console.log("DEBUG_ME",getCurrentLine());*/

        var perm = list.map(function(val) { /*console.log("DEBUG_ME",getCurrentLine());*/
            return [val];
        });

        var generate = function(perm, maxLen, currLen) { /*console.log("DEBUG_ME",getCurrentLine());*/

            if (currLen === maxLen) { /*console.log("DEBUG_ME",getCurrentLine());*/
                return perm;
            }

            for (var i = 0, len = perm.length; i < len; i++) { /*console.log("DEBUG_ME",getCurrentLine());*/
                var currPerm = perm.shift();
                for (var k = 0; k < list.length; k++) { /*console.log("DEBUG_ME",getCurrentLine());*/
                    perm.push(currPerm.concat(list[k]));
                }
            }
            return generate(perm, maxLen, currLen + 1);
        };

        return generate(perm, maxLen, 1) as  PermutationNb<T,SZ>
    };

export function enumerate <End extends number, Beg extends number = 0 > ( end :End,beg :Beg= 0 as Beg){ /*console.log("DEBUG_ME",getCurrentLine());*/
    let result = [] 
    for(let i = beg ; i <= end ; i++) result.push(i)
    return result as Enumerate<End,Beg>
}



//credits : @M Oehm

export function getPermutationAll<T extends readonly any[]>(array:T) { /*console.log("DEBUG_ME",getCurrentLine());*/

    function xpermute_rec(res, sub, array) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if (array.length == 0) { /*console.log("DEBUG_ME",getCurrentLine());*/
            if (sub.length > 0) permute_rec(res, "", sub);
        } else {
            xpermute_rec(res, sub, array.slice(1));
            xpermute_rec(res, sub.concat(array[0]), array.slice(1));
        }
    }

    function swap(array, i, j) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if (i != j) { /*console.log("DEBUG_ME",getCurrentLine());*/
            var swap = array[i];
            array[i] = array[j];
            array[j] = swap;
        }
    }
    
    function permute_rec(res, str, array) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if (array.length == 0) { /*console.log("DEBUG_ME",getCurrentLine());*/
            res.push(str);
        } else {
            for (var i = 0; i < array.length; i++) { /*console.log("DEBUG_ME",getCurrentLine());*/
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


export const splitArr = (arr,idxSplits) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    
    let res = [arr.slice(0,idxSplits[0])]
    
    res= [...res,...idxSplits.slice(1).reduce((acc,idxSplit,num)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return       [...acc,arr.slice(idxSplits[num]+(num+1),idxSplit)]
}
    ,[])]
    
    res = [...res,arr.slice(idxSplits[idxSplits.length-1]+idxSplits.length)]

    return res 
}