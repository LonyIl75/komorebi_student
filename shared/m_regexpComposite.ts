/*type t_TFctEmbedsFromFnEmbeds<_FnEmbeds extends readonly t_union_FnEmbeds[]>  = 
_FnEmbeds extends readonly [infer F1,...infer FR] ? F1 extends t_union_FnEmbeds ? FR extends readonly t_union_FnEmbeds[] ?
[t_functionFn<F1>,...t_TFctEmbedsFromFnEmbeds<FR>] : never : never : []*/

import getCurrentLine from "get-current-line"
import { t_strRegex } from "./_regexp.js"
import { deepCloneJson } from "./m_json.js"
import { IJson, t_s_getProp, s_getProp, t_isEmptyJson, t_jsonAddIfNotExist, isEmptyJson, setProp, jsonAddIfNotExist, isObject } from "./m_object.js"
import { _isFunction } from "./m_primitives.js"
import { df_name_embeddingPAS, t_union_name, t_fnStrOrRegexEmbed, getFctEmbedEmbeddingPAS, t_df_name_embeddingPAS } from "./m_regex_prefixAndSuffix.js"
import { isEqual, arrToSet, t_indexable_key, Apply, upsertInSimpleJson, makeOptional } from "./type.js"





const df_t_merge_dfTe = {
    df_fct: df_name_embeddingPAS,
    fctEmbeds: undefined,
    joinChar: "",
    fctEmbed: df_name_embeddingPAS
  } as const 
  
  export type t_df_t_merge_dfTe = typeof df_t_merge_dfTe
  
  
  type _t_df_nonComposite = { readonly fctEmbed ?: t_union_name }
  type _t_df_composite = {  df_fct ?: t_union_name , readonly fctEmbeds ?: IJson<string,fdsfdcv> }
  type t_df_common = { readonly joinChar ?: t_strRegex }
  type t_df_nonComposite = _t_df_nonComposite & t_df_common
  type t_df_composite = _t_df_composite & t_df_common
  type t_df_union = t_df_nonComposite | t_df_composite
  export type t_df_merge = t_df_nonComposite &  t_df_composite
  
  
  
  type t_isComposite <T extends _te<string> > = T extends _te<string,false> ? false  : T  extends _te<string,true> ? isEqual<[...T["regex"]["arr_keys"]],arrToSet<T["regex"]["arr_keys"]>> : false 
  const isComposite = <T extends _te<string> >(t:T):t_isComposite<T> => (isObject(t["regex"]) && t["regex"]["arr_keys"].length === new Set(t["regex"]["arr_keys"]).size ) as t_isComposite<T> 
  
  type t_isValidComposite <T extends _te<string> > = T  extends _te<string,true> ? t_isComposite<T> extends true ? 
    T extends _Composite<T["regex"]["name"],T["regex"]["arr_keys"]> ? 
    t_isValidCompositeRegexp<T["regex"]["arr_keys"],T["regex"]["value"]>
    : false: false: true
  
  type t_isValidCompositeRegexp<ArrKey extends readonly string [] , T extends t_ICompositeRegexp<ArrKey> > = 
  ArrKey extends readonly [infer A,...infer BR] ? A extends string ? BR extends readonly string[] ?
  T extends readonly [infer V1,...infer VR] ? V1 extends _te<A> ? 
  t_isValidComposite<V1> extends true ? 
    VR extends t_ICompositeRegexp<BR> ?
      t_isValidCompositeRegexp<BR,VR> 
    : VR extends [] ? true : false
  : false : false : false : false : false : true
  
  type t_getNameTe <T extends _te<string>> = T extends _te<string,false> ? T["name"] : T extends _te<string,true> ? T["regex"]["name"]:never//T extends _te<infer A> ? A : never
  const getNameTe = <T extends _te<string>>(val:T) => isComposite(val) ? (val as _te<string,true>)["regex"].name : (val as _te<string,false>).name 
  const isValidComposite = <T extends _te<string> >(_t:T) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    let res : boolean = isComposite(_t) 
    if(res){ /*console.log("DEBUG_ME",getCurrentLine());*/
      const t = _t as _Composite
      let arrKeys = t["regex"]["arr_keys"]
      for(let idx = 0 ; res && idx < t["regex"].value.length ; idx++){ /*console.log("DEBUG_ME",getCurrentLine());*/
        const val = t["regex"].value[idx]
        res = arrKeys.includes(getNameTe(val))
        if(res) { /*console.log("DEBUG_ME",getCurrentLine());*/
          arrKeys = arrKeys.filter((el)=>el !== getNameTe(val))
          if(isComposite(val)) res = isValidComposite(val)
        }
      }
      if(res) res = arrKeys.length === 0
    }
    return res as t_isValidComposite<T>
  }
  
  
  
  type _CompositeRegexp<N extends string = string , ArrK extends readonly string[] = any ,_Value extends t_ICompositeRegexp<ArrK>=t_ICompositeRegexp<ArrK>  ,df extends t_df_merge = t_df_merge > = CompositeRegexp<N,ArrK,_Value,df>
  
  export type _Composite <N extends string = string , ArrK extends readonly string[] =  any ,_Value extends t_ICompositeRegexp<ArrK>=t_ICompositeRegexp<ArrK>  ,df extends t_df_merge = t_df_merge > =
  {readonly regex:CompositeRegexp<N,ArrK,_Value,df> }  & _t_df_composite 
  
  
  export type _te<K extends string , isComposite extends boolean = boolean > = 
  (boolean extends isComposite ? _Composite<K> | ({readonly regex:t_strRegex } & _t_df_nonComposite)
   :  isComposite extends true ? 
   _Composite<K>
  :{readonly regex:t_strRegex,readonly name : string  } & _t_df_nonComposite ) extends infer A ? 
  A & t_df_common & {  readonly operator?: string }:never
  
  type t_getPropIfExistElseDf <nameProp extends t_indexable_key ,  T, T_df extends t_df_nonComposite , nameProp_df extends keyof T_df = undefined >= t_s_getProp<T,nameProp,t_s_getProp<T_df,nameProp_df extends undefined ? nameProp : nameProp_df ,never>>
  const getPropIfExistElseDf = <nameProp extends t_indexable_key ,  T , T_df extends t_df_nonComposite , nameProp_df extends keyof T_df = undefined>(_nameProp:nameProp, t:T,df:T_df,_nameProp_df?:nameProp_df):t_getPropIfExistElseDf<nameProp,T,T_df,nameProp_df>=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    if(_nameProp_df === undefined) _nameProp_df = _nameProp as unknown as nameProp_df
    const [_b1,_b2] = [t.hasOwnProperty(_nameProp),df.hasOwnProperty(_nameProp_df)]
    if(!(_b1 || _b2)) throw new Error(`getPropIfExistElseDf : ${_nameProp.toString()} not found in t and ${_nameProp_df.toString()} in df`)
    //@ts-ignore
     return _b1 ? t[_nameProp] : df[_nameProp_df]
  
  }
  
  
  type t_applyFctEmbed <S extends string  ,   TFctEmbed extends t_union_name >= Apply<t_fnStrOrRegexEmbed<TFctEmbed>,[S]> 
  type t_getAndApplyFctEmbed < S extends string , T extends _te<string,false> , T_df extends t_df_nonComposite >= t_getPropIfExistElseDf<"fctEmbed",T,T_df> extends infer TFctEmbed ? TFctEmbed extends t_union_name ?
  t_applyFctEmbed<S,TFctEmbed>  : never : never
  const getAndApplyFctEmbed = < S extends string , T extends _te<string,false> , T_df extends t_df_nonComposite >(str:S,t:T,df:T_df) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    let name_fctEmbed : t_union_name = getPropIfExistElseDf<"fctEmbed",T,T_df>("fctEmbed",t,df)
    const fctEmbed = getFctEmbedEmbeddingPAS(name_fctEmbed)
    if(_isFunction(fctEmbed)) return fctEmbed(str,true)
    else throw new Error("getAndApplyFctEmbed : fctEmbed is not a function")
  }
  
  type t_getAndApplyFctGroupEmbed < S extends string , TFctEmbeds extends fdsfdcv , T_df extends t_df_merge  >= 
  t_s_getProp<TFctEmbeds,"_",undefined> extends undefined ?  t_applyFctEmbed<S,T_df["df_fct"]> : t_applyFctEmbed<S,TFctEmbeds["_"]>  
  const getAndApplyFctGroupEmbed = < S extends string , TFctEmbeds extends fdsfdcv , T_df extends t_df_merge  >(str:S,fctEmbeds:TFctEmbeds,df:T_df) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    let name_fctEmbed : t_union_name = getPropIfExistElseDf<"_",TFctEmbeds,T_df,"df_fct">("_",fctEmbeds,df,"df_fct")
    const _fctEmbed = getFctEmbedEmbeddingPAS(name_fctEmbed)
    return _fctEmbed(str,true)
  }
  
  type t_getAndApplyFctEmbedOnTeRegex < T extends _te<string,false> , T_df extends t_df_nonComposite >= t_getAndApplyFctEmbed<T["regex"],T,T_df> 
  const getAndApplyFctEmbedOnTeRegex = < T extends _te<string,false> , T_df extends t_df_nonComposite >(t:T,df:T_df) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return getAndApplyFctEmbed<T["regex"],T,T_df>(t["regex"],t,df)
  }
  
  type t_getOperator < T extends _te<string>>  = t_s_getProp<T,"operator","">
  const getOperator = <T extends _te<string>>(t:T) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return s_getProp(t,"operator","") as t_getOperator<T>
  }
  
  type t__joinRegexGroup< T extends _te<string,false> , T_df extends t_df_nonComposite ,S extends string  = "">  =
  t_getPropIfExistElseDf<"joinChar",T,T_df> extends infer JoinChar ?  JoinChar extends string ?
  t_getAndApplyFctEmbedOnTeRegex<T,T_df> extends infer AS ? AS extends  string ? `${S}${JoinChar}${AS}${t_getOperator<T>}`: never : never : never :never
  
  
  
  type t_joinRegexGroup< T extends _te<string> , _T_df extends t_df_merge,TFctEmbeds extends fdsfdcv = fdsfdcv>  =
  t_updateTdfFctEmbed<TFctEmbeds,_T_df> extends infer T_df ?   T_df extends t_df_merge?
    t_getPropIfExistElseDf<"joinChar",T,T_df> extends infer JoinChar ?  JoinChar extends string ?  
    (T extends _te<string,false> ? 
        `${t_getAndApplyFctEmbedOnTeRegex<T,T_df>}${t_getOperator<T>}` extends infer S ? S extends string ?
            t_isEmptyJson<TFctEmbeds> extends true ? S : t_getAndApplyFctGroupEmbed<S,TFctEmbeds,T_df >:
            never : never :
      T extends _te<string,true> ? 
      T extends _Composite<T["regex"]["name"],T["regex"]["arr_keys"]> ?
      t_st_buildGroupRegexp<T["regex"]["name"],T["regex"]["arr_keys"],T["regex"],T_df,t_isEmptyJson<T["fctEmbeds"]> extends false ? t_jsonAddIfNotExist<T["fctEmbeds"] ,TFctEmbeds["childs"]> : TFctEmbeds["childs"] > extends infer Test ? Test extends string ? 
        Test extends "" ? "":`${t_getAndApplyFctGroupEmbed<Test,TFctEmbeds,T_df>}${t_getOperator<T>}`//TODO why without Test extends "" ? "": it doesnt work and need for exemple T_df =  T_df & {df_fct : t_embedNonCampturingGroupStrRegex}
        :never :never 
      : never 
      : never) extends infer Res ? Res extends string ?  `${JoinChar}${Res}` : never : never 
    : never 
  : never 
  : never 
  : never 
  
  type t_updateTdfFctEmbed < TFctEmbeds extends fdsfdcv,T_df extends t_df_merge> = 
  t_isEmptyJson<TFctEmbeds> extends true ?
  T_df : (t_s_getProp<TFctEmbeds,"df",undefined> extends undefined ?T_df :upsertInSimpleJson<T_df,"fctEmbed",TFctEmbeds["df"]>) 
  
  
  
  type fdsfdcv< F extends t_union_name = t_union_name , F2 extends t_union_name = t_union_name >  = {_?:F,df?:F2, childs?:{[k in string]:any}}
  type _t_st_buildGroupRegexp<K extends readonly string[] , _Value extends t_ICompositeRegexp<K> , T_df extends t_df_merge ,TFctEmbeds extends makeOptional<IJson<K[number],fdsfdcv>> = makeOptional<IJson<K[number],fdsfdcv>>> =
    K extends readonly [infer A,...infer BR] ? A extends string ? BR extends readonly string[] ?
    _Value extends readonly [infer V1,...infer VR] ? V1 extends _te<A> ? 
    (TFctEmbeds[A] extends fdsfdcv ? t_joinRegexGroup<V1,T_df,TFctEmbeds[A]> : t_joinRegexGroup<V1,T_df> ) extends infer _S ? _S extends string ?
      VR extends t_ICompositeRegexp<BR> ?
      `${_S}${_t_st_buildGroupRegexp<BR,VR,T_df,TFctEmbeds>}`
      : _S : never: never
  : never : never : never : never : "" 
  
  
  
  export type t_st_buildGroupRegexp<N extends string , K extends readonly string[] , Composite extends _CompositeRegexp<N,K> , T_df extends t_df_merge ,TFctEmbeds extends makeOptional<IJson<K[number],fdsfdcv>> =makeOptional<IJson<K[number],fdsfdcv>>> =
  _t_st_buildGroupRegexp<K,Composite["value"],T_df,TFctEmbeds>
  
  
  
  export function _joinRegexGroup<S extends string ,   T extends _te<string,false> , T_df extends Omit<_te<string,false>,"regex"|"name">= {fctEmbed:t_df_name_embeddingPAS,joinChar:""} > (_str : S , str_regex:T["regex"] ,join_char : T_df["joinChar"] = "" as any,name_fct_embed :  T_df["fctEmbed"] = df_name_embeddingPAS as any){ /*console.log("DEBUG_ME",getCurrentLine());*/
    const fct_embed = getFctEmbedEmbeddingPAS(name_fct_embed)
    return  [_str,fct_embed(str_regex,true)].join(join_char) as t__joinRegexGroup<T,T_df,S>
  }
  
  
  
  type _t_ICompositeRegexp<ArrK extends readonly string[] ,Acc extends readonly any[] =[]> = 
  ArrK extends readonly [infer A,...infer B] ? A extends string ? B extends readonly string[] ?
  readonly [_te<A> , ... _t_ICompositeRegexp<B,[...Acc,A]>] : never : never : []
  
  
  export type t_ICompositeRegexp<ArrK extends readonly string[] > = 
   string[] extends [...ArrK] ? readonly _te<string>[] :  
  isEqual<[...ArrK],arrToSet<ArrK>> extends true ? 
  _t_ICompositeRegexp<ArrK>: never
  
  export class ICompositeRegexp<N extends string ,ArrK extends readonly string[] , _Value extends t_ICompositeRegexp<ArrK>=t_ICompositeRegexp<ArrK> ,T_df extends t_df_merge = t_df_t_merge_dfTe > {
    name : N 
    value : _Value
    df : T_df
    arr_keys : ArrK
  }
  
  export class CompositeRegexp<N extends string , ArrK extends readonly string[] , _Value extends t_ICompositeRegexp<ArrK>=t_ICompositeRegexp<ArrK> ,T_df extends t_df_merge = t_df_t_merge_dfTe > implements ICompositeRegexp<N,ArrK,_Value,T_df> {
    name : N 
    value : _Value
    df : T_df
    arr_keys : ArrK
  
  
    constructor(name : N , _compositeRegexp : _Value,arr_keys : ArrK ,   _df_fctEmbed : T_df = df_t_merge_dfTe as any){ /*console.log("DEBUG_ME",getCurrentLine());*/
      this.name = name
      this.value = _compositeRegexp
      this.arr_keys = arr_keys
      this.df = _df_fctEmbed
      for (const idx in this.value) { /*console.log("DEBUG_ME",getCurrentLine());*/
        const val = this.value[idx] 
        //@ts-ignore
        if(!val.hasOwnProperty("fctEmbed")) val.fctEmbed = this.df["fctEmbed"]
      }
      if(!this.value.every((e)=> !isComposite(e)||isValidComposite(e))) {
        throw new Error("CompositeRegexp : invalid composite")
      }
    }
  
  
    buildGroupRegexp < _TFctEmbeds extends  makeOptional<IJson<ArrK[number],fdsfdcv>> = undefined >(_fct_embeds :_TFctEmbeds = undefined as any){ /*console.log("DEBUG_ME",getCurrentLine());*/
  
  
      let str = ""
      const joinRegexGroup = <T extends fdsfdcv , t_val extends _te<string> =_te<string>>(cur_value : t_val , _fct_embeds :T ={} as T ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        const updateTdfFctEmbed	 =<T extends fdsfdcv >(fctEmbed:T ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
          let cpy_df = deepCloneJson(this.df)
          return (isEmptyJson(fctEmbed) ? cpy_df : (s_getProp<T,"df",undefined>(fctEmbed,"df",undefined) === undefined ?  setProp(cpy_df,"fctEmbed",fctEmbed["df"]):cpy_df)) as t_updateTdfFctEmbed<T,T_df>
          }
  
          let res  
          let nw_df = updateTdfFctEmbed(_fct_embeds)
          let joinChar = getPropIfExistElseDf<"joinChar",t_val,typeof nw_df>("joinChar",cur_value,nw_df)
          const operator = getOperator(cur_value)
          if(!isComposite(cur_value)){
            const _cur_value = cur_value as _te<string,false>
            res = `${getAndApplyFctEmbedOnTeRegex(_cur_value,nw_df)}${operator}`
            res = isEmptyJson(_fct_embeds) ? res : getAndApplyFctGroupEmbed(res,_fct_embeds,nw_df)
          }else {
            const _cur_value = cur_value as _Composite
            res = _cur_value.regex.buildGroupRegexp(!isEmptyJson(_cur_value['fctEmbeds']) ? jsonAddIfNotExist(_cur_value['fctEmbeds'],_fct_embeds["childs"]) : _fct_embeds["childs"])
            res = `${getAndApplyFctGroupEmbed(res,_fct_embeds,nw_df)}${operator}`
          }
          return `${joinChar}${res}` as t_joinRegexGroup<t_val,T_df,T>
  
      }
      for ( let idx = 0 ; idx < this.value.length ; idx++) { /*console.log("DEBUG_ME",getCurrentLine());*/
        const _value = this.value[idx]
        const _name = this.arr_keys[idx]
        const _fctEmbed = _fct_embeds?.[_name]
        str += joinRegexGroup(_value,_fctEmbed||{})
      }
  
      return str as  string[] extends ArrK ? string : _t_st_buildGroupRegexp<ArrK,_Value,T_df ,_TFctEmbeds>
    }
  
    static st_buildGroupRegexp < N extends string , ArrK extends readonly string[] , _Value extends t_ICompositeRegexp<ArrK> ,T_df extends t_df_merge = t_df_t_merge_dfTe ,_TFctEmbeds extends makeOptional<IJson<ArrK[number],fdsfdcv>> = undefined >(_this: CompositeRegexp<N,ArrK,_Value,T_df>,_fct_embeds ?:_TFctEmbeds){ /*console.log("DEBUG_ME",getCurrentLine());*/
      return _this.buildGroupRegexp(_fct_embeds)
    }

  
  
  
  }
  
  type _t_CompositeRegexp_getJsonFctEmbeds < V extends t_ICompositeRegexp<readonly string[]>  > =
   V extends readonly [infer A,...infer B] ? A extends _te<string> ?
  {[k in t_getNameTe<A>]:({_?:t_union_name} & (A extends _te<string,true> ? {childs?:t_CompositeRegexp_getJsonFctEmbeds<A["regex"]>}  : {}) )} extends infer Res ? 
   B extends t_ICompositeRegexp<readonly string[]> ? Res & _t_CompositeRegexp_getJsonFctEmbeds<B> : Res : never : never : {}
  
  export type t_CompositeRegexp_getJsonFctEmbeds < C extends _Composite["regex"]  > = _t_CompositeRegexp_getJsonFctEmbeds<C["value"]>
  