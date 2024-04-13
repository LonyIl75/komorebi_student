import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, getNameHumanActions, getNameModule, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";

const name_module :string  = getNameModule("servicePourdebon_utils","selectorsPourdebon")
const debug_servicePourdebon_selectorsPourdebon : Debugger = debug(name_module)


import { selectorsOptions, getDfSelectorsOptions } from "@/utils/scraping/DOMElements/Selector/_Selector/options.js";
import { Page, ElementHandle } from "puppeteer";
import { page_fct_getLoadingElements, page_fct_getMainComponent, page_fct_isLoaded, page_fct_waitForPageFullLoading, waitForPageFullLoading } from "@/utils/scraping/DOMElements/page_selectors.js";
import { t_pageOrElementHN, selectors } from "@/utils/scraping/DOMElements/Selector/_Selector/type.js";
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { getPourdebonHelpers } from "@/routes/scraping-services/Data/pourdebon/util/helpers.js";

export const pourdebon_loadingElements_selectors = ['[class*="pvs-loader"]','[aria-busy=*="true"]'] as const 


const pagePourdebon_fct_getLoadingElements = page_fct_getLoadingElements(pourdebon_loadingElements_selectors)


const pagePourdebon_fct_waitForPageFullLoading = page_fct_waitForPageFullLoading(pagePourdebon_fct_getLoadingElements)

export function waitForPourdebonPageFullLoading (page:t_pageOrElementHN , maxTime ?: number, sz_epoch?:number ) : Promise<boolean> {

   return pagePourdebon_fct_waitForPageFullLoading(page,maxTime,sz_epoch)
}

export const pourdebon_mainComponent_selectors = [Selector.cst_onePropAndTagg("",'',"main").toString(),] as const  //TODO extract in Data config file type.ts

const pagePourdebon_fct_getMainComponent = page_fct_getMainComponent(pourdebon_mainComponent_selectors)

export const getPourdebonMainComponent = (page:t_pageOrElementHN , s_option ?:selectorsOptions )   => {
    return pagePourdebon_fct_getMainComponent(page,s_option)
}



export const waitForPourdebonPageLoading = (page:t_pageOrElementHN, s_option ?:selectorsOptions ) : Promise<ElementHandle<Node>> =>{
    return getPourdebonMainComponent(page,s_option)
}


const pourdebon_loaded_selectors : selectors = [
    getPourdebonHelpers<string>().arr_selector_join(
        [
            {selector:Selector.cst_oneProp(classProp,'columns',containOp)},
            {selector:Selector.cst_oneProp(classProp,'column main',containOp)},
            {selector:Selector.cst_oneProp(classProp,'products wrapper grid products-grid',containOp)}
        ]
    )
] 

const pagePourdebon_fct_isLoaded = page_fct_isLoaded( pourdebon_loaded_selectors )

export const isLoaded_pourdebonPage =  (page:Page) :Promise<boolean>  => {
    return pagePourdebon_fct_isLoaded( page )

}