import getCurrentLine from "get-current-line"
import { CodeGenerator } from "@/generator/utils/types.js"
import { IVoid } from "@shared/m_object.js"

export type IUtilMainData<SN extends string , R extends string > = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

class UtilMainData<SN extends string , R extends string > implements IUtilMainData<SN,R>{
    _serviceName :SN
    _routeName :R 

    constructor(_serviceName:SN,_routeName:R){ /*console.log("DEBUG_ME",getCurrentLine());*/
        this._serviceName = _serviceName
        this._routeName = _routeName
    }
    
    getFile(){
        return `export const ${this._serviceName}_imgImage_selectors =[\`img[class*="image"]\`]` as const 
    }
}