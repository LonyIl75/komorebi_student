import getCurrentLine from "get-current-line"
import { ServiceRequestHeaderBase, ServiceRequestBodyBase, t_saved, buildSaved } from "./routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { closeBrowsers, df_client_id, getNewPage } from "./utils/browser/BrowsersPool.js";
import { str_while, t_pipeline_json_any } from "@shared/m_pipeline.js";
import HA_LespepitestechServiceStartupsMtp from "./routes/scraping-services/Services/src/lespepitestech/Services/StartupsMtp/human-actions.js";
import { doServiceLespepitestech } from "./controller/scraping-services/Services/src/lespepitestech/Lespepitestech.js";
import { res_startupsMtp as res_startupsMtpLespepitestech, req_startupsMtp as req_startupsMtpLespepitestech} from "./routes/scraping-services/Services/src/lespepitestech/Services/StartupsMtp/routes.input.js";
import HA_Entreprise_ServiceMain from "./routes/scraping-services/Services/src/entreprise_/Services/Main/human-actions.js";
import { req_main, res_main } from "./routes/scraping-services/Services/src/entreprise_/Services/Main/routes.input.js";
import { doServiceEntreprise_ } from "./controller/scraping-services/Services/src/entreprise_/Entreprise_.js";
import { _id_field, id_field, id_item } from "./routes/scraping-services/Data/lespepitestech/Services/StartupsMtp/StartupsMtp.js";
import { applyFctToObjectKeys, isEmptyJson } from "@shared/m_object.js";
import { arrayIsEqual, isNullArray } from "@shared/m_array.js";
import { _getAwaitedEmptyPromise } from "@shared/m_promise.js";
import { str_startupsMtp,str_StartupsMtp } from "./routes/scraping-services/Data/lespepitestech/Services/StartupsMtp/types.js";
import fs from "fs"
import { trySelectors_allSettled_all, trySelectors_any, trySelectors_any_all } from "./utils/scraping/DOMElements/Selector/main.js";
import { _getMongoDBClusterKOBSuffix, _getMongoDBClusterKOBUrl } from "./config/envVar.js";
import { getLogFolderPath } from "./config/pathFolder/otherPath.js";
import path from "path"
import { str_startupsOccitanie,str_StartupsOccitanie } from "./routes/scraping-services/Data/forinov/Services/StartupsOccitanie/types.js";


import { doServiceForinov } from "./controller/scraping-services/Services/src/forinov/Forinov.js";

import HA_ForinovServiceStartupsOccitanie from "./routes/scraping-services/Services/src/forinov/Services/StartupsOccitanie/human-actions.js";
import { res_startupsOccitanie as res_startupsOccitanieForinov, req_startupsOccitanie as req_startupsOccitanieForinov} from "./routes/scraping-services/Services/src/forinov/Services/StartupsOccitanie/routes.input.js";
import { str_startupsOccitanie as str_startupsOccitanieForinov} from "./routes/scraping-services/Data/forinov/Services/StartupsOccitanie/types.js";

import HA_ForinovServiceStartupOccitanie from "./routes/scraping-services/Services/src/forinov/Services/StartupOccitanie/human-actions.js";
import { res_startupOccitanie as res_startupOccitanieForinov, req_startupOccitanie as req_startupOccitanieForinov} from "./routes/scraping-services/Services/src/forinov/Services/StartupOccitanie/routes.input.js";
import { str_startupOccitanie as str_startupOccitanieForinov} from "./routes/scraping-services/Data/forinov/Services/StartupOccitanie/types.js";




import HA_SocieteTechServiceStartupsMtp from "./routes/scraping-services/Services/src/societeTech/Services/StartupsMtp/human-actions.js";
import { doServiceSocieteTech } from "./controller/scraping-services/Services/src/societeTech/SocieteTech.js";
import { res_startupsMtp as res_startupsMtpSocieteTech, req_startupsMtp as req_startupsMtpSocieteTech} from "./routes/scraping-services/Services/src/societeTech/Services/StartupsMtp/routes.input.js";
import { res_startupMtp as res_startupMtpSocieteTech, req_startupMtp as req_startupMtpSocieteTech} from "./routes/scraping-services/Services/src/societeTech/Services/StartupMtp/routes.input.js";
import { societeTech_startupsMtp_mainOfComponents, str_startupsMtp as str_startupsMtpSocieteTech } from "./routes/scraping-services/Data/societeTech/Services/StartupsMtp/types.js";
import {str_startupMtp as str_startupMtpSocieteTech} from "./routes/scraping-services/Data/societeTech/Services/StartupMtp/types.js";

const str_fk = "fk" as const

const base_url = "https://www.forinov.fr/startups/france-Occitanie_3/" as const //"https://www.forinov.fr/startups/AgriTech_20/Abelio_3188/" as const //"https://www.societe.tech/actu/hiotee-levee-de-fonds-de-0-64-millions-deuros/" as const //"https://www.societe.tech/actus/startup-du-monde/startup-europe/startup-france/startup-occitanie/startup-herault/startup-montpellier/" as const//"https://lespepitestech.com/startup/montpellier"  as const 
const step_1_isStream = false as const

const step_1 = async (url:string,rest_pipeline={}//:Omit<t_pipeline_json_any,"body">={op:str_while,initEnv : {counter:0,max:13}}
)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const routeName = str_startupsOccitanieForinov//str_startupOccitanieForinov//str_startupMtpSocieteTech//str_startupsMtpSocieteTech//str_startupsOccitanie//str_startupsMtp  
    const serviceName = "forinov" as const//"societeTech" as const//"lespepitestech" as const
    let header = new ServiceRequestHeaderBase(serviceName,routeName,df_client_id,url,undefined,ServiceRequestHeaderBase.enum_privacy.public,step_1_isStream)
    const arr_fct_name = HA_ForinovServiceStartupsOccitanie.namesOfPipelineFunction() //HA_ForinovServiceStartupOccitanie.namesOfPipelineFunction() //HA_SocieteTechServiceStartupMtp.namesOfPipelineFunction()//HA_SocieteTechServiceStartupsMtp.namesOfPipelineFunction()//LespepitestechServiceStartupsMtp.namesOfPipelineFunction()
    let body = new ServiceRequestBodyBase({body:[arr_fct_name[0],arr_fct_name[2],arr_fct_name[3]],...rest_pipeline} as any ) //new ServiceRequestBodyBase({body:[arr_fct_name[0],arr_fct_name[2],arr_fct_name[3],arr_fct_name[4],arr_fct_name[5],arr_fct_name[6],arr_fct_name[7]],...rest_pipeline} as any ) 
    let res = new req_startupsOccitanieForinov(header)//new req_startupOccitanieForinov(header)//new res_startupMtpSocieteTech(header)//new res_startupsMtpSocieteTech(header)
    let req = new res_startupsOccitanieForinov(header,body)//new res_startupOccitanieForinov(header,body)//new req_startupMtpSocieteTech(header,body)//new req_startupsMtpSocieteTech(header,body)
    await doServiceForinov(routeName,"process" ,  req,res)//await doServiceSocieteTech(routeName,"process" ,  req,res)//doServiceLespepitestech(routeName,"process" ,  req,res)
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

const name_step_2 = "step_2" as const
const step_2 = async (ret_step_1:Awaited<ReturnType<typeof step_1>>,_name=name_step_2) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const { success: step_1_res, reject: step_1_reject } = ret_step_1;

    let arr_items  = step_1_res.body?.saved  as t_saved<StartupsMtpCreateInput>
    if(step_1_isStream ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        if(isEmptyJson(step_1_res.body?.saved)){
            arr_items =  buildSaved(Object.values(step_1_res.body.result).reduce((acc:string[],samplePage)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
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
    let arr_error = []
    let arr_success = []

    let arr_trace = []
    //let arr_result = []
    for( const item of arr_items.create){ /*console.log("DEBUG_ME",getCurrentLine());*/
       
        const url : string = item.StartupsMtpLink_href 
        if(url === undefined) continue
        arr_trace.push(url)
        header.url = url
        req.body.fk = applyFctToObjectKeys({["id"]:item["id"], [id_field] : item[id_field]},(key)=>`${str_fk}_${str_StartupsMtp}_${key}`)
        const  p =  doServiceEntreprise_(routeName,"process" ,  req,res).then((_)=> arr_success.push({url:url})).catch((e)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/ console.log(e);arr_error.push({url:url,error_message:e})})
        console.log("P",url)
        await p //arr_result.push(p)
        
    }
    //write in a file arr_trace 
    await fs.writeFileSync(path.join(getLogFolderPath(),`${_name}.json`),JSON.stringify(arr_trace))
    return {success:res,reject:arr_error}
    //return await Promise.all(arr_result).then((_)=>({success:res,reject:error})).catch((e)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        //console.log("AERR",e)
        //return ({success:res,reject:error})
    //})
}

const res_step_1 = await step_1(base_url)
/*const _res_step_2  = await step_2(res_step_1)
//console.log(_res_step_2)
const res_step_2 = _res_step_2.success
console.log(res_step_2)*/
await closeBrowsers()
console.log("END")


/*
const url = "https://www.mynelis.com/fr"

let header = new ServiceRequestHeaderBase("entreprise_","_",df_client_id,undefined,url,ServiceRequestHeaderBase.enum_privacy.public,true)
const arr_fct_name =HA_Entreprise_ServiceMain.namesOfPipelineFunction()
let body = new ServiceRequestBodyBase({body:[arr_fct_name[0],arr_fct_name[2],arr_fct_name[3]]} as any) 
let res = new res_main(header)
let req = new req_main(header,body)
await doServiceEntreprise_("_","process" ,  req,res)
console.log(res.body.result)
await closeBrowsers()*/

// const gl_page = await getNewPage({clientId:df_client_id})
// const mpage = gl_page.mpage
// const response = await mpage.goto(base_url)
// const page = mpage.page
// //await page.setContent((await response.buffer()).toString('utf8'));
// const ttt = [
//     ["div[class*=\"content-woo-section--description\"]"],
//     /*[
//         "li[class*=\"active\"]",
//         "li:has(>span[class*=\"active\"])",
//         "li[class*=\"current\"]",
//         "li:has(>span[class*=\"current\"])",
//         "li[class*=\"selected\"]",
//         "li:has(>span[class*=\"selected\"])",
//         "li[class*=\"previous\"]",
//         "li:has(>span[class*=\"previous\"])",
//       ],*/
//       [
//         "li:not([class*=\"active\"]):not(:has(>span[class*=\"active\"])):not([class*=\"current\"]):not(:has(>span[class*=\"current\"])):not([class*=\"selected\"]):not(:has(>span[class*=\"selected\"])):not([class*=\"previous\"]):not(:has(>span[class*=\"previous\"]))",
//       ]
//     //societeTech_startupsMtp_mainOfComponents.childs_selectors[0],// "html>body div[class*=\"row\"]>div[class*=\"col\"]"]//"html body div[class*=\"main-content\"]>div[class*=\"container-fluid\"]>div[class*=\"row\"]>div[class*=\"col\"]"],
//     //["div[class*='products list_woo']"]
//     // ["div[class*=\"tab-content\"]>div[id*=\"tabPaneOne\"]"],
//     // [":scope >div[class*=\"row\"]"],
//     // [":scope div>div[class*=\"container-card-startup\"]"],
//     // [":scope >a"]
//     // [
//     //     ":not(footer):not([id*=\"footer\"]):not([class*=\"footer\"]):has(>footer),:not(footer):not([id*=\"footer\"]):not([class*=\"footer\"]):has(>[id*=\"footer\"]),:not(footer):not([id*=\"footer\"]):not([class*=\"footer\"]):has(>[class*=\"footer\"])>:not(footer):not([id*=\"footer\"]):not([class*=\"footer\"]):not(header):not([id*=\"header\"]):not([class*=\"header\"]):not(menu):not([id*=\"menu\"]):not([class*=\"menu\"]):not(nav):not([id*=\"nav\"]):not([class*=\"nav\"]) :not(script):not(noscript):not(:has(script)):not(:has(noscript))"//>:not(header):not([id*=\"header\"]):not([class*=\"header\"]):not(menu):not([id*=\"menu\"]):not([class*=\"menu\"]):not(nav):not([id*=\"nav\"]):not([class*=\"nav\"]) :not(script):not(noscript):not(:has(script)):not(:has(noscript))",
//     //     //":not(footer):not([id*     =\"footer\"]):not([class*=\"footer\"]):has(>footer),:not(footer):not([id*=\"footer\"]):not([class*=\"footer\"]):has(>[id*=\"footer\"]),:not(footer):not([id*=\"footer\"]):not([class*=\"footer\"]):has(>[class*=\"footer\"])>:not(footer):not([id*=\"footer\"]):not([class*=\"footer\"]):not(header):not([id*=\"header\"]):not([class*=\"header\"]):not(menu):not([id*=\"menu\"]):not([class*=\"menu\"]):not(nav):not([id*=\"nav\"]):not([class*=\"nav\"]) :not(script):not(noscript):not(:has(script)):not(:has(noscript))",
//     // ]
// ]
// //:not(footer):not([id*="footer"]):not([class*="footer"]):has(>footer)>:not(footer):not([id*="footer"]):not([class*="footer"]):not(header):not([id*="header"]):not([class*="header"]):not(menu):not([id*="menu"]):not([class*="menu"]):not(nav):not([id*="nav"]):not([class*="nav"]) :not(script):not(noscript):not(style):not(:has(script)):not(:has(noscript)):not(:has(style)),:not(footer):not([id*="footer"]):not([class*="footer"]):has(>[id*="footer"])>:not(footer):not([id*="footer"]):not([class*="footer"]):not(header):not([id*="header"]):not([class*="header"]):not(menu):not([id*="menu"]):not([class*="menu"]):not(nav):not([id*="nav"]):not([class*="nav"]) :not(script):not(noscript):not(style):not(:has(script)):not(:has(noscript)):not(:has(style)),:not(footer):not([id*="footer"]):not([class*="footer"]):has(>[class*="footer"])>:not(footer):not([id*="footer"]):not([class*="footer"]):not(header):not([id*="header"]):not([class*="header"]):not(menu):not([id*="menu"]):not([class*="menu"]):not(nav):not([id*="nav"]):not([class*="nav"]) :not(script):not(noscript):not(style):not(:has(script)):not(:has(noscript)):not(:has(style))
// // [
// //   ":not(footer):not([id*=\"footer\"]):not([class*=\"footer\"]):has(>footer),:not(footer):not([id*=\"footer\"]):not([class*=\"footer\"]):has(>[id*=\"footer\"]),:not(footer):not([id*=\"footer\"]):not([class*=\"footer\"]):has(>[class*=\"footer\"])>:not(footer):not([id*=\"footer\"]):not([class*=\"footer\"]):not(header):not([id*=\"header\"]):not([class*=\"header\"]):not(menu):not([id*=\"menu\"]):not([class*=\"menu\"]):not(nav):not([id*=\"nav\"]):not([class*=\"nav\"]):not(script):not(noscript):not(style):not(:has(script)):not(:has(noscript)):not(:has(style))",
// // ]
// let elms  :any[]= await trySelectors_any_all(page,ttt[0])
// for(const elm of elms){
//     console.log(await elm.evaluate((e)=>e.textContent))
// }

// let rr = await Promise.all(elms.map((elm)=> elm.evaluate((e)=>e.outerHTML) ))
// rr.map((r)=>console.log(r))
// let idx = 0 
// for (const selecs of ttt.slice(1)) {
//     elms = await  Promise.all(elms.map((_elm)=>trySelectors_any_all(_elm,selecs)))
//     elms = elms.flat(Infinity).filter((e)=>Array.isArray(e) ? e.length > 0 : e)
//     if(idx == 0 || idx == 1) {
//         let text = ""
//         console.log("elms ",await elms[0].evaluate((e)=>e.outerHTML) )
//         for(const elm of elms){
//             text += await  elm.evaluate((_elm)=>{
//                 let _text = '';
//                 for (const node of _elm.childNodes) {
//                     if (node.nodeType === Node.TEXT_NODE) {
//                     _text += node.textContent
//                     }
//                 }
//                 return _text.trim();
//             })
//         }
//         console.log("text ",text)
//     }
//     idx++
// }

// await closeBrowsers()

/*const txts_body = await Promise.all(elms_body.map((elm_body)=> (page as any).evaluate((e)=>{
    let text = '';
    for (const node of e.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
          text += node.textContent
        }
      }
      return text.trim();
},elm_body)))

const txt_body = txts_body.join("").replace(/\s+/g, ' ').trim()
await closeBrowsers()


import { MongoClient } from "mongodb";

const mongo_base_url = _getMongoDBClusterKOBUrl()
const mongo_url = mongo_base_url + "/?" + _getMongoDBClusterKOBSuffix()

//windows-1252
//UTF-8
//write to file in utf8
const client = new MongoClient(mongo_url);
const database = client.db("database0x0000000000000000");
const haiku = database.collection("tet");


const doc = {
    text: txt_body,
}
// Insert the defined document into the "haiku" collection
const result = await haiku.insertOne(doc);

console.log( `A document was inserted with the _id: ${result.insertedId}` );

fs.writeFileSync("txt_body.txt",txt_body,{encoding:"utf8"})

await client.close();


*/