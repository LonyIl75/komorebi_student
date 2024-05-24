
import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule } from '@/../shared/str_debug.js';

const name_module :string  =  getNameModule("database","prismaService_sqlite_utils")
const debug_prismaService_sqlite_utils : Debugger = debug(name_module)


import { getPathServiceLocalDb } from "@/config/pathFolder/srcPath.js"
import { concatExtension, joinFilePath, toPrefixFile } from "@shared/m_file.js"
import { getLocalName } from '@shared/routePath.js';

const extensionSqlite =  "sqlite" as const
export const concatExtensionSqlite = <T extends string  > (str:T) => concatExtension(str,extensionSqlite)

const extensionDb =  "db" as const
export const concatExtensionDb = <T extends string  > (str:T) => concatExtension(str,extensionDb)


export const getPathServiceSqliteDatabase = <T extends string> (service_name:T,isLocal:boolean = true ) =>{ 
    return toPrefixFile(joinFilePath(getPathServiceLocalDb(isLocal? getLocalName(service_name):service_name),concatExtensionDb<T>(service_name)))
}