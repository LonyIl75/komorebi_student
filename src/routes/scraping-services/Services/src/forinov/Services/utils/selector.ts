import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, getNameHumanActions, getNameModule, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";

const name_module :string  = getNameModule("serviceForinov_utils","selectorsForinov")
const debug_serviceForinov_selectorsForinov : Debugger = debug(name_module)


import { selectorsOptions, getDfSelectorsOptions } from "@/utils/scraping/DOMElements/Selector/_Selector/options.js";
import { Page, ElementHandle } from "puppeteer";
import { page_fct_getLoadingElements, page_fct_getMainComponent, page_fct_isLoaded, page_fct_waitForPageFullLoading, waitForPageFullLoading } from "@/utils/scraping/DOMElements/page_selectors.js";
import { t_pageOrElementHN, selectors } from "@/utils/scraping/DOMElements/Selector/_Selector/type.js";
import { Selector, char_child, classProp, containOp, idProp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { getForinovHelpers } from "@/routes/scraping-services/Data/forinov/util/helpers.js";

export const root_selectors = [getForinovHelpers<string>().arr_selector_join(
    [
        {selector:Selector.cst_onePropAndTagg("",'',"html")},
        {selector:Selector.cst_onePropAndTagg("",'',"body")},
    ],(arr:string[])=>arr.join(char_child))] as const 

export const forinov_loadingElements_selectors =  root_selectors


const pageForinov_fct_getLoadingElements = page_fct_getLoadingElements(forinov_loadingElements_selectors)


const pageForinov_fct_waitForPageFullLoading = page_fct_waitForPageFullLoading(pageForinov_fct_getLoadingElements)

export function waitForForinovPageFullLoading (page:t_pageOrElementHN , maxTime ?: number, sz_epoch?:number ) : Promise<boolean> {

   return pageForinov_fct_waitForPageFullLoading(page,maxTime,sz_epoch,true)
}

export const forinov_mainComponent_selectors = [Selector.cst_onePropAndTagg(idProp,'container-page-profil',"div",containOp).toString(),Selector.cst_onePropAndTagg(classProp,'tab-content',"div",containOp).toString()] as const  //TODO extract in Data config file type.ts

const pageForinov_fct_getMainComponent = page_fct_getMainComponent(forinov_mainComponent_selectors)

export const getForinovMainComponent = (page:t_pageOrElementHN , s_option ?:selectorsOptions )   =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return pageForinov_fct_getMainComponent(page,s_option)
}



export const waitForForinovPageLoading = (page:t_pageOrElementHN, s_option ?:selectorsOptions ) : Promise<ElementHandle<Node>> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return getForinovMainComponent(page,s_option)
}


const forinov_loaded_selectors : selectors = [
    getForinovHelpers<string>().arr_selector_join(
        [
            {selector:Selector.cst_oneProp(classProp,'page_inner',containOp)},
            {selector:Selector.cst_oneProp(classProp,'row',containOp)},
            {selector:Selector.cst_oneProp(classProp,'col',containOp)},
            {selector:Selector.cst_oneProp(classProp,'view-content',containOp)},
            {selector:Selector.cst_oneProp(idProp,'content',containOp)},
            {selector:Selector.cst_oneProp(classProp,'tab-content',containOp)},
        ]
    ),
] 

const pageForinov_fct_isLoaded = page_fct_isLoaded( forinov_loaded_selectors )

export const isLoaded_forinovPage =  (page:Page) :Promise<boolean>  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return pageForinov_fct_isLoaded( page )

}