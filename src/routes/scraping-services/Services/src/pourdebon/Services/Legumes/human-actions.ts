
import { idRoutes_pourdebon, serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js";

export const str_legumes = idRoutes_pourdebon[2] 
export type t_str_legumes = typeof str_legumes


import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";
import { getNameModuleScraping } from "@/utils/scraping/primitives/name.js";

const name_module :string = getNameModuleScraping(serviceName_pourdebon,str_legumes)
const debug_scrapL_login :Debugger  = debug(name_module)

import { AService } from "@/routes/scraping-services/class/Services/AService.js";
import { AHA_Service, t_AHA_Service_ArgsGetTree, t_AHA_Service_Param, t_AHA_Service_ParamGetTree, t_AHA_Service_ParamNextPage, t_ha_res, t_nextJson_nextPagination, t_nextJson_selectedPagination} from "@/routes/scraping-services/class/Config/Pipeline/HA/Pipeline.js";
import { hours } from "@shared/hours.js";
import { createAddress, unjoin_pathRoutes } from "@shared/routePath.js";
import { waitForPourdebonPageLoading, waitForPourdebonPageFullLoading } from "../utils/selectors.js";
import { t_unionIdPath_mapRegex_pourdebon_legumes, t_arrClassName_legumes, t_unionClassName_legumes, t_arrChilds_legumes, t_unionRegex_mapRegex_pourdebon_legumes, t_IJsonComponent_legumes, id_field} from "@/routes/scraping-services/Data/pourdebon/Services/Legumes/Legumes.js";
import { root_legumesPage_child_selectors, t_pourdebon_legumes_rootClassName } from "@/routes/scraping-services/Data/pourdebon/Services/Legumes/types.js";
import { req_legumes, res_legumes } from "./routes.input.js";
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
import { date_field } from "@shared/m_regexMapping.js";
import PourdebonRoutes from "@/routes/Router/Services/src/pourdebon/Routes.js";

type t_args_getTree < BaseElement extends t_unionClassName_legumes=t_rootClassName>= t_AHA_Service_ArgsGetTree<BaseElement,t_unionRegex_mapRegex_pourdebon_legumes ,t_unionIdPath_mapRegex_pourdebon_legumes , t_arrClassName_legumes,t_unionClassName_legumes ,t_arrChilds_legumes ,  t_IJsonComponent_legumes>


type t_1 = t_unionRegex_mapRegex_pourdebon_legumes
type t_2 = t_unionIdPath_mapRegex_pourdebon_legumes
type t_3 = readonly[ t_rootClassName , ...readonly (Exclude<t_arrClassName_legumes[number],t_rootClassName>)[]]
type t_4 = t_unionClassName_legumes
type t_5 =   readonly (t_arrChilds_legumes[number])[]
type t_6 =  {[k in keyof t_IJsonComponent_legumes ]: t_IJsonComponent_legumes[k]}

//TODO-IMP replace AHA_Service<req_legumes,res_legumes,t_unionRegex_mapRegex_pourdebon_legumes ,t_unionIdPath_mapRegex_pourdebon_legumes , t_arrClassName_legumes,t_unionClassName_legumes ,t_arrChilds_legumes ,  t_IJsonComponent_legumes,t_df_arr_fct_name_withNextPage> by AHA_Service_Pourdebon<t_str_legumes>
// associate with PourdebonRoutes[t_str_legumes]

//TODO-IMP req and res != req_legumes and res_legumes but req_legumes.toJson()

//TODO function cannot return undefined as value 
class HA_PourdebonServiceLegumes implements AHA_Service<req_legumes,res_legumes,t_unionRegex_mapRegex_pourdebon_legumes ,t_unionIdPath_mapRegex_pourdebon_legumes , t_arrClassName_legumes,t_unionClassName_legumes ,t_arrChilds_legumes ,  t_IJsonComponent_legumes,t_df_arr_fct_name_withNextPage> {

    constructor() {}

    getDatabaseLocalAndRemote() {
        throw new Error("Method not implemented."); 
    }

    

    getLocalFunction( req:req_legumes , res : res_legumes  ): t_ha_res {
        return AService.df_localFunction()
    }

    static getDfArgsGetTree :()=> t_args_getTree = ()=>{return {
        params:{
            prop_base_selectors:root_legumesPage_child_selectors,
            prop_base:rootClassName
        },
        fct_loading:{
            waitForPageLoading:waitForPourdebonPageLoading,
            waitForPageFullLoading:waitForPourdebonPageFullLoading,
        }

    }}

    getNextPageParam(req:req_legumes , res : res_legumes):t_AHA_Service_ParamNextPage{
        return AHA_Service.getNextPageParam<req_legumes,res_legumes>(req,res)
    }

    getServiceParam (req:req_legumes , res : res_legumes):t_AHA_Service_Param{
        return AHA_Service.getServiceParam<req_legumes,res_legumes>(req,res)
    }


    getParamTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_legumes , res : res_legumes,_args:reshapeObject< t_AHA_Service_ArgsGetTree<BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ): Parameters<typeof AHA_Service._getTree<BaseElement,  t_unionRegex_mapRegex_pourdebon_legumes ,t_unionIdPath_mapRegex_pourdebon_legumes , t_arrClassName_legumes,t_unionClassName_legumes ,t_arrChilds_legumes ,  t_IJsonComponent_legumes>> {

        //{scrapingComponent:ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,waitForPageLoading:t_page_fct_getMainComponent,waitForPageFullLoading:t_page_fct_waitForPageFullLoading,prop_base_selectors:selectors,prop_base:unionClassNameType}

        const args = {
            ...HA_PourdebonServiceLegumes.getDfArgsGetTree(),
            ..._args
        } as t_args_getTree<BaseElement>

        const param :t_AHA_Service_ParamGetTree<BaseElement,  t_unionRegex_mapRegex_pourdebon_legumes ,t_unionIdPath_mapRegex_pourdebon_legumes , t_arrClassName_legumes,t_unionClassName_legumes ,t_arrChilds_legumes ,  t_IJsonComponent_legumes> = {
            ...this.getServiceParam(req,res),
            ...args.params
        }
        const fct_loading = {
            ...args.fct_loading
        }

        return [param,fct_loading]
    }

    getTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_legumes , res : res_legumes,_args:reshapeObject< t_AHA_Service_ArgsGetTree<BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ){
        const params = this.getParamTree(req,res,_args)
        return AHA_Service._getTree< BaseElement,  t_unionRegex_mapRegex_pourdebon_legumes ,t_unionIdPath_mapRegex_pourdebon_legumes , t_arrClassName_legumes,t_unionClassName_legumes ,t_arrChilds_legumes ,  t_IJsonComponent_legumes>(...params)
    }


    async getNextPage(req:req_legumes , res : res_legumes): t_ha_res{

        return AHA_Service._getNextPage < "LegumesNextPagination" , t_pourdebon_legumes_rootClassName,  t_unionRegex_mapRegex_pourdebon_legumes ,t_unionIdPath_mapRegex_pourdebon_legumes , t_arrClassName_legumes,t_unionClassName_legumes ,t_arrChilds_legumes ,  t_IJsonComponent_legumes>("LegumesNextPagination",
        ...this.getParamTree< t_pourdebon_legumes_rootClassName,  t_unionRegex_mapRegex_pourdebon_legumes ,t_unionIdPath_mapRegex_pourdebon_legumes , t_arrClassName_legumes,t_unionClassName_legumes ,t_arrChilds_legumes ,  t_IJsonComponent_legumes>(req,res))


    }

    transformAfterGetNextPage(req:req_legumes , res : res_legumes, json:Awaited<ReturnType< typeof HA_PourdebonServiceLegumes.provider[t_str_getNextPage]>> )  {
        

        res.body.nexts = AHA_Service._bodyNextsJson(json[req.header.url],"LegumesNextPagination","SelectedPagination")

        return [req,res]as ReqAndResType<req_legumes , res_legumes>
    }
    
    async nextPage(req:req_legumes , res : res_legumes )  {
        return AHA_Service._nextPage(this.getNextPageParam(req,res))

    }

    transformAfterNextPage(req:req_legumes , res : res_legumes, json:Awaited<ReturnType< typeof HA_PourdebonServiceLegumes.provider[t_str_nextPage]>> )  { 
        res.body.nexts = json.nexts 
        let new_req = deepCloneJson(req)
        new_req.header.url = json.url
        new_req.header.url_toScrap = json.url_toScrap
        return [new_req,res]as ReqAndResType<req_legumes , res_legumes>
    }



    async getServiceFunction  (req:req_legumes , res : res_legumes): t_ha_res{
            const url_toScrap = req.header.url
            const tree = await this.getTree<t_pourdebon_legumes_rootClassName,t_unionRegex_mapRegex_pourdebon_legumes ,t_unionIdPath_mapRegex_pourdebon_legumes , t_arrClassName_legumes,t_unionClassName_legumes ,t_arrChilds_legumes ,  t_IJsonComponent_legumes>(req,res)
            const _date = hours.getTimeNow()
            const mpage = await getBrowsers().then((brwsrsP:BrowsersPool)=>brwsrsP.getMPageFromTargetIdx(req.body.browserId,req.body.targetId))
            const scrapingComponent  = mpage.getScrapingComponent()
            let json = tree.getJsonValue(scrapingComponent.getMapPathPatternToId())
            json = json.res_childs as any
            json["LegumesItem"]= json["LegumesItem"].reduce((acc,e,idx)=>{return {...acc, [createAddress([url_toScrap],`${idx}`)]:{...e,[date_field] : _date}}},{})//A FAIRE : extract 
            //result= {...result,...mergeJsonArr<"NextPagination"|"SelectedPagination",{NextPagination:string,SelectedPagination:string}>(json["LegumesPagination"])}
            return {[url_toScrap]:json}
    }


    transformAfterGetServiceFunction(req:req_legumes , res : res_legumes, json:Awaited<ReturnType< typeof HA_PourdebonServiceLegumes.provider.getServiceFunction>> )  {

        if(res.body?.result ) res.body.result[req.header.url] = {...res.body.result[req.header.url],...json[req.header.url]}
        else res.body.result = json

        res.body.nexts=AHA_Service._bodyNextsJson(json[req.header.url],"LegumesNextPagination","SelectedPagination")

        return [req,res]as ReqAndResType<req_legumes , res_legumes>

    }

     async save_serviceFunction ( req:req_legumes , res : res_legumes  )  {
            if(!req.header.isStreaming){

                const prismaClient = this.getDatabaseLocalAndRemote()[AService.getPropsDBFromHeader(req)].getConnection()

                let result : Awaited<ReturnType< typeof HA_PourdebonServiceLegumes.provider.getServiceFunction>> = res.body.result
                const url_toScrap = req.header.url
                if(AService.isValidResult(result[url_toScrap])) {
                    result = deepCloneJson(result[url_toScrap])
                    type TSample = (IJson & {[id_field]:string} & {[date_field]:string})
                    const rows :TSample[] = Object.values(result["LegumesItem"])//.map((row)=>applyFctToObjectKeys(row,(k:string)=>k.replace(/^Legumes/,"")))
                    
                    const param = AHA_Service.getSavePageParam(prismaClient , str_legumes ,id_field, date_field , rows , req.header.needUpdate )
                    await AHA_Service._save_serviceFunction(param)
                }   
            }    
    }

    namesOfPipelineFunction(){
        return [...df_arr_fct_name_nextPage] as const 
    }

    static provider = new HA_PourdebonServiceLegumes()


}

export default HA_PourdebonServiceLegumes.provider