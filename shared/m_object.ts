import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_object"

import { _isArray, _isFunction, _isNullOrUndefined, _isObject, emptyCond, isNotEmptyArray, nullOrUndefined, t__isArray, t__isFunction, t__isNullOrUndefined, t__isObject, t_emptyCond } from "./m_primitives.js";
import { IsUnion, NOT, PopUnion, UnionToArray, filterNotNullOrUndefinedArr, isEqual, jsonFromArrArr, json_AtLeastOne, makeOptional, t_function, t_getLastElementArr, t_indexable_key, upsertInSimpleJson } from "./type.js";


export type IVoid ={}

export type IJson<K extends t_indexable_key = string , V = any > = IVoid  &{
    [key in K]: V;
}

//IVoid
export const getEmptyJson = () : IVoid =>{
    return {} as IVoid;
}

export type jsonIsExistProp < T extends IJson , propName extends t_indexable_key> = propName extends  keyof T  ? unknown extends T[propName]  ? false : true  :false
export type t_jsonAddIfNotExist < T extends IJson , T2  extends IJson > = T & Omit<T2,keyof T >
export const jsonAddIfNotExist = < T extends IJson , T2  extends IJson > (json : T , jsonToAdd : T2) : t_jsonAddIfNotExist<T,T2> => {
    return {...jsonToAdd,...json}
}

export type t_jsonFilterUndefinedField < T extends IJson , K extends keyof T = keyof T > = 
Omit<T, {[k in K]: T[k] extends undefined ? k : never}[K]>

export type jsonGetIfExistPropNameElseOther < T extends IJson , propName extends t_indexable_key , Other > = propName extends  keyof T  ? unknown extends T[propName]  ? Other : T[propName] : Other
export type jsonGetIfExistPropNamesElseOther < T extends IJson , propNames extends readonly t_indexable_key[] , Other > = 
propNames extends readonly [infer A,...infer BR] ? A extends t_indexable_key ? BR extends readonly t_indexable_key[] ?
jsonGetIfExistPropNameElseOther<T,A,Other> extends infer Res ? isEqual<Res,Other> extends true ? Other : 
BR extends [] ? Res  : Res extends IJson ? jsonGetIfExistPropNamesElseOther<Res,BR,Other> :  Other 
: never : never : never : never

export type t_isObject<T> = NOT<t__isNullOrUndefined<T>| t__isFunction<T> | t__isArray<T>> & t__isObject<T> 

export function isObject<T>(val:T) {
    return ( !(_isNullOrUndefined(val) || _isFunction(val) || _isArray(val)) && _isObject(val))
}

export type t_isEmptyJson<T extends IJson> = [keyof T] extends [never] ? t_isObject<T> extends true ? true : never : false 
export const isEmptyJson = (json : any ) : json is IVoid => {
    if(_isNullOrUndefined(json)) return true 
    if(!isObject(json)) throw new Error(`${json} is not an object , isEmptyJson can't be applied`)
    return ((Object.keys(json).length === 0) )
}

export type t_isNotEmptyJson <T extends IJson<K ,V>,K extends t_indexable_key = t_indexable_key, V = any > = t_isObject<T> extends true ? T  extends json_AtLeastOne<T> ? true : false :never 
export const isNotEmptyJson = <T extends IJson<K ,V>,K extends t_indexable_key= t_indexable_key, V = any>(json : any ) : json is json_AtLeastOne<K,T> => {
   return !isEmptyJson(json) 
}
export type t_createJsonAsForEach <K extends t_indexable_key = string, V = any> = IJson<K,V>
export const createJsonAsForEach =<K extends t_indexable_key = string, V = any> (arr_element : { [k in K] : any }[]) :t_createJsonAsForEach<K,V>=>{
  let obj = {} as IJson<K,V>
  for (const element of arr_element) {
      for(const key in element){
          obj[key] = element[key]
      }
  }
  return obj 
}
export type t_mergeJsonArr<K extends t_indexable_key , T extends IJson<K,any> > = { [k in K] : T[k] }
export const mergeJsonArr =<K extends t_indexable_key , T extends IJson<K,any> > (arr_element :T[]) : t_mergeJsonArr<K,T> => {
    const transformedData = {};
    for (const item of arr_element) {
        for (const [key, value] of Object.entries(item)) {
            if (!transformedData[key]) {
            transformedData[key] = [];
            }
            transformedData[key].push(value);
        }
    }
    return transformedData as { [k in K] : T[k] }
}

export type t_Entry_any = t_Entry<t_indexable_key,any>
export type t_Entry <K extends t_indexable_key = string, V = any> = readonly [K,V]

export type t_EntryGetKey<t_entry extends  t_Entry_any > = t_entry[0]
export const entryGetKey=< t_entry extends t_Entry_any>(entry:t_entry):t_EntryGetKey<t_entry>=>entry[0]

export type t_EntryGetValue<t_entry extends  t_Entry_any > = t_entry[1]
export const entryGetValue=<t_entry extends  t_Entry_any >(entry:t_entry):t_EntryGetValue<t_entry>=>entry[1]

export const cst_entry = <K extends t_indexable_key , V > (key:K,val:V) :t_Entry <K ,V> =>{
    return [key,val]
}


export type t_createJsonFromEntries< t_entries extends (readonly (t_Entry<K,V>)[])|nullOrUndefined   , K extends t_indexable_key = t_entries extends nullOrUndefined ? t_indexable_key : t_EntryGetKey<t_entries[number]>, V = t_entries extends nullOrUndefined ?  any:t_EntryGetValue<t_entries[number]> >=
t_entries extends nullOrUndefined  ? IVoid : number  extends t_entries["length"] ?IJson<K,V> : jsonFromArrArr<K,t_entries,V>

export const createJsonFromEntries = 
< t_entries extends (readonly (t_Entry<K,V>)[])|nullOrUndefined   , K extends t_indexable_key = t_entries extends nullOrUndefined ? t_indexable_key : t_EntryGetKey<t_entries[number]>, V = t_entries extends nullOrUndefined ?  any:t_EntryGetValue<t_entries[number]> >(entries : t_entries)=>{
    let res = getEmptyJson() as any 
    if(entries ) res = entries.reduce((acc,entry:t_Entry<K,V>)=>{
        const cur_key = entryGetKey<t_Entry<K,V>>(entry)
        if(acc.hasOwnProperty(cur_key))  throw new Error(`Entry with same key in entries ${String(cur_key)}`)
        acc[cur_key] = entryGetValue<t_Entry<K,V>>(entry)
        return acc
    },res )
    
    return res as t_createJsonFromEntries<t_entries,K,V>

}
export type t_applyFctToObjectValues<F extends t_function , O extends IJson = IJson >  =IJson<keyof O , ReturnType<F>>
export const applyFctToObjectValues = <F extends t_function , O extends IJson = IJson > (obj : O , fct : F) : IJson<keyof O , ReturnType<F>> => {
    let res = {} as IJson<keyof O , ReturnType<F>>
    for(const key in obj){
        res[key] = fct(obj[key])
    }
    return res
}

export type t_applyFctToObjectKeys<F extends t_function<K_Out,[K]> , K extends t_indexable_key = string ,K_Out extends   t_indexable_key =string , O extends IJson<K> = IJson<K> >  = IJson<ReturnType<F> , O[keyof O]>
export const applyFctToObjectKeys = <F extends t_function<K_Out,[K]> , K extends t_indexable_key = string ,K_Out extends   t_indexable_key =string , O extends IJson<K> = IJson<K> > (obj : O , fct : F) : t_applyFctToObjectKeys<F,K,K_Out,O> => {
    let res = {} as IJson<K_Out, O[keyof O]>
    for(const key in obj){
        const new_key = fct(key as unknown as K)
        res[new_key] = obj[key]
    }
    return res
}

export type t_applyFctToObjectEntries<RO extends IJson , K extends string = string , V extends any  = any ,   O extends IJson<K,V> = IJson<K,V> >  = RO
export const applyFctToObjectEntries = <RO extends IJson , K extends string = string , V extends any  = any ,   O extends IJson<K,V> = IJson<K,V> > (obj : O , fct_entry : t_function<RO,[t_Entry<K,V>]>) : t_applyFctToObjectEntries<RO,K,V,O>  => {
    let res = [] as RO[]
    let key : K 
    for(const _key in obj){
        key = _key as unknown as K
        res = [...res , fct_entry([key,obj[key]])] 
    }
    return createJsonAsForEach(res) as RO
}


export type t_getAllMethodsOfObject < _T extends Object > = 
("prototype" extends keyof _T?_T["prototype"] :_T) extends infer T ? 
    {[k in keyof T as T[k] extends t_function ? k : never]:T[k]}:
never 

export type t_getAllKeysOfMethodsOfObject < T extends Object > = UnionToArray<keyof t_getAllMethodsOfObject<T> >

export const getAllKeysOfMethodsOfObject =  <O extends Object > (object :O ) => {
    return Object.getOwnPropertyNames(object).filter(function(property) {
        return _isFunction(object[property]);
    }) as t_getAllKeysOfMethodsOfObject<O>;
}



export type t_setProp <O extends IJson<K,V>, P extends K , K extends t_indexable_key, _V extends O[P] , V = any   > = upsertInSimpleJson<O,P,_V>
export function setProp <O extends IJson<K,V>, P extends K , _V extends O[P] , K extends t_indexable_key, V = any   >(obj:O, prop:P, value:_V) {
    if (obj) obj[prop] = value
    return obj
}

export type t_s_getProp <O extends IJson, P extends t_indexable_key, _V  = undefined , Cond extends (arg:O)=> boolean = t_emptyCond<any>, V = any   > = 
t_isNotEmptyJson<O> extends true ? P extends keyof O ? O[P] : _V: _V
export function s_getProp<O extends IJson, P extends t_indexable_key, _V  = undefined , Cond extends (arg:O)=> boolean = t_emptyCond<any>, V = any   >(obj:O, prop:P, providedValue :_V = undefined, cond = emptyCond) :t_s_getProp<O,P,_V,Cond,V>{
    //@ts-ignore
    return cond(obj) && obj?.[prop] ? obj[prop] : providedValue
}

export type t_setPropAddIfExist <O extends IJson<K,V>, P extends K ,K extends t_indexable_key, _V extends O[P] = undefined , Cond extends (arg:O)=> boolean = t_emptyCond<any>, V = any   > =  O 
export function setPropAddIfExist<O extends IJson<K,V>, P extends K ,_V extends O[P] , K extends t_indexable_key,V >(obj:O, prop:P,  _value :_V, addFct :  <V1 extends O[P] , V2 extends _V>(val:V1, addVal:V2) => _V = <V1 extends O[P] , V2 extends _V>(val:V1, addVal:V2) => { return {...val, ...addVal} }) {
    const value  = ((obj?.[prop]) ? addFct(obj[prop], _value) : _value ) 
    setProp(obj, prop, value)
    return obj
}

export type t_getPropAndInitIfNotExist <O extends IJson, P extends t_indexable_key ,InitValue  ={}, V extends IJson = any   > =  
t_s_getProp<O,P,undefined> extends infer R ? R extends undefined  ? [InitValue,O & {[k in P]:InitValue}] : [R,O] : never
export function getPropAndInitIfNotExist<O extends IJson, P extends t_indexable_key , InitValue ={}, V = any  >(obj:O, prop:P, initValue : InitValue = {} as InitValue) {
    let invalidGet
    let valProp = s_getProp(obj, prop, invalidGet)

    if (valProp === invalidGet) {
        setProp(obj, prop, {...initValue} as any)
        valProp = s_getProp(obj, prop, invalidGet)
    }
    return valProp as t_getPropAndInitIfNotExist<O,P,InitValue,V>[0]
}


export type t_getObjectFromPropsArrayAndInitIfNotExist <O extends IJson|InitValue, ArrP extends readonly t_indexable_key[] ,InitValue ={},InvalidValue = undefined   >=  
ArrP extends readonly [infer A,...infer BR] ?  A  extends t_indexable_key ? BR extends readonly t_indexable_key[] ? 
t_getPropAndInitIfNotExist<O,A,InitValue>[0] extends infer Res ?
isEqual<Res,InvalidValue> extends true ? InvalidValue : t_getObjectFromPropsArrayAndInitIfNotExist<Res , BR ,InitValue ,InvalidValue>
: never : never : never: O

function _getObjectFromPropsArrayAndInitIfNotExist<O extends IJson, ArrP extends readonly t_indexable_key[] ,InitValue ={},InvalidValue = undefined >(obj:O,  propsArray : ArrP, invalidValue : InvalidValue = undefined, initValue :InitValue = {} as InitValue):t_getObjectFromPropsArrayAndInitIfNotExist<O,ArrP,InitValue,InvalidValue> {
    type t_obj = O|InitValue|InvalidValue
    let res = obj as any
    if(!isNotEmptyArray(propsArray) || res == invalidValue) res = obj
    else {
        const nextValue = getPropAndInitIfNotExist (res, propsArray[0], initValue)
        res =  getObjectFromPropsArrayAndInitIfNotExist(nextValue, propsArray.slice(1), invalidValue, initValue)
    }
    return res  
}

export function getObjectFromPropsArrayAndInitIfNotExist<O extends IJson, ArrP extends readonly t_indexable_key[] ,InitValue ={},InvalidValue = undefined >(obj:O,  _propsArray : ArrP, invalidValue : InvalidValue = undefined, initValue :InitValue = {} as InitValue) {
    const propsArray = _propsArray?.filter((elm) => elm) as filterNotNullOrUndefinedArr<ArrP>
    return _getObjectFromPropsArrayAndInitIfNotExist<O,typeof propsArray,InitValue,InvalidValue>(obj, propsArray, invalidValue, initValue) 
    
}
type t_setExtraValueFromPropsArray_fct <O extends IJson, P extends t_indexable_key, _V> = (obj: O, prop: P, _value: _V)  => O 
export type t_setExtraValueFromPropsArray <O extends IJson, ArrP extends readonly t_indexable_key[] ,_V,InitValue ={},InvalidValue = undefined > = 
t_getObjectFromPropsArrayAndInitIfNotExist<O,ArrP,InitValue,InvalidValue > extends InvalidValue ? InvalidValue : t_setExtraValueFromPropsArray_fct< t_getObjectFromPropsArrayAndInitIfNotExist<O,ArrP,InitValue,InvalidValue>,ArrP[number] , _V >
export  function setExtraValueFromPropsArray<O extends IJson, ArrP extends readonly t_indexable_key[] , _V,InitValue ={} ,InvalidValue = undefined >(obj:O,  propsArray : ArrP, value : _V, invalidReturn : InvalidValue = undefined, initValue :InitValue = {} as InitValue, fctSet : t_setExtraValueFromPropsArray_fct< t_getObjectFromPropsArrayAndInitIfNotExist<O,readonly (ArrP[number])[],InitValue,InvalidValue>,ArrP[number] , _V > = setPropAddIfExist) {
    let getted_obj = getObjectFromPropsArrayAndInitIfNotExist(obj, propsArray, invalidReturn)
    if (getted_obj === invalidReturn) return invalidReturn
    fctSet(getted_obj, propsArray[propsArray.length - 1], value)//t_getLastElementArr<ArrP>
    return getted_obj as t_setExtraValueFromPropsArray<O,filterNotNullOrUndefinedArr<ArrP>,_V,InitValue,InvalidValue>
}

export function createJsonFromMap <K extends t_indexable_key , V > (_map : Map<K,V>){
    return Object.fromEntries(_map) as IJson<K,V>
}

export function createMapFromArrArr<V , ArrArr extends readonly ( t_Entry<K,V>)[],V2 = V,K extends t_indexable_key = t_indexable_key > (arrArr:ArrArr,fct:(...args:t_Entry<K,V>)=>V2 = (...args:t_Entry<K,V>)=>{return args[1] as unknown as V2} ){
    let map = new Map<K,V2>()
    for(const arr of arrArr){
        map.set(arr[0],fct(arr[0],arr[1]))
    }
    return map

}

export function revertMap<K extends t_indexable_key , V > (map:Map<K,V>){
    let res_map = new Map()
    for (const [key, value] of map.entries()) {
        if(!Array.isArray(value)){
            if(!res_map.has(value))res_map.set(value,key)
            else res_map.set(value,[...res_map.get(value),key])
        }
        else {
            for(const val of value){
                if(!res_map.has(val))res_map.set(val,key)
                else res_map.set(val,[...res_map.get(val),key])
            }
        }
    }
    return res_map

}
/*type fdsfd = IterableIterator<"string">
const map = new Map<"key2"|"key1","value1"|"value2">([["key1", "value1"], ["key2", "value2"]]);
type fdsfds = ReturnType<typeof map["entries"]> extends IterableIterator<[infer K , infer V]> ? [K,V] : never*/
export const pop_map = <K extends t_indexable_key , V > (map : Map<K,V> , key ?: K ) : V => {
    if(map.size == 0 )return undefined
    if(key===undefined)key = map.keys().next().value
    const res = map.get(key)
    map.delete(key)
    return res
  }
