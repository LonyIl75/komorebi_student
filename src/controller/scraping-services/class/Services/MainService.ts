import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("scrapingServices_Services","MainService")
const debug_MainService : Debugger = debug(name_module)


import  { f_AMainService   } from "./AMainService.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js";
import {  isNotLoginRoute} from '../Config/types.js';
import { ServiceConfig, f_ServiceConfig } from '../Config/ServiceConfig.js';
import { _validateServiceName, _validateRemoteAddress, _validateIdHome, _validateRoute, _validateRouteAndAddress, _validateServJson, _C_ServJson, _C_RA, _C_H, _C_R, _C_T1, _C_SN, _fnValidateServiceName, t_args_validateServiceName, FnValidateServiceName, FnValidateRouteAndAddress, FnValidateServJson, FnValidateIdHome, FnValidateRoute, FnValidateRemoteAddress } from '../constraints.js';
import { IJson_ServiceConfig } from '../Config/IJson_ServiceConfig.js'

export type t_doServiceFunction<SN extends _validateServiceName  , R extends _validateRemoteAddress<SN> , H extends _validateIdHome<SN>  , T1 extends _validateRoute<SN> >= 
 (id_route : T1[number], functionName : string  ,  ...args:any[]) => Promise<any|null>


 export  function f_MainService<C_SN extends _validateServiceName  ,  C_FR extends FnValidateRemoteAddress ,  C_FH extends FnValidateIdHome   , C_FT1 extends FnValidateRoute, C_FSN extends FnValidateServiceName=FnValidateServiceName ,C_FRA extends FnValidateRouteAndAddress =FnValidateRouteAndAddress , C_FServJson extends FnValidateServJson = FnValidateServJson>( ) { 
    class MainService< SN extends C_SN  , R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]>   , T1 extends  _C_T1<C_FT1,[SN]>  ,RA extends _C_RA<C_FRA,_C_SN_Result> , ServJson extends _C_ServJson<C_FServJson,_C_SN_Result>  = _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])>,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1])> extends f_AMainService<C_SN,C_FR,C_FH,C_FT1,C_FSN,C_FRA,C_FServJson>()<SN,R,H,T1,RA,ServJson,_C_SN_Result> {

        getAddress(req_rdd : ((keyof ServJson) & T1[number]) ) {
            return super.getAddressOfService(req_rdd) ;
        }


        static getService<SN extends C_SN , R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]> , T1 extends _C_T1<C_FT1,[SN]> ,RA extends _C_RA<C_FRA,_C_SN_Result> , _R extends ((keyof _C_ServJson<C_FServJson,_C_SN_Result>) & T1[number])  = ((keyof _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])> ) & T1[number]),ServJson extends _C_ServJson<C_FServJson,_C_SN_Result> = _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])>,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1]) >(  obj: MainService<SN,R,H,T1,RA,ServJson,_C_SN_Result>,id_route : _R)  {  
            console.log("getService |id_route |services " , id_route , obj.services)
            return obj.services[id_route] as ServJson[_R] ;
        }

        static doServiceFunction<SN extends C_SN , R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]> , T1 extends _C_T1<C_FT1,[SN]> ,RA extends _C_RA<C_FRA,_C_SN_Result> , _R extends ((keyof _C_ServJson<C_FServJson,_C_SN_Result>) & T1[number])  = ((keyof _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])> ) & T1[number]),ServJson extends _C_ServJson<C_FServJson,_C_SN_Result> = _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])>,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1]) >(  obj: MainService<SN,R,H,T1,RA,ServJson,_C_SN_Result>, id_route :_R, functionName : string  ,  ...args:any[]){ 
            return f_AMainService<C_SN,C_FR,C_FH,C_FT1,C_FSN,C_FRA,C_FServJson>().doServiceFunction<SN,R,H,T1,RA,_R,ServJson,_C_SN_Result>(obj,id_route  , functionName , ...args) ;
        }

        constructor(config: ServiceConfig<SN,R, H, T1,RA> , localAndRemote_database : DatabaseLocalAndRemote<SN> ) { 
            super(config,localAndRemote_database);
        }

        static async cst_fromObj<SN extends C_SN , R extends _C_R<C_FR,[SN]>  , H extends _C_H<C_FH,[SN]>    , T1 extends  _C_T1<C_FT1,[SN]>  ,RA extends _C_RA<C_FRA, _C_SN<C_FSN, [SN]> & [SN, R, T1]>, ServJson extends _C_ServJson<C_FServJson,_C_SN_Result>  = _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])> ,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1])>(obj :MainService<SN,R,H,T1,RA,ServJson> )  : Promise<MainService<SN,R,H,T1,RA,ServJson>> {
        
                type t_curR = ((keyof ServJson) & T1[number])
                
                const arr_route :T1  = obj.config.idRoutes
                for(const idx in arr_route  ) {   
                    //@ts-ignore
                    const key : t_curR = arr_route[idx] ;
                    //@ts-ignore
                    await (async( _obj : MainService<SN ,R,H,T1,RA,ServJson>,_key : t_curR  ) => await  f_AMainService<C_SN,C_FR,C_FH,C_FT1,C_FRA,C_FServJson>().getImportClassService<SN , R,H,T1,RA,t_curR,ServJson > ( _obj  ,_key  ) 
                    .then( ( class_instance :  Awaited<ServJson[t_curR]>   ) =>{ 
                        const r = Promise.resolve(class_instance) as unknown as ServJson[t_curR] 
                        if(isNotLoginRoute(key) ) _obj.services[_key]=  r;
                        else _obj.loginService = r// as _ALoginService ;
                    }) )(obj  ,key  as t_curR  );//ICI 18 
        
        
                }
                
                return obj ;
            }
        

        static async cst<SN extends C_SN  , R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]>  , T1 extends _C_T1<C_FT1,[SN]> ,RA extends _C_RA<C_FRA, _C_SN<C_FSN, [SN]> & [SN, R, T1]> , ServJson extends _C_ServJson<C_FServJson,_C_SN_Result>  = _C_ServJson<C_FServJson,(_C_SN<C_FSN,[SN]>& [SN, R, T1])> ,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1]) >(   
            _config : IJson_ServiceConfig<SN ,R,H,T1,RA>,
            localAndRemote_database : DatabaseLocalAndRemote<SN>,
            //TODO:
            //_database_constructor : (_json:t_jsonDatabase)=>t_database //{ new (): DB }
        )  :
        Promise<MainService<SN ,R,H ,T1 ,RA, ServJson>>  {
            const config :ServiceConfig< SN,R,H,T1,RA> = f_ServiceConfig<C_SN,C_FR,C_FH,C_FT1,C_FSN,C_FRA>().json_builder<SN,R,H,T1,RA>(_config) ;
            let obj : MainService<SN,R,H,T1,RA,ServJson> = new MainService<SN,R,H,T1,RA,ServJson>(config ,localAndRemote_database) as MainService<SN,R,H,T1,RA,ServJson>
            return await MainService.cst_fromObj<SN,R,H,T1,RA,ServJson>(obj ).then(async (res_obj)=>{ 
                await res_obj.waitForConnectionsLocalAndRemoteDatabase()
                return res_obj;
            })
            


        }
            
        

        

    }
    return MainService
}


export class MainService <SN extends _validateServiceName  , R extends _validateRemoteAddress<SN>  , H extends _validateIdHome<SN>  , T1 extends _validateRoute<SN> ,
RA extends _C_RA<FnValidateRouteAndAddress, _C_SN<FnValidateServiceName,[SN]> & [SN, R, T1]>, 
ServJson extends _C_ServJson<FnValidateServJson, _C_SN<FnValidateServiceName,[SN]>& [SN, R, T1]> =_C_ServJson<FnValidateServJson, _C_SN<FnValidateServiceName,[SN]> & [SN, R, T1]>> extends 
f_MainService<_validateServiceName,FnValidateRemoteAddress,FnValidateIdHome,FnValidateRoute,FnValidateServiceName,FnValidateRouteAndAddress,FnValidateServJson>()<SN,R,H,T1,RA,ServJson> {}

