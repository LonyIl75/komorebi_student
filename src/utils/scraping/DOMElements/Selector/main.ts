


import { debug,debug_join,debug_with_curLine,debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import {Debugger} from "debug"
import { concatNameModuleAndDebug } from "@shared/str_debug.js";


const name_module :string = "pptrSelectors"
const debug_pptrS_trySelectors :Debugger  = debug(concatNameModuleAndDebug(name_module,"trySelectors_any"))
const debug_pptrS_waitSelectors :Debugger  = debug(concatNameModuleAndDebug(name_module,"waitSelectors"))


import type { selectorsOptions } from "./_Selector/options.js";
import { JSHandle } from "puppeteer";
import { df_selectorsOptions } from "./_Selector/options.js";
import {  throwIfResolveWith } from "@shared/m_promise.js";
import { getArrFunctSelector, getPromiseArrQuerySelectorFilter, moded_execution_selectors, moded_execution_selectors_reject, print_moded_execution_selectors, t_moded_execution_selectors, t_moded_execution_selectors_afterFilter } from "./ExecutionSelectors.js";
import { NestedArray, t_empty1DArray, t_function, t_functionPromise, t_promiseAwaited } from "@shared/type.js";
import { _isNullOrUndefined, _notFound, is_notFound } from "@shared/m_primitives.js";
import { applyFunctionElmToDeepArr } from "@shared/m_array.js";
import { FSelector } from "./_Selector/m_pptrSelector.js";
import { FSelectorAll } from "./_Selector/m_pptrSelectorsAll.js";
import { mode_of_executionSelector, t_name_selectorFunction, t_funct_selector_withCatch } from "./_Selector/main.js";
import { t_pageOrElementHN, selectors, t_resSelector, t_ElementHN } from "./_Selector/type.js";

//TRY : 

export type t_trySelectorFunction_ = (page_or_element: t_pageOrElementHN  , lst_selector: Readonly<selectors> ,mode_resolution : mode_of_executionSelector.t_enum ) =>  any // ReturnType<t_funct_selector_withCatch<mode_of_executionSelector,t_name_selectorFunction> >
export type t_shortHandtrySelectorFunction_ = (page_or_element: t_pageOrElementHN  , lst_selector: Readonly<selectors>  ) =>  any // ReturnType<t_funct_selector_withCatch<mode_of_executionSelector,t_name_selectorFunction> >

export type t_trySelectorFunction = <T extends mode_of_executionSelector.t_enum  , FN extends t_name_selectorFunction> (page_or_element: t_pageOrElementHN  , lst_selector: Readonly<selectors> ,mode_resolution : T ) =>  ReturnType<t_funct_selector_withCatch<T,FN> > 


export const trySelectors : t_trySelectorFunction = <T extends mode_of_executionSelector.t_enum , FN extends t_name_selectorFunction ,IsCatch extends boolean = false> (page_or_element: t_pageOrElementHN , lst_selector: Readonly<selectors>,mode_resolution : T  , is_catch :IsCatch = false   as IsCatch )  => {
    return getPromiseArrQuerySelectorFilter(page_or_element, lst_selector, mode_resolution,FSelector.name_functionSelector.querySelector,is_catch ) as   Promise<t_moded_execution_selectors_afterFilter<T, FN>> as ReturnType<t_funct_selector_withCatch<T,FN> >
}


export const trySelectors_any_all  /*:ITrySelector*/  = async <IsCatch extends boolean = false>(page_or_element: t_pageOrElementHN , lst_selector: Readonly<selectors>, is_catch :IsCatch = false   as IsCatch,  isFiltered : boolean = true   )  => {
    return getPromiseArrQuerySelectorFilter(page_or_element, lst_selector,mode_of_executionSelector.val_any, FSelectorAll.name_functionSelector.querySelectorAll ,is_catch,isFiltered) as Promise<t_moded_execution_selectors<mode_of_executionSelector.t_any, FSelectorAll.name_functionSelector.querySelectorAll>>  as ReturnType<t_funct_selector_withCatch<mode_of_executionSelector.t_any,FSelectorAll.name_functionSelector.querySelectorAll>>

}

export const trySelectors_all_ = async  <IsCatch extends boolean = false>(element: JSHandle  , lst_selector: Readonly<selectors>, is_catch :IsCatch = false   as IsCatch, )  => {
    return trySelectors_all(element.asElement() ,lst_selector,is_catch);
}

export const trySelectors_all  /*:ITrySelector*/  = async  <IsCatch extends boolean = false>(page_or_element: t_pageOrElementHN  , lst_selector: Readonly<selectors>, is_catch :IsCatch = false   as IsCatch, ) => {
    return getPromiseArrQuerySelectorFilter(page_or_element, lst_selector, mode_of_executionSelector.val_all, FSelectorAll.name_functionSelector.querySelectorAll ,is_catch) as  Promise<t_moded_execution_selectors<mode_of_executionSelector.t_all, FSelectorAll.name_functionSelector.querySelectorAll>> as ReturnType<t_funct_selector_withCatch<mode_of_executionSelector.t_all,FSelectorAll.name_functionSelector.querySelectorAll>>
}

//A FAIRE : 
export const checkRejected_trySelectorFunction =<TF extends t_function /*t_trySelectorFunction_*/ > ( arr:Awaited<ReturnType<TF>>  ) => {
    return arr.length ==  0 ? _notFound(): (arr as Exclude< Awaited<ReturnType<TF>> ,t_empty1DArray> )
 }


export const args_trySelectors_any  = [ mode_of_executionSelector.val_any, FSelector.name_functionSelector.querySelector ] as const 
export type t_args_trySelectors_any = typeof args_trySelectors_any

export const trySelectors_any /*:ITrySelector*/ = <IsCatch extends boolean = false>(page_or_element: t_pageOrElementHN , lst_selector: Readonly<selectors>  , is_catch :IsCatch = false   as IsCatch) => {//: Promise<t_moded_execution_selectors<mode_of_executionSelector.any, FSelector.t_funct_querySelector>>  => {
    return getPromiseArrQuerySelectorFilter(page_or_element, lst_selector, ...args_trySelectors_any,is_catch) as Promise< t_moded_execution_selectors_afterFilter<t_args_trySelectors_any[0],t_args_trySelectors_any[1]>> 
}

export const chaining_trySelectors_any =  <IsCatch extends boolean = false>(page_or_element: t_pageOrElementHN , lst_lst_selector: readonly Readonly<selectors>[], is_catch :IsCatch = false   as IsCatch)=>{
    let arr_trySelector_any = lst_lst_selector.map((lst_selector :Readonly<selectors> )=>{
        return (_page_or_element : t_pageOrElementHN)=> trySelectors_any(_page_or_element,lst_selector,is_catch)//.then(trySelector_convertToChainingFunctionSelector)
    } )
    let res = moded_execution_selectors<mode_of_executionSelector.t_chaining , FSelector.name_functionSelector.querySelector>(page_or_element , arr_trySelector_any, mode_of_executionSelector.val_chaining, FSelector.name_functionSelector.querySelector)
    print_moded_execution_selectors<mode_of_executionSelector.t_chaining , FSelector.name_functionSelector.querySelector>(res)
    return res 
}


//WAIT : 

function getPromiseArrWaitSelector <T extends mode_of_executionSelector.t_enum,FN extends t_name_selectorFunction, IsCatch extends boolean = false  >( page_or_element: t_pageOrElementHN , lst_selector: Readonly<selectors>  , function_selector_name:FN  ,mode_resolution :T , s_option :selectorsOptions 
    , is_catch : IsCatch = false as IsCatch
    ) { 
    // , to_flatten : boolean = false prom_res.then((res:ElementHandle<Node>[][])=> res.flat() ) :
    return getArrFunctSelector<T,FN, IsCatch>(page_or_element,lst_selector,mode_resolution,function_selector_name,is_catch) 
}

// A FAIRE mode_of_executionSelector -> T with : https://stackoverflow.com/questions/69866995/extending-generic-function-parameter-type-typescript
export const  waitSelectors /*:IWaitSelector_global<mode_of_executionSelector > */ = <T extends mode_of_executionSelector.t_enum , IsCatch extends boolean = false  >(page_or_element: t_pageOrElementHN  , lst_selector: Readonly<selectors>, mode_resolution : T  =mode_of_executionSelector.val_any as T, s_option :selectorsOptions= df_selectorsOptions  , is_catch : IsCatch = false as IsCatch ) => {
    return getPromiseArrWaitSelector  < T,FSelectorAll.name_functionSelector.waitSelector ,IsCatch  >  (page_or_element , lst_selector , FSelectorAll.name_functionSelector.waitSelector , mode_resolution , s_option ,is_catch  )   //{selector: selector, element: element};
}


export function waitLstSelectorsSequential(page_or_element: t_pageOrElementHN  , lst_lst_selector: readonly Readonly<selectors>[], s_option :selectorsOptions= df_selectorsOptions):
Promise<t_moded_execution_selectors<mode_of_executionSelector.t_sequential, FSelectorAll.name_functionSelector.waitSelector>[]> {
    return Promise.all(lst_lst_selector.map(async (lst_selector :Readonly<selectors> )=>{
        // A FAIRE : 
        return  throwIfResolveWith (moded_execution_selectors_reject)(getPromiseArrWaitSelector  ,page_or_element , lst_selector,FSelectorAll.name_functionSelector.waitSelector , mode_of_executionSelector.val_sequential, s_option ,true  )  as   Promise<t_moded_execution_selectors<mode_of_executionSelector.t_sequential, FSelectorAll.name_functionSelector.waitSelector>> //as ReturnType<t_funct_selector_withCatch<mode_of_executionSelector.sequential,FSelectorAll.name_functionSelector.waitSelector>>
    } ))//{selector: selector, element: element};
}

export async function getElmFromArrSelector (page : t_pageOrElementHN , arr_selector : selectors[]){
    type t_rien = null
    const rien :t_rien  = null 
    const isRien = _isNullOrUndefined
    const recur = async (_page_or_element:t_pageOrElementHN,_arr_selector:selectors[])=>{
        const recur_res  : Promise<t_ElementHN[]>  = (async (page_or_element:t_pageOrElementHN, arr_selector:selectors[])=>{
            if(arr_selector.length){
                const  _res : Promise<t_ElementHN[]>[] = await trySelectors_any_all(page_or_element,arr_selector[0]).then((arr_of_elements: Awaited<ReturnType<typeof trySelectors_any_all>>)=>{
                let i_child : t_resSelector[] 
                //@ts-ignore
                i_child= arr_of_elements.flat()
                const r : Promise<t_resSelector[]>[] = i_child.map((elm)=>recur(elm,arr_selector.slice(1)))
                return r
                })
                const res : Promise<t_ElementHN[]> = Promise.all(_res.map((promise: Promise<t_resSelector[]>) => promise.catch(error =>{return rien }))).then((_res:(t_resSelector[]|t_rien)[])=>{
                    const r :t_resSelector[][]= _res.filter((e)=>!isRien(e))
                    return r.flat()
                })
                return res
            }else {
                const res : Promise<t_ElementHN[]>  = Promise.resolve(_page_or_element).then((res)=>[res] as t_ElementHN[])
                return res 
            }

        })(_page_or_element,_arr_selector)
        return recur_res

    }
    return recur(page,arr_selector)

}


//**************************


export const _applyFunctionAfterTrySelectorF = <F extends t_functionPromise<any,[t_resSelector]>> (async_fct : F  ) => {
    return async <FN extends t_name_selectorFunction , T extends mode_of_executionSelector.t_enum   > 
    ( _arr_elements:Awaited<ReturnType<t_funct_selector_withCatch<T,FN>>> ) : t_promiseAwaited<ReturnType<t_funct_selector_withCatch<T,FN>>> =>{
        let arr_elements  = checkRejected_trySelectorFunction<t_funct_selector_withCatch<T,FN>>(_arr_elements)
        if( ! is_notFound(arr_elements) ) {
            applyFunctionElmToDeepArr<t_resSelector>(async_fct,arr_elements as NestedArray<t_resSelector>) 
        }
        return _arr_elements 
    }
}

export const applyFunctionNextToTrySelectorF = async <TF extends (t_trySelectorFunction_|t_shortHandtrySelectorFunction_) , F extends t_functionPromise<any,[t_resSelector]> , _P extends  Parameters<TF> = Parameters<TF>>   
(trySelectorFunction : TF ,async_fct : F ,...args:_P  ) => {
    //@ts-ignore
    return args[1]== undefined?  async_fct(args[0]): trySelectorFunction(...args ).then(
        async (res   ) => {
            return await _applyFunctionAfterTrySelectorF(async_fct)(res)
        }
    ) ;
}

type t_JSHandle_getProperty = JSHandle["getProperty"]

export type t_property = Parameters<t_JSHandle_getProperty>[0]

const _getPropertyPageOrElementHN = async (element_or_page : t_pageOrElementHN, _prop : t_property ) => {
    return (element_or_page as any).evaluate((node:any,prop:t_property)=> {
        return node[prop]
    },_prop)
}

export const getPropertyPageOrElementHN = ( _prop : t_property) => {
    return (element_or_page : t_pageOrElementHN) => _getPropertyPageOrElementHN(element_or_page,_prop)
}
 