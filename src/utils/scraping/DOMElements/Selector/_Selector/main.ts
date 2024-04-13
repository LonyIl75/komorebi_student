import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule, str_idRouteAndRemoteAddresss } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector","main")
const debug_selector_main : Debugger = debug(name_module)


import { _getPairedElement, _getPairedElementValue, jsonObjectToArrValue, t_function  } from "@shared/type.js";
import { FSelector } from "./m_pptrSelector.js";
import { FSelectorAll } from "./m_pptrSelectorsAll.js";
import { IFunctionTypeFSelector, t_arr_IPageOrElement,t_getIsRejectedFromISelectorFunctionObject, getRejectedValueFromISelectorFunctionObject, getFunctionFromISelectorFunctionObject, t_getFunctionFromISelectorFunctionObject, t_getRejectedValueFromISelectorFunctionObject, t_selectorFunction,getIsRejectedFromISelectorFunctionObject, NestedArrayElementOrEmpty, t_arr_IPageOrElement_super, isRejected_qSelector } from "./type.js";
import { fct_alwaysTrue } from '@shared/m_function.js';
import { enum_promise_execution } from '@shared/m_promise.js';

export type t_arr_name_selectorFunction =  [FSelectorAll.name_functionSelector, FSelector.name_functionSelector]  ;
export type t_name_selectorFunction = t_arr_name_selectorFunction[number]

export type t_arr_selectorFunctionsObjects = [FSelectorAll.SelectorAll , FSelector.Selector]  ;
export type t_selectorFunctionsObjects = t_arr_selectorFunctionsObjects[number]

export type t_functSelectorObject = jsonObjectToArrValue<  FSelector.Selector>[number] | jsonObjectToArrValue<  FSelectorAll.SelectorAll>[number]

export type t_functSelectorIsRejected = t_getIsRejectedFromISelectorFunctionObject<t_functSelectorObject>



export const arr_functSelectorObject:t_arr_selectorFunctionsObjects = [FSelectorAll.SelectorAll.provider , FSelector.Selector.provider]



type forSelectorFunction< ArrFN extends t_name_selectorFunction[]> = 
ArrFN extends [infer A , ...infer R] ? 
    A extends t_name_selectorFunction ?R  extends t_name_selectorFunction[] ?
        (_getPairedElementValue<A,t_arr_name_selectorFunction,t_arr_selectorFunctionsObjects> extends infer F ? 
            A extends keyof F ? F[A] :never 
        :never ) | forSelectorFunction<R>
    : never : never 
: never

//IMP IF new selectorFunction NEED CHANGING HERE 
export type t_functSelectorObject_fromFunctionName< FN  extends t_name_selectorFunction > = 
t_name_selectorFunction extends FN ? forSelectorFunction<t_arr_name_selectorFunction> : 
forSelectorFunction<[FN]> 


export const invalidValue_functSelectorObject = null as unknown as t_functSelectorObject

export type foreachFunction_arrFunctSelectorObject = ( arg : t_selectorFunctionsObjects ) => t_functSelectorObject |typeof invalidValue_functSelectorObject

export const forEach_arrFunctSelectorObject = ( _funct : foreachFunction_arrFunctSelectorObject ): ReturnType<foreachFunction_arrFunctSelectorObject> =>{
    let res: ReturnType<foreachFunction_arrFunctSelectorObject>  = invalidValue_functSelectorObject
    for( const objectF of  arr_functSelectorObject){
            res = _funct(objectF as t_selectorFunctionsObjects  )
            if(res!=invalidValue_functSelectorObject) return res
    }
    return res
}

export const getFunctSelectorObjectFromFunctionName = < FN extends t_name_selectorFunction >(name : FN) 
: t_functSelectorObject_fromFunctionName< FN>   => {
        const find_functSelectorObjectFromFunctionName : foreachFunction_arrFunctSelectorObject = (objectF : t_selectorFunctionsObjects) => {
            let res : t_functSelectorObject = invalidValue_functSelectorObject
            for( const name_selectorFunction in objectF){
                if (name_selectorFunction == name) { 
                    res= objectF[name_selectorFunction] //as t_functSelectorObject
                    return res 
                }
            }
            return res
        }
        return forEach_arrFunctSelectorObject(find_functSelectorObjectFromFunctionName) as t_functSelectorObject_fromFunctionName< FN>
    
}


export type t_functSelector_fromFunctionName < FN extends t_name_selectorFunction , _objF  = t_functSelectorObject_fromFunctionName< FN>> =
_objF extends t_selectorFunction ?t_getFunctionFromISelectorFunctionObject<_objF> : never 



export const getFunctSelectorFromFunctionName = < FN extends t_name_selectorFunction >(name : FN) 
: t_functSelector_fromFunctionName< FN>   => {
    let objectF: t_functSelectorObject_fromFunctionName< FN>  = getFunctSelectorObjectFromFunctionName(name)
    return getFunctionFromISelectorFunctionObject<t_functSelectorObject_fromFunctionName< FN>> (objectF) as t_functSelector_fromFunctionName< FN>
}




export type t_getRejectedValueSelector_fromFunctionName < FN extends t_name_selectorFunction , _objF = t_functSelectorObject_fromFunctionName< FN>> = 
_objF extends t_selectorFunction ? t_getRejectedValueFromISelectorFunctionObject<_objF> : never 


export const getRejectedValueSelectorFromFunctionName = < FN extends t_name_selectorFunction >(name : FN)
: t_getRejectedValueSelector_fromFunctionName< FN>   => {
    let objectF: t_functSelectorObject_fromFunctionName< FN>  = getFunctSelectorObjectFromFunctionName(name)
    return getRejectedValueFromISelectorFunctionObject(objectF) as t_getRejectedValueSelector_fromFunctionName< FN>
}


export type t_isRejectedValueSelector_fromFunctionName < FN extends t_name_selectorFunction , _objF = t_functSelectorObject_fromFunctionName< FN>> = 
_objF extends t_selectorFunction ? t_getIsRejectedFromISelectorFunctionObject<_objF> : never 


export const getIsRejectedValueSelectorFromFunctionName = < FN extends t_name_selectorFunction >(name : FN)
: t_isRejectedValueSelector_fromFunctionName< FN>   => {
    let objectF: t_functSelectorObject_fromFunctionName< FN>  = getFunctSelectorObjectFromFunctionName(name) 
    return getIsRejectedFromISelectorFunctionObject(objectF) as t_isRejectedValueSelector_fromFunctionName< FN>
}

export type  t_CastFunctionType_selector_fromFunctName <FN extends t_name_selectorFunction,T extends t_arr_IPageOrElement_super =  t_arr_IPageOrElement > = 
t_functSelector_fromFunctionName<FN> extends t_function<Promise< infer _R>> ? _R extends NestedArrayElementOrEmpty ? 
 IFunctionTypeFSelector<_R , T > :never  :never ;


export type t_errCatchFunction < R > = (err : any) => R
export type t_errFunction  = (err : any) => never

//TODO : executionSelectors and main , extract common type and stuff in third file
export  namespace  mode_of_executionSelector {
    export const val_any = enum_promise_execution[enum_promise_execution.any] 
    export const val_all = enum_promise_execution[enum_promise_execution.all] 
    export const val_sequential = enum_promise_execution[enum_promise_execution.sequential] 
    export const val_allSettled = enum_promise_execution[enum_promise_execution.allSettled]
    export const val_chaining = enum_promise_execution[enum_promise_execution.chaining] 

    export type t_any = typeof val_any
    export type t_all = typeof val_all
    export type t_sequential = typeof val_sequential
    export type t_allSettled = typeof val_allSettled
    export type t_chaining = typeof val_chaining

    export type t_enum = t_any | t_all | t_sequential | t_allSettled | t_chaining
}

export type t_getCatchValueOfFunctSelector < T extends mode_of_executionSelector.t_enum,FN extends t_name_selectorFunction > =
T extends mode_of_executionSelector.t_any | mode_of_executionSelector.t_all ? t_getRejectedValueSelector_fromFunctionName<FN> extends t_function<infer R> ? R :never :
T extends mode_of_executionSelector.t_sequential | mode_of_executionSelector.t_chaining ? typeof FSelectorAll.res_reject_qSelectorAll_element
: typeof FSelector.reject_qSelector

export type t_retgetCatchFunctionOfFunctSelector <T extends mode_of_executionSelector.t_enum ,FN extends t_name_selectorFunction> = t_errCatchFunction<t_getCatchValueOfFunctSelector<T,FN>> 




export  const getCatchFValueOfFunctSelector =<T extends mode_of_executionSelector.t_enum ,FN extends t_name_selectorFunction > (
    mode_resolution : T,name : FN 
    ) :t_getCatchValueOfFunctSelector<T,FN>=>{


    let catch_value  = FSelector.reject_qSelector  //default case 

    switch( mode_resolution){
        case mode_of_executionSelector.val_any :
        case mode_of_executionSelector.val_all:
            catch_value = getRejectedValueSelectorFromFunctionName<FN>(name)()
            break ; 
        case mode_of_executionSelector.val_sequential :
        case mode_of_executionSelector.val_chaining :
            catch_value = FSelectorAll.res_reject_qSelectorAll_element
            break;
        
    } 
    return catch_value as t_getCatchValueOfFunctSelector<T,FN>
}

export const isCatchFValueOfFunctSelector = <T extends mode_of_executionSelector.t_enum , FN extends t_name_selectorFunction >(value : any,mode_resolution : T,name : FN ) => {
    if(getIsRejectedValueSelectorFromFunctionName(name)(value)) return true
    else {
        return isRejected_qSelector(value)
    }

}

 export  const getCatchFunctionOfFunctSelector =< T extends mode_of_executionSelector.t_enum ,FN extends t_name_selectorFunction > (
    mode_resolution : T,name : FN ,) :t_retgetCatchFunctionOfFunctSelector<T,FN>=>{


    let catch_funct : t_errCatchFunction<t_getCatchValueOfFunctSelector<T,FN>> = (err: any)=> getCatchFValueOfFunctSelector<T,FN>(mode_resolution,name)

    return catch_funct as t_retgetCatchFunctionOfFunctSelector<T,FN>
}

export type t_funct_selector_withoutCatch <  FN extends t_name_selectorFunction > = t_CastFunctionType_selector_fromFunctName<FN,t_arr_IPageOrElement>

export type t_funct_selector_withCatch <T extends mode_of_executionSelector.t_enum , FN extends t_name_selectorFunction,
 FT extends t_funct_selector_withoutCatch<FN> =t_funct_selector_withoutCatch<FN> > = 
 t_retgetCatchFunctionOfFunctSelector<T,FN> extends infer FC ? FC extends t_errCatchFunction<any>  
    ? t_function<Promise<Awaited<ReturnType<FT>> |ReturnType<FC>>,Parameters< FT>> : never : never 

export const noFilterFunction = fct_alwaysTrue
export type t_notFiltertFunction = typeof noFilterFunction