import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule, str_idRouteAndRemoteAddresss, concatNameModuleAndDebug } from '@shared/str_debug.js';


const name_module :string = "human_actions"
const debug_hm_typing : Debugger = debug(concatNameModuleAndDebug(name_module,"typing"))
const debug_hm_clicking : Debugger = debug(concatNameModuleAndDebug(name_module,"clicking"))



import { applyFunctionNextToTrySelectorF, trySelectors_any } from '../DOMElements/Selector/main.js';
import { selectors, t_elementHE, t_pageOrElementHN } from '../DOMElements/Selector/_Selector/type.js';




/*
Describe all the human actions and their transcription on puppeteer 

*/

export const f_typing = async (page : t_pageOrElementHN  , txt_data :string,_selectors?: selectors  , delay: number = 30) => {
    let funct = async (element_or_page: t_pageOrElementHN)=>{
        return await (element_or_page as any).evaluate((e:any,txt_data:string,delay: number)=>e!.type(txt_data, { delay: delay }),txt_data,delay)
    }
    return applyFunctionNextToTrySelectorF(trySelectors_any,funct, page ,_selectors )
}

export const f_clicking = async (page : t_pageOrElementHN  ,_selectors?: selectors, delay: number = 30 ) => {
    let funct = async (element_or_page: t_pageOrElementHN)=>{
        return await (element_or_page as any).evaluate((e:any,delay: number)=>e!.click({ delay: delay }),delay) 
    }
    return applyFunctionNextToTrySelectorF(trySelectors_any,funct, page ,_selectors )
}


