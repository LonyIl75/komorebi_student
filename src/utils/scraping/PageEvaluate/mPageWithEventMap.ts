import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule, str_idRouteAndRemoteAddresss, concatNameModuleAndDebug } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector_pageEvaluate","mPageWithEventMap")
const debug_pageEvaluate_mPageWithEventMap : Debugger = debug(name_module)


import type { IJson } from "@shared/m_object.js";
import {mPage} from "./mPage.js";
import type { Page } from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";
import { IJsonWithScrapingComponents } from "../PageParsing/ComponentObject.js";
import { arrToUnion } from "@shared/type.js";
import { t_arr_component, t_getChildTypeFromArrComponent, t_getClassNameTypeFromArrComponent, t_rootClassName } from "../PageParsing/types.js";
import { t_strRegex } from '@shared/m_regex.js';
import { IJsonComponents } from '../PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js';
import { _IJsonComponents } from '../PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js';




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


type _t_eventMap = {eventMap : readonly ([string, Map<string, any>])[]}

export  default class mPageWithEventMap<UnionRegex  extends t_strRegex ,UnionIdPath  extends string,
ArrUnionClassNameType extends readonly [t_rootClassName,... readonly string [] ],
 unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,
ArrArr extends t_arr_component <unionClassNameType> ,
T extends _IJsonComponents< unionClassNameType>
>  
extends mPage<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>{
 
    eventMap : Map<string , Map<string , any>> ;

    constructor(json:IJsonWithScrapingComponents<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>&_t_eventMap  ){
        super(json);
        this.eventMap =  new Map<string , Map<string , any>>(json.eventMap);
    }
    static cst_from_json<UnionRegex  extends t_strRegex ,UnionIdPath  extends string,ArrUnionClassNameType extends readonly [t_rootClassName,... readonly string [] ] ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component <unionClassNameType> ,T extends _IJsonComponents< unionClassNameType> >(json:IJsonWithScrapingComponents<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>&_t_eventMap){
        return new mPageWithEventMap(json);
    }

    
    static async cst_before_evaluate <UnionRegex  extends t_strRegex ,UnionIdPath  extends string,ArrUnionClassNameType extends readonly [t_rootClassName,... readonly string [] ] ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component <unionClassNameType> ,T extends _IJsonComponents< unionClassNameType> >(page:Page , json:IJsonWithScrapingComponents<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>&_t_eventMap){
        let obj = new mPageWithEventMap(json);
        await obj.setPage(page);
        await obj.setEssentialScripts();  
        return obj;
        
    }


    async setPage(page:Page){
        super.setPage(page);
    }


    async setEssentialScripts(){
        await super.setEssentialScripts();
        await this.addFileScriptTag({path:path.resolve(__filename),id:"mPageWithEventMap"});
        await this.page.exposeFunction("mPageWithEventMap.cst_from_json",mPageWithEventMap.cst_from_json);
        //await this.page.exposeFunction("getEventMap",this.getEventMap); // A VERIFIER
    }



    setEventMap(event:string , varname:string , value:any){
        if(!this.eventMap.has(event)) this.eventMap.set(event,new Map<string , any>());
        this.eventMap.get(event).set(varname,value);
    }


    
    getEventMap(event :string , varname :string ){
        if(event == undefined) return this.eventMap;
        else if (varname == undefined) return this.eventMap.get(event)
        if(!this.eventMap.has(event)) return undefined;
        return this.eventMap.get(event).get(varname);
    }

    toJson() : IJson {
        return {...super.toJson(),eventMap:Array.from(this.eventMap)};
    }
    
    stringify():string{
        return JSON.stringify(this.toJson());
    }


}
