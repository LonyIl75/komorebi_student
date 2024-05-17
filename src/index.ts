import { ServiceRequestHeaderBase, ServiceRequestBodyBase } from "./routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { df_client_id } from "./utils/browser/BrowsersPool.js";
import { str_while } from "@shared/m_pipeline.js";
import HA_LespepitestechServiceStartupsMtp from "./routes/scraping-services/Services/src/lespepitestech/Services/StartupsMtp/human-actions.js";
import { doServiceLespepitestech } from "./controller/scraping-services/Services/src/lespepitestech/Lespepitestech.js";
import { res_startupsMtp, req_startupsMtp } from "./routes/scraping-services/Services/src/lespepitestech/Services/StartupsMtp/routes.input.js";


const url = "https://lespepitestech.com/startup/montpellier" 
const routeName = "startupsMtp" as const  
const serviceName = "lespepitestech" as const
let header = new ServiceRequestHeaderBase(serviceName,routeName,df_client_id,url,undefined,ServiceRequestHeaderBase.enum_privacy.public,false)
const arr_fct_name =HA_LespepitestechServiceStartupsMtp.namesOfPipelineFunction()
let body = new ServiceRequestBodyBase({body:[arr_fct_name[0],arr_fct_name[2],arr_fct_name[4],arr_fct_name[5],arr_fct_name[3],arr_fct_name[6],arr_fct_name[7]],op:str_while,initEnv : {counter:0,max:3}} as any ) 
let _res = new res_startupsMtp(header)
let _req = new req_startupsMtp(header,body)
//TODO : 
await doServiceLespepitestech(routeName,"process" ,  _req,_res)
console.log(_res)