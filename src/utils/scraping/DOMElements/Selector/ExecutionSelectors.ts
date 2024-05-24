import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector","executionSelectors")
const debug_executionSelectors : Debugger = debug(name_module)


import { Page } from "puppeteer"
import { runChainingPromiseArray, runSequentialPromiseArray } from "@shared/m_promise.js"
import { NestedArray,  t_filter_arrType, t_function } from "@shared/type.js"
import { t_pipeline_env_var } from "@shared/m_pipeline.js"
import { getEmptyJson, isEmptyJson} from "@shared/m_object.js"
import { _notFound, is_notFound } from '@shared/m_primitives.js';
import { arrStarFilterFunction } from '@shared/m_array.js';
import { isNot } from '@shared/m_function.js';
import { t_name_selectorFunction, t_CastFunctionType_selector_fromFunctName, mode_of_executionSelector, t_funct_selector_withCatch, t_errFunction, t_retgetCatchFunctionOfFunctSelector, getCatchFunctionOfFunctSelector, t_functSelector_fromFunctionName, getFunctSelectorFromFunctionName, t_functSelectorIsRejected, t_notFiltertFunction, t_isRejectedValueSelector_fromFunctionName, getIsRejectedValueSelectorFromFunctionName, noFilterFunction, t_getCatchValueOfFunctSelector, isCatchFValueOfFunctSelector } from './_Selector/main.js';
import { IFunctionTypeFSelector, t_arr_IPageOrElement, _reject_qSelector, t_reject_qSelector, t_pageOrElementHN, selectors, isRejected_qSelector } from './_Selector/type.js';





type t_chainingParam_init < FN extends t_name_selectorFunction> = Parameters<IFunctionTypeFSelector> extends [infer P0,... infer _ ] ? P0 : never  // Parameters<t_execution_selectors_result<mode_of_executionSelector.chaining,FN>>[0]
type t_chainingParam < FN extends t_name_selectorFunction> = Exclude < t_chainingParam_init<FN> ,Page>

//A FAIRE delete type comment if everything correct  
/*
type fdsfdsvcvx = Awaited<Awaited<ReturnType<t_CastFunctionType_selector_fromFunctName<FSelector.name_functionSelector, t_arr_IPageOrElement>>>>
type fdsfgfdgdsvcvxv  = Awaited<Awaited<ReturnType<t_CastFunctionType_selector_fromFunctName<FSelectorAll.name_functionSelector, t_arr_IPageOrElement>>>>
type tgufdiyguhg = Awaited<t_retgetCatchFunctionOfFunctSelector<mode_of_executionSelector.t_chaining,FSelectorAll.name_functionSelector>>
type tgufdiyguhg_ = t_retgetCatchFunctionOfFunctSelector<mode_of_executionSelector.t_chaining,FSelector.name_functionSelector>


type fdsfds = t_CastFunctionType_selector_fromFunctName<t_name_selectorFunction,t_arr_IPageOrElement>
//ICI 26
*/

type t_modeResolution_needEnvVar< T extends mode_of_executionSelector.t_enum> = T extends mode_of_executionSelector.t_chaining ? true : T extends mode_of_executionSelector.t_sequential ? true : false 
const modeResolution_needEnvVar= <T extends mode_of_executionSelector.t_enum> (mode_resolution : T )  => (mode_resolution == mode_of_executionSelector.val_chaining || mode_resolution == mode_of_executionSelector.val_sequential) as t_modeResolution_needEnvVar<T>


export type t_execution_selectors_param_promiseArray <T extends mode_of_executionSelector.t_enum, FN extends t_name_selectorFunction > =
T extends mode_of_executionSelector.t_chaining ? t_funct_selector_withCatch <mode_of_executionSelector.t_chaining,FN> :
T extends mode_of_executionSelector.t_sequential ? t_function<ReturnType<t_funct_selector_withCatch <mode_of_executionSelector.t_sequential,FN>>,[]>
: Awaited<ReturnType<t_funct_selector_withCatch <T,FN>>> 

export type t_execution_selectors_result <T extends mode_of_executionSelector.t_enum, FN extends t_name_selectorFunction > = 
    Awaited<ReturnType<t_funct_selector_withCatch <T,FN>>> extends infer _Arr ? 
        ( _Arr extends readonly any[]? _Arr : [_Arr]) extends infer Arr ? Arr extends readonly any[]?
            Promise<t_modeResolution_needEnvVar<T>  extends true ? 
            [t_pipeline_env_var,...Arr] :Arr > 
        :never :never 
    : never 

export const moded_execution_selectors_reject = <T extends mode_of_executionSelector.t_enum , FN extends t_name_selectorFunction > (mode_resolution : T ,function_selector_name:FN) =>{ 
    type t_reject = t_getCatchValueOfFunctSelector<T,FN> 
    const reject = getCatchFunctionOfFunctSelector<T,FN>(mode_resolution,function_selector_name) (new Error(""))  as t_reject
    const res = (modeResolution_needEnvVar<T>(mode_resolution) ?  [getEmptyJson(), reject] :[reject] )as ([t_pipeline_env_var,t_reject] |[t_reject]) extends infer _A ?  t_modeResolution_needEnvVar<T> extends infer _B ? boolean extends _B ? _A : _B extends true ? Exclude<_A, [t_reject]> :Exclude<_A, [t_pipeline_env_var,t_reject]> : never :never
    return res
}
export const  isRejected_modedExecutionSelectors = < T extends mode_of_executionSelector.t_enum ,FN extends t_name_selectorFunction >(value : any,mode_resolution : T,name : FN ) =>{ 
    return isCatchFValueOfFunctSelector<T,FN>(value,mode_resolution,name) 
}

type t_moded_execution_selectors_reject<T extends mode_of_executionSelector.t_enum, FN extends t_name_selectorFunction>  =  ReturnType<typeof moded_execution_selectors_reject<T,FN>>


 type t_modeOfExecutionNotArr = mode_of_executionSelector.t_any | mode_of_executionSelector.t_sequential

//ICI 26
export type t_moded_execution_selectors_success  <T extends mode_of_executionSelector.t_enum , FN extends t_name_selectorFunction , 
R = Awaited<t_execution_selectors_result<T,FN>> > = 
    T extends t_modeOfExecutionNotArr ? R : T extends mode_of_executionSelector.t_chaining ?  NestedArray<R> : R[] 

export type t_moded_execution_selectors <T extends mode_of_executionSelector.t_enum , FN extends t_name_selectorFunction > = 
t_moded_execution_selectors_success  <T ,FN>  | t_moded_execution_selectors_reject<T,FN>



//ICI 26
type t_moded_execution_selectors_success_ = t_moded_execution_selectors_success< mode_of_executionSelector.t_enum , t_name_selectorFunction > 
type t_moded_execution_selectors_ = t_moded_execution_selectors_success_| t_moded_execution_selectors_reject<mode_of_executionSelector.t_enum,t_name_selectorFunction>




export type t_moded_execution_selectors_afterFilter<T extends mode_of_executionSelector.t_enum =mode_of_executionSelector.t_enum , 
FN extends t_name_selectorFunction= t_name_selectorFunction , R = t_moded_execution_selectors<T,FN>  > = R extends any[] ? t_filter_arrType<R> : R  


const getErrFunction:()=>t_errFunction = ()=>{ return (err:any) =>{ throw err}  }

export function execution_selectors <T extends mode_of_executionSelector.t_enum , FN extends t_name_selectorFunction ,  IsCatch extends boolean = false >(
    page_or_element: t_pageOrElementHN ,  
    arr_selector_functions : Array<t_CastFunctionType_selector_fromFunctName<FN,t_arr_IPageOrElement>>, 
    mode_resolution :T,
    function_selector_name:FN , 
    is_catch : IsCatch = false as IsCatch) : Promise<t_moded_execution_selectors <T,FN>> {

    
    type t_funct = t_CastFunctionType_selector_fromFunctName<t_name_selectorFunction,t_arr_IPageOrElement> 
    type t_funct_catch =/* IsCatch extends true ?*/ t_retgetCatchFunctionOfFunctSelector<T,FN> | t_errFunction
    
    type t_promise_array_seq = Array<t_execution_selectors_param_promiseArray< mode_of_executionSelector.t_sequential,t_name_selectorFunction>>
    type t_promise_array_chain = Array<t_execution_selectors_param_promiseArray< mode_of_executionSelector.t_chaining,t_name_selectorFunction>>
    type t_promise_array_notChainAndSeq = Array<t_execution_selectors_param_promiseArray< Exclude<mode_of_executionSelector.t_enum,mode_of_executionSelector.t_sequential| mode_of_executionSelector.t_chaining> ,t_name_selectorFunction>>
    type t_promise_array = t_promise_array_seq | t_promise_array_chain | t_promise_array_notChainAndSeq


    const fct_catch :t_funct_catch = is_catch ? getCatchFunctionOfFunctSelector<T,FN>(mode_resolution,function_selector_name)  : getErrFunction() ;

    const  arr_promises : t_promise_array = (mode_resolution ==mode_of_executionSelector.val_chaining) ?
    (arr_selector_functions.map((funct:t_funct)=> ((_page_or_element: t_pageOrElementHN) =>
    {
        return funct(_page_or_element).catch(fct_catch)/*as t_promise_of_functionArray*/
    }) ) as t_promise_array_chain ):
    mode_resolution ==mode_of_executionSelector.val_sequential?
    (arr_selector_functions.map((funct:t_funct)=> (() =>
    {
        return funct(page_or_element).catch(fct_catch)/*as t_promise_of_functionArray*/
    })  ) as t_promise_array_seq )
    //:mode_resolution ==mode_of_executionSelector.val_any?
    //(arr_selector_functions.map((funct:t_funct,idx :number)=>{ 
        //return funct(page_or_element).then((_)=>[idx,_]).catch(fct_catch) as any
    //}) as t_promise_array_notChainAndSeq )
    
    :(arr_selector_functions.map((funct:t_funct)=>{ 
        return funct(page_or_element).catch(fct_catch) as any
    }) as t_promise_array_notChainAndSeq )

    return moded_execution_selectors<T,FN,IsCatch> (page_or_element,arr_promises as Array<t_execution_selectors_param_promiseArray<T,FN>>,mode_resolution,function_selector_name,is_catch) ;
}

export type t_arr_param_funct <  T extends mode_of_executionSelector.t_enum , FN extends t_name_selectorFunction> = 
(...args: Parameters<t_CastFunctionType_selector_fromFunctName<FN,t_arr_IPageOrElement>>) => ReturnType<t_retgetCatchFunctionOfFunctSelector<T,FN>|t_errFunction>



export function moded_execution_selectors< T extends mode_of_executionSelector.t_enum , FN extends t_name_selectorFunction,  IsCatch extends boolean = false >(
    page_or_element: t_pageOrElementHN ,  
    arr_promises : Array<t_execution_selectors_param_promiseArray<T,FN>>, 
    mode_resolution :T ,function_selector_name:FN, is_catch : IsCatch = false as IsCatch): Promise<t_moded_execution_selectors <T,FN>>
     {
    
    //type fvdsfdsgfds = t_execution_selectors_param_promiseArray<mode_of_executionSelector.t_any,FSelector.name_functionSelector.querySelector>
    if(is_notFound(page_or_element)) return  is_catch ? Promise.resolve(moded_execution_selectors_reject<T,FN>(mode_resolution,function_selector_name)):getErrFunction()(new Error("page_or_element is not found")) as any;

    switch(mode_resolution){ 
        case mode_of_executionSelector.val_any : 

          type t_any = t_moded_execution_selectors <mode_of_executionSelector.t_any ,FN>
            type t_resFunction_any = t_execution_selectors_result<mode_of_executionSelector.t_any,FN>
            let prom_res_any : Promise<t_resFunction_any> =  Promise.any(arr_promises as t_resFunction_any[] ).then((res:Awaited<t_resFunction_any>)=> res );//[t_resFSelectorAll_success_element] 
            return prom_res_any as  Promise<t_moded_execution_selectors <T,FN>> ;

        case mode_of_executionSelector.val_all : 

            type t_all = t_moded_execution_selectors <mode_of_executionSelector.t_all ,FN>
            type t_resFunction_all = t_execution_selectors_result<mode_of_executionSelector.t_all,FN>

            let prom_res_all : Promise<t_all> =  Promise.all(arr_promises as t_resFunction_all[]).then((res:Awaited<t_resFunction_all>[])=> res )  ;
            return prom_res_all as  Promise<t_moded_execution_selectors <T,FN>> ;

        case mode_of_executionSelector.val_allSettled:

            type t_allSettled = t_moded_execution_selectors <mode_of_executionSelector.t_allSettled,FN>
            type t_resFunction_allSettled = t_execution_selectors_result<mode_of_executionSelector.t_allSettled,FN>

            /*type vgfdxwxv = t_CastFunctionType_selector_fromFunctName<FSelectorAll.name_functionSelector, IPageOrElement>
            type vfdxwvbbvc = FSelector.t_resFSelector_success | FSelectorAll.t_resFSelectorAll_success_element*/

            let prom_res_allSettled : Promise<t_allSettled> =  
                Promise.allSettled<t_resFunction_allSettled[]>(arr_promises as t_resFunction_allSettled[]).then( 
                    (res:PromiseSettledResult<Awaited<t_resFunction_allSettled>>[]) =>{ 
                        return  res.map((result:PromiseSettledResult<Awaited<t_resFunction_allSettled>>) =>{ 
                            if (result.status === 'fulfilled') { 
                                const res_result : PromiseFulfilledResult<Awaited<t_resFunction_allSettled>> = result 
                                return res_result.value as  Awaited<t_resFunction_allSettled>;
                            }
                        } ) ; 
                    })

            return prom_res_allSettled as  Promise<t_moded_execution_selectors <T,FN>> ; 

        case mode_of_executionSelector.val_sequential :

            type t_sequential = t_moded_execution_selectors <mode_of_executionSelector.t_sequential,FN>
            type t_resFunction_sequential = t_execution_selectors_result<mode_of_executionSelector.t_sequential,FN>

            let prom_res_sequential : Promise<[t_pipeline_env_var,t_sequential]> =  
            runSequentialPromiseArray<[],[Awaited<t_resFunction_sequential>]>( //<Awaited<t_promise_of_functionArray>,t_moded_execution_selectors <T,FN>>
                (arr_promises as t_execution_selectors_param_promiseArray<mode_of_executionSelector.t_sequential,t_name_selectorFunction>[]).map((p)=>{ 
                    return async (...args:[t_pipeline_env_var])=>(([...args,await p()] ) as [t_pipeline_env_var,Awaited<t_resFunction_sequential>])
                })as any
            ).then((res)=>res );
            return prom_res_sequential as  Promise<t_moded_execution_selectors <T,FN>> ;

        case mode_of_executionSelector.val_chaining :

            type t_function_chaining = t_moded_execution_selectors<mode_of_executionSelector.t_chaining,FN>
            type t_resFunction_chaining = t_execution_selectors_result<mode_of_executionSelector.t_chaining,FN>

            /*type t_errFunction_chaining = Awaited<t_retgetCatchFunctionOfFunctSelector<FN, mode_of_executionSelector.t_chaining>>
            type vdasxccx = Awaited<ReturnType<t_CastFunctionType_selector_fromFunctName<FSelector.name_functionSelector, IPageOrElement>>>*/
           //type fvdcxjvkd = Promise<NestedArray<[t_pipeline_env_var<IVoid, false>, t_errCatchFunction<any[]> | ElementHandle<Node>[]]>>

            const init_chaining = ([getEmptyJson(),[page_or_element]] as [t_pipeline_env_var,t_pageOrElementHN[]])
            let prom_res_chaining  = 
            runChainingPromiseArray< t_chainingParam_init<FN>,t_reject_qSelector,t_chainingParam<FN>,t_retgetCatchFunctionOfFunctSelector<mode_of_executionSelector.t_chaining,FN>>(
                (arr_promises as t_resFunction_chaining[]).map((p)=>{ 
                    return async (...args:[t_pipeline_env_var, t_pageOrElementHN[]])=>(([...args,await p] ) as [t_pipeline_env_var,t_pageOrElementHN[],Awaited<t_resFunction_chaining>])
                })as any
                ,Promise.resolve( [init_chaining] )
            )  as Promise<t_function_chaining>//NestedArray<[t_pipeline_env_var,t_errFunction_chaining | ElementHandle<Node>[]]>> //as NestedArray<t_chainingParam<FN>>
            
            return prom_res_chaining as  Promise<t_moded_execution_selectors <T,FN>> ;// A FAIRE : t_function_chaining est correct mais non compute so typescript think that isnt good 
            }


}



export function getArrFunctSelector<  T extends mode_of_executionSelector.t_enum ,FN extends t_name_selectorFunction, IsCatch extends boolean = false >
 ( page_or_element: t_pageOrElementHN , lst_selector: Readonly<selectors> ,
    mode_resolution : T , function_selector_name : FN ,
    is_catch :IsCatch = false   as IsCatch ) : Promise<t_moded_execution_selectors <T,FN>> { 

    //type gfdsfds = t_CastFunctionType_selector_fromFunctName<FSelector.name_functionSelector.querySelector,IPageOrElement>//(args_0: t_pageOrElementHN) => Promise<FSelector.t_resFSelector_success>
    type t_new_funct = t_CastFunctionType_selector_fromFunctName<FN,t_arr_IPageOrElement> // IPage => ReturnType<F> 

    //TODO : 
    let _func_selector : t_functSelector_fromFunctionName<FN>|null  = getFunctSelectorFromFunctionName(function_selector_name)

    if(_func_selector ==null) throw new Error("function_selector_name is not a valid function name") ;

    let func_selector : t_functSelector_fromFunctionName<t_name_selectorFunction>  = _func_selector as t_functSelector_fromFunctionName<FN>; 


    const promise_arr :t_new_funct[] = lst_selector.map((selector) =>{ 
        return ((_page_or_element : t_pageOrElementHN  )  =>{  
            return func_selector(_page_or_element,selector) 
        })as t_new_funct 
    }) 

    return execution_selectors<T,FN,IsCatch>( page_or_element,promise_arr,mode_resolution,function_selector_name,is_catch)
}


export function getPromiseArrQuerySelector <T extends mode_of_executionSelector.t_enum, FN extends t_name_selectorFunction, IsCatch extends boolean = false >
( page_or_element: t_pageOrElementHN , lst_selector: Readonly<selectors> , mode_resolution :T,function_selector_name :FN , is_catch :IsCatch = false   as IsCatch   ) : Promise<t_moded_execution_selectors <T,FN>> { // , to_flatten : boolean = false prom_res.then((res:ElementHandle<Node>[][])=> res.flat() ) :
    return getArrFunctSelector<T,FN,IsCatch>(page_or_element,lst_selector,mode_resolution,function_selector_name,is_catch);
}


export function getPromiseArrQuerySelectorFilter<FN extends t_name_selectorFunction ,T extends mode_of_executionSelector.t_enum , IsCatch extends boolean = false ,
isFilter extends boolean = true , F_fltr extends t_functSelectorIsRejected = t_notFiltertFunction > 
(page_or_element: t_pageOrElementHN , lst_selector: Readonly<selectors> ,mode_resolution :T ,  function_selector_name :FN , is_catch :IsCatch = false   as IsCatch, isFiltered : isFilter = true as isFilter , _fltr_function ?: F_fltr ):Promise<t_moded_execution_selectors<T, FN>> { // , to_flatten : boolean = false prom_res.then((res:ElementHandle<Node>[][])=> res.flat() ) :
    
        type t_fltr_function =  isFilter extends true ? t_notFiltertFunction : F_fltr extends t_notFiltertFunction ?  
            (arg:t_moded_execution_selectors_success_)=>ReturnType<t_isRejectedValueSelector_fromFunctionName<FN>>
        :F_fltr

        let fltr_function_ :t_fltr_function  =  (isFiltered ? _fltr_function ==undefined ? ((arg:t_moded_execution_selectors_success_)=>getIsRejectedValueSelectorFromFunctionName(function_selector_name)(arg[1])):_fltr_function : noFilterFunction ) as t_fltr_function ;

        let fltr_function = _fltr_function ==undefined && fltr_function_ != noFilterFunction ? isNot(fltr_function_) :_fltr_function  ;

        //type fdsfds = t_moded_execution_selectors<mode_of_executionSelector.t_any, FSelector.name_functionSelector.querySelector>
        //[t_pipeline_env_var, any[]] | [t_pipeline_env_var, ...any[]] | [t_pipeline_env_var, t_resSelector]
        //ICI 26
        return getPromiseArrQuerySelector<T,FN,IsCatch>(page_or_element,lst_selector,mode_resolution,function_selector_name,is_catch).then((res: t_moded_execution_selectors<T, FN>) =>{  
            //type fvdscxv = Awaited<t_execution_selectors_result<enum_promise_execution.all | enum_promise_execution.allSettled | enum_promise_execution.chaining, FSelector.name_functionSelector>>[] 
            //| NestedArray<Awaited<t_execution_selectors_result<enum_promise_execution.all | enum_promise_execution.allSettled | enum_promise_execution.chaining, FN>>>[]
            type t_arrModedExecutionSelectors = t_moded_execution_selectors<Exclude <mode_of_executionSelector.t_enum ,t_modeOfExecutionNotArr>,FN> 
            //type fvdsfds = t_moded_execution_selectors<FSelector.name_functionSelector, mode_of_executionSelector.t_any>
            let filter_arr_res = (nestedArr: NestedArray<any> ) => arrStarFilterFunction(nestedArr,fltr_function)[1]

            //let modedExecToRes = (res as t_moded_execution_selectors<T, FN>).map((envAndRes)=> envAndRes[1])            
            let _res = fltr_function && fltr_function != noFilterFunction ? filter_arr_res(res) :res
            return _res as t_moded_execution_selectors<T, FN>  ;
        })
}


//A FAIRE : remove just for debugging
export const print_moded_execution_selectors =< T extends mode_of_executionSelector.t_enum ,  FN extends t_name_selectorFunction > (
    res:Promise<t_moded_execution_selectors<T,FN>>,
    )=>{ 
        res.then((arrNested)=>{  
            //@ts-ignore
            arrNested.flat(Infinity).map((elm)=>{ 
                elm.evaluate((_node)=>_node.outerHTML).then((htmlCode)=>console.log('htmlCode',htmlCode))
            })
                    
        })
}
