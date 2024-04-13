

import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule, str_idRouteAndRemoteAddresss, concatNameModuleAndDebug } from '@shared/str_debug.js';

const name_module :string= "pageSelectors"
const debug_pageS_getElement : Debugger = debug(concatNameModuleAndDebug(name_module,"getElement"))
const debug_pageS_getElementAll: Debugger  = debug(concatNameModuleAndDebug(name_module,"getElementAll"))

import { is_notFound, nullOrUndefined } from '@shared/m_primitives.js';
import { selectorsOptions, getDfSelectorsOptions } from './Selector/_Selector/options.js';
import { isRejected_modedExecutionSelectors } from './Selector/ExecutionSelectors.js';
import { FSelector } from './Selector/_Selector/m_pptrSelector.js';
import { mode_of_executionSelector } from './Selector/_Selector/main.js';
import { t_pageOrElementHN, selectors, t_resSelector } from './Selector/_Selector/type.js';
import { trySelectors_any, checkRejected_trySelectorFunction, waitSelectors, args_trySelectors_any, t_args_trySelectors_any } from './Selector/main.js';



//A FAIRE repositionner + refaire fichier 
export async function isMounted(page_or_element :t_pageOrElementHN  , elm_selectors:selectors ):Promise<boolean> {
    return trySelectors_any(page_or_element, elm_selectors).then( async(arr ) => {
        return !isRejected_modedExecutionSelectors<t_args_trySelectors_any[0],t_args_trySelectors_any[1]>(arr,...args_trySelectors_any);});
}

const mounted_timeout = 2000
export async function waitWhileIsMounted(page_or_element :t_pageOrElementHN  ,  elm_selectors:selectors){
    if(await isMounted(page_or_element,elm_selectors)){
        return await new Promise<[t_pageOrElementHN, selectors]>((resolve) => {  setTimeout(() =>resolve([page_or_element, elm_selectors]), mounted_timeout)}).then(async ([_page_or_element,  _elm_selectors ] )=>{
            return await waitWhileIsMounted(_page_or_element , _elm_selectors)
            
        })
    }
    return; 
}

export const page_getLoadingElements = (page:t_pageOrElementHN , arr_selector : selectors  ) =>{
    return  trySelectors_any(page,arr_selector).then((_) => {
        console.log("_",_)
        return _ 
    }).catch((_) => FSelector.Selector.provider[FSelector.name_functionSelector.querySelector ].getRejectedValue() )
}

export const page_fct_getLoadingElements = ( arr_selector : selectors  ) =>{
    return (page:t_pageOrElementHN)=>{
        return page_getLoadingElements(page,arr_selector)
    }
}

export  async function waitForPageFullLoading (args: Parameters<ReturnType<typeof page_fct_getLoadingElements>> ,page_getLoadingElements : ReturnType<typeof page_fct_getLoadingElements> ,  maxTime : number=5000 , sz_epoch:number = 500 ) : Promise<boolean> {
    let nb_epoch :number = Math.ceil(maxTime / sz_epoch);
    let elements_selected_res_notloaded  =  await page_getLoadingElements(...args)//do 
    for(let k:number = 0; k < nb_epoch && !FSelector.Selector.provider[FSelector.name_functionSelector.querySelector ].isRejected(elements_selected_res_notloaded)  ;k++){ //while
        elements_selected_res_notloaded  =  await page_getLoadingElements(...args)
        console.log("elements_selected_res_notloaded",elements_selected_res_notloaded)
        await new Promise( resolve => setTimeout(resolve, sz_epoch));
    }
    if(FSelector.Selector.provider[FSelector.name_functionSelector.querySelector ].isRejected(elements_selected_res_notloaded)) return true 
    else throw ({name: 'AbortError',message:`Waiting for Page loading` }) ;//ErrorLike() ;
}



export const page_fct_waitForPageFullLoading = ( p_page_fct_getLoadingElements :  ReturnType<typeof page_fct_getLoadingElements>  ) =>{
    return (page:t_pageOrElementHN , maxTime ?: number, sz_epoch?:number ) => {
        return waitForPageFullLoading([page],p_page_fct_getLoadingElements,maxTime,sz_epoch)
    }
}

export type t_page_fct_waitForPageFullLoading = ReturnType<typeof page_fct_waitForPageFullLoading>


export const page_getMainComponent = async(page:t_pageOrElementHN ,main_selectors : selectors ,  s_option :selectorsOptions= getDfSelectorsOptions() )   => {
    
    let e  = checkRejected_trySelectorFunction(await trySelectors_any(page,main_selectors))
    if( ! is_notFound(e) ) {
        return ( e as [t_resSelector])[0]
    }   
    return e as nullOrUndefined 
}

export const page_fct_getMainComponent = (main_selectors : selectors  )   => {
    
   return  (page:t_pageOrElementHN,  s_option ?:selectorsOptions) => {
        return page_getMainComponent(page,main_selectors,s_option)
    }
}

export type t_page_fct_getMainComponent =  ReturnType<typeof page_fct_getMainComponent>



export const page_fct_isLoaded = (page_loaded_selectors : selectors  )   => {
    return (page:t_pageOrElementHN)=>{
        return waitSelectors(page, page_loaded_selectors ).then( () => {return true;}).catch( () => {return false;});
    }

}

export type t_page_fct_isLoaded =  ReturnType<typeof page_fct_isLoaded>

