import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector","m_pptrSelectorAll")
const debug_pptrSelectorAll : Debugger = debug(name_module)


import { throwIfResolveWith } from "@shared/m_promise.js";
import { selector , ISelectorFunctionsObjects, _reject_qSelector, getSelectorJson, t_jsonFromFunctionName, t_jsonFromPropName, t_pageOrElementHN, t_reject_element_allSettled, t_reject_qSelector, t_resSelector, t_selectorFunctionPropName, IFunctionTypeFSelector, t_arr_IBaseFunctionSelector, getTypeArrJson, str_ISelectorFunctionObject_props } from "./type.js";
import { t_booleanFunction } from '@shared/type.js';
import { selectorsOptions, df_selectorsOptions } from '@/utils/scraping/DOMElements/Selector/_Selector/options.js';


export namespace  FSelectorAll {
    
    export enum name_functionSelector{
        querySelectorAll = "querySelectorAll",
        waitSelector = "waitSelector"

    } 

  
    export const res_reject_qSelectorAll_element : t_reject_qSelector   = _reject_qSelector
    export const res_reject_qSelectorAll : t_reject_qSelector  = res_reject_qSelectorAll_element




    export type t_resFSelectorAll_success_element = t_resSelector[] ;
    export type t_resFSelectorAll_success = t_resFSelectorAll_success_element[]

    export type t_reject_qSelectorAll = typeof res_reject_qSelectorAll  ;
    export type t_resFSelectorAll_result = t_reject_qSelectorAll | t_resFSelectorAll_success_element ;


    
    type IQuerySelectorAll = IFunctionTypeFSelector<t_resFSelectorAll_success_element,
    t_arr_IBaseFunctionSelector,
    getTypeArrJson<name_functionSelector.querySelectorAll>>


    export const selectAllIfFoundElseThrow  = async (page_or_element: t_pageOrElementHN ,selector: selector ) : Promise <t_resFSelectorAll_success_element> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return await throwIfResolveWith (res_reject_qSelectorAll_element)((_selector: selector )=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            return page_or_element.$$(_selector).then((res)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                return res
            })
        },selector)
    }

    export const  _querySelectorAll : IQuerySelectorAll = async (page_or_element: t_pageOrElementHN ,selector:selector,_type : name_functionSelector.querySelectorAll =name_functionSelector.querySelectorAll): Promise<t_resFSelectorAll_success_element> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return await selectAllIfFoundElseThrow(page_or_element,selector);
    }

    export type t_funct_querySelectorAll = typeof _querySelectorAll

    export function getRejectValue_qSelectorAll() : t_reject_qSelectorAll {
        return res_reject_qSelectorAll
    }

    export type t_getRejecteValue_qSelectorAll = typeof getRejectValue_qSelectorAll



    type IWaitForSelector = IFunctionTypeFSelector<t_resFSelectorAll_success_element,
    t_arr_IBaseFunctionSelector & {s_option :selectorsOptions},
    getTypeArrJson<name_functionSelector.waitSelector>> 

    export const  _waitForSelector :IWaitForSelector  = ( page_or_element: t_pageOrElementHN ,selector:selector,s_option :selectorsOptions, _type : name_functionSelector.waitSelector =name_functionSelector.waitSelector ):Promise<t_resFSelectorAll_success_element> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return page_or_element.waitForSelector(selector,s_option).then((res:t_resSelector)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            return [res]
        });
    }

    export function getFunctionWaitSelector ( s_option :selectorsOptions) { /*console.log("DEBUG_ME",getCurrentLine());*/
        return  ( page_or_element: t_pageOrElementHN ,selector:selector , _type : name_functionSelector.waitSelector =name_functionSelector.waitSelector  ) => _waitForSelector(page_or_element,selector,s_option, _type); 
    
    }
    
    export type t_funct_waitSelector = ReturnType<typeof getFunctionWaitSelector> 


    export const getRejectValue_waitSelector = getRejectValue_qSelectorAll
    
    
    export type t_getRejecteValue_waitSelector = typeof getRejectValue_waitSelector
 

  
    export class  SelectorAll implements ISelectorFunctionsObjects<name_functionSelector,[t_reject_qSelectorAll,t_reject_qSelectorAll] > {
            [name_functionSelector.querySelectorAll ] :{
                [str_ISelectorFunctionObject_props.function] : t_funct_querySelectorAll
                [str_ISelectorFunctionObject_props.getRejectedValue] : t_getRejecteValue_qSelectorAll
                [str_ISelectorFunctionObject_props.isRejected] : t_booleanFunction
            };
            [name_functionSelector.waitSelector ] :{
                [str_ISelectorFunctionObject_props.function] :t_funct_waitSelector,
                [str_ISelectorFunctionObject_props.getRejectedValue] : t_getRejecteValue_waitSelector,
                [str_ISelectorFunctionObject_props.isRejected] : t_booleanFunction
        };

        constructor (  s_option :selectorsOptions ) { /*console.log("DEBUG_ME",getCurrentLine());*/
            this[name_functionSelector.querySelectorAll] = {
                ...getSelectorJson<t_funct_querySelectorAll ,t_getRejecteValue_qSelectorAll > (_querySelectorAll,getRejectValue_qSelectorAll)
            }
            this[name_functionSelector.waitSelector] = {
                ...getSelectorJson<t_funct_waitSelector ,t_getRejecteValue_waitSelector > ( getFunctionWaitSelector(s_option), getRejectValue_waitSelector),
            }
        }

        //static getProvider  = (s_option :selectorsOptions) => new SelectorAll(s_option)
        static provider : {[k in name_functionSelector ] : any } = new SelectorAll(df_selectorsOptions) // A FAIRE 

    }

    export type t_funct_selector = SelectorAll[name_functionSelector][str_ISelectorFunctionObject_props.function]


    export type t_selector_jsonFromFunctionName <FN extends name_functionSelector> =  t_jsonFromFunctionName<name_functionSelector,FN,SelectorAll>
    export type t_selector_jsonFromPropName <propName extends t_selectorFunctionPropName , value extends  SelectorAll[name_functionSelector][propName] > =  t_jsonFromPropName<propName ,name_functionSelector , SelectorAll ,value >
  

    export type t_resFSelectorAll_allSettled_element = t_resFSelectorAll_success_element | t_reject_element_allSettled ;
    export type t_resFSelectorAll_allSettled = (t_resFSelectorAll_success_element | t_reject_element_allSettled )[]

}