import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("scrapingServices_Config","ServiceConfig")
const debug_serviceConfig : Debugger = debug(name_module)



import {  _getIsLocal } from "@/config/envVar.js";
import {  df, str_idRoutes, str_doProcessFunctionName, str_idRoute_home, str_mainAddress, str_remoteAddress, str_idRouteAndRemoteAddresss, getPatternArrRouteIdAndRemoteAddress } from "./types.js";
import { getLocalAdressFromServiceAddressBody, getRemoteAdressFromServiceAddressBody, getScrapingPageUrl, getServiceAddress,  serviceAdress }  from "@/../shared/routePath.js";
import {  _C_H, _C_R, _C_RA, _C_SN, _C_T1, _fnValidateServiceName, _validateIdHome, _validateRemoteAddress, _validateRoute, _validateRouteAndAddress, _validateServiceName, t_args_validateServiceName, FnValidateIdHome, FnValidateRemoteAddress, FnValidateRoute, FnValidateRouteAndAddress, FnValidateServiceName } from '../constraints.js';
import { IJson_ServiceConfig, getRootRepertoryName, t_IJson_ServiceConfig_any } from './IJson_ServiceConfig.js';




export interface IServiceConfig<SN extends _validateServiceName  , R extends _validateRemoteAddress<SN> , H extends _validateIdHome<SN>  , T1 extends _validateRoute<SN>  ,RA extends _validateRouteAndAddress<SN,R,T1>   > {
    remoteName : string,
    [str_remoteAddress] : R,
    [str_mainAddress] : string,
    [str_idRoute_home] : H, 
    //_idRoutes :  t_arrFromHomeAndRoutes<H,T1> ;
    [str_idRoutes] : T1;
    [str_idRouteAndRemoteAddresss] : RA;
    [str_doProcessFunctionName] : string,
    service_address:  serviceAdress< T1[number] , string , string > ;
    url_main_page:string;
    serviceName :SN;
}


export class __ServiceConfig<SN extends _validateServiceName  , R extends _validateRemoteAddress<SN> , H extends _validateIdHome<SN>  , T1 extends _validateRoute<SN>   ,RA extends _validateRouteAndAddress<SN,R,T1>   > implements IServiceConfig<SN  , R,H , T1,RA> {

    static df = df 
    //static df_idRoute_home_strTrad :string  = ""  as const ;

    serviceName :SN;
    remoteName : string;
    [str_remoteAddress] : R;
    [str_mainAddress] : string;
    [str_idRoute_home]  :  H; 
    url_main_page:string;
    //_idRoutes :  t_arrFromHomeAndRoutes<H,T1> ;
    [str_idRoutes] :T1;
    [str_idRouteAndRemoteAddresss] : RA;
    [str_doProcessFunctionName] : string = __ServiceConfig.df[str_doProcessFunctionName] ;
    service_address:  serviceAdress< T1[number]  , string , string > ;


    constructor(serviceName :SN , remoteName : string,remoteAddress : R ,mainAddress : string,idRoute_home:H 
        ,idRoutes:T1 , idRouteAndRemoteAddresss : RA ,  doProcessFunctionName : string = __ServiceConfig.df[str_doProcessFunctionName]  ) {

        this.serviceName = serviceName;
        this.remoteName = remoteName;
        this.remoteAddress = remoteAddress;
        this.mainAddress = mainAddress;
        this.idRoute_home  = idRoute_home ;
        //this._idRoutes = _idRoutes ;
        this.idRoutes  =  idRoutes ;
        this.idRouteAndRemoteAddresss = idRouteAndRemoteAddresss;
        this.doProcessFunctionName = doProcessFunctionName;
        this.service_address =  getServiceAddress<SN, typeof remoteName , R , T1  >(this.serviceName,this.remoteName , this.remoteAddress , idRoutes )  as serviceAdress <T1[number] , string , string> ;
        const _tmp :[H] = [idRoute_home]
        this.url_main_page =  getScrapingPageUrl<R,  [H]>(__ServiceConfig.isLocal() , this.remoteAddress , _tmp)[_tmp.length-1] as string  ;
    


    }
    
    getAddressOfService(req_add :T1[number] ) : string {
        return ((_x)=> (__ServiceConfig.isLocal()? getLocalAdressFromServiceAddressBody(_x) : getRemoteAdressFromServiceAddressBody(_x)))(this.service_address[req_add]);
    }

    getServiceAddress(){
        return this.service_address;
    }

    getRemoteRoute():string[] {
        //A FAIRE extract misc
        let res : string [] =[]
        for(const key in this.service_address   ) {
            res.push(getRemoteAdressFromServiceAddressBody(this.service_address[key]));
        }
        return res;
    }

    getLocalRoute() :string[] {
        //A FAIRE extract misc
        let res : string [] =[]
        for(const key in this.service_address   ) {
            res.push(getLocalAdressFromServiceAddressBody(this.service_address[key]));
        }
        return res;
    }

    static isLocal():boolean {  
        return _getIsLocal();
        }
}


export function f_ServiceConfig<C_SN extends _validateServiceName  , C_FR extends FnValidateRemoteAddress , C_FH extends FnValidateIdHome   ,C_FT1 extends FnValidateRoute,C_FSN extends FnValidateServiceName=FnValidateServiceName , C_FRA extends FnValidateRouteAndAddress=FnValidateRouteAndAddress>() {
    class _ServiceConfig<SN extends C_SN  , R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]>  , T1 extends _C_T1<C_FT1,[SN]>   ,RA extends _C_RA<C_FRA,_C_SN_Result> ,_C_SN_Result extends (_C_SN<C_FSN,[SN]>& [SN, R, T1]) = (_C_SN<C_FSN,[SN]>& [SN, R, T1]) > extends __ServiceConfig<SN  , R,H , T1,RA> {

        static df = df 

        serviceName :SN;
        remoteName : string;
        [str_remoteAddress] : R;
        [str_mainAddress] : string;
        [str_idRoute_home]  :  H; 
        url_main_page:string;
        [str_idRoutes] :T1;//? t_arrFromHomeAndRoutes<H,T1> ;
        [str_idRouteAndRemoteAddresss] : RA;
        [str_doProcessFunctionName] : string = _ServiceConfig.df[str_doProcessFunctionName] ;
        service_address:  serviceAdress< T1[number]  , string , string > ;

    static json_builder <SN extends C_SN  , R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]>  ,T1 extends _C_T1<C_FT1,[SN]>,RA extends _C_RA<C_FRA,[SN, R, T1]>>
    (
        _json : IJson_ServiceConfig<SN ,R,H,T1,RA>    
    ){
        return _ServiceConfig.builder<SN ,R ,H,T1 ,RA >(_json.serviceName , _json.remoteName ,_json.remoteAddress ,_json.mainAddress ,_json.idRoute_home , _json.idRoutes , _json.idRouteAndRemoteAddresss , _json.doProcessFunctionName );
    }

    static strToStrRoute<SN extends C_SN  , T1 extends _C_T1<C_FT1,[SN]>,_R extends T1[number]  =  T1[number]> (str_route : _R , 
        config : t_IJson_ServiceConfig_any
    ):string   {
        return str_route == _ServiceConfig.df[str_idRoute_home] ?  getRootRepertoryName(config) /*config.mainAddress*/  :str_route ;
    }


    static builder<SN extends C_SN  , R extends _C_R<C_FR,[SN]> , H extends _C_H<C_FH,[SN]>  ,T1 extends _C_T1<C_FT1,[SN]>,RA extends _C_RA<C_FRA,[SN, R, T1]>>
        (serviceName :SN , remoteName : string,remoteAddress : R,mainAddress : string,idRoute_home:H , idRoutes: T1 , idRouteAndRemoteAddresss : RA , doProcessFunctionName : string = _ServiceConfig.df[str_doProcessFunctionName]){

        //const idRoutes :  t_all_routesArrByServiceName< SN>  = [...id_arr_serviceRoutes ,..._idRoutes ]  ;//"login" ; id_arr_serviceRoutes
        return new _ServiceConfig<SN,R , H,T1,RA>  (serviceName , remoteName ,remoteAddress ,mainAddress,idRoute_home, idRoutes ,idRouteAndRemoteAddresss , doProcessFunctionName );

    }


        constructor(serviceName :SN , remoteName : string,remoteAddress : R ,mainAddress : string,idRoute_home:H 
            ,idRoutes:T1 , idRouteAndRemoteAddresss : RA ,  doProcessFunctionName : string = _ServiceConfig.df[str_doProcessFunctionName]  ) {
            super(serviceName , remoteName ,remoteAddress ,mainAddress,idRoute_home, idRoutes ,idRouteAndRemoteAddresss , doProcessFunctionName );
        }
        
    }

    return _ServiceConfig

}

export class ServiceConfig<SN extends _validateServiceName  , R extends _validateRemoteAddress<SN> , H extends _validateIdHome<SN>  , T1 extends _validateRoute<SN>   ,RA extends _C_RA<FnValidateRouteAndAddress, _fnValidateServiceName<t_args_validateServiceName> & [SN, R, T1]>>
extends f_ServiceConfig<_validateServiceName,FnValidateRemoteAddress,FnValidateIdHome,FnValidateRoute,FnValidateServiceName,FnValidateRouteAndAddress>()<SN,R,H,T1,RA> {}
