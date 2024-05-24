import getCurrentLine from "get-current-line"
import { CodeGenerator } from "@/generator/utils/types.js"
import { IVoid } from "@shared/m_object.js"
import { majAllStr } from "@shared/m_string.js"

export type IBasePrismaSchema<SN extends string , R extends string > = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

class BasePrismaSchema<SN extends string , R extends string > implements IBasePrismaSchema<SN,R>{
    _serviceName :SN
    _routeName :R 

    constructor(_serviceName:SN,_routeName:R){ /*console.log("DEBUG_ME",getCurrentLine());*/
        this._serviceName = _serviceName
        this._routeName = _routeName
    }
    
    getFile(){
        return `generator client {
            provider = "prisma-client-js"
            output = env("${majAllStr(this._serviceName)}_GEN_CLIENT_OUTPUT")
        }
        
        datasource db {
            provider = env("${majAllStr(this._serviceName)}_DAT_DB_PROVIDER")
            url = env("${majAllStr(this._serviceName)}_DAT_DB_URL")
        }` as const 
    }
}