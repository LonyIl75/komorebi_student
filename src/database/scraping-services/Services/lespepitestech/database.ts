import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("database","lespepitestech_database")
const debug_lespepitestech_database : Debugger = debug(name_module)


import { _getLespepitestechDatabaseName, _getMongoDBSuffix } from "@/config/envVar.js";
import { IDatabaseMetaMongoDB,DatabaseMetaMongoDB,IDatabaseMetaSQLite ,DatabaseMetaSQLite, IDatabaseMetaPrisma, DatabaseMetaPrisma, DatabaseAndPrismaMeta, IDatabaseMetaDBMongoDB, DatabaseLocalAndRemote, IDatabaseMetaDBPrisma, IDatabaseMetaDBSQLite, IDatabaseAndPrismaMeta } from "@shared/m_database.js";
import { getJsonClusterKOB } from "@/config/database.js";
import { serviceName_lespepitestech, t_serviceName_lespepitestech } from '@/controller/scraping-services/Services/Config/lespepitestech/config.js';
import { getServicePathClientPrisma } from '../../utils/prisma.js';
import { getPathServiceSqliteDatabase } from '../../utils/sqlite.js';
import { deepCloneJson } from '@shared/m_json.js';
import { fp_writeMergedServiceSchema } from '../../utils/prismaService.js';
import { OptionalKeys, makeOptional, makeRequired, reshapeObject, reshapeObjectIgnoreOpt } from '@shared/type.js';


const json_lespepitestechRemoteDatabase  : IDatabaseMetaDBMongoDB =  {
    name: _getLespepitestechDatabaseName(),
    options : {suffix:_getMongoDBSuffix()},
    cluster: getJsonClusterKOB(),
    type : "MongoDB"
}

const json_lespepitestechLocalDatabase  : IDatabaseMetaDBSQLite =  {
    name: _getLespepitestechDatabaseName(),
    url : getPathServiceSqliteDatabase(serviceName_lespepitestech),
    type : "SQLite"
}

const df_isDev = false

const json_lespepitestechPrisma : IDatabaseMetaDBPrisma = {  
    name: _getLespepitestechDatabaseName(),
    url : getServicePathClientPrisma(serviceName_lespepitestech,false,df_isDev),
    type : "Prisma"
}


const lespepitestechRemotePrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"MongoDB",IDatabaseMetaDBMongoDB>,null,"prisma_meta"> ={
    database_meta:json_lespepitestechRemoteDatabase,
    isDev : df_isDev
}

const lespepitestechLocalPrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"SQLite",IDatabaseMetaDBSQLite>,null,"prisma_meta"> = {
    database_meta:json_lespepitestechLocalDatabase,
    isDev : df_isDev
}

const lespepitestechLocalAndRemoteDatabase = DatabaseLocalAndRemote.fromRemoteLocalAndPrismasJson(serviceName_lespepitestech,lespepitestechRemotePrismaDatabase,lespepitestechLocalPrismaDatabase,json_lespepitestechPrisma,df_isDev)
lespepitestechLocalAndRemoteDatabase.remoteDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_lespepitestech,false>(lespepitestechLocalAndRemoteDatabase.serviceName,false,lespepitestechLocalAndRemoteDatabase.remoteDatabase.isDev)
lespepitestechLocalAndRemoteDatabase.localDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_lespepitestech,true>(lespepitestechLocalAndRemoteDatabase.serviceName,true,lespepitestechLocalAndRemoteDatabase.localDatabase.isDev)

export default lespepitestechLocalAndRemoteDatabase