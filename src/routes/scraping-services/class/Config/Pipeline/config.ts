import { df_arr_fct_name, t_df_arr_fct_name} from "./HA/types.js"
import { str_get, str_transform, str_action, t_pipeline_rules_base, pipeline_all_categories, t_pipeline_all_category, getRulesCategoryEndLayer, t_str_transform, PipelineBuilder, t_config_pipeline} from "./types.js"
import { t_embedCategories, embedCategory } from "./utils/helpers.js"

export const df_pipeline_categories = [str_get,str_transform,str_action] as const 
type t_df_arr_category = typeof df_pipeline_categories
type t_df_category = typeof df_pipeline_categories[number]



export const df_map_pipeline = {
    [df_pipeline_categories[0]] : [df_arr_fct_name[0],df_arr_fct_name[1]],
    [df_pipeline_categories[1]] : [df_arr_fct_name[2]] ,
    [df_pipeline_categories[2]] : []
} as const 
export type t_map_pipeline = typeof df_map_pipeline


export const df_pipeline_categories_embed : t_embedCategories <t_df_category,t_df_arr_category> = df_pipeline_categories.map((cate:t_df_category)=>embedCategory<t_df_category>(cate))  as t_embedCategories <t_df_category,t_df_arr_category> 

export const _df_pipeline_rules : t_pipeline_rules_base<t_df_category> = {
    [df_pipeline_categories[0]] : [
        ["(",...df_pipeline_categories_embed[0],...df_pipeline_categories_embed[1],")","+"]
    ],
    [df_pipeline_categories[1]] : 
    [...pipeline_all_categories.map((cate:t_pipeline_all_category)=>["(",...df_pipeline_categories_embed[1],...embedCategory<t_pipeline_all_category>(cate),"?",")","+"]) as any
    ,getRulesCategoryEndLayer<t_str_transform>(df_pipeline_categories_embed[1])], 
    [df_pipeline_categories[2]] : [
        ...pipeline_all_categories.map((cate:t_pipeline_all_category)=>["(",...df_pipeline_categories_embed[2],...embedCategory<t_pipeline_all_category>(cate),"?",")","+"]) as any
    ],
    
   

}



export const df_pipeline_rules = PipelineBuilder.embed_pipeline_regexArr (_df_pipeline_rules) 
export type t_df_pipeline_rules = typeof df_pipeline_rules


export const df_config_routes_pipeline :t_config_pipeline<t_df_arr_fct_name, t_df_arr_category,t_map_pipeline,t_df_pipeline_rules> = {
    namesOfPipelineFunction :  df_arr_fct_name,
    mapCategoryFcts : df_map_pipeline,
    rules : df_pipeline_rules
} as const 
export type t_df_config_routes_pipeline = typeof df_config_routes_pipeline


