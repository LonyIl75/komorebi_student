import { idRoutes_booksToscrape, serviceName_booksToscrape } from "@/controller/scraping-services/Services/Config/booksToscrape/config.js";

export const str_books = idRoutes_booksToscrape[2] 
export type t_str_books = typeof str_books


import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";
import { getNameModuleScraping } from "@/utils/scraping/primitives/name.js";

const name_module :string = getNameModuleScraping(serviceName_booksToscrape,str_books)
const debug_scrapL_login :Debugger  = debug(name_module)

import { AService } from "@/routes/scraping-services/class/Services/AService.js";
import { AHA_Service, t_AHA_Service_ArgsGetTree, t_AHA_Service_Param, t_AHA_Service_ParamGetTree, t_AHA_Service_ParamNextPage, t_ha_res, t_nextJson_nextPagination, t_nextJson_selectedPagination} from "@/routes/scraping-services/class/Config/Pipeline/HA/Pipeline.js";
import { hours } from "@shared/hours.js";
import { createAddress, unjoin_pathRoutes } from "@shared/routePath.js";
import { waitForBooksToscrapePageLoading, waitForBooksToscrapePageFullLoading } from "../utils/selector.js";
import { t_unionIdPath_mapRegex_booksToscrape_books, t_arrClassName_books, t_unionClassName_books, t_arrChilds_books, t_unionRegex_mapRegex_booksToscrape_books, t_IJsonComponent_books, id_field} from "@/routes/scraping-services/Data/booksToscrape/Services/Books/Books.js";
import { root_booksPage_child_selectors, t_booksToscrape_books_rootClassName } from "@/routes/scraping-services/Data/booksToscrape/Services/Books/types.js";
import { req_books, res_books } from "./routes.input.js";
import { NestedArray, arrToUnion, reshapeObject} from "@shared/type.js";
import { ReqAndResType, t_getReq, t_getRes } from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";
import { rootClassName, t_arr_component, t_rootClassName } from "@/utils/scraping/PageParsing/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _isNullOrUndefined } from "@shared/m_primitives.js";
import { BrowsersPool, getBrowsers } from "@/utils/browser/BrowsersPool.js";
import { deepCloneJson, deepCloneJsonIfIsObject } from "@shared/m_json.js";
import { t_df_arr_fct_name_withNextPage, df_arr_fct_name_nextPage } from "@/routes/scraping-services/class/Config/Pipeline/config_actionNext.js";
import { t_str_getNextPage, t_str_nextPage } from "@/routes/scraping-services/class/Config/Pipeline/HA/types.js";
import { IJson } from "@shared/m_object.js";
import { date_field, pagination_field } from "@shared/m_regexMapping.js";
import BooksToscrapeRoutes from "@/routes/Router/Services/src/booksToscrape/Routes.js";
import regex_url, { t_regex_url_fctEmbeds } from "@shared/validate-url/regexp.js";
import { EmbeddingPASGroup, embedCapturingGroupStrOrRegex } from "@shared/m_regex_prefixAndSuffix.js";

type t_args_getTree < BaseElement extends t_unionClassName_books=t_rootClassName>= t_AHA_Service_ArgsGetTree<BaseElement,t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books>


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
class HA_BooksToscrapeServiceBooks implements AHA_Service<req_books,res_books,t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books,t_df_arr_fct_name_withNextPage> {

    constructor() {}

    getDatabaseLocalAndRemote() {
        throw new Error("Method not implemented."); 
    }



    getLocalFunction( req:req_books , res : res_books  ): t_ha_res {
        return AService.df_localFunction()
    }

    static getDfArgsGetTree :()=> t_args_getTree = ()=>{return {
        params:{
            prop_base_selectors:root_booksPage_child_selectors,
            prop_base:rootClassName
        },
        fct_loading:{
            waitForPageLoading:waitForBooksToscrapePageLoading,
            waitForPageFullLoading:waitForBooksToscrapePageFullLoading,
        }

    }}

    getNextPageParam(req:req_books , res : res_books):t_AHA_Service_ParamNextPage{
        return AHA_Service.getNextPageParam<req_books,res_books>(req,res)
    }

    getServiceParam (req:req_books , res : res_books):t_AHA_Service_Param{
        return AHA_Service.getServiceParam<req_books,res_books>(req,res)
    }


    getParamTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_books , res : res_books,_args:reshapeObject< t_AHA_Service_ArgsGetTree<BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ): Parameters<typeof AHA_Service._getTree<BaseElement,  t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books>> {

        //{scrapingComponent:ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,waitForPageLoading:t_page_fct_getMainComponent,waitForPageFullLoading:t_page_fct_waitForPageFullLoading,prop_base_selectors:selectors,prop_base:unionClassNameType}

        const args = {
            ...HA_BooksToscrapeServiceBooks.getDfArgsGetTree(),
            ..._args
        } as t_args_getTree<BaseElement>

        const param :t_AHA_Service_ParamGetTree<BaseElement,  t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books> = {
            ...this.getServiceParam(req,res),
            ...args.params
        }
        const fct_loading = {
            ...args.fct_loading
        }

        return [param,fct_loading]
    }

    getTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_books , res : res_books,_args:reshapeObject< t_AHA_Service_ArgsGetTree<BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ){
        const params = this.getParamTree(req,res,_args)
        return AHA_Service._getTree< BaseElement,  t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books>(...params)
    }


    async getNextPage(req:req_books , res : res_books): t_ha_res{

        return AHA_Service._getNextPage < "BooksNextPagination" , t_booksToscrape_books_rootClassName,  t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books>("BooksNextPagination",
        ...this.getParamTree< t_booksToscrape_books_rootClassName,  t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books>(req,res))


    }

    transformAfterGetNextPage(req:req_books , res : res_books, json:Awaited<ReturnType< typeof HA_BooksToscrapeServiceBooks.provider[t_str_getNextPage]>> )  {

        const url_toScrap = req.header.url_toScrap || req.header.url
        res.body.nexts = AHA_Service._bodyNextsJson(json[url_toScrap],"BooksNextPagination","BooksSelectedPagination")

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



    async getServiceFunction  (req:req_books , res : res_books): t_ha_res{
            const url_toScrap =  req.header.url_toScrap || req.header.url  //A FAIRE : extract
            const tree = await this.getTree<t_booksToscrape_books_rootClassName,t_unionRegex_mapRegex_booksToscrape_books ,t_unionIdPath_mapRegex_booksToscrape_books , t_arrClassName_books,t_unionClassName_books ,t_arrChilds_books ,  t_IJsonComponent_books>(req,res)
            const _date = hours.getTimeNow()
            const mpage = await getBrowsers().then((brwsrsP:BrowsersPool)=>brwsrsP.getMPageFromTargetIdx(req.body.browserId,req.body.targetId))
            const scrapingComponent  = mpage.getScrapingComponent()
            let json = tree.getJsonValue(scrapingComponent.getMapPathPatternToId())
            json = json.res_childs as any
            type fdsfd = t_regex_url_fctEmbeds
            const strRegex_match_bodyAndReq = regex_url.buildGroupRegexp({
                bodyUrl: { 
                    _:EmbeddingPASGroup.name
                },
                params_req:{
                    childs:{
                        body:{
                        _:EmbeddingPASGroup.name
                    }

                }
                }
            } as const )
            const match_bodyAndReq = url_toScrap.match(new RegExp(strRegex_match_bodyAndReq))
            const [_url,req_param] = [match_bodyAndReq[1],match_bodyAndReq[2]]
            //TODO extract add req_param 
            json["BooksItem"]= json["BooksItem"].reduce((acc,e,idx)=>{return {...acc, [`${_url}?${req_param?`${req_param}&`:""}itemScrap=${idx}`]:{...e,[date_field] : _date}}},{})//A FAIRE : extract 
            //result= {...result,...mergeJsonArr<"NextPagination"|"SelectedPagination",{NextPagination:string,SelectedPagination:string}>(json["BooksPagination"])}
            return {[url_toScrap]:json}
    }


    transformAfterGetServiceFunction(req:req_books , res : res_books, json:Awaited<ReturnType< typeof HA_BooksToscrapeServiceBooks.provider.getServiceFunction>> )  {

        const url_toScrap = req.header.url_toScrap || req.header.url
        if(res.body?.result ) res.body.result[url_toScrap] = {...res.body.result[url_toScrap],...json[url_toScrap]}
        else res.body.result = json

        res.body.nexts=AHA_Service._bodyNextsJson(json[url_toScrap],"BooksNextPagination","BooksSelectedPagination")

        return [req,res]as ReqAndResType<req_books , res_books>

    }

     async save_serviceFunction ( req:req_books , res : res_books  )  {
            if(!req.header.isStreaming){

                const prismaClient = this.getDatabaseLocalAndRemote()[AService.getPropsDBFromHeader(req)].getConnection()

                let result : Awaited<ReturnType< typeof HA_BooksToscrapeServiceBooks.provider.getServiceFunction>> = res.body.result
                const url_toScrap = req.header.url_toScrap || req.header.url
                if(AService.isValidResult(result[url_toScrap])) {
                    result = deepCloneJson(result[url_toScrap])
                    type TSample = (IJson & {[id_field]:string} & {[date_field]:string})
                    const rows :TSample[] = Object.values(result["BooksItem"])//.map((row)=>applyFctToObjectKeys(row,(k:string)=>k.replace(/^Books/,"")))

                    const param = AHA_Service.getSavePageParam(prismaClient , str_books ,id_field, date_field , rows , req.header.needUpdate )
                    await AHA_Service._save_serviceFunction(param)
                }   
            }    
    }

    namesOfPipelineFunction(){
        return [...df_arr_fct_name_nextPage] as const 
    }

    static provider = new HA_BooksToscrapeServiceBooks()


}

export default HA_BooksToscrapeServiceBooks.provider