import { idRoutes_booksToscrape, serviceName_booksToscrape, t_serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js";

export const str_books = idRoutes_booksToscrape[2] 
export type t_str_books = typeof str_books

export const str_Books = "Books" as const
export type t_str_Books = typeof str_Books

import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";
import { getNameModuleScraping } from "@/utils/scraping/primitives/name.js";

const name_module :string = getNameModuleScraping(serviceName_booksToscrape,str_books)
const debug_scrapL_books :Debugger  = debug(name_module)

import { AService } from "@/routes/scraping-services/class/Services/AService.js";
import { AHA_Service, t_AHA_Service_ArgsGetTree, t_AHA_Service_Param, t_AHA_Service_ParamGetTree, t_IAHA_Service, t_ha_res} from "@/routes/scraping-services/class/Config/Pipeline/HA/Pipeline.js";
import { hours } from "@shared/hours.js";
import { waitForBooksToscrapePageLoading, waitForBooksToscrapePageFullLoading } from "../utils/selector.js";
import { t_unionIdPath_mapRegex_booksToscrape_books, t_arrClassName_books, t_unionClassName_books, t_arrChilds_books, t_unionRegex_mapRegex_booksToscrape_books, t_IJsonComponent_books, id_field} from "@/routes/scraping-services/Data/booksToscrape/Services/Books/Books.js";
import { root_booksPage_child_selectors, t_booksToscrape_books_rootClassName } from "@/routes/scraping-services/Data/booksToscrape/Services/Books/types.js";
import { req_books, res_books } from "./routes.input.js";
import { IsUnion, NestedArray, PopUnion, arrToUnion, reshapeObject} from "@shared/type.js";
import { ReqAndResType, t_getReq, t_getRes } from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";
import { concatRouteNameClassName, rootClassName, t_arr_component, t_concatRouteNameClassName, t_removeConcatRouteNameClassName, t_rootClassName } from "@/utils/scraping/PageParsing/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _isNullOrUndefined } from "@shared/m_primitives.js";
import { BrowsersPool, getBrowsers } from "@/utils/browser/BrowsersPool.js";
import { deepCloneJson, deepCloneJsonIfIsObject } from "@shared/m_json.js";
import { t_df_arr_fct_name_withNextPage, df_arr_fct_name_withNextPage } from "@/routes/scraping-services/class/Config/Pipeline/config_actionNext.js";
import { getUrlToScrapItem, str_getLocalFunction, str_getServiceFunction, t_str_getNextPage, t_str_getServiceFunction, t_str_nextPage } from "@/routes/scraping-services/class/Config/Pipeline/HA/types.js";
import { IJson, isNotEmptyJson, t_getAllMethodsOfObject } from "@shared/m_object.js";
import { date_field, item_field, pagination_field, t_union_required_field } from "@shared/m_regexMapping.js";
import regex_url, { t_regex_url_fctEmbeds } from "@shared/validate-url/regexp.js";
import { EmbeddingPASGroup, embedCapturingGroupStrOrRegex } from "@shared/m_regex_prefixAndSuffix.js";
import { getBodyUrlAndParamsReq, joinEndParamUrlIfNotEmpty } from "@shared/validate-url/functions.js";
import { joinBegParamUrl, joinReqUrl } from "@shared/validate-url/types.js";

type t_args_getTree < BaseElement extends t_unionClassName_books=t_rootClassName>= t_AHA_Service_ArgsGetTree<t_serviceName_booksToscrape,t_str_books ,BaseElement,t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books>


type t_1 = t_unionRegex_mapRegex_booksToscrape_books
type t_2 = t_unionIdPath_mapRegex_booksToscrape_books
type t_3 = readonly[ t_rootClassName , ...readonly (Exclude<t_arrClassName_books[number],t_rootClassName>)[]]
type t_4 = t_unionClassName_books
type t_5 =   readonly (t_arrChilds_books[number])[]
type t_6 =  {[k in keyof t_IJsonComponent_books ]: t_IJsonComponent_books[k]}

//TODO-IMP replace AHA_Service<req_books,res_books,t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books,t_df_arr_fct_name_withNextPage> by AHA_Service_BooksToscrape<t_str_books>
// associate with BooksToscrapeRoutes[t_str_books]

//TODO-IMP req and res != req_books and res_books but req_books.toJson()

//TODO function cannot return undefined as value 
class HA_BooksToscrapeServiceBooks  extends  AHA_Service<t_serviceName_booksToscrape,t_str_books,req_books,res_books,t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books,t_df_arr_fct_name_withNextPage>  implements t_IAHA_Service<t_serviceName_booksToscrape,t_str_books,req_books,res_books,t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books,t_df_arr_fct_name_withNextPage >{

    serviceName: t_serviceName_booksToscrape  = serviceName_booksToscrape
    routeName : t_str_books = str_books 
    constructor() {
        super()
    }

    async getNextPage(req:req_books , res : res_books): t_ha_res{

        return AHA_Service._getNextPage <t_serviceName_booksToscrape,t_str_books, t_concatRouteNameClassName<t_str_books,t_rootClassName>  ,t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books>(
        ...this.getTreeParam<t_booksToscrape_books_rootClassName,  t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books>(req,res))

    }

    [str_getLocalFunction]( req:req_books , res : res_books  ): t_ha_res {
        return AService.df_localFunction()
    }

    static getDfArgsGetTree :()=> t_args_getTree = ()=>{return {
        params:{
            serviceName : serviceName_booksToscrape,
            routeName:str_books,
            prop_base_selectors:root_booksPage_child_selectors,
            prop_base:rootClassName
        },
        fct_loading:{
            waitForPageLoading:waitForBooksToscrapePageLoading,
            waitForPageFullLoading:waitForBooksToscrapePageFullLoading,
        }

    }}

    getNextPageParam(req:req_books , res : res_books){
        return AHA_Service.getNextPageParam<t_serviceName_booksToscrape,t_str_books,req_books,res_books>(req,res)
    }

    getServiceParam (req:req_books , res : res_books):t_AHA_Service_Param<t_serviceName_booksToscrape,t_str_books>{
        return AHA_Service.getServiceParam<t_serviceName_booksToscrape,t_str_books,req_books,res_books>(req,res)
    }

    getTreeParam< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_books , res : res_books,_args:reshapeObject< t_AHA_Service_ArgsGetTree<t_serviceName_booksToscrape,t_str_books,BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ):Parameters<typeof AHA_Service._getTree<t_serviceName_booksToscrape,t_str_books,BaseElement,  t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books>> { 
        //{scrapingComponent:ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,waitForPageLoading:t_page_fct_getMainComponent,waitForPageFullLoading:t_page_fct_waitForPageFullLoading,prop_base_selectors:selectors,prop_base:unionClassNameType}

        const args = {
            ...HA_BooksToscrapeServiceBooks.getDfArgsGetTree(),
            ..._args
        } as t_args_getTree<BaseElement>

        const param :t_AHA_Service_ParamGetTree<t_serviceName_booksToscrape,t_str_books, BaseElement, t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books> = {
            ...this.getServiceParam(req,res),
            ...args.params
        }
        const fct_loading = {
            ...args.fct_loading
        }

        return [param,fct_loading]
    }

    getTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_books , res : res_books,_args:reshapeObject< t_AHA_Service_ArgsGetTree<t_serviceName_booksToscrape,t_str_books, BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ){
        const params = this.getTreeParam(req,res,_args)
        return AHA_Service._getTree<t_serviceName_booksToscrape, t_str_books,  BaseElement,t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books>(...params)
    }

    async [str_getServiceFunction]  (req:req_books , res : res_books): t_ha_res{
        const url_toScrap =  req.header.url_toScrap || req.header.url  //A FAIRE : extract
        const tree = await this.getTree<t_booksToscrape_books_rootClassName,t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books>(req,res)
        const _date = hours.getTimeNow()
        const mpage = await getBrowsers().then((brwsrsP:BrowsersPool)=>brwsrsP.getMPageFromTargetIdx(req.body.browserId,req.body.targetId))
        const scrapingComponent  = mpage.getScrapingComponent()
        let json = tree.getJsonValue(scrapingComponent.getMapPathPatternToId())
        json = json.res_childs as any
        return {[url_toScrap]:json,[date_field]:_date}
    }
   

    transformAfterGetServiceFunction(req:req_books , res : res_books, _json:Awaited<ReturnType< typeof HA_BooksToscrapeServiceBooks.provider[t_str_getServiceFunction]>> )  {

        const url_toScrap = req.header.url_toScrap || req.header.url
        let json = AHA_Service.embedItems(_json,url_toScrap,this.getIdRequiredField(item_field))
        res.body.result[url_toScrap] = {...res.body?.result?.[url_toScrap] || {},...json}
        res.body.nexts=AHA_Service._bodyNextsJson(res.body.result,this.getIdRequiredField(pagination_field[0]),this.getIdRequiredField(pagination_field[1]))
        return [req,res]as ReqAndResType<req_books , res_books>

    }

    async save_serviceFunction ( req:req_books , res : res_books  )  {
            if(!req.header.isStreaming){

                const prismaClient = this.getDatabaseLocalAndRemote()[AService.getPropsDBFromHeader(req)].getConnection()

                let result : Awaited<ReturnType< typeof HA_BooksToscrapeServiceBooks.provider[t_str_getServiceFunction]>> = res.body.result
                const url_toScrap = req.header.url_toScrap || req.header.url
                if(AService.isValidResult(result[url_toScrap])) {
                    result = deepCloneJson(result[url_toScrap])
                    type TSample = (IJson & {[id_field]:string} & {[date_field]:string})
                    const rows :TSample[] = Object.values(result[this.getIdRequiredField(item_field)])//.map((row)=>applyFctToObjectKeys(row,(k:string)=>k.replace(/^Books/,"")))

                    const param = AHA_Service.getSavePageParam(prismaClient , str_books ,id_field, date_field , rows , req.header.needUpdate )
                    await AHA_Service._save_serviceFunction(param)
                }   
            }    
    }

    namesOfPipelineFunction(){
        return [...df_arr_fct_name_withNextPage] as const 
    }


    transformAfterGetNextPage(req:req_books , res : res_books, json:Awaited<ReturnType< typeof HA_BooksToscrapeServiceBooks.provider[t_str_getNextPage]>> )  {

        const url_toScrap = req.header.url_toScrap || req.header.url
        res.body.nexts = AHA_Service._bodyNextsJson(json[url_toScrap],this.getIdRequiredField(pagination_field[0]),this.getIdRequiredField(pagination_field[1]))

        return [req,res]as ReqAndResType<req_books , res_books>
    }

    async nextPage(req:req_books , res : res_books )  {
        return AHA_Service._nextPage(this.getNextPageParam(req,res))

    }

    transformAfterNextPage(req:req_books , res : res_books, json:Awaited<ReturnType< typeof HA_BooksToscrapeServiceBooks.provider[t_str_nextPage]>> )  { 
        res.body.nexts = json.nexts 
        let new_req = deepCloneJson(req)
        new_req.header.url = json.url
        new_req.header.url_toScrap = json.url_toScrap
        return [new_req,res]as ReqAndResType<req_books , res_books>
    }


    static provider = new HA_BooksToscrapeServiceBooks()


}

export default HA_BooksToscrapeServiceBooks.provider