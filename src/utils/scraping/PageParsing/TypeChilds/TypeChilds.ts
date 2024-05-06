import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule, str_idRouteAndRemoteAddresss, concatNameModuleAndDebug } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector_pageParsing","typeChilds")
const debug_pageParsing_typeChilds : Debugger = debug(name_module)



import {IJson} from "@shared/m_object.js";
import { EmptyInit, functionError_RetPromDfEmpty, AHaveSerializer, haveSerializerAndEmptyInit } from '@shared/m_json.js';
import { StrChildType, noneChildType, t_noneCompClassName } from './types.js';
import { err_function } from '@shared/m_function.js';


  
export interface ITypeChilds <unionChildType extends string ,_t extends StrChildType.t_childType<unionChildType> = StrChildType.t_childType<unionChildType> > extends IJson {
    type :  _t
    ids : number[]
}

export type t_emptyTypeChilds = TypeChilds<t_noneCompClassName>
export type t_emptyITypeChilds = ITypeChilds<t_noneCompClassName>


export function err_function_retPromNullTypeChild ( message ?: string ): err_function<Promise<t_emptyTypeChilds>> {
    return functionError_RetPromDfEmpty<t_emptyTypeChilds>(TypeChilds.getEmptyInit() , message) 
}


export  class TypeChilds< unionChildType extends string  >   extends  haveSerializerAndEmptyInit<TypeChilds<any>>   {
 
    //TODO : force unionChildType to be string or noneCompClassName
    readonly type : StrChildType.t_childType<unionChildType> = noneChildType  as StrChildType.t_childType<unionChildType>
    ids : Array<number>

    static emptyObject : EmptyInit< TypeChilds<any>>  = new EmptyInit< TypeChilds<any>>(TypeChilds) ;
             
    static getEmptyInit: () => t_emptyTypeChilds = () => {
        return TypeChilds.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => t_emptyTypeChilds  = () => {
        return TypeChilds.getEmptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<TypeChilds<any>>) => boolean = (obj:AHaveSerializer<TypeChilds<any>>)=>{
        return haveSerializerAndEmptyInit._isTypeof(TypeChilds.getEmptyInit(),obj)
    }

    isTypeof = TypeChilds.isTypeof



    static toJson = (TypeChilds:TypeChilds<any>) => 
    {
        return {type:TypeChilds.type , ids:TypeChilds.ids} as const 
    }

    static fromJson (json: IJson) : TypeChilds<any> {
        return new TypeChilds(json.type , json.ids)
    }


    constructor(type:StrChildType.t_childType<unionChildType>  = noneChildType  as StrChildType.t_childType<unionChildType> , ids : Array<number> = []){
        super({toJson:TypeChilds.toJson , fromJson:TypeChilds.fromJson})
        this.type = type;
        this.ids = ids;
    }

    static cst_cpy< T extends string >(_tocpy : TypeChilds<T>) : TypeChilds<T>{
        return new TypeChilds<T>(_tocpy.type , [..._tocpy.ids])
    }


    //TODO interface with function isEq , integrate/"implemented by" in AHaveSerializer for example
    static isEmpty (ch_type:TypeChilds<any>) : boolean {
        let empty = TypeChilds.getEmptyInit()
        return ch_type.type == empty.type && ch_type.ids == empty.ids
    }


    static  getType< className extends string   > (_json : ITypeChilds<className>) : StrChildType.t_childType<className> {
        let obj :TypeChilds<className> = TypeChilds.fromJson (_json)
        return obj.type as StrChildType.t_childType<className>
    }

    static childTypeTocompClassname = <className  extends string   >(_json:ITypeChilds <className> ): className=>{
         return StrChildType._childTypeToCompClassname<StrChildType.t_childType<className>>(TypeChilds.getType(_json) ) as unknown as className
     }


}
