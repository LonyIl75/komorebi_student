import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("database","societeTech_database")
const debug_societeTech_database : Debugger = debug(name_module)


import { _getSocieteTechDatabaseName, _getMongoDBSuffix } from "@/config/envVar.js";
import { IDatabaseMetaMongoDB,DatabaseMetaMongoDB,IDatabaseMetaSQLite ,DatabaseMetaSQLite, IDatabaseMetaPrisma, DatabaseMetaPrisma, DatabaseAndPrismaMeta, IDatabaseMetaDBMongoDB, DatabaseLocalAndRemote, IDatabaseMetaDBPrisma, IDatabaseMetaDBSQLite, IDatabaseAndPrismaMeta } from "@shared/m_database.js";
import { getJsonClusterKOB } from "@/config/database.js";
import { serviceName_societeTech, t_serviceName_societeTech } from '@/controller/scraping-services/Services/Config/societeTech/config.js';
import { getServicePathClientPrisma } from '../../utils/prisma.js';
import { getPathServiceSqliteDatabase } from '../../utils/sqlite.js';
import { deepCloneJson } from '@shared/m_json.js';
import { fp_writeMergedServiceSchema } from '../../utils/prismaService.js';
import { OptionalKeys, makeOptional, makeRequired, reshapeObject, reshapeObjectIgnoreOpt } from '@shared/type.js';


const json_societeTechRemoteDatabase  : IDatabaseMetaDBMongoDB =  {
    name: _getSocieteTechDatabaseName(),
    options : {suffix:_getMongoDBSuffix()},
    cluster: getJsonClusterKOB(),
    type : "MongoDB"
}

const json_societeTechLocalDatabase  : IDatabaseMetaDBSQLite =  {
    name: _getSocieteTechDatabaseName(),
    url : getPathServiceSqliteDatabase(serviceName_societeTech),
    type : "SQLite"
}

const df_isDev = false

const json_societeTechPrisma : IDatabaseMetaDBPrisma = {  
    name: _getSocieteTechDatabaseName(),
    url : getServicePathClientPrisma(serviceName_societeTech,false,df_isDev),
    type : "Prisma"
}


const societeTechRemotePrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"MongoDB",IDatabaseMetaDBMongoDB>,null,"prisma_meta"> ={
    database_meta:json_societeTechRemoteDatabase,
    isDev : df_isDev
}

const societeTechLocalPrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"SQLite",IDatabaseMetaDBSQLite>,null,"prisma_meta"> = {
    database_meta:json_societeTechLocalDatabase,
    isDev : df_isDev
}

const societeTechLocalAndRemoteDatabase = DatabaseLocalAndRemote.fromRemoteLocalAndPrismasJson(serviceName_societeTech,societeTechRemotePrismaDatabase,societeTechLocalPrismaDatabase,json_societeTechPrisma,df_isDev)
societeTechLocalAndRemoteDatabase.remoteDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_societeTech,false>(societeTechLocalAndRemoteDatabase.serviceName,false,societeTechLocalAndRemoteDatabase.remoteDatabase.isDev)
societeTechLocalAndRemoteDatabase.localDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_societeTech,true>(societeTechLocalAndRemoteDatabase.serviceName,true,societeTechLocalAndRemoteDatabase.localDatabase.isDev)

export default societeTechLocalAndRemoteDatabase