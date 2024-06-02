import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("database","forinov_database")
const debug_forinov_database : Debugger = debug(name_module)


import { _getForinovDatabaseName, _getMongoDBSuffix } from "@/config/envVar.js";
import { IDatabaseMetaMongoDB,DatabaseMetaMongoDB,IDatabaseMetaSQLite ,DatabaseMetaSQLite, IDatabaseMetaPrisma, DatabaseMetaPrisma, DatabaseAndPrismaMeta, IDatabaseMetaDBMongoDB, DatabaseLocalAndRemote, IDatabaseMetaDBPrisma, IDatabaseMetaDBSQLite, IDatabaseAndPrismaMeta } from "@shared/m_database.js";
import { getJsonClusterKOB } from "@/config/database.js";
import { serviceName_forinov, t_serviceName_forinov } from '@/controller/scraping-services/Services/Config/forinov/config.js';
import { getServicePathClientPrisma } from '../../utils/prisma.js';
import { getPathServiceSqliteDatabase } from '../../utils/sqlite.js';
import { deepCloneJson } from '@shared/m_json.js';
import { fp_writeMergedServiceSchema } from '../../utils/prismaService.js';
import { OptionalKeys, makeOptional, makeRequired, reshapeObject, reshapeObjectIgnoreOpt } from '@shared/type.js';


const json_forinovRemoteDatabase  : IDatabaseMetaDBMongoDB =  {
    name: _getForinovDatabaseName(),
    options : {suffix:_getMongoDBSuffix()},
    cluster: getJsonClusterKOB(),
    type : "MongoDB"
}

const json_forinovLocalDatabase  : IDatabaseMetaDBSQLite =  {
    name: _getForinovDatabaseName(),
    url : getPathServiceSqliteDatabase(serviceName_forinov),
    type : "SQLite"
}

const df_isDev = false

const json_forinovPrisma : IDatabaseMetaDBPrisma = {  
    name: _getForinovDatabaseName(),
    url : getServicePathClientPrisma(serviceName_forinov,false,df_isDev),
    type : "Prisma"
}


const forinovRemotePrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"MongoDB",IDatabaseMetaDBMongoDB>,null,"prisma_meta"> ={
    database_meta:json_forinovRemoteDatabase,
    isDev : df_isDev
}

const forinovLocalPrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"SQLite",IDatabaseMetaDBSQLite>,null,"prisma_meta"> = {
    database_meta:json_forinovLocalDatabase,
    isDev : df_isDev
}

const forinovLocalAndRemoteDatabase = DatabaseLocalAndRemote.fromRemoteLocalAndPrismasJson(serviceName_forinov,forinovRemotePrismaDatabase,forinovLocalPrismaDatabase,json_forinovPrisma,df_isDev)
forinovLocalAndRemoteDatabase.remoteDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_forinov,false>(forinovLocalAndRemoteDatabase.serviceName,false,forinovLocalAndRemoteDatabase.remoteDatabase.isDev)
forinovLocalAndRemoteDatabase.localDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_forinov,true>(forinovLocalAndRemoteDatabase.serviceName,true,forinovLocalAndRemoteDatabase.localDatabase.isDev)

export default forinovLocalAndRemoteDatabase