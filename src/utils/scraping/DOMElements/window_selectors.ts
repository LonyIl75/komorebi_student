import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector","windowSelectors")
const debug_windowSelectors : Debugger = debug(name_module)


import { enum_color, isColorFromStr } from "@shared/m_colors.js";

//contain fonction put inside window context to perform selection see mPage scripts 


//SELECTORS : 




// FILTER AFTER SELECTORS : 

type t_filterFunction = (elm:HTMLElement) => boolean ;

function _filterElementByColor ( elm :HTMLElement , color :enum_color  ) : boolean {
    let styles = getComputedStyle(elm)
    let color_text = styles.getPropertyValue('color');
    return isColorFromStr(color_text,color) ;
}

function filterElementByColor ( color :enum_color  ) :  t_filterFunction {
    return  (elm :HTMLElement) => _filterElementByColor(elm,color) ;
}



function _filterElementByTextContent(elm :HTMLElement , regex : RegExp ) : boolean {
    return elm.textContent != null && regex.test(elm.textContent) ;
}

function filterElementByTextContent(  regex : RegExp ) :  t_filterFunction  {
    return  (elm :HTMLElement) => _filterElementByTextContent(elm,regex) ;
}



export function filterArrElementByContent (elms : HTMLElement[] , filter_functions : Array<t_filterFunction> ) : HTMLElement[] {
    let arr_elms : HTMLElement[] = elms ;
    for (const filter_function of filter_functions) { 
        arr_elms = arr_elms.filter(filter_function);
    }
    return arr_elms ;
}

