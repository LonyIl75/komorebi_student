
import { idRoutes_pourdebon, serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js";

export const str_bouchers = idRoutes_pourdebon[3] 
export type t_str_bouchers = typeof str_bouchers


import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";
import { getNameModuleScraping } from "@/utils/scraping/primitives/name.js";

const name_module :string = getNameModuleScraping(serviceName_pourdebon,str_bouchers)
const debug_scrapL_login :Debugger  = debug(name_module)

import { AService } from "@/routes/scraping-services/class/Services/AService.js";
import { AHA_Service, t_AHA_Service_ArgsGetTree, t_AHA_Service_Param, t_AHA_Service_ParamGetTree, t_AHA_Service_ParamNextPage, t_ha_res, t_nextJson_nextPagination, t_nextJson_selectedPagination} from "@/routes/scraping-services/class/Config/Pipeline/HA/Pipeline.js";
import { hours } from "@shared/hours.js";
import { createAddress, unjoin_pathRoutes } from "@shared/routePath.js";
import { waitForPourdebonPageLoading, waitForPourdebonPageFullLoading } from "../utils/selectors.js";
import { scrapingComponent_pourdebon_bouchers, t_unionIdPath_mapRegex_pourdebon_bouchers, t_arrClassName_bouchers, t_unionClassName_bouchers, t_arrChilds_bouchers, t_unionRegex_mapRegex_pourdebon_bouchers, t_IJsonComponent_bouchers } from "@/routes/scraping-services/Data/pourdebon/Services/Bouchers/Bouchers.js";
import { root_bouchersPage_child_selectors, t_pourdebon_bouchers_rootClassName } from "@/routes/scraping-services/Data/pourdebon/Services/Bouchers/types.js";
import { req_bouchers, res_bouchers } from "./routes.input.js";
import { NestedArray, arrToUnion, reshapeObject } from "@shared/type.js";
import { ReqAndResType } from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";
import { rootClassName, t_arr_component, t_getClassNameTypeFromArrComponent, t_rootClassName } from "@/utils/scraping/PageParsing/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _isNullOrUndefined } from "@shared/m_primitives.js";
import { applyFctToObjectKeys, getEmptyJson, mergeJsonArr } from "@shared/m_object.js";
import { BrowsersPool, getBrowsers } from "@/utils/browser/BrowsersPool.js";
import { deepCloneJson } from "@shared/m_json.js";
import { t_df_arr_fct_name_withNextPage, df_arr_fct_name_nextPage } from "@/routes/scraping-services/class/Config/Pipeline/config_actionNext.js";
import { t_str_getNextPage, t_str_nextPage } from "@/routes/scraping-services/class/Config/Pipeline/HA/types.js";
import { convertToArray } from "@shared/m_array.js";

type t_args_getTree < BaseElement extends t_unionClassName_bouchers=t_rootClassName>= t_AHA_Service_ArgsGetTree<BaseElement,t_unionRegex_mapRegex_pourdebon_bouchers ,t_unionIdPath_mapRegex_pourdebon_bouchers , t_arrClassName_bouchers,t_unionClassName_bouchers ,t_arrChilds_bouchers ,  t_IJsonComponent_bouchers>


type t_1 = t_unionRegex_mapRegex_pourdebon_bouchers
type t_2 = t_unionIdPath_mapRegex_pourdebon_bouchers
type t_3 = readonly[ t_rootClassName , ...readonly (Exclude<t_arrClassName_bouchers[number],t_rootClassName>)[]]
type t_4 = t_unionClassName_bouchers
type t_5 =   readonly (t_arrChilds_bouchers[number])[]
type t_6 =  {[k in keyof t_IJsonComponent_bouchers ]: t_IJsonComponent_bouchers[k]}


//TODO function cannot return undefined as value 
class HA_PourdebonServiceBouchers implements AHA_Service<req_bouchers,res_bouchers,t_unionRegex_mapRegex_pourdebon_bouchers ,t_unionIdPath_mapRegex_pourdebon_bouchers , t_arrClassName_bouchers,t_unionClassName_bouchers ,t_arrChilds_bouchers ,  t_IJsonComponent_bouchers,t_df_arr_fct_name_withNextPage> {

    constructor() {}

    getDatabaseLocalAndRemote() {
        throw new Error("Method not implemented."); 
    }

    

    getLocalFunction( req:req_bouchers , res : res_bouchers  ): t_ha_res {
        return AService.df_localFunction()
    }

    static getDfArgsGetTree :()=> t_args_getTree = ()=>{return {
        params:{
            prop_base_selectors:root_bouchersPage_child_selectors,
            prop_base:rootClassName
        },
        fct_loading:{
            waitForPageLoading:waitForPourdebonPageLoading,
            waitForPageFullLoading:waitForPourdebonPageFullLoading,
        }

    }}

    getNextPageParam(req:req_bouchers , res : res_bouchers):t_AHA_Service_ParamNextPage{
        return AHA_Service.getNextPageParam<req_bouchers,res_bouchers>(req,res)
    }

    getServiceParam (req:req_bouchers , res : res_bouchers):t_AHA_Service_Param{
        return AHA_Service.getServiceParam<req_bouchers,res_bouchers>(req,res)
    }


    getParamTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_bouchers , res : res_bouchers,_args:reshapeObject< t_AHA_Service_ArgsGetTree<BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ): Parameters<typeof AHA_Service._getTree<BaseElement,  t_unionRegex_mapRegex_pourdebon_bouchers ,t_unionIdPath_mapRegex_pourdebon_bouchers , t_arrClassName_bouchers,t_unionClassName_bouchers ,t_arrChilds_bouchers ,  t_IJsonComponent_bouchers>> {

        //{scrapingComponent:ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,waitForPageLoading:t_page_fct_getMainComponent,waitForPageFullLoading:t_page_fct_waitForPageFullLoading,prop_base_selectors:selectors,prop_base:unionClassNameType}

        const args = {
            ...HA_PourdebonServiceBouchers.getDfArgsGetTree(),
            ..._args
        } as t_args_getTree<BaseElement>

        const param :t_AHA_Service_ParamGetTree<BaseElement,  t_unionRegex_mapRegex_pourdebon_bouchers ,t_unionIdPath_mapRegex_pourdebon_bouchers , t_arrClassName_bouchers,t_unionClassName_bouchers ,t_arrChilds_bouchers ,  t_IJsonComponent_bouchers> = {
            ...this.getServiceParam(req,res),
            ...args.params
        }
        const fct_loading = {
            ...args.fct_loading
        }

        return [param,fct_loading]
    }

    getTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_bouchers , res : res_bouchers,_args:reshapeObject< t_AHA_Service_ArgsGetTree<BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ){
        const params = this.getParamTree(req,res,_args)
        return AHA_Service._getTree< BaseElement,  t_unionRegex_mapRegex_pourdebon_bouchers ,t_unionIdPath_mapRegex_pourdebon_bouchers , t_arrClassName_bouchers,t_unionClassName_bouchers ,t_arrChilds_bouchers ,  t_IJsonComponent_bouchers>(...params)
    }


    async getNextPage(req:req_bouchers , res : res_bouchers): t_ha_res{

        return AHA_Service._getNextPage < "BouchersNextPagination" , t_pourdebon_bouchers_rootClassName,  t_unionRegex_mapRegex_pourdebon_bouchers ,t_unionIdPath_mapRegex_pourdebon_bouchers , t_arrClassName_bouchers,t_unionClassName_bouchers ,t_arrChilds_bouchers ,  t_IJsonComponent_bouchers>("BouchersNextPagination",
        ...this.getParamTree< t_pourdebon_bouchers_rootClassName,  t_unionRegex_mapRegex_pourdebon_bouchers ,t_unionIdPath_mapRegex_pourdebon_bouchers , t_arrClassName_bouchers,t_unionClassName_bouchers ,t_arrChilds_bouchers ,  t_IJsonComponent_bouchers>(req,res))


    }

    transformAfterGetNextPage(req:req_bouchers , res : res_bouchers, json:Awaited<ReturnType< typeof HA_PourdebonServiceBouchers.provider[t_str_getNextPage]>> )  {
        res.body.nexts =  AHA_Service._bodyNextsJson(json[req.header.url],"BouchersNextPagination","SelectedPagination")

        return [req,res]as ReqAndResType<req_bouchers , res_bouchers>
    }
    async nextPage(req:req_bouchers , res : res_bouchers )  {
        return AHA_Service._nextPage(this.getNextPageParam(req,res))

    }

    transformAfterNextPage(req:req_bouchers , res : res_bouchers, json:Awaited<ReturnType< typeof HA_PourdebonServiceBouchers.provider[t_str_nextPage]>> )  { 
        res.body.nexts = json.nexts
        let new_req = deepCloneJson(req)
        new_req.header.url = json.url
        new_req.header.url_toScrap = json.url_toScrap
        return [new_req,res]as ReqAndResType<req_bouchers , res_bouchers>
    }



    async getServiceFunction  (req:req_bouchers , res : res_bouchers): t_ha_res{
            const url_toScrap = req.header.url
            const tree = await this.getTree<t_pourdebon_bouchers_rootClassName,t_unionRegex_mapRegex_pourdebon_bouchers ,t_unionIdPath_mapRegex_pourdebon_bouchers , t_arrClassName_bouchers,t_unionClassName_bouchers ,t_arrChilds_bouchers ,  t_IJsonComponent_bouchers>(req,res)
            const _date = hours.getTimeNow()
            const mpage = await getBrowsers().then((brwsrsP:BrowsersPool)=>brwsrsP.getMPageFromTargetIdx(req.body.browserId,req.body.targetId))
            const scrapingComponent  = mpage.getScrapingComponent()
            let json = tree.getJsonValue(scrapingComponent.getMapPathPatternToId())
            json = json.res_childs as any
            let result = json["BouchersItem"].reduce((acc,e,idx)=>{return {...acc, [createAddress([url_toScrap],`${idx}`)]:{...e,date : _date}}},{})//A FAIRE : extract 
            //result= {...result,...mergeJsonArr<"NextPagination"|"SelectedPagination",{NextPagination:string,SelectedPagination:string}>(json["BouchersPagination"])}
            return {[url_toScrap]:result}
    }


    transformAfterGetServiceFunction(req:req_bouchers , res : res_bouchers, json:Awaited<ReturnType< typeof HA_PourdebonServiceBouchers.provider.getServiceFunction>> )  {

        if(res.body?.result ) res.body.result[req.header.url] = {...res.body.result[req.header.url],...json[req.header.url]}
        else res.body.result = json

        res.body.nexts= AHA_Service._bodyNextsJson(json[req.header.url],"BouchersNextPagination","SelectedPagination")

        return [req,res]as ReqAndResType<req_bouchers , res_bouchers>

    }

     async save_serviceFunction ( req:req_bouchers , res : res_bouchers  )  {
            if(!req.header.isStreaming){

                const prismaClient = this.getDatabaseLocalAndRemote()[AService.getPropsDBFromHeader(req)].getConnection()

                let result : Awaited<ReturnType< typeof HA_PourdebonServiceBouchers.provider.getServiceFunction>> = res.body.result
                const url_toScrap = req.header.url
                if(AService.isValidResult(result[url_toScrap])) {
                    result = deepCloneJson(result[url_toScrap])
                    delete result["NextPagination"]
                    delete result["SelectedPagination"]
                    const rows = Object.values(result)//.map((row)=>applyFctToObjectKeys(row,(k:string)=>k.replace(/^Bouchers/,"")))
                    await prismaClient[str_bouchers].createMany({ data : rows})
                }
            }       
    }

    namesOfPipelineFunction(){
        return [...df_arr_fct_name_nextPage] as const 
    }

    static provider = new HA_PourdebonServiceBouchers()


}

export default HA_PourdebonServiceBouchers.provider