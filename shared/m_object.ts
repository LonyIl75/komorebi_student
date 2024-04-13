import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_object"

import { _isArray, _isFunction, _isNullOrUndefined, _isObject, emptyCond, isNotEmptyArray, nullOrUndefined } from "./m_primitives.js";
import { IsUnion, PopUnion, jsonFromArrArr, json_AtLeastOne, t_function, t_indexable_key } from "./type.js";


export type IVoid ={}

export type IJson<K extends t_indexable_key = string , V = any > = IVoid  &{
    [key in K]: V;
}

//IVoid
export const getEmptyJson = () : IVoid =>{
    return {} as IVoid;
}

export function isObject(val) {
    if (_isNullOrUndefined(val)) { return false }
    return ( !(_isFunction(val) || _isArray(val)) && _isObject(val))
}

//export type t_isEmptyJson<T extends IJson> = [keyof T] extends [never] ? true : false 
export const isEmptyJson = (json : IJson ) : json is IVoid => {
    if(_isNullOrUndefined(json)) return true 
    if(!isObject(json)) throw new Error(`${json} is not an object , isEmptyJson can't be applied`)
    return ((Object.keys(json).length === 0) )
}

export const isNotEmptyJson = <V>(json : IJson<t_indexable_key ,V> ) : json is json_AtLeastOne<IJson<t_indexable_key ,V>> => {
   return !isEmptyJson(json) 
}

export const createJsonAsForEach =<K extends t_indexable_key = string, V = any> (arr_element : { [k in K] : any }[]) :IJson<K,V>=>{
  let obj = {} as IJson<K,V>
  for (const element of arr_element) {
      for(const key in element){
          obj[key] = element[key]
      }
  }
  return obj 
}
export const mergeJsonArr =<K extends t_indexable_key , T extends IJson<K,any> > (arr_element :T[]) : { [k in K] : T[k] } => {
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

export const applyFctToObjectValues = <F extends t_function , O extends IJson = IJson > (obj : O , fct : F) : IJson<keyof O , ReturnType<F>> => {
    let res = {} as IJson<keyof O , ReturnType<F>>
    for(const key in obj){
        res[key] = fct(obj[key])
    }
    return res
}

export const applyFctToObjectKeys = <F extends t_function<K_Out,[K]> , K extends t_indexable_key = string ,K_Out extends   t_indexable_key =string , O extends IJson<K> = IJson<K> > (obj : O , fct : F) : IJson<ReturnType<F> , O[keyof O]> => {
    let res = {} as IJson<K_Out, O[keyof O]>
    for(const key in obj){
        const new_key = fct(key as unknown as K)
        res[new_key] = obj[key]
    }
    return res
}


export const applyFctToObjectEntries = <RO extends IJson , K extends string = string , V extends any  = any ,   O extends IJson<K,V> = IJson<K,V> > (obj : O , fct_entry : t_function<RO,[t_Entry<K,V>]>) : RO  => {
    let res = [] as RO[]
    let key : K 
    for(const _key in obj){
        key = _key as unknown as K
        res = [...res , fct_entry([key,obj[key]])] 
    }
    return createJsonAsForEach(res) as RO
}


export const getAllMethodsOfObject =  <O extends Object > (object :O ) :readonly string[]=> {
    return Object.getOwnPropertyNames(object).filter(function(property) {
        return _isFunction(object[property]);
    });
}




export function setProp(obj, prop, value) {
    if (obj) obj[prop] = value
    return obj
}


export function s_getProp(obj, prop, providedValue = undefined, cond = emptyCond) {
    return cond(obj) && obj?.[prop] ? obj[prop] : providedValue
}

export function setPropAddIfExist(obj, prop, value, addFct = (val, addVal) => { return {...val, ...addVal} }) {
    if (obj?.[prop]) obj[prop] = addFct(obj[prop], value)
    else setProp(obj, prop, value)
    return obj
}

export function getPropAndInitIfNotExist(obj, prop, initValue = {}) {
    let invalidGet
    let valProp = s_getProp(obj, prop, invalidGet)

    if (valProp === invalidGet) {
        setProp(obj, prop, {...initValue})
        valProp = s_getProp(obj, prop, invalidGet)
    }
    return valProp
}

export function getObjectFromPropsArrayAndInitIfNotExist(obj, propsArray, invalidValue = undefined, initValue = {}) {
    propsArray = propsArray?.filter((elm) => elm)
    let getted_obj = obj
    let i = 0
    // A FAIRE use invalidValue
    for (; getted_obj != invalidValue && i < propsArray.length - 1 ; i++) { // eslint-disable-line
        if (getted_obj === initValue) getted_obj = setProp(getted_obj, propsArray[i], {...initValue})
        else getted_obj = getPropAndInitIfNotExist(getted_obj, propsArray[i], initValue)
    }
    if (getted_obj === invalidValue) return invalidValue
    return getted_obj
}
 

export  function setExtraValueFromPropsArray(obj, propsArray, value, invalidReturn = undefined, fctSet = setPropAddIfExist) {
    propsArray = propsArray?.filter((elm) => elm)
    if (!isNotEmptyArray(propsArray)) return invalidReturn
    let getted_obj = getObjectFromPropsArrayAndInitIfNotExist(obj, propsArray, invalidReturn)
    if (getted_obj === invalidReturn) return invalidReturn
    fctSet(getted_obj, propsArray[propsArray.length - 1], value)
    return getted_obj
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

export const pop_map = <K extends t_indexable_key , V > (map : Map<K,V> , key ?: K ) : V => {
    if(map.size == 0 )return undefined
    if(key===undefined)key = map.keys().next().value
    const res = map.get(key)
    map.delete(key)
    return res
  }
