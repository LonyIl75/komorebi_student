import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, getNameHumanActions, getNameModule, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";

const name_module :string  = getNameModule("serviceBooksToscrape_utils","selectorsBooksToscrape")
const debug_serviceBooksToscrape_selectorsBooksToscrape : Debugger = debug(name_module)


import { selectorsOptions, getDfSelectorsOptions } from "@/utils/scraping/DOMElements/Selector/_Selector/options.js";
import { Page, ElementHandle } from "puppeteer";
import { page_fct_getLoadingElements, page_fct_getMainComponent, page_fct_isLoaded, page_fct_waitForPageFullLoading, waitForPageFullLoading } from "@/utils/scraping/DOMElements/page_selectors.js";
import { t_pageOrElementHN, selectors } from "@/utils/scraping/DOMElements/Selector/_Selector/type.js";
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { getBooksToscrapeHelpers } from "@/routes/scraping-services/Data/booksToscrape/util/helpers.js";

export const booksToscrape_loadingElements_selectors = ['[class*="pvs-loader"]','[aria-busy=*="true"]'] as const 


const pageBooksToscrape_fct_getLoadingElements = page_fct_getLoadingElements(booksToscrape_loadingElements_selectors)


const pageBooksToscrape_fct_waitForPageFullLoading = page_fct_waitForPageFullLoading(pageBooksToscrape_fct_getLoadingElements)

export function waitForBooksToscrapePageFullLoading (page:t_pageOrElementHN , maxTime ?: number, sz_epoch?:number ) : Promise<boolean> {

   return pageBooksToscrape_fct_waitForPageFullLoading(page,maxTime,sz_epoch)
}

export const booksToscrape_mainComponent_selectors = [Selector.cst_onePropAndTagg(classProp,'page_inner',"div",containOp).toString(),] as const  //TODO extract in Data config file type.ts

const pageBooksToscrape_fct_getMainComponent = page_fct_getMainComponent(booksToscrape_mainComponent_selectors)

export const getBooksToscrapeMainComponent = (page:t_pageOrElementHN , s_option ?:selectorsOptions )   => {
    return pageBooksToscrape_fct_getMainComponent(page,s_option)
}



export const waitForBooksToscrapePageLoading = (page:t_pageOrElementHN, s_option ?:selectorsOptions ) : Promise<ElementHandle<Node>> =>{
    return getBooksToscrapeMainComponent(page,s_option)
}


const booksToscrape_loaded_selectors : selectors = [
    getBooksToscrapeHelpers<string>().arr_selector_join(
        [
            {selector:Selector.cst_oneProp(classProp,'page_inner',containOp)},
            {selector:Selector.cst_oneProp(classProp,'row',containOp)},
            {selector:Selector.cst_oneProp(classProp,'col',containOp)}
        ]
    ),
] 

const pageBooksToscrape_fct_isLoaded = page_fct_isLoaded( booksToscrape_loaded_selectors )

export const isLoaded_booksToscrapePage =  (page:Page) :Promise<boolean>  => {
    return pageBooksToscrape_fct_isLoaded( page )

}