import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("database","entreprise__database")
const debug_entreprise__database : Debugger = debug(name_module)


import { _getEntreprise_DatabaseName, _getMongoDBSuffix } from "@/config/envVar.js";
import { IDatabaseMetaMongoDB,DatabaseMetaMongoDB,IDatabaseMetaSQLite ,DatabaseMetaSQLite, IDatabaseMetaPrisma, DatabaseMetaPrisma, DatabaseAndPrismaMeta, IDatabaseMetaDBMongoDB, DatabaseLocalAndRemote, IDatabaseMetaDBPrisma, IDatabaseMetaDBSQLite, IDatabaseAndPrismaMeta } from "@shared/m_database.js";
import { getJsonClusterKOB } from "@/config/database.js";
import { serviceName_entreprise_, t_serviceName_entreprise_ } from '@/controller/scraping-services/Services/Config/entreprise_/config.js';
import { getServicePathClientPrisma } from '../../utils/prisma.js';
import { getPathServiceSqliteDatabase } from '../../utils/sqlite.js';
import { deepCloneJson } from '@shared/m_json.js';
import { fp_writeMergedServiceSchema } from '../../utils/prismaService.js';
import { OptionalKeys, makeOptional, makeRequired, reshapeObject, reshapeObjectIgnoreOpt } from '@shared/type.js';


const json_entreprise_RemoteDatabase  : IDatabaseMetaDBMongoDB =  {
    name: _getEntreprise_DatabaseName(),
    options : {suffix:_getMongoDBSuffix()},
    cluster: getJsonClusterKOB(),
    type : "MongoDB"
}

const json_entreprise_LocalDatabase  : IDatabaseMetaDBSQLite =  {
    name: _getEntreprise_DatabaseName(),
    url : getPathServiceSqliteDatabase(serviceName_entreprise_),
    type : "SQLite"
}

const df_isDev = false

const json_entreprise_Prisma : IDatabaseMetaDBPrisma = {  
    name: _getEntreprise_DatabaseName(),
    url : getServicePathClientPrisma(serviceName_entreprise_,false,df_isDev),
    type : "Prisma"
}


const entreprise_RemotePrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"MongoDB",IDatabaseMetaDBMongoDB>,null,"prisma_meta"> ={
    database_meta:json_entreprise_RemoteDatabase,
    isDev : df_isDev
}

const entreprise_LocalPrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"SQLite",IDatabaseMetaDBSQLite>,null,"prisma_meta"> = {
    database_meta:json_entreprise_LocalDatabase,
    isDev : df_isDev
}

const entreprise_LocalAndRemoteDatabase = DatabaseLocalAndRemote.fromRemoteLocalAndPrismasJson(serviceName_entreprise_,entreprise_RemotePrismaDatabase,entreprise_LocalPrismaDatabase,json_entreprise_Prisma,df_isDev)
entreprise_LocalAndRemoteDatabase.remoteDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_entreprise_,false>(entreprise_LocalAndRemoteDatabase.serviceName,false,entreprise_LocalAndRemoteDatabase.remoteDatabase.isDev)
entreprise_LocalAndRemoteDatabase.localDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_entreprise_,true>(entreprise_LocalAndRemoteDatabase.serviceName,true,entreprise_LocalAndRemoteDatabase.localDatabase.isDev)

export default entreprise_LocalAndRemoteDatabase