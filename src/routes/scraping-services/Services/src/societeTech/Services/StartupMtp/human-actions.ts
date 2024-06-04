import { idRoutes_societeTech, serviceName_societeTech, t_serviceName_societeTech } from "@/controller/scraping-services/Services/Config/societeTech/config.js";

export const str_startupMtp = idRoutes_societeTech[3] 
export type t_str_startupMtp = typeof str_startupMtp

export const str_StartupMtp = "startupMtp" as const //majFirstChar(str_startupMtp)
export type t_str_StartupMtp = typeof str_StartupMtp

import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";
import { getNameModuleScraping } from "@/utils/scraping/primitives/name.js";

const name_module :string = getNameModuleScraping(serviceName_societeTech,str_startupMtp)
const debug_scrapL_startupMtp :Debugger  = debug(name_module)

import { AService } from "@/routes/scraping-services/class/Services/AService.js";
import { AHA_Service, t_AHA_Service_ArgsGetTree, t_AHA_Service_Param, t_AHA_Service_ParamGetTree, t_IAHA_Service, t_ha_res} from "@/routes/scraping-services/class/Config/Pipeline/HA/Pipeline.js";
import { hours, time } from "@shared/hours.js";
import { waitForSocieteTechPageLoading, waitForSocieteTechPageFullLoading } from "../utils/selector.js";
import { t_unionIdPath_mapRegex_societeTech_startupMtp, t_arrClassName_startupMtp, t_unionClassName_startupMtp, t_arrChilds_startupMtp, t_unionRegex_mapRegex_societeTech_startupMtp, t_IJsonComponent_startupMtp, id_item, id_field, fct_shorthand_regex} from "@/routes/scraping-services/Data/societeTech/Services/StartupMtp/StartupMtp.js";
import { root_startupMtpPage_child_selectors, t_societeTech_startupMtp_rootClassName } from "@/routes/scraping-services/Data/societeTech/Services/StartupMtp/types.js";
import { req_startupMtp, res_startupMtp } from "./routes.input.js";
import { IsUnion, NestedArray, PopUnion, arrToUnion, reshapeObject} from "@shared/type.js";
import { ReqAndResType, t_getReq, t_getRes } from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";
import { rootClassName, t_arr_component, t_concatRouteNameClassName, t_removeConcatRouteNameClassName, t_rootClassName } from "@/utils/scraping/PageParsing/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _isNullOrUndefined } from "@shared/m_primitives.js";
import { BrowsersPool, getBrowsers } from "@/utils/browser/BrowsersPool.js";
import { deepCloneJson, deepCloneJsonIfIsObject } from "@shared/m_json.js";
import { getUrlToScrapItem, str_getLocalFunction, str_getServiceFunction, t_str_getServiceFunction } from "@/routes/scraping-services/class/Config/Pipeline/HA/types.js";
import { IJson, isEmptyJson, isNotEmptyJson, s_getProp, t_getAllMethodsOfObject } from "@shared/m_object.js";
import { date_field, item_field, pagination_field, t_union_required_field } from "@shared/m_regexMapping.js";
import regex_url, { t_regex_url_fctEmbeds } from "@shared/validate-url/regexp.js";
import { EmbeddingPASGroup, embedCapturingGroupStrOrRegex } from "@shared/m_regex_prefixAndSuffix.js";
import { getBodyUrlAndParamsReq, joinEndParamUrlIfNotEmpty } from "@shared/validate-url/functions.js";
import { joinBegParamUrl, joinReqUrl } from "@shared/validate-url/types.js";
import { mergeSaved } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { convertToArray, isStrictArray } from "@shared/m_array.js";
import { df_arr_fct_name_withSavePage, t_df_arr_fct_name_withSavePage } from "@/routes/scraping-services/class/Config/Pipeline/config_save.js";
import { majFirstChar } from "@shared/m_string.js";

type t_args_getTree < BaseElement extends t_unionClassName_startupMtp=t_rootClassName>= t_AHA_Service_ArgsGetTree<t_serviceName_societeTech,t_str_startupMtp ,BaseElement,t_unionRegex_mapRegex_societeTech_startupMtp ,t_unionIdPath_mapRegex_societeTech_startupMtp , t_arrClassName_startupMtp,t_unionClassName_startupMtp ,t_arrChilds_startupMtp ,  t_IJsonComponent_startupMtp>


type t_1 = t_unionRegex_mapRegex_societeTech_startupMtp
type t_2 = t_unionIdPath_mapRegex_societeTech_startupMtp
type t_3 = readonly[ t_rootClassName , ...readonly (Exclude<t_arrClassName_startupMtp[number],t_rootClassName>)[]]
type t_4 = t_unionClassName_startupMtp
type t_5 =   readonly (t_arrChilds_startupMtp[number])[]
type t_6 =  {[k in keyof t_IJsonComponent_startupMtp ]: t_IJsonComponent_startupMtp[k]}

//TODO-IMP replace AHA_Service<req_startupMtp,res_startupMtp,t_unionRegex_mapRegex_societeTech_startupMtp ,t_unionIdPath_mapRegex_societeTech_startupMtp , t_arrClassName_startupMtp,t_unionClassName_startupMtp ,t_arrChilds_startupMtp ,  t_IJsonComponent_startupMtp,t_df_arr_fct_name_withSavePage> by AHA_Service_SocieteTech<t_str_startupMtp>
// associate with SocieteTechRoutes[t_str_startupMtp]

//TODO-IMP req and res != req_startupMtp and res_startupMtp but req_startupMtp.toJson()

//TODO function cannot return undefined as value 
class HA_SocieteTechServiceStartupMtp  extends  AHA_Service<t_serviceName_societeTech,t_str_startupMtp,req_startupMtp,res_startupMtp,t_unionRegex_mapRegex_societeTech_startupMtp ,t_unionIdPath_mapRegex_societeTech_startupMtp , t_arrClassName_startupMtp,t_unionClassName_startupMtp ,t_arrChilds_startupMtp ,  t_IJsonComponent_startupMtp,t_df_arr_fct_name_withSavePage>  implements t_IAHA_Service<t_serviceName_societeTech,t_str_startupMtp,req_startupMtp,res_startupMtp,t_unionRegex_mapRegex_societeTech_startupMtp ,t_unionIdPath_mapRegex_societeTech_startupMtp , t_arrClassName_startupMtp,t_unionClassName_startupMtp ,t_arrChilds_startupMtp ,  t_IJsonComponent_startupMtp,t_df_arr_fct_name_withSavePage >{

    serviceName: t_serviceName_societeTech  = serviceName_societeTech
    routeName : t_str_startupMtp = str_startupMtp 
    constructor() {
        super()
    }

    [str_getLocalFunction]( req:req_startupMtp , res : res_startupMtp  ): t_ha_res {
        return AService.df_localFunction()
    }

    static getDfArgsGetTree :()=> t_args_getTree = ()=>{ /*console.log("DEBUG_ME",getCurrentLine());*/return {
        params:{
            serviceName : serviceName_societeTech,
            routeName:str_startupMtp,
            prop_base_selectors:root_startupMtpPage_child_selectors,
            prop_base:rootClassName
        },
        fct_loading:{
            waitForPageLoading:waitForSocieteTechPageLoading,
            waitForPageFullLoading:waitForSocieteTechPageFullLoading,
        }

    }}

   
    getServiceParam (req:req_startupMtp , res : res_startupMtp):t_AHA_Service_Param<t_serviceName_societeTech,t_str_startupMtp>{
        return AHA_Service.getServiceParam<t_serviceName_societeTech,t_str_startupMtp,req_startupMtp,res_startupMtp>(req,res)
    }

    getTreeParam< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_startupMtp , res : res_startupMtp,_args:reshapeObject< t_AHA_Service_ArgsGetTree<t_serviceName_societeTech,t_str_startupMtp,BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ):Parameters<typeof AHA_Service._getTree<t_serviceName_societeTech,t_str_startupMtp,BaseElement,  t_unionRegex_mapRegex_societeTech_startupMtp ,t_unionIdPath_mapRegex_societeTech_startupMtp , t_arrClassName_startupMtp,t_unionClassName_startupMtp ,t_arrChilds_startupMtp ,  t_IJsonComponent_startupMtp>> { 
        //{scrapingComponent:ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,waitForPageLoading:t_page_fct_getMainComponent,waitForPageFullLoading:t_page_fct_waitForPageFullLoading,prop_base_selectors:selectors,prop_base:unionClassNameType}

        const args = {
            ...HA_SocieteTechServiceStartupMtp.getDfArgsGetTree(),
            ..._args
        } as t_args_getTree<BaseElement>

        const param :t_AHA_Service_ParamGetTree<t_serviceName_societeTech,t_str_startupMtp, BaseElement, t_unionRegex_mapRegex_societeTech_startupMtp ,t_unionIdPath_mapRegex_societeTech_startupMtp , t_arrClassName_startupMtp,t_unionClassName_startupMtp ,t_arrChilds_startupMtp ,  t_IJsonComponent_startupMtp> = {
            ...this.getServiceParam(req,res),
            ...args.params
        }
        const fct_loading = {
            ...args.fct_loading
        }

        return [param,fct_loading]
    }

    getTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_startupMtp , res : res_startupMtp,_args:reshapeObject< t_AHA_Service_ArgsGetTree<t_serviceName_societeTech,t_str_startupMtp, BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        const params = this.getTreeParam(req,res,_args)
        console.log("STARTUP MTP")
        return AHA_Service._getTree<t_serviceName_societeTech, t_str_startupMtp,  BaseElement,t_unionRegex_mapRegex_societeTech_startupMtp ,t_unionIdPath_mapRegex_societeTech_startupMtp , t_arrClassName_startupMtp,t_unionClassName_startupMtp ,t_arrChilds_startupMtp ,  t_IJsonComponent_startupMtp>(...params)
    }

    async [str_getServiceFunction]  (req:req_startupMtp , res : res_startupMtp): t_ha_res{
        const url_toScrap =  req.header.url_toScrap || req.header.url  //A FAIRE : extract
        const mpage = await getBrowsers().then((brwsrsP:BrowsersPool)=>brwsrsP.getMPageFromTargetIdx(req.body.browserId,req.body.targetId))
        const scrapingComponent  = mpage.getScrapingComponent()
        let json = null
        let _date = null
        const max_retry = 4
        let retry = 0
        while(retry < max_retry && isEmptyJson(json)){
            console.log("RETRY",retry)
            try {
                const tree = await this.getTree<t_societeTech_startupMtp_rootClassName,t_unionRegex_mapRegex_societeTech_startupMtp ,t_unionIdPath_mapRegex_societeTech_startupMtp , t_arrClassName_startupMtp,t_unionClassName_startupMtp ,t_arrChilds_startupMtp ,  t_IJsonComponent_startupMtp>(req,res)
                 _date = hours.getTimeNow()
                json = tree.getJsonValue(scrapingComponent.getMapPathPatternToId())
                json = {...json?.res_childs||{},...req.body.fk} as any
            }
            catch(e){
                json = null
                await time.timer(retry*1500)
                retry++
            }
        }
        if(retry === max_retry) {
            console.log("Cannot ERROR")
            throw new Error("Cannot get json")
        }
        return {[url_toScrap]:json,[date_field]:_date}
    }
   

    transformAfterGetServiceFunction(req:req_startupMtp , res : res_startupMtp, _json:Awaited<ReturnType< typeof HA_SocieteTechServiceStartupMtp.provider[t_str_getServiceFunction]>> )  { /*console.log("DEBUG_ME",getCurrentLine());*/

        const url_toScrap = req.header.url_toScrap || req.header.url
        let json = AHA_Service.embedItems(_json,url_toScrap)
        let json_item = json
        json_item = Object.keys(json_item).reduce((acc:any,curr_key:any)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            let curr_json = json_item[curr_key]

            let startupMtpLink = null 
            if(curr_json.hasOwnProperty("StartupMtpLink")){
                let arr_website = isStrictArray(curr_json["StartupMtpLink"]) ? curr_json["StartupMtpLink"] : [{StartupMtpLink:curr_json["StartupMtpLink"],StartupMtpLink_href:curr_json["StartupMtpLink_href"]}]
                const regStr = fct_shorthand_regex(`Site Internet`)
                for(const website of arr_website){
                    if(website["StartupMtpLink"].match(new RegExp(regStr)) ) {
                        startupMtpLink = {...website}
                        break
                    }
                }
            }
            delete curr_json["StartupMtpLink"]
            //curr_json["StartupMtpLink"] = startupMtpLink
            curr_json["StartupMtpLink_href"] = startupMtpLink["StartupMtpLink_href"]

            acc[curr_key] = curr_json
            return acc
        },{})
        
        json = json_item
        res.body.result[url_toScrap] = {...res.body?.result?.[url_toScrap] || {},...json}
        return [req,res]as ReqAndResType<req_startupMtp , res_startupMtp>

    }

    async save_serviceFunction ( req:req_startupMtp , res : res_startupMtp  )  { /*console.log("DEBUG_ME",getCurrentLine());*/
            if(!req.header.isStreaming){ /*console.log("DEBUG_ME",getCurrentLine());*/

                const prismaClient = this.getDatabaseLocalAndRemote()[AService.getPropsDBFromHeader(req)].getConnection()

                let result : Awaited<ReturnType< typeof HA_SocieteTechServiceStartupMtp.provider[t_str_getServiceFunction]>> = res.body.result
                const url_toScrap = req.header.url_toScrap || req.header.url
                if(AService.isValidResult(result[url_toScrap])) {
                    result = deepCloneJson(result[url_toScrap])
                    type TSample = (IJson & {[id_field]:string} & {[date_field]:string})
                    const rows :TSample[] = Object.values(result)//.map((row)=>applyFctToObjectKeys(row,(k:string)=>k.replace(/^StartupMtp/,"")))

                    const param = AHA_Service.getSavePageParam(prismaClient , str_startupMtp ,id_field, date_field , rows ,res.body.fk, req.header.needUpdate )
                    res.body.saved = mergeSaved(res.body.saved,await AHA_Service._save_serviceFunction(param))
                }   
            }    
    }

    namesOfPipelineFunction(){
        return [...df_arr_fct_name_withSavePage] as const 
    }

    static provider = new HA_SocieteTechServiceStartupMtp()


}

export default HA_SocieteTechServiceStartupMtp.provider
