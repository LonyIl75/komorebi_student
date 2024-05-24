import getCurrentLine from "get-current-line"
import { CodeGenerator } from "@/generator/utils/types.js"
import { IVoid } from "@shared/m_object.js"
import { majFirstChar } from "@shared/m_string.js"

export type IPipelineRouteService<SN extends string , R extends string , P extends string ="withNextPage"  >  = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

class PipelineRouteService<SN extends string , R extends string , P extends string ="withNextPage"  >  implements IPipelineRouteService<SN,R,P>{
    _routeName :R 
    _serviceName :SN
    _pipelineType : P

    constructor(routeName :R , serviceName :SN,pipelineType : P){ 
        this._routeName = routeName;
        this._serviceName = serviceName;
        this._pipelineType = pipelineType;
    }
    
    getFile(){
        return `const arr_category = [...df_pipeline_${this._pipelineType}_categories] as const 
        type t_category = typeof arr_category[number]

        const arr_fct_name = [...HA_${majFirstChar(this._serviceName)}.namesOfPipelineFunction()] as const
        type t_fct_name = typeof arr_fct_name[number]


        const _lib_pipeline = createJsonFromEntries(arr_fct_name.map((name)=>[name,HA_${majFirstChar(this._serviceName)}[name].bind(HA_${majFirstChar(this._serviceName)})])) as  t_getLibPipeline<typeof HA_${majFirstChar(this._serviceName)},typeof arr_fct_name>
        type _t_lib_pipeline = typeof _lib_pipeline

        const map_pipeline = {
            ...df_map_pipeline_${this._pipelineType}
        } as const
        type t_map_pipeline = typeof map_pipeline

        const _rules : t_pipeline_rules_base<t_category> = {} as any 

        const rules = {...PipelineBuilder.embed_pipeline_regexArr (_rules) ,...df_pipeline_${this._pipelineType}_rules}
        type t_rules = typeof rules

        const lib_pipeline = embed_lib_retReqRes<t_category,t_fct_name,_t_lib_pipeline,t_map_pipeline>(_lib_pipeline,map_pipeline)
        type t_lib_pipeline = typeof lib_pipeline

        const pipelineBuilder = new PipelineBuilder<t_category,t_fct_name,t_lib_pipeline> (rules, lib_pipeline,map_pipeline)

        export default pipelineBuilder` as const 
    }
}