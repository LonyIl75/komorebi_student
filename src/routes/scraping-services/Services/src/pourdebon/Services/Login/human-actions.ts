import { idRoutes_pourdebon, serviceName_pourdebon } from "@/controller/scraping-services/Services/Config/pourdebon/config.js";


export const str_login = idRoutes_pourdebon[0] 
export type t_str_login = typeof str_login


import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "@shared/m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug, take_screenshot } from "@shared/str_debug.js";
import { getNameModuleService } from "@/controller/scraping-services/class/utils/utils.js";
import { getNameModuleScraping } from "@/utils/scraping/primitives/name.js";

const name_module :string = getNameModuleScraping(serviceName_pourdebon,str_login)
const debug_scrapL_login :Debugger  = debug(name_module)

import { AService } from "@/routes/scraping-services/class/Services/AService.js";
import { AHA_ServiceBase, t_AHA_Service_ArgsGetTree, t_AHA_Service_Param, t_AHA_Service_ParamGetTree, t_ha_res} from "@/routes/scraping-services/class/Config/Pipeline/HA/Pipeline.js";
import { waitForPourdebonPageLoading, waitForPourdebonPageFullLoading } from "../utils/selectors.js";
import { scrapingComponent_pourdebon_login, t_unionRegex_mapRegex_pourdebon_login, t_arrClassName_login, t_unionClassName_login, t_arrChilds_login, t_unionIdPath_mapRegex_pourdebon_login, t_IJsonComponent_login } from "@/routes/scraping-services/Data/pourdebon/Services/Login/Login.js";
import { root_loginPage_child_selectors, t_pourdebon_login_rootClassName } from "@/routes/scraping-services/Data/pourdebon/Services/Login/types.js";
import { req_login, res_login } from "./routes.input.js";
import { arrToUnion, reshapeObject } from "@shared/type.js";
import { rootClassName, t_arr_component, t_rootClassName } from "@/utils/scraping/PageParsing/types.js";
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js";
import { _isNullOrUndefined } from "@shared/m_primitives.js";
import { df_arr_fct_name, t_df_arr_fct_name } from "@/routes/scraping-services/class/Config/Pipeline/HA/types.js";
import { ReqAndResType } from "@/routes/scraping-services/class/utils/Data/ReqResRoute.js";

type t_args_getTree < BaseElement extends t_unionClassName_login=t_rootClassName>= t_AHA_Service_ArgsGetTree<BaseElement,t_unionRegex_mapRegex_pourdebon_login ,t_unionIdPath_mapRegex_pourdebon_login , t_arrClassName_login,t_unionClassName_login ,t_arrChilds_login ,  t_IJsonComponent_login>


type t_1 = t_unionRegex_mapRegex_pourdebon_login
type t_2 = t_unionIdPath_mapRegex_pourdebon_login
type t_3 = readonly[ t_rootClassName , ...readonly (Exclude<t_arrClassName_login[number],t_rootClassName>)[]]
type t_4 = t_unionClassName_login
type t_5 =   readonly (t_arrChilds_login[number])[]
type t_6 =  {[k in keyof t_IJsonComponent_login ]: t_IJsonComponent_login[k]}


//TODO function cannot return undefined as value 
class HA_PourdebonServiceLogin implements AHA_ServiceBase<req_login,res_login,t_unionRegex_mapRegex_pourdebon_login ,t_unionIdPath_mapRegex_pourdebon_login , t_arrClassName_login,t_unionClassName_login ,t_arrChilds_login ,  t_IJsonComponent_login,t_df_arr_fct_name> {

    constructor() {}

    

    getLocalFunction( req:req_login , res : res_login  ): t_ha_res {
        return AService.df_localFunction()
    }

    static getDfArgsGetTree :()=> t_args_getTree = ()=>{return {
        params:{
            prop_base_selectors:root_loginPage_child_selectors,
            prop_base:rootClassName
        },
        fct_loading:{
            waitForPageLoading:waitForPourdebonPageLoading,
            waitForPageFullLoading:waitForPourdebonPageFullLoading,
        }

    }}

    getServiceParam (req:req_login , res : res_login):t_AHA_Service_Param{
        return AHA_ServiceBase.getServiceParam<req_login,res_login>(req,res)
    }


    getParamTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_login , res : res_login,_args:reshapeObject< t_AHA_Service_ArgsGetTree<BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ): Parameters<typeof AHA_ServiceBase._getTree<BaseElement,  t_unionRegex_mapRegex_pourdebon_login ,t_unionIdPath_mapRegex_pourdebon_login , t_arrClassName_login,t_unionClassName_login ,t_arrChilds_login ,  t_IJsonComponent_login>> {

        //{scrapingComponent:ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,waitForPageLoading:t_page_fct_getMainComponent,waitForPageFullLoading:t_page_fct_waitForPageFullLoading,prop_base_selectors:selectors,prop_base:unionClassNameType}

        const args = {
            ...HA_PourdebonServiceLogin.getDfArgsGetTree(),
            ..._args
        } as t_args_getTree<BaseElement>

        const param :t_AHA_Service_ParamGetTree<BaseElement,  t_unionRegex_mapRegex_pourdebon_login ,t_unionIdPath_mapRegex_pourdebon_login , t_arrClassName_login,t_unionClassName_login ,t_arrChilds_login ,  t_IJsonComponent_login> = {
            ...this.getServiceParam(req,res),
            ...args.params
        }
        const fct_loading = {
            ...args.fct_loading
        }

        return [param,fct_loading]
    }

    getTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_login , res : res_login,_args:reshapeObject< t_AHA_Service_ArgsGetTree<BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ){
        const params = this.getParamTree(req,res,_args)
        return AHA_ServiceBase._getTree< BaseElement,  t_unionRegex_mapRegex_pourdebon_login ,t_unionIdPath_mapRegex_pourdebon_login , t_arrClassName_login,t_unionClassName_login ,t_arrChilds_login ,  t_IJsonComponent_login>(...params)
    }

    getServiceFunction(req: req_login, res: res_login): t_ha_res{
        throw new Error("Method not implemented."); 
    }

    transformAfterGetServiceFunction(req: req_login, res: res_login, json:Awaited<ReturnType <typeof HA_PourdebonServiceLogin.provider.getServiceFunction>>): ReqAndResType<req_login, res_login> {
        throw new Error("Method not implemented."); 
    }

    getDatabaseLocalAndRemote() {
        throw new Error("Method not implemented."); 
    }

    namesOfPipelineFunction(){
        return [...df_arr_fct_name] as const 
    }

    static provider = new HA_PourdebonServiceLogin()


}

export default HA_PourdebonServiceLogin.provider