import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  =  getNameModule("scrapingServices_Config","IJson_ServiceConfig")
const debug_IJsonConfig : Debugger = debug(name_module)


import { IJson} from "@/../shared/m_object.js";
import { createAddress } from "@/../shared/routePath.js";
import { FixTuple, UnionToArray, arrToUnion, t_function } from '@shared/type.js';

export type t_routeIdAndRemoteAddress = readonly [string , string] ;
export type t_arrRouteIdAndRemoteAddress = readonly t_routeIdAndRemoteAddress[] ;

const getIdxRemoteAddressFromRouteIdAndRemoteAddress = ():1=> 1  ;
export type idx_remoteAddressFromRouteIdAndRemoteAddress = ReturnType<typeof getIdxRemoteAddressFromRouteIdAndRemoteAddress> ;

const getIdxIdRouteFromIdAndRemoteAddress = ():0=> 0  ;
export type idx_idRouteFromRouteIdAndRemoteAddress =  ReturnType<typeof getIdxIdRouteFromIdAndRemoteAddress> ;


export type t_getIdRouteFromIdAndRemoteAddress<T extends t_routeIdAndRemoteAddress> = T[idx_idRouteFromRouteIdAndRemoteAddress] ;
export type t_getRemoteAddressFromIdAndRemoteAddress<T extends t_routeIdAndRemoteAddress> = T[idx_remoteAddressFromRouteIdAndRemoteAddress] ;

export function getIdRouteFromIdAndRemoteAddress(arr:t_routeIdAndRemoteAddress)  {
    return arr[getIdxIdRouteFromIdAndRemoteAddress()] ;
}

export function getRemoteAddressFromIdAndRemoteAddress(arr:t_routeIdAndRemoteAddress)  {
    return arr[getIdxRemoteAddressFromRouteIdAndRemoteAddress()] ;
}

export type getRemoteAddressIdHomeRouteFromArr<T extends t_arrRouteIdAndRemoteAddress  > = t_getIdRouteFromIdAndRemoteAddress<T[idx_idHomeRoute]>  ;


/*
export  type getPatternArrRouteIdAndRemoteAddress< idRoutes extends readonly string[] , R extends string  > = 
 string[] extends idRoutes? (readonly [idRoutes[number], Exclude<ReturnType<typeof createAddress< [R]>>,"">|R ])[]:
UnionToArray<idRoutes[number]> extends infer idRoutes? idRoutes extends readonly string[] ? _getPatternArrRouteIdAndRemoteAddress<idRoutes,R> : never : never
*/

export  type getPatternArrRouteIdAndRemoteAddress< idRoutes extends readonly string[] , R extends string  > = 
string[] extends idRoutes?  
    (readonly [idRoutes[number], Exclude<ReturnType<typeof createAddress< [R]>>,"">|R ])[] :
_getPatternArrRouteIdAndRemoteAddress<FixTuple<idRoutes>,R>

type _getPatternArrRouteIdAndRemoteAddress< idRoutes extends readonly string[] , R extends string  > = 
     idRoutes extends readonly [infer Id , ... infer Arr ]  ?
         Arr extends readonly string[] ? 
            [ readonly [Id, Exclude<ReturnType<typeof createAddress< [R]>>,"">|R ]  , ... getPatternArrRouteIdAndRemoteAddress<Arr,R> ] 
        :  [ readonly [Id, Exclude<ReturnType<typeof createAddress< [R]>>,"">|R ] ] 
    :[]


export type initMap < ids extends readonly any[] , dfValue extends any > = 
ids extends readonly [infer Id , ... infer Arr ] ? Arr extends readonly any[] ? 
[readonly [Id,dfValue]  , ... initMap < Arr , dfValue > ] : readonly [Id,dfValue] :[]




export const str_idRoute_home = "idRoute_home" as const ;
export type t_str_idRoute_home = typeof str_idRoute_home ;

export const str_main = "main" as const
export type t_str_main = typeof str_main ;

export const df_RootRepertoryName   = str_main ;
export type t_df_RootRepertoryName = typeof df_RootRepertoryName

export const df_idRoute_home  = "_"  as const ;
export type t_df_idRoute_home = typeof df_idRoute_home ;
export const isNotIdRouteHome = <T extends string >(key:T) => (key !== df_idRoute_home)  as T extends t_df_idRoute_home ? false : true ;

export const str_idRoutes = "idRoutes" as const ;
export type t_str_idRoutes = typeof str_idRoutes ;

export const str_login = "login"
export type t_str_login = typeof str_login ;
type t_isNotLogin <T extends string > = T extends t_str_login ? false : true ;
export const isNotLoginRoute = <T extends string >(key:T) => (key !== str_login) as t_isNotLogin<T> ;
export const getIdxIdLoginRoute = ():0=> 0  ;

const id_val_serviceRoutes = [str_login] as const ; //[ "login" ,"posts", "profile" ]  as const ;
export const id_arr_serviceRoutes =  [...id_val_serviceRoutes ]   as const ; 
export type t_base_id_serviceRoutes = typeof id_arr_serviceRoutes;
export type base_id_serviceRoutes = arrToUnion <t_base_id_serviceRoutes>;

type t_isNotHomeRoute <T extends string > = T extends t_str_idRoute_home ? false : true ;
export const isNotHomeRoute = <T extends string >(key:T)  => (key !== str_main) as t_isNotHomeRoute<T> ;
export const getIdxIdHomeRoute = ():t_base_id_serviceRoutes["length"]=> id_arr_serviceRoutes.length  ;
export type idx_idHomeRoute = ReturnType<typeof getIdxIdHomeRoute> ;

export const validIdRoutesOrThrow = <ArrIdRoutes extends readonly string[]>(arr:ArrIdRoutes,reqOrRes : "req"|"res"|"idRoutes"="idRoutes")=> {
    const validatePipeline : ([number,t_function<boolean,[string]>,string]) []= [[getIdxIdLoginRoute(),isNotLoginRoute,str_login],[getIdxIdHomeRoute(),isNotHomeRoute,str_main]]

    validatePipeline.forEach((idxValidateFctName)=>{
        const [idx,validateFct,name] = idxValidateFctName ;
        if(validateFct(arr[idx])) throw new Error(`${reqOrRes}s should include ${name} as is ${idx} element `)
    })
}

export type t_getBaseRouteArr <H extends string > = [H, ...t_base_id_serviceRoutes]






export const str_doProcessFunctionName = "doProcessFunctionName" as const 
export type t_str_doProcessFunctionName = typeof str_doProcessFunctionName ;

export const df_doProcessFunctionName  = "process"  as const ;
export type t_df_doProcessFunctionName = typeof df_idRoute_home ;


export const str_idRouteAndRemoteAddresss = "idRouteAndRemoteAddresss" as const ;
export type t_str_idRouteAndRemoteAddresss = typeof str_idRouteAndRemoteAddresss ;

export const str_mainAddress = "mainAddress" as const ;
export type t_str_mainAddress = typeof str_mainAddress ;

export const str_remoteAddress = "remoteAddress" as const ;
export type t_str_remoteAddress = typeof str_remoteAddress ;

export const str_rootRepertoryName = "rootRepertoryName" as const ;
export type t_str_rootRepertoryName = typeof str_rootRepertoryName ;

export const df = {
    [str_idRoutes]: id_arr_serviceRoutes ,
    [str_doProcessFunctionName ] :df_doProcessFunctionName, 
    [str_idRoute_home] : df_idRoute_home ,
    [str_rootRepertoryName] : df_RootRepertoryName  
}

