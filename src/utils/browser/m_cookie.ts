import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string = "m_cookie"
const debug_browserPool : Debugger = debug(getNameModule("scraping_services_utils",name_module))

import fs from 'fs-extra';
import puppeteer, { CDPSession, Page, Protocol } from 'puppeteer';
import { t_clientId } from "./BrowsersPool.js";
import { hours } from '@shared/hours.js';
import { joinFilePath, t_readFileSync_options, ifFileExistRetReadData, isValidPathSyntax } from '@shared/m_file.js';
import { EmptyInit, AHaveSerializer, haveSerializerAndEmptyInit, t_configObject } from '@shared/m_json.js';
import { IVoid, getEmptyJson, IJson, isEmptyJson } from '@shared/m_object.js';
import { _undefined, nullOrUndefined } from '@shared/m_primitives.js';


const refresh_time_cookie = ()=>{
  return hours.hoursToSecond(2)
}

export const need_refresh_cookie = (cookie:Protocol.Network.Cookie) => {

  const signed_diff = cookie.expires - hours.getSecTimeNow()

  return signed_diff> 0 ?  signed_diff < refresh_time_cookie()  :true 
}

export const get_expiresCookie_notSet  = ():null=>{return null }
export const isNotSet_expiresCookie = (expiresCookie : Date | null ) => { return expiresCookie === get_expiresCookie_notSet() ? true : false }


export const incorrect_cookie = ():IVoid => {
    return getEmptyJson() ;
}
export const isIncorrect_cookie = (cookie : t_connectionCookie ):boolean => {
  return isEmptyJson(cookie) ;
}



export interface RequiredData {
  username ?: string;
  user: string;
  password: string;
}


export interface IConnectionCookie  {
    user: string;
    token: string | undefined;
}

export type t_incorrectCookie = ReturnType<typeof incorrect_cookie> ;
export type t_correctCookie = ConnectionCookie
export type t_connectionCookie = t_correctCookie|t_incorrectCookie


export class ConnectionCookie extends t_configObject<ConnectionCookie> implements IConnectionCookie  {
    
        user: string; //identifiant utilisateur
        token: string | undefined; //li_at token linkedin 
        constructor(user: string = "" , token: string = _undefined() ){
          super({toJson:ConnectionCookie.toJson , fromJson:ConnectionCookie.fromJson});
            this.user = user;
            this.token =  token;
        }

        static emptyObject : EmptyInit<ConnectionCookie>  = new EmptyInit<ConnectionCookie>(ConnectionCookie) ;

        
        static getEmptyInit: () =>ConnectionCookie= () => {
          return ConnectionCookie.emptyObject.emptyInit() ;
        }

        getEmptyInit : () => ConnectionCookie = ()=>{
          return ConnectionCookie.getEmptyInit() ;
        }

        static isTypeof: (obj: AHaveSerializer<ConnectionCookie>) => boolean = (obj:AHaveSerializer<ConnectionCookie>)=>{
          return haveSerializerAndEmptyInit._isTypeof(ConnectionCookie.getEmptyInit(),obj)
        }

        isTypeof = ConnectionCookie.isTypeof

        static toJson = <B extends t_configObject<B> , H extends t_configObject<H>>(obj:ConnectionCookie)  =>
        {
            return {user:obj.user , token : obj.token} as const 
        }
    
        static fromJson = <B extends t_configObject<B> , H extends t_configObject<H>>(json: IJson, _class :  new (...args : ConstructorParameters<typeof ConnectionCookie>) => ConnectionCookie ) : ConnectionCookie=> {
            return new _class(json.user,json.token )
        }


    }


  export class FilePathSession  {
    cookiesFilePath:string ;
    sessionFilePath:string ;
    localFilePath:string;
  
    constructor(cookiesFilePath:string , sessionFilePath:string , localFilePath:string){
      this.cookiesFilePath = cookiesFilePath;
      this.sessionFilePath = sessionFilePath;
      this.localFilePath = localFilePath;
    }
  
    static addDirToFilePathSession (dir:string , filePathSession:FilePathSession=FilePathSession.getDfFilePathSession()):FilePathSession {
      return new FilePathSession(joinFilePath(dir,filePathSession.cookiesFilePath),joinFilePath(dir,filePathSession.sessionFilePath),joinFilePath(dir,filePathSession.localFilePath))
    }
  
    static getDfFilePathSession (): FilePathSession {
      return {
        cookiesFilePath:"./cookies.json",
        sessionFilePath:"./sessionStorage.json",
        localFilePath:"./localStorage.json"
      }
    }
  
   }
  
  export const m_saveCookie = async (page:Page, fileToStore : FilePathSession = FilePathSession.getDfFilePathSession()):Promise<boolean> => {
  
      const cookiesPromise = page.cookies();
      const sessionStoragePromise = page.evaluate(() => JSON.stringify(sessionStorage));
      const localStoragePromise = page.evaluate(() => JSON.stringify(localStorage));
      
      return Promise.all([
        fs.writeFile(fileToStore.cookiesFilePath, JSON.stringify(await cookiesPromise),(al)=> {
          return al
        }),
        fs.writeFile(fileToStore.sessionFilePath, await sessionStoragePromise,(al)=> {
          return al
        }),
        fs.writeFile(fileToStore.localFilePath, await localStoragePromise, (al)=> {
          return al
        })
      ]).then(() => {
        console.log("Cookies, SessionStorage and LocalStorage are saved !");
        return true
      }
      ).catch((err:any) => {
        console.log(err);
        return false
      });
    }
    
  export const readFileArrCookies = (full_path :string , options:t_readFileSync_options={ encoding: 'utf8' }  ):Protocol.Network.Cookie[] => {
    //const options : t_readFileSync_options= _options==undefined ? { encoding: 'utf8' } :_options ;  
    const data =ifFileExistRetReadData(full_path , options ) ;
    return JSON.parse(data );
  }
  

  export class CookieFilePath{
    cookiesPath:string ;
    
    static notSet_cookiesPath :nullOrUndefined = undefined 

    constructor(_cookiesPath:string = CookieFilePath.notSet_cookiesPath ){
      this.cookiesPath = _cookiesPath;
    }
    
    static singleton = new CookieFilePath()

    setCookiesPath(cookiesPath:string){
      this.cookiesPath = cookiesPath && isValidPathSyntax(cookiesPath) ? cookiesPath : CookieFilePath.notSet_cookiesPath ;
    }

    getCookiesPath(){
      return this.cookiesPath
    }
    static getInstance(){
      return CookieFilePath.singleton
    }


    //A FAIRE :
    static getCookieFilePathFromClientAndService(client_id :t_clientId , service_name :string ) :FilePathSession {
      return FilePathSession.addDirToFilePathSession (joinFilePath(CookieFilePath.getInstance().getCookiesPath(),service_name))//TODO : client_id 
    }
  }
  export async function tryWithRessourceCookie
  (...args:any[] ):Promise<any>{
    throw new Error("Not implemented")
  }
//TODO : tryWithRessourceAndSaveCookiePage 

export function getCookieValue (user:string , json_cookiesArr:Protocol.Network.Cookie[],cookieName:string) : t_connectionCookie {
  let res_cook:t_connectionCookie = incorrect_cookie() ;
  if (json_cookiesArr && json_cookiesArr.length !== 0) {
    let cookie : Protocol.Network.Cookie = getEmptyJson() as Protocol.Network.Cookie; 
    for (const key_cookie in json_cookiesArr) {
        cookie  = json_cookiesArr[key_cookie]
        if(cookie.name == cookieName){ 
            res_cook = !need_refresh_cookie(cookie) ? new ConnectionCookie(user,cookie.value):incorrect_cookie()
            break;
        }
        
    }
  }
  return res_cook
}