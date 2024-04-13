import { idRoutes_pourdebon, serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js";


export const str_main = idRoutes_pourdebon[1] 
export type t_str_main = typeof str_main


import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";
import { getNameModuleScraping } from "@/utils/scraping/primitives/name.js";

const name_module :string = getNameModuleScraping(serviceName_pourdebon,str_main)
const debug_scrapL_main :Debugger  = debug(name_module)

import { AService } from "@/routes/scraping-services/class/Services/AService.js";
import { AHA_ServiceBase, t_AHA_Service_ArgsGetTree, t_AHA_Service_Param, t_AHA_Service_ParamGetTree, t_ha_res} from "@/routes/scraping-services/class/Config/Pipeline/HA/Pipeline.js";
import { waitForPourdebonPageLoading, waitForPourdebonPageFullLoading } from "../utils/selectors.js";
import { scrapingComponent_pourdebon_main, t_unionIdPath_mapRegex_pourdebon_main, t_arrClassName_main, t_unionClassName_main, t_arrChilds_main, t_unionRegex_mapRegex_pourdebon_main, t_IJsonComponent_main } from "@/routes/scraping-services/Data/pourdebon/Services/Main/Main.js";
import { root_mainPage_child_selectors, t_pourdebon_main_rootClassName } from "@/routes/scraping-services/Data/pourdebon/Services/Main/types.js";
import { req_main, res_main } from "./routes.input.js";
import { arrToUnion, reshapeObject } from "@shared/type.js";
import { rootClassName, t_arr_component, t_rootClassName } from "@/utils/scraping/PageParsing/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _isNullOrUndefined } from "@shared/m_primitives.js";
import { df_arr_fct_name, t_df_arr_fct_name } from "@/routes/scraping-services/class/Config/Pipeline/HA/types.js";
import { ReqAndResType } from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";

type t_args_getTree < BaseElement extends t_unionClassName_main=t_rootClassName>= t_AHA_Service_ArgsGetTree<BaseElement,t_unionRegex_mapRegex_pourdebon_main ,t_unionIdPath_mapRegex_pourdebon_main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main>


type t_1 = t_unionRegex_mapRegex_pourdebon_main
type t_2 = t_unionIdPath_mapRegex_pourdebon_main
type t_3 = readonly[ t_rootClassName , ...readonly (Exclude<t_arrClassName_main[number],t_rootClassName>)[]]
type t_4 = t_unionClassName_main
type t_5 =   readonly (t_arrChilds_main[number])[]
type t_6 =  {[k in keyof t_IJsonComponent_main ]: t_IJsonComponent_main[k]}


//TODO function cannot return undefined as value 
class HA_PourdebonServiceMain implements AHA_ServiceBase<req_main,res_main,t_unionRegex_mapRegex_pourdebon_main ,t_unionIdPath_mapRegex_pourdebon_main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main,t_df_arr_fct_name> {

    constructor() {}

    

    getLocalFunction( req:req_main , res : res_main  ): t_ha_res {
        return AService.df_localFunction()
    }

    static getDfArgsGetTree :()=> t_args_getTree = ()=>{return {
        params:{
            prop_base_selectors:root_mainPage_child_selectors,
            prop_base:rootClassName
        },
        fct_loading:{
            waitForPageLoading:waitForPourdebonPageLoading,
            waitForPageFullLoading:waitForPourdebonPageFullLoading,
        }

    }}

    getServiceParam (req:req_main , res : res_main):t_AHA_Service_Param{
        return AHA_ServiceBase.getServiceParam<req_main,res_main>(req,res)
    }


    getParamTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_main , res : res_main,_args:reshapeObject< t_AHA_Service_ArgsGetTree<BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ): Parameters<typeof AHA_ServiceBase._getTree<BaseElement,  t_unionRegex_mapRegex_pourdebon_main ,t_unionIdPath_mapRegex_pourdebon_main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main>> {

        //{scrapingComponent:ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,waitForPageLoading:t_page_fct_getMainComponent,waitForPageFullLoading:t_page_fct_waitForPageFullLoading,prop_base_selectors:selectors,prop_base:unionClassNameType}

        const args = {
            ...HA_PourdebonServiceMain.getDfArgsGetTree(),
            ..._args
        } as t_args_getTree<BaseElement>

        const param :t_AHA_Service_ParamGetTree<BaseElement,  t_unionRegex_mapRegex_pourdebon_main ,t_unionIdPath_mapRegex_pourdebon_main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main> = {
            ...this.getServiceParam(req,res),
            ...args.params
        }
        const fct_loading = {
            ...args.fct_loading
        }

        return [param,fct_loading]
    }

    getTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_main , res : res_main,_args:reshapeObject< t_AHA_Service_ArgsGetTree<BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ){
        const params = this.getParamTree(req,res,_args)
        return AHA_ServiceBase._getTree< BaseElement,  t_unionRegex_mapRegex_pourdebon_main ,t_unionIdPath_mapRegex_pourdebon_main , t_arrClassName_main,t_unionClassName_main ,t_arrChilds_main ,  t_IJsonComponent_main>(...params)
    }

    getServiceFunction(req: req_main, res: res_main): t_ha_res{
        throw new Error("Method not implemented."); 

    }

    transformAfterGetServiceFunction(req: req_main, res: res_main, json:Awaited<ReturnType <typeof HA_PourdebonServiceMain.provider.getServiceFunction>>): ReqAndResType<req_main, res_main> {
        throw new Error("Method not implemented."); 
    }

    getDatabaseLocalAndRemote() {
        throw new Error("Method not implemented."); 
    }

    namesOfPipelineFunction(){
        return [...df_arr_fct_name] as const 
    }

    static provider = new HA_PourdebonServiceMain()


}

export default HA_PourdebonServiceMain.provider