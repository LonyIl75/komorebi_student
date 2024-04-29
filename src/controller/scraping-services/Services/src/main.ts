import { serviceName_booksToscrape } from "../Config/booksToscrape/config.js"
import { BooksToscrapeMainService, doServiceBooksToscrape } from "./booksToscrape/BookToscrape.js"



export const json_MainService = {
    //#ADD NEW SERVICE HERE
    [serviceName_booksToscrape] :  await BooksToscrapeMainService,
} as const 




export const json_doService = {
    //#ADD NEW SERVICE HERE
    [serviceName_booksToscrape] :  doServiceBooksToscrape,
} as const 