import getCurrentLine from "get-current-line"
import { IJson, IVoid } from "@shared/m_object.js"
import { t_rules_base } from "@shared/m_pipeline.js"
import { t_noReturnValue } from "@shared/m_primitives.js"
import { t_function, PopUnion, inArray } from "@shared/type.js"
import { ReqAndResType } from "../../utils/Data/ReqResRoute.js"
import { PipelineBuilder as _PipelineBuilder } from "@shared/m_pipeline.js"
import { t_req_any, t_res_any } from "@/controller/scraping-services/class/constraints.js"
import { t_regex_array } from "@shared/_regexp.js"

export const str_save = "save" as const
export type t_str_save = typeof str_save

export const str_get = "get" as const
export type t_str_get = typeof str_get

export const str_transform = "transform" as const
export type t_str_transform = typeof str_transform

export const str_action = "action" as const
export type t_str_action = typeof str_action

export const str_actionNext = "actionNext" as const
export type t_str_actionNext = typeof str_actionNext

export const pipeline_all_categories = [str_get,str_transform,str_save,str_action,str_actionNext] as const 
export type t_pipeline_all_categories = typeof pipeline_all_categories 
export type t_pipeline_all_category = t_pipeline_all_categories[number]


export type t_isCategoryTransformLayer <C extends string> =  C extends t_str_transform ? true : false
export const isCategoryTransformLayer = <C extends string>(cate : C) : t_isCategoryTransformLayer<C> => (cate == str_transform) as t_isCategoryTransformLayer<C>

export type t_isCategoryActionLayer <C extends string> =  C extends t_str_action ? true : false
export const isCategoryActionLayer = <C extends string>(cate : C) : t_isCategoryActionLayer<C> => (cate == str_action) as t_isCategoryActionLayer<C>

export type t_isCategoryNextActionLayer <C extends string> =  C extends t_str_actionNext ? true : false
export const isCategoryNextActionLayer = <C extends string>(cate : C) : t_isCategoryNextActionLayer<C> => (cate == str_actionNext) as t_isCategoryNextActionLayer<C>

export const getRulesCategoryEndLayer = <C extends string, RA extends t_regex_array<C> = t_regex_array<C>> (arr_regex_cate : RA) : RA => [...arr_regex_cate,"$"] as RA
export type t_retType_endLayer = t_noReturnValue


type t_isCategoryGetLayer <C extends string> =  C extends t_str_get ? true : false
export const isCategoryGetLayer = <C extends string>(cate : string) : t_isCategoryGetLayer<C> => (cate == str_get) as t_isCategoryGetLayer<C>  
export type t_retType_getLayer = Promise<IJson|IVoid>
export type t_retType_awaitedGetLayer = Awaited<t_retType_getLayer> 
export type validateRetAwaitedGetLayer < T > = T extends t_retType_awaitedGetLayer ? T : never 

export type t_isCategoryLayerNeedEmbed <C extends string> =  t_isCategoryTransformLayer<C> extends true ? false :  true 
export const isCategoryLayerNeedEmbed = <C extends string>(cate : C) : t_isCategoryLayerNeedEmbed<C> => ! isCategoryTransformLayer<C>(cate) as t_isCategoryLayerNeedEmbed<C>


export type t_pipeline_rules_base <K extends t_pipeline_all_category > =  t_rules_base<t_pipeline_all_category,K> 

export type t_isCategorySaveLayer <C extends string> =  C extends t_str_save ? true : false
export const isCategorySaveLayer = <C extends string>(cate : C) : t_isCategorySaveLayer<C> => (cate == str_save) as t_isCategorySaveLayer<C> 


export class PipelineBuilder<KCategory extends t_pipeline_all_category  ,KFct extends string  , O extends { [k in KFct]:t_function} > extends _PipelineBuilder<t_pipeline_all_category,KCategory,KFct,O> {}



type _t_config_pipeline< AllCategory extends string , Fcts extends readonly string[] , Categories extends readonly AllCategory[] 
,  MCF extends {readonly [kc in Categories[number]] : readonly (Fcts[number])[]}, Rules extends t_rules_base<AllCategory,Categories[number]> >= {
    namesOfPipelineFunction : Fcts,
    mapCategoryFcts : MCF,
    rules :  Rules
}

export type t_config_pipeline<  Fcts extends readonly string[] , Categories extends readonly t_pipeline_all_category[] ,  MCF extends {readonly [kc in Categories[number]] : readonly (Fcts[number])[]}, Rules extends t_pipeline_rules_base<Categories[number]> >
= _t_config_pipeline< t_pipeline_all_category, Fcts, Categories ,  MCF , Rules  >


export type t_findCategoryOfFct < KCategory extends string , KFct extends string , MCF extends {readonly [kc in KCategory] : readonly KFct[]} , F extends KFct > =
    //IsUnion<KCategory> extends false ? never : 
    PopUnion<KCategory> extends infer C ? C extends KCategory ? 
    inArray<MCF[C],F> extends true ? C : t_findCategoryOfFct<Exclude<KCategory,C>,KFct,MCF,F> : never : never

export type t_embed_lib_retReqRes <KCategory extends string , KFct extends string , TL extends { [k in KFct]:t_function} , MCF extends {readonly [kc in KCategory] : readonly KFct[]}>=
    {[k in KFct]:t_findCategoryOfFct<KCategory,KFct,MCF,k> extends infer C ? 
            C extends KCategory ?
                t_isCategoryLayerNeedEmbed<C> extends true ? 
                    t_function<[...Parameters<TL[k]>,ReturnType<TL[k]>],Parameters<TL[k]>>
                : TL[k]
            :never 
        : never
    }

export type t_params_pipeline <Req extends t_req_any , Res extends t_res_any> = ReqAndResType<Req,Res>
    
type t_function_endLayer<Req extends t_req_any , Res extends t_res_any> = t_function<Promise<t_retType_endLayer>,t_params_pipeline<Req,Res>>
export type t_HA < KCategory extends string , KFct extends string ,  MCF extends {readonly [kc in KCategory] : readonly KFct[]}, Req extends t_req_any , Res extends t_res_any > = 
 {[k in KFct]:
    t_findCategoryOfFct<KCategory,KFct,MCF,k> extends infer C ?
        C extends KCategory ?
            t_isCategoryTransformLayer<C> extends true ? t_function<Promise<t_params_pipeline<Req,Res>>,[...t_params_pipeline<Req,Res>,t_retType_awaitedGetLayer]> : 
            t_isCategoryGetLayer<C> extends true ? t_function<t_retType_getLayer,t_params_pipeline<Req,Res> > :
            t_isCategorySaveLayer<C> extends true ? t_function_endLayer<Req,Res>|t_function<Promise<t_params_pipeline<Req,Res>>,t_params_pipeline<Req,Res>> :
            t_isCategoryNextActionLayer<C> extends true ? t_function_endLayer<Req,Res> :
            t_function<Promise<any>,t_params_pipeline<Req,Res>>
        : never
    : never
 }
    
const addElmsToCategory = < Elms extends readonly string[] ,C extends t_pipeline_all_category, ArrC extends readonly string[],T extends IJson & IJson<C,ArrC> >(_obj: T,cate : C, elms : Elms) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    _obj[cate].push(...elms)
    return _obj as {[k in Exclude<keyof T,C>]:T[k]} & IJson<C,[...ArrC,...Elms]>
}

export const addElmsToCategoryInitIfNotExist = < Elms extends readonly string[] ,C extends t_pipeline_all_category,T extends IJson>(_obj: T,cate : C, elms : Elms) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    if(!_obj.hasOwnProperty(cate))_obj[cate]=[] as any 
    return addElmsToCategory<Elms,C,C extends keyof T ? T[C] :[], T & IJson<C,[]>>(_obj,cate,elms)
}