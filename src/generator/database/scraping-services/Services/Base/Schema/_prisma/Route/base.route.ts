import getCurrentLine from "get-current-line"
import { CodeGenerator } from "@/generator/utils/types.js"
import { IVoid } from "@shared/m_object.js"
import { majFirstChar } from "@shared/m_string.js"

export type IBaseRoutePrismaSchema<SN extends string , R extends string > = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

class BaseRoutePrismaSchema<SN extends string , R extends string > implements IBaseRoutePrismaSchema<SN,R>{
    _serviceName :SN
    _routeName :R 

    constructor(_serviceName:SN,_routeName:R){ 
        this._serviceName = _serviceName
        this._routeName = _routeName
    }
    
    getFile(){
        return `generator client {
            provider = "prisma-client-js"
        }
        
        datasource db {
            provider = "mongodb"
            url      = env("DATABASE_URL")
        }
        
        
        model ${majFirstChar(this._routeName)} {
            id String  @id @default(auto()) @map("_id") @db.ObjectId
            date Int
            ${majFirstChar(this._routeName)}Type String @unique
        }` as const 
    }
}