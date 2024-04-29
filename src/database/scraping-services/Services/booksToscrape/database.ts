import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("database","booksToscrape_database")
const debug_booksToscrape_database : Debugger = debug(name_module)


import { _getBooksToscrapeDatabaseName, _getMongoSuffix } from "@/config/envVar.js";
import { IDatabaseMetaMongo,DatabaseMetaMongo,IDatabaseMetaSQLite ,DatabaseMetaSQLite, IDatabaseMetaPrisma, DatabaseMetaPrisma, DatabaseAndPrismaMeta, IDatabaseMetaDBMongo, DatabaseLocalAndRemote, IDatabaseMetaDBPrisma, IDatabaseMetaDBSQLite, IDatabaseAndPrismaMeta } from "@shared/m_database.js";
import { getJsonClusterKOB } from "@/config/database.js";
import { serviceName_booksToscrape, t_serviceName_booksToscrape } from '@/controller/scraping-services/Services/Config/booksToscrape/config.js';
import { getServicePathClientPrisma } from '../../utils/prisma.js';
import { getPathServiceSqliteDatabase } from '../../utils/sqlite.js';
import { deepCloneJson } from '@shared/m_json.js';
import { fp_writeMergedServiceSchema } from '../../utils/prismaService.js';
import { OptionalKeys, makeOptional, makeRequired, reshapeObject, reshapeObjectIgnoreOpt } from '@shared/type.js';


const json_booksToscrapeRemoteDatabase  : IDatabaseMetaDBMongo =  {
    name: _getBooksToscrapeDatabaseName(),
    options : {suffix:_getMongoSuffix()},
    cluster: getJsonClusterKOB(),
    type : "MongoDB"
}

const json_booksToscrapeLocalDatabase  : IDatabaseMetaDBSQLite =  {
    name: _getBooksToscrapeDatabaseName(),
    url : getPathServiceSqliteDatabase(serviceName_booksToscrape),
    type : "SQLite"
}

const df_isDev = false

const json_booksToscrapePrisma : IDatabaseMetaDBPrisma = {  
    name: _getBooksToscrapeDatabaseName(),
    url : getServicePathClientPrisma(serviceName_booksToscrape,false,df_isDev),
    type : "Prisma"
}


const booksToscrapeRemotePrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"MongoDB",IDatabaseMetaDBMongo>,null,"prisma_meta"> ={
    database_meta:json_booksToscrapeRemoteDatabase,
    isDev : df_isDev
}

const booksToscrapeLocalPrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"SQLite",IDatabaseMetaDBSQLite>,null,"prisma_meta"> = {
    database_meta:json_booksToscrapeLocalDatabase,
    isDev : df_isDev
}

const booksToscrapeLocalAndRemoteDatabase = DatabaseLocalAndRemote.fromRemoteLocalAndPrismasJson(serviceName_booksToscrape,booksToscrapeRemotePrismaDatabase,booksToscrapeLocalPrismaDatabase,json_booksToscrapePrisma,df_isDev)
booksToscrapeLocalAndRemoteDatabase.remoteDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_booksToscrape,false>(booksToscrapeLocalAndRemoteDatabase.serviceName,false,booksToscrapeLocalAndRemoteDatabase.remoteDatabase.isDev)
booksToscrapeLocalAndRemoteDatabase.localDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_booksToscrape,true>(booksToscrapeLocalAndRemoteDatabase.serviceName,true,booksToscrapeLocalAndRemoteDatabase.localDatabase.isDev)

export default booksToscrapeLocalAndRemoteDatabase