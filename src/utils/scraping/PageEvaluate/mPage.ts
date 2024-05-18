import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule, concatNameModuleAndDebug } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector_pageEvaluate","mPage")
const debug_pageEvaluate_mPage : Debugger = debug(name_module)

import { FrameAddScriptTagOptions, Page } from "puppeteer";
import { ExposeFunction, onEventFunction, t_exposeFunction } from "./ExposeFunction.js";
import { ExposeObject, t_exposeObject } from "./ExposeObject.js";
import type { IJson } from "@shared/m_object.js";
import {ExposeObjectOrFunction} from "./ExposeObjectOrFunction.js";
import path from "path";
import { convertStrToRegexStr,  getRegexG } from "@shared/m_regex.js";
import {RemoveDebug} from "@shared/str_debug.js";
import { fileURLToPath } from "url";
import { getFilenameWithoutExtension, joinFilePath, mreadFile, pathToJoinCharFileName, toFilePath } from "@shared/m_file.js";
import { arrToUnion } from "@shared/type.js";
import { t_arr_component, t_getChildTypeFromArrComponent, t_getClassNameTypeFromArrComponent, t_rootClassName } from "../PageParsing/types.js";
import { getIgnoredFilesDebug } from '@/config/pathFolder/rootPath.js';
import { getPackageDependencies } from '@/config/pathFolder/srcPath.js';
import { ScrapingComponent, IJsonWithScrapingComponents } from '../PageParsing/ComponentObject.js';
import { IJsonComponents } from '../PageParsing/Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js';
import { _IJsonComponents } from '../PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js';
import { removeCommentRegex, import_str_regex, getExportedFunctionNameRegex, getExportedClassNameRegex, getVariableNameRegex, getNameOfExportedSet } from '@shared/m_regex_comment.js';
import { t_strRegex } from '@shared/_regexp.js';
import { embedBeginOfLineStrOrRegex } from '@shared/m_regex_prefixAndSuffix.js';
import { getProtocolAndDomain } from '@shared/validate-url/functions.js';


const __filename = fileURLToPath(import.meta.url);


export class ExposedMap <G extends t_exposeFunction | t_exposeObject<G> , T  extends ExposeObjectOrFunction<G> > {
    scriptMap : Map<string , string[]> ;

    constructor(...args : ConstructorParameters<typeof Map<string , string[]>>) {
        this.scriptMap =  new Map<string , string[]> (args[0]);
    }

    
    static init_getScriptID(exposeObjectOrFunct:ExposeObjectOrFunction<any>){
        let scriptTag =exposeObjectOrFunct.getScriptsTag();
        return scriptTag!==undefined ?  scriptTag.id  : mPage.emptyScriptTag().id
    }


    toJson():IJson {
        return Array.from(this.scriptMap)
    }

    stringify():string{
        return JSON.stringify(this.toJson());
    }

    
    hasExpose(exposeObject){
        let res = this.scriptMap.get(ExposedMap.init_getScriptID(exposeObject)) ;
        if(res == undefined) return false;
        return res.includes(exposeObject.getName());//TODO 23/02/24
    }


    async expose(exposeObject:T){
        let script_id = ExposedMap.init_getScriptID(exposeObject )
        let lst = this.scriptMap.get(script_id)|| [] ;
        this.scriptMap.set(script_id,[...lst,exposeObject.getName()]);
    
    }


}

export type t_mPage = mPage<any,any,any,any,any,any>
export class mPage<UnionRegex  extends t_strRegex ,UnionIdPath  extends string,
ArrUnionClassNameType extends readonly [t_rootClassName,... readonly string [] ],
unionClassNameType extends arrToUnion<ArrUnionClassNameType>,
ArrArr extends t_arr_component<unionClassNameType> ,
T extends _IJsonComponents<unionClassNameType>,
> {
    page : Page ;
    cur_url : string ;
    base_url : string ;

    scriptsPath : Set<string> = new Set<string>();
    scriptsTagMap : Map<string , FrameAddScriptTagOptions> ;
    scriptObjectMap :  ExposedMap<t_exposeObject<any> ,ExposeObject<any>> ;
    scriptFunctionMap : ExposedMap<Function,ExposeFunction> ;

    scrapingComponent : ScrapingComponent<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr, T> ;  


    //puprose debeugging:


    static excluded_file = [
        "pathFolder"
    ]
    //fw_json:FunctionalWrapperJsonComponent<t_arrUnion_page_componentClassNameType,unionClassNameType,t_arrrArrUnion_page_childsClassName,T>

    static dependencies = (async()=>getIgnoredFilesDebug().concat(await import(toFilePath(path.resolve(getPackageDependencies()))).then( module => module.default)))();


    static rm_debug_code = new RemoveDebug([],["fileURLToPath","path\\.dirname"]);




    constructor (json:IJsonWithScrapingComponents<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>){
        this.cur_url  =""
        this.base_url= undefined
        this.scriptsTagMap =   new Map<string , FrameAddScriptTagOptions>(...json.scriptsTagMap)
        this.scriptObjectMap = new ExposedMap<t_exposeObject<any> ,ExposeObject<any>>(...json.scriptObjectMap);
        this.scriptFunctionMap =  new ExposedMap<Function,ExposeFunction>(...json.scriptFunctionMap);
        this.scrapingComponent = json.scrapingComponent;
       
    }

    setCurUrl(url:string){
        this.cur_url = url;
        if(!url.startsWith(this.base_url)) {
            const {protocolUrl,domainUrl} = getProtocolAndDomain(url);
            this.base_url = protocolUrl+domainUrl;
        }
    }

    async goto(url:string){
        await this.page.goto(url);
        this.setCurUrl(url);
    }

    async setEssentialScripts(){
        console.log("setEssentialScripts",__filename)
        await this.addFileScriptTag({path:path.resolve(__filename),id:"mPage"});
    }

    static async cst_before_evaluate<UnionRegex  extends t_strRegex ,UnionIdPath  extends string,ArrUnionClassNameType extends readonly[ t_rootClassName , ...readonly string []] ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> , ArrArr extends t_arr_component <unionClassNameType>,
    T extends _IJsonComponents<unionClassNameType>,
    >
    (page:Page , json:IJsonWithScrapingComponents<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>): Promise<mPage<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>>{
        let obj = new mPage<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>(json);
        await obj.setPage(page);
        await obj.setEssentialScripts();   
        return obj;
  
    }

    async destroy(){
        return ((obj)=>{
            return obj.page?.close().then((_)=>{
                obj.scriptsTagMap?.clear();
                obj.page=null;
                obj.scriptsTagMap=null;
            })
        })(this)
        
    }

    async abort(abort_message:string){
        await this.destroy();
        throw new Error(abort_message)
    }




    getScrapingComponent(){
        return this.scrapingComponent;
    }

    
    async setPage(page){
        this.page = page;
    }

    static setScripTagId(scriptTag:FrameAddScriptTagOptions,name?:string){
        const _path = name === undefined ?  scriptTag.path : joinFilePath(scriptTag.path,name)
        scriptTag.id = pathToJoinCharFileName(_path,".")
    }

    toJson() : IJson {
        return {scriptsTagMap:Array.from(this.scriptsTagMap),scriptObjectMap:this.scriptObjectMap. toJson(),scriptFunctionMap:this.scriptFunctionMap. toJson()};
    }
    
    stringify():string{
        return JSON.stringify(this.toJson());
    }



    static getBadResult():null{
        return null;
    }
    static isBadResult(res:any):boolean{
        return res == null;
    }

    static continue_pipeline (scriptTag:FrameAddScriptTagOptions):boolean{
        return !(mPage.isBadResult(scriptTag) ||  mPage.isEmptyScriptTag(scriptTag)  )
    }

    need_resolution (  function_name : string  ,  required:FrameAddScriptTagOptions ) {
        return (res :any )=>{ 
            if(mPage.isBadResult(res)) return this.abort(`${function_name} : required scriptTag ${JSON.stringify(required)} not found`);}
    }





    static eqScriptTag(scriptTag_1:FrameAddScriptTagOptions,scriptTag_2:FrameAddScriptTagOptions):boolean{
        return scriptTag_1.id == scriptTag_2.id && scriptTag_1.content == scriptTag_2.content;
    }

    static isEmptyScriptTag(scriptTag:FrameAddScriptTagOptions):boolean{
        return mPage.eqScriptTag(scriptTag,mPage.emptyScriptTag());
    }
    
    static emptyScriptTag():FrameAddScriptTagOptions{
        return {id:"_",content:""}
    }

    static getEmptyObject<T extends ExposeObjectOrFunction<any>>(_obj:T):T{
        return (_obj instanceof ExposeFunction ? ExposeFunction.emptyObject : ExposeObject.emptyObject) as T;
    }

    static isEmptyObject<T extends ExposeObjectOrFunction<any>>(_obj:T):boolean{
        return _obj instanceof ExposeFunction ? ExposeFunction.isEmptyObject(_obj) : ExposeObject.isEmptyObject(_obj);
    }

    hasExposeObject(exposeObject:ExposeObject<any>){
        return this.scriptObjectMap.hasExpose(exposeObject);
    }

    addObjectToMap(exposeObject:ExposeObject<any>){
        this.scriptObjectMap.expose(exposeObject);
    }


    

    hasExposeFunction(exposeFunction:ExposeFunction){
        return this.scriptFunctionMap.hasExpose(exposeFunction);
    }

    addFunctionToMap(exposeFunction:ExposeFunction){
        this.scriptFunctionMap.expose(exposeFunction);
    }

    /*//:onEventFunction = new ExposeFunction(funct_console,"console")
    async addExposeEventFunction(exposeFunction:onEventFunction){
        return this.page.on(exposeFunction.getName() ,await exposeFunction.getObj());
    }*/



    async exposeObject<T extends t_exposeObject<T> > (exposeObject:ExposeObject<T>) :Promise<ExposeObject<T>>{
        return Promise.resolve(exposeObject);
    }

    async addExposeFunction(exposeFunction:ExposeFunction ):Promise<ExposeFunction>{
        return  await this.addExpose(exposeFunction).then((res :ExposeFunction)=>{return res});
    }

    async addExpose(exposeObjOrFunct:ExposeObjectOrFunction<any>) :Promise<ExposeObjectOrFunction<any>>{
        if(exposeObjOrFunct.getScriptsTag()!= undefined ) return this.addExposeWithScriptTag(exposeObjOrFunct);
        return await this.addExposeWithoutScriptTag(exposeObjOrFunct);
    }

    addExposeObject<T extends t_exposeObject<T> > (exposeObject :ExposeObject<T>){
        return this.addExpose(exposeObject);
    }


    print_all_maps(){
        //console.log("\n\n\n MAP" , JSON.stringify(Array.from(this.scriptsTagMap)));
        console.log("\n\n\n MAP OBJECT " , JSON.stringify(Array.from(this.scriptObjectMap.scriptMap)));
        console.log("\n\n\n MAP FUNCTION " , JSON.stringify(Array.from(this.scriptFunctionMap.scriptMap)));
    
    }
    


    hasScriptTagId(scriptTag:FrameAddScriptTagOptions){
        return this.scriptsTagMap.has(scriptTag.id);
    }
    hasScriptTagPath(scriptTag:FrameAddScriptTagOptions){
        return scriptTag.path && this.scriptsPath.has(scriptTag.path)
    }

    hasScript(scriptTag:FrameAddScriptTagOptions){
        return this.hasScriptTagId(scriptTag) || this.hasScriptTagPath(scriptTag);
    }

    validateScript(scriptTag:FrameAddScriptTagOptions){
        if(scriptTag.id == undefined ) return  mPage.getBadResult()  ;
        else if(this.hasScript(scriptTag)) return mPage.emptyScriptTag();
        else return scriptTag;
    }


    async addScriptTagToPage(scriptTag:FrameAddScriptTagOptions){
        await this.page.addScriptTag( {...scriptTag,path:undefined}) // TODO :  IT HURT BUT I HAVE TO 
        this.addScriptTagToMap(scriptTag);
    }

    addScriptTagToMap(scriptTag:FrameAddScriptTagOptions){
        if(scriptTag.path ) this.scriptsPath.add(scriptTag.path);  //TODO 23/02/24
        this.scriptsTagMap.set(scriptTag.id,scriptTag); 
    }

    addFileScriptTag(scriptTag : FrameAddScriptTagOptions ):Promise<FrameAddScriptTagOptions>{
        return this.resolveFile(scriptTag).then((res_parse:t_res_parseFile)=>{
            if(! mPage.continue_pipeline( res_parse.script_tag) ) return res_parse.script_tag;
                return this. addParsingFile(res_parse)
            }).catch((err)=>{
                this.abort(`addExposeFunctionsSameScriptTag  ${err}`)
                return mPage.getBadResult();
            })
    }

 
    async resolveFile(scriptTag:FrameAddScriptTagOptions): Promise<t_res_parseFile>{ //TODO

        if(scriptTag.content == undefined && scriptTag.path  == undefined )return Promise.resolve({script_tag:mPage.getBadResult()}) ; 
        let valid_script = this.validateScript(scriptTag) ;
        if(!mPage.eqScriptTag(valid_script , scriptTag) ) return Promise.resolve({script_tag:valid_script});//invalid 

        let p_script_tag = null as Promise<t_res_parseFile > ;
        
        if(scriptTag.content == undefined){ //readFileAndRemoveExportDefault(scriptTag.path);
            p_script_tag = this.parseFile(scriptTag)
            
        }else{
            p_script_tag= Promise.resolve({script_tag:scriptTag});
        }
        return p_script_tag

    }

    async exposeFunction(exposeFunction:ExposeFunction) :Promise<ExposeFunction>{
        if(this.hasExposeFunction(exposeFunction)) return Promise.resolve(mPage.getEmptyObject(exposeFunction)) ;
        return (async(_exposeFunction,_obj :Function  , name :string )=>{
            //console.log(  `page exposed functions ${name} OBJ : `, _obj ) ;
            if(_obj && false ){ //TODO if function use .$ we need to expose it to override general function
                await this.page.exposeFunction(name,_obj);
                await this.page.addScriptTag( {id:name,content:_obj.toString()}) // TODO :  IT HURT BUT I HAVE TO 
            }
            return _exposeFunction 
        }
        )(exposeFunction,await exposeFunction.getObj(),exposeFunction.getName())
    }


    async addExposeWithoutScriptTag(exposeObjOrFunct:ExposeObjectOrFunction<any>):Promise<ExposeObjectOrFunction<any>>{
        if( false){ //TODO : if function use .$ we need to expose it to override general function , alternative below  don't work very well :[exposeObjOrFunct.getName()]
            if( exposeObjOrFunct instanceof ExposeFunction) await this.exposeFunction(exposeObjOrFunct) 
            else await this.exposeObject(exposeObjOrFunct)
        }

        let res_parseFile :_t_res_parseFile = {script_tag: { id:exposeObjOrFunct.getName(), content:(await exposeObjOrFunct.getObj()).toString()} };

        if(exposeObjOrFunct instanceof ExposeFunction) res_parseFile.declared_functions= []//exposeObjOrFunct.getName()]
        else res_parseFile.declared_classes=[]//exposeObjOrFunct.getName()] 

        res_parseFile = await this.laFunction(exposeObjOrFunct.getRequired(),res_parseFile); // ICI 17/08 addScriptTag for all  
        
        console.log("addExposeWithoutScriptTag RES PARSEFILE ", JSON.stringify(res_parseFile))
        return this.addParsingFile( res_parseFile ).catch((err)=>{
            this.abort(`addExposeFunctionsSameScriptTag  ${err}`)
            return mPage.getBadResult();
        }).then((res)=>{
            return exposeObjOrFunct // A FAIRE
        })


    }

 
    async addExposeWithScriptTag(exposeObjOrFunct:ExposeObjectOrFunction<any>):Promise<ExposeObjectOrFunction<any>>{

        //TODO for object hasScriptOfExposeFunction :this.scriptsTagMap.has(exposeFunction.getScriptsTag().id);
        if(exposeObjOrFunct instanceof ExposeFunction ? ( this.hasExposeFunction(exposeObjOrFunct)) : this.hasExposeObject(exposeObjOrFunct) ) {
            return Promise.resolve(mPage.getEmptyObject(exposeObjOrFunct));
        } 

        let scriptTag = exposeObjOrFunct.getScriptsTag()

        let  res_parseFile : _t_res_parseFile =  (scriptTag.path !==undefined ? {... await this.resolveFile(exposeObjOrFunct.getScriptsTag()),  script_tag: scriptTag , script_dependencies:[] } : getDfTresParseFile(scriptTag)) as _t_res_parseFile;
        
        res_parseFile = await this.laFunction(exposeObjOrFunct.getRequired(),res_parseFile) as t_res_parseFile;

        return this.addParsingFile( res_parseFile ).catch((err)=>{
            this.abort(`addExposeFunctionsSameScriptTag  ${err}`)
            return mPage.getBadResult();
        }).then((res)=>{
            return exposeObjOrFunct // A FAIRE
        })
        
        
    }

    async addParsingFile( res_parseFile: t_res_parseFile ) :Promise<FrameAddScriptTagOptions>{
       
        let {script_tag, declared_functions,declared_classes} = res_parseFile; 
        //ICI 17/08 expose for all 
        let p_arr= [
            ...!declared_functions?[]:declared_functions?.map((function_name)=>{
                let scriptTag = {path:script_tag.path}
                mPage.setScripTagId(scriptTag,function_name);
                return this.exposeFunction(new ExposeFunction(null,function_name,[],scriptTag)) //ICI content : await import 
            }),
            ...!declared_classes?[]:declared_classes?.map((class_name)=>{
                let scriptTag = {path:script_tag.path}
                mPage.setScripTagId(scriptTag,class_name);
                return this.exposeObject(new ExposeObject(null,undefined,[],scriptTag,class_name))
            })
        ]

        return Promise.all(p_arr).then(async(arr_res : (ExposeObject<any> | ExposeFunction) [])=>{
                arr_res = arr_res.filter((elem)=>{return !mPage.isEmptyObject(elem)})
                await this.addScriptTagToPage(script_tag);
                arr_res.forEach((elem)=>{elem instanceof ExposeFunction ? this.addFunctionToMap(elem) : this.addObjectToMap(elem)})

                return script_tag
            }).catch(
                (err)=>{
                    console.log ("addParsingFile 3 ERR")
                    this.abort(`addScriptTagAndCode  ${err}`)
                    return mPage.getBadResult();
            })


    }

    async laFunction(requireds :FrameAddScriptTagOptions[] ,res_parseFile:_t_res_parseFile):Promise<t_res_parseFile>{

        requireds.forEach(async(required:FrameAddScriptTagOptions)=>{
            if(required.content !==undefined) {
                let name = required.id.substring(2,required.id.length)//TODO 23/02/24 
                let scriptTag = {path:required.path,id:""}
                mPage.setScripTagId(scriptTag,name);
                if(required.id.startsWith("c_")) { //TODO IMP required id start with c_ or f_ to distinguish class and function
                    if(this.hasExposeObject(new ExposeObject(null,undefined,[],{...scriptTag,path:undefined},name))) return;
                    await this.page.addScriptTag( {...required,path:undefined}) 
                    res_parseFile.declared_classes.push(name)

                }
                else if (required.id.startsWith("f_")) {
                    if(this.hasExposeFunction(new ExposeFunction(null,name,[],{...scriptTag,path:undefined}))) return;
                    await this.page.addScriptTag( {...required,path:undefined}) 
                    res_parseFile.declared_functions.push(name)
                }

            }else{
                res_parseFile.script_dependencies.push(required.path)
            }
            
        })
        return await this.resolveDependencies(res_parseFile) ;
        
    }

    async resolveDependencies(res_parseFile :_t_res_parseFile ,root_file_path:string="."): Promise<t_res_parseFile> {
        //console.log("addFileToPage TO EXPOSE FUNCT \n",to_expose_functions)
        
        let rel_paths :string[] =  res_parseFile.script_dependencies 
        let filename =""

        if(rel_paths == undefined) return res_parseFile; //no required for instance 
        for (const rel_path of  rel_paths) {

            filename = getFilenameWithoutExtension(rel_path)

            let scriptTag = {id:"",path:path.resolve(path.join(root_file_path,rel_path))}; // A FAIRE : joinFilePath
            mPage.setScripTagId(scriptTag);
            if(this.scriptsPath.has(scriptTag.path)) continue;
            
            
            await this.addFileScriptTag(scriptTag).then(this.need_resolution ("addFileScriptTag",scriptTag))

        }
        delete res_parseFile.script_dependencies
        return res_parseFile;



    }
   

    async parseFile(scriptTag :FrameAddScriptTagOptions , ignored_function=[],ignored_variable=[]) : Promise<t_res_parseFile> {
        console.log( `page parseFile ${scriptTag.path}` ) ;
        scriptTag.content = mreadFile(scriptTag.path);


        function splitLastIndexOf(str:string,separator:string):[string,string]{
            let index = str.lastIndexOf(separator);
            return [str.substring(0,index),str.substring(index+1,str.length)]
        }
     
        
        const [root_file_path,scrpt_filename] =  splitLastIndexOf(scriptTag.path,path.sep);

        mPage.setScripTagId(scriptTag);
        //if(scriptTag.id ==undefined) scriptTag.id = scrpt_filename//TODO 23/02/24 +id:
    
        let res_parseFile:_t_res_parseFile = await mPage.getCleanDebugCodeAndImportedFiles(scriptTag,ignored_function,ignored_variable);

        return await this.resolveDependencies(res_parseFile ,root_file_path) ;

    }


    static async getCleanDebugCodeAndImportedFiles(script_tag :FrameAddScriptTagOptions,ignored_function=[],ignored_variable=[]): Promise<_t_res_parseFile>{

        let dependencies = await mPage.dependencies
        dependencies = dependencies.concat(["fs","url","lodash"]); //A FAIRE : extract 
        
        
        let str_src = removeCommentRegex(script_tag.content,"mPage-not-imported");
        
        let m = null 
        
        let word =""
        let rel_paths = [];
        let all_exported_functions = []
        let all_exported_classes = []
        let all_exported_variables = []

        let exported_function_name = ""
        let exported_variable_name= ""
        let exported_class_name = ""
        let lct_code :string =""

        let set_exported = []

        do {
            m = getRegexG( import_str_regex ).exec( str_src);
            let IsIgnoredImport = m? getRegexG(embedBeginOfLineStrOrRegex(RemoveDebug.getIgnoreImportRegex("mPage-not-imported"),true)).exec(str_src.substring(m[0].length)):m ; 
            if (m && !IsIgnoredImport) {
                let group = m[1]?m[1]:m[2];
                //console.log("getCleanDebugCodeAndImportedFiles | group", group , m );
                let filename = getFilenameWithoutExtension(group);
                let f_rel_path = group;
                if(!(dependencies.includes(filename) || rel_paths.includes(f_rel_path))){
                    rel_paths.push(f_rel_path);
                    //word = m[0].replace(new RegExp(`${group}(?=\\"|\\')`),"./"+getFilename(group)) //""//remove the import //m[0] <=> conserve import 
                }/*else{
                    word = m[0]
                }*/ word = ""
            }else{
                let res_pair = mPage.rm_debug_code.removeDebugFunctions(str_src)
                word = res_pair[0]
                m = res_pair[1]
                if(m){//si pas debug ligne 
                    //console.log("si pas debug ligne  | getCleanDebugCodeAndImportedFiles | word", word);
                    exported_function_name= getExportedFunctionNameRegex(word)
                    if(exported_function_name){
                        all_exported_functions.push(exported_function_name)
                    }else{
                        exported_class_name =getExportedClassNameRegex(word)
                        if(exported_class_name) {
                            all_exported_classes.push(exported_class_name)
                        }else{
                                exported_variable_name = getVariableNameRegex(word)
                                if(exported_variable_name){
                                    all_exported_variables = all_exported_variables.concat(exported_variable_name)
                                }else{
                                    set_exported = getNameOfExportedSet(word)
                                    if(set_exported){
                                        all_exported_classes=all_exported_classes.concat(set_exported)
                                        word = ""
                                    }
                            }
    
                        }
                    }
                    word = word.replace(/export\s*(default)?/g, "")
                    //word = word.replace(/export\s*default/g, "")
                    //word = word.replace(/(?<=export)\s*default/g, "") // export only exist on module level , but module cannot be served trought targeted serv/page : CORS issue ect 
                }
            
            }
            if(m){
                    
                    lct_code += (str_src.substring(0,m.index)+word)
                    str_src=str_src.substring(m.index+m[0].length,str_src.length)
                    

                }
            } while ( m);
        

        script_tag.content = lct_code;

        return {script_tag:script_tag,script_dependencies :rel_paths,declared_functions:all_exported_functions,declared_classes : all_exported_classes};
    }

}

type t_res_parseFile = {script_tag:FrameAddScriptTagOptions, declared_functions?:string[],declared_classes?:string[]}
type _t_res_parseFile = t_res_parseFile  & {script_dependencies ?:string[] }


const getDfTresParseFile = (scriptTag) :_t_res_parseFile =>{
    return { script_tag: scriptTag , declared_functions:[] , declared_classes:[] , script_dependencies:[]} ;
}