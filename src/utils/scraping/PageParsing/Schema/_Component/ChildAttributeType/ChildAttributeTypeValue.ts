import { haveSerializerAndEmptyInit, EmptyInit, haveSerializer } from "@shared/m_json.js";
import { IJson } from "@shared/m_object.js";
import { t_function } from "@shared/type.js";
import ChildAttributeType, { IChildAttributeType } from "./ChildAttributeType.js";
import { t_function_attribute_name_res_awaited, str_config_value, t_Object_withAttributeName, t_union_attribute_name, empty_value } from "./types.js";
import { str_value } from "../ValTextContent/types.js";

export class ChildAttributeTypeValue extends haveSerializerAndEmptyInit<ChildAttributeTypeValue> {
    [str_value] : t_function_attribute_name_res_awaited
    [str_config_value] :IChildAttributeType

    static df ={
        [str_value]:empty_value,
        [str_config_value]:ChildAttributeType.df
    }

    constructor(value : t_function_attribute_name_res_awaited =   ChildAttributeTypeValue.df[str_value] , config_value : IChildAttributeType  = ChildAttributeTypeValue.df[str_config_value] ){
        super( {toJson:ChildAttributeTypeValue.toJson , fromJson:ChildAttributeTypeValue.fromJson});
        this.config_value = config_value
        this.value = value
    }

    static cst_fromValueAndChildAttributeType = (value : t_function_attribute_name_res_awaited  , childAttribute : ChildAttributeType) =>
    {
        return new ChildAttributeTypeValue(value,childAttribute.toJson() as IChildAttributeType)
    }

    static concatValue (_value : t_function_attribute_name_res_awaited, to_add_value : t_function_attribute_name_res_awaited){
        return {..._value,...to_add_value}
     }

    setValue(_value : t_function_attribute_name_res_awaited,needCpy : boolean = false){
        this[str_value] = needCpy ? {..._value} : _value
    }

    static cst_fromChildAttributeType(value : t_function_attribute_name_res_awaited  , childAttribute : ChildAttributeType){
        return new ChildAttributeTypeValue(value,childAttribute.toJson() as IChildAttributeType)
    }

    static toJson = (attrType:ChildAttributeTypeValue)  => 
    {
        return {[str_value]: attrType[str_value] , [str_config_value] :attrType[str_config_value]} as const 
    }

    static fromJson = (json: IJson ) : ChildAttributeTypeValue => {
       return new ChildAttributeTypeValue(json[str_value],json[str_config_value])
    }

    static emptyObject : EmptyInit<ChildAttributeTypeValue>  = new EmptyInit<ChildAttributeTypeValue>(ChildAttributeTypeValue) ;

    static _getEmptyInit: () => ChildAttributeTypeValue = () => {
        return ChildAttributeTypeValue.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => ChildAttributeTypeValue = () => {
        return ChildAttributeTypeValue._getEmptyInit() ;
    }

    static isTypeof: (obj: haveSerializer<ChildAttributeTypeValue>) => boolean = (obj:haveSerializer<ChildAttributeTypeValue>)=>{
        return haveSerializerAndEmptyInit.st_isTypeof(ChildAttributeTypeValue._getEmptyInit(),obj)
    }

    isTypeof = ChildAttributeTypeValue.isTypeof


    static execFunctionAttributeName < F extends Fs[keyof Fs][keyof (Fs[keyof Fs]) ] & t_function ,Fs extends t_Object_withAttributeName< isOpt,isStrict,isOpt_2,KV> , 
     isStrict extends boolean = true  ,isOpt extends boolean = false  ,isOpt_2 extends boolean = false, KV extends t_union_attribute_name<isStrict,isStrict> =t_union_attribute_name<isStrict,isStrict> ,
     >(childAttribute : ChildAttributeType , functions :Fs,...args:Parameters<F>){

        const [key, val] = childAttribute.getKeyAndVal()

        const f :F = functions[key][val] // TODO why functions[key][val] is never ? 

        return f(...args) as ReturnType<F>

    }
}