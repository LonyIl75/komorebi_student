import { df_pipeline_withNextPage_categories, df_map_pipeline_withNextPage, df_pipeline_withNextPage_rules } from "@/routes/scraping-services/class/Config/Pipeline/config_actionNext.js";
import { PipelineBuilder, t_pipeline_rules_base } from "@/routes/scraping-services/class/Config/Pipeline/types.js";
import HA_SocieteTechServiceStartupsMtp from "./human-actions.js";
import { embed_lib_retReqRes } from "@/routes/scraping-services/class/utils/HAService.js";
import { createJsonFromEntries } from "@shared/m_object.js";
import { t_getLibPipeline } from "@/routes/scraping-services/class/Config/Pipeline/HA/Pipeline.js";

const arr_category = [...df_pipeline_withNextPage_categories] as const 
type t_category = typeof arr_category[number]

const arr_fct_name = [...HA_SocieteTechServiceStartupsMtp.namesOfPipelineFunction()] as const
type t_fct_name = typeof arr_fct_name[number]


const _lib_pipeline = createJsonFromEntries(arr_fct_name.map((name)=>[name,HA_SocieteTechServiceStartupsMtp[name].bind(HA_SocieteTechServiceStartupsMtp)])) as  t_getLibPipeline<typeof HA_SocieteTechServiceStartupsMtp,typeof arr_fct_name>
type _t_lib_pipeline = typeof _lib_pipeline

const map_pipeline = {
    ...df_map_pipeline_withNextPage
} as const
type t_map_pipeline = typeof map_pipeline

const _rules : t_pipeline_rules_base<t_category> = {} as any 

const rules = {...PipelineBuilder.embed_pipeline_regexArr (_rules) ,...df_pipeline_withNextPage_rules}
type t_rules = typeof rules

const lib_pipeline = embed_lib_retReqRes<t_category,t_fct_name,_t_lib_pipeline,t_map_pipeline>(_lib_pipeline,map_pipeline)
type t_lib_pipeline = typeof lib_pipeline

const pipelineBuilder = new PipelineBuilder<t_category,t_fct_name,t_lib_pipeline> (rules, lib_pipeline,map_pipeline)

 export default pipelineBuilder