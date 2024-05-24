import getCurrentLine from "get-current-line"
import { IJson, IVoid, createJsonAsForEach } from "@shared/m_object.js"
import { IsUnion, PopUnion, UnionToArray, XOR, arrToUnion, getArrValuesFromObject, removeFirstArray, t_concatJson, t_function, t_indexable_key} from "@shared/type.js"

export const str_selector = "selector" as const 
type t_str_selector =  typeof str_selector 


export const str_config_value = "config_value" as const
export type t_str_config_value = typeof str_config_value
//export type t_config_value<TValInit extends t_value_init = t_value_init , TValRegex extends t_value_validation_strRegex = t_value_validation_strRegex>  = {[str_value_init]:TValInit,[str_value_validation_strRegex]:TValRegex}

export const empty_value :undefined = undefined
export type t_empty_value = typeof empty_value
export type t_isEmptyValue<T extends any> = T extends t_empty_value ? true : false
export const isEmptyValue = (config_value :any) => config_value === undefined

import {arr_attributeName_strict as _arr_attributeName_strict , arr_attributeName as _arr_attributeName , t_attributeName_val ,  validateAttributeNameValue  ,t_none_attributeName ,  t_union_attributeName , t_union_attributeName_strict  } from "@shared/type.js"
import {isNoneAttributeName as  isNoneAttributeNameVal_, none_attributeName as none_attributeNameVal_,t_isNoneAttributeName as t_isNoneAttributeNameVal_ } from "@shared/type.js"
import { noFieldName, t_noFieldName } from "@shared/m_primitives.js"
import { ValTextContent } from "../ValTextContent/ValTextContent.js"

export {isNoneAttributeNameVal_,none_attributeNameVal_,t_isNoneAttributeNameVal_}

//TODO : create config interface that require isAttributeNoneName_,isAttributeName_,none_attribute_name_ for each str_attribute_name
export const attribute_name_all = "_all" as const
export type t_attribute_name_all = typeof attribute_name_all
export type t_isAttributeNameAll <T extends string > = T extends t_attribute_name_all ? true : false
export const isAttributeNameAll = <T extends string > (attribute_name : T) => ((attribute_name === attribute_name_all) as t_isAttributeNameAll<T>)

const addNameAllToArr = <T extends readonly string[]>(arr:T) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return [...arr,attribute_name_all] as [...T,t_attribute_name_all]
}

export type t_attribute_name_withAll <T extends string > = T | t_attribute_name_all 


export const str_attribute_name = "attribute_name" as const 
export type t_str_attribute_name = typeof str_attribute_name 

export const arr_attributeName = addNameAllToArr(_arr_attributeName) 

type t_arr_attributeName = typeof arr_attributeName

export type t_none_attribute_name_val = t_none_attributeName
export type t_union_attributeName_ = t_attribute_name_withAll<t_union_attributeName>
export type t_union_attributeName_strict_ = Exclude<t_union_attributeName_,t_none_attributeName>


export const arr_attribute_name_strict = addNameAllToArr(_arr_attributeName_strict) 
export type t_arr_attribut_name_strict = typeof arr_attribute_name_strict
export type t_attribute_name_val_ <isStrict extends boolean = false  >=  t_attribute_name_withAll<t_attributeName_val<isStrict>>
export type t_union_attribute_name__val_strict =  t_attribute_name_val_<true>
export type t_union_attribute_name__val = t_attribute_name_val_<false>
export const validateAttributeNameValue_ = <t_isStrict extends boolean = boolean> (name : t_attribute_name_val_<t_isStrict> , isStrict?:t_isStrict ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
  return isAttributeNameAll(name) ? true : validateAttributeNameValue(name as Exclude<t_attribute_name_val_<t_isStrict>,t_attribute_name_all>,isStrict)
}

export type t_attribute_name_ <isStrict extends boolean = false  >= isStrict extends true ?{[str_attribute_name] : t_union_attribute_name__val_strict }:{[str_attribute_name] : t_union_attribute_name__val }
export const none_attribute_name_ :{[str_attribute_name]:t_none_attribute_name_val}= {[str_attribute_name]:none_attributeNameVal_} as const 
export type t_none_attribute_name_ = typeof none_attribute_name_

export type t_isAttributeNoneName_ <T  extends t_attribute_name > = T extends t_attribute_name ? t_isNoneAttributeNameVal_<T[t_str_attribute_name] > : false 
export const isAttributeNoneName_ = <T extends t_attribute_name  >( attribute : T) =>attribute[str_attribute_name] === undefined || isNoneAttributeNameVal_(attribute[str_attribute_name]) as  t_isAttributeNoneName_<T >

export type t_isAttributeName_ <T extends t_attribute_name> =  T extends t_attribute_name ? true : false  
export const isAttributeName_ =<T extends t_attribute_name> (json:T)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return json.hasOwnProperty(str_attribute_name)  as t_isAttributeName_<T>
}




export const str_attribute_name_function ="attribute_name_function" as const 
type t_str_attribute_name_function = typeof str_attribute_name_function

//F_file : 1
export const none_attribute_name_function_val = "f_none"
export type t_none_attribute_name_function_val = typeof none_attribute_name_function_val 

export const none_attribute_name_function = {[str_attribute_name_function]:none_attribute_name_function_val} as const 
export type t_none_attribute_name_function = typeof none_attribute_name_function

export const arr_attribute_name_function_val_ = [none_attribute_name_function_val,"index","getCustomAttribute"] as const
export type t_arr_attribute_name_function_val_ = typeof arr_attribute_name_function_val_
export type t_union_attribute_name_function_val_ = arrToUnion<t_arr_attribute_name_function_val_>

export const arr_attribute_name_function_val = addNameAllToArr(arr_attribute_name_function_val_) 
export type t_arr_attribute_name_function_val = typeof arr_attribute_name_function_val
export type t_union_attribute_name_function_val = arrToUnion<t_arr_attribute_name_function_val>

type t_isNoneAttributeFunctionNameVal<T extends t_union_attribute_name_function_val>  = T extends t_none_attribute_name_function ? true : false 
export const isNoneAttributeFunctionNameVal = <T extends t_union_attribute_name_function_val>( attributeFunctionName : T) =>(attributeFunctionName === none_attribute_name_function_val) as  t_isNoneAttributeFunctionNameVal<T>


type t_isAttributeNoneFunctionName <T extends t_attribute_name > = T extends t_attributeFunctionName ? t_isNoneAttributeFunctionNameVal<T[t_str_attribute_name_function] > : false 
export const isAttributeNoneFunctionName = <T extends t_attribute_name >( attribute : T) =>attribute[str_attribute_name_function] === undefined || isNoneAttributeFunctionNameVal(attribute[str_attribute_name_function]) as  t_isAttributeNoneFunctionName<T>


export type t_isAttributeFunctionName <T extends t_attribute_name> =  T extends t_attribute_name ? true : false  
export const isAttributeFunctionName =<T extends t_attribute_name> (json:T)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return json.hasOwnProperty(str_attribute_name)  as t_isAttributeFunctionName<T>
}

export const arr_attribute_name_function_val_strict = arr_attribute_name_function_val.slice(1) as removeFirstArray<t_arr_attribute_name_function_val>
export type t_arr_attribute_name_function_val_strict = typeof arr_attribute_name_function_val_strict
export type t_union_attribute_name_function_val_strict = arrToUnion<t_arr_attribute_name_function_val_strict>

export type t_union_attribute_name_function < isStrict extends boolean = boolean  > = isStrict extends true ? t_union_attribute_name_function_val_strict : t_union_attribute_name_function_val

export const validateAttributeNamFunctionValue = <t_f_isStrict extends boolean = boolean> (name :t_union_attribute_name_function<t_f_isStrict>, f_isStrict?:t_f_isStrict ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return f_isStrict === undefined || f_isStrict === false ? arr_attribute_name_function_val.includes(name)  : arr_attribute_name_function_val_strict.includes(name  as t_union_attribute_name_function<true> )
}

export type t_attributeFunctionName <isStrict extends boolean = boolean  >= isStrict extends true ?{[str_attribute_name_function]:t_union_attribute_name_function_val_strict}: {[str_attribute_name_function]:t_union_attribute_name_function_val}



export const validateAttributeNamValue = <t_isStrict extends boolean = boolean> (key:t_union_key_attribute_name , name : t_union_attribute_name_val<t_isStrict> ,isStrict?:t_isStrict ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    switch (key){ 
        case str_attribute_name_function : 
            return validateAttributeNamFunctionValue(name as t_union_attribute_name_function<t_isStrict> ,isStrict )
        case str_attribute_name :
            return validateAttributeNameValue_(name as t_attribute_name_val_<t_isStrict>,isStrict )
        default : return false
    }
}



//df_file : 1 
export const df_attribute_name = {
    ...none_attribute_name_,
    ...none_attribute_name_function,
} as const

export type t_df_attribute_name = typeof df_attribute_name


export type t_arr_key_attribute_name = UnionToArray<keyof t_df_attribute_name>
export const arr_key_attribute_name : t_arr_key_attribute_name = [str_attribute_name,str_attribute_name_function] as any 
//export type t_xor_key_attribute_name = XOR<t_arr_key_attribute_name>
export type t_union_key_attribute_name =  keyof t_df_attribute_name


export type t_arr_attribute_name <isStrict extends boolean = boolean,isStrict_f extends boolean = boolean  >= [t_attribute_name_<isStrict>,t_attributeFunctionName<isStrict_f> ]
export type t_concat_attribute_name <isStrict extends boolean = boolean,isStrict_f extends boolean = boolean  >= t_concatJson<t_arr_attribute_name <isStrict ,isStrict_f>>
export type t_attribute_name <isStrict extends boolean = boolean  ,isStrict_f extends boolean = boolean > =XOR<t_arr_attribute_name<isStrict,isStrict_f>>
export type t_union_attribute_name <isStrict extends boolean = boolean  ,isStrict_f extends boolean = boolean > =arrToUnion<t_arr_attribute_name<isStrict,isStrict_f>>

export type t_attribute_name_notNoneName<isStric_f extends boolean = boolean> = t_attribute_name<true,isStric_f>
export type t_union_attribute_name_val < isStrict extends boolean = boolean  ,isStrict_f extends boolean = boolean > = 
t_attribute_name<isStrict,isStrict_f> extends {[k in t_indexable_key]: infer V} ? V : never
export type t_union_attribute_name_val_strict = t_union_attribute_name_val<true,true>

//export type t_isEqualAttributeName < T extends t_attribute_namet_attribute_name<isStrict> , T2 extends t_attribute_name<isStrict>, isStrict extends boolean = boolean  > =T1[]
export const isEqualAttributeName = < T1 extends t_attribute_name<isStrict> , T2 extends t_attribute_name<isStrict> ,isStrict extends boolean = boolean  >(attributeValue : T1,attributeValue_2 : T2)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    let key_1 = Object.keys(attributeValue)[0]
    let key_2 = Object.keys(attributeValue_2)[0]
    return key_1 == key_2 && attributeValue[key_1]==attributeValue[key_2]
}



//TODO create df file  1 + 2
//df_file : 2
export type t_df_str_attribute_name = t_str_attribute_name
export const df_str_attribute_name :t_df_str_attribute_name = str_attribute_name //arr_attribute_name_s.find((_elm)=>arr_attribute_name_s.includes(_elm))



export const str_args_setting = "args_setting" as const
export type t_str_args_setting =  typeof str_args_setting
export type t_args_setting = IJson


export type t_function_attribute_name_res_awaited_invalid = t_empty_value
export type t_function_attribute_name_res_awaited_valid< K extends string = string ,Obj extends {[k in K]:string}={[k in K]:string} > = Obj//json_ExactlyOne<Obj>
export type t_function_attribute_name_res_awaited< K extends string = string ,Obj extends {[k in K]:string}={[k in K]:string} > = t_function_attribute_name_res_awaited_valid<K,Obj>| t_function_attribute_name_res_awaited_invalid
export type t_function_attribute_name_res< K extends string = string ,Obj extends {[k in K]:string}={[k in K]:string} > = Promise<t_function_attribute_name_res_awaited<K,Obj>>

export type t_function_attribute_name< K extends string = string ,Obj extends {[k in K]:string}={[k in K]:string} > = ((node:any) => t_function_attribute_name_res<K,Obj>) 
export type t_function_attribute_name_super = t_function_attribute_name extends infer T ? T extends t_function ? t_function<ReturnType<T>,[...Parameters<T>,t_args_setting]> : never : never


export const df :{
    [df_str_attribute_name] : t_df_attribute_name[t_df_str_attribute_name],
} & typeof ValTextContent.df ={
    [df_str_attribute_name] :none_attribute_name_[df_str_attribute_name],
    ...ValTextContent.df

} as const 

export type t_df = typeof df

export type t_df_val_attribute_name = t_df[t_df_str_attribute_name]



//TODO create functionName file 1 + 2
//F_file : 2 
export type t_Object_withAttributeName_any< isStrict extends boolean = boolean,  isOpt extends boolean = true ,KV extends t_attribute_name<isStrict,isStrict> = t_attribute_name<isStrict,isStrict>,
 T extends  t_Object_withAttributeName_obj_fct<isStrict,KV> = t_Object_withAttributeName_obj_fct<isStrict,KV> > =
    keyof KV extends infer _K1  extends keyof KV ?
        KV[_K1] extends infer _K2 ? _K2 extends t_indexable_key ?
        isOpt extends true ?  {[k in _K1]: {[k2 in _K2]?: T}}: {[k in _K1]: {[k2 in _K2]: T} }
    : never : never : never 

export type t_Object_withAttributeNameValue< isStrict extends boolean = boolean, isOpt extends boolean = true ,KV extends t_attribute_name<isStrict,isStrict> = t_attribute_name<isStrict,isStrict> ,
 T extends  t_Object_withAttributeName_obj_fct<isStrict,KV> = t_Object_withAttributeName_obj_fct<isStrict,KV> > =
    keyof KV extends infer K_i extends keyof T & keyof KV ? 
        KV[K_i] extends t_indexable_key ? KV[K_i] extends keyof T[K_i] ? 
            isOpt extends true ? 
                    {[k2 in KV[K_i]]?: T[K_i][k2]}
            :{[k2 in KV[K_i]]: T[K_i][k2]}
        : never : never
    : never


export type t_Object_withAttributeName_obj_fct<isStrict extends boolean = boolean, AJ extends t_attribute_name<isStrict,isStrict> = t_attribute_name<isStrict,isStrict> > = 
keyof AJ extends infer _K extends keyof AJ ?
  AJ[_K] extends t_union_attribute_name_val<isStrict,isStrict> & t_indexable_key ? IJson<_K,IJson<AJ[_K],t_function_attribute_name_super>> : never : never 



type _t_Object_withAttributeName< isStrict extends boolean = boolean ,isOpt_2 extends boolean = true 
,A extends t_attribute_name<isStrict,isStrict> =t_attribute_name<isStrict,isStrict> > =  {[k1 in keyof A]:t_Object_withAttributeNameValue<isStrict,isOpt_2,A,t_Object_withAttributeName_obj_fct<isStrict,A>>}

export type t_Object_withAttributeName< 
isOpt extends boolean = false ,isStrict extends boolean = boolean ,isOpt_2 extends boolean = false ,KV extends t_union_attribute_name<isStrict,isStrict> =t_union_attribute_name<isStrict,isStrict> 
> = 
IsUnion<KV> extends true ?
    PopUnion<KV> extends infer A ? A extends t_attribute_name<isStrict,isStrict> ?
        _t_Object_withAttributeName<isStrict,isOpt_2,A> & t_Object_withAttributeName<isOpt,isStrict,isOpt_2,Exclude<KV,A>>
    : never: never
: KV extends t_attribute_name<isStrict,isStrict> ? _t_Object_withAttributeName<isStrict,isOpt_2,KV>:{}

export const df_fct_attribute_name_function =  (node:any) => Promise.resolve({[noFieldName]:""})  

export const df_fct_attribute_name =  (attributeValue:IJson={...df,[str_attribute_name]:attribute_name_all})=>  //A FAIRE IJson => IChildAttributeType
(node:any) => node.evaluate((e:any,attr_val:string)=>e.getAttribute(attr_val),attributeValue[str_attribute_name]).then((_str:string)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return {[attributeValue[str_attribute_name]]:_str}
})

type t_args_getCustomAttribute = {name_attribute_from:string,name_attribute_to?:string}

export const cst_args_getCustomAttribute =  (...args:getArrValuesFromObject<t_args_getCustomAttribute>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const name_attribute_from = args[0]
    const name_attribute_to = args.length > 1 ? args[1] : noFieldName
    return {name_attribute_from,name_attribute_to}
}

export const arr_function_attribute_function :t_Object_withAttributeNameValue<true,false,t_attributeFunctionName<true>>
= {
    [arr_attribute_name_function_val_strict[0]]: (node:any) =>  node.evaluate((e:any)=>JSON.stringify(Array.from(e.parentNode.children).indexOf(e))).then((_str:string)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return {[arr_attribute_name_function_val_strict[0]]:_str}
    }),
    [arr_attribute_name_function_val_strict[1]]: (node:any,args:t_args_getCustomAttribute) => 
    node.evaluate((e:any,_name_attribute_from:string)=>e.getAttribute(_name_attribute_from),args.name_attribute_from).then((_str:string)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return {[args.name_attribute_to]:_str}
    }),
    [attribute_name_all] : df_fct_attribute_name_function ,
}


export const arr_function_attribute_name :t_Object_withAttributeNameValue<true,false,t_attribute_name_<true>> = createJsonAsForEach(arr_attributeName.map(
    (name) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return {
            [name]:((name)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                return (node:any) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/

                    return node.evaluate(
                        (e:any,name:string,var_isAttributeNameAll:boolean)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                            return var_isAttributeNameAll ? e.getAttributeNames().reduce((acc, attr_name) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                            acc[attr_name] = e.getAttribute(attr_name)
                            return acc 
                            //return `${acc},${attr_name}=\"${e.getAttribute(attr_name)}\"`;
                            }, {} ): {[name]:e.getAttribute(name)}
                        },name,isAttributeNameAll(name))
                        
                    }
                })(name)
            }
        }    
)) as t_Object_withAttributeNameValue<true,false,t_attribute_name_<true>>
