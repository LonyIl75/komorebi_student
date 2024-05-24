import { idRoutes_lespepitestech, serviceName_lespepitestech, t_serviceName_lespepitestech } from "@/controller/scraping-services/Services/Config/lespepitestech/config.js";

export const str_startupsMtp = idRoutes_lespepitestech[2] 
export type t_str_startupsMtp = typeof str_startupsMtp

export const str_StartupsMtp = "StartupsMtp" as const
export type t_str_StartupsMtp = typeof str_StartupsMtp

import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";
import { getNameModuleScraping } from "@/utils/scraping/primitives/name.js";

const name_module :string = getNameModuleScraping(serviceName_lespepitestech,str_startupsMtp)
const debug_scrapL_startupsMtp :Debugger  = debug(name_module)

import { AService } from "@/routes/scraping-services/class/Services/AService.js";
import { AHA_Service, t_AHA_Service_ArgsGetTree, t_AHA_Service_Param, t_AHA_Service_ParamGetTree, t_IAHA_Service, t_ha_res} from "@/routes/scraping-services/class/Config/Pipeline/HA/Pipeline.js";
import { hours, time } from "@shared/hours.js";
import { waitForLespepitestechPageLoading, waitForLespepitestechPageFullLoading } from "../utils/selector.js";
import { t_unionIdPath_mapRegex_lespepitestech_startupsMtp, t_arrClassName_startupsMtp, t_unionClassName_startupsMtp, t_arrChilds_startupsMtp, t_unionRegex_mapRegex_lespepitestech_startupsMtp, t_IJsonComponent_startupsMtp, id_field, id_item} from "@/routes/scraping-services/Data/lespepitestech/Services/StartupsMtp/StartupsMtp.js";
import { root_startupsMtpPage_child_selectors, t_lespepitestech_startupsMtp_rootClassName } from "@/routes/scraping-services/Data/lespepitestech/Services/StartupsMtp/types.js";
import { req_startupsMtp, res_startupsMtp } from "./routes.input.js";
import { IsUnion, NestedArray, PopUnion, arrToUnion, reshapeObject} from "@shared/type.js";
import { ReqAndResType, t_getReq, t_getRes } from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";
import { rootClassName, t_arr_component, t_concatRouteNameClassName, t_removeConcatRouteNameClassName, t_rootClassName } from "@/utils/scraping/PageParsing/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _isNullOrUndefined } from "@shared/m_primitives.js";
import { BrowsersPool, getBrowsers } from "@/utils/browser/BrowsersPool.js";
import { deepCloneJson, deepCloneJsonIfIsObject } from "@shared/m_json.js";
import { t_df_arr_fct_name_withNextPage, df_arr_fct_name_withNextPage } from "@/routes/scraping-services/class/Config/Pipeline/config_actionNext.js";
import { getUrlToScrapItem, str_getLocalFunction, str_getServiceFunction, t_str_getNextPage, t_str_getServiceFunction, t_str_nextPage } from "@/routes/scraping-services/class/Config/Pipeline/HA/types.js";
import { IJson, isEmptyJson, isNotEmptyJson, s_getProp, t_getAllMethodsOfObject } from "@shared/m_object.js";
import { date_field, item_field, pagination_field, t_union_required_field } from "@shared/m_regexMapping.js";
import regex_url, { t_regex_url_fctEmbeds } from "@shared/validate-url/regexp.js";
import { EmbeddingPASGroup, embedCapturingGroupStrOrRegex } from "@shared/m_regex_prefixAndSuffix.js";
import { getBodyUrlAndParamsReq, joinEndParamUrlIfNotEmpty } from "@shared/validate-url/functions.js";
import { joinBegParamUrl, joinReqUrl } from "@shared/validate-url/types.js";
import { mergeSaved } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { convertToArray } from "@shared/m_array.js";

type t_args_getTree < BaseElement extends t_unionClassName_startupsMtp=t_rootClassName>= t_AHA_Service_ArgsGetTree<t_serviceName_lespepitestech,t_str_startupsMtp ,BaseElement,t_unionRegex_mapRegex_lespepitestech_startupsMtp ,t_unionIdPath_mapRegex_lespepitestech_startupsMtp , t_arrClassName_startupsMtp,t_unionClassName_startupsMtp ,t_arrChilds_startupsMtp ,  t_IJsonComponent_startupsMtp>


type t_1 = t_unionRegex_mapRegex_lespepitestech_startupsMtp
type t_2 = t_unionIdPath_mapRegex_lespepitestech_startupsMtp
type t_3 = readonly[ t_rootClassName , ...readonly (Exclude<t_arrClassName_startupsMtp[number],t_rootClassName>)[]]
type t_4 = t_unionClassName_startupsMtp
type t_5 =   readonly (t_arrChilds_startupsMtp[number])[]
type t_6 =  {[k in keyof t_IJsonComponent_startupsMtp ]: t_IJsonComponent_startupsMtp[k]}

//TODO-IMP replace AHA_Service<req_startupsMtp,res_startupsMtp,t_unionRegex_mapRegex_lespepitestech_startupsMtp ,t_unionIdPath_mapRegex_lespepitestech_startupsMtp , t_arrClassName_startupsMtp,t_unionClassName_startupsMtp ,t_arrChilds_startupsMtp ,  t_IJsonComponent_startupsMtp,t_df_arr_fct_name_withNextPage> by AHA_Service_Lespepitestech<t_str_startupsMtp>
// associate with LespepitestechRoutes[t_str_startupsMtp]

//TODO-IMP req and res != req_startupsMtp and res_startupsMtp but req_startupsMtp.toJson()

//TODO function cannot return undefined as value 
class HA_LespepitestechServiceStartupsMtp  extends  AHA_Service<t_serviceName_lespepitestech,t_str_startupsMtp,req_startupsMtp,res_startupsMtp,t_unionRegex_mapRegex_lespepitestech_startupsMtp ,t_unionIdPath_mapRegex_lespepitestech_startupsMtp , t_arrClassName_startupsMtp,t_unionClassName_startupsMtp ,t_arrChilds_startupsMtp ,  t_IJsonComponent_startupsMtp,t_df_arr_fct_name_withNextPage>  implements t_IAHA_Service<t_serviceName_lespepitestech,t_str_startupsMtp,req_startupsMtp,res_startupsMtp,t_unionRegex_mapRegex_lespepitestech_startupsMtp ,t_unionIdPath_mapRegex_lespepitestech_startupsMtp , t_arrClassName_startupsMtp,t_unionClassName_startupsMtp ,t_arrChilds_startupsMtp ,  t_IJsonComponent_startupsMtp,t_df_arr_fct_name_withNextPage >{

    serviceName: t_serviceName_lespepitestech  = serviceName_lespepitestech
    routeName : t_str_startupsMtp = str_startupsMtp 
    constructor() {
        super()
    }

    async getNextPage(req:req_startupsMtp , res : res_startupsMtp): t_ha_res{

        return AHA_Service._getNextPage <t_serviceName_lespepitestech,t_str_startupsMtp, t_concatRouteNameClassName<t_str_startupsMtp,t_rootClassName>  ,t_unionRegex_mapRegex_lespepitestech_startupsMtp ,t_unionIdPath_mapRegex_lespepitestech_startupsMtp , t_arrClassName_startupsMtp,t_unionClassName_startupsMtp ,t_arrChilds_startupsMtp ,  t_IJsonComponent_startupsMtp>(
        ...this.getTreeParam<t_lespepitestech_startupsMtp_rootClassName,  t_unionRegex_mapRegex_lespepitestech_startupsMtp ,t_unionIdPath_mapRegex_lespepitestech_startupsMtp , t_arrClassName_startupsMtp,t_unionClassName_startupsMtp ,t_arrChilds_startupsMtp ,  t_IJsonComponent_startupsMtp>(req,res))

    }

    [str_getLocalFunction]( req:req_startupsMtp , res : res_startupsMtp  ): t_ha_res {
        return AService.df_localFunction()
    }

    static getDfArgsGetTree :()=> t_args_getTree = ()=>{ /*console.log("DEBUG_ME",getCurrentLine());*/return {
        params:{
            serviceName : serviceName_lespepitestech,
            routeName:str_startupsMtp,
            prop_base_selectors:root_startupsMtpPage_child_selectors,
            prop_base:rootClassName
        },
        fct_loading:{
            waitForPageLoading:waitForLespepitestechPageLoading,
            waitForPageFullLoading:waitForLespepitestechPageFullLoading,
        }

    }}

    getNextPageParam(req:req_startupsMtp , res : res_startupsMtp){ /*console.log("DEBUG_ME",getCurrentLine());*/
        return AHA_Service.getNextPageParam<t_serviceName_lespepitestech,t_str_startupsMtp,req_startupsMtp,res_startupsMtp>(req,res)
    }

    getServiceParam (req:req_startupsMtp , res : res_startupsMtp):t_AHA_Service_Param<t_serviceName_lespepitestech,t_str_startupsMtp>{
        return AHA_Service.getServiceParam<t_serviceName_lespepitestech,t_str_startupsMtp,req_startupsMtp,res_startupsMtp>(req,res)
    }

    getTreeParam< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_startupsMtp , res : res_startupsMtp,_args:reshapeObject< t_AHA_Service_ArgsGetTree<t_serviceName_lespepitestech,t_str_startupsMtp,BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ):Parameters<typeof AHA_Service._getTree<t_serviceName_lespepitestech,t_str_startupsMtp,BaseElement,  t_unionRegex_mapRegex_lespepitestech_startupsMtp ,t_unionIdPath_mapRegex_lespepitestech_startupsMtp , t_arrClassName_startupsMtp,t_unionClassName_startupsMtp ,t_arrChilds_startupsMtp ,  t_IJsonComponent_startupsMtp>> { 
        //{scrapingComponent:ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,waitForPageLoading:t_page_fct_getMainComponent,waitForPageFullLoading:t_page_fct_waitForPageFullLoading,prop_base_selectors:selectors,prop_base:unionClassNameType}

        const args = {
            ...HA_LespepitestechServiceStartupsMtp.getDfArgsGetTree(),
            ..._args
        } as t_args_getTree<BaseElement>

        const param :t_AHA_Service_ParamGetTree<t_serviceName_lespepitestech,t_str_startupsMtp, BaseElement, t_unionRegex_mapRegex_lespepitestech_startupsMtp ,t_unionIdPath_mapRegex_lespepitestech_startupsMtp , t_arrClassName_startupsMtp,t_unionClassName_startupsMtp ,t_arrChilds_startupsMtp ,  t_IJsonComponent_startupsMtp> = {
            ...this.getServiceParam(req,res),
            ...args.params
        }
        const fct_loading = {
            ...args.fct_loading
        }

        return [param,fct_loading]
    }

    getTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_startupsMtp , res : res_startupsMtp,_args:reshapeObject< t_AHA_Service_ArgsGetTree<t_serviceName_lespepitestech,t_str_startupsMtp, BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        const params = this.getTreeParam(req,res,_args)
        console.log("STARTUPS MTP")
        return AHA_Service._getTree<t_serviceName_lespepitestech, t_str_startupsMtp,  BaseElement,t_unionRegex_mapRegex_lespepitestech_startupsMtp ,t_unionIdPath_mapRegex_lespepitestech_startupsMtp , t_arrClassName_startupsMtp,t_unionClassName_startupsMtp ,t_arrChilds_startupsMtp ,  t_IJsonComponent_startupsMtp>(...params)
    }

    async [str_getServiceFunction]  (req:req_startupsMtp , res : res_startupsMtp): t_ha_res{
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
                const tree = await this.getTree<t_lespepitestech_startupsMtp_rootClassName,t_unionRegex_mapRegex_lespepitestech_startupsMtp ,t_unionIdPath_mapRegex_lespepitestech_startupsMtp , t_arrClassName_startupsMtp,t_unionClassName_startupsMtp ,t_arrChilds_startupsMtp ,  t_IJsonComponent_startupsMtp>(req,res)
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
   

    transformAfterGetServiceFunction(req:req_startupsMtp , res : res_startupsMtp, _json:Awaited<ReturnType< typeof HA_LespepitestechServiceStartupsMtp.provider[t_str_getServiceFunction]>> )  { /*console.log("DEBUG_ME",getCurrentLine());*/

        const url_toScrap = req.header.url_toScrap || req.header.url
        let json = AHA_Service.embedItems(_json,url_toScrap,this.getIdRequiredField(item_field))
        let json_item = json[id_item]
        json_item = Object.keys(json_item).reduce((acc:any,curr_key:any)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            let curr_json = json_item[curr_key]
            if(curr_json.hasOwnProperty("StartupsMtpCategory")){
                curr_json = { ...curr_json, StartupsMtpItemCategory :  [{StartupsMtpCategory:curr_json["StartupsMtpCategory"]}]}
                delete curr_json["StartupsMtpCategory"]
            }
            else curr_json = { ...curr_json, StartupsMtpItemCategory : s_getProp(curr_json,"StartupsMtpItemCategory",[])}//?.map((_elm)=>_elm["StartupsMtpCategory"])||[]}
            acc[curr_key] = curr_json
            return acc
        },{})
        json[id_item] = json_item
        res.body.result[url_toScrap] = {...res.body?.result?.[url_toScrap] || {},...json}
        res.body.nexts=AHA_Service._bodyNextsJson(json,this.getIdRequiredField(pagination_field[0]),this.getIdRequiredField(pagination_field[1]))
        return [req,res]as ReqAndResType<req_startupsMtp , res_startupsMtp>

    }

    async save_serviceFunction ( req:req_startupsMtp , res : res_startupsMtp  )  { /*console.log("DEBUG_ME",getCurrentLine());*/
            if(!req.header.isStreaming){ /*console.log("DEBUG_ME",getCurrentLine());*/

                const prismaClient = this.getDatabaseLocalAndRemote()[AService.getPropsDBFromHeader(req)].getConnection()

                let result : Awaited<ReturnType< typeof HA_LespepitestechServiceStartupsMtp.provider[t_str_getServiceFunction]>> = res.body.result
                const url_toScrap = req.header.url_toScrap || req.header.url
                if(AService.isValidResult(result[url_toScrap])) {
                    result = deepCloneJson(result[url_toScrap])
                    type TSample = (IJson & {[id_field]:string} & {[date_field]:string})
                    const rows :TSample[] = Object.values(result[this.getIdRequiredField(item_field)])//.map((row)=>applyFctToObjectKeys(row,(k:string)=>k.replace(/^StartupsMtp/,"")))

                    const param = AHA_Service.getSavePageParam(prismaClient , str_startupsMtp ,id_field, date_field , rows ,res.body.fk, req.header.needUpdate )
                    res.body.saved = mergeSaved(res.body.saved,await AHA_Service._save_serviceFunction(param))
                }   
            }    
    }

    namesOfPipelineFunction(){
        return [...df_arr_fct_name_withNextPage] as const 
    }


    transformAfterGetNextPage(req:req_startupsMtp , res : res_startupsMtp, json:Awaited<ReturnType< typeof HA_LespepitestechServiceStartupsMtp.provider[t_str_getNextPage]>> )  { /*console.log("DEBUG_ME",getCurrentLine());*/

        const url_toScrap = req.header.url_toScrap || req.header.url
        res.body.nexts = AHA_Service._bodyNextsJson(json[url_toScrap],this.getIdRequiredField(pagination_field[0]),this.getIdRequiredField(pagination_field[1]))

        return [req,res]as ReqAndResType<req_startupsMtp , res_startupsMtp>
    }

    async nextPage(req:req_startupsMtp , res : res_startupsMtp )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        return AHA_Service._nextPage(this.getNextPageParam(req,res))

    }

    transformAfterNextPage(req:req_startupsMtp , res : res_startupsMtp, json:Awaited<ReturnType< typeof HA_LespepitestechServiceStartupsMtp.provider[t_str_nextPage]>> )  { /*console.log("DEBUG_ME",getCurrentLine());*/ 
        res.body.nexts = json.nexts 
        let new_req = deepCloneJson(req)
        new_req.header.url = json.url
        new_req.header.url_toScrap = json.url_toScrap
        return [new_req,res]as ReqAndResType<req_startupsMtp , res_startupsMtp>
    }


    static provider = new HA_LespepitestechServiceStartupsMtp()


}

export default HA_LespepitestechServiceStartupsMtp.provider
