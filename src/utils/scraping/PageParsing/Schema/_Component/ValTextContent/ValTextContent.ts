import { EmptyInit, AHaveSerializer, haveSerializerAndEmptyInit } from "@shared/m_json.js"
import { str_value_init, t_value_init, str_value_validation_strRegex, t_value_validation_strRegex, df_value_init, df_value_validation_strRegex, df, str_joinChar_group } from "./types.js"
import { IJson } from "@shared/m_object.js"

export interface IValTextContent {
    [str_value_init] ?: t_value_init,
    [str_value_validation_strRegex] ?: t_value_validation_strRegex
    [str_joinChar_group] ?: string 
}

export type t_cst_args = ConstructorParameters<typeof ValTextContent>

export class ValTextContent extends haveSerializerAndEmptyInit<ValTextContent>   implements IValTextContent {
    [str_value_init] ?: t_value_init
    [str_value_validation_strRegex] ?: t_value_validation_strRegex
    [str_joinChar_group] ?: string

    static df = df

    constructor(value_init : t_value_init = df[str_value_init] , value_validation_strRegex : t_value_validation_strRegex = df[str_value_validation_strRegex] , joinChar_group : string = df[str_joinChar_group]){
        super( {toJson:ValTextContent.toJson , fromJson:ValTextContent.fromJson});
        this[str_value_init] = value_init
        this[str_value_validation_strRegex] = value_validation_strRegex
        this[str_joinChar_group] = joinChar_group
    }

    static toJson = (valTextContent:IValTextContent)  => 
    {
        return {[str_value_init]: valTextContent[str_value_init] , [str_value_validation_strRegex] :valTextContent[str_value_validation_strRegex] , [str_joinChar_group] : valTextContent[str_joinChar_group]} as const 
    }

    static fromJson = (json: IJson ) : ValTextContent => {
       return new ValTextContent(json[str_value_init],json[str_value_validation_strRegex],json[str_joinChar_group])
    }

    static getArgsForCst = (json: IJson ) :t_cst_args => {
        return [json[str_value_init],json[str_value_validation_strRegex],json[str_joinChar_group]]
    }
    static dfArgsCst = ValTextContent.getArgsForCst(ValTextContent.df)

    static setArgsForCst = (_this: IValTextContent , ...args : t_cst_args ) : void => {
         _this.value_init = args[0]
        _this.value_validation_strRegex = args[1]
        _this.joinChar_group = args[2]
     }

    static emptyObject : EmptyInit<ValTextContent>  = new EmptyInit<ValTextContent>(ValTextContent) ;

    static getEmptyInit: () => ValTextContent = () => {
        return ValTextContent.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => ValTextContent = () => {
        return ValTextContent.getEmptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<ValTextContent>) => boolean = (obj:AHaveSerializer<ValTextContent>)=>{
        return haveSerializerAndEmptyInit._isTypeof(ValTextContent.getEmptyInit(),obj)
    }

    isTypeof = ValTextContent.isTypeof

  
}