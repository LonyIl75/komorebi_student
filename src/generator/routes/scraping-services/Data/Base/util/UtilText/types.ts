import { CodeGenerator } from "@/generator/utils/types.js"
import { IVoid } from "@shared/m_object.js"
import { majFirstChar } from "@shared/m_string.js"

export type IUtilMainData<SN extends string , R extends string > = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

class UtilMainData<SN extends string , R extends string > implements IUtilMainData<SN,R>{
    _serviceName :SN
    _routeName :R 

    constructor(_serviceName:SN,_routeName:R){
        this._serviceName = _serviceName
        this._routeName = _routeName
    }
    
    getFile(){
        return `export const ${this._serviceName}_spanText_selectors =[\`span[class*="text"]\`]` as const 
    }
}