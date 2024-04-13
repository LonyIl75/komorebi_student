import { haveSerializerAndEmptyInit, EmptyInit, haveSerializer, deepCloneJson } from "@shared/m_json.js";
import { IJson, createJsonFromEntries, entryGetKey, t_createJsonFromEntries } from "@shared/m_object.js";
import {  NOT,PopUnion, getIntersectJsons, jsonObjectToArrKey, jsonObjectToArrValue } from "@shared/type.js";
import {df, arr_function_attribute_function, arr_key_attribute_name,df_str_attribute_name, isAttributeName_, isAttributeNoneFunctionName, isAttributeNoneName_, isNoneAttributeNameVal_, str_attribute_name, str_attribute_name_function, str_selector,t_Object_withAttributeName,t_arr_attribute_name,t_attributeFunctionName, t_attribute_name, t_attribute_name_, t_attribute_name_notNoneName, t_isAttributeName_, t_isAttributeNoneName_, t_union_attribute_name__val, t_union_attribute_name_function_val, t_union_attribute_name_val, t_union_key_attribute_name, validateAttributeNamValue, str_args_setting, t_args_setting, arr_function_attribute_name } from "./types.js";
import { str_type } from "../../Component/types.js";
import { IValTextContent, ValTextContent, t_cst_args } from "../ValTextContent/ValTextContent.js";
import { str_value_init, t_value_init, str_value_validation_strRegex, t_value_validation_strRegex } from "../ValTextContent/types.js";

export type t_union_childType_attribute_name_value = IChildAttributeType[t_union_key_attribute_name]

export type t_IChildAttributeTypeFromKey<K extends t_union_key_attribute_name > = 
    //IsUnion<K> extends false ? never : 
        PopUnion<K> extends infer _K ? 
            _K extends t_union_key_attribute_name ?
                (IChildAttributeType & {[k in _K]: any }) | t_IChildAttributeTypeFromKey<Exclude<K,_K>>
            : never 
        :never


export type t_invalidAttributeValueEntry = null 
export type t_isInvalidValueEntry< T > = T extends t_invalidAttributeValueEntry ? true : false 



type t_getValidAttributeValueEntry<_T extends t_attribute_name > =  
getIntersectJsons<t_arr_attribute_name,_T> extends infer T ? 
    jsonObjectToArrKey<T> extends infer arrKey ? arrKey extends readonly (keyof T )[]? 
    jsonObjectToArrValue<T> extends infer arrValue ? arrValue extends readonly (_T[keyof _T] )[]? 
    [arrKey[0],arrValue[0]]|[arrKey[1],arrValue[1]] :never :never :never :never 
:never 


export type t_getAttributeValueEntry <T extends t_attribute_name > =  t_isAttributeNoneName_<T> extends infer B ? boolean extends B   ?  t_invalidAttributeValueEntry |  t_getValidAttributeValueEntry<T> :
B extends true ?   t_invalidAttributeValueEntry : t_getValidAttributeValueEntry<T>  :never 


export type t_validAttributeValue < T extends t_attribute_name = t_attribute_name_notNoneName > = t_createJsonFromEntries<[t_getValidAttributeValueEntry<T>]>


export type t_getAttributeValue < T extends t_attribute_name > =   t_isAttributeNoneName_<T> extends infer B ?
boolean extends B   ?  t_createJsonFromEntries<t_invalidAttributeValueEntry> |  t_validAttributeValue<T> :
B extends true ?   t_createJsonFromEntries<t_invalidAttributeValueEntry>  : t_validAttributeValue<T> :never 

export type t_invalidValueAttribute = ReturnType< typeof ChildAttributeType.getInvalidAttributeValue >
export type t_isInvalidValueAttribute< T > = T extends  t_invalidValueAttribute ? true : false 


export interface IChildAttributeType extends IValTextContent {
    [str_attribute_name] ?: t_union_attribute_name__val 

    [str_attribute_name_function] ?: t_union_attribute_name_function_val
    [str_args_setting]?: t_args_setting // TODO-IMP : typing 
    [str_selector] ?: string ; 
    type ?: t_union_key_attribute_name
}



export default class ChildAttributeType extends haveSerializerAndEmptyInit<ChildAttributeType>  implements IChildAttributeType{

    [str_attribute_name] ?: t_union_attribute_name__val 

    [str_attribute_name_function] ?: t_union_attribute_name_function_val
    [str_args_setting]?: t_args_setting // TODO-IMP : typing 
    [str_selector] ?: string ; 
    type ?: t_union_key_attribute_name
    [str_value_init] :   t_value_init
    [str_value_validation_strRegex] : t_value_validation_strRegex

    static df  = df//TDOO are you sure that value = not set value is a good idea ?

    
    constructor(key_name : t_union_key_attribute_name  = df_str_attribute_name,name :t_union_attribute_name_val = ChildAttributeType.df[df_str_attribute_name]  ,selector : string  = ChildAttributeType.df[str_selector]
        ,valContentArgs : t_cst_args = [...ValTextContent.dfArgsCst], args_setting : IJson = {} as any){
        super( {toJson:ChildAttributeType.toJson , fromJson:ChildAttributeType.fromJson});
        this.type = key_name
        //@ts-ignore
        this.setName(name)//TODO why ? 
        this.selector = selector;
        ValTextContent.setArgsForCst(this,...valContentArgs)
        this.args_setting = args_setting
        
    }

    static toJson = (attrType:ChildAttributeType)  => 
    {
        let attribute_value_json = ChildAttributeType.getAttributeValue(attrType as any)
        return {...attribute_value_json, ...ValTextContent.toJson(attrType), [str_selector]:attrType[str_selector],[str_type]:attrType[str_type],args_setting:deepCloneJson(attrType.args_setting)} as const 
    }

    //A FAIRE not sure that constrained function is valid to initialized fromJson
    static fromJson = (json: IJson & t_attribute_name) : ChildAttributeType => {
        const entry  = ChildAttributeType.getAttributeValueEntry(json ) 
        return new ChildAttributeType(entry[0],entry[1],json?.selector,ValTextContent.getArgsForCst(json),deepCloneJson(json?.args_setting))
    }

    static emptyObject : EmptyInit<ChildAttributeType>  = new EmptyInit<ChildAttributeType>(ChildAttributeType) ;

    static _getEmptyInit: () => ChildAttributeType = () => {
        return ChildAttributeType.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => ChildAttributeType = () => {
        return ChildAttributeType._getEmptyInit() ;
    }

    static isTypeof: (obj: haveSerializer<ChildAttributeType>) => boolean = (obj:haveSerializer<ChildAttributeType>)=>{
        return haveSerializerAndEmptyInit.st_isTypeof(ChildAttributeType._getEmptyInit(),obj)
    }

    isTypeof = ChildAttributeType.isTypeof

    static getInvalidAttributeValueEntry() :t_invalidAttributeValueEntry{
        return null
    }

    static isInvalidAttributeValueEntry<T>(entry:T) //: entry is t_invalidAttributeValueEntry 
    {
        return (entry === ChildAttributeType.getInvalidAttributeValueEntry() ) as t_isInvalidValueEntry<T>
    }

    static getInvalidAttributeValue(){
        return createJsonFromEntries(ChildAttributeType.getInvalidAttributeValueEntry())  
    }

    static isInvalidAttributeValue<T>(json:T) //: json is ReturnType<typeof ChildAttributeType.getInvalidAttributeValue> 
    {
        return (json === ChildAttributeType.getInvalidAttributeValue() )as t_isInvalidValueAttribute<T>
    }

    static isAttributeFunctionName = <T extends t_attribute_name >(json:T)  =>{
        return (!isAttributeName_(json)) as NOT<t_isAttributeName_<T>>
    }

    static  getAttributeValueEntry = <T extends t_attribute_name > (_json : T) :t_getAttributeValueEntry<T>=> {
        let res  :any = ChildAttributeType.getInvalidAttributeValueEntry()
        if(!isNoneAttributeNameVal_(_json[df_str_attribute_name])){
            const json = _json as t_attribute_name<true>

            let [key,val]  = [undefined ,undefined ]

            let i = 0 
            while(i < arr_key_attribute_name.length ){
                key = arr_key_attribute_name[i]  
                val = json[key]
                if(json.hasOwnProperty(key)) {
                    res =  [key,val] 
                    break
                }
                i++
            }
        }
        return res as t_getAttributeValueEntry<T>
        
        //t_isNoneAttributeName<T[t_df_str_attributeName]> extends true ? t_invalidAttributeValueEntry : T extends t_attribute_name<true> ? t_getValidAttributeValueEntry<T> :never 
    }

    static getAttributeValue =  <T extends  t_attribute_name > (_json : T) :t_getAttributeValue<T> => {
        return ChildAttributeType.getAttributeValueFromEntry(ChildAttributeType.getAttributeValueEntry(_json))
    }

    static df_functions : t_Object_withAttributeName<false,true,false>  = {

            [str_attribute_name_function]:{
                ...arr_function_attribute_function
            },
            [str_attribute_name]:{
                ...arr_function_attribute_name
            }
    }

    static getAttributeValueFromEntry = <T extends  t_attribute_name > (attributeEntry : t_getAttributeValueEntry<T> ):t_getAttributeValue<T> => {
        let res 
        if(ChildAttributeType.isInvalidAttributeValueEntry(attributeEntry)){
            res=  createJsonFromEntries(attributeEntry  )
        }
        else res=  createJsonFromEntries<[typeof attributeEntry]>([attributeEntry]) 
        return res  
    }

    //TODO if more then two => switch and enum instead of all the thing in types.ts
    static isAttributeNoneName ( json:t_attribute_name ){
        let res = ChildAttributeType.getAttributeValue(json)
        if(ChildAttributeType.isInvalidAttributeValue(res))return false 
        else return !isAttributeNoneName_(res as t_attribute_name_)
    }

    static isAttributeNoneFunctionName(json:t_attribute_name){
        let res = ChildAttributeType.getAttributeValue(json)
        if(ChildAttributeType.isInvalidAttributeValue(res))return false 
        else return !isAttributeNoneFunctionName(res as t_attributeFunctionName)
    }

    setType = (type : t_union_key_attribute_name) => {
        this.type = type
    }

    static _getKeyAndVal = <T extends t_attribute_name , t_f_isStrict extends boolean = false , t_isStrict extends boolean = false  >(attribute_name : T ,f_isStrict: t_f_isStrict = false as any,isStrict :t_isStrict = false as any) => {
        const attributeValue_entry  = ChildAttributeType.getAttributeValueEntry(attribute_name)//TODO why IChildAttributeType dont work 
        const _attribute_val_2 = ChildAttributeType.getAttributeValueFromEntry(attributeValue_entry)

        if(isStrict && ChildAttributeType.isInvalidAttributeValue(_attribute_val_2)) throw new Error()

        const _attribute_val_1 :  t_attribute_name<t_isStrict> = _attribute_val_2 as any
        const key : t_union_key_attribute_name = entryGetKey(attributeValue_entry)

        if(f_isStrict && isAttributeNoneFunctionName(_attribute_val_1)) throw new Error()
        const attribute_val : t_attribute_name<t_isStrict,t_f_isStrict> = _attribute_val_1 as any 
        const val : t_union_attribute_name_val = attribute_val[key]  //keyof (Fs[typeof key])

        return [key,val] as const
    }

    static _getType = <t_f_isStrict extends boolean = false , t_isStrict extends boolean = false  >(attribute_name : t_attribute_name , f_isStrict: t_f_isStrict = false as any,isStrict :t_isStrict = false as any) => {
        return ChildAttributeType._getKeyAndVal(attribute_name,f_isStrict,isStrict)[0]
    }

    getType = <t_f_isStrict extends boolean = false , t_isStrict extends boolean = false  >( f_isStrict: t_f_isStrict = false as any,isStrict :t_isStrict = false as any) => {
        if(this[str_type] === undefined) this.setType(ChildAttributeType._getType(this as any ,f_isStrict,isStrict))
        return this[str_type]
    }

    setName = < t_isStrict extends boolean = false> (name : t_union_attribute_name_val<t_isStrict>, isStrict : t_isStrict = false as any) => {
        const type = this.getType()
        if(!validateAttributeNamValue<t_isStrict>(type,name,isStrict)) throw new Error()
        //@ts-ignore
        this[type] = name
    }

    static cst_cpy = (childAttribute : ChildAttributeType) => {
        const type = childAttribute.getType()
       return new ChildAttributeType(type,childAttribute[type],childAttribute.selector,ValTextContent.getArgsForCst(childAttribute),deepCloneJson(childAttribute.args_setting))
    }

    getKeyAndVal( ){
        const type = this.getType()
        return [type,this[type]] as const
    }
    
}

// A FAIRE :  
//export type jsontAttributeType = ReturnType<typeof AttributeType.toJson> //IAttributeType