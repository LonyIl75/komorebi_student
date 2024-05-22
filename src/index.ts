import { ServiceRequestHeaderBase, ServiceRequestBodyBase, t_saved, buildSaved } from "./routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { df_client_id } from "./utils/browser/BrowsersPool.js";
import { str_while, t_pipeline_json_any } from "@shared/m_pipeline.js";
import HA_LespepitestechServiceStartupsMtp from "./routes/scraping-services/Services/src/lespepitestech/Services/StartupsMtp/human-actions.js";
import { doServiceLespepitestech } from "./controller/scraping-services/Services/src/lespepitestech/Lespepitestech.js";
import { res_startupsMtp, req_startupsMtp } from "./routes/scraping-services/Services/src/lespepitestech/Services/StartupsMtp/routes.input.js";
import HA_Entreprise_ServiceMain from "./routes/scraping-services/Services/src/entreprise_/Services/Main/human-actions.js";
import { req_main, res_main } from "./routes/scraping-services/Services/src/entreprise_/Services/Main/routes.input.js";
import { doServiceEntreprise_ } from "./controller/scraping-services/Services/src/entreprise_/Entreprise_.js";
import { _id_field, id_field, id_item } from "./routes/scraping-services/Data/lespepitestech/Services/StartupsMtp/StartupsMtp.js";
import { applyFctToObjectKeys, isEmptyJson } from "@shared/m_object.js";
import { arrayIsEqual, isNullArray } from "@shared/m_array.js";
import { _getAwaitedEmptyPromise } from "@shared/m_promise.js";
import { str_startupsMtp,str_StartupsMtp } from "./routes/scraping-services/Data/lespepitestech/Services/StartupsMtp/types.js";
import { getProtocolAndDomain } from "@shared/validate-url/functions.js";

const str_fk = "fk" as const

const base_url = "https://lespepitestech.com/startup/montpellier?page=11"  as const 
const step_1_isStream = false as const

const step_1 = async (url:string,rest_pipeline:Omit<t_pipeline_json_any,"body">={op:str_while,initEnv : {counter:0,max:2}}) => {
    const routeName = str_startupsMtp  
    const serviceName = "lespepitestech" as const
    let header = new ServiceRequestHeaderBase(serviceName,routeName,df_client_id,url,undefined,ServiceRequestHeaderBase.enum_privacy.public,step_1_isStream)
    const arr_fct_name =HA_LespepitestechServiceStartupsMtp.namesOfPipelineFunction()
    let body = new ServiceRequestBodyBase({body:[arr_fct_name[0],arr_fct_name[2],arr_fct_name[4],arr_fct_name[5],arr_fct_name[3],arr_fct_name[6],arr_fct_name[7]],...rest_pipeline} as any ) 
    let res = new res_startupsMtp(header)
    let req = new req_startupsMtp(header,body)
        await doServiceLespepitestech(routeName,"process" ,  req,res)
    return {success:res,reject:[]}
}

type StartupsMtpCreateInput = {
    id?: string
    date: number
    StartupsMtpType: string
    StartupsMtpSummary?: string | null
    StartupsMtpLink_href?: string | null
    StartupsMtpItemCategory?: string[]
  }

const step_2 = async (ret_step_1:Awaited<ReturnType<typeof step_1>>) => {
    const { success: step_1_res, reject: step_1_reject } = ret_step_1;

    let arr_items  = step_1_res.body?.saved  as t_saved<StartupsMtpCreateInput>
    if(step_1_isStream ){
        if(isEmptyJson(step_1_res.body?.saved)){
            arr_items =  buildSaved(Object.values(step_1_res.body.result).reduce((acc:string[],samplePage)=>{
                return [...acc,...Object.values(samplePage[id_item])]
            },[]))
        }else {
            throw new Error("NotYetImplemented")
        }
    } 
    if(isNullArray(arr_items.create) || arrayIsEqual(arr_items.create ,[_getAwaitedEmptyPromise()])) return ret_step_1 

    const routeName = "_" as const  
    const serviceName = "entreprise_" as const
    let header = new ServiceRequestHeaderBase(serviceName,routeName,df_client_id,undefined,undefined,ServiceRequestHeaderBase.enum_privacy.public,false)
    const arr_fct_name =HA_Entreprise_ServiceMain.namesOfPipelineFunction()
    let body = new ServiceRequestBodyBase({body:[arr_fct_name[0],arr_fct_name[2],arr_fct_name[3]]} as any) 
    let res = new res_main(header)
    let req = new req_main(header,body)
    let error = []
    for( const item of arr_items.create){
       
        const url : string = item.StartupsMtpLink_href 
        if(url === undefined) continue
        header.url = url
        req.body.fk = applyFctToObjectKeys({["id"]:item["id"], [id_field] : item[id_field]},(key)=>`${str_fk}_${str_StartupsMtp}_${key}`)
        try {
            await doServiceEntreprise_(routeName,"process" ,  req,res)
        } catch (e) {
            console.log(e)
            error.push({url:url,error_message:e})
        }
    }
    return {success:res,reject:error}
}

const res_step_1 = await step_1(base_url)
const res_step_2  = await step_2(res_step_1)
console.log(res_step_2)
