import getCurrentLine from "get-current-line"
import MRegExp, { get_FFromMRegExp, get_SFromMRegExp, ju_escapeRegex, ju_escapeRegexStr, t_regexpFlags, validateIsRegexFlags } from "./_regexp.js"
import { enumerate, getPermutation, splitArr } from "./m_array.js"
import { convertStrToRegexStr, fct_escape, getRegexG, regex_charUnionStr, sourceRegexToStrRegex, str_beginOfLine_regex, str_endOfLine_regex, t_regex_charUnionStr, transformRegexOrStr } from "./m_regex.js"
import { joinCapitalize } from "./m_string.js"
import { Apply, ApplyFnToArr, Args, Fn as _Fn, char_join_pipe, t_JoinChar_pipe, t_function, t_functionFn } from "./type.js"

export class PrefixAndSuffix< P extends string =string, S extends string =""> {

    readonly _prefix:P 
    readonly _suffix:S

    static _valPrefixOrSuffix <T extends string > (prefixOrSuffix :T) { /*console.log("DEBUG_ME",getCurrentLine());*/
        return sourceRegexToStrRegex(prefixOrSuffix) as T|""
    }

    constructor(prefix :P = "" as P, suffix : S = "" as S  ) { /*console.log("DEBUG_ME",getCurrentLine());*/
        this._prefix = PrefixAndSuffix._valPrefixOrSuffix<P>(prefix) as P
        this._suffix = PrefixAndSuffix._valPrefixOrSuffix<S>(suffix) as S
    }

    static cstFromObj< P extends string =string, S extends string ="">(obj_prefixAndSuffix:PrefixAndSuffix<P,S>) { /*console.log("DEBUG_ME",getCurrentLine());*/
        return new PrefixAndSuffix<P,S>(obj_prefixAndSuffix.prefix, obj_prefixAndSuffix.suffix)
    }

    get prefix() {
        return this._prefix
    }

    get suffix() {
        return this._suffix
    }

    encloseStr<T extends string >(str : T ) { /*console.log("DEBUG_ME",getCurrentLine());*/
        return this.prefix + str + this.suffix as `${P}${T}${S}`
    }
}

export type t_PrefixAndSuffix = PrefixAndSuffix<string,string>

export type t_getPPrefixAndSuffix < T extends t_PrefixAndSuffix > = T extends PrefixAndSuffix<infer P, string> ? P : never
export type t_getSSuffixAndSuffix < T extends t_PrefixAndSuffix > = T extends PrefixAndSuffix<string, infer S> ? S : never

export const _concatStrFct = < T extends string , PAS extends PrefixAndSuffix<P,S>, P extends string , S extends string ="">(prefixAndSuffix:PAS)  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return (str:T) => prefixAndSuffix.encloseStr<T>(str)
}
export const concatStrFct = < PAS extends PrefixAndSuffix<P,S>, P extends string , S extends string ="">(prefixAndSuffix:PAS)  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return <T extends string > (str:T) => _concatStrFct<T,PAS,P,S>(prefixAndSuffix)(str)
}


export const concatRegex =<ArrReg extends readonly MRegExp<string,string>[], F extends  t_regexpFlags = undefined > (argsRegExp: ArrReg,flags : F = undefined as any) => joinRegexWithJoinStr(argsRegExp,"", flags)

type t_joinRegexWithJoinStr <JoinChar extends string ,F extends  t_regexpFlags , ArrReg extends readonly MRegExp<string,string>[] , Acc extends MRegExp<string,F> = MRegExp<'',F>  > = 
ArrReg extends readonly [infer Reg , ...infer R] ? 
Reg extends MRegExp<infer A ,infer _F > ?
R extends readonly MRegExp<string,string>[] ?
`${Acc["source"]}${JoinChar}` extends infer S ? S extends string ? 
t_addStrToRegexOrStr<false,Reg,PrefixAndSuffix<S>,S,"",F,A,_F>  extends infer Res ?
Res extends MRegExp<string,F> ? t_joinRegexWithJoinStr<JoinChar,F,R,Res> : never : never : never : never : never : never : Acc

export const joinRegexWithJoinStr = 
<JoinChar extends string ,F extends  t_regexpFlags , ArrReg extends readonly MRegExp<string,string>[] > (argsRegExp : ArrReg,joinStr : JoinChar , flags : F ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    type cur_arrReg = ArrReg[number]
    type cur_S = get_SFromMRegExp<cur_arrReg>
    type cur_F =get_FFromMRegExp<cur_arrReg>


    const res =  argsRegExp.reduce((acc: MRegExp<string,string>, elm:cur_arrReg) => 
    {
        const p_prefix = `${acc.source}${joinStr}` as const 
        const prefix = new PrefixAndSuffix(p_prefix)
        return addStrToRegexOrStr<false,cur_arrReg & MRegExp<cur_S, cur_F>,typeof prefix,typeof p_prefix,"",t_regexpFlags,cur_S,cur_F>(elm as any, prefix, false,flags)
    }) 

    return res as t_joinRegexWithJoinStr<JoinChar,F,ArrReg>
}

export const convertStrRegexToStr = <T extends string >(paramStr :T ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const _PAS = new PrefixAndSuffix<"",typeof ju_escapeRegexStr>("",ju_escapeRegexStr)
    const _str = convertStrToRegexStr(fct_escape()) 
    const _regStr = addStrToRegexOrStr<true,typeof _str,typeof _PAS,"",typeof ju_escapeRegexStr>(_str,_PAS)
    return paramStr.replace(new RegExp(_regStr,"g"), "$1") //TODO typing
  }
  
export const regexToStr = (regex:RegExp) => regex.source
  

export const unionRegex = <ArrReg extends readonly MRegExp<string,string>[],  JoinChar extends string = t_regex_charUnionStr,F extends  t_regexpFlags = undefined > (arr_regex : ArrReg , joinStr:JoinChar = regex_charUnionStr as JoinChar,flags : F= undefined as any ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinRegexWithJoinStr(arr_regex,joinStr,flags)
}

interface addStrToRegexOrStr_FnFctTransform< PAS extends PrefixAndSuffix<P,S>, P extends string , S extends string =""> extends _Fn<[string],string> {
    return : _fnAddStrToRegexOrStr_FnFctTransform<Args<this>,PAS,P,S>
}

type __fnAddStrToRegexOrStr_FnFctTransform< C_T extends string , PAS extends PrefixAndSuffix<P,S>, P extends string , S extends string =""> = <T extends C_T > (str:T)=>ReturnType<ReturnType<typeof _concatStrFct<T,PAS,P,S>>>
type _fnAddStrToRegexOrStr_FnFctTransform< Args extends [string],PAS extends PrefixAndSuffix<P,S>, P extends string , S extends string =""> =
ReturnType<__fnAddStrToRegexOrStr_FnFctTransform<Args[0],PAS,P,S>>

export const addStrToRegexOrStr = <B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>),PAS extends PrefixAndSuffix<P,S>,  P extends string  , S extends string ="", F extends t_regexpFlags = undefined ,_S extends string = undefined , _F extends t_regexpFlags = undefined  >
(param_regexOrStr :_T , prefixAndSuffix : PAS, isStr :B = true as B , flags :F = undefined) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const fct_transform : __fnAddStrToRegexOrStr_FnFctTransform<string,PAS,P,S>  = concatStrFct<PAS,P,S>(prefixAndSuffix)
    return transformRegexOrStr<B,_T, addStrToRegexOrStr_FnFctTransform<PAS,P,S>,typeof fct_transform,_S,_F,F>(param_regexOrStr, isStr, fct_transform, flags)
}

export type t_addStrToRegexOrStr < B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>),PAS extends PrefixAndSuffix<P,S>,  P extends string  , S extends string ="", F extends t_regexpFlags = undefined ,_S extends string = undefined , _F extends t_regexpFlags = undefined  > = ReturnType<typeof addStrToRegexOrStr<B,_T,PAS,P,S,F,_S,_F>>


type _fnRegexOrStrTo <Args extends unknown> = 
    Args extends readonly any[] ?
    Args[0]  extends infer T ? 
    T extends string|MRegExp<string,string> ? 
        T extends string ? [true,T,undefined,undefined] :  T extends MRegExp<string,string> ? [false,T, get_SFromMRegExp<T>,get_FFromMRegExp<T>] :never 
    : never : never : never

//TODO : json config with all common prefix and suffix as we did with enclosingChar + refactor functions 

enum EnumEmbeddingPAS {
    prefixAndSuffix="prefixAndSuffix",
    fctEmbed = "fctEmbed",
    Fn ="Fn"
}

type _t_EmbeddingPAS<N extends string , PAS=PrefixAndSuffix<string,string>,FE=t_function,FN=_Fn> = {
    [EnumEmbeddingPAS.prefixAndSuffix]:PAS,
    [EnumEmbeddingPAS.fctEmbed]:FE,
    [EnumEmbeddingPAS.Fn]:FN
}

export const _getPASEmbeddingPAS = <N extends string ,T extends _t_EmbeddingPAS<N>>(enumEmbeddingPAS:T) => enumEmbeddingPAS[EnumEmbeddingPAS.prefixAndSuffix] as T[EnumEmbeddingPAS.prefixAndSuffix]
export type t__getPASEmbeddingPAS <N extends string ,T extends _t_EmbeddingPAS<N>> = T[EnumEmbeddingPAS.prefixAndSuffix]
export const _getFctEmbedEmbeddingPAS = <N extends string ,T extends _t_EmbeddingPAS<N>>(enumEmbeddingPAS:T) => enumEmbeddingPAS[EnumEmbeddingPAS.fctEmbed] as T[EnumEmbeddingPAS.fctEmbed]
export type t__getFctEmbedEmbeddingPAS <N extends string ,T extends _t_EmbeddingPAS<N>> = T[EnumEmbeddingPAS.fctEmbed]
export const _getFnEmbeddingPAS = <N extends string ,T extends _t_EmbeddingPAS<N>>(enumEmbeddingPAS:T) => enumEmbeddingPAS[EnumEmbeddingPAS.Fn] as T[EnumEmbeddingPAS.Fn]
export type t__getFnEmbeddingPAS <N extends string ,T extends _t_EmbeddingPAS<N>> = T[EnumEmbeddingPAS.Fn]

const str_EmbeddingPASGroup = "EmbeddingPASGroup"
namespace _EmbeddingPASGroup {

    export const name = str_EmbeddingPASGroup
    export const prefixAndSuffix = new PrefixAndSuffix("(", ")")
    export const fctEmbed = <B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined   >(param_regexOrStr: _T, isStr : B ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        type _t = typeof prefixAndSuffix
        type _t_p = t_getPPrefixAndSuffix<_t>
        type _t_s = t_getSSuffixAndSuffix<_t>
        return addStrToRegexOrStr<B,_T,_t,_t_p,_t_s,undefined,_S,_F>(param_regexOrStr, prefixAndSuffix, isStr)
    }
    export interface Fn extends _Fn {
        return : _fn <Args<this>>
    }
    type _fn<Args extends unknown > = 
    _fnRegexOrStrTo<Args> extends [infer B,infer T ,infer _S , infer _F ]  ? 
        B extends boolean ?_S extends string ?  _F extends t_regexpFlags ?T extends (B extends true ? string : MRegExp<_S,_F>) ?   ReturnType <typeof fctEmbed< B,T,_S,_F>>  
    : never : never : never : never : never
}
export const EmbeddingPASGroup : typeof _EmbeddingPASGroup & {
    [EnumEmbeddingPAS.Fn] : _EmbeddingPASGroup.Fn
} = _EmbeddingPASGroup as any  

const str_EmbeddingPASNonCapturingGroup = "EmbeddingPASNonCapturingGroup"
namespace _EmbeddingPASNonCapturingGroup {

    export const name = str_EmbeddingPASNonCapturingGroup
    export const prefixAndSuffix = new PrefixAndSuffix(`${_getPASEmbeddingPAS(EmbeddingPASGroup).prefix}?:`, _getPASEmbeddingPAS(EmbeddingPASGroup).suffix)
    export const fctEmbed = <B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined   > (param_regexOrStr: _T, isStr : B) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        type _t = typeof prefixAndSuffix
        type _t_p = t_getPPrefixAndSuffix<_t>
        type _t_s = t_getSSuffixAndSuffix<_t>
        return addStrToRegexOrStr<B,_T,_t,_t_p,_t_s,undefined,_S,_F>(param_regexOrStr, prefixAndSuffix, isStr)
    }
    export interface Fn extends _Fn {
        return : _fn<Args<this>>
    }
    type _fn<Args extends unknown > = 
    _fnRegexOrStrTo<Args> extends [infer B,infer T ,infer _S , infer _F ]  ? 
        B extends boolean ?_S extends string ?  _F extends t_regexpFlags ?T extends (B extends true ? string : MRegExp<_S,_F>) ?   ReturnType <typeof fctEmbed< B,T,_S,_F>>  
    : never : never : never : never : never    

}
export const EmbeddingPASNonCapturingGroup : typeof _EmbeddingPASNonCapturingGroup & {
    [EnumEmbeddingPAS.Fn] : _EmbeddingPASNonCapturingGroup.Fn
} = _EmbeddingPASNonCapturingGroup as any  


export const EmbeddingPAS = {
    [EmbeddingPASGroup.name] : EmbeddingPASGroup,
    [EmbeddingPASNonCapturingGroup.name] : EmbeddingPASNonCapturingGroup
} as const 
export type t_EmbeddingPAS = typeof EmbeddingPAS

export const df_name_embeddingPAS = EmbeddingPASNonCapturingGroup.name 
export type t_df_name_embeddingPAS = typeof df_name_embeddingPAS

export type t_union_name = keyof t_EmbeddingPAS

export const getPrefixAndSuffixStrOrRegexEmbed = <N extends t_union_name = t_union_name > (name:N) => _getPASEmbeddingPAS(EmbeddingPAS[name])
export type t_prefixAndSuffixStrOrRegexEmbed <N extends t_union_name = t_union_name > = t__getPASEmbeddingPAS<N,t_EmbeddingPAS[N]>
export type t_union_prefixAndSuffix = t_prefixAndSuffixStrOrRegexEmbed

export const getFctEmbedEmbeddingPAS = <N extends t_union_name = t_union_name > (name:N) => _getFctEmbedEmbeddingPAS(EmbeddingPAS[name])
export type t_fctEmbedStrOrRegexEmbed <N extends t_union_name = t_union_name > = t__getFctEmbedEmbeddingPAS<N,t_EmbeddingPAS[N]>
export type t_union_FctEmbed = t_fctEmbedStrOrRegexEmbed

export const getFnEmbeddingPAS = <N extends t_union_name = t_union_name > (name:N) => _getFnEmbeddingPAS(EmbeddingPAS[name])
export type t_fnStrOrRegexEmbed <N extends t_union_name = t_union_name > = t__getFnEmbeddingPAS<N,t_EmbeddingPAS[N]>
export type t_union_FnEmbeds = t_fnStrOrRegexEmbed






export const embedCapturingGroupStrOrRegex = _getFctEmbedEmbeddingPAS(EmbeddingPAS[EmbeddingPASGroup.name])
export const embedNonCapturingGroupStrOrRegex = _getFctEmbedEmbeddingPAS(EmbeddingPAS[EmbeddingPASNonCapturingGroup.name])

const prefixAndSuffix_beginOfLine = new PrefixAndSuffix(str_beginOfLine_regex, "")
export const embedBeginOfLineStrOrRegex = <B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined    > (param_regexOrStr: _T, isStr : B) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    type _t = typeof prefixAndSuffix_beginOfLine
    type _t_p = t_getPPrefixAndSuffix<_t>
    type _t_s = t_getSSuffixAndSuffix<_t>
    return addStrToRegexOrStr<B,_T,_t,_t_p,_t_s,undefined,_S,_F>(param_regexOrStr, prefixAndSuffix_beginOfLine, isStr)
}

const prefixAndSuffix_endOfLine = new PrefixAndSuffix("", str_endOfLine_regex)
export const embedEndOfLineStrOrRegex = <B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined    > (param_regexOrStr: _T, isStr : B) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    type _t = typeof prefixAndSuffix_endOfLine
    type _t_p = t_getPPrefixAndSuffix<_t>
    type _t_s = t_getSSuffixAndSuffix<_t>
    return addStrToRegexOrStr<B,_T,_t,_t_p,_t_s,undefined,_S,_F>(param_regexOrStr,prefixAndSuffix_endOfLine, isStr)
}

const prefixAndSuffix_beginAndEndOfLine = new PrefixAndSuffix(str_beginOfLine_regex, str_endOfLine_regex)
export const embedBeginAndEndOfLineStrOrRegex = <B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined   > (param_regexOrStr: _T, isStr : B) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    type _t = typeof prefixAndSuffix_beginAndEndOfLine
    type _t_p = t_getPPrefixAndSuffix<_t>
    type _t_s = t_getSSuffixAndSuffix<_t>
    return addStrToRegexOrStr<B,_T,_t,_t_p,_t_s,undefined,_S,_F>(param_regexOrStr, prefixAndSuffix_beginAndEndOfLine, isStr)
}



const prefixAndSuffix_optional = new PrefixAndSuffix("", "?")
export const embedOptionalStrOrRegex = <B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined   > (param_regexOrStr: _T, isStr : B) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    type _t = typeof prefixAndSuffix_optional
    type _t_p = t_getPPrefixAndSuffix<_t>
    type _t_s = t_getSSuffixAndSuffix<_t>
    return addStrToRegexOrStr<B,_T,_t,_t_p,_t_s,undefined,_S,_F>(param_regexOrStr, prefixAndSuffix_optional, isStr)
}

  const prefixAndSuffix_class = new PrefixAndSuffix("[", "]")
  export const embedClassStrOrRegex = <B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined   >(param_regexOrStr: _T, isStr : B ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    type _t = typeof prefixAndSuffix_class
    type _t_p = t_getPPrefixAndSuffix<_t>
    type _t_s = t_getSSuffixAndSuffix<_t>
    return addStrToRegexOrStr<B,_T,_t,_t_p,_t_s,undefined,_S,_F>(param_regexOrStr, prefixAndSuffix_class, isStr)
  }

const prefixAndSuffix_negativeClass = new PrefixAndSuffix(`${prefixAndSuffix_class._prefix}^`, prefixAndSuffix_class._suffix)
export const embedNegativeClassStrOrRegex = <B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined   >(param_regexOrStr: _T, isStr : B ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    type _t = typeof prefixAndSuffix_negativeClass
    type _t_p = t_getPPrefixAndSuffix<_t>
    type _t_s = t_getSSuffixAndSuffix<_t>
    return addStrToRegexOrStr<B,_T,_t,_t_p,_t_s,undefined,_S,_F>(param_regexOrStr, prefixAndSuffix_negativeClass, isStr)
}



export const embedOptCapturingGroupStrOrRegex = <B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined   >(param_regexOrStr: _T, isStr : B ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const tmp = embedCapturingGroupStrOrRegex<B,_T,_S,_F>(param_regexOrStr, isStr)
    type _t = typeof tmp
    type _t_s = _t extends MRegExp<string,string> ?  get_SFromMRegExp<_t> : undefined
    type _t_f = _t extends MRegExp<string,string> ?   get_SFromMRegExp<_t>: undefined
    return embedOptionalStrOrRegex<B,_t extends (B extends true ? string : MRegExp<_t_s, _t_f>) ? _t : never ,_t_s,_t_f>(tmp as any , isStr)
}

export const embedOptNonCapturingGroupStrOrRegex = <B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined   >(param_regexOrStr: _T, isStr : B ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const tmp = embedNonCapturingGroupStrOrRegex<B,_T,_S,_F>(param_regexOrStr, isStr)
    type _t = typeof tmp
    type _t_s = _t extends MRegExp<string,string> ?  get_SFromMRegExp<_t> : undefined
    type _t_f = _t extends MRegExp<string,string> ?   get_FFromMRegExp<_t>: undefined
    return embedOptionalStrOrRegex<B,_t extends (B extends true ? string : MRegExp<_t_s, _t_f>) ? _t : never ,_t_s,_t_f>(tmp as any , isStr)
}



export function unionRegexs< T extends readonly string[] = string[]> (...str_regex:T){ /*console.log("DEBUG_ME",getCurrentLine());*/
    return str_regex.join(char_join_pipe) as t_JoinChar_pipe<T>
  }
  
  export function getUnionNonMatchingGroups < T extends readonly string[] = string[]> (...str_regex:T){ /*console.log("DEBUG_ME",getCurrentLine());*/
    type _fn = ReturnType<typeof _getFnEmbeddingPAS<typeof EmbeddingPASNonCapturingGroup.name,typeof EmbeddingPASNonCapturingGroup>>
    const tmp = str_regex.map((_str)=>embedNonCapturingGroupStrOrRegex(_str,true)) as ApplyFnToArr<_fn,T>
    return unionRegexs<typeof tmp>(...tmp) 
  }
  

 
  export function getGroupUnionStrRegex< T extends readonly string[] = string[]> (str_regex:T){ /*console.log("DEBUG_ME",getCurrentLine());*/
    const tmp = unionRegexs<T>(...str_regex)
    return embedCapturingGroupStrOrRegex<true,typeof tmp>(tmp,true)
  }


//A FAIRE créer autre fichier : m_regex_main.ts 
export const majMinFirstCharStrRegex = <T extends string , F extends t_regexpFlags = undefined >(_str:T, flags:validateIsRegexFlags<F> = undefined) => new RegExp(`[${_str[0].toUpperCase()}${_str[0].toLowerCase()}]${_str.substring(1, _str.length)}`, flags)


export const _regexIsBeginWith = < B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined   > (param_regexOrStr: _T, isStr : B) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    
    const prefix = new PrefixAndSuffix("", "(.*)")
    type _t = typeof prefix
    type _t_p = t_getPPrefixAndSuffix<_t>
    type _t_s = t_getSSuffixAndSuffix<_t>
    const _val = addStrToRegexOrStr<B,_T,_t,_t_p,_t_s,undefined,_S,_F>(param_regexOrStr,prefix, isStr)

    type t_val = typeof _val
    type t_val_s = t_val extends MRegExp<string,string> ? get_SFromMRegExp<t_val> : undefined 
    type t_val_f = t_val extends MRegExp<string,string> ? get_FFromMRegExp<t_val>: undefined 
    return embedBeginOfLineStrOrRegex<boolean,typeof _val & MRegExp<t_val_s,t_val_f> ,t_val_s,t_val_f>(_val as any, isStr)
}

export type t_isBeginWith <T extends string , B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined   > = 
(_T extends MRegExp<_S,_F> ? _S : _T) extends infer Beg ? Beg extends string ? 
 T extends `${Beg}${string}` ? true : _S : never : never 

export const isBeginWith = <T extends string , B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined   > (_str : T , param_regexOrStr: _T, isStr : B) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    let regexOrStr = _regexIsBeginWith<B,_T,_S,_F>(param_regexOrStr, isStr)
    return (isStr ? new RegExp(regexOrStr as string ) : regexOrStr as RegExp).test(_str) as t_isBeginWith<T,B,_T,_S,_F>
}

//TODO : remove undefined or find another way to manage union
//see : t_isBeginWith<"gcxd",false,MRegExp<"g">,"g"> != t_isBeginWith<"gcxd",false,MRegExp<"g">> because _S become undefined


export const idxOfChars = (name,arr_chars )=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    let _name = name 
    const regStr = getUnionNonMatchingGroups(arr_chars)
  
    const fct_index = (_str)=>getRegexG(embedCapturingGroupStrOrRegex(regStr,true)).exec(_str)?.index
    let idx = fct_index(name)
    let idx_split = []
    let beg_idx = 0 
    while(idx){ /*console.log("DEBUG_ME",getCurrentLine());*/
        idx_split.push(beg_idx+idx)
        beg_idx = idx
        _name = _name.substring(idx+1)
        idx = fct_index(_name)
    }
    return idx_split
  }
  
  
  export const generateName = (name,join_chars =["_",".","-"] ,_split_chars =  [" "]) : string[]=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
      
      
    const split_chars = [..._split_chars ,...join_chars]
    const idx_split = idxOfChars(name,split_chars)
    const split_arr =  splitArr(name,idx_split)
    
    const arr_fct_join_fct = [...join_chars.map((elm)=>(..._str)=> _str.join(elm)),joinCapitalize]
    
    
    const permutation : any[] = getPermutation(enumerate(arr_fct_join_fct.length-1),split_arr.length-1)
  
    let res = []
    for (const perm of permutation){ /*console.log("DEBUG_ME",getCurrentLine());*/
        const tmp = perm.reduce((acc,nb,idx)=>arr_fct_join_fct[nb](acc,split_arr[idx+1]),split_arr[0])
        
        res.push(tmp)
        
        
    }
    
    return res 
    
    
  }