import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, getNameHumanActions, getNameModule, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";

const name_module :string  = getNameModule("serviceLespepitestech_utils","selectorsLespepitestech")
const debug_serviceLespepitestech_selectorsLespepitestech : Debugger = debug(name_module)


import { selectorsOptions, getDfSelectorsOptions } from "@/utils/scraping/DOMElements/Selector/_Selector/options.js";
import { Page, ElementHandle } from "puppeteer";
import { page_fct_getLoadingElements, page_fct_getMainComponent, page_fct_isLoaded, page_fct_waitForPageFullLoading, waitForPageFullLoading } from "@/utils/scraping/DOMElements/page_selectors.js";
import { t_pageOrElementHN, selectors } from "@/utils/scraping/DOMElements/Selector/_Selector/type.js";
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { getLespepitestechHelpers } from "@/routes/scraping-services/Data/lespepitestech/util/helpers.js";

export const lespepitestech_loadingElements_selectors = ['[class*="pvs-loader"]','[aria-busy=*="true"]'] as const 


const pageLespepitestech_fct_getLoadingElements = page_fct_getLoadingElements(lespepitestech_loadingElements_selectors)


const pageLespepitestech_fct_waitForPageFullLoading = page_fct_waitForPageFullLoading(pageLespepitestech_fct_getLoadingElements)

export function waitForLespepitestechPageFullLoading (page:t_pageOrElementHN , maxTime ?: number, sz_epoch?:number ) : Promise<boolean> {

   return pageLespepitestech_fct_waitForPageFullLoading(page,maxTime,sz_epoch)
}

export const lespepitestech_mainComponent_selectors = [/*Selector.cst_onePropAndTagg(classProp,'page_inner',"div",containOp).toString(),*/Selector.cst_onePropAndTagg(classProp,'view-content',"div",containOp).toString()] as const  //TODO extract in Data config file type.ts

const pageLespepitestech_fct_getMainComponent = page_fct_getMainComponent(lespepitestech_mainComponent_selectors)

export const getLespepitestechMainComponent = (page:t_pageOrElementHN , s_option ?:selectorsOptions )   => {
    return pageLespepitestech_fct_getMainComponent(page,s_option)
}



export const waitForLespepitestechPageLoading = (page:t_pageOrElementHN, s_option ?:selectorsOptions ) : Promise<ElementHandle<Node>> =>{
    return getLespepitestechMainComponent(page,s_option)
}


const lespepitestech_loaded_selectors : selectors = [
    getLespepitestechHelpers<string>().arr_selector_join(
        [
            {selector:Selector.cst_oneProp(classProp,'page_inner',containOp)},
            {selector:Selector.cst_oneProp(classProp,'row',containOp)},
            {selector:Selector.cst_oneProp(classProp,'col',containOp)},
            {selector:Selector.cst_oneProp(classProp,'view-content',containOp)}
        ]
    ),
] 

const pageLespepitestech_fct_isLoaded = page_fct_isLoaded( lespepitestech_loaded_selectors )

export const isLoaded_lespepitestechPage =  (page:Page) :Promise<boolean>  => {
    return pageLespepitestech_fct_isLoaded( page )

}