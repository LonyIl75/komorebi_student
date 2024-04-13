import { df_arr_fct_name, str_save_serviceFunction } from "./HA/types.js"
import { _df_pipeline_rules, df_map_pipeline, df_pipeline_categories, df_pipeline_categories_embed } from "./config.js"
import { PipelineBuilder, getRulesCategoryEndLayer, str_save, t_pipeline_rules_base, t_str_actionNext, t_str_save, t_str_transform } from "./types.js"
import { embedCategory, t_embedCategories } from "./utils/helpers.js"


export const df_arr_fct_name_withSave = [...df_arr_fct_name,str_save_serviceFunction] as const
export type t_df_arr_fct_name_withSave = typeof df_arr_fct_name_withSave
export type t_df_fct_name_withSave = t_df_arr_fct_name_withSave[number]


 

export const  df_pipeline_withSave_categories = [...df_pipeline_categories,str_save,] as const 
type t_df_arr_category_withSave = typeof  df_pipeline_withSave_categories
type t_df_category_withSave = typeof  df_pipeline_withSave_categories[number]

export const df_map_pipeline_withSave = {
    ...df_map_pipeline,
    [ df_pipeline_withSave_categories[3]] : [df_arr_fct_name_withSave[3]],
} as const 
export type t_map_pipeline_withSave = typeof df_map_pipeline_withSave


export const df_pipeline_withSave_categories_embed : t_embedCategories <t_df_category_withSave,t_df_arr_category_withSave> =  df_pipeline_withSave_categories.map((cate:t_df_category_withSave)=>embedCategory<t_df_category_withSave>(cate))  as t_embedCategories <t_df_category_withSave,t_df_arr_category_withSave> 



//TODO A FAIRE  : modify _df_pipeline_rules for [1,2] and then ..._df_pipeline_rules and NAMING  : rules need to be as map and routes just before df 
export const _df_pipeline_withSave_rules : t_pipeline_rules_base<t_df_category_withSave> = {
..._df_pipeline_rules,
[ df_pipeline_withSave_categories[3]] : [
    getRulesCategoryEndLayer<t_str_save>(df_pipeline_withSave_categories_embed[3])
]}

export const df_pipeline_withSave_rules = PipelineBuilder.embed_pipeline_regexArr (_df_pipeline_withSave_rules) 
export type t_df_pipeline_withSave_rules = typeof df_pipeline_withSave_rules
