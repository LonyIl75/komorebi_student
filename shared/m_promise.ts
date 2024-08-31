import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_promise"

import {IJson, IVoid, getEmptyJson} from "./m_object.js"
import {  NestedArray, isInRange, t_function, t_functionPromise } from "./type.js";
import { t_InterArr_pipeline, t_OInterArr_pipeline, t_pipeline, t_pipeline_env_var, t_str_noneOp, t_union_id_env_var_op } from "./m_pipeline.js";

export const _getAwaitedEmptyPromise = () : undefined => undefined
export const getEmptyPromise = () : Promise<undefined> => Promise.resolve(_getAwaitedEmptyPromise())
export const isEmptyPromise = <T extends Promise<any>> (promise:T) => promise.then((res)=>res==_getAwaitedEmptyPromise())
export const isAwaitedEmptyPromise = <T extends any> (awaited_promise:T) => awaited_promise==_getAwaitedEmptyPromise()

export function promiseAlltoPromise (arr_promise:Promise<any>[] , resolve_function ?: (value: any[]) => any[] , reject_function ?: (reason: any) => any   ){ /*console.log("DEBUG_ME",getCurrentLine());*///(value: any[]) => any[]  = (_:any[])=>_ , reject_function ?: (reason: any) => any  = (_:any)=>_
  let prom = Promise.all(arr_promise) ; 
  if(resolve_function != undefined) prom = prom.then(resolve_function)
  if(reject_function != undefined) prom = prom.catch(reject_function)
  return prom;
}


export function promisifyVal<T>(val:any):Promise<T> {
    return Promise.resolve(val)
  }


export function shortcut_throwIfResolveWith (fct :t_functionPromise ,...args :any[] ){ /*console.log("DEBUG_ME",getCurrentLine());*/
   return throwIfResolveWith ()(fct,...args)
}

export function throwIfResolveWith ( rejectValue : any = null  , error: Error = new Error(" Error-Promise : incorrect return value ")    ){ /*console.log("DEBUG_ME",getCurrentLine());*/
  return async (fct :t_functionPromise,...args :any[]  ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
      return await _throwIfResolveWith(rejectValue,error,fct,...args)
    }
}
 

export const _throwIfResolveWith = async ( rejectValue : any , error: Error , fct :t_functionPromise ,...args :any[]   ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
  return await fct(...args).then((res)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
  if(JSON.stringify(res) == JSON.stringify(rejectValue)) throw new Error(`${error.message} CCA${JSON.stringify(args)}`);
  return res;
}).catch((e)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
  throw new Error(`${e.message} CCV${JSON.stringify(args)}`);
});
}

export async function runSequentialPromiseArray<I extends any[] ,O extends any[] ,IEnv extends IJson = IVoid 
, Op extends t_union_id_env_var_op = t_str_noneOp , I_1 extends t_pipeline_env_var<IEnv,Op> = t_pipeline_env_var<IEnv,Op>,
OInterArr extends  t_OInterArr_pipeline = [] , I_Inter extends (OInterArr extends readonly [any ,... t_OInterArr_pipeline] ? [] : any[]  ) = [] 
>
(promiseArray:t_pipeline <I,O,IEnv,Op,I_1,OInterArr,I_Inter> , initValue?:I): Promise<[I_1,...O]> {
  let result : any[] = initValue;
  for (const promiseFunc of promiseArray) { /*console.log("DEBUG_ME",getCurrentLine());*/ 
    //@ts-ignore
    result = await (result !== undefined ? promiseFunc(...result):promiseFunc());
  }

  return result  as [I_1,...O] ;
}

export const rejectValueForPromiseArr :[] = [] 
export type t_rejectValueForPromiseArr = typeof rejectValueForPromiseArr

export type t_forEachDeepPromiseArray<T ,S, IEnv extends IJson = IVoid , Op extends t_union_id_env_var_op = t_str_noneOp , I_1 extends t_pipeline_env_var<IEnv,Op> = t_pipeline_env_var<IEnv,Op> > = Promise< NestedArray<[I_1,Awaited<S>|Array<T>]>>

export  function runChainingPromiseArray<I , SI =t_rejectValueForPromiseArr  , T =I ,S = SI ,IEnv extends IJson = IVoid ,
Op extends t_union_id_env_var_op = t_str_noneOp , I_1 extends t_pipeline_env_var<IEnv,Op> = t_pipeline_env_var<IEnv,Op>>(
  _promiseArray :t_InterArr_pipeline<[I],[(Array<T>|S)],[T],IEnv,Op,I_1> // [t_functionPromise<[I_1,(Array<T>|S)],[I_1,I]>,...t_functionPromise<[I_1,(Array<T>|S)],[I_1,T]>[]] 
, initialValue: Promise<Array<[I_1,Awaited<SI>|Array<I>]>>,
stopValue : SI =rejectValueForPromiseArr as SI,
stopValue_ ?: S 
){  

    if(_promiseArray.length==0) return initialValue as t_forEachDeepPromiseArray<I, SI, IEnv,Op, I_1>


    // :Array<t_functionPromise<[I_1, T[] | S], [I_1, I]>>
    const [first_function,...promiseArray] = _promiseArray

    type t_awaited_p_result = Array<Array<[I_1,Awaited<S>|Array<T>]>>

    let p_results_0 :Promise<t_awaited_p_result> =forEachDeepPromiseArray<I|T , SI|S, IEnv,Op, I_1>([first_function],initialValue,stopValue) as Promise<t_awaited_p_result>
    let p_results :t_forEachDeepPromiseArray<T,S,IEnv,Op,I_1>   = p_results_0.then((results_0:t_awaited_p_result)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        let arr_p_results : t_forEachDeepPromiseArray<T, S,IEnv,Op,I_1> []  = results_0.map((res:t_awaited_p_result[number])=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
          let p_res = Promise.resolve(res)
          let r = forEachDeepPromiseArray<T,S,IEnv,Op,I_1>(promiseArray.slice(1),p_res ,stopValue_)
          return r 
        })
        return Promise.all(arr_p_results) //as Promise<Array<t_awaited_forEachDeepPromiseArray<T,S>>>  as Promise <t_awaited_forEachDeepPromiseArray<T,S>> as t_forEachDeepPromiseArray<T,S> ; 
    })

  return p_results as t_forEachDeepPromiseArray<T, S, IEnv,Op, I_1> ;

}


export function forEachDeepPromiseArray<T , S =t_rejectValueForPromiseArr , IEnv extends IJson = IVoid ,Op extends t_union_id_env_var_op = t_str_noneOp , I_1 extends t_pipeline_env_var<IEnv,Op> = t_pipeline_env_var<IEnv,Op>  >(
  functs :Array<t_functionPromise<[I_1,S|Array<T>],[I_1,T]>>  
, p_promiseResArray:Promise<Array<[I_1,Awaited<S>|Array<T>]>>,
stopValue : S =rejectValueForPromiseArr as S
):Promise<NestedArray<[I_1,Awaited<S>|Array<T>]>> {

  type I = Parameters<typeof functs[number]>
  type P_O = ReturnType<typeof functs[number]>

  type O = Awaited<P_O>
  type O_Success = [I_1,Array<T>]
  type O_Reject = [I_1,S]
  type Res = Awaited<typeof p_promiseResArray >

    if (functs.length==0) { /*console.log("DEBUG_ME",getCurrentLine());*/
      return p_promiseResArray
    }

    
      let arr : Promise<(Awaited<Awaited<O_Reject>> | NestedArray<O>)[]> = p_promiseResArray.then((promiseResArray:Res)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        let arr_res : (Promise<Awaited<O_Reject>> |Promise<NestedArray<O>>)[]  = promiseResArray.map((vals:O)=>{ /*console.log("DEBUG_ME",getCurrentLine());*///[Page] 
        
          if(vals[1] != stopValue && !vals[1]) return Promise.resolve([vals[0],stopValue])
          else {
          let arr_vals :Array<I> = ((vals as O_Success)[1]).map((val:T)=> [vals[0],val])
          let next_p_promiseResArray :Promise<O[]>  =  Promise.all(arr_vals.map((val:I)=>{ /*console.log("DEBUG_ME",getCurrentLine());*///Page
            let r_val:Promise<O>  = functs[0](...val).then((_vale:O)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/return _vale}) 
            return r_val   //[...]
            }))//Promise([[...]])
            return forEachDeepPromiseArray<T,S,IEnv,Op,I_1>(functs.slice(1),next_p_promiseResArray as Promise<Res> ,stopValue)//Promise([[...]])
        
          }

        }) //[...Promise([[...]])] 
       return Promise.all(arr_res)  
          
        })
      return arr as Promise<NestedArray<Res>>
          

}

export enum enum_promise_execution {
        any="any",
        all="all",
        sequential="sequential",
        allSettled="allSettled",
        chaining="chaining"
}

export type t_enumPromiseToFunction<  T extends enum_promise_execution> = 

T extends enum_promise_execution.any ? <A extends readonly any[] >(args:A)=>Promise<any> :
T extends enum_promise_execution.all ? <A extends readonly any[] >(args:A)=>Promise<A> :
T extends enum_promise_execution.allSettled ? <A extends readonly any[] >(args:A)=>Promise<PromiseSettledResult<A>> :
T extends enum_promise_execution.sequential ? <I extends any[] ,O extends any[] ,IEnv extends IJson = IVoid ,Op extends t_union_id_env_var_op = t_str_noneOp , I_1 extends t_pipeline_env_var<IEnv,Op> = t_pipeline_env_var<IEnv,Op>,OInterArr extends  t_OInterArr_pipeline = [] , I_Inter extends (OInterArr extends readonly [any ,... t_OInterArr_pipeline] ? [] : any[]  ) = []>
(args:Parameters<typeof runSequentialPromiseArray<I,O,IEnv,Op,I_1,OInterArr,I_Inter>>)=>Promise<O> :
T extends enum_promise_execution.chaining ? <I , SI =t_rejectValueForPromiseArr  , T =I ,S = SI ,IEnv extends IJson = IVoid ,Op extends t_union_id_env_var_op = t_str_noneOp ,I_1 extends t_pipeline_env_var<IEnv,Op> = t_pipeline_env_var<IEnv,Op>>
(args:Parameters<typeof runChainingPromiseArray<I,SI,T,S,IEnv,Op,I_1>>)=>t_forEachDeepPromiseArray<T, S, IEnv,Op, I_1>|t_forEachDeepPromiseArray<I, SI, IEnv,Op, I_1>   :
never

export function enumPromiseExecutionToFunction<  T extends enum_promise_execution> (mode_resolution :T ):t_enumPromiseToFunction<T>
{
    switch(mode_resolution){ 
        case enum_promise_execution.any : 
            return (<A extends readonly any[] >(args:A)=>Promise.any<A>(args)) as any 

        case enum_promise_execution.all : 
            return (<A extends readonly any[] >(args:A)=>Promise.all<A>(args)) as any 

        case enum_promise_execution.allSettled:
            return (<A extends readonly any[] >(args:A)=>Promise.allSettled<A>(args)) as any 

        case enum_promise_execution.sequential :
            return (<I extends any[] ,O extends any[] ,IEnv extends IJson = IVoid ,Op extends t_union_id_env_var_op = t_str_noneOp ,I_1 extends t_pipeline_env_var<IEnv,Op> = t_pipeline_env_var<IEnv,Op>,OInterArr extends  t_OInterArr_pipeline = [] , I_Inter extends (OInterArr extends readonly [any ,... t_OInterArr_pipeline] ? [] : any[]  ) = [] >
            (...args:Parameters<typeof runSequentialPromiseArray<I,O,IEnv,Op,I_1,OInterArr,I_Inter>>)=>runSequentialPromiseArray<I,O,IEnv,Op,I_1,OInterArr,I_Inter>(...args)) as any 

        case enum_promise_execution.chaining :
            return (<I , SI =t_rejectValueForPromiseArr  , T =I ,S = SI ,IEnv extends IJson = IVoid ,Op extends t_union_id_env_var_op = t_str_noneOp ,I_1 extends t_pipeline_env_var<IEnv,Op> = t_pipeline_env_var<IEnv,Op>>
              (...args:Parameters<typeof runChainingPromiseArray<I,SI,T,S,IEnv,Op,I_1>>)=>runChainingPromiseArray<I,SI,T,S,IEnv,Op,I_1>(...args)) as any 

        default : 
        throw new Error("enumPromiseExecutionToFunction : mode_resolution not found")
    }
}