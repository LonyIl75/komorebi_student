import { idRoutes_forinov, serviceName_forinov, t_serviceName_forinov } from "@/controller/scraping-services/Services/Config/forinov/config.js";


export const str_main = idRoutes_forinov[getIdxIdHomeRoute()] 
export type t_str_main = typeof str_main

//A FAIRE assert === str_main from controller/scraping-services/Config/types.ts

import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";
import { getNameModuleScraping } from "@/utils/scraping/primitives/name.js";

const name_module :string = getNameModuleScraping(serviceName_forinov,str_main)
const debug_scrapL_main :Debugger  = debug(name_module)

import { AService } from "@/routes/scraping-services/class/Services/AService.js";
import { AHA_ServiceBase, t_AHA_Service_ArgsGetTree, t_AHA_Service_Param, t_AHA_Service_ParamGetTree, t_IAHA_ServiceBase, t_ha_res} from "@/routes/scraping-services/class/Config/Pipeline/HA/Pipeline.js";
import { waitForForinovPageLoading, waitForForinovPageFullLoading } from "../utils/selector.js";
import { scrapingComponent_forinov_main, t_unionIdPath_mapRegex_forinov_main, t_arrClassName_main, t_unionClassName_main, t_arrChilds_main, t_unionRegex_mapRegex_forinov_main, t_IJsonComponent_main } from "@/routes/scraping-services/Data/forinov/Services/Main/Main.js";
import { root_mainPage_child_selectors, t_forinov_main_rootClassName } from "@/routes/scraping-services/Data/forinov/Services/Main/types.js";
import { req_main, res_main } from "./routes.input.js";
import { arrToUnion, reshapeObject } from "@shared/type.js";
import { rootClassName, t_arr_component, t_rootClassName } from "@/utils/scraping/PageParsing/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _isNullOrUndefined } from "@shared/m_primitives.js";
import { df_arr_fct_name, str_getLocalFunction, str_getServiceFunction, t_df_arr_fct_name, t_str_getServiceFunction } from "@/routes/scraping-services/class/Config/Pipeline/HA/types.js";
import { ReqAndResType } from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";
import { getIdxIdHomeRoute } from "@/controller/scraping-services/class/Config/types.js";

type t_args_getTree < BaseElement extends t_unionClassName_main=t_rootClassName>= t_AHA_Service_ArgsGetTree<t_serviceName_forinov,t_str_main,BaseElement,t_unionRegex_mapRegex_forinov_main ,t_unionIdPath_mapRegex_forinov_main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main>


type t_1 = t_unionRegex_mapRegex_forinov_main
type t_2 = t_unionIdPath_mapRegex_forinov_main
type t_3 = readonly[ t_rootClassName , ...readonly (Exclude<t_arrClassName_main[number],t_rootClassName>)[]]
type t_4 = t_unionClassName_main
type t_5 =   readonly (t_arrChilds_main[number])[]
type t_6 =  {[k in keyof t_IJsonComponent_main ]: t_IJsonComponent_main[k]}


//TODO function cannot return undefined as value 
class HA_ForinovServiceMain extends AHA_ServiceBase<t_serviceName_forinov,t_str_main,req_main,res_main,t_unionRegex_mapRegex_forinov_main ,t_unionIdPath_mapRegex_forinov_main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main,t_df_arr_fct_name> implements t_IAHA_ServiceBase<t_serviceName_forinov,t_str_main,req_main,res_main,t_unionRegex_mapRegex_forinov_main ,t_unionIdPath_mapRegex_forinov_main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main,t_df_arr_fct_name >
{

    serviceName: t_serviceName_forinov = serviceName_forinov
    routeName : t_str_main = str_main 
    constructor() {
        super()
    }


    [str_getLocalFunction]( req:req_main , res : res_main  ): t_ha_res {
        return AService.df_localFunction()
    }

    static getDfArgsGetTree :()=> t_args_getTree = ()=>{ /*console.log("DEBUG_ME",getCurrentLine());*/return {
        params:{
            routeName:str_main,
            prop_base_selectors:root_mainPage_child_selectors,
            prop_base:rootClassName
        },
        fct_loading:{
            waitForPageLoading:waitForForinovPageLoading,
            waitForPageFullLoading:waitForForinovPageFullLoading,
        }

    }}

    getServiceParam (req:req_main , res : res_main):t_AHA_Service_Param<t_serviceName_forinov,t_str_main>{
        return AHA_ServiceBase.getServiceParam<t_serviceName_forinov,t_str_main,req_main,res_main>(req,res)
    }


    getTreeParam< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_main , res : res_main,_args:reshapeObject< t_AHA_Service_ArgsGetTree<t_serviceName_forinov,t_str_main,BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ): Parameters<typeof AHA_ServiceBase._getTree<t_serviceName_forinov,t_str_main,BaseElement,  t_unionRegex_mapRegex_forinov_main ,t_unionIdPath_mapRegex_forinov_main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main>> {

        //{scrapingComponent:ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,waitForPageLoading:t_page_fct_getMainComponent,waitForPageFullLoading:t_page_fct_waitForPageFullLoading,prop_base_selectors:selectors,prop_base:unionClassNameType}

        const args = {
            ...HA_ForinovServiceMain.getDfArgsGetTree(),
            ..._args
        } as t_args_getTree<BaseElement>

        const param :t_AHA_Service_ParamGetTree<t_serviceName_forinov,t_str_main,BaseElement,  t_unionRegex_mapRegex_forinov_main ,t_unionIdPath_mapRegex_forinov_main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main> = {
            ...this.getServiceParam(req,res),
            ...args.params
        }
        const fct_loading = {
            ...args.fct_loading
        }

        return [param,fct_loading]
    }

    getTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_main , res : res_main,_args:reshapeObject< t_AHA_Service_ArgsGetTree<t_serviceName_forinov,t_str_main,BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        const params = this.getTreeParam(req,res,_args)
        return AHA_ServiceBase._getTree< t_serviceName_forinov,t_str_main,BaseElement,  t_unionRegex_mapRegex_forinov_main ,t_unionIdPath_mapRegex_forinov_main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main>(...params)
    }

    [str_getServiceFunction](req: req_main, res: res_main): t_ha_res{
        throw new Error("Method not implemented."); 

    }

    transformAfterGetServiceFunction(req: req_main, res: res_main, json:Awaited<ReturnType <typeof HA_ForinovServiceMain.provider[t_str_getServiceFunction]>>): ReqAndResType<req_main, res_main> {
        throw new Error("Method not implemented."); 
    }

    getDatabaseLocalAndRemote() {
        throw new Error("Method not implemented."); 
    }

    namesOfPipelineFunction(){
        return [...df_arr_fct_name] as const 
    }

    static provider = new HA_ForinovServiceMain()


}

export default HA_ForinovServiceMain.provider
