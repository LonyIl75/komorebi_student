import { str_getNextPage, str_transformAfterGetNextPage, str_nextPage, str_transformAfterNextPage } from "./HA/types.js"
import { _df_pipeline_withSave_rules, df_arr_fct_name_withSave, df_map_pipeline_withSave, df_pipeline_withSave_categories, df_pipeline_withSave_categories_embed, df_pipeline_withSave_rules } from "./config_save.js"
import { str_actionNext, t_pipeline_rules_base, t_str_actionNext, t_str_transform, PipelineBuilder, getRulesCategoryEndLayer, t_str_save } from "./types.js"
import { t_embedCategories, embedCategory } from "./utils/helpers.js"


export const df_arr_fct_name_nextPage = [...df_arr_fct_name_withSave,str_getNextPage,str_transformAfterGetNextPage,str_nextPage,str_transformAfterNextPage] as const
export type t_df_arr_fct_name_withNextPage = typeof df_arr_fct_name_nextPage
export type t_df_fct_name_withNextPage = t_df_arr_fct_name_withNextPage[number]


 

export const  df_pipeline_withNextPage_categories = [...df_pipeline_withSave_categories,str_actionNext,] as const 
type t_df_arr_category_withNextPage = typeof  df_pipeline_withNextPage_categories
type t_df_category_withNextPage = typeof  df_pipeline_withNextPage_categories[number]

export const df_map_pipeline_withNextPage = {
    ...df_map_pipeline_withSave,
    [ df_pipeline_withNextPage_categories[0]] : [...df_map_pipeline_withSave [df_pipeline_withNextPage_categories[0]] ,df_arr_fct_name_nextPage[4]],
    [ df_pipeline_withNextPage_categories[1]] : [...df_map_pipeline_withSave [df_pipeline_withNextPage_categories[1]] ,df_arr_fct_name_nextPage[5] ,df_arr_fct_name_nextPage[7]],
    [ df_pipeline_withNextPage_categories[4]] : [df_arr_fct_name_nextPage[6]],
} as const 
export type t_map_pipeline_withNextPage = typeof df_map_pipeline_withNextPage


export const df_pipeline_withNextPage_categories_embed : t_embedCategories <t_df_category_withNextPage,t_df_arr_category_withNextPage> =  df_pipeline_withNextPage_categories.map((cate:t_df_category_withNextPage)=>embedCategory<t_df_category_withNextPage>(cate))  as t_embedCategories <t_df_category_withNextPage,t_df_arr_category_withNextPage> 


const _df_pipeline_withNextPage_rules : t_pipeline_rules_base<t_df_category_withNextPage> = {
..._df_pipeline_withSave_rules,
[df_pipeline_withNextPage_categories[3]]:[
    ..._df_pipeline_withSave_rules[df_pipeline_withNextPage_categories[3]],
    ["(",...df_pipeline_withSave_categories_embed[3],...df_pipeline_withNextPage_categories_embed[4],")"]
],
[ df_pipeline_withNextPage_categories[4]] : [
    getRulesCategoryEndLayer<t_str_actionNext|t_str_transform>([...df_pipeline_withNextPage_categories_embed[4],...df_pipeline_withNextPage_categories_embed[1]])
]}

export const df_pipeline_withNextPage_rules = PipelineBuilder.embed_pipeline_regexArr (_df_pipeline_withNextPage_rules) 
export type t_df_pipeline_withNextPage_rules = typeof df_pipeline_withNextPage_rules
