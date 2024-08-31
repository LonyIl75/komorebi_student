import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule, concatNameModuleAndDebug } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector_pageEvaluate","exposeFunction")
const debug_pageEvaluate_exposeFunction : Debugger = debug(name_module)


import { FrameAddScriptTagOptions, Page, PageEventObject } from "puppeteer";
import type { t_expsAndScript } from "./todo.js";
import {ExposeObjectOrFunction} from "./ExposeObjectOrFunction.js";
import { promiseAlltoPromise } from '@shared/m_promise.js';
    

//export class ExposeFunction<T extends t_exposeFunction >  extends ExposeObjectOrFunction<T> {
    export class ExposeFunction extends ExposeObjectOrFunction<Function> {

        
        constructor(funct:Function ,  name ?: string  ,required?:FrameAddScriptTagOptions[] , scriptTag?:FrameAddScriptTagOptions ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            super(funct,name,scriptTag,required);
        }

        static emptyObject :ExposeFunction  = null ;
        static isEmptyObject(obj:ExposeFunction):boolean{
            return obj == ExposeFunction.emptyObject;
        }
        
    };
    export class  onEventFunction extends ExposeFunction {
        constructor(funct:Function ,  name ?: keyof PageEventObject  ,required?:FrameAddScriptTagOptions[] , scriptTag?:FrameAddScriptTagOptions ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            super(funct,name as string ,required,scriptTag);
        }

        getName(){
            return this.name 
        }

        async getObj(): Promise<any>{
            return await this.obj;
        }

    }


    //export type t_PageEventObject =  "close"| "console"| "dialog"| "domcontentloaded"| "error"| "frameattached"| "framedetached"| "framenavigated"| "load"| "metrics"| "pageerror"| "popup"| "request"| "response"| "requestfailed"| "requestfinished"| "requestservedfromcache"| "workercreated"| "workerdestroyed" ;

    export type t_exposeFunction = Function ;


    export function getPathFromExpAndScript( duo : t_expsAndScript ):string{
        return getScriptTagFromExpAndScript(duo).path;
    }

    

    export function getScriptTagFromExpAndScript( duo : t_expsAndScript ):FrameAddScriptTagOptions{
        return duo[1];
    }


   export function  _page_exposeFunction (page:Page , arr_exposeFunction:ExposeFunction[]): Promise<void>[] {
        return arr_exposeFunction.map(async (exposeFunction:ExposeFunction) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            return page.exposeFunction(exposeFunction.getScriptsTag()!.id,await exposeFunction.getObj())
        })
    }

    export function page_exposeFunction (page:Page , arr_exposeFunction:ExposeFunction[]): Promise<void[]> {
        return promiseAlltoPromise(_page_exposeFunction(page,arr_exposeFunction))
    }

    export function page_onEventFunction (page:Page , arr_onEventFunction:onEventFunction[]): Promise<void[]> {
        return promiseAlltoPromise(_page_exposeFunction(page,arr_onEventFunction))
    }

    const funct_console = (msg:any) => console.log(msg.text())
    export const onPage_console :onEventFunction = new onEventFunction(funct_console,"console")