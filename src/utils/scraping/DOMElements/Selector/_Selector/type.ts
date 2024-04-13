
import { FunctionPromiseType,  IsUnion, NestedArray, PopUnion, findInJson,  jsonObjectToArrValue,  jsonType, t_arr_other_any, t_booleanFunction, t_function, t_functionPromise, t_parentFunction } from "@shared/type.js";
import { ElementHandle, Page } from "puppeteer";
import { rejectValueForPromiseArr ,t_rejectValueForPromiseArr} from "@shared/m_promise.js";
import { IJson } from "@shared/m_object.js";

export type selector = string ;
export type selectors = readonly selector[];




export const _reject_qSelector :t_rejectValueForPromiseArr = rejectValueForPromiseArr
export type t_reject_qSelector = t_rejectValueForPromiseArr
export type t_isRejected_qSelector<T extends any[]> = T extends t_reject_qSelector ? true : false 
export const isRejected_qSelector = <T extends any[]>(arr:T)=> (arr.length == 0 || (arr as any) == _reject_qSelector ) as t_isRejected_qSelector<T>

export const _reject_element_allSettled :  [t_reject_qSelector] = [_reject_qSelector]
export type t_reject_element_allSettled = typeof _reject_element_allSettled ;
export type t_isRejected_element_allSettled<T extends any[]> = T extends t_reject_element_allSettled ? true : false 
export const isRejected_element_allSettled = <T extends any[]>(arr:T)=> ((arr.length == 1 && arr[0].length ==0) || (arr as any) == _reject_element_allSettled ) as t_isRejected_element_allSettled<T>


export type t_ElementHN = ElementHandle<Node>
export type  t_pageOrElementHN = Page | t_ElementHN
export type t_resSelector = t_ElementHN ;

export type t_elementHE = ElementHandle<Element>
export type  t_pageOrElementHE = Page | t_elementHE



export type NestedArrayElementOrEmpty = NestedArray<t_pageOrElementHN>|[]


type _arrJsonToParam < T extends readonly IJson[]> = T extends [infer U,...infer R ] ? [U[keyof U ],...arrJsonToParam<R>] : []

export type arrJsonToParam <T extends readonly IJson[] = readonly IJson[] > =  IJson[] extends T ? any[] :_arrJsonToParam<T> 

export type getTypeArrJson < T extends string > = [{_type  : T }]

export type getArrOfTypeArrJson < T extends string > = { [k in  T ] : getTypeArrJson<k>} 

export type getArrReject < T extends string , Arr extends readonly any[]> =  Arr extends [infer _ , ...infer R ] ? IsUnion<T> extends true ?  PopUnion<T> extends string ? 
{[k in PopUnion<T>]:Arr[0]} & getArrReject < Exclude<T,PopUnion<T>> , R extends [] ? [_] : R> : {} :{[k in T]:Arr[0]} :{}


export type t_arr_IPageOrElement =[
    page_or_element: t_pageOrElementHN
]


export type t_arr_IPageOrElement_super = t_arr_other_any<t_arr_IPageOrElement>

export type t_arr_IBaseFunctionSelector  = [
    ...t_arr_IPageOrElement,
    selector: selector
]

export type t_arr_IBaseFunctionSelector_super = t_arr_other_any<t_arr_IBaseFunctionSelector>

export type IFunctionTypeFSelector <   U extends  NestedArrayElementOrEmpty = NestedArrayElementOrEmpty  ,B extends t_arr_IPageOrElement_super =  t_arr_IPageOrElement , O extends {[k in string ] : any }[] =[] > = 
IFunctionSelector<O ,U,B> 

export type  IFunctionSelector<O extends readonly IJson[] =[]  ,
U extends  NestedArrayElementOrEmpty =NestedArrayElementOrEmpty ,   
B extends t_arr_IPageOrElement_super =  t_arr_IBaseFunctionSelector , > = 
//Parameters<F> extends infer ParamFirst ? ParamFirst extends readonly [t_pageOrElementHN,...readonly any[]] ? 
[...jsonObjectToArrValue<B> ,... arrJsonToParam<O> ] extends infer ArrParam ? ArrParam extends any[] ?  
( ...args:ArrParam) => Promise<U> : never : never //: never : never 

export  enum str_ISelectorFunctionObject_props {
    function = "function",
    getRejectedValue = "getRejectedValue",
    isRejected = "isRejected"

} 

interface _ISelectorFunctionObject<O extends readonly IJson[] , rejectedValue , _F extends IFunctionSelector = IFunctionSelector<O> > {
    [str_ISelectorFunctionObject_props.function] : _F 
    [str_ISelectorFunctionObject_props.getRejectedValue] : ()=>rejectedValue
    [str_ISelectorFunctionObject_props.isRejected] : t_booleanFunction<[Awaited<ReturnType<_F>>|rejectedValue]> 
}

export type ISelectorFunctionObject<O extends readonly IJson[] , rejectedValue , _F extends IFunctionSelector = IFunctionSelector<O> > = 
_ISelectorFunctionObject<O,rejectedValue,_F> extends infer A ? IJson<str_ISelectorFunctionObject_props,t_function> extends A ? A : never :never 

export type t_selectorFunction = ISelectorFunctionObject< IJson[],any>
export type t_selectorFunctionPropName = keyof t_selectorFunction

export type t_getPropFromISelectorFunctionObject< T  , propName extends t_selectorFunctionPropName >  =  T extends t_selectorFunction ? T[propName]:never


export const getFunctionFromISelectorFunctionObject = 
<T extends t_selectorFunction> ( selectorObject : T) => {
    return selectorObject[str_ISelectorFunctionObject_props.function] as t_getPropFromISelectorFunctionObject<T,str_ISelectorFunctionObject_props.function>
}   

export type t_getFunctionFromISelectorFunctionObject < T extends t_selectorFunction>  = ReturnType<typeof getFunctionFromISelectorFunctionObject<T>>

export const getRejectedValueFromISelectorFunctionObject = 
<T extends t_selectorFunction>( selectorObject : T) => {
    return selectorObject[str_ISelectorFunctionObject_props.getRejectedValue] as t_getPropFromISelectorFunctionObject<T,str_ISelectorFunctionObject_props.getRejectedValue>
}

export type t_getRejectedValueFromISelectorFunctionObject< T extends t_selectorFunction>  = ReturnType<typeof getRejectedValueFromISelectorFunctionObject<T>>


export const getIsRejectedFromISelectorFunctionObject =
<T extends t_selectorFunction>( selectorObject : T) => {
    return selectorObject[str_ISelectorFunctionObject_props.isRejected] as t_getPropFromISelectorFunctionObject<T,str_ISelectorFunctionObject_props.isRejected>
}

export type t_getIsRejectedFromISelectorFunctionObject< T extends t_selectorFunction>  = ReturnType<typeof getIsRejectedFromISelectorFunctionObject<T>>

export type  ISelectorFunctionsObjects< K extends string  , rejectedValues extends readonly any[]   , O  extends {[ke in K] :readonly IJson[]}  = getArrOfTypeArrJson<K> ,
 _rejectedValues    = getArrReject<K ,rejectedValues> >  = _rejectedValues extends {[ke in K] :any}  ? {
    [key in K ] : ISelectorFunctionObject<O[key],_rejectedValues[key]>
} : {}

export type t_jsonFromFunctionName <UFN extends string , FN extends UFN , ISF extends ISelectorFunctionsObjects<UFN , any , any ,any  >  > =  ISF extends {[key in UFN ] :any } ? ISF[UFN] : never 


export type t_jsonFromPropName <propName extends t_selectorFunctionPropName , 
UFN extends string , ISF extends ISelectorFunctionsObjects<UFN , any , any >,
value extends  t_jsonFromFunctionName<UFN , UFN , ISF >[propName] > =  
ISF extends jsonType<[UFN, t_selectorFunctionPropName]>  ?  findInJson <[UFN,t_selectorFunctionPropName]  , ISF , propName , value> :never



export function getSelectorJson< F extends t_function , R  extends t_function>(_function : F   , getRejectedValue :  R ){
    return {
        function : _function ,
         getRejectedValue : getRejectedValue,
         isRejected :(arr:Awaited<ReturnType<F>>|R ) : boolean => {
            return arr == getRejectedValue()
    
        }
}
}