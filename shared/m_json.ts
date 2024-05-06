import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_json"

import { IJson, IVoid, createJsonAsForEach, createJsonFromEntries, isObject, t_Entry } from "./m_object.js";
import { promisifyVal } from "./m_promise.js";
import { getDfPrefixName, getGetterPrefixName, getSetterPrefixName } from "./m_string.js";
import { NoArgsConstructor, _getAscSubArray,countAndRemoveElmInElms,makeOptional,propsNotInObj,t_function, t_function_staticToMember, t_indexable_key } from "./type.js";
import { err_function } from "./m_function.js";
import _ from "lodash";
import { _isNullOrUndefined, _isObject } from "./m_primitives.js";
import { concatArraysAndRemoveDuplicates } from "./m_array.js";

//exclude obj_serializer
type t_arr_j <TArr extends readonly any[]> =  
    any[] extends TArr ? TArr :
    TArr extends readonly [infer T,...infer Rest] ?[t_j<T>,...t_arr_j<Rest>]:
    TArr extends [] ? [] 
    :(TArr[number] extends infer A ? A extends object ?A extends readonly any[] ? t_arr_j<A> :t_j<A>  :A : never) extends infer A2 ? 
    readonly any[] extends TArr ? readonly A2[] : any[] extends TArr ? A2[] : A2 : never



export type t_j <T> = { [k in keyof T as T[k] extends Function ? never : k ] ?: 
    T[k] extends object ? T[k] extends readonly any[] ?t_arr_j<T[k]> :t_j<T[k]> : T[k] 
}


export type t_serializer<T,J extends t_j<T> = t_j<T>> = { toJson : ( obj : T) => J , fromJson : (json:J) => T   }
export abstract class AHaveSerializer<T,J extends t_j<T>=t_j<T>  > {


    obj_serializer:t_serializer<T,J> ; 

    toJson : () => J = () => {
        return this.getSerializer().toJson(this as unknown as T )
    }


    fromJson : (json:J) => T = (json:J) => {
        return this.getSerializer().fromJson(json)
    }


    getSerializer : () => t_serializer<T,J> = () =>{
        return this.obj_serializer;
    }

    constructor(initializer ){
        this.obj_serializer = initializer ; 
    }



}

export class EmptyInit<T>  {


    obj_emptyInit : T ; 
    classType : { new (): T } ;

    constructor ( classType ?: { new (): T } , _emptyInit ?: () => T){
        if (+!!classType + +!!_emptyInit !== 1) {
            throw new Error("EmptyInit constructor must have one and only one argument");
          }
          
        this.classType =classType ; 
        this._emptyInit = _emptyInit;
        

    }
    _emptyInit ?: () => T ; 
    df_constructor ( c : NoArgsConstructor<T> ) {
        return new c();
    }
    emptyInit : () => T = () => {
        if(this._emptyInit == undefined)  return this.df_constructor(this.classType)
        return this._emptyInit()
    }

    getEmptyInit = () => {
        if(this.obj_emptyInit == undefined) this.obj_emptyInit = this.emptyInit();
        return this.obj_emptyInit;
    }


}

type t_retGetEmptyInit<T,J extends t_j<T> = t_j<T>> = T & AHaveSerializer <T,J>
type t_ret_ObjectKeys = string[]

type t_keysObject<K extends t_indexable_key = t_indexable_key, V = any > = {keys:t_ret_ObjectKeys,obj:IJson<K,V>}
const cst_keysObject = (keys:t_ret_ObjectKeys,obj:IJson) : t_keysObject => ({keys,obj})
const cst_keysObjectFromObj = (obj:IJson) : t_keysObject => cst_keysObject(Object.keys(obj),obj)


const _sameKeys=<K extends t_indexable_key = t_indexable_key, V = any >
( obj1 : IJson<K,V> , obj2 : IJson<K,V> , fct_cond : t_function<boolean,[t_keysObject<K,V>,t_keysObject<K,V>]>)
: boolean => {
    const keysObj_1  = cst_keysObjectFromObj(obj1)
    const keysObj_2 = cst_keysObjectFromObj(obj2)
    if (keysObj_1.keys.length !== keysObj_2.keys.length)return false
    return fct_cond(keysObj_1,keysObj_2)
}

export const sameKeysOnLevel =<K extends t_indexable_key = t_indexable_key, V = any >( obj1 : IJson<K,V> , obj2 : IJson<K,V> ) : boolean => {
    const fct = (keysObj_1:t_keysObject<K,V>,keysObj_2:t_keysObject<K,V>)=>keysObj_1.keys.every((key) => keysObj_2.obj.hasOwnProperty(key))
    return _sameKeys(obj1,obj2,fct)
}

export const sameKeysDeep = <K extends t_indexable_key = t_indexable_key, V = any >( obj1 : IJson<K,V> , obj2 : IJson<K,V> ) : boolean => {
    const fct = (keysObj_1:t_keysObject<K,V>,keysObj_2:t_keysObject<K,V>)=>keysObj_1.keys.every((key) => 
        {
            let res_bool :boolean  = keysObj_2.hasOwnProperty(key) 
            if(res_bool && _isObject(keysObj_1.obj[key])) {
                res_bool =  _isObject(keysObj_2.obj[key]) && sameKeysDeep(keysObj_1.obj[key],keysObj_2.obj[key])
            }
            return res_bool
        }
    )
    return _sameKeys(obj1,obj2,fct)
   
}

enum enum_compare_mode {
    deep = "deep",
    firstLevel = "firstLevel"
}

const fct_isSameKeys =
( obj1 : IJson , obj2 : IJson , mode : enum_compare_mode ) : boolean => {
    switch (mode) {
        case enum_compare_mode.deep:
            return sameKeysDeep(obj1,obj2)
        case enum_compare_mode.firstLevel:
            return sameKeysOnLevel(obj1,obj2)
    }
}

const fct_st_isTypeof = <T,J extends t_j<T> = t_j<T>>(_this:t_retGetEmptyInit<T,J> ,  obj : AHaveSerializer<any> , mode : enum_compare_mode = enum_compare_mode.firstLevel ) : boolean => {
    return fct_isSameKeys(obj.toJson(),_this.toJson(),mode)
}

type t_fct_st_isTypeof<T,J extends t_j<T> = t_j<T>> = typeof fct_st_isTypeof<T,J> 
type t_fct_mb_isTypeof = t_function_staticToMember<t_fct_st_isTypeof<any>>


const fct_st_isEqual = <T,J extends t_j<T> = t_j<T>>(_this:t_retGetEmptyInit<T,J> ,  obj : AHaveSerializer<any>  ) : boolean => {
    return isEqJson(obj.toJson(),_this.toJson())
}

type t_fct_st_isEqual<T,J extends t_j<T> = t_j<T>> = typeof fct_st_isEqual<T,J>
type t_fct_mb_isEqual = t_function_staticToMember<t_fct_st_isEqual<any>>

export interface t_st_haveSerializer< T,J extends t_j<T> = t_j<T> >  extends t_serializer<T,J>{
}

export interface t_st_emptyInit<T,J extends t_j<T> = t_j<T>,_T extends t_retGetEmptyInit<T,J> =t_retGetEmptyInit<T,J>> {
    emptyObject : EmptyInit<_T>
    getEmptyInit:()=>_T;
}
  
export interface t_st_haveSerializerAndEmptyInit< T  extends haveSerializerAndEmptyInit<T> > extends t_st_haveSerializer<T>,t_st_emptyInit<T>{
    isTypeof:t_function_staticToMember<t_fct_st_isTypeof<T>>
    //isEqual:t_function_staticToMember<t_fct_st_isEqual<T>>
}


export interface IEmptyInit<T,J extends t_j<T> = t_j<T>,_T extends t_retGetEmptyInit<T,J> =t_retGetEmptyInit<T,J>> {
    getEmptyInit:()=>_T;
    isEmpty : () => boolean
}


export interface IHaveSerializerAndEmptyInit< T, J extends t_j<T> = t_j<T>,_T extends t_retGetEmptyInit<T,J> =t_retGetEmptyInit<T,J>> extends  IEmptyInit<T,J,_T> ,AHaveSerializer<T,J>{
    isEqual :t_function_staticToMember<t_fct_st_isTypeof<T>>
}

export abstract class AHaveSerializerAndEmptyInit<T, J extends t_j<T> = t_j<T>,_T extends t_retGetEmptyInit<T,J> =t_retGetEmptyInit<T,J>>{
    abstract getEmptyInit:()=>_T;
    abstract isTypeof :t_fct_st_isTypeof<T,J>
}

export abstract class haveSerializerAndEmptyInit<T, J extends t_j<T> = t_j<T>,_T extends t_retGetEmptyInit<T,J> =t_retGetEmptyInit<T,J>> extends AHaveSerializer<T,J> implements IHaveSerializerAndEmptyInit<T,J,_T>,AHaveSerializerAndEmptyInit<T,J,_T>   {
    
    constructor(intializer){
        super(intializer);
    }
    

    abstract getEmptyInit:()=>_T;
    abstract isTypeof :t_fct_st_isTypeof<T,J>

    static _isTypeof<T,J extends t_j<T> = t_j<T>>(...args:Parameters<t_fct_st_isTypeof<T,J>>) { return fct_st_isTypeof<T,J>(...args) }
    static _isEqual<T,J extends t_j<T> = t_j<T>>(...args:Parameters<t_fct_st_isEqual<T,J>>) { return fct_st_isEqual<T,J>(...args) }

    isEmpty = () => {
        return this.isEqual(this.getEmptyInit())
    }



    isEqual = (obj: _T) :boolean =>  {
        return haveSerializerAndEmptyInit._isEqual(this as unknown as _T,obj)
    }

    
}

export const deepCloneJson = <T extends IJson>(json:T) : T => {
    return !_isNullOrUndefined(json) ? JSON.parse(JSON.stringify(json)) : json
}

export const deepCloneJsonIfIsObject = <T extends any>(json:T) : T => {
    return isObject(json) ? JSON.parse(JSON.stringify(json)) :json 
}

export const createSubJsonFromArrKeys =<K extends t_indexable_key , T extends IJson<K> = IJson<K> > (json : T , keys : readonly K[]) : ({ [k in K] : T[k] }|IVoid) => {
    const transformedData = {} as any ;
    for (const key of keys) {
        if (!transformedData[key]) {
            transformedData[key] = isObject(json[key]) ? deepCloneJson(json[key]) : json[key] ;
        }
    }
    return transformedData as ({ [k in K] : T[k] }|IVoid)
}

export const getSubsetKeysFromArrRegex =<K extends t_indexable_key  , T extends IJson<K> = IJson<K> > (json : T , arr_regex : readonly RegExp[]) : (K[]|[]) => {
    return Object.keys(json).filter((key) => arr_regex.some((regex) => regex.test(key))) as K[]
}

export const createSubJsonFromArrRegex =<K extends t_indexable_key  , T extends IJson<K> = IJson<K> > (json : T , arr_regex : readonly RegExp[])  => {
    const subsetKeys = getSubsetKeysFromArrRegex<K,T>(json,arr_regex)
    return createSubJsonFromArrKeys(json,subsetKeys as K[])
}


export const getSubsetValuesFromPredicate =<V , T extends IJson<t_indexable_key,V> = IJson<t_indexable_key,V> > (json : T , predicate : (val: V)=> boolean ) : (V[]|[]) => {
    return Object.values(json).filter((val: V) => predicate(val))
}

export const getSubsetJsonFromPredicate =<K extends t_indexable_key  ,V , T extends IJson<K,V> = IJson<K,V> > (json : T , predicate : (entry: t_Entry<K,V>)=> boolean ) : IJson<K,V>|IVoid => {
    const entries : t_Entry<K,V>[] = Object.entries<V>(json) as any
    return createJsonFromEntries(entries.filter((entry: t_Entry<K,V>) => predicate(entry)))
}

export function pickAndFilterProps<T extends  haveSerializerAndEmptyInit<T>, _TProps extends t_j<T> & IJson = t_j<T> & IJson  >(props: _TProps,  dfInstance : T  )  
: { extracted_props:T, restProps:propsNotInObj<_TProps,t_j<T>> } {

    const json_empty  = dfInstance.getEmptyInit().toJson()
    type t_json_empty = typeof json_empty
    //@ts-ignore
    const json_extracted_props = pick(props, Object.keys( json_empty  ) ).__wrapped__ as t_json_empty;//Object.keys( dfInstance.getSerializer().toJson(dfInstance.getEmptyInit())  )

    //@ts-ignore
    const restProps = pick(props, Object.keys(props).filter(key => !(key in json_extracted_props ))).__wrapped__ as propsNotInObj<_TProps,t_json_empty>;

    const extracted_props =  dfInstance.fromJson(json_extracted_props) as T ; 

    return {extracted_props , restProps };

}
export interface t_st_configObject<T extends haveSerializerAndEmptyInit<T>> extends t_st_haveSerializerAndEmptyInit<T> {}

export abstract class t_configObject<T> extends haveSerializerAndEmptyInit<T> {}


export const getReqOrResJsonFromTConfigObj = < O extends t_configObject<O>> (obj:O)=> {
    return obj.toJson() as ReturnType<O["toJson"] >
}
/*
export const getReqOrResEmptyJsonFromTConfigObj = < O extends t_configObject<O>> (obj:O)=> {
    type fdsf =  O['getEmptyInit']
    return obj.getEmptyInit().toJson() as ReturnType<O['getEmptyInit']>["toJson"] 
}*/



export function pickAndFilterProps_firstLevelProps<T extends  haveSerializerAndEmptyInit<T>  >(props: IJson ,  dfInstance : T  )  : { extracted_props:T, restProps:IJson } {
     

    let json_extracted_props :t_j<T>  = {} 
    let restProps:IJson = {} as IJson

    for ( const key in props ){
        if(key in dfInstance )json_extracted_props[key] = props[key]
        else restProps[key] = props[key]
    }

    const extracted_props : T =  dfInstance.fromJson(json_extracted_props) as T ; 

    return {extracted_props , restProps };

}

export function getExtractedPropsFromPick (pickObject ){
    return pickObject["extracted_props"] ;
}


export  abstract class IPickProps<T> extends haveSerializerAndEmptyInit<T>{}  


export const filterJsonByArrProps = (json:IJson , arrProps : t_indexable_key[])=> {
    return (arrProps?.length ? createJsonAsForEach(Object.keys(json).map((key : string ) => { return  arrProps.includes(key as any) ? { [key] : json[key] } : null }).filter((_)=>_)):json) as IJson
}


export function countArray<T extends t_indexable_key , Arr extends readonly T[] > (arr:Arr){
    let counts : IJson<T,number> = {} as any ;
    
    arr.forEach(function(element:T) {
        counts[element] = (counts[element] || 0) + 1;
    });
    
    return counts as {[k in T ]: countAndRemoveElmInElms<Arr,k>[1]};
}

export const getSetOfKeys = <K extends t_indexable_key  > (_json:IJson<K>) => {
        const keys : string[] = Object.keys(_json)
        return concatArraysAndRemoveDuplicates<string>(...keys)
}

const fieldName_json = "json" as const
const fieldName_config = "config" as const 
export const getConfig = getGetterPrefixName(fieldName_config)
export type t_IFunctionalWrapperIJson_getConfig < T extends IFunctionalWrapperIJson<IJson> > = 
ReturnType<T[typeof getConfig]>
export const getJson = getGetterPrefixName(fieldName_json)
export type t_IFunctionalWrapperIJson_getJson < T extends IFunctionalWrapperIJson<IJson> > = 
ReturnType<T[typeof getJson]>
export const setJson = getSetterPrefixName(fieldName_json)
export const setConfig = getSetterPrefixName(fieldName_config)
export const getConfigPropName = `${getConfig}PropName` as const 

export interface IFunctionalWrapperIJson<J extends IJson , C extends IJson = IVoid  > {
    [fieldName_config] :C 
    [fieldName_json] : J
    [getJson]:()=> J
    [getConfig]:()=>C
    [getConfigPropName]<K extends keyof C >(prop_key:K ):C[K]
    [setJson](value:J):void
    [setConfig]<K extends keyof C >(prop_key:K , value : C[K] ):void
}


export  class FunctionalWrapperJson< J extends IJson , C extends IJson = IVoid  > implements IFunctionalWrapperIJson<J,C> {
    [fieldName_config] :C 
    [fieldName_json] : J

    static df=  {
        [fieldName_config] : {} as any ,
        [fieldName_json]: {} as any ,
    }
    
    constructor (_json : J = FunctionalWrapperJson.df[fieldName_json] ,_config : C = FunctionalWrapperJson.df[fieldName_config]){
        this[fieldName_config] = _config;
        this[fieldName_json] = _json;
        
    }

    [getJson](){
        return this[fieldName_json]
    }
    [getConfig](){
        return this[fieldName_config]
    }
    [getConfigPropName]<K extends keyof C >(prop_key:K ):C[K]{
        return this[getConfig]()[prop_key]
    }
    [setJson](value:J){
        this[fieldName_json] = value 
    }
    [setConfig]<K extends keyof C >(prop_key:K , value : C[K]  ){
        this[fieldName_config][prop_key]= value 
    }

    toJson () {
        return {...this[fieldName_config],...this[fieldName_json]} as C & J
    }


    
}


  
export function functionError_RetDfEmpty<T extends  haveSerializerAndEmptyInit<T>  > ( dfInstance:T , _message ?: string ): err_function<T>  {
    return (_error:any)=> {
        let err_obj = {error :_error,message:_message}
        if(_error!==undefined)console.error(`Error ${err_obj.error} message : ${err_obj.message}`)
        return  dfInstance 
    }
  
  }
  
  export function  functionError_RetPromDfEmpty<T  extends  haveSerializerAndEmptyInit<T>  > ( dfInstance:T , _message ?: string ): err_function<Promise<T>>  {
    return (_error:any)=> {
        let err_obj = {error :_error,message:_message}
        if(_error!==undefined)console.error(`Error ${err_obj.error} message : ${err_obj.message}`)
        return  promisifyVal<T>(dfInstance) 
    }
  }

  export function isEqJson (json1 : IJson , json2 : IJson) : boolean {
    return _.isEqual(json1, json2)
  }