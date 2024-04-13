import { ServiceRequestHeaderBase, ServiceRequestBodyBase } from "./routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { df_client_id } from "./utils/browser/BrowsersPool.js";
import { str_while } from "@shared/m_pipeline.js";
import HA_PourdebonServiceLegumes from "./routes/scraping-services/Services/src/pourdebon/Services/Legumes/human-actions.js";
import { doServicePourdebon } from "./controller/scraping-services/Services/src/pourdebon/PourdebonService.js";
import { res_legumes, req_legumes } from "./routes/scraping-services/Services/src/pourdebon/Services/Legumes/routes.input.js";


const url = "https://www.pourdebon.com/legumes-cp21"  
const route = "legumes"
let header = new ServiceRequestHeaderBase(df_client_id,url,undefined,ServiceRequestHeaderBase.enum_privacy.public,false)
const arr_fct_name =HA_PourdebonServiceLegumes.namesOfPipelineFunction()
let body = new ServiceRequestBodyBase({body:[arr_fct_name[0],arr_fct_name[2],arr_fct_name[4],arr_fct_name[5],arr_fct_name[3],arr_fct_name[6],arr_fct_name[7]],op:str_while,initEnv : {counter:0,max:3}} as any ) 
let _res = new res_legumes(header)
let _req = new req_legumes(header,body)
await doServicePourdebon(route , "process" ,  _req,_res)
console.log(_res)