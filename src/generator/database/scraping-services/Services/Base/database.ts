import getCurrentLine from "get-current-line"
import { CodeGenerator } from "@/generator/utils/types.js"
import { t_jsonClusterMeta, t_DatabaseMeta_type } from "@shared/m_database.js"
import { IVoid } from "@shared/m_object.js"
import { majFirstChar } from "@shared/m_string.js"

export type IBaseDatabase<SN extends string , R extends string > = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

class BaseDatabase<SN extends string , R extends string > implements IBaseDatabase<SN,R>{
    _serviceName :SN
    _routeName :R 

    _remoteDatabase : {type:t_DatabaseMeta_type ,name:string, cluster: t_jsonClusterMeta}
    _localDatabase :  {type:t_DatabaseMeta_type , name:string}

    constructor(_serviceName:SN,_routeName:R,remoteDatabase : {type:t_DatabaseMeta_type , name:string, cluster: t_jsonClusterMeta},localDatabase : {type:t_DatabaseMeta_type , name:string}){ 
        this._serviceName = _serviceName
        this._routeName = _routeName

        this._remoteDatabase = remoteDatabase
        this._localDatabase = localDatabase
    }
    
    getFile(){
        return `const json_${this._serviceName}RemoteDatabase  : IDatabaseMetaDB${this._remoteDatabase.type} =  {
            name: ${this._remoteDatabase.name},
            options : {suffix:_get${this._remoteDatabase.type}Suffix()},
            cluster: ${JSON.stringify(this._remoteDatabase.cluster)},
            type : "${this._remoteDatabase.type}"
        }

        const json_${this._serviceName}LocalDatabase  : IDatabaseMetaDB${this._localDatabase.type} =  {
            name: ${this._localDatabase.name},
            url : getPathService${this._localDatabase.type}Database(serviceName_${this._serviceName}),
            type : "${this._localDatabase.type}"
        }

        const df_isDev = false

        const json_${this._serviceName}Prisma : IDatabaseMetaDBPrisma = {  
            name: _get${majFirstChar(this._serviceName)}DatabaseName(),
            url : getServicePathClientPrisma(serviceName_${this._serviceName},false,df_isDev),
            type : "Prisma"
        }


        const ${this._serviceName}RemotePrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"${this._remoteDatabase.type}",IDatabaseMetaDB${this._remoteDatabase.type}>,null,"prisma_meta"> ={
            database_meta:json_${this._serviceName}RemoteDatabase,
            isDev : df_isDev
        }

        const ${this._serviceName}LocalPrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"${this._localDatabase.type}",IDatabaseMetaDB${this._localDatabase.type}>,null,"prisma_meta"> = {
            database_meta:json_${this._serviceName}LocalDatabase,
            isDev : df_isDev
        }

        const ${this._serviceName}LocalAndRemoteDatabase = DatabaseLocalAndRemote.fromRemoteLocalAndPrismasJson(serviceName_${this._serviceName},${this._serviceName}RemotePrismaDatabase,${this._serviceName}LocalPrismaDatabase,json_${this._serviceName}Prisma,df_isDev)
        ${this._serviceName}LocalAndRemoteDatabase.remoteDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_${this._serviceName},false>(${this._serviceName}LocalAndRemoteDatabase.serviceName,false,${this._serviceName}LocalAndRemoteDatabase.remoteDatabase.isDev)
        ${this._serviceName}LocalAndRemoteDatabase.localDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_${this._serviceName},true>(${this._serviceName}LocalAndRemoteDatabase.serviceName,true,${this._serviceName}LocalAndRemoteDatabase.localDatabase.isDev)

        export default ${this._serviceName}LocalAndRemoteDatabase` as const
    }
}