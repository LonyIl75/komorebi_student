import getCurrentLine from "get-current-line"
import { Debugger } from "debug";


class DebugScrapingService<T extends debug_scrapingServiceKeys >{

    debug_routes : Map<T ,Debugger> ;

    screenshot: Map< T ,string> ;

    debug_scraping_service_all : Debugger ;
    screenshot_scraping_service_all : string ;

    get_debugger_ofRoute = (route :  T) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        let res = this.debug_routes.get(route) ;
        return res ? res : this.debug_scraping_service_all ;
    }
    get_screenshot_ofRoute = (route : T) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        let res = this.screenshot.get(route) ;
        return res ? res : this.screenshot_scraping_service_all ;
    }
    

}

export const arr_debug_scrapingServiceKeys = ["selectors","center" ].map((key)=>"test"+ key.charAt(0).toUpperCase() +key.slice(1))  ;
export type debug_scrapingServiceKeys = typeof arr_debug_scrapingServiceKeys[number] ;

export default DebugScrapingService ;