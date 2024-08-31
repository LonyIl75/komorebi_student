import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_database"


import crypto from "crypto"
import { createAddress, join_urlAndQueryParam } from "./routePath.js"
import { nullOrUndefined, str_undefined_address } from "./m_primitives.js";
import { IJson } from "./m_object.js";

import sqlite3 from 'sqlite3';
import { getDirectoryPathFromFilePath, isFolderExist, toFilePath } from "./m_file.js"
import { execSync } from "child_process"

import  mongoose,{ConnectOptions,Mongoose} from 'mongoose';
import { ifNotGetDfErrorHandler, t_fct_errorHandler } from "./m_error.js"
import writeMergedSchema, { getServicePathClientPrisma, t_json_replaceOrStrRegex } from "@/database/scraping-services/utils/prisma.js";
import { EmptyInit, deepCloneJson, AHaveSerializer, haveSerializerAndEmptyInit } from "./m_json.js";
import { minAllStr } from "./m_string.js";
import { fp_writeMergedServiceSchema } from "@/database/scraping-services/utils/prismaService.js";
import { t_serviceName_MainService } from "@/controller/scraping-services/Services/src/types.js";
import { execPromisify } from "./m_node_cli.js";
import { reshapeObjectIgnoreOpt } from "./type.js";


const _getFctFullMongoUrl = <P extends string , S extends string> (mongo_prefix :P , mongo_suffix :S) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return <N extends string >(mongo_name :N) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        const res = createAddress<readonly [P] , N>([mongo_prefix] , mongo_name)  
        return join_urlAndQueryParam<typeof res , S>( res, mongo_suffix)
    }
}

const getIdFromName = (name:string) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return crypto.createHash('sha256').update(name).digest('hex')
}

const _isInvalidId = (_id:string) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return _id === getInvalidId();
}

const getInvalidId = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return str_undefined_address;
}



export const connectDB  = async <R,T>(res_connectDB : Promise<R>, errorHandler ?: t_fct_errorHandler<T>) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    try {
        return await res_connectDB;
    } catch (err) { /*console.log("DEBUG_ME",getCurrentLine());*/
        return ifNotGetDfErrorHandler(errorHandler)(err) 
    }
}


export const connectToMongoDB = async <T extends Mongoose|nullOrUndefined> (uri: string, options?: ConnectOptions ,  errorHandler ?: t_fct_errorHandler<T> ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return connectDB<Mongoose , T>(mongoose.connect(uri,options),errorHandler);
}

export const connectToSqlite = async <T extends sqlite3.Database|nullOrUndefined> (uri:string , options?:t_options_sqlite , errorHandler ?: t_fct_errorHandler<T> ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    if(options == undefined) options = [sqlite3.OPEN_READONLY]
    if(options.length == 1) options = [options[0],ifNotGetDfErrorHandler(errorHandler)] as t_options_sqlite
    return new sqlite3.Database(uri,...options) as sqlite3.Database|void;
}

const connectToPrismaClient = async <T extends _PrismaClient|nullOrUndefined> (url:string,options?:t_prismaClient_options,  errorHandler ?: t_fct_errorHandler<T> ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    let p_prismaClient = import(toFilePath (url)).then((obj)=>new obj.PrismaClient())
    return connectDB(p_prismaClient,errorHandler);
}



type t_connectionMongoDB = ReturnType<typeof connectToMongoDB>



export interface  IDatabaseMeta {
    url?:string;
    admin ?: string ;
    name?:string;
    id?:string;
}
export interface  IDatabaseMetaDB<T extends t_DatabaseMeta_type=t_DatabaseMeta_type>  extends IDatabaseMeta{
    type :T
}

    

interface _IFDatabaseMeta extends IDatabaseMeta{}
interface _IFDatabaseMetaDB<T extends t_DatabaseMeta_type> extends IDatabaseMetaDB<T>{}
const arr_databaseMeta_type = ["MongoDB","SQLite","Prisma"] as const
export const isDatabaseMeta_type = (x:any): x is t_databaseMeta_type => arr_databaseMeta_type.includes(x as t_databaseMeta_type)
export type t_arr_databaseMeta_type = typeof arr_databaseMeta_type
export type t_databaseMeta_type = t_arr_databaseMeta_type[number]


export type t_DatabaseMeta_type = t_databaseMeta_type
export type t_providerDbToType <T extends string > = string extends T ?t_DatabaseMeta_type : Lowercase<T> extends Lowercase<t_DatabaseMeta_type>? t_DatabaseMeta_type : undefined
export const providerDbToType = <T extends string >(providerDb : T ) : t_providerDbToType<T> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    let res : any = undefined 
    if(providerDb) { /*console.log("DEBUG_ME",getCurrentLine());*/
    
        const minProviderDb = minAllStr(providerDb)
        for(const type of arr_databaseMeta_type){ /*console.log("DEBUG_ME",getCurrentLine());*/
            let min_type = minAllStr(type)
            if(minProviderDb.startsWith(min_type)) {res = type; break}
        }
    }
    return res as t_providerDbToType<T> 

}

export class DatabaseMeta extends  haveSerializerAndEmptyInit<DatabaseMeta> implements  IDatabaseMeta {
    
    name?: string;
    id ?:string;
    url : string;
    admin ?: string ;


    static invalid_id : string = str_undefined_address;
    static getDfNameFromId = (id:string) => `database${id}` ;
    static df_admin : string = "root";

    // A FAIRE , pattern types.ts > df , cst(arg_1= df[str_arg_1])
 
    constructor( id: string=DatabaseMeta.invalid_id , url:string = undefined  , name : string = undefined , admin : string = undefined ,
        toJson :((_database:DatabaseMeta) => IJson) = DatabaseMeta.toJson , fromJson : ((json: IJson) => DatabaseMeta) =  DatabaseMeta.fromJson){
        super( {toJson , fromJson});
        this.id = DatabaseMeta.isInvalidId(id)? name == undefined ? id : getIdFromName(name) : id ;
        this.url = url
        this.name = name || DatabaseMeta.getDfNameFromId(this.id);
        this.admin = admin || DatabaseMeta.df_admin 
    }


    static isInvalidId = _isInvalidId

    static toJson<IConnection = any ,IOptions = any>(_database:DatabaseMeta)
    {
        return { id:_database.id , name:_database.name , url:_database.url  ,admin : _database.admin } as const 
    }
    

    static  fromJson <IConnection = any ,IOptions = any>(json: IJson) : DatabaseMeta {
        return new DatabaseMeta( json.id,json.url,  json.name,json.admin)
    }

    static emptyObject : EmptyInit<DatabaseMeta>  = new EmptyInit<DatabaseMeta>(DatabaseMeta) ;

    static getEmptyInit: <IConnection = any ,IOptions = any>() => DatabaseMeta = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return DatabaseMeta.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => DatabaseMeta = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return DatabaseMeta.getEmptyInit() ;
    }

    static isTypeof: (obj: AHaveSerializer<DatabaseMeta>) => boolean = (obj:AHaveSerializer<DatabaseMeta>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return haveSerializerAndEmptyInit._isTypeof(DatabaseMeta.getEmptyInit(),obj)
    }

    isTypeof = DatabaseMeta.isTypeof

    getName = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return this.name;
    }

    getId = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return this.id;
    }

    getUrl = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return this.url;
    }

    getAdmin = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return this.admin;
    }

    setUrl = (url:string) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        this.url = url
    }

    
}   

export interface _IDatabaseMetaMongoDB extends IDatabaseMeta{
    options : IJson;
}

export interface _IDatabaseMetaDBMongoDB extends _IDatabaseMetaMongoDB,IDatabaseMetaDB<"MongoDB">{}

export interface _IFDatabaseMetaMongoDB extends _IDatabaseMetaMongoDB,_IFDatabaseMeta{
    getFullMongoUrl():ReturnType<typeof getFctFullMongoUrl>;
}

export interface _IFDatabaseMetaDBMongoDB extends _IFDatabaseMetaMongoDB,_IFDatabaseMetaDB<"MongoDB">{}



export interface IClusterMetaMongoDB  extends _IDatabaseMetaMongoDB{}
export interface IFClusterMetaMongoDB  extends _IFDatabaseMetaMongoDB{}

function getFctFullMongoUrl(obj:_IDatabaseMetaMongoDB ){ /*console.log("DEBUG_ME",getCurrentLine());*/
    return _getFctFullMongoUrl(obj.url,obj.options?.suffix||"")
}

export class ClusterMetaMongoDB extends  haveSerializerAndEmptyInit<ClusterMetaMongoDB> implements IClusterMetaMongoDB {
   
    
    name?:string;
    id:string;
    url:string;
    admin?: string ;
    options : IJson;

    static getDfNameFromId = (id:string) => `cluster${id}` ;
   
    constructor(id: string=DatabaseMeta.invalid_id , url:string = undefined  , name : string = undefined ,options : IJson = undefined , admin : string = undefined  ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        super( {toJson:ClusterMetaMongoDB.toJson , fromJson:ClusterMetaMongoDB.fromJson});
        this.id = id 
        this.url = url
        this.admin = admin 
        this.options = options
        this.name = name 
    }

    static cst = (id?:string , url?:string , name ?:string  , options ?:IJson , admin?:string) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        let tmp_obj = new DatabaseMeta(id,url,name,admin);
        tmp_obj.name = name || ClusterMetaMongoDB.getDfNameFromId(tmp_obj.id)
        let obj = ClusterMetaMongoDB.fromJson({...DatabaseMeta.toJson(tmp_obj),options});
        return obj 
    }

    static isInvalidId = _isInvalidId

    getFullMongoUrl = ()=> getFctFullMongoUrl(this)

    static toJson(_clusterMongo:ClusterMetaMongoDB)   
    {
        return {id:_clusterMongo.id , name:_clusterMongo.name , url:_clusterMongo.url , admin:_clusterMongo.admin , options:{..._clusterMongo.options}} as const 
    }

    static  fromJson = (json: IJson) : ClusterMetaMongoDB =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return new ClusterMetaMongoDB(json.id , json.url, json.admin , json.options, json.name)
    }

    static emptyObject : EmptyInit<ClusterMetaMongoDB>  = new EmptyInit<ClusterMetaMongoDB>(ClusterMetaMongoDB) ;

    static getEmptyInit: () => ClusterMetaMongoDB = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return ClusterMetaMongoDB.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => ClusterMetaMongoDB = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return ClusterMetaMongoDB.getEmptyInit() ;
    }
    
    static isTypeof: (obj: AHaveSerializer<ClusterMetaMongoDB>) => boolean = (obj:AHaveSerializer<ClusterMetaMongoDB>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return haveSerializerAndEmptyInit._isTypeof(ClusterMetaMongoDB.getEmptyInit(),obj)
    }

    isTypeof = ClusterMetaMongoDB.isTypeof


}   

type t_options_sqlite = ConstructorParameters<typeof sqlite3.Database> extends [infer _ ,...infer R] ? R : never

export interface IDatabaseMetaSQLite extends IDatabaseMeta {}
export interface IDatabaseMetaDBSQLite extends IDatabaseMetaDB<"SQLite">  {}

export interface IFDatabaseMetaSQLite  extends IDatabaseMetaSQLite{}
export interface IFDatabaseMetaDBSQLite  extends IDatabaseMetaDBSQLite{}




export class DatabaseMetaSQLite extends  DatabaseMeta implements  IFDatabaseMetaDBSQLite {  
    name?: string;
    id :string;
    url : string;
    admin ?: string ;
    type :"SQLite" = "SQLite";

    constructor(obj : DatabaseMeta   ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        super(obj.id,obj.url,obj.name,obj.admin,DatabaseMetaSQLite.toJson,DatabaseMetaSQLite.fromJson); 
    }
    
    static toJson = (obj: DatabaseMetaSQLite) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return {...DatabaseMeta.toJson(obj), type:"SQLite"} as const 
    }

    static fromJson = (json: IDatabaseMetaSQLite) : DatabaseMetaSQLite =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        let obj= DatabaseMeta.fromJson(json) as any
        obj.type = "SQLite"
        return new DatabaseMetaSQLite(obj)
    }



}

export interface IDatabaseMetaMongoDB extends _IDatabaseMetaMongoDB 
{
    readonly cluster : IClusterMetaMongoDB;

}
export interface IDatabaseMetaDBMongoDB extends IDatabaseMetaMongoDB, _IDatabaseMetaDBMongoDB{}

interface IFDatabaseMetaMongoDB extends _IFDatabaseMetaMongoDB,IDatabaseMetaMongoDB{}
interface IFDatabaseMetaDBMongoDB extends _IFDatabaseMetaDBMongoDB,IDatabaseMetaDBMongoDB{}

export class DatabaseMetaMongoDB extends  DatabaseMeta implements  IFDatabaseMetaDBMongoDB {  
    name?: string;
    id :string;
    url : string;
    admin ?: string ;
    options : IJson;
    type :"MongoDB" = "MongoDB";
    readonly cluster : IClusterMetaMongoDB;

    constructor(cluster : IClusterMetaMongoDB , options : IJson, meta_database : DatabaseMeta   ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        let tmp_url = meta_database.url|| createAddress([cluster.url],meta_database.name)
        super(meta_database.id,tmp_url,meta_database.name,meta_database.admin,DatabaseMetaMongoDB.toJson,DatabaseMetaMongoDB.fromJson); 
        this.cluster = cluster
        this.options = options
       
    }

    static toJson = (obj: DatabaseMetaMongoDB)  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return {...DatabaseMeta.toJson(obj), type:"MongoDB" , cluster:deepCloneJson(obj.cluster), options:deepCloneJson(obj.options)} as const 
    }


    static fromJson = (json: IDatabaseMetaMongoDB) : DatabaseMetaMongoDB =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        let obj= DatabaseMeta.fromJson(json) as any
        obj.type = "MongoDB"
        return new DatabaseMetaMongoDB(json.cluster,json.options,obj)
    }

    getFullMongoUrl = ()=> getFctFullMongoUrl(this)


}

export interface IDatabaseMetaPrisma extends IDatabaseMeta{}
export interface IDatabaseMetaDBPrisma extends IDatabaseMetaDB<"Prisma">,IDatabaseMetaPrisma{}
export interface IFDatabaseMetaPrisma extends IDatabaseMeta{}
export interface IFDatabaseMetaDBPrisma extends IDatabaseMetaDBPrisma{}

export class DatabaseMetaPrisma extends  DatabaseMeta implements  IFDatabaseMetaDBPrisma {  
    name: string;
    id :string;
    url : string;
    admin : string ;
    type :"Prisma" = "Prisma";

    constructor(  meta_database : DatabaseMeta   ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        super(meta_database.id,meta_database.url,meta_database.name,meta_database.admin,DatabaseMetaPrisma.toJson,DatabaseMetaPrisma.fromJson); 
    }

    static toJson = (obj: DatabaseMetaPrisma)  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return {...DatabaseMeta.toJson(obj), url:obj.url , type:"Prisma" } as const 
    }

    static fromJson = (json: IDatabaseMetaPrisma) : DatabaseMetaPrisma =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        let obj= DatabaseMeta.fromJson(json) as any
        obj.url = json.url
        obj.type = "Prisma"
        return new DatabaseMetaPrisma(obj)
    }

}

//TODO replace by json with key in "Primsa"| "MongoDB" | "SQLite"
type t_multiDB = "Prisma"
type t_getMultiDBClient<MultiDB extends t_multiDB > =  MultiDB extends "Prisma" ? _PrismaClient : never
type t_getMultiDBOptions<MultiDB extends t_multiDB > =  MultiDB extends "Prisma" ? t_prismaClient_options : never
type t_prismaClient_options = ConstructorParameters<typeof _PrismaClient>


type t_DatabaseMeta< T extends t_DatabaseMeta_type > = 
    T extends "SQLite" ? DatabaseMetaSQLite : 
    T extends "MongoDB" ? DatabaseMetaMongoDB : 
    T extends "Prisma" ? DatabaseMetaPrisma : never

type t_IDatabaseMetaDB< T extends t_DatabaseMeta_type > = 
    T extends "SQLite" ? IDatabaseMetaDBSQLite : 
    T extends "MongoDB" ? IDatabaseMetaDBMongoDB : 
    T extends "Prisma" ? IDatabaseMetaDBPrisma : never

type t_connectionDatabase< T extends t_DatabaseMeta_type ,MultiDB extends t_multiDB > = MultiDB extends undefined ? (T extends "SQLite" ? sqlite3.Database : T extends "MongoDB" ? Mongoose :  T  extends t_DatabaseMeta_type ? _PrismaClient : never) : t_getMultiDBClient<MultiDB>
type t_optionsDatabase < T extends t_DatabaseMeta_type ,MultiDB extends t_multiDB > =  MultiDB extends undefined ? (T extends "SQLite" ? t_options_sqlite : T extends "MongoDB" ? ConnectOptions  : T  extends t_DatabaseMeta_type ? t_prismaClient_options : never) : t_getMultiDBOptions<MultiDB>



abstract class ADatabaseMetaAndConnection<T extends t_DatabaseMeta_type,D extends IDatabaseMetaDB<T> , TC extends t_connectionDatabase<T,MultiDB> , TO extends t_optionsDatabase<T,MultiDB>, MultiDB extends t_multiDB = undefined  >  {
    database_meta : D
    connection : TC|null;
    options : TO

    setConnection = (connection:TC) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        this.connection = connection;
    }

    getConnection = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return this.connection
    }

    abstract connect() : Promise<void | TC>

     getOptions = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return this.options;
     }

     static super_init (obj:ADatabaseMetaAndConnection<t_DatabaseMeta_type,any,any,any>,_database_meta: DatabaseMeta , _options : t_optionsDatabase<t_DatabaseMeta_type,t_multiDB>|t_optionsDatabase<t_DatabaseMeta_type,undefined>) { /*console.log("DEBUG_ME",getCurrentLine());*/
        obj.database_meta = _database_meta
        obj.options = _options
        obj.connection = null
     }

}


class DatabaseMetaAndConnectionMongoDB extends ADatabaseMetaAndConnection<"MongoDB",DatabaseMetaMongoDB,Mongoose,ConnectOptions> {
    async connect() {
        return connectToMongoDB(this.database_meta.url,this.getOptions()) .then((_co :any )=>this.setConnection(_co))
    }

    private constructor() {
        super();
    }

    static cst:(co_options :ConnectOptions,...args:ConstructorParameters<typeof DatabaseMetaMongoDB>)=> DatabaseMetaAndConnectionMongoDB =(co_options :ConnectOptions, ...args:ConstructorParameters<typeof DatabaseMetaMongoDB>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        let database_meta = new DatabaseMetaMongoDB (...args)
        let obj = new DatabaseMetaAndConnectionMongoDB()
        ADatabaseMetaAndConnection.super_init(obj,database_meta,co_options)
        return obj
     }

   
}

class DatabaseMetaAndConnectionSQLite extends ADatabaseMetaAndConnection<"SQLite",DatabaseMetaSQLite,sqlite3.Database,t_options_sqlite> {
    async connect() {
        return connectToSqlite(this.database_meta.url,this.getOptions()).then((_co:any)=>this.setConnection(_co))
    }

    private constructor() {
        super();
    }

    static cst:(co_options :t_options_sqlite,...args:ConstructorParameters<typeof DatabaseMetaSQLite>)=> DatabaseMetaAndConnectionSQLite =(co_options :t_options_sqlite, ...args:ConstructorParameters<typeof DatabaseMetaSQLite>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        let database_meta = new DatabaseMetaSQLite (...args)
        let obj = new DatabaseMetaAndConnectionSQLite()
        ADatabaseMetaAndConnection.super_init(obj,database_meta,co_options)
        return obj
     }

}



type prisma_Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

type t_prismaOptions = any 
type t_prismaLog = any 
type t_prismaExtArgs = any 
class _PrismaClient < T extends t_prismaOptions = t_prismaOptions, U extends t_prismaLog=t_prismaLog, ExtArgs extends t_prismaExtArgs=t_prismaExtArgs> {
    constructor(optionsArg ?: prisma_Subset<T, t_prismaOptions> ) { /*console.log("DEBUG_ME",getCurrentLine());*/
        
    }
}

export interface IDatabaseAndPrismaMeta<T extends t_databaseMeta_type ,D extends IDatabaseMetaDB<T>> {
    prisma_meta : IDatabaseMetaDBPrisma;
    database_meta : D;
    options ?: t_prismaClient_options;
    isDev : boolean 
}

type t_initFunction = (_:t_json_replaceOrStrRegex<-1>)=> ReturnType<typeof writeMergedSchema >

//TODO : shared/m_database.ts -> src/database/scraping-services/utils/prisma.ts -> shared/m_database.ts
export class DatabaseAndPrismaMeta<T extends t_databaseMeta_type , D extends IDatabaseMetaDB<T>> extends ADatabaseMetaAndConnection<T,D,_PrismaClient,t_prismaClient_options,"Prisma"> implements IDatabaseAndPrismaMeta<T,D> {
    prisma_meta : DatabaseMetaPrisma;
    database_meta : D;
    connection : _PrismaClient | null;
    options : t_prismaClient_options;
    isDev : boolean 
    init_function : t_initFunction

    getPrismaMeta = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return this.prisma_meta
    }

    constructor(database_meta : D , prisma_meta : DatabaseMetaPrisma,init_function : t_initFunction , isDev : boolean = false ,  options : t_prismaClient_options = null ) { /*console.log("DEBUG_ME",getCurrentLine());*/
        super();
        this.isDev = isDev
        this.prisma_meta = prisma_meta
        this.database_meta = database_meta
        this.options = options
        this.init_function = init_function
    }

    static cst_cpy <T extends t_databaseMeta_type , D extends IDatabaseMetaDB<T>>(obj:DatabaseAndPrismaMeta<T,D>){ /*console.log("DEBUG_ME",getCurrentLine());*/
        let obj_cpy = new DatabaseAndPrismaMeta(obj.database_meta,obj.prisma_meta,obj.init_function,obj.isDev,obj.options)
        obj_cpy.connection = obj.connection
        return obj_cpy

    }

    
    static toJson = <T extends t_databaseMeta_type , D extends DatabaseMeta & IDatabaseMetaDB<T>>(obj:DatabaseAndPrismaMeta<T,D>)  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return {
            prisma_meta : DatabaseMetaPrisma.toJson(obj.prisma_meta),
            database_meta : obj.database_meta.toJson() as IDatabaseMetaDB<T> ,
            options : deepCloneJson(obj.options),
            isDev : obj.isDev
        } as const 
    }

    static fromJson = <T extends t_databaseMeta_type , D extends  IDatabaseMetaDB<T>>(json:IDatabaseAndPrismaMeta<T,D>) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        
        const fct_fromJson = <_T extends t_databaseMeta_type > (type : _T,json_database_meta:IDatabaseMetaDB<_T>)  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            let r : IDatabaseMetaDB<t_databaseMeta_type> & DatabaseMeta
            switch(type){ 
                case "MongoDB": 
                    r= DatabaseMetaMongoDB.fromJson(json_database_meta as unknown as IDatabaseMetaDBMongoDB) 
                    break 
                case "SQLite": 
                    r= DatabaseMetaSQLite.fromJson(json_database_meta as unknown as IDatabaseMetaDBSQLite)
                    break
                case "Prisma": 
                    r= DatabaseMetaPrisma.fromJson(json_database_meta as unknown as IDatabaseMetaPrisma )
                    break
            }
            return r as IDatabaseMetaDB <_T> & t_DatabaseMeta<_T>
        }

        const database_meta = fct_fromJson<T>(json.database_meta.type,json.database_meta)
        const prisma_meta = DatabaseMetaPrisma.fromJson(json.prisma_meta)
        return new DatabaseAndPrismaMeta<T,typeof database_meta >(database_meta,prisma_meta,undefined,json.isDev,json.options)
    }

    static pushSchema = (pathschema:string) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return execPromisify(`npx prisma db push --schema ${pathschema}`)
    }
    static generateClient = (pathschema:string) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return execPromisify(`npx prisma generate --schema ${pathschema}`)
    }
    static pushSchemaAndGenerateClient = (pathschema:string) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return DatabaseAndPrismaMeta.pushSchema(pathschema).then((_)=>DatabaseAndPrismaMeta.generateClient(pathschema))
    }

    async initConnection ( ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        let pr:Promise<any> = Promise.resolve([])
        //TODO : copy prisma_meta.url to prisma_meta.url_dev during npm build 
        if(this.isDev || !isFolderExist(this.prisma_meta.url)) {
            const json_replace = this.getJsonReplaceValues() 

            const initConnectionIsDev = (obj_schema_paths : IJson)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                return Promise.all(Object.values(obj_schema_paths).map((pathschema)=>DatabaseAndPrismaMeta.generateClient(pathschema)))
            }

            pr = this.init_function(json_replace).then(async (obj_pathschema)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                let arr = Object.values(obj_pathschema.needCreation).map((pathschema)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    let rd =  DatabaseAndPrismaMeta.pushSchemaAndGenerateClient(pathschema)
                    return rd 
                })
                return await Promise.all(arr).then(async (_arr)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    if(!this.isDev && _arr.length == 0) return initConnectionIsDev(obj_pathschema.all)
                })    
            })
        }
   
        return pr

    }



    async connect() {
        await this.initConnection()
        return connectToPrismaClient(this.prisma_meta.url,this.getOptions()).then((_co:any)=>this.setConnection(_co))
    }

    
    getJsonReplaceValues() : t_json_replaceOrStrRegex<-1> {
        return {
            generator :{
                client: {
                    "output": getDirectoryPathFromFilePath(this.prisma_meta.url)
                },
            },
            datasource:{
                db:{
                    "url" :this.database_meta.url ,
                    "provider" : minAllStr(this.database_meta.type)
                }
            }
        }
    }

}




export type t_jsonDatabaseMeta = IDatabaseMeta
export type t_jsonClusterMeta = IClusterMetaMongoDB
//export type t_jsonCollection = IDatabaseMetaMongoDB

export type t_databaseMetaAndCo = DatabaseMetaAndConnectionMongoDB | DatabaseMetaAndConnectionSQLite
export type t_clusterMeta = ClusterMetaMongoDB
//export type t_collection = DatabaseMongo












export enum t_enum_databaseType {
  remoteDatabase ="remoteDatabase", 
  localDatabase="localDatabase" ,
}

export type LocalAndRemoteTypeDatabase< T extends t_enum_databaseType>  = T extends t_enum_databaseType.remoteDatabase ? "MongoDB" : "SQLite"
export type t_remote_typeDatabase = LocalAndRemoteTypeDatabase<t_enum_databaseType.remoteDatabase>
export type t_local_typeDatabase = LocalAndRemoteTypeDatabase<t_enum_databaseType.localDatabase>

export type DatabaseType< _T extends t_enum_databaseType>  =  
LocalAndRemoteTypeDatabase<_T> extends infer T ? T extends t_DatabaseMeta_type ? t_DatabaseMeta<T> extends infer DM ? DM extends IDatabaseMetaDB<T> &   DatabaseMeta ?DatabaseAndPrismaMeta<T,DM> : never :never : never :never 

export type IDatabaseType< _T extends t_enum_databaseType>  = 
LocalAndRemoteTypeDatabase<_T> extends infer T ? T extends t_DatabaseMeta_type ? t_DatabaseMeta<T> extends infer DM? DM  extends IDatabaseMetaDB<T> ?IDatabaseAndPrismaMeta<T,DM> : never :never : never :never 

export type t_DatabaseLocalAndRemote<T extends string>  = {
  [k in t_enum_databaseType] : DatabaseType<k>
}  & {serviceName : T}

export type t_IDatabaseLocalAndRemote<T extends string> = {
    [k in t_enum_databaseType] : IDatabaseType<k>
  } & {serviceName : T}

export class DatabaseLocalAndRemote<T extends string=string> implements t_DatabaseLocalAndRemote<T> {

    serviceName : T
    localDatabase: DatabaseType<t_enum_databaseType.localDatabase>
    remoteDatabase: DatabaseType<t_enum_databaseType.remoteDatabase>

    getRemoteDatabase ()  {
        return this[t_enum_databaseType.remoteDatabase]
    }

    getLocalDatabase () {
        return  this[t_enum_databaseType.localDatabase]
    }

    constructor (serviceName:T, local : t_DatabaseLocalAndRemote<T>[t_enum_databaseType.localDatabase] , remote : t_DatabaseLocalAndRemote<T>[t_enum_databaseType.remoteDatabase]) { /*console.log("DEBUG_ME",getCurrentLine());*/
        
        this.serviceName = serviceName
        this[t_enum_databaseType.localDatabase] = local,
        this[t_enum_databaseType.remoteDatabase] = remote
        
    }

    toJson (){
        return { 
            [t_enum_databaseType.localDatabase] : DatabaseAndPrismaMeta.toJson(this.getLocalDatabase()),
            [t_enum_databaseType.remoteDatabase] : DatabaseAndPrismaMeta.toJson(this.getRemoteDatabase())
        }
    }

    static fromJson  <T extends string=string>(dbLocalAndRemote : t_IDatabaseLocalAndRemote<T>)  { /*console.log("DEBUG_ME",getCurrentLine());*/
        return new DatabaseLocalAndRemote<T>(dbLocalAndRemote.serviceName,DatabaseAndPrismaMeta.fromJson(dbLocalAndRemote[t_enum_databaseType.localDatabase]),DatabaseAndPrismaMeta.fromJson(dbLocalAndRemote[t_enum_databaseType.remoteDatabase]))
    }

    static fromRemoteLocalAndPrismasJson <T extends string , TR extends t_remote_typeDatabase , DR extends IDatabaseMetaDB<TR>,TL extends t_local_typeDatabase ,DL extends IDatabaseMetaDB<TL>>(
        serviceName : T , remote : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<TR,DR>,null,"prisma_meta">,local : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<TL,DL>,null,"prisma_meta">,prisma : IDatabaseMetaDBPrisma, isDev : boolean = false) {

            const prisma_remote = {...deepCloneJson(prisma) , url:getServicePathClientPrisma(serviceName,false,isDev)}
            const prisma_local = {...deepCloneJson(prisma) , url:getServicePathClientPrisma(serviceName,true,isDev)}

            const remote_database = DatabaseAndPrismaMeta.fromJson<TR,DR>({
                ...remote,
                prisma_meta:prisma_remote
            }) 

            const local_database = DatabaseAndPrismaMeta.fromJson<TL,DL>({
                ...local,
                prisma_meta:prisma_local
            })

            return new DatabaseLocalAndRemote<T>(serviceName,local_database,remote_database)

            
        
    }
  
    async connect(){
        await Promise.resolve()
        await Promise.all([/*this.getLocalDatabase().connect(),*/this.getRemoteDatabase().connect()])
    }

    setPrismaUrl = (url_remote:string,url_local : string ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        this.getLocalDatabase().prisma_meta.setUrl(url_local)
        this.getRemoteDatabase().prisma_meta.setUrl(url_remote)
    }
}
