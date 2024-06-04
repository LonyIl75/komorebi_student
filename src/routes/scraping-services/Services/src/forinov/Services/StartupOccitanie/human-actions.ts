import { idRoutes_forinov, serviceName_forinov, t_serviceName_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js";

export const str_startupOccitanie = idRoutes_forinov[3] 
export type t_str_startupOccitanie = typeof str_startupOccitanie

export const str_StartupOccitanie = "StartupOccitanie" as const
export type t_str_StartupOccitanie = typeof str_StartupOccitanie

import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";
import { getNameModuleScraping } from "@/utils/scraping/primitives/name.js";

const name_module :string = getNameModuleScraping(serviceName_forinov,str_startupOccitanie)
const debug_scrapL_startupOccitanie :Debugger  = debug(name_module)

import { AService } from "@/routes/scraping-services/class/Services/AService.js";
import { AHA_Service, t_AHA_Service_ArgsGetTree, t_AHA_Service_Param, t_AHA_Service_ParamGetTree, t_IAHA_Service, t_ha_res} from "@/routes/scraping-services/class/Config/Pipeline/HA/Pipeline.js";
import { hours, time } from "@shared/hours.js";
import { waitForForinovPageLoading, waitForForinovPageFullLoading } from "../utils/selector.js";
import { t_unionIdPath_mapRegex_forinov_startupOccitanie, t_arrClassName_startupOccitanie, t_unionClassName_startupOccitanie, t_arrChilds_startupOccitanie, t_unionRegex_mapRegex_forinov_startupOccitanie, t_IJsonComponent_startupOccitanie, id_field} from "@/routes/scraping-services/Data/forinov/Services/StartupOccitanie/StartupOccitanie.js";
import { root_startupOccitaniePage_child_selectors, t_forinov_startupOccitanie_rootClassName } from "@/routes/scraping-services/Data/forinov/Services/StartupOccitanie/types.js";
import { req_startupOccitanie, res_startupOccitanie } from "./routes.input.js";
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
import { getBodyUrlAndParamsReq, joinEndParamUrlIfNotEmpty, joinGetProtocolAndDomain } from "@shared/validate-url/functions.js";
import { joinBegParamUrl, joinReqUrl } from "@shared/validate-url/types.js";
import { mergeSaved } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { convertToArray } from "@shared/m_array.js";
import { df_arr_fct_name_withSavePage, t_df_arr_fct_name_withSavePage } from "@/routes/scraping-services/class/Config/Pipeline/config_save.js";
import { join_pathRoutes } from "@shared/routePath.js";

type t_args_getTree < BaseElement extends t_unionClassName_startupOccitanie=t_rootClassName>= t_AHA_Service_ArgsGetTree<t_serviceName_forinov,t_str_startupOccitanie ,BaseElement,t_unionRegex_mapRegex_forinov_startupOccitanie ,t_unionIdPath_mapRegex_forinov_startupOccitanie , t_arrClassName_startupOccitanie,t_unionClassName_startupOccitanie ,t_arrChilds_startupOccitanie ,  t_IJsonComponent_startupOccitanie>


type t_1 = t_unionRegex_mapRegex_forinov_startupOccitanie
type t_2 = t_unionIdPath_mapRegex_forinov_startupOccitanie
type t_3 = readonly[ t_rootClassName , ...readonly (Exclude<t_arrClassName_startupOccitanie[number],t_rootClassName>)[]]
type t_4 = t_unionClassName_startupOccitanie
type t_5 =   readonly (t_arrChilds_startupOccitanie[number])[]
type t_6 =  {[k in keyof t_IJsonComponent_startupOccitanie ]: t_IJsonComponent_startupOccitanie[k]}

//TODO-IMP replace AHA_Service<req_startupOccitanie,res_startupOccitanie,t_unionRegex_mapRegex_forinov_startupOccitanie ,t_unionIdPath_mapRegex_forinov_startupOccitanie , t_arrClassName_startupOccitanie,t_unionClassName_startupOccitanie ,t_arrChilds_startupOccitanie ,  t_IJsonComponent_startupOccitanie,t_df_arr_fct_name_withNextPage> by AHA_Service_Forinov<t_str_startupOccitanie>
// associate with ForinovRoutes[t_str_startupOccitanie]

//TODO-IMP req and res != req_startupOccitanie and res_startupOccitanie but req_startupOccitanie.toJson()

//TODO function cannot return undefined as value 
class HA_ForinovServiceStartupOccitanie  extends  AHA_Service<t_serviceName_forinov,t_str_startupOccitanie,req_startupOccitanie,res_startupOccitanie,t_unionRegex_mapRegex_forinov_startupOccitanie ,t_unionIdPath_mapRegex_forinov_startupOccitanie , t_arrClassName_startupOccitanie,t_unionClassName_startupOccitanie ,t_arrChilds_startupOccitanie ,  t_IJsonComponent_startupOccitanie,t_df_arr_fct_name_withSavePage>  implements t_IAHA_Service<t_serviceName_forinov,t_str_startupOccitanie,req_startupOccitanie,res_startupOccitanie,t_unionRegex_mapRegex_forinov_startupOccitanie ,t_unionIdPath_mapRegex_forinov_startupOccitanie , t_arrClassName_startupOccitanie,t_unionClassName_startupOccitanie ,t_arrChilds_startupOccitanie ,  t_IJsonComponent_startupOccitanie,t_df_arr_fct_name_withSavePage >{

    serviceName: t_serviceName_forinov  = serviceName_forinov
    routeName : t_str_startupOccitanie = str_startupOccitanie 
    constructor() {
        super()
    }

    [str_getLocalFunction]( req:req_startupOccitanie , res : res_startupOccitanie  ): t_ha_res {
        return AService.df_localFunction()
    }

    static getDfArgsGetTree :()=> t_args_getTree = ()=>{ /*console.log("DEBUG_ME",getCurrentLine());*/return {
        params:{
            serviceName : serviceName_forinov,
            routeName:str_startupOccitanie,
            prop_base_selectors:root_startupOccitaniePage_child_selectors,
            prop_base:rootClassName
        },
        fct_loading:{
            waitForPageLoading:waitForForinovPageLoading,
            waitForPageFullLoading:waitForForinovPageFullLoading,
        }

    }}

    getNextPageParam(req:req_startupOccitanie , res : res_startupOccitanie){ /*console.log("DEBUG_ME",getCurrentLine());*/
        return AHA_Service.getNextPageParam<t_serviceName_forinov,t_str_startupOccitanie,req_startupOccitanie,res_startupOccitanie>(req,res)
    }

    getServiceParam (req:req_startupOccitanie , res : res_startupOccitanie):t_AHA_Service_Param<t_serviceName_forinov,t_str_startupOccitanie>{
        return AHA_Service.getServiceParam<t_serviceName_forinov,t_str_startupOccitanie,req_startupOccitanie,res_startupOccitanie>(req,res)
    }

    getTreeParam< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_startupOccitanie , res : res_startupOccitanie,_args:reshapeObject< t_AHA_Service_ArgsGetTree<t_serviceName_forinov,t_str_startupOccitanie,BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ):Parameters<typeof AHA_Service._getTree<t_serviceName_forinov,t_str_startupOccitanie,BaseElement,  t_unionRegex_mapRegex_forinov_startupOccitanie ,t_unionIdPath_mapRegex_forinov_startupOccitanie , t_arrClassName_startupOccitanie,t_unionClassName_startupOccitanie ,t_arrChilds_startupOccitanie ,  t_IJsonComponent_startupOccitanie>> { 
        //{scrapingComponent:ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,waitForPageLoading:t_page_fct_getMainComponent,waitForPageFullLoading:t_page_fct_waitForPageFullLoading,prop_base_selectors:selectors,prop_base:unionClassNameType}

        const args = {
            ...HA_ForinovServiceStartupOccitanie.getDfArgsGetTree(),
            ..._args
        } as t_args_getTree<BaseElement>

        const param :t_AHA_Service_ParamGetTree<t_serviceName_forinov,t_str_startupOccitanie, BaseElement, t_unionRegex_mapRegex_forinov_startupOccitanie ,t_unionIdPath_mapRegex_forinov_startupOccitanie , t_arrClassName_startupOccitanie,t_unionClassName_startupOccitanie ,t_arrChilds_startupOccitanie ,  t_IJsonComponent_startupOccitanie> = {
            ...this.getServiceParam(req,res),
            ...args.params
        }
        const fct_loading = {
            ...args.fct_loading
        }

        return [param,fct_loading]
    }

    getTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_startupOccitanie , res : res_startupOccitanie,_args:reshapeObject< t_AHA_Service_ArgsGetTree<t_serviceName_forinov,t_str_startupOccitanie, BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        const params = this.getTreeParam(req,res,_args)
        console.log("STARTUPS MTP")
        return AHA_Service._getTree<t_serviceName_forinov, t_str_startupOccitanie,  BaseElement,t_unionRegex_mapRegex_forinov_startupOccitanie ,t_unionIdPath_mapRegex_forinov_startupOccitanie , t_arrClassName_startupOccitanie,t_unionClassName_startupOccitanie ,t_arrChilds_startupOccitanie ,  t_IJsonComponent_startupOccitanie>(...params)
    }

    async [str_getServiceFunction]  (req:req_startupOccitanie , res : res_startupOccitanie): t_ha_res{
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
                const tree = await this.getTree<t_forinov_startupOccitanie_rootClassName,t_unionRegex_mapRegex_forinov_startupOccitanie ,t_unionIdPath_mapRegex_forinov_startupOccitanie , t_arrClassName_startupOccitanie,t_unionClassName_startupOccitanie ,t_arrChilds_startupOccitanie ,  t_IJsonComponent_startupOccitanie>(req,res)
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
   

    transformAfterGetServiceFunction(req:req_startupOccitanie , res : res_startupOccitanie, _json:Awaited<ReturnType< typeof HA_ForinovServiceStartupOccitanie.provider[t_str_getServiceFunction]>> )  { /*console.log("DEBUG_ME",getCurrentLine());*/

        const url_toScrap = req.header.url_toScrap || req.header.url
        let json = AHA_Service.embedItems(_json,url_toScrap)
        let json_item = json
        json_item = Object.keys(json_item).reduce((acc:any,curr_key:any)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            let curr_json = json_item[curr_key]
            
            acc[curr_key] = curr_json
            return acc
        },{})
        json = json_item
        res.body.result[url_toScrap] = {...res.body?.result?.[url_toScrap] || {},...json}
        return [req,res]as ReqAndResType<req_startupOccitanie , res_startupOccitanie>

    }

    async save_serviceFunction ( req:req_startupOccitanie , res : res_startupOccitanie  )  { /*console.log("DEBUG_ME",getCurrentLine());*/
            if(!req.header.isStreaming){ /*console.log("DEBUG_ME",getCurrentLine());*/

                const prismaClient = this.getDatabaseLocalAndRemote()[AService.getPropsDBFromHeader(req)].getConnection()

                let result : Awaited<ReturnType< typeof HA_ForinovServiceStartupOccitanie.provider[t_str_getServiceFunction]>> = res.body.result
                const url_toScrap = req.header.url_toScrap || req.header.url
                if(AService.isValidResult(result[url_toScrap])) {
                    result = deepCloneJson(result[url_toScrap])
                    type TSample = (IJson & {[id_field]:string} & {[date_field]:string})
                    const rows :TSample[] = Object.values(result)//.map((row)=>applyFctToObjectKeys(row,(k:string)=>k.replace(/^StartupOccitanie/,"")))

                    const param = AHA_Service.getSavePageParam(prismaClient , str_startupOccitanie ,id_field, date_field , rows ,res.body.fk, req.header.needUpdate )
                    res.body.saved = mergeSaved(res.body.saved,await AHA_Service._save_serviceFunction(param))
                }   
            }    
    }

    namesOfPipelineFunction(){
        return [...df_arr_fct_name_withSavePage] as const 
    }



    static provider = new HA_ForinovServiceStartupOccitanie()


}

export default HA_ForinovServiceStartupOccitanie.provider
