import { CodeGenerator } from "@/generator/utils/types.js"
import { IVoid } from "@shared/m_object.js"

export type IPipelineService<SN extends string> = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

class PipelineService<SN extends string> implements IPipelineService<SN>{
    _serviceName :SN
    
    getFile(){
        return `export const json_${this._serviceName}ConfigPipeline = {
        [idRoutes_${this._serviceName}[0]]:{...df_config_routes_pipeline} ,
        [idRoutes_${this._serviceName}[1]]:{...df_config_routes_pipeline}

        } as const` as const
    }

}
