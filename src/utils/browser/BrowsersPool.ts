import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string = "BrowserPool"
const debug_browserPool : Debugger = debug(getNameModule("scraping_services_utils",name_module))
const debug_browserPool_all : Debugger = debug(getNameDebugAllNameModule(name_module))

import {Browser, Target ,Page, CDPSession} from 'puppeteer';
import puppeteer from 'puppeteer';

import { DefaultSerializer } from 'v8';
import { _notFound, is_notFound, nullOrUndefined } from '@/../shared/m_primitives.js';
import { IJson, IVoid } from '@/../shared/m_object.js';
import {  arrToUnion, getNotOptionalArr, getReqAndOptFromFct, reshapeObject, t_function } from '@shared/type.js';
import { Pipeline, t_OInterArr_pipeline, t_pipeline_env_var, t_str_noneOp, t_union_id_env_var_op } from '@shared/m_pipeline.js';
import { join_hyphen, join_underscore } from '@shared/m_string.js';
import { mPage, t_mPage } from '../scraping/PageEvaluate/mPage.js';
import {  JsonWithScrapingComponents, t_JsonWithScrapingComponent } from '../scraping/PageParsing/ComponentObject.js';
import { t_arr_component, t_getChildTypeFromArrComponent, t_getClassNameTypeFromArrComponent, t_rootClassName } from '../scraping/PageParsing/types.js';
import { ExposeFunction } from '../scraping/PageEvaluate/ExposeFunction.js';
import { joinFilePath } from '@shared/m_file.js';
import { getPathPageParsing } from '@/config/pathFolder/srcPath.js';
import { _buildParsingTree, base_getParsingTree } from '../scraping/PageParsing/TreeParsing.js';
import { arrayFilterIndices } from '@shared/m_array.js';
import { IJsonComponents } from '../scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js';
import { _IJsonComponents } from '../scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js';
import { t_strRegex } from '@shared/_regexp.js';


export type t_clientId = string 

//TODO : df json class/interface
export const df_client_id : t_clientId = "0";
export const df_nil_cdp_session : CDPSession = null;


export const getDfClientIdIfUndefined = (client_id?:t_clientId): t_clientId => {
    return client_id === undefined ? df_client_id : client_id
}

export type t_value_description = {name:string , description:string , nb_name:number}
export type t_opt_value_description = reshapeObject<t_value_description,"name","description">


type t_val_pageAndDescr = {mPage:t_mPage,description:t_value_description}
export class BrowserMPage {
    browserId:t_browserId
    browser : Browser;
    mapMPageAndDescr : Map<t_targetId , t_val_pageAndDescr>;

    constructor(browserId:t_browserId,browser:Browser){
        this.browserId = browserId;
        this.browser = browser;
        this.mapMPageAndDescr = new Map<t_targetId , t_val_pageAndDescr>();
    }

    getTargetById(targetId:t_targetId) : Target {
        return this.browser.targets()[targetId];
    }
    getMPageAndDescrById(targetId:t_targetId) : t_val_pageAndDescr {
        return this.mapMPageAndDescr.get(targetId);
    }
    getMPageById(targetId:t_targetId) : t_val_pageAndDescr["mPage"] {
        return this.mapMPageAndDescr.get(targetId).mPage;
    }

    static initPage = async (page:Page) => {
        await page.setViewport(default_viewPort)
    }

    static async initMPage(gl_page:t_mPage){
        await gl_page.addExposeFunction(new ExposeFunction (null,"subsetPage",[],{path:joinFilePath(getPathPageParsing(),"subsetPage.js")}))
        await gl_page.addExposeFunction(new ExposeFunction (null,"TreeParsing",[],{path:joinFilePath(getPathPageParsing(),"TreeParsing.js")}))
    
        await gl_page.page.exposeFunction("base_getParsingTree",base_getParsingTree)
        await gl_page.page.exposeFunction("_buildParsingTree",_buildParsingTree)

        await gl_page.page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    }

    async newMPage(_description_page:t_opt_value_description,jsonScrap : t_JsonWithScrapingComponent = JsonWithScrapingComponents.getEmptyInit()) : Promise<[t_targetId,t_mPage]>{
        return this.browser.newPage().then(async (_page:Page) => {
            await BrowserMPage.initPage(_page)
            let target_idx:t_targetId = this.browser.targets().indexOf(_page.target()) as t_targetId;
            let mpage : t_mPage  = await mPage.cst_before_evaluate(_page,jsonScrap);
            await BrowserMPage.initMPage(mpage);
            this.mapMPageAndDescr.set(target_idx,{mPage:mpage,description:this.getNewDescriptionPage(_description_page)});
            return [target_idx,mpage];
        })
    }

    getMPageId(_mpage:t_mPage) : t_targetId {
        let r = Array.from(this.mapMPageAndDescr.keys()).find((key:t_targetId) => this.mapMPageAndDescr.get(key).mPage === _mpage)
        return r === undefined ? _notFound() : r ;
    }

    isValidTargetId(targetId:t_targetId)   {
        return is_notFound(targetId)
    }

    getNbName = (name:string) : number => {
        return Object.values(this.mapMPageAndDescr).filter((val_pageAndDescr:t_val_pageAndDescr) => val_pageAndDescr.description.name == name).length
    }


    getNewDescriptionPage = (_description_page:t_opt_value_description) : t_value_description => {
        const name = _description_page.name;
        const nb_name = this.getNbName(name)
        const description = BrowserMPage.getDfDescription(name,nb_name)
        return {name,description,nb_name}
    }

    static getDfDescription = (name:string,nb_name:number)  => {
        return join_hyphen(name,`${nb_name}`)
    }

    setDescriptionPage(targetId:t_targetId,_description_page:t_opt_value_description) : void{
        this.mapMPageAndDescr.set(targetId,{...this.getMPageAndDescrById(targetId),description:this.getNewDescriptionPage(_description_page)});
    }
    deleteDescriptionPage(targetId:t_targetId) : void{
        this.setDescriptionPage(targetId,undefined)
    }

    getDescriptionPage(targetId:t_targetId) : t_opt_value_description | nullOrUndefined{
        return this.mapMPageAndDescr.get(targetId).description;
    }

    deleteMPageAndDescr(targetId:t_targetId) : void{
        this.mapMPageAndDescr?.delete(targetId);
    }

    closeMPage(targetId:t_targetId) : Promise<void>{
        return ((obj)=>obj.getMPageById(targetId).destroy().then((_) => {
            obj.deleteMPageAndDescr(targetId);
        }))(this)
    
    }

    static addPostfixToDescription(str_service:string) { 
        return join_underscore(str_service , postfix_page) 
    } 

}

export class  brwsrAndId {
    browserMPage : BrowserMPage; 
    client_id : t_clientId ; 

    static unsettedClientId = null 

    unsetBrowserClientId() : void{
        this.client_id = brwsrAndId.unsettedClientId;
    }

    static isUnsettedClientId (obj : brwsrAndId):boolean {
        return obj.client_id === brwsrAndId.unsettedClientId
    }

    setBrowserClientId(client_id:t_clientId) : void{
        this.client_id = client_id;
    }
    closeMPage(targetId:t_targetId) : Promise<void>{
        return this.browserMPage.closeMPage(targetId);
    }


    constructor(browserMPage:BrowserMPage,client_id:t_clientId=brwsrAndId.unsettedClientId){
        this.browserMPage = browserMPage;
        this.client_id = client_id;
    }
}

const browsersPool_browserKey_invalid = -1 as const 
type t_browsersPool_browserKey_invalid = typeof browsersPool_browserKey_invalid
type t_browsersPool_browserKey = t_browserId|t_browsersPool_browserKey_invalid


export class BrowsersPool {

    browsers : Map<t_browserId,brwsrAndId> ;


    constructor(){
        this.browsers = new Map<t_browserId,brwsrAndId>();
    }

    set setBrowsers(browsers : Map<t_browserId,brwsrAndId>){
        this.browsers = browsers;
    }


    get getBrowsers() : Map<t_browserId,brwsrAndId>{
        return this.browsers;
    }

    getBrowserMPage( key:t_browserId) : BrowserMPage {
        return this.browsers.get(key).browserMPage;
    }
    getBrowserAndId( key:t_browserId) : brwsrAndId {
        return this.browsers.get(key);
    }
    getClientId( key:t_browserId) : t_clientId {
        return this.browsers.get(key).client_id;
    }

    getFirstAvaibleBrowser() : t_browsersPool_browserKey {
        const browserkeys :Array<t_browserId> = Array.from(this.browsers.keys());
        const browserKeyWithNullClientId:t_browserId|undefined = browserkeys.find((key:t_browserId) => brwsrAndId.isUnsettedClientId(this.browsers.get(key)));
        return browserKeyWithNullClientId === undefined ? BrowsersPool.getInvalidBrowserKey() : browserKeyWithNullClientId ;
    }

    addBrowser() : Promise<t_browserId>{
        //A FAIRE constructor brwsrAndId with parameter like headless 
        return puppeteer.launch({headless: false}).then((_brwsr: Browser) => {
            const browserAndId : brwsrAndId = new brwsrAndId(new BrowserMPage(this.browsers.size,_brwsr) );
            const insertIndex = this.browsers.size as t_browserId ; 
            this.browsers.set(insertIndex,browserAndId)
            debug_with_curLine(debug_browserPool, getCurrentLine(), `Browser number ${insertIndex} added : `  + JSON.stringify(this.browsers));
            return insertIndex ;
        })
            
        }

    static async cst_browsers(pool_size : number =2 ) : Promise<BrowsersPool>|null{
        debug_with_curLine(debug_browserPool, getCurrentLine(), "CST BROWSER POOL");
        let browsersPool : BrowsersPool = new BrowsersPool();
        let arr_promise : Array<Promise<number>> = [];
        for(let i = 0; i < pool_size; i++){
            arr_promise.push(browsersPool.addBrowser()) 
        }
        return Promise.all(arr_promise).then(() => {
            return browsersPool;
        }).catch((err) => {
            console.log("err",err);
            return null;
        })
    }


    async newPage<UnionRegex  extends t_strRegex ,UnionIdPath  extends string,
    ArrClassNameType extends readonly [t_rootClassName,...readonly string []],
    unionClassNameType extends arrToUnion<ArrClassNameType>,
    ArrArr extends t_arr_component<unionClassNameType> ,
    T extends _IJsonComponents<unionClassNameType>
    >(browserId:t_browserId,description_page:t_opt_value_description,jsonScrap ?: JsonWithScrapingComponents<UnionRegex,UnionIdPath,ArrClassNameType,unionClassNameType,ArrArr,T> ) : Promise<mpageTargetIdBrowserId<UnionRegex,UnionIdPath,ArrClassNameType,unionClassNameType,ArrArr,T>>{

        return this.getBrowserMPage(browserId).newMPage(description_page,jsonScrap).then(async([target_idx ,_mPage]:[t_targetId ,t_mPage]) => {

            return new mpageTargetIdBrowserId<UnionRegex,UnionIdPath,ArrClassNameType,unionClassNameType,ArrArr,T>(_mPage,browserId,target_idx);
        })
    }

    static getInvalidBrowserKey = ()=> browsersPool_browserKey_invalid;
    static isInvalidBrowserKey(_key:t_browsersPool_browserKey):boolean {return _key === BrowsersPool.getInvalidBrowserKey()};

    
    getBrowserByClientID(client_id:t_clientId) : t_browsersPool_browserKey {
        let res :t_browserId|undefined = Array.from(this.browsers.keys()).find((key:t_browserId) => this.browsers.get(key).client_id === client_id)
        return res === undefined ? BrowsersPool.getInvalidBrowserKey() : res ;
    } 

    setBrowserClientId(browserId:t_browserId,clientId:t_clientId) : void{
        this.browsers.get(browserId).setBrowserClientId(clientId)
    }

    unsetBrowserClientId(browserId:t_browserId) {
        return this.browsers.get(browserId).unsetBrowserClientId();
    }


    closeMPage(res_page: t_mpageTargetIdBrowserId) {
        return this.getBrowserAndId(res_page.browserId).closeMPage(res_page.targetId);
    }

       
    getTargetFromTargetIdx(browserId:t_browserId,targetIdx:t_targetId)  {
        return this.getBrowserMPage(browserId).getTargetById(targetIdx)
    }

    getMPageFromTargetIdx(browserId:t_browserId,targetIdx:t_targetId)  {
        return this.getBrowserMPage(browserId).getMPageById(targetIdx)
    }


    deleteDescriptionPage(res_page: t_mpageTargetIdBrowserId) {   
        return this.getBrowserMPage(res_page.browserId).deleteDescriptionPage(res_page.targetId);
    }

    async getTargetIdx(browserId:t_browserId,_mpage:t_mPage) {
        return this.getBrowserMPage(browserId).getMPageId(_mpage)

    }
    

    async closePageAndBrowser(res_page: t_mpageTargetIdBrowserId) : Promise<void>{
            await this.closeMPage(res_page)
            await this.getBrowserAndId(res_page.browserId).unsetBrowserClientId();
    }

 

}



export let browsers : BrowsersPool ;




export  async function getBrowsers() : Promise<BrowsersPool> { 
    if(!browsers) browsers = await BrowsersPool.cst_browsers(1)
    debug_with_curLine(debug_browserPool_all, getCurrentLine(), "browsers AA" + browsers);
    return Promise.resolve(browsers) 
}

export async function getBrowserInstance(client_id:t_clientId) : Promise<t_browsersPool_browserKey>{
    const browsers : BrowsersPool = await getBrowsers()
    let key_browser: t_browsersPool_browserKey  = browsers.getBrowserByClientID(client_id)
    if(BrowsersPool.isInvalidBrowserKey(key_browser) )
    {
        key_browser = await browsers.getFirstAvaibleBrowser()
        debug_with_curLine(debug_browserPool_all, getCurrentLine(), "key_browser"+ key_browser);

        if(BrowsersPool.isInvalidBrowserKey(key_browser)){
            debug_with_curLine(debug_browserPool_all, getCurrentLine(),  "key_browser"+ key_browser);
            key_browser =  await browsers.addBrowser().then((key_browser:t_browserId) => key_browser).catch((err) => BrowsersPool.getInvalidBrowserKey());
        }
        if(BrowsersPool.isInvalidBrowserKey(key_browser))browsers.setBrowserClientId(key_browser,client_id);
    }
    return key_browser;
}

export const default_viewPort = {width: 1920, height: 1080};

export type t_browserId = number
export type t_targetId = number

export type t_mpageTargetIdBrowserId = mpageTargetIdBrowserId<any,any,any,any,any,any>

//export type t_mpageTargetIdBrowserIdOrIds = t_mpageTargetIdBrowserId | {browserId:t_browserId,targetId:t_targetId}
export class mpageTargetIdBrowserId<UnionRegex  extends t_strRegex ,UnionIdPath  extends string,
ArrUnionClassNameType extends readonly [t_rootClassName , ... readonly string []],
unionClassNameType extends arrToUnion<ArrUnionClassNameType>,
ArrArr extends t_arr_component<unionClassNameType> ,
T extends _IJsonComponents< unionClassNameType>
> {
    mpage:mPage<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>
    browserId:t_browserId

    targetId:t_targetId

    constructor(mpage:mPage<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,browserId:t_browserId,targetId?:t_targetId){
        this.mpage = mpage;
        this.browserId = browserId;

        if(targetId !== undefined)this.targetId = targetId;
    }

    
    


}

export const str_connection = "connection"
const postfix_page = "page"

export type clientIdOrBrowserId = 
{clientId?:t_clientId,brwsrId ?: t_browserId}&
({clientId:t_clientId }| {brwsrId : t_browserId})


export async function getNewPage<UnionRegex  extends t_strRegex ,UnionIdPath  extends string,
ArrUnionClassNameType extends readonly [t_rootClassName , ... readonly string []],
unionClassNameType extends arrToUnion<ArrUnionClassNameType>,
t_arrrArrUnion_page_childsClassName extends t_arr_component<unionClassNameType> ,
T extends _IJsonComponents< unionClassNameType>
>(_id:clientIdOrBrowserId,description_page ?: t_opt_value_description ,jsonScrap ?: JsonWithScrapingComponents<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,t_arrrArrUnion_page_childsClassName,T> ) : Promise<mpageTargetIdBrowserId<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,t_arrrArrUnion_page_childsClassName,T>>{
    const browsers : BrowsersPool = await getBrowsers()
    let keyBrowser :t_browserId|undefined = _id?.brwsrId
    const isBrwsrAssociated = keyBrowser !== undefined
    if(!isBrwsrAssociated){
        if(_id?.clientId === undefined) throw new Error("brwsrId && clientId is undefined")
        keyBrowser= await getBrowserInstance(_id.clientId)
        if(BrowsersPool.isInvalidBrowserKey(keyBrowser)) throw new Error("browser is null")
    }
    if(description_page === undefined) description_page = {name:`${_id}`}
    return browsers.newPage<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,t_arrrArrUnion_page_childsClassName,T>( keyBrowser , description_page,jsonScrap)
}




type _t_getPage = getReqAndOptFromFct<typeof getNewPage<t_strRegex,string,readonly [t_rootClassName , ... readonly string []],any,t_arr_component<any>,_IJsonComponents<any>>>[1]

export type t_getPage = _t_getPage//| removeElmInElms<getNotOptionalArr<_t_getPage>,t_JsonWithScrapingComponent>


//TODO find from where 
type t_useSystemDebug = [debug_options?:DebuggingOptions]
type t_usePage = [ ...t_useSystemDebug]

export type t_optionsScraping = [...t_getPage,...t_usePage]

export const jsonScrapIdx = 1 as const 
export type t_jsonScrapIdx = typeof jsonScrapIdx

export type _t_cst_optionScraping = getNotOptionalArr<t_optionsScraping>
export type t_cst_optionScraping = [_t_cst_optionScraping[0],_t_cst_optionScraping[2]]//removeElmAtIndex<_t_cst_optionScraping,t_jsonScrapIdx> 



export const optionScrapingToCstOptionScraping = (args:t_optionsScraping) : t_cst_optionScraping => {
    return arrayFilterIndices(args,[jsonScrapIdx])
}


export interface IOptionScraping {
    //id:t_optionsScraping[0]
    description_page?:t_cst_optionScraping[0]
    debug_options?:t_cst_optionScraping[1]
}

export class OptionScraping implements IOptionScraping {
    //id:t_optionsScraping[0]
    description_page?:t_cst_optionScraping[0]

    debug_options?:t_cst_optionScraping[1]

    constructor(...args:t_cst_optionScraping){
        //this.id = id;
        this.description_page = args[0];//TODO-IMP req , res first see below 
        this.debug_options = args[1];
    }  

    static cst_optionScraping = (args:t_optionsScraping) : OptionScraping => {
        return new OptionScraping(...optionScrapingToCstOptionScraping(args))//A FAIRE : redo 
    }

    static df : IOptionScraping = new OptionScraping(undefined,undefined)
}


export const fillfctWithOptionScraping=<T extends t_function > (funct : T ,opt :IOptionScraping ,jsonScrap :_t_cst_optionScraping[t_jsonScrapIdx] , ...args:any[]) :ReturnType<T>  =>{
    return funct(//opt.id,
        opt.description_page
        ,jsonScrap
        ,opt.debug_options
        ,...args)
}




export async function tryWithRessourcePage<
UnionRegex  extends t_strRegex ,UnionIdPath  extends string,
ArrUnionClassNameType extends readonly [t_rootClassName , ... readonly string []],
unionClassNameType extends arrToUnion<ArrUnionClassNameType>,
ArrArr extends t_arr_component<unionClassNameType> ,
T extends _IJsonComponents< unionClassNameType>,
I_2 extends any[], O extends any[] =[], //TODO req , res first see upper 
IEnv extends IJson = IVoid , Op extends t_union_id_env_var_op = t_str_noneOp , I_1 extends t_pipeline_env_var<IEnv,Op> = t_pipeline_env_var<IEnv,Op> ,OInterArr extends  t_OInterArr_pipeline = []> (
    _id:clientIdOrBrowserId, _name_page : string,
    jsonScrap : JsonWithScrapingComponents<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>
  , _pi:Pipeline<I_2 ,  O ,IEnv  ,Op,I_1 ,OInterArr>,fct_modify_args :(res_page : mpageTargetIdBrowserId<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T> ,...args:I_2)=>I_2,..._args : I_2   )
  {
    const description = _args[0].body.optionsScraping.description_page ||{name:_name_page}
    const _res_page = await getNewPage<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>(_id,description,jsonScrap)
    await (async(res_page : mpageTargetIdBrowserId<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T> 
      ,_pi: Pipeline<I_2 ,O  ,IEnv  ,Op,I_1 ,OInterArr> ,...args : I_2 ) =>{
        args = fct_modify_args(res_page,...args)
        let r = await _pi.run_pipeline(args,args[0].body.pipeline.initEnv) 
        await browsers.closePageAndBrowser(res_page)
        return r
    })(_res_page, _pi, ..._args)

}