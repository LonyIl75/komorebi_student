import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("database","pourdebon_database")
const debug_pourdebon_database : Debugger = debug(name_module)


import { _getPourdebon22DatabaseName, _getMongoSuffix } from "@/config/envVar.js";
import { IDatabaseMetaMongo,DatabaseMetaMongo,IDatabaseMetaSQLite ,DatabaseMetaSQLite, IDatabaseMetaPrisma, DatabaseMetaPrisma, DatabaseAndPrismaMeta, IDatabaseMetaDBMongo, DatabaseLocalAndRemote, IDatabaseMetaDBPrisma, IDatabaseMetaDBSQLite, IDatabaseAndPrismaMeta } from "@shared/m_database.js";
import { getJsonClusterKOB } from "@/config/database.js";
import { serviceName_pourdebon, t_serviceName_pourdebon } from '@/controller/scraping-services/Services/Config/pourdebon/config.js';
import { getServicePathClientPrisma } from '../../utils/prisma.js';
import { getPathServiceSqliteDatabase } from '../../utils/sqlite.js';
import { deepCloneJson } from '@shared/m_json.js';
import { fp_writeMergedServiceSchema } from '../../utils/prismaService.js';
import { OptionalKeys, makeOptional, makeRequired, reshapeObject, reshapeObjectIgnoreOpt } from '@shared/type.js';


const json_pourdebonRemoteDatabase  : IDatabaseMetaDBMongo =  {
    name: _getPourdebon22DatabaseName(),
    options : {suffix:_getMongoSuffix()},
    cluster: getJsonClusterKOB(),
    type : "MongoDB"
}

const json_pourdebonLocalDatabase  : IDatabaseMetaDBSQLite =  {
    name: _getPourdebon22DatabaseName(),
    url : getPathServiceSqliteDatabase(serviceName_pourdebon),
    type : "SQLite"
}

const df_isDev = false

const json_pourdebonPrisma : IDatabaseMetaDBPrisma = {  
    name: _getPourdebon22DatabaseName(),
    url : getServicePathClientPrisma(serviceName_pourdebon,false,df_isDev),
    type : "Prisma"
}


const pourdebonRemotePrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"MongoDB",IDatabaseMetaDBMongo>,null,"prisma_meta"> ={
    database_meta:json_pourdebonRemoteDatabase,
    isDev : df_isDev
}

const pourdebonLocalPrismaDatabase : reshapeObjectIgnoreOpt<IDatabaseAndPrismaMeta<"SQLite",IDatabaseMetaDBSQLite>,null,"prisma_meta"> = {
    database_meta:json_pourdebonLocalDatabase,
    isDev : df_isDev
}

const pourdebonLocalAndRemoteDatabase = DatabaseLocalAndRemote.fromRemoteLocalAndPrismasJson(serviceName_pourdebon,pourdebonRemotePrismaDatabase,pourdebonLocalPrismaDatabase,json_pourdebonPrisma,df_isDev)
pourdebonLocalAndRemoteDatabase.remoteDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_pourdebon,false>(pourdebonLocalAndRemoteDatabase.serviceName,false,pourdebonLocalAndRemoteDatabase.remoteDatabase.isDev)
pourdebonLocalAndRemoteDatabase.localDatabase.init_function = fp_writeMergedServiceSchema<t_serviceName_pourdebon,true>(pourdebonLocalAndRemoteDatabase.serviceName,true,pourdebonLocalAndRemoteDatabase.localDatabase.isDev)

export default pourdebonLocalAndRemoteDatabase