import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, getNameHumanActions, getNameModule, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";

const name_module :string  = getNameModule("serviceSocieteTech_utils","selectorsSocieteTech")
const debug_serviceSocieteTech_selectorsSocieteTech : Debugger = debug(name_module)


import { selectorsOptions, getDfSelectorsOptions } from "@/utils/scraping/DOMElements/Selector/_Selector/options.js";
import { Page, ElementHandle } from "puppeteer";
import { page_fct_getLoadingElements, page_fct_getMainComponent, page_fct_isLoaded, page_fct_waitForPageFullLoading, waitForPageFullLoading } from "@/utils/scraping/DOMElements/page_selectors.js";
import { t_pageOrElementHN, selectors } from "@/utils/scraping/DOMElements/Selector/_Selector/type.js";
import { Selector, char_child, classProp, containOp, idProp } from "@/utils/scraping/PageParsing/Schema/primitives/Selector.js";
import { getSocieteTechHelpers } from "@/routes/scraping-services/Data/societeTech/util/helpers.js";
import { root_startupsMtpPage_child_selectors } from "@/routes/scraping-services/Data/societeTech/Services/StartupsMtp/types.js";

export const root_selectors = [getSocieteTechHelpers<string>().arr_selector_join(
    [
        {selector:Selector.cst_onePropAndTagg("",'',"html")},
        {selector:Selector.cst_onePropAndTagg("",'',"body")},
    ],(arr:string[])=>arr.join(char_child))] as const 

export const societeTech_loadingElements_selectors = root_selectors 


const pageSocieteTech_fct_getLoadingElements = page_fct_getLoadingElements(societeTech_loadingElements_selectors)


const pageSocieteTech_fct_waitForPageFullLoading = page_fct_waitForPageFullLoading(pageSocieteTech_fct_getLoadingElements)

export function waitForSocieteTechPageFullLoading (page:t_pageOrElementHN , maxTime ?: number, sz_epoch?:number ) : Promise<boolean> {

   return pageSocieteTech_fct_waitForPageFullLoading(page,maxTime,sz_epoch,true)
}

export const societeTech_mainComponent_selectors = [/*Selector.cst_onePropAndTagg(classProp,'page_inner',"div",containOp).toString(),*/Selector.cst_onePropAndTagg(idProp,'content',"div",containOp).toString()] as const  //TODO extract in Data config file type.ts

const pageSocieteTech_fct_getMainComponent = page_fct_getMainComponent(societeTech_mainComponent_selectors)

export const getSocieteTechMainComponent = (page:t_pageOrElementHN , s_option ?:selectorsOptions )   =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return pageSocieteTech_fct_getMainComponent(page,s_option)
}



export const waitForSocieteTechPageLoading = (page:t_pageOrElementHN, s_option ?:selectorsOptions ) : Promise<ElementHandle<Node>> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return getSocieteTechMainComponent(page,s_option)
}


const societeTech_loaded_selectors : selectors = [
    getSocieteTechHelpers<string>().arr_selector_join(
        [
            {selector:Selector.cst_oneProp(classProp,'page_inner',containOp)},
            {selector:Selector.cst_oneProp(classProp,'row',containOp)},
            {selector:Selector.cst_oneProp(classProp,'col',containOp)},
            {selector:Selector.cst_oneProp(idProp,'content',containOp)},
            {selector:Selector.cst_oneProp(classProp,'view-content',containOp)},
        ]
    ),
] 

const pageSocieteTech_fct_isLoaded = page_fct_isLoaded( societeTech_loaded_selectors )

export const isLoaded_societeTechPage =  (page:Page) :Promise<boolean>  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return pageSocieteTech_fct_isLoaded( page )

}