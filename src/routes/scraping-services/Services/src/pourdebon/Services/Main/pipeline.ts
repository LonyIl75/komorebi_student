import { df_map_pipeline, df_pipeline_categories, df_pipeline_rules, t_df_pipeline_rules } from "@/routes/scraping-services/class/Config/Pipeline/config.js";
import HA_PourdebonServiceMain from "./human-actions.js";
import { embed_lib_retReqRes } from "@/routes/scraping-services/class/utils/HAService.js";
import { PipelineBuilder, t_pipeline_rules_base } from "@/routes/scraping-services/class/Config/Pipeline/types.js";

const arr_category = [...df_pipeline_categories] as const 
type t_category = typeof arr_category[number]

const arr_fct_name = [...HA_PourdebonServiceMain.namesOfPipelineFunction()] as const
type t_fct_name = typeof arr_fct_name[number]

const _lib_pipeline = {
    [arr_fct_name[0]] : HA_PourdebonServiceMain[arr_fct_name[0]].bind(HA_PourdebonServiceMain),
    [arr_fct_name[1]] : HA_PourdebonServiceMain[arr_fct_name[1]].bind(HA_PourdebonServiceMain),
    [arr_fct_name[2]] : HA_PourdebonServiceMain[arr_fct_name[2]].bind(HA_PourdebonServiceMain)
} as const 
type _t_lib_pipeline = typeof _lib_pipeline

const map_pipeline = {
    ...df_map_pipeline
} as const
type t_map_pipeline = typeof map_pipeline

const _rules : t_pipeline_rules_base<t_category>= {} as any 

const rules = {...PipelineBuilder.embed_pipeline_regexArr (_rules) ,...df_pipeline_rules}
type t_rules = typeof rules

const lib_pipeline = embed_lib_retReqRes<t_category,t_fct_name,_t_lib_pipeline,t_map_pipeline>(_lib_pipeline,map_pipeline)
type t_lib_pipeline = typeof lib_pipeline

const pipelineBuilder = new PipelineBuilder<t_category,t_fct_name,t_lib_pipeline> (rules, lib_pipeline,map_pipeline)

 export default pipelineBuilder
