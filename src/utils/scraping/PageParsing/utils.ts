import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule, concatNameModuleAndDebug } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector_pageParsing_utils","utils")
const debug_pageParsing_utils : Debugger = debug(name_module)


//A FAIRE , redo with new Selector/SelectorProp
export function arrID_to_selector(_arr:ReturnType<typeof node_to_arrID > ):string {
    let selector = ""
    for (let i =0 ; i < _arr.length ; i++){ 
        if(_arr[i].length > 0 ){ 
        switch(i){ 
            case 0 : selector += _arr[i].toLowerCase() ; break;
            case 1 : selector += '[class*=\"'+ _arr[i] + '\"]' ; break; // ^= work , = don't work because of random \s in class name and id => *= even if isn't good
            case 2 : selector += '[id*=\"'+ _arr[i] + '\"]' ; break;
        }
        }

    }
return selector
}


export type t_elementSelector = ReturnType<typeof arrID_to_selector>
export type t_elementSelectors = t_elementSelector[]


export  function node_to_arrID(node:Element) : string[]{
    return [node?.tagName ,node?.className , node?.id].map((e:string)=>e.replace(/\s+/g," ").trim()) //remove non alphanumeric characters 
}

export  function node_to_selector(node:Element) :string {
    return arrID_to_selector(node_to_arrID(node))
}