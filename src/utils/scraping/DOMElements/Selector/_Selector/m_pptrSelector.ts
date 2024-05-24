import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector","m_pptrSelector")
const debug_pptrSelector : Debugger = debug(name_module)



import { arrToUnion, t_booleanFunction } from "@shared/type.js";
import { throwIfResolveWith } from "@shared/m_promise.js";
import { selector , ISelectorFunctionsObjects, _reject_qSelector, getSelectorJson, t_jsonFromFunctionName, t_jsonFromPropName, t_pageOrElementHN, t_reject_element_allSettled, t_reject_qSelector, t_resSelector, t_selectorFunctionPropName, IFunctionTypeFSelector, t_arr_IBaseFunctionSelector, getTypeArrJson, str_ISelectorFunctionObject_props } from "./type.js";

export namespace  FSelector {

    export enum name_functionSelector{
        querySelector = "querySelector"
    } 
    


    export const reject_qSelector : t_reject_qSelector  = _reject_qSelector 
    export const reject_qSelector_element :t_reject_qSelector = _reject_qSelector // AVANT ; null 


    export type t_resFSelector_success = [t_resSelector] ; 

    export type t_resFSelector_reject = typeof reject_qSelector ;
    export type t_resFSelector_reject_element = typeof reject_qSelector_element ;
    

    export const selectIfFoundElseThrow = async (page_or_element: t_pageOrElementHN ,selector: selector ): Promise<t_resSelector> =>{ 
        let res = await throwIfResolveWith (reject_qSelector_element)((_selector: selector )=>{ 
            return page_or_element.$(_selector).then((res)=>res === null ? reject_qSelector_element : res as Exclude <typeof res, null> )
        },selector)
        return res
        
    }

    export type IQuerySelector=  IFunctionTypeFSelector< 
    t_resFSelector_success ,t_arr_IBaseFunctionSelector , getTypeArrJson<name_functionSelector.querySelector> >


    export  const _querySelector : IQuerySelector = async (page_or_element: t_pageOrElementHN ,selector:selector,_type : name_functionSelector.querySelector =name_functionSelector.querySelector): Promise<t_resFSelector_success>=>{ 
        let _res = await selectIfFoundElseThrow(page_or_element,selector);
        return [_res]
    }

    export type t_funct_querySelector = typeof _querySelector 


    export const getRejecteValue_qSelector = () : t_reject_qSelector =>{ 
        return reject_qSelector
    }

    type t_getRejecteValue_qSelector = typeof getRejecteValue_qSelector

    export class  Selector implements ISelectorFunctionsObjects<name_functionSelector,[t_reject_qSelector] > {

            [name_functionSelector.querySelector ] :{
                [str_ISelectorFunctionObject_props.function] : t_funct_querySelector
                [str_ISelectorFunctionObject_props.getRejectedValue] : t_getRejecteValue_qSelector
                [str_ISelectorFunctionObject_props.isRejected] : t_booleanFunction
            };

        constructor (  ) { 
            this[name_functionSelector.querySelector] = {
                ...getSelectorJson<t_funct_querySelector ,t_getRejecteValue_qSelector > (_querySelector,getRejecteValue_qSelector)
            }
        }

        //static getProvider  = () => new Selector()

        static provider : {[k in name_functionSelector ] : any }  = new Selector()

    }

    export type t_funct_selector = Selector[name_functionSelector][str_ISelectorFunctionObject_props.function]

    export type t_selector_jsonFromFunctionName <FN extends name_functionSelector> =  t_jsonFromFunctionName<name_functionSelector,FN,Selector>
    export type t_selector_jsonFromPropName <propName extends t_selectorFunctionPropName , value extends  Selector[name_functionSelector][propName] > =  t_jsonFromPropName<propName ,name_functionSelector , Selector ,value >
  


    export type t_resFSelector_allSettled = (t_resSelector | t_reject_element_allSettled )[]
    export type t_resFSelector_allSettled_element = arrToUnion<t_resFSelector_success> | t_resFSelector_reject_element ;
    
    export type t_resFSelector = t_resFSelector_success | t_resFSelector_reject ;


}
