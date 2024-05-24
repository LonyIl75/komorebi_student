import getCurrentLine from "get-current-line"
import { c_clientBackendBaseUrl } from "@/config/envVar.js";
import { arrToUnion, t_JoinChar, t_JoinChar_underscore } from "./type.js";
import { join_underscore } from "./m_string.js";


export const char_join_urlAndQuery = "?";
export type t_char_join_urlAndQuery = typeof char_join_urlAndQuery

export type t_JoinChar_urlAndQuery< T extends readonly string[] > = t_JoinChar<T,t_char_join_urlAndQuery>

export const join_urlAndQuery = <R extends string , U extends string = string >(url:R , queryParam:U ):t_JoinChar_urlAndQuery<readonly[R,U] >  => 
{ 
  return [url,queryParam].join(char_join_pathRoutes)  as  t_JoinChar_urlAndQuery<readonly[R,U] >
}

export const split_urlAndQuery = <T extends ReturnType<typeof join_urlAndQuery<R,U>> , R extends string = string , U extends string = string >(url:T ):[R,U]   => 
    { 
      return url.split(char_join_pathRoutes)  as  [R,U]
    }


export const char_join_queryParam = "&";
export type t_char_join_queryParam = typeof char_join_queryParam

export type t_JoinChar_queryParam< T extends readonly string[] > = t_JoinChar<T,t_char_join_queryParam>

export const join_urlAndQueryParam = <R extends string , U extends string = string >(url:R , queryParam:U ):t_JoinChar_queryParam<readonly[R,U] >  => 
{ 
  return [url,queryParam].join(char_join_pathRoutes)  as  t_JoinChar_queryParam<readonly[R,U] >
}


export const char_join_pathRoutes = "/";
export type t_char_join_pathRoutes = typeof char_join_pathRoutes

export type t_JoinChar_routes< T extends readonly string[] > = t_JoinChar<T,t_char_join_pathRoutes>


export const join_pathRoutes = <t_pathRoutes extends readonly string[] >(pathRoutes:t_pathRoutes):t_JoinChar_routes<t_pathRoutes >  => 
{ 
  return pathRoutes.filter((_elm)=>_elm).join(char_join_pathRoutes)  as  t_JoinChar_routes<t_pathRoutes >
}

export const unjoin_pathRoutes = <US extends string = string  > (joinedStr :  t_agreg_path<US,US>| t_agreg_path<US> )=>{ 
    return joinedStr.split(char_join_pathRoutes) as US[]
}

export const getBaseUrl = (url:string):string =>url.replace(new RegExp("(https|http):\/\/"),"") 



const getServiceUrl =  <N extends string , ArrR extends readonly  any[]> (name_service : N ,arr_routes:ArrR):t_JoinChar_routes<[N, arrToUnion<ArrR> ]>[] =>{ 
    type t_route = arrToUnion<ArrR>
    return arr_routes.map( (route: t_route) => join_pathRoutes<[N, t_route]>([name_service, route]) );
}

export const local_prefix = "local";
export type t_getLocalName <N extends string> = t_JoinChar_underscore<[typeof local_prefix,N]>
export const getLocalName = <N extends string >(name_service : N):t_getLocalName <N> =>{ 
    return join_underscore(local_prefix,name_service) as t_getLocalName <N>;
}
export const toLocalOrNot = <N extends string >(islocal:boolean , name_service : N):t_getLocalName <N>|N =>{ 
    return islocal ? getLocalName(name_service) : name_service ;
}

const remote_prefix = "remote";
export type t_getRemoteName <N extends string> = t_JoinChar_underscore<[typeof  remote_prefix,N]>
export const getRemoteName = <N extends string >(name_service : N):t_getRemoteName <N> =>{ 
    return join_underscore(remote_prefix,name_service) as t_getRemoteName <N>;
}


export const getLocalServiceUrl  = <N extends string , ArrR extends readonly  any[]> (name_service : N ,arr_service_routes:ArrR) =>{ 
    const local_name_service :t_getLocalName <N> = getLocalName(name_service) as t_getLocalName <N>;
    return arr_service_routes.map( (route:arrToUnion<ArrR>) =>join_pathRoutes<[t_getLocalName<N>,arrToUnion<ArrR>]>([ local_name_service , route]) );
}

export const getScrapingPageUrl  = <N extends string , ArrR extends  any[]>
(islocal:boolean , name_service : N ,arr_service_routes:ArrR ):string[] =>{ 
    if(arr_service_routes[0]==undefined) arr_service_routes
    return islocal ? getLocalServiceUrl<N,ArrR> (name_service ,arr_service_routes) : getServiceUrl<N,ArrR>(name_service ,arr_service_routes) ; 
}


export const getServiceAndLocalServiceUrl =  <N extends string , ArrR extends readonly  any[]> (name_service : N ,arr_routes:ArrR) :
[t_JoinChar_routes<[N, arrToUnion<ArrR> ]>[],t_JoinChar_routes<[t_getLocalName <N>,arrToUnion<ArrR>] >[] ] =>{ 
    const services_url :t_JoinChar_routes<[N, arrToUnion<ArrR> ]>[]=  getServiceUrl<N,ArrR>(name_service ,arr_routes) ;
    const local_services_url:t_JoinChar_routes<[t_getLocalName <N>,arrToUnion<ArrR>]>[] = getLocalServiceUrl<N,ArrR>(name_service ,arr_routes) ;
    return [services_url , local_services_url];
}

type localAddressesAndRemoteAddress<T extends string =string , G extends string =string > = {local_address : T , remote_address : G}

export type serviceAdress<Z extends  string =string,  T extends string =string , G extends string =string>    = {
    [key in Z] : localAddressesAndRemoteAddress<T,G>
}
export const getLocalAdressFromServiceAddressBody = <T extends  string ,G extends  string>( serv_addr  :localAddressesAndRemoteAddress<T,G>)  :string =>{ 
    return serv_addr[getLocalName("address")] ;
}

export const getRemoteAdressFromServiceAddressBody = <T extends  string ,G extends  string>( serv_addr  :localAddressesAndRemoteAddress<T,G>)  :string =>{ 
    return serv_addr[getRemoteName("address")] ;
}


export function createAddress <R extends readonly any[] , U extends string = string > (prefixs:R , route:U ) :t_JoinChar_routes<[...R,U] >  {
    return join_pathRoutes<[...R,U]>([ ...prefixs , route ]);
}



export type t_agreg_path  <unionclassame extends string , R extends string=string , U extends unionclassame|"" = unionclassame|"" > = (R extends t_char_join_pathRoutes ? t_JoinChar_routes<["",U] > : t_JoinChar_routes<[R,U] >)|t_char_join_pathRoutes

export const createAddressBis = < unionclassname extends string , U extends unionclassname|"" ,R extends t_agreg_path<unionclassname>= t_agreg_path<unionclassname>> (prefix:R =char_join_pathRoutes as any, route:U ="" as any  )   =>{ 
    if(prefix === char_join_pathRoutes)return prefix+route as t_agreg_path<unionclassname,t_char_join_pathRoutes ,U > ;
    else if(!route) return prefix;
    else return createAddress([prefix === char_join_pathRoutes ? "" : prefix],route)
}
//export type t_createAddressBis < unionclassname extends string ="", U extends unionclassname|"" ="" ,R extends t_agreg_path<unionclassname>|t_char_join_pathRoutes = t_char_join_pathRoutes>
//= R extends t_char_join_pathRoutes ? `${R}${U}` : U extends "" ? R : ReturnType<typeof createAddress<[R] ,U>>

//export const createAddressBis = < unionclassname extends string ="", U extends unionclassname|"" ="" ,R extends t_agreg_path<unionclassname>|t_char_join_pathRoutes= t_char_join_pathRoutes> (prefix:R =char_join_pathRoutes as any, route:U ="" as any  )   =>{ 
    //let res 
    //if(prefix === char_join_pathRoutes) res =  prefix+route as t_agreg_path<unionclassname,t_char_join_pathRoutes ,U > ;
    //else if(!route) res =  prefix;
    //else res = createAddress<[R] ,U>([prefix],route)
    //return res as t_createAddressBis<unionclassname,U,R> ;
//}

function getLocalRoutes<SN extends string , T extends readonly string[] >(  sv_name : SN , id_arr_routesLocal : T  )  
: ReturnType < typeof createAddress<[ typeof c_clientBackendBaseUrl,SN],arrToUnion<T>>>[] {
    type t_route = arrToUnion<T> ;
    return id_arr_routesLocal.map((route:t_route)=>{ 
        let res = createAddress<[typeof c_clientBackendBaseUrl,SN] , t_route >(  [c_clientBackendBaseUrl,sv_name] , route  );
        return res;
    }) ;


}

export type t_getLocalRoutes <SN extends string , IdRs extends readonly  string[] > = ReturnType < typeof getLocalRoutes<SN,IdRs>>


function getRemoteRoutes< R extends string , T extends readonly string[]   >(  remoteAddress : R  ,id_arr_routesRemote :T  ) 
: ReturnType< typeof createAddress< [R],arrToUnion<T>>>[] {
    type t_route = arrToUnion<T> ;
    return id_arr_routesRemote.map((route:t_route)=>{ 
        let res = createAddress< [R] ,t_route >( [remoteAddress] , route   );
        return res;
    }) ;

}
export type t_getRemoteRoutes <SN extends string , IdRs extends readonly  string[] > = ReturnType < typeof getRemoteRoutes<string,IdRs>>

const getLocalAndRemoteServiceUrl = <SN extends string ,Rn extends string , R extends string , Z extends readonly string[]> ( sv_name :SN , remoteName :Rn , remoteAddress : R ,
     idRoutes :Z , ):[string[],string[]] =>{ 
    type t_1 = t_JoinChar_routes<[Rn, arrToUnion<Z> ]>[]
    type t_2 = t_JoinChar_routes<[t_getLocalName <Rn>,arrToUnion<Z>] >[]
    let [id_arr_routesRemote ,id_arr_routesLocal ] =  getServiceAndLocalServiceUrl<Rn ,Z> (remoteName, idRoutes   );
    let local_routes = getLocalRoutes<SN,t_2>(sv_name,id_arr_routesLocal ) ;
    let remote_routes = getRemoteRoutes<R,t_1>(remoteAddress , id_arr_routesRemote) ;
    return [remote_routes , local_routes];
}
//A FAIRE : typer 
export function getServiceAddress<SN extends string ,Rn extends string,R extends string , Z extends  readonly any [] =  readonly string []  ,  L extends string = string  , T extends string= string  >
( sv_name :SN ,  remoteName :Rn , remoteAddress :R , idRoutes :Z  ) :serviceAdress <arrToUnion<Z>, L , T>  {
    type t_1 =arrToUnion<Z>
    let [remote_routes , local_routes] = getLocalAndRemoteServiceUrl<SN,Rn,R,Z>(sv_name , remoteName, remoteAddress, idRoutes);
    let res = idRoutes.reduce((acc:serviceAdress<string,string,string>,route : t_1 ,index :number)=>{ 
        acc[route] = {local_address : local_routes[index] , remote_address : remote_routes[index]} ;
        return acc ;
    } , {} as serviceAdress<t_1,string,string> ) ;
    return res as serviceAdress<t_1,L,T> ;
}