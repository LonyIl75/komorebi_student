import { idRoutes_entreprise_, serviceName_entreprise_, t_serviceName_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js";

export const str_main = idRoutes_entreprise_[1]
export type t_str_main = typeof str_main

//REDO 
export const str_Main = majFirstChar(transformRootIdIfAny<t_str_main>(str_main))
export type t_str_Main = typeof str_Main

import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";
import { getNameModuleScraping } from "@/utils/scraping/primitives/name.js";

const name_module :string = getNameModuleScraping(serviceName_entreprise_,str_main)
const debug_scrapL_main :Debugger  = debug(name_module)

import { AService } from "@/routes/scraping-services/class/Services/AService.js";
import { AHA_Service, t_AHA_Service_ArgsGetTree, t_AHA_Service_Param, t_AHA_Service_ParamGetTree, t_IAHA_Service, t_ha_res} from "@/routes/scraping-services/class/Config/Pipeline/HA/Pipeline.js";
import { hours, time } from "@shared/hours.js";
import { waitForEntreprise_PageLoading, waitForEntreprise_PageFullLoading } from "../utils/selector.js";
import { t_unionIdPath_mapRegex_entreprise__main, t_arrClassName_main, t_unionClassName_main, t_arrChilds_main, t_unionRegex_mapRegex_entreprise__main, t_IJsonComponent_main, arr_classNameType_entreprise__main, t_union_socials, id_field} from "@/routes/scraping-services/Data/entreprise_/Services/Main/Main.js";
import { root_mainPage_child_selectors, t_entreprise__main_rootClassName } from "@/routes/scraping-services/Data/entreprise_/Services/Main/types.js";
import { req_main, res_main } from "./routes.input.js";
import { IsUnion, NestedArray, PopUnion, arrToUnion, reshapeObject} from "@shared/type.js";
import { ReqAndResType, t_getReq, t_getRes } from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";
import { rootClassName, t_arr_component, t_concatRouteNameClassName, t_removeConcatRouteNameClassName, t_rootClassName } from "@/utils/scraping/PageParsing/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _isNullOrUndefined } from "@shared/m_primitives.js";
import { BrowsersPool, getBrowsers } from "@/utils/browser/BrowsersPool.js";
import { deepCloneJson, deepCloneJsonIfIsObject } from "@shared/m_json.js";
import { getUrlToScrapItem, str_getLocalFunction, str_getServiceFunction,  t_str_getServiceFunction } from "@/routes/scraping-services/class/Config/Pipeline/HA/types.js";
import { IJson, isEmptyJson, isNotEmptyJson, t_getAllMethodsOfObject } from "@shared/m_object.js";
import { date_field, item_field, pagination_field, t_union_required_field } from "@shared/m_regexMapping.js";
import regex_url, { regex_join_domain, t_regex_url_fctEmbeds } from "@shared/validate-url/regexp.js";
import { EmbeddingPASGroup, convertStrRegexToStr, embedCapturingGroupStrOrRegex, generateName, getUnionNonMatchingGroups } from "@shared/m_regex_prefixAndSuffix.js";
import { getBodyUrlAndParamsReq, getSubDomainAndSld, joinEndParamUrlIfNotEmpty } from "@shared/validate-url/functions.js";
import { joinBegParamUrl, joinReqUrl } from "@shared/validate-url/types.js";
import { t_transformRootIdIfAny, transformRootIdIfAny } from "@/controller/scraping-services/class/Config/IJson_ServiceConfig.js";
import { df_arr_fct_name_withSavePage, t_df_arr_fct_name_withSavePage } from "@/routes/scraping-services/class/Config/Pipeline/config_save.js";
import { str_joinChar_group } from "@/utils/scraping/PageParsing/Schema/_Component/ValTextContent/types.js";
import ChildAttributeType from "@/utils/scraping/PageParsing/Schema/_Component/ChildAttributeType/ChildAttributeType.js";
import { convertStrToRegexStr, getRegexGM } from "@shared/m_regex.js";
import { isStrEmpty, majFirstChar } from "@shared/m_string.js";
import { mergeSaved } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { str_StartupsMtp } from "../../../lespepitestech/Services/StartupsMtp/human-actions.js";

type t_args_getTree < BaseElement extends t_unionClassName_main=t_rootClassName>= t_AHA_Service_ArgsGetTree<t_serviceName_entreprise_,t_str_main ,BaseElement,t_unionRegex_mapRegex_entreprise__main ,t_unionIdPath_mapRegex_entreprise__main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main>


type t_1 = t_unionRegex_mapRegex_entreprise__main
type t_2 = t_unionIdPath_mapRegex_entreprise__main
type t_3 = readonly[ t_rootClassName , ...readonly (Exclude<t_arrClassName_main[number],t_rootClassName>)[]]
type t_4 = t_unionClassName_main
type t_5 =   readonly (t_arrChilds_main[number])[]
type t_6 =  {[k in keyof t_IJsonComponent_main ]: t_IJsonComponent_main[k]}

//TODO-IMP replace AHA_Service<req_main,res_main,t_unionRegex_mapRegex_entreprise__main ,t_unionIdPath_mapRegex_entreprise__main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main,t_df_arr_fct_name_withNextPage> by AHA_Service_Entreprise_<t_str_main>
// associate with Entreprise_Routes[t_str_main]

//TODO-IMP req and res != req_main and res_main but req_main.toJson()

//TODO function cannot return undefined as value 
class HA_Entreprise_ServiceMain  extends  AHA_Service<t_serviceName_entreprise_,t_str_main,req_main,res_main,t_unionRegex_mapRegex_entreprise__main ,t_unionIdPath_mapRegex_entreprise__main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main,t_df_arr_fct_name_withSavePage>  implements t_IAHA_Service<t_serviceName_entreprise_,t_str_main,req_main,res_main,t_unionRegex_mapRegex_entreprise__main ,t_unionIdPath_mapRegex_entreprise__main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main,t_df_arr_fct_name_withSavePage >{

    serviceName: t_serviceName_entreprise_  = serviceName_entreprise_
    routeName : t_str_main = str_main 
    constructor() {
        super()
    }

    [str_getLocalFunction]( req:req_main , res : res_main  ): t_ha_res {
        return AService.df_localFunction()
    }

    static getDfArgsGetTree :()=> t_args_getTree = ()=>{ /*console.log("DEBUG_ME",getCurrentLine());*/return {
        params:{
            serviceName : serviceName_entreprise_,
            routeName:str_main,
            prop_base_selectors:root_mainPage_child_selectors,
            prop_base:rootClassName
        },
        fct_loading:{
            waitForPageLoading:waitForEntreprise_PageLoading,
            waitForPageFullLoading:waitForEntreprise_PageFullLoading,
        }

    }}

    getNextPageParam(req:req_main , res : res_main){ /*console.log("DEBUG_ME",getCurrentLine());*/
        return AHA_Service.getNextPageParam<t_serviceName_entreprise_,t_str_main,req_main,res_main>(req,res)
    }

    getServiceParam (req:req_main , res : res_main):t_AHA_Service_Param<t_serviceName_entreprise_,t_str_main>{
        return AHA_Service.getServiceParam<t_serviceName_entreprise_,t_str_main,req_main,res_main>(req,res)
    }

    getTreeParam< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_main , res : res_main,_args:reshapeObject< t_AHA_Service_ArgsGetTree<t_serviceName_entreprise_,t_str_main,BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ):Parameters<typeof AHA_Service._getTree<t_serviceName_entreprise_,t_str_main,BaseElement,  t_unionRegex_mapRegex_entreprise__main ,t_unionIdPath_mapRegex_entreprise__main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main>> { 
        //{scrapingComponent:ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,waitForPageLoading:t_page_fct_getMainComponent,waitForPageFullLoading:t_page_fct_waitForPageFullLoading,prop_base_selectors:selectors,prop_base:unionClassNameType}

        const args = {
            ...HA_Entreprise_ServiceMain.getDfArgsGetTree(),
            ..._args
        } as t_args_getTree<BaseElement>

        const param :t_AHA_Service_ParamGetTree<t_serviceName_entreprise_,t_str_main, BaseElement, t_unionRegex_mapRegex_entreprise__main ,t_unionIdPath_mapRegex_entreprise__main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main> = {
            ...this.getServiceParam(req,res),
            ...args.params
        }
        const fct_loading = {
            ...args.fct_loading
        }

        return [param,fct_loading]
    }

    getTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_main , res : res_main,_args:reshapeObject< t_AHA_Service_ArgsGetTree<t_serviceName_entreprise_,t_str_main, BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        const params = this.getTreeParam(req,res,_args)
        console.log("MAIN")
        return AHA_Service._getTree<t_serviceName_entreprise_, t_str_main,  BaseElement,t_unionRegex_mapRegex_entreprise__main ,t_unionIdPath_mapRegex_entreprise__main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main>(...params)
    }

    async [str_getServiceFunction]  (req:req_main , res : res_main): t_ha_res{
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
                const tree = await this.getTree<t_entreprise__main_rootClassName,t_unionRegex_mapRegex_entreprise__main ,t_unionIdPath_mapRegex_entreprise__main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main>(req,res)
                 _date = hours.getTimeNow()
                json = tree.getJsonValue(scrapingComponent.getMapPathPatternToId())
                json ={...json?.res_childs||{},...req.body.fk} as any
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
   

    transformAfterGetServiceFunction(req:req_main , res : res_main, _json:Awaited<ReturnType< typeof HA_Entreprise_ServiceMain.provider[t_str_getServiceFunction]>> )  { /*console.log("DEBUG_ME",getCurrentLine());*/

        let tmp_json = {} as any 
        const url_toScrap = req.header.url_toScrap || req.header.url
        const json = _json[url_toScrap][arr_classNameType_entreprise__main[2]].reduce((acc,attribute)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            if(attribute?.hasOwnProperty("AllLinks_href") /*!== null*/ ){
                const attribute_value = attribute["AllLinks_href"]
                const idx_split = attribute_value.lastIndexOf(attribute_value[str_joinChar_group] || ChildAttributeType.df[str_joinChar_group])
                const tmp_arr  = [attribute_value.substring(0,idx_split),attribute_value.substring(idx_split+1)].map((_)=>_.trim()) as [t_union_socials , string ]
                const [ url_socials,name_socials] = isStrEmpty(tmp_arr[0]) ? [tmp_arr[1],"email"] : tmp_arr
                if(acc.hasOwnProperty(name_socials)){
                        if(isEmptyJson(tmp_json)){
                            const entreprise_name = req.header.sld_name || Object.values(getSubDomainAndSld(url_toScrap)).join(convertStrRegexToStr(regex_join_domain))
                            const all_possibleName = generateName(entreprise_name)
                            const all_possibleName_strRegex = embedCapturingGroupStrOrRegex(getUnionNonMatchingGroups(...all_possibleName.map((name)=>convertStrToRegexStr(name))),true)
                            const all_possibleName_regex = new RegExp(all_possibleName_strRegex)
                            tmp_json= {entreprise_name , all_possibleName_regex}
                        }
                        const [b1,b2] = [tmp_json["all_possibleName_regex"].test(acc[name_socials]),tmp_json["all_possibleName_regex"].test(url_socials)]
                        const blen = acc[name_socials].length > url_socials.length
                        if( (b2 && ((b1 &&  blen) || !b1 )) || (blen)  ) acc[name_socials] = url_socials
                }
                else acc[name_socials] = url_socials
                
            }
            return acc 
        },{})
        res.body.result[url_toScrap] = {...res.body?.result?.[url_toScrap] || {},...json,...req.body.fk}
        return [req,res]as ReqAndResType<req_main , res_main>

    }

    async save_serviceFunction ( req:req_main , res : res_main  )  { /*console.log("DEBUG_ME",getCurrentLine());*/
            if(!req.header.isStreaming){ /*console.log("DEBUG_ME",getCurrentLine());*/

                const prismaClient = this.getDatabaseLocalAndRemote()[AService.getPropsDBFromHeader(req)].getConnection()

                let result : Awaited<ReturnType< typeof HA_Entreprise_ServiceMain.provider[t_str_getServiceFunction]>> = res.body.result
                const url_toScrap = req.header.url_toScrap || req.header.url
                if(AService.isValidResult(result[url_toScrap])) {
                    result = deepCloneJson(result[url_toScrap])
 
                    type TSample = (IJson  & {[date_field]:string})
                    const rows  = [result] as TSample[] //.map((row)=>applyFctToObjectKeys(row,(k:string)=>k.replace(/^Main/,"")))

                    const param = AHA_Service.getSavePageParam(prismaClient , str_Main ,id_field, date_field , rows ,req.body.fk, req.header.needUpdate )
                    res.body.saved = mergeSaved(res.body.saved,await AHA_Service._save_serviceFunction(param))
                }   
            }    
    }

    namesOfPipelineFunction(){
        return [...df_arr_fct_name_withSavePage] as const 
    }



    static provider = new HA_Entreprise_ServiceMain()


}

export default HA_Entreprise_ServiceMain.provider