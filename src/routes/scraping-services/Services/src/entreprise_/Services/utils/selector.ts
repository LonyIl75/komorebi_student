import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, getNameHumanActions, getNameModule, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";

const name_module :string  = getNameModule("serviceEntreprise__utils","selectorsEntreprise_")
const debug_serviceEntreprise__selectorsEntreprise_ : Debugger = debug(name_module)


import { selectorsOptions, getDfSelectorsOptions } from "@/utils/scraping/DOMElements/Selector/_Selector/options.js";
import { Page, ElementHandle } from "puppeteer";
import { page_fct_getLoadingElements, page_fct_getMainComponent, page_fct_isLoaded, page_fct_waitForPageFullLoading, waitForPageFullLoading } from "@/utils/scraping/DOMElements/page_selectors.js";
import { t_pageOrElementHN, selectors } from "@/utils/scraping/DOMElements/Selector/_Selector/type.js";
import { Selector, classProp, containOp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { getEntreprise_Helpers } from "@/routes/scraping-services/Data/entreprise_/util/helpers.js";

export const entreprise__loadingElements_selectors = ['[class*="pvs-loader"]','[aria-busy=*="true"]'] as const 


const pageEntreprise__fct_getLoadingElements = page_fct_getLoadingElements(entreprise__loadingElements_selectors)


const pageEntreprise__fct_waitForPageFullLoading = page_fct_waitForPageFullLoading(pageEntreprise__fct_getLoadingElements)

export function waitForEntreprise_PageFullLoading (page:t_pageOrElementHN , maxTime ?: number, sz_epoch?:number ) : Promise<boolean> {

   return pageEntreprise__fct_waitForPageFullLoading(page,maxTime,sz_epoch)
}

export const entreprise__mainComponent_selectors = [/*Selector.cst_onePropAndTagg(classProp,'page_inner',"div",containOp).toString(),*/Selector.cst_onePropAndTagg('','',"body").toString()] as const  //TODO extract in Data config file type.ts

const pageEntreprise__fct_getMainComponent = page_fct_getMainComponent(entreprise__mainComponent_selectors)

export const getEntreprise_MainComponent = (page:t_pageOrElementHN , s_option ?:selectorsOptions )   => {
    return pageEntreprise__fct_getMainComponent(page,s_option)
}



export const waitForEntreprise_PageLoading = (page:t_pageOrElementHN, s_option ?:selectorsOptions ) : Promise<ElementHandle<Node>> =>{
    return getEntreprise_MainComponent(page,s_option)
}


const entreprise__loaded_selectors : selectors = [
    Selector.cst_onePropAndTagg('','',"footer").toString()
] 

const pageEntreprise__fct_isLoaded = page_fct_isLoaded( entreprise__loaded_selectors )

export const isLoaded_entreprise_Page =  (page:Page) :Promise<boolean>  => {
    return pageEntreprise__fct_isLoaded( page )

}