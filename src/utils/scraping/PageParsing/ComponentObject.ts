import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule, str_idRouteAndRemoteAddresss, concatNameModuleAndDebug } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector_pageParsing","componentObject")
const debug_pageParsing_componentObject : Debugger = debug(name_module)


import {IJson, getEmptyJson} from "@shared/m_object.js";
import { t_arr_component,  t_getChildTypeFromArrComponent, t_getClassNameTypeFromArrComponent, t_rootClassName} from "./types.js";
import {_Enumerate, arrToUnion,reshapeObject, t_function } from "@shared/type.js";
import {_notFoundIdx} from "@shared/type.js";
import { EmptyInit, haveSerializer, haveSerializerAndEmptyInit, } from '@shared/m_json.js';
import { t_strRegex } from '@shared/m_regex.js';
import { MapRegexToIdPath } from '@shared/m_regexMapping.js';
import { FrameAddScriptTagOptions } from 'puppeteer';
import { ExposeObject, t_exposeObject } from '../PageEvaluate/ExposeObject.js';
import { ExposeFunction } from '../PageEvaluate/ExposeFunction.js';
import { ExposedMap } from '../PageEvaluate/mPage.js';
import { Component } from './Schema/Component/Component.js';
import { t_str_type } from './Schema/Component/types.js';
import { FunctionalWrapperJsonComponent } from './Schema/FunctionalWrapperJsonComponents/FunctionalWrapperJsonComponents.js';
import { t_union_IComponent } from './Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js';
import { _IJsonComponents } from './Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js';


export type t_ScrapingComponent_any = ScrapingComponent<t_strRegex, string, readonly [t_rootClassName,...readonly string[]],  any, t_arr_component<string>, _IJsonComponents<string>>


export class ScrapingComponent<UnionRegex  extends t_strRegex ,UnionIdPath  extends string , ArrUnionClassNameType extends readonly [t_rootClassName,...readonly string[]],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,
ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents< unionClassNameType>> {
    mapPathPatternToId : MapRegexToIdPath<UnionRegex, UnionIdPath, ArrUnionClassNameType ,unionClassNameType > 
    fwJsonComponent : FunctionalWrapperJsonComponent<ArrUnionClassNameType,unionClassNameType , ArrArr,  T>

    constructor(_mapPathPatternToId : MapRegexToIdPath<UnionRegex, UnionIdPath, ArrUnionClassNameType ,unionClassNameType> , 
        _fwJsonComponent : FunctionalWrapperJsonComponent<ArrUnionClassNameType,unionClassNameType , ArrArr,  T>){
        this.mapPathPatternToId = _mapPathPatternToId
        this.fwJsonComponent = _fwJsonComponent
    }

    getFwJsonComponent = () => {
        return this.fwJsonComponent
    }

    getMapPathPatternToId = () => {
        return this.mapPathPatternToId
    }
}


  export type IJsonWithScrapingComponents<UnionRegex  extends t_strRegex ,UnionIdPath  extends string ,ArrUnionClassNameType extends  readonly [t_rootClassName,...readonly string []] ,
  unionClassNameType extends arrToUnion<ArrUnionClassNameType>, t_arrrArrUnion_page_childsClassName extends t_arr_component<unionClassNameType> 
  , T extends _IJsonComponents< unionClassNameType>> 
  = {
    scriptsTagMap : ConstructorParameters<typeof Map<string , FrameAddScriptTagOptions>>
    scriptObjectMap : ConstructorParameters<typeof ExposedMap<t_exposeObject<any> ,ExposeObject<any>>>
    scriptFunctionMap : ConstructorParameters<typeof ExposedMap<Function,ExposeFunction>>
    scrapingComponent : ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,t_arrrArrUnion_page_childsClassName,T> 
    }


export type t_JsonWithScrapingComponent = JsonWithScrapingComponents<any, any, any, any, any, any>

export class JsonWithScrapingComponents<UnionRegex  extends t_strRegex ,UnionIdPath  extends string ,ArrUnionClassNameType extends  readonly [t_rootClassName,...readonly string []] ,
unionClassNameType extends arrToUnion<ArrUnionClassNameType>, t_arrrArrUnion_page_childsClassName extends t_arr_component<unionClassNameType>
, T extends _IJsonComponents< unionClassNameType>> extends haveSerializerAndEmptyInit<t_JsonWithScrapingComponent>{

    
    scriptsTagMap : ConstructorParameters<typeof Map<string , FrameAddScriptTagOptions>>
    scriptObjectMap : ConstructorParameters<typeof ExposedMap<t_exposeObject<any> ,ExposeObject<any>>>
    scriptFunctionMap : ConstructorParameters<typeof ExposedMap<Function,ExposeFunction>>
    scrapingComponent : ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,t_arrrArrUnion_page_childsClassName,T> 

    constructor(_json : reshapeObject<IJsonWithScrapingComponents<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,t_arrrArrUnion_page_childsClassName,T>,"scrapingComponent"> = {scrapingComponent:getEmptyJson() as any}){
        super({toJson : JsonWithScrapingComponents.toJson, fromJson : JsonWithScrapingComponents.fromJson})
        this.scriptsTagMap = _json?.["scriptsTagMap"] || []
        this.scriptObjectMap = _json?.["scriptObjectMap"] || []
        this.scriptFunctionMap = _json?.["scriptFunctionMap"] || []
        this.scrapingComponent = _json.scrapingComponent
    }

    getEmptyInit: () => t_JsonWithScrapingComponent = () => {
        return JsonWithScrapingComponents._getEmptyInit() ;
    }

    static isTypeof: (obj: haveSerializer<t_JsonWithScrapingComponent>) => boolean = (obj:haveSerializer<t_JsonWithScrapingComponent>)=>{
        return haveSerializerAndEmptyInit.st_isTypeof(JsonWithScrapingComponents._getEmptyInit(),obj)
    }

    isTypeof = JsonWithScrapingComponents.isTypeof
    
    static fromJson = (json : IJson) : t_JsonWithScrapingComponent => {
        return new JsonWithScrapingComponents(json as any )
    }

    static toJson = (jsonWithScrapingComponent : t_JsonWithScrapingComponent)  => {
        return {
            scriptsTagMap : jsonWithScrapingComponent.scriptsTagMap,
            scriptObjectMap : jsonWithScrapingComponent.scriptObjectMap,
            scriptFunctionMap : jsonWithScrapingComponent.scriptFunctionMap,
            scrapingComponent : jsonWithScrapingComponent.scrapingComponent
        } as const
    }
    static emptyObject : EmptyInit<t_JsonWithScrapingComponent>  = new EmptyInit<t_JsonWithScrapingComponent>(JsonWithScrapingComponents) ;

    static _getEmptyInit: () => t_JsonWithScrapingComponent = () => {
        return JsonWithScrapingComponents.emptyObject.emptyInit() ;
    }

    


}

  
type t_hj < Ks  extends readonly string[]> = Ks extends readonly [infer A , ...infer B] ? A extends string ? B extends readonly string[] ?  IJson<A,t_union_IComponent<A,any>>& t_hj<B> : never : never : {}


export const getPropsFromImportedComponentAndProp = <Ks extends readonly string[]  ,  TJson extends IJson<Ks[number]>  , P extends keyof TJson[Ks[number]] ,  R extends TJson[Ks[number]] = TJson[Ks[number]] >(json:TJson, keys : Ks , prop : P)=> {
    type t_ <_Ks extends readonly string[]  > = _Ks extends readonly [infer A , ...infer B] ? A extends keyof TJson ? B extends readonly string[] ?  readonly [TJson[A][P] , ...t_<B>] : never : never : []
    return keys.map((key)=>json[key][prop]) as t_ <Ks >
}

export const getPropsFromImportedComponentAndFct = <Ks extends readonly string[]  ,  TJson extends t_hj<Ks> & IJson<Ks[number]>  ,  P extends keyof TJson[Ks[number]] ,F extends t_function<R[P],[R]> , R extends TJson[Ks[number]] = TJson[Ks[number]] >(json:TJson, keys : Ks , fct : F )=> {
    type t_ <_Ks extends readonly string[]  > = _Ks extends readonly [infer A , ...infer B] ? A extends keyof TJson ? B extends readonly string[] ?  readonly [TJson[A][P] , ...t_<B>] : never : never : []
    return keys.map((key:Ks[number])=>fct( json[key] )) as t_<Ks>
}

export const getTypesFromImportedComponentAndFct =<Ks extends readonly string[],TJson extends t_hj<Ks> & IJson<Ks[number]>>(json:TJson, keys : Ks)=> {
    type K = Ks[number]
    type t_imported_component_getType = typeof Component.getType<K,any,TJson[K]>
    return getPropsFromImportedComponentAndFct<Ks,TJson,t_str_type,t_imported_component_getType>(json,keys,Component.getType)

}