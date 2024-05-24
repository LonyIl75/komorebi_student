import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_pipeline"


import { IJson, IVoid, applyFctToObjectEntries, applyFctToObjectValues, getEmptyJson, isEmptyJson, isNotEmptyJson,t_Entry } from "./m_object.js";
import { enumPromiseExecutionToFunction, enum_promise_execution } from "./m_promise.js";
import { XOR, arrArrAdd, arrToUnion, endIdx, getFirstElementArr, t_getLastElementArr, getSubArray, jsonObjectToArr, param_jsonAsForEach, t_booleanFunction, t_function, t_functionPromise, t_functionSetter } from "./type.js";
import { isRetFunctionisNothing } from "./m_primitives.js";
import { str_beginOfLine_regex} from "./m_regex.js";
import { getLastElementArr } from "./m_array.js";
import { t_regex_array } from "./_regexp.js";

export type t_OInterArr_pipeline = readonly (readonly any[])[]

export type t_inter_pipeline <O , OInterArr extends t_OInterArr_pipeline > = 
OInterArr extends [infer A , infer B ,  ...infer R] ?
B extends readonly any[] ?A extends readonly any[] ? R extends t_OInterArr_pipeline ?
    [t_functionPromise<B,A>,...t_inter_pipeline<O ,[B,...R]>] : never : never : never :
OInterArr extends [infer A ] ? A extends readonly any[] ? [t_functionPromise<O,A>] : never : never 


export type t_df_pipeline <I extends any[],O extends any[],IEnv extends IJson = IVoid , Op extends t_union_id_env_var_op = t_str_noneOp ,I_1 extends t_pipeline_env_var<IEnv,Op>= t_pipeline_env_var<IEnv,Op>> = 
[t_functionPromise<any[],[I_1,...I]>,...t_functionPromise<any[],[I_1,...any[]]>[],t_functionPromise<[I_1,...O],[I_1,...any[]]>]

export type t_InterArr_pipeline<I extends any[],O extends any[] ,I_Inter extends  any[] ,IEnv extends IJson = IVoid , Op extends t_union_id_env_var_op = t_str_noneOp ,I_1 extends t_pipeline_env_var<IEnv,Op>= t_pipeline_env_var<IEnv,Op>> =
 [t_functionPromise<[I_1,...O],[I_1,...I]>,...t_functionPromise<[I_1,...O],[I_1,...I_Inter]>[],t_functionPromise<[I_1,...O],[I_1,...I_Inter]>]




export type t_pipeline <I extends any[],O extends any[] ,
IEnv extends IJson = IVoid , Op extends t_union_id_env_var_op = t_str_noneOp ,I_1 extends t_pipeline_env_var<IEnv,Op> = t_pipeline_env_var<IEnv,Op>,
OInterArr extends  t_OInterArr_pipeline = [] , I_Inter extends (OInterArr extends readonly [any ,... t_OInterArr_pipeline] ? [] : any[]  ) = [] > = 
([t_functionPromise<[I_1,...O],[I_1,...I]>]|
        (OInterArr extends readonly [any ,... t_OInterArr_pipeline] ? t_inter_pipeline<[I_1,...O],arrArrAdd<OInterArr,[I_1]>>
    : I_Inter extends [any,...any[]] ?t_InterArr_pipeline<I,O,I_Inter,IEnv,Op,I_1>:t_df_pipeline<I,O,IEnv,Op,I_1>))




export type t_pipeline_run <I extends any[],O extends any[],
IEnv extends IJson = IVoid , Op extends t_union_id_env_var_op = t_str_noneOp ,I_1 extends t_pipeline_env_var<IEnv,Op> = t_pipeline_env_var<IEnv,Op>,
OInterArr extends  t_OInterArr_pipeline = []> = (pipeline : t_pipeline <I,O,IEnv,Op,I_1,OInterArr> , initValue?:I) => Promise<[I_1,O]>


export  namespace  t_modifier_pipeline {
    export const val_sequential = enum_promise_execution[enum_promise_execution.sequential] 
    export const val_chaining = enum_promise_execution[enum_promise_execution.chaining] 

    export type t_sequential = typeof val_sequential
    export type t_chaining = typeof val_chaining

    export type t_enum =  t_sequential  | t_chaining
}


/*
type t_env_var_stopval< T extends any = any>  = {stopValue : T , cur_value:T}
const cond_stopValue = < T extends any = any>(arg:t_env_var_stopval<T>) =>  !(arg.stopValue === arg.cur_value ) 
*/

type t_env_var_maxval = {max :number} & { counter:number/*,cur_value : number*/  }
const cond_maxvalue = (arg:t_env_var_maxval) =>  (arg.counter < arg.max) 

type t_env_var_minval = {min :number} & { counter:number/*,cur_value : number*/  }
const cond_minvalue = (arg:t_env_var_minval) =>  (arg.counter < arg.min) 


const str_noneOp = "noneOp" as const 
export type t_str_noneOp = typeof str_noneOp

export const str_while = "while" as const 
type t_str_while = typeof str_while

const str_interval = "interval" as const 
type t_str_interval = typeof str_interval

/*
const str_stopValue = "stopValue" as const 
type t_str_stopValue = typeof str_stopValue
*/

const arr_id_env_var_op = [str_noneOp,str_while,str_interval/*,str_stopValue*/] as const 
type t_arr_id_env_var_op = typeof arr_id_env_var_op
export type t_union_id_env_var_op = arrToUnion<t_arr_id_env_var_op>



type _t_pipeline_env_var_op =  {
    [str_noneOp] : IVoid,
    [str_while] : t_env_var_maxval //& t_env_var_stopval,
    [str_interval]:  t_env_var_minval | t_env_var_maxval,
    //[str_stopValue] : t_env_var_stopval
}

const initEmptyEnvVarOp = (op : t_union_id_env_var_op) : _t_pipeline_env_var_op[t_union_id_env_var_op] =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    switch(op){ 
        case str_noneOp : return getEmptyJson()
        case str_while : return {max:0,counter:0/*cur_value:0,stopValue:undefined*/}
        case str_interval : return {min:0,counter:0/*cur_value:0*/}
        //case str_stopValue : return {,cur_value:0,stopValue:undefined}
    }
}

export type t_pipeline_env_var_op = XOR<param_jsonAsForEach<_t_pipeline_env_var_op>>

const pipeline_cond  :{
    [k in t_union_id_env_var_op  ] : t_booleanFunction<[_t_pipeline_env_var_op[k]]>

} = {
    [str_noneOp] : undefined,
    [str_while] : (...args:[_t_pipeline_env_var_op[t_str_while]])=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        const arg = args[0]
        return /*cond_stopValue(arg) &&*/ cond_maxvalue(arg)
    },
    [str_interval]:(...args:[_t_pipeline_env_var_op[t_str_interval]])=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        const arg = args[0] as any 
        return (arg?.max === undefined || cond_maxvalue(arg))  && (arg?.min === undefined || cond_minvalue(arg))
    }
    //,[str_stopValue]:(...args:[_t_pipeline_env_var_op[t_str_stopValue]])=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
       // const arg = args[0]
        //return cond_stopValue(arg)
    //}
}

const df_next_fct :{
    [k in string ] :t_functionSetter<[_t_pipeline_env_var_op[t_union_id_env_var_op]]>
}={
     increment : (...args:[t_env_var_maxval]) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/args[0].counter++},
     decrement : (...args:[t_env_var_minval]) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/args[0].counter--}
}
const df_fct_fromIdEnvVar = (op : t_union_id_env_var_op) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    switch(op){ 
        case str_while:
            return df_next_fct.increment
        default : 
            return undefined
    }
}


//A FAIRE : ?<=> XOR<[op,env]>
export type t_pipeline_env_var<  EnvJson extends IJson =IVoid  , Op extends t_union_id_env_var_op = t_str_noneOp  >  = t_pipeline_env_var_op[Op] & EnvJson 



export class Pipeline<
I_2 extends any[],O_2 extends any[] ,
IEnv extends IJson = IVoid ,Op extends t_union_id_env_var_op = t_str_noneOp  ,I_1 extends t_pipeline_env_var<IEnv,Op> = t_pipeline_env_var<IEnv,Op>,
OInterArr extends  t_OInterArr_pipeline = [],
I extends [I_1,...I_2] = [I_1,...I_2],O  extends [I_1,O_2] = [I_1,O_2]>{
    pipeline :t_pipeline<I,O,IEnv,Op,I_1,OInterArr>
    env_var_pipeline : I_1
    op : Op
    modifiers : t_modifier_pipeline.t_enum

    run : t_pipeline_run<any[],any[],IEnv,Op,I_1,t_OInterArr_pipeline>
    condition ?: t_booleanFunction<[I_1]>
    next ?: t_functionSetter<[I_1]>

    constructor(_pipeline :t_pipeline<I,O,IEnv,Op,I_1,OInterArr>,op : Op ,modifiers : t_modifier_pipeline.t_enum , condition?:t_booleanFunction<[I_1]> ,string_function ?:string   ) { /*console.log("DEBUG_ME",getCurrentLine());*/
        this.pipeline = _pipeline;
        //A FAIRE : why need as I_1
        this.op =op 
        this.env_var_pipeline = initEmptyEnvVarOp(op) as I_1
        this.condition = condition || pipeline_cond[op] as t_booleanFunction<[I_1]>
        this.modifiers = modifiers;
        //TODO string_function  + parser that validate string_function type and stuff 
        this.next = (string_function ? new Function(string_function): df_fct_fromIdEnvVar(op)) as t_functionSetter<[I_1]>
        //type vdfscv =  t_pipeline_run<any[],any[],IEnv,Op,t_env_var,t_interFct>
        //@ts-ignore
        this.run = enumPromiseExecutionToFunction<t_modifier_pipeline.t_enum>(modifiers)
    }

    get input(){
        return this.pipeline[0]
    }
    get output(){
        return getLastElementArr(this.pipeline)
    }

    isUnInitializedCondition = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return this.condition == pipeline_cond[str_noneOp] 
    }

    async run_pipeline(initValue?:I_2,initEnv?:I_1){ /*console.log("DEBUG_ME",getCurrentLine());*/
        let intermediate_result :[I_1,OInterArr[number]]  = null
        if(initEnv == undefined || this.isUnInitializedCondition() || this.condition(initEnv)){
            intermediate_result = await this.run(this.pipeline,[initEnv,...initValue] as I)
        }
        if(!this.isUnInitializedCondition()){
            this.next(intermediate_result[0])
            while( this.condition(intermediate_result[0])){
                intermediate_result = await this.run(this.pipeline,intermediate_result )
                this.next(intermediate_result[0])
            }
        }   

        return intermediate_result.slice(1)
    }

}

const noneCategory  = "None" as const
type t_noneCategory =  typeof noneCategory
const noneFctObj = {[noneCategory]:[]} as const
type t_noneFctObj = typeof noneFctObj


export type t_rules_base< AllCategory extends string  , K extends AllCategory  > = {[kc in K] :Array<t_regex_array<AllCategory>>}

export class PipelineBuilder<AllCategory extends string  ,KCategory extends AllCategory  ,KFct extends string  , O extends { [k in KFct]:t_function} >  {


   lib : {[kc in KCategory] : {[kf in KFct] : O[kf]}} & t_noneFctObj
   rules : {[k in KCategory] :Array<RegExp>}

   constructor ( _rules : t_rules_base<AllCategory,KCategory>, _lib : O , map : {readonly [kc in KCategory] : readonly KFct[]} ){ /*console.log("DEBUG_ME",getCurrentLine());*/
       this.rules = applyFctToObjectValues(_rules , (arr:Array<t_regex_array<AllCategory>>):Array<RegExp>=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            return arr.map((rule)=>new RegExp(rule.join("")))
       });
       const lib = applyFctToObjectValues(map , (arr:KFct[])=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            return arr.reduce((acc , fct_name)=>({...acc,[fct_name]:_lib[fct_name]}),{} as {[kf in KFct] : O[kf]})
       })
       this.lib = {...lib,...noneFctObj};
   }

   static embed_pipeline_regexArr = <AllCategory extends string  , KCategory extends AllCategory  >(_rules : t_rules_base<AllCategory,KCategory>):t_rules_base<AllCategory,KCategory> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_rules = typeof _rules
        type t_key_rules = KCategory
        type t_val_rules = Array<t_regex_array<AllCategory>>
        if(isEmptyJson(_rules)) return _rules
        return applyFctToObjectEntries<t_rules,t_key_rules,t_val_rules,t_rules >(_rules ,(_rule_entry :t_Entry<t_key_rules,t_val_rules>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                const [key_rule , val_rule] =  _rule_entry
                return  {[key_rule] : val_rule.map((e)=>[str_beginOfLine_regex,...e]) }  as t_rules_base<AllCategory,KCategory>
        });
   }

   static isNoneCategory = <KCategory extends string>(category : KCategory | t_noneCategory):category is t_noneCategory =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
         return category == noneCategory
    }

   getCategoryOfFct(fct_name : KFct ): KCategory | t_noneCategory {
        const categories = Object.keys(this.lib) as KCategory[]
        const res = categories.find((category)=>this.lib[category].hasOwnProperty(fct_name))
        return res == undefined ? noneCategory : res
   }

   _validatePipeline(arr_fcts : readonly KFct[]) : {mss:string , result : {[k in KFct]: KCategory}|IVoid } {
        type t_res = {[k in KFct]: KCategory}|IVoid 
        let acc_obj :t_res = arr_fcts.reduce((acc,fct_name)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            return {...acc,[fct_name]:this.getCategoryOfFct(fct_name)}
        },{} as t_res ) as t_res 
        let _str = Object.values(acc_obj).join("")
        let incr = 0
        const falseResult = (mss:string) : {mss:string , result : t_res } => ({mss, result : getEmptyJson() })
         for(const [_fct_name,_category] of Object.entries(acc_obj) as [KFct,KCategory][]){
            //@ts-ignore
            if(PipelineBuilder.isNoneCategory(_category)) return falseResult(`Function ${_fct_name} is not in any category`)
            if(!this.rules[_category].some((rule)=>rule.test(_str.substring(incr)))) return falseResult(`Function ${_fct_name} doesn't respect any rule `)
            incr += _category.length
        }
         return {mss:"",result:acc_obj};
   }

   _createPipeline<Arr extends readonly KFct[] , Op extends t_union_id_env_var_op = t_str_noneOp >(_arr_fcts :  {[k in KFct]: KCategory} , op :Op = str_noneOp as Op){ /*console.log("DEBUG_ME",getCurrentLine());*/

        //TODO op 
        type t_arr_fcts< _Arr extends readonly KFct[] , _RArr extends (O[KFct])[] =[] ,  _RIEnv extends IJson = IVoid > = 
        _Arr extends readonly [infer A , ...infer R] ? 
            A extends KFct ? R extends readonly KFct[] ?
                    [O[A] ,..._RArr] extends infer n_RArr ? n_RArr extends (O[KFct])[] ?
                        t_arr_fcts<R,n_RArr,_RIEnv&  {[k in `${A}_params`]: Parameters<O[A]>[0]}> : never
                    :never :never 
            :never 
        : [_RIEnv,_RArr] 

        type IEnvAndArrFcts = t_arr_fcts<Arr>
        type IEnv = IEnvAndArrFcts[0]
        type ArrFcts = IEnvAndArrFcts[1]
        type t_env_var = t_pipeline_env_var<IEnv,Op>

        const arr_fcts = Object.entries(_arr_fcts).reduce((acc , entry)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            const [fct_name , category] = entry as [KFct,KCategory]
            return ( (obj_fct)=>[...acc,async(...args:[t_env_var,...any[]])=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                const [env , ...restArgs] = args
                let res = await obj_fct(...restArgs)
                return isRetFunctionisNothing(res)? [env] : [env,...(res?.length ?res :[res])]
            }])(this.lib[category][fct_name])
        },[] as any ) as ArrFcts

        type t_input = getFirstElementArr<ArrFcts> extends infer f_input ? f_input extends t_function ? Parameters<f_input> : never : never
        type t_output = t_getLastElementArr<ArrFcts> extends infer f_output ? f_output extends t_function ? ReturnType<f_output> : never : never
        
        
        type getInterInput < T extends readonly t_function[]> = T extends readonly [infer A , ...infer R] ? A extends t_function ? R extends readonly t_function[] ? [Parameters<A>,ReturnType<A>,...getInterInput<R>] : never : never : []
        type t_interFct = getInterInput<getSubArray<ArrFcts,1,1>>
        
        const res = new Pipeline<t_input ,t_output,IEnv,Op,t_env_var,t_interFct>(arr_fcts as any,op , enum_promise_execution.sequential )
        return res

   }

    createPipeline<Arr extends readonly KFct[] , Op extends t_union_id_env_var_op = t_str_noneOp >(arr_fcts :  Arr, op :Op = str_noneOp as Op){ /*console.log("DEBUG_ME",getCurrentLine());*/
        const validated = this._validatePipeline(arr_fcts)
        if(isNotEmptyJson(validated.result)){
            return this.
            _createPipeline<Arr,Op>(validated.result as Exclude<typeof validated.result,IVoid>,op )
        }else throw new Error(validated.mss)
        return null 
    }

}

export type t_pipeline_json<Fct extends string = string , T extends readonly Fct[] = readonly Fct[] , EnvJson extends IJson =IVoid  ,Op extends t_union_id_env_var_op = t_str_noneOp > = {body: T, op :Op, initEnv:t_pipeline_env_var_op[Op] & EnvJson}
export type t_pipeline_json_any<Fct extends string = string , T extends readonly Fct[] = readonly Fct[] , EnvJson extends IJson =IJson  ,Op extends t_union_id_env_var_op = t_union_id_env_var_op > = {body: T, op :Op, initEnv:t_pipeline_env_var_op[Op] & EnvJson}

export const df_pipeline_json : t_pipeline_json = {body:[],op:str_noneOp,initEnv:getEmptyJson()}