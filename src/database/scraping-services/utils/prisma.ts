
import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("database","prisma_utils")
const debug_prisma_utils : Debugger = debug(name_module)


import { IJson } from "@/../shared/m_object.js"
import { getPathServiceSchemaPrisma, getPathServiceClientPrisma } from '@/config/pathFolder/srcPath.js';
import { concatExtension, joinFilePath, concatExtensionJs, mreadFile, mwriteFile, isFileExist, ifFileExistRetReadData, mwriteFileExtra } from '@shared/m_file.js';
import { deepCloneJson, filterJsonByArrProps } from '@shared/m_json.js';
import { t_noFieldName, noFieldName } from '@shared/m_primitives.js';
import { convertStrToRegexStr, getRegexGM, notSpaceStrRegex, spaceStrRegexWithoutLineBreak, str_beginOfLine_regex, str_endOfLine_regex } from '@shared/m_regex.js';
import { majFirstChar, join_dot, join_underscore, majAllStr, join_hyphen } from '@shared/m_string.js';
import { t_indexable_key, t_JoinChar_hyphen, Substring, t_JoinChar_underscore, t_JoinChar } from '@shared/type.js';
import { isDatabaseMeta_type, providerDbToType, t_DatabaseMeta_type } from '@shared/m_database.js';
import { convertToArray, getPermutation } from '@shared/m_array.js';
import { rFact } from '@shared/m_math.js';
import { embedCapturingGroupStrOrRegex, embedNonCapturingGroupStrOrRegex, embedOptCapturingGroupStrOrRegex } from '@shared/m_regex_prefixAndSuffix.js';

const extensionPrisma =  "prisma" as const
export const concatExtensionPrisma = <T extends string  > (str:T) => concatExtension(str,extensionPrisma)

const getFilePath_prismaFile =  <T extends string> (service_name : T,name : string ,isLocal : boolean,isDev :boolean = false  ) => {
    return joinFilePath(getPathServiceSchemaPrisma(service_name ,isLocal,isDev,true),majFirstChar(name),concatExtensionPrisma(join_dot(service_name,name)))
}

const getFilePathPrismaFile =  <T extends string> (service_name : T,filename : string ,isLocal : boolean,isDev :boolean = false  ) => {
    return joinFilePath(getPathServiceSchemaPrisma(service_name ,isLocal,isDev,false),concatExtensionPrisma(filename))
}

const getMainPath_prismaFile = <T extends string> (service_name : T,isLocal : boolean, isDev :boolean = false,fileName ?: string ) => {
    return joinFilePath(getPathServiceSchemaPrisma(service_name ,isLocal,isDev,true),concatExtensionPrisma(`${fileName ? fileName:service_name}`))
}

export const joinPrefix  = <SN extends string , T extends string> (sn: SN , prefix : T) => join_underscore(prefix,sn) 

const getMergedPathsprismaFile = <T extends string, union_nw_name extends t_indexable_key> (service_name : T , new_names : readonly union_nw_name[],isLocal:boolean , isDev :boolean = false):{[k in union_nw_name] : string } => {
    type t_ret = {[k in union_nw_name] : string }
    return new_names.reduce(
        (acc_obj : t_ret, _name:union_nw_name)=>
        { 
            const name = String(_name)
            return {...acc_obj , [name]: getFilePathPrismaFile(service_name,name,isLocal,isDev )}}
        ,{} as t_ret )
}


const getMainReplacePathFile = <T extends string> (service_name : T ,isLocal : boolean ,isDev :boolean) => {
    return joinFilePath(getPathServiceSchemaPrisma(service_name ,isLocal,isDev,true),concatExtensionJs(join_dot(service_name,"replace")))
}

export const getServicePathClientPrisma = <T extends string> (service_name : T ,isLocal : boolean, isDev ?:boolean  ) => {
    return joinFilePath(getPathServiceClientPrisma(service_name,isLocal,isDev ),"index.js")
}


export enum enum_prisma_op{
    "create" = "create",
    "update" = "update",
    "delete" = "delete",
} 


type t_arr_leaf_client = readonly ["output"]
type t_val_leaf_client = t_arr_leaf_client[number]
type t_arr_leaf_db = readonly ["url","provider"]
type t_val_leaf_db = t_arr_leaf_db[number]

type t_arr_leaf = readonly [...t_arr_leaf_client,...t_arr_leaf_db]
export type t_val_leaf = t_val_leaf_client|t_val_leaf_db

type t_getNoFieldArr < K1, K2 > = 
    K1 extends "generator" ? 
        K2 extends "client" ? t_arr_leaf_client : never 
    : K1 extends "datasource" ?
        K2 extends "db" ? t_arr_leaf_db : never
    : never 

export type t_arr_key_1 = ["generator","datasource"]

type t_generator_key_2 = ["client"]
type t_datasource_key_2 = ["db"]

export type t_arr_key_2 = [...t_generator_key_2 , ...t_datasource_key_2]


type t_json_replace_leaf<key_1 extends string ,key_2 extends string > =
 {[key_3 in [t_noFieldName][number]] : t_getNoFieldArr<key_1,key_2>}

 

type t_json_strReplace <SN extends string , TK1 extends t_arr_key_1[number] , TK2 extends t_arr_key_2[number] , _VArr extends readonly string[] = t_getNoFieldArr<TK1,TK2> > = { 
    [key in t_JoinChar_hyphen<["regex",_VArr[number]]>] : ReturnType <typeof jsonReplace.placeHolderGetRegex<_VArr[number],true,ReturnType<typeof jsonReplace.envPlaceHolderGetRegex<SN,ReturnType<typeof jsonReplace.joinKey1Key2<TK1,TK2>>,_VArr[number]>>>>
}

type t_json_replaceValue_leaf <key_1 extends string ,key_2 extends string > =
     {[key_3 in t_getNoFieldArr<key_1,key_2>[number]] : string}

    
export type t_json_replaceOrStrRegex< isRegex extends -1|0|1 = 0 , TK1 extends t_arr_key_1[number] = t_arr_key_1[number]  > = {
    [key_1 in TK1]:
        key_1 extends "generator" ? {
            [key_2 in ["client"][number]] : isRegex extends 0 ?t_json_replace_leaf<key_1,key_2> : isRegex extends 1 ?t_json_strReplace<string,key_1,key_2>: t_json_replaceValue_leaf<key_1,key_2>
        }
        : key_1 extends "datasource" ? {
            [key_2 in ["db"][number]] : isRegex extends 0? t_json_replace_leaf<key_1,key_2>:isRegex extends 1 ?t_json_strReplace<string,key_1,key_2>: t_json_replaceValue_leaf<key_1,key_2>
        }
        : never
}
const base_json_replace : t_json_replaceOrStrRegex = {
        generator :{
            client: {
                [noFieldName] :["output"] //: 'env(`"CLIENT_${SERVICENAME}_OUTPUT"`)'
            },
        },
        datasource:{
            db:{
                [noFieldName] :["url","provider"] //: 'env(`"DB_${SERVICENAME}_URL"`)'
            }
        }
    }

// A FAIRE ; refactor regex with jsonRegex
namespace jsonReplace {
    export const  getRegexModel = (_key_1 :string|RegExp , _key_2 :string|RegExp )=> {
        const fct = (key :string|RegExp) => key instanceof RegExp ? key.source : convertStrToRegexStr(key)
        const debRegex = [fct(_key_1)+" ",fct(_key_2)+" ","{"]
        const midRegex = ["([^}]+)"]//getContent
        const endRegex = ["}"]
        return [...debRegex,...midRegex,...endRegex].join("\\s*")
    }

    export const joinKey1Key2 = <K1 extends string , K2 extends string > (_key_1 :K1 , _key_2 :K2 ) => {
        const sub_key_1  = _key_1.substring(0,3) as Substring<K1,0,3>
        return join_underscore(sub_key_1,_key_2) as t_JoinChar_underscore<[ typeof sub_key_1 , K2 ]>
    }
   const _placeHolderGetRegex = <K1 extends string , K2 extends string , V extends string > (_key_1 :K1 , _key_2 :K2 , _value_1 : V) => majAllStr(join_underscore(_key_1,_key_2,_value_1) )
    
   export const envPlaceHolderGetRegex = <_SN extends string , K2 extends string , V extends string > (_serviceName :_SN , _key_2 :K2 , _value_1 : V) => {
    return `env("${_placeHolderGetRegex<_SN,K2,V>(_serviceName,_key_2,_value_1)}")`  as `env(${ReturnType<typeof _placeHolderGetRegex<_SN,K2,V>>})`
   }

   export const placeHolderGetRegex = <V extends string , B extends boolean ,_T extends (B extends true ? string : RegExp) , S extends string =  _T extends string ? _T : string   > (_value_1 : V , param_regexOrStr: _T, isStr : B) => {
        const arr_to_join =[_value_1,"=",""] as const 
        const tmp_regex = embedCapturingGroupStrOrRegex(arr_to_join.map((elm)=>convertStrToRegexStr(elm)).join("\\s*"),true) as unknown as t_JoinChar<typeof arr_to_join,"\\s*">
        return tmp_regex + (isStr ? convertStrToRegexStr(param_regexOrStr as string ) : (param_regexOrStr as RegExp).source) as unknown as `${typeof tmp_regex}${S}`
    }
}   

function jsonReplaceTojsonRegex < SN extends string , TK1 extends t_arr_key_1[number] , TK2 extends t_arr_key_2[number] , V extends t_val_leaf ,  isRegex extends  -1|0|1 ,  JR extends t_json_replaceOrStrRegex<isRegex,TK1> > (serviceName : SN , json : JR) : any {
    let res_json = {} as IJson

    let tmp_regex = ""
    let tmp_json = {} as IJson 

    for(const key_1 in json ){
        let cur_key_1 :TK1 = key_1 as unknown as TK1
        for(const key_2 in json[key_1]){
                let cur_key_2 : TK2 = key_2 as unknown as TK2
                tmp_regex = jsonReplace.getRegexModel(key_1,key_2) //TODO : use regex module from youtube-
                tmp_json = { [key_2]:{["regex"]:tmp_regex}}
                for(const value of Object.values(json[key_1][key_2][noFieldName])){
                    let cur_value : V = value as V
                    let multKey = jsonReplace.joinKey1Key2<TK1 , TK2>(cur_key_1,cur_key_2) 
                    let _strEnv = jsonReplace.envPlaceHolderGetRegex<SN,ReturnType<typeof jsonReplace.joinKey1Key2<TK1,TK2>>,V>(serviceName,multKey,cur_value)
                    tmp_json[key_2][join_hyphen("regex",cur_value)]= jsonReplace.placeHolderGetRegex<V,true,typeof _strEnv>(cur_value,_strEnv,true)
                }

            }
            res_json[key_1] = {...tmp_json }
        }
    return res_json


    }


const changedSchemas = <SN extends string,TKJV extends   SN|t_JoinChar_underscore<[SN,string]>   , TK1 extends t_arr_key_1[number] , TK2 extends t_arr_key_2[number], V extends t_val_leaf , isRegex extends  -1|0|1 , JR extends t_json_replaceOrStrRegex<isRegex,TK1> ,JV extends t_jsonReplaceValue<SN,TKJV,TK1> = t_jsonReplaceValue<SN,TKJV,TK1> >(schema_path : string , service_name : SN , json_value : JV , json_replace :JR ) =>  {
    
    const jsonRegex = jsonReplaceTojsonRegex<SN,TK1,TK2,V,isRegex,JR>(service_name,json_replace)
    const json_res : {[k in keyof JV]: string } = {} as any 
    let str_schema = mreadFile (schema_path)
    let cur_regex = ""
    let cur_value =""
    let cur_key : keyof JV = "" as any 
    for(const key_0 in json_value){
        cur_key = key_0 as unknown as  TKJV
        for(const key_1 in json_value[cur_key]){
            for(const key_2 in json_value[cur_key][key_1]){
                    for(const key in json_value[cur_key][key_1][key_2]){
                        if((cur_regex = jsonRegex?.[key_1]?.[key_2]?.[join_hyphen("regex",key)])===undefined) throw new Error("json_value has not key : "+`regex-${key}`)
                        cur_value = (json_value[cur_key][key_1][key_2][key] as string).replaceAll(/['"]/g, "").replaceAll(/\\/g, "\\\\")
                        str_schema = str_schema.replace(getRegexGM(cur_regex),`$1\"${cur_value}\"`)
                    }
            }
        }
        json_res[cur_key] = str_schema
    }
    return json_res

}

const getSingleModel = (str : string , idRoute ?: string ) : null |[string,number,string] => {
    const reg_modelName = idRoute ? majFirstChar(idRoute) : /([A-Z]\S*)/
    const getModelRegex = jsonReplace.getRegexModel("model",reg_modelName)
    let content_model = str.match(new RegExp(getModelRegex,"sm"))
    if(content_model == null) return null
    return idRoute ? [content_model[0],content_model.index,idRoute] : [content_model[0],content_model.index,content_model[0+1]]
}


const getMultipleModel = (str : string , idRoute : string) => {
    let tmp = getSingleModel(str,idRoute)
    if(tmp == null) throw new Error(`content_model ${idRoute} is null`)
    let res = []
    while(tmp){
        res.push(tmp)
        str = str.substring(tmp[1]+tmp[0].length)
        tmp = getSingleModel(str)
    }
    return res
}
    

export type t_jsonReplaceValue<SN extends string,TKJV extends SN|t_JoinChar_underscore<[SN,string]> =  SN|t_JoinChar_underscore<[SN,string]> ,TK1 extends t_arr_key_1[number]=t_arr_key_1[number] >  = {[k in TKJV]:t_json_replaceOrStrRegex<-1,TK1>}

const getJsonReplace = async <SN extends string>(service_name : SN,isLocal : boolean,isDev:boolean)=> {
    return  import(getMainReplacePathFile(service_name,isLocal,isDev)).then((obj )=>{
        return obj.default  as t_jsonReplaceValue<SN,any,any> 
    })
}

const changeModelContent = (content : string , fromDb:t_DatabaseMeta_type , toDb:t_DatabaseMeta_type) => {
    //TODO refactor
    const optSpace = `${spaceStrRegexWithoutLineBreak}*` as const 
    const reqSpace = `${spaceStrRegexWithoutLineBreak}+` as const 
    const optWord = `.*` as const 
    const optSpaceWordSpace = `${optSpace}${optWord}${optSpace}` as const 
    const reqSpaceoptWordSpace = `${reqSpace}${optWord}${optSpace}` as const 

    const _fct_map = (char_join : string , fct_map : (arg:string)=>string = convertStrToRegexStr ) =>  (arr_str:string[])=>arr_str.map(fct_map).join(char_join)
    const fct_map_join = (arr_arr_str:string[][],char_join : string  ,fct_map ?: (arg:string)=>string ) => arr_arr_str.map(_fct_map(char_join,fct_map))
    const fct_map_join_join = (arr_arr_str:string[][],char_join : string ,fct_map ?: (arg:string)=>string ,fct_embed : (_str:string)=>string = (_str:string)=>embedNonCapturingGroupStrOrRegex(_str,true) ) => fct_map_join(arr_arr_str,char_join,fct_map).map(fct_embed).join("|")

    const getRegexAnnotations = (annotations:readonly string[], optIndices : number[]= [])=>{
        const grouped_annotations = annotations.map((_annotation,idx)=>{
            const annotation =convertStrToRegexStr(_annotation) 
            return optIndices.includes(idx) ? embedOptCapturingGroupStrOrRegex(annotation,true) :embedCapturingGroupStrOrRegex(annotation,true) })
        return fct_map_join_join(getPermutation(grouped_annotations),reqSpaceoptWordSpace,(str)=>str)
    }

    type t_trad_annotations < TArrMongoDB extends readonly string [] , TArrSqlite extends readonly string []> = 
    TArrMongoDB extends readonly [infer M,... infer MR] ? TArrSqlite extends readonly [infer S,... infer SR] ? 
    M extends t_indexable_key ? MR extends readonly string []  ? SR extends readonly string []  ? 
    {[k in M]:S}& t_trad_annotations<MR,SR> : never : never : never : never : TArrSqlite extends readonly [infer _,... infer _R] ? never : {}

    type t_idField_annotation_trad< TArrMongoDB extends readonly string [] , TArrSqlite extends readonly string [] , TIdx extends number = number  > = {idx:TIdx ,mongodb_to_sqlite:t_trad_annotations<TArrMongoDB,TArrSqlite> }

    const getReplacedContent = <TMongo extends readonly string []  , TSqlite extends readonly string [] , TIdx extends number = number  >
                (matched : RegExpMatchArray , _str:string , _idField_annotations_trad:t_idField_annotation_trad<TMongo,TSqlite, TIdx> )=>{
                    const len = Object.keys(_idField_annotations_trad.mongodb_to_sqlite).length
                    for( let k = 0 ; k < rFact(len) ; k++){
                        let idx = 0
                        let arr_match = []
                        for( ; idx < len ; idx++){
                            const cur_match = matched[idx+_idField_annotations_trad.idx+k*len]
                            if(cur_match) {
                                arr_match.push(cur_match)
                            }else {
                                break
                            }
                        }
                        if(idx == len) {
                            return arr_match.reduce((acc,cur)=>acc.replace(cur,_idField_annotations_trad.mongodb_to_sqlite[cur]),_str)
                        }
                    }
                    throw new Error("no match")
                }

    if(fromDb == toDb) return content
    else {
        if(fromDb !== "MongoDB") throw new Error(`fromDb is not ${"MongoDB"} => not implemented`)
        switch(toDb){
            case "SQLite":  
                //TODO-IMP refactor
                const idField_name = {idx: 1 ,mongodb :"id",sqlite:"id"}
                const idField_type = {idx: 2 ,mongodb :"String",sqlite :"Int"}
                type t_idField_annotation< TArrMongoDB extends readonly string [] , TArrSqlite extends readonly string [], TIdx extends number = number >  = {idx: TIdx ,mongodb : TArrMongoDB ,sqlite : TArrSqlite }
                const mongodbAnnotations =["@id","@db.ObjectId","@default(auto())"] as const 
                type t_mongodbAnnotations = typeof mongodbAnnotations
                const sqliteAnnotations =["@id","","@default(autoincrement())"] as const
                type t_sqliteAnnotations = typeof sqliteAnnotations
                type t_mongodb_idx = 3 
                const idField_annotations : t_idField_annotation<t_mongodbAnnotations ,t_sqliteAnnotations,t_mongodb_idx>  = {idx: 3 ,mongodb : mongodbAnnotations, sqlite : sqliteAnnotations} as const 
                
                const regex_ = 
                    //match : `^${optSpace}` (begin)
                    str_beginOfLine_regex + optSpace +
                    //match : "id String"
                    [idField_name.mongodb,idField_type.mongodb].map((_str:string)=>embedCapturingGroupStrOrRegex(_str,true)).join(reqSpace)
                    +reqSpaceoptWordSpace+
                    //match : "@id @db.ObjectId"
                    embedNonCapturingGroupStrOrRegex(getRegexAnnotations(idField_annotations.mongodb),true )
                    //match : rest of the line 
                    +optSpaceWordSpace +str_endOfLine_regex
                const matched = content.match(new RegExp(regex_,"sm"))

                let replaced_match = matched[0].replace(matched[idField_name.idx],idField_name.sqlite).replace(matched[idField_type.idx],idField_type.sqlite)
                const idField_annotations_trad = {idx:idField_annotations.idx , mongodb_to_sqlite:idField_annotations.mongodb.reduce((acc,cur,idx)=>({...acc,[cur]:idField_annotations.sqlite[idx]}),{} as any )} as t_idField_annotation_trad<t_mongodbAnnotations ,t_sqliteAnnotations,t_mongodb_idx>
                replaced_match = getReplacedContent<t_mongodbAnnotations ,t_sqliteAnnotations,t_mongodb_idx> (matched,replaced_match,idField_annotations_trad)
                
                content = content.substring(0,matched.index)+replaced_match+content.substring(matched.index+matched[0].length)
                return content 
            default: 
                throw new Error(`conversion ${fromDb} to ${toDb} is not implemented`)
        }
    }
}

 const writeMergedSchema = async <SN extends string,TKJV extends SN|t_JoinChar_underscore<[SN,string]>  , TK1 extends t_arr_key_1[number]=t_arr_key_1[number] , TK2 extends t_arr_key_2[number]=t_arr_key_2[number], V extends t_val_leaf= t_val_leaf, isRegex extends  -1|0|1 = 0, JR extends t_json_replaceOrStrRegex<isRegex,TK1> = t_json_replaceOrStrRegex<isRegex,TK1>
 ,JV extends t_jsonReplaceValue<SN,TKJV,TK1>  = t_jsonReplaceValue<SN,TKJV,TK1> >
(service_name : SN,isLocal:boolean,isDev:boolean, idRoutes : readonly string[],renames_prismaFile ?: TKJV[], _json_value ?: IJson, json_replace :JR = {...base_json_replace} as unknown as JR  ) : Promise<{needCreation:{ [k in keyof JV]: string; }, all :{ [k in keyof JV]: string; }}>=> {
    const df_isLocal = false 
    const true_isDev = true
    let main_path = getMainPath_prismaFile(service_name,df_isLocal,true_isDev)
    if(_json_value==undefined)_json_value= await getJsonReplace(service_name,df_isLocal,true_isDev)
    const json_value : JV = filterJsonByArrProps(_json_value,renames_prismaFile) as unknown as JV 
    
    let main_replaced_json = changedSchemas<SN,TKJV,TK1,TK2,V,isRegex,JR,JV> (main_path ,service_name, json_value,json_replace)
    let str_tail = ""
    let cur_path = ""
    let str_tmp = ""   
    
    const merged_path = getMergedPathsprismaFile<SN,keyof JV>(service_name,Object.keys(main_replaced_json) as any ,isLocal,isDev)
    type t_provider_regex = ReturnType<typeof jsonReplace.placeHolderGetRegex<"provider",false,RegExp,'\"([^\"]+)\"'>>
    const provider_regex : t_provider_regex = jsonReplace.placeHolderGetRegex<"provider",false,RegExp,'\"([^\"]+)\"'>("provider",/"([^"]+)"/,false)
    const datasource_regex = jsonReplace.getRegexModel("datasource","db")
    let result = {all:deepCloneJson(merged_path)}
    for(const basename of Object.keys(main_replaced_json)){
        for (const idRoute of idRoutes){ 
            cur_path = getFilePath_prismaFile(basename,idRoute,df_isLocal,true_isDev) 
            //providerDbToType
            let content = ""
            if(isFileExist(cur_path) ) content = mreadFile(cur_path) 
            else {
                content = mreadFile(getFilePath_prismaFile(service_name,idRoute,df_isLocal,true_isDev))
                let provider = (content.match(new RegExp(datasource_regex,"sm"))?.[1])?.match(new RegExp(provider_regex,"sm"))?.[2]
                content = getMultipleModel(content, idRoute).reduce((acc,_elm)=>`${acc}\n${_elm[0]}`,"")
                provider = providerDbToType(provider)
                if(!isDatabaseMeta_type(provider)) throw new Error(`provider ${provider} is not a valid provider`)

                const atm_provider = providerDbToType(json_value[basename].datasource.db.provider)
                if(!isDatabaseMeta_type(atm_provider)) throw new Error(`atm_provider ${atm_provider} is not a valid provider`)

                content = changeModelContent(content,provider,atm_provider)
            }
            str_tmp = getMultipleModel(content, idRoute).reduce((acc,_elm)=>`${acc}\n${_elm[0]}`,"")
            // str_tmp = replacePipeline_model(str_tmp)
            str_tail += "\n"+str_tmp
        }
        
        if(!merged_path.hasOwnProperty(basename) )throw new Error(`merged_path ${JSON.stringify(merged_path)} has not key : ${basename}`)
        if(ifFileExistRetReadData(merged_path[basename]) == (main_replaced_json[basename] + str_tail)) delete merged_path[basename]
        else mwriteFileExtra(merged_path[basename],main_replaced_json[basename] + str_tail)
    }
        

    return {...result,needCreation:merged_path}
    
}

export default writeMergedSchema

