import { ServiceRequestHeaderBase, ServiceRequestBodyBase } from "./routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { df_client_id } from "./utils/browser/BrowsersPool.js";
import { str_while } from "@shared/m_pipeline.js";
import HA_BooksToscrapeServiceBooks from "./routes/scraping-services/Services/src/booksToscrape/Services/Books/human-actions.js";
import { doServiceBooksToscrape } from "./controller/scraping-services/Services/src/booksToscrape/BookToscrape.js";
import { res_books, req_books } from "./routes/scraping-services/Services/src/booksToscrape/Services/Books/routes.input.js";


const url = "https://books.toscrape.com/catalogue/category/books_1/index.html"  
const route = "books"
let header = new ServiceRequestHeaderBase(df_client_id,url,undefined,ServiceRequestHeaderBase.enum_privacy.public,true)
const arr_fct_name =HA_BooksToscrapeServiceBooks.namesOfPipelineFunction()
let body = new ServiceRequestBodyBase({body:[arr_fct_name[0],arr_fct_name[2],arr_fct_name[4],arr_fct_name[5],arr_fct_name[3],arr_fct_name[6],arr_fct_name[7]],op:str_while,initEnv : {counter:0,max:3}} as any ) 
let _res = new res_books(header)
let _req = new req_books(header,body)
await doServiceBooksToscrape(route , "process" ,  _req,_res)
console.log(_res)