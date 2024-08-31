import { IJson, IVoid, isEmptyJson, isNotEmptyJson } from "@shared/m_object.js"
import { t_rules_base, PipelineBuilder  as _PipelineBuilder} from "@shared/m_pipeline.js"
import { _isNullOrUndefined, t_noReturnValue } from "@shared/m_primitives.js"
import { convertStrToRegexStr} from "@shared/m_regex.js"
import { NestedArray, arrToUnion, arr_url_attributeName, getIndexOfElement, joinCharKeyJson, removePrefix, reshapeObject, t_arr_url_attributeName, t_function, t_join_underscore, t_notFoundIdx } from "@shared/type.js"
import { ReqAndResType } from "../../../utils/Data/ReqResRoute.js"
import { AServiceRequest, buildSaved, t_saved } from "../../../utils/Data/ServiceRoute.js"
import { getBrowsers, BrowsersPool, t_browserId, t_targetId } from "@/utils/browser/BrowsersPool.js"
import { getElmFromArrSelector, trySelectors_any, trySelectors_any_all, waitSelectors } from "@/utils/scraping/DOMElements/Selector/main.js"
import { base_getParsingTree, _buildParsingTree } from "@/utils/scraping/PageParsing/TreeParsing.js"
import { take_screenshot } from "@shared/str_debug.js"
import { t_page_fct_getMainComponent, t_page_fct_waitForPageFullLoading, waitForPageFullLoading } from "@/utils/scraping/DOMElements/page_selectors.js"
import { concatRouteNameClassName, t_arr_component, t_concatRouteNameClassName, t_getClassNameTypeFromArrComponent, t_removeConcatRouteNameClassName, t_rootClassName } from "@/utils/scraping/PageParsing/types.js"
import { selectors, t_ElementHN, t_pageOrElementHN, t_resSelector } from "@/utils/scraping/DOMElements/Selector/_Selector/type.js"
import { _IJsonComponents } from "@/utils/scraping/PageParsing/Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js"
import { hours, time } from "@shared/hours.js"
import { MapRegexToIdPath, date_field, pagination_field, t_pagination_field, t_required_field, t_union_required_field } from "@shared/m_regexMapping.js"
import { char_join_pathRoutes, t_agreg_path, unjoin_pathRoutes } from "@shared/routePath.js"
import { NodeComponentValue, str_attributes } from "@/utils/scraping/PageParsing/Tree/NodeComponent.js"
import { f_clicking } from "@/utils/scraping/primitives/human_actions.js"
import { arrayIsEqual, arrayOnlyIndices, convertToArray, isArray, isNullArray, isStrictArray } from "@shared/m_array.js"
import { t_df_arr_fct_name, str_getNextPage, t_str_getNextPage, str_transformAfterGetNextPage, str_nextPage, str_transformAfterNextPage, str_getLocalFunction, str_getServiceFunction, str_save_serviceFunction, str_transformAfterGetServiceFunction, getUrlToScrap, t_str_nextPage, getUrlToScrapItem, t_str_save_serviceFunction } from "./types.js"
import { createSubJsonFromArrRegex, deepCloneJson, getSubsetKeysFromArrRegex } from "@shared/m_json.js"
import { getRootPropFromResValue, getRootPropFromValue, isGetValue, str_json_value, t_resValue } from "@/utils/scraping/PageParsing/Tree/TreeComponent.js"
import { embedBeginAndEndOfLineStrOrRegex } from "@shared/m_regex_prefixAndSuffix.js"
import { t_req_any, t_res_any } from "@/controller/scraping-services/class/constraints.js"
import { t_strRegex } from "@shared/_regexp.js"
import { getBodyUrlAndParamsReq } from "@shared/validate-url/functions.js"
import { t_url } from "@shared/validate-url/_types.js"
import { enum_prisma_op } from "@/database/scraping-services/utils/prisma.js"
import { _getAwaitedEmptyPromise, getEmptyPromise } from "@shared/m_promise.js"
import { getTextContent } from "@/utils/scraping/primitives/misc.js"
import fs from "fs"
import getCurrentLine from "get-current-line"
//TODO-IMP refactor

export type t_ha_res = Promise<(IJson<"url"|"date"|string>)>

export const nextCategories =["url","click","scroll"] as const
export type t_nextCategory = typeof nextCategories[number]

export type t_json_nextPage = {
    nextCategory : t_nextCategory,
    url :string ,
    url_toScrap:string,
    nexts : any[]
}

export type  t_IAHA_ServiceBase <SN extends string , R extends string ,Req extends t_req_any , Res extends t_res_any,UnionRegex  extends t_strRegex ,UnionIdPath  extends string , ArrUnionClassNameType extends  readonly [t_rootClassName,... readonly string[]],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,
ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents< unionClassNameType>,  arr_fcts extends readonly string[] = t_df_arr_fct_name  > =  
{
    routeName : R 
    serviceName : SN

    getServiceParam (req:Req , res : Res):t_AHA_Service_Param<SN,R>

    [str_getServiceFunction] (req:Req , res : Res) : t_ha_res
    [str_getLocalFunction] (req:Req , res : Res) : t_ha_res
    [str_transformAfterGetServiceFunction] (req:Req , res : Res, json:Awaited<t_ha_res> ): ReqAndResType<Req, Res>
        
    getTreeParam (req:Req , res : Res,_args?:reshapeObject< t_AHA_Service_ArgsGetTree<SN,R,unionClassNameType,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>):Parameters<typeof AHA_ServiceBase._getTree<SN,R,unionClassNameType,  UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>
    getTree(...args:Parameters<t_AHA_Service_getTree<Req ,Res,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>>):ReturnType<t_AHA_Service_getTree<Req ,Res,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>>
    namesOfPipelineFunction (): arr_fcts
}

export type t_transformFromGet <Req extends t_req_any , Res extends t_res_any, F extends (( req:Req , res : Res  ) => t_ha_res) > = (req:Req , res : Res, json:Awaited<ReturnType<F>> ) => ReqAndResType<Req, Res>

export type _t_IAHA_ServiceGetTransform<Req extends t_req_any , Res extends t_res_any,T extends IJson<string,( req:Req , res : Res  ) => t_ha_res> > = 
T & {[k in keyof T as k extends string ? `transformAfter${Capitalize<k>}` :never ] :  t_transformFromGet<Req,Res,T[k]>}  

export type t_isNext <Arr extends  readonly string[] > = getIndexOfElement<t_str_getNextPage,Arr>
export type t_isSave <Arr extends  readonly string[] > = getIndexOfElement<t_str_save_serviceFunction,Arr>


export type _t_IAHA_Service <SN extends string ,R extends string , Req extends t_req_any , Res extends t_res_any,UnionRegex  extends t_strRegex ,UnionIdPath  extends string , ArrUnionClassNameType extends  readonly [t_rootClassName,... readonly string[]],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents< unionClassNameType>,arr_HA_df_fct_name extends readonly string[] =t_df_arr_fct_name,arr_restFct extends readonly string[] =[] 
,_isSave extends boolean = t_isSave<[...arr_HA_df_fct_name,...arr_restFct]>extends t_notFoundIdx ? false : true 
,_isNext extends boolean = t_isNext<[...arr_HA_df_fct_name,...arr_restFct]> extends t_notFoundIdx ? false : true 
> =(_isSave extends false ?IVoid:{  
    [str_save_serviceFunction]( req:Req , res : Res  ) : Promise<void>
    //A FAIRE : why no transform after save ? 
    //TODO extract type : duplicate between getNextPage and nextPage and all other future optional fct , type_fct for get opt , transform opt , action opt
}) & (_isNext extends false ?IVoid:_t_IAHA_ServiceGetTransform<Req,Res,{
    [str_getNextPage] ( req:Req , res : Res  ) : t_ha_res
    [str_nextPage]( req:Req , res : Res  ) : Promise<t_json_nextPage>
}>& {getNextPageParam (req:Req , res : Res):t_AHA_Service_ParamNextPage<SN,R>})



export type  t_IAHA_Service <SN extends string ,R extends string , Req extends t_req_any , Res extends t_res_any,UnionRegex  extends t_strRegex ,UnionIdPath  extends string , ArrUnionClassNameType extends  readonly [t_rootClassName,... readonly string[]],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,
ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents< unionClassNameType>,  arr_fcts extends readonly string[] = t_df_arr_fct_name  > =  
_t_IAHA_Service<SN,R,Req,Res,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T,arr_fcts> & t_IAHA_ServiceBase<SN,R,Req,Res,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T,arr_fcts>

export type t_IAHA_Service_any< arr_fcts extends readonly string[] = readonly string[]>= 
t_IAHA_Service<string,string,t_req_any,t_res_any,t_strRegex,string,readonly [t_rootClassName,... readonly string[]],string,t_arr_component<string>,_IJsonComponents<string>,arr_fcts>

export type t_AHA_Service_Param<SN extends string ,R extends string> = {
    routeName:R,
    serviceName:SN,
    url : string ,
    url_toScrap ?: string,
    browserId : t_browserId ,
    targetId : t_targetId ,

}

export type t_getLibPipeline<T , Arr extends readonly string[]> = 
    Arr extends readonly [infer Id , ... infer R ] ? R extends readonly string[] ? Id extends keyof T ? 
        T[Id] extends infer A ? A extends t_function ? 
        {[k in Id]:((this:T,...args:Parameters<A>)=>ReturnType<A>)} & t_getLibPipeline<T,R>
        : never : never 
    : never : never : {}



type _t_AHA_Service_ParamGetTree<SN extends string ,R extends string ,
BaseElement extends unionClassNameType ,UnionRegex  extends t_strRegex ,UnionIdPath  extends string , ArrUnionClassNameType extends  readonly [t_rootClassName,... readonly string[]],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,
ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents< unionClassNameType>
> = {routeName : R,mapFilter?:MapRegexToIdPath<UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType>,prop_base_selectors:selectors,prop_base:BaseElement}

export type t_AHA_Service_ArgsGetTree<SN extends string ,R extends string , 
BaseElement extends unionClassNameType ,UnionRegex  extends t_strRegex ,UnionIdPath  extends string , ArrUnionClassNameType extends  readonly [t_rootClassName,... readonly string[]],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,
ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents< unionClassNameType>

> = 
{

    params: _t_AHA_Service_ParamGetTree<SN,R,BaseElement,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,
    fct_loading:t_AHA_Service_FctLoadingGetTree
}


export type t_AHA_Service_getTree<Req extends t_req_any , Res extends t_res_any,_UnionRegex  extends t_strRegex ,_UnionIdPath  extends string , _ArrUnionClassNameType extends  readonly [t_rootClassName,... readonly string[]],_unionClassNameType extends arrToUnion<_ArrUnionClassNameType> ,
_ArrArr extends t_arr_component<_unionClassNameType> ,  _T extends _IJsonComponents<_unionClassNameType>> = 
(<SN extends string , R extends string , BaseElement extends unionClassNameType ,UnionRegex  extends _UnionRegex ,UnionIdPath  extends _UnionIdPath , ArrUnionClassNameType extends  readonly [t_rootClassName,... readonly (Exclude<_ArrUnionClassNameType[number],t_rootClassName>)[]] ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & readonly (_ArrArr[number])[] ,  T extends _IJsonComponents< unionClassNameType> & {[k in keyof _T ]: _T[k]}> (req:Req,res:Res,args:reshapeObject<t_AHA_Service_ArgsGetTree<SN,R,BaseElement,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>>)=>ReturnType<typeof AHA_Service._getTree>)


export type t_AHA_Service_ParamGetTree<SN extends string ,R extends string , BaseElement extends unionClassNameType,  UnionRegex  extends t_strRegex ,UnionIdPath  extends string , ArrUnionClassNameType extends  readonly [t_rootClassName,... readonly string[]],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,
ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents< unionClassNameType>> = t_AHA_Service_Param<SN,R> & _t_AHA_Service_ParamGetTree<SN,R,BaseElement,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>

export type t_AHA_Service_FctLoadingGetTree={
    waitForPageLoading : t_page_fct_getMainComponent ,  
    waitForPageFullLoading : t_page_fct_waitForPageFullLoading
}

export type t_AHA_Service_ParamNextPage<SN extends string ,R extends string> = t_AHA_Service_Param<SN,R> & {result:IJson , nexts:any[]}

type t__ParamSavePage<TSample extends IJson ,TDbName extends string , TColId extends keyof TSample , TColDate extends keyof TSample , FK extends IJson<keyof TSample>|IVoid = IVoid > = {
    database:{
        prismaClient: any,
        name: TDbName,
        id: TColId,
    },
    time : {
        date: TColDate,
        period: number
    },
    rows:TSample[],
    fk : FK 
}

export type t_AHA_Service_ParamSavePage<TSample extends IJson ,TDbName extends string , TColId extends keyof TSample , TColDate extends keyof TSample , FK extends IJson<keyof TSample>|IVoid = IVoid >  =  t__ParamSavePage<TSample , TDbName , TColId , TColDate, FK> //t_AHA_Service_Param &

export abstract class AHA_ServiceBase<SN extends string ,R extends string , Req extends t_req_any , Res extends t_res_any,UnionRegex  extends t_strRegex ,UnionIdPath  extends string , ArrUnionClassNameType extends  readonly [t_rootClassName,... readonly string[]],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,
ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents< unionClassNameType>,arr_HA_df_fct_name extends readonly string[] =t_df_arr_fct_name,arr_restFct extends readonly string[] =[] > 
implements t_IAHA_ServiceBase<SN,R,Req,Res,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T,readonly [...arr_HA_df_fct_name,...arr_restFct]>{
    
    routeName : R 
    serviceName : SN

    abstract getServiceParam (req:Req , res : Res):t_AHA_Service_Param<SN,R>
    abstract [str_getServiceFunction](req:Req , res : Res) : t_ha_res
    abstract [str_getLocalFunction] (req:Req , res : Res):t_ha_res
    abstract transformAfterGetServiceFunction (req:Req , res : Res, json:Awaited<t_ha_res> ) : ReqAndResType<Req, Res>

    abstract getTreeParam (req:Req , res : Res,_args?:reshapeObject< t_AHA_Service_ArgsGetTree<SN,R,unionClassNameType,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>):Parameters<typeof AHA_ServiceBase._getTree<SN,R,unionClassNameType,  UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>
    abstract getTree(...args:Parameters<t_AHA_Service_getTree<Req ,Res,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>>):ReturnType<t_AHA_Service_getTree<Req ,Res,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>>

    abstract namesOfPipelineFunction(): readonly [...arr_HA_df_fct_name,...arr_restFct] //TODO extract type 

    getIdRequiredField(idField :t_removeConcatRouteNameClassName<R,unionClassNameType> & t_union_required_field ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        return concatRouteNameClassName(this.routeName,idField)
    }

    getDatabaseLocalAndRemote() {
        throw new Error("Method not implemented."); 
    }

    static getServiceParam <SN extends string ,R extends string ,Req extends t_req_any , Res extends t_res_any>(req:Req , res : Res):t_AHA_Service_Param<SN,R> {
        return {
            serviceName: req.header.serviceName,
            routeName : req.header.routeName,
            url:req.header.url,
            url_toScrap : req.header.url_toScrap,
            browserId : req.body.browserId,
            targetId:req.body.targetId
        }
    }
        

    static async _getTree< SN extends string ,R extends string , BaseElement extends unionClassNameType,  UnionRegex  extends t_strRegex ,UnionIdPath  extends string , ArrUnionClassNameType extends  readonly [t_rootClassName,... readonly string[]],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,
    ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents< unionClassNameType>>(
        param:t_AHA_Service_ParamGetTree<SN,R,BaseElement,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>,
        fct_loading : t_AHA_Service_FctLoadingGetTree
            ):Promise<any>{
        const url_toScrap = param.url_toScrap || param.url
        let mpage = await getBrowsers().then((brwsrsP:BrowsersPool)=>brwsrsP.getMPageFromTargetIdx(param.browserId,param.targetId))
        let page = mpage.page

        console.log("url_toScrap",url_toScrap)
        //TODO : extract in browserPage gotoPage and load
        if(!mpage.cur_url){ /*console.log("DEBUG_ME",getCurrentLine());*/
            await mpage.goto(url_toScrap)
        }
        
        await page.mouse.move(0, 0);
        
        console.log( `waiting for first load : ${url_toScrap}` ) 
        await fct_loading.waitForPageLoading(page)

        console.log( `waiting for fully load : ${url_toScrap}` ) ;
        await fct_loading.waitForPageFullLoading(page)

    
        await trySelectors_any(page,param.prop_base_selectors)
        console.log( `waiting for base_getParsingTree : ${url_toScrap}` )

        let tree =  await base_getParsingTree<UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,BaseElement>(mpage,param.prop_base ,param.mapFilter, true )
        if(tree.len <= 1)throw new Error("tree is empty")
        //console.log("tree",tree)

        return tree 
    }

}
type _t_nextPaginationJson =IJson<t_arr_url_attributeName[number],string>


export type t_nextJson_selectedPagination<isBase extends boolean = false> =  string 

export type t_nextJson_nextPagination<isBase extends boolean = false,isEmbedded extends boolean = boolean,isGetValue extends boolean = boolean > =
t_resValue<t_pagination_field[0],isGetValue,(isBase extends true ?  string : `${number}`) > extends infer R ?
boolean extends isEmbedded ? {[k in t_pagination_field[0]] :R} | R : isEmbedded extends true ? {[k in t_pagination_field[0]] :R} : R 
: never

   
export type t_nextJson<isBase extends boolean = false,isSingleNext extends boolean = boolean , isGetValue extends boolean = boolean > = 
(boolean extends isSingleNext ? [t_nextJson_nextPagination<isBase,false, isGetValue>] | t_nextJson_nextPagination<isBase,true, isGetValue>[] : isSingleNext extends true ? [t_nextJson_nextPagination<isBase,false, isGetValue>] : t_nextJson_nextPagination<isBase,true, isGetValue>[] ) extends infer R ? 
{[k in t_pagination_field[0]] : R } & {[k in t_pagination_field[1]] :t_nextJson_selectedPagination<isBase>} : never 




//t_IAHA_Service<Req,Res,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T,readonly [...arr_HA_df_fct_name,...arr_restFct]>
export abstract class AHA_Service<SN extends string ,R extends string ,Req extends t_req_any , Res extends t_res_any,UnionRegex  extends t_strRegex ,UnionIdPath  extends string , ArrUnionClassNameType extends  readonly [t_rootClassName,... readonly string[]],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,
ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents< unionClassNameType>,arr_HA_df_fct_name extends readonly string[] =t_df_arr_fct_name,arr_restFct extends readonly string[] =[] > 
extends  AHA_ServiceBase<SN,R,Req,Res,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T,readonly [...arr_HA_df_fct_name,...arr_restFct]> implements t_IAHA_ServiceBase<SN,R,Req,Res,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T,readonly [...arr_HA_df_fct_name,...arr_restFct]>   {
        
        routeName : R 
        serviceName : SN

        static _nextsJson (_json :t_nextJson<true>) { /*console.log("DEBUG_ME",getCurrentLine());*/
            const selected_pagination = _json[pagination_field[1]]
            const nextPagination = _json[pagination_field[0]]

            let _nextPagination_values = nextPagination
            if(_nextPagination_values.length > 1){ /*console.log("DEBUG_ME",getCurrentLine());*/
                let nextPagination_values = _nextPagination_values as t_nextJson<true,false>[t_pagination_field[0]]
                const json = _json as t_nextJson<true,false>
                const limit = parseInt(getRootPropFromValue(pagination_field[1],json as any ))//TODO 
                
                nextPagination_values = nextPagination_values.filter((element)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    const prop = pagination_field[0]
                    if(element.hasOwnProperty(prop)){
                        const json_value = getRootPropFromValue(prop,element)
                        return /^\d+$/.test(json_value) &&  parseInt(json_value) > limit
                    }
                    return false 
                })
                nextPagination_values = nextPagination_values.sort(function(a:t_nextJson_nextPagination<true,true>, b :t_nextJson_nextPagination<true,true>) { /*console.log("DEBUG_ME",getCurrentLine());*/
                    const a_val = parseInt(getRootPropFromValue(pagination_field[0],a))
                    const b_val = parseInt(getRootPropFromValue(pagination_field[0],b))
                    return a_val - b_val
                });
                _nextPagination_values = nextPagination_values
            }else {
                let nextPagination_values = _nextPagination_values as t_nextJson<true,true>[t_pagination_field[0]]
                _nextPagination_values =[{[pagination_field[0]] :nextPagination_values[0]}]
                _nextPagination_values = nextPagination_values
            }

            return {[pagination_field[0]]:_nextPagination_values, [pagination_field[1]]:selected_pagination} as t_nextJson<false>


        }

        static _bodyNextsJson(json:IJson,nextPaginationKey : string , selectedPaginationKey : string){ /*console.log("DEBUG_ME",getCurrentLine());*/
            let _nextPagination = {} as any   
                            
            if(isStrictArray(json[nextPaginationKey])){                                                             
                _nextPagination = json[nextPaginationKey] as t_nextJson_nextPagination<true>[]
            }else {
                //IMP : regex is \S+ to include href,aria-label, etc AND custom attribute wich can be any string 
                //type doesnt reflect this aspect , typing is just a taste of what the object should be and not a strict typing
                const _obj = createSubJsonFromArrRegex(json,[new RegExp(NodeComponentValue.getNameFieldOfJsonStoredValue(pagination_field[0]+"(?:","\\S+)?"))])
                _nextPagination = [_obj as t_nextJson_nextPagination<true>]
            }                                                                                                       
            
            return AHA_Service._nextsJson(
                {
                    ...deepCloneJson({[pagination_field[0]]:_nextPagination//TODO: as t_nextJson_nextPagination<true>[] 

                    }) 
                    , ...deepCloneJson({[pagination_field[1]]:(json[pagination_field[1]] as t_nextJson_selectedPagination<true>)})
                })[pagination_field[0]]
        }
        static async _getNextPage < SN extends string , R extends string,BaseElement extends unionClassNameType,  UnionRegex  extends t_strRegex ,UnionIdPath  extends string , ArrUnionClassNameType extends  readonly [t_rootClassName,... readonly string[]],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,
        ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents< unionClassNameType>>( param:t_AHA_Service_ParamGetTree<SN,R,BaseElement,UnionRegex,UnionIdPath,ArrUnionClassNameType,unionClassNameType,ArrArr,T>, fct_loading : t_AHA_Service_FctLoadingGetTree){ /*console.log("DEBUG_ME",getCurrentLine());*/


            type t_1 = UnionRegex
            type t_2 = UnionIdPath
            type t_3 = readonly[ t_rootClassName , ...readonly (Exclude<ArrUnionClassNameType[number],t_rootClassName>)[]]
            type t_4 = unionClassNameType
            type t_5 =   readonly (ArrArr[number])[]
            type t_6 =  {[k in keyof T ]: T[k]}

            const _nextPageId = concatRouteNameClassName(param.routeName,pagination_field[0])
            const nextPageId = _nextPageId as typeof _nextPageId & unionClassNameType  //TODO 

            let mpage = await getBrowsers().then((brwsrsP:BrowsersPool)=>brwsrsP.getMPageFromTargetIdx(param.browserId,param.targetId))
            const url_toScrap = param.url_toScrap || param.url

            const scrapingComponent  = mpage.getScrapingComponent()
            const mapPathPatternToId : MapRegexToIdPath<UnionRegex, UnionIdPath,ArrUnionClassNameType,unionClassNameType> = scrapingComponent.getMapPathPatternToId()
            const paths_to_nextComponent  = scrapingComponent.getFwJsonComponent().findPathOfIdComponent(nextPageId)
            
            for( const _path_to_nextComponent of paths_to_nextComponent){ /*console.log("DEBUG_ME",getCurrentLine());*/
                const path_to_nextComponent = _path_to_nextComponent as t_agreg_path<unionClassNameType>
                let _res =  MapRegexToIdPath.arrPathToPathId<UnionRegex, UnionIdPath,ArrUnionClassNameType,unionClassNameType> (mapPathPatternToId,path_to_nextComponent,nextPageId)
                if(_isNullOrUndefined(_res)) continue 
                let regex_idx = [_res.regex_idx]
                while(!_isNullOrUndefined(_res)){
                    _res = MapRegexToIdPath.arrPathToPathId<UnionRegex, UnionIdPath,ArrUnionClassNameType,unionClassNameType> (mapPathPatternToId,path_to_nextComponent,nextPageId,_res.regex_idx+1)
                    if(!_isNullOrUndefined(_res))regex_idx.push(_res.regex_idx)
                }
                const new_arr_regex = arrayOnlyIndices(mapPathPatternToId.mapRegexToIdPath as NestedArray<any> ,regex_idx)
                const new_map_regex = new MapRegexToIdPath<t_1,t_2,any,t_4>( {_arrClassname :unjoin_pathRoutes<unionClassNameType>(path_to_nextComponent).slice(1) } , { _mapRegexToIdPath : new_arr_regex } ) 
    
                console.log("PIPELINE")
                const tree = await AHA_Service._getTree<SN,R,BaseElement,t_1,t_2,any,t_4,t_5,t_6>({
                    ...param,
                    mapFilter:new_map_regex
                },fct_loading)
    
                //A FAIRE EXTRACT : 
                const _date = hours.getTimeNow()
                let json = tree.getJsonValue(mapPathPatternToId,undefined , true ).res_childs as any
                return {[url_toScrap]:{url:url_toScrap ,...json,date : _date}}
    
            }
        }

        static getNextPageParam <SN extends string ,R extends string,Req extends t_req_any , Res extends t_res_any>(req:Req , res : Res):t_AHA_Service_ParamNextPage<SN,R> {
            return {
                ...this.getServiceParam(req,res),
                result : res.body.result,
                nexts : res.body.nexts
            }
        }
        
        //A FAIRE : refactor see if part isnt be better in another file and also be static // this nextPage is only relevant for not scrolling next => enum.next => [scroll , click , goto ]
        static async _nextPage<SN extends string ,R extends string >(param:t_AHA_Service_ParamNextPage<SN,R>){ /*console.log("DEBUG_ME",getCurrentLine());*/
            const nexts =param.nexts
            if(_isNullOrUndefined(nexts))throw Error(`No nexts ${nexts}`)


            let mpage = await getBrowsers().then((brwsrsP:BrowsersPool)=>brwsrsP.getMPageFromTargetIdx(param.browserId,param.targetId))
            const page = mpage.page

            let  res_nextPagenextPage :t_json_nextPage= {} as any 
            
            const keys_attribute_url = arr_url_attributeName.map((url_attributeName)=>NodeComponentValue.getNameFieldOfJsonStoredValue(pagination_field[0],url_attributeName))
            const regex_keys_attribute_url = keys_attribute_url.map((key_attribute_url)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/return new RegExp(embedBeginAndEndOfLineStrOrRegex(convertStrToRegexStr(key_attribute_url),true))})
            
            for (const _nodeComponentValue of nexts){ /*console.log("DEBUG_ME",getCurrentLine());*/
                const nodeComponentValue = _nodeComponentValue[pagination_field[0]]
                const json_attribute_url = createSubJsonFromArrRegex<string,IJson<string,string>>(nodeComponentValue[str_json_value],regex_keys_attribute_url)

                if(isNotEmptyJson(json_attribute_url)) {
                    let success_goto = false
                    let url = mpage.cur_url
                    const urls = Object.values(json_attribute_url)
                    for(let i = 0 ; i<urls.length && !success_goto;i++){ /*console.log("DEBUG_ME",getCurrentLine());*/
                        url = urls[i].startsWith(char_join_pathRoutes) ? mpage.base_url + urls[i] : urls[i]
                        //await time.timer(15000)
                        success_goto = await mpage.goto(url).then(()=>true).catch(()=>false)
                    }
                    if(success_goto) { /*console.log("DEBUG_ME",getCurrentLine());*///throw new Error(`No url found for ${nodeComponentValue.description}`)
                        const url_toScrap = url
                        res_nextPagenextPage = {nexts:[],nextCategory :nextCategories[0],url,url_toScrap} //A FAIRE : nexts:nexts.pop()
                        break
                    }
                }   
                if(nodeComponentValue.description.length>0 && nodeComponentValue.description[0].length>0){ /*console.log("DEBUG_ME",getCurrentLine());*/
                    const elements :t_ElementHN[] = await NodeComponentValue.getElmOfNodeComponentValue(nodeComponentValue,page)//\d+
                    let element =  await Promise.any (elements.map((_element)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                        return getTextContent(_element).then((text)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                            if(nodeComponentValue.proper_value != text) throw Error(`text ${text} is not equal to proper_value ${nodeComponentValue.proper_value}`)
                            else return _element
                            })
                    })).then((element)=>element).catch(()=>null)
                    
                    
                    if(element){ /*console.log("DEBUG_ME",getCurrentLine());*/
                        const url = mpage.cur_url
                        //await time.timer(15000)
                        await f_clicking(element)
                        const url_toScrap = getUrlToScrap(url,param.result)
                        res_nextPagenextPage = {nexts:[],nextCategory :nextCategories[1],url,url_toScrap}//A FAIRE : nexts:nexts.pop()
                        break
                    }
                }

            }
        console.log("res_nextPagenextPage",res_nextPagenextPage)
        return res_nextPagenextPage //TODO update nexts and find a way to reuse it instead of calling getNextPage for exammple if res.body.nexts then ret = res.body.nexts else ret = await getNextPage(req,res) 

        }
        
        /*
        TODO-IMP: allow to retrieve strId , only with db name :
            - create config type
            - create config for each ScrapingSchema (arrClassname,?arrArrChild,) and (arrIdPath:(next,id,[required,opt]))
            - jsonMain for each service
            - specify config type with constraint  
            - implement config with _IJsonComponents and mapRegexToIdPath/mapFilter
            - jsonMain for each service 
        */
       //static getSavePageParam <Req extends t_req_any , Res extends t_res_any>(req:Req , res : Res):t_AHA_Service_ParamSavePage
        static getSavePageParam<TSample extends IJson ,TDbName extends string , TColId extends keyof TSample , TColDate extends keyof TSample, FK extends IJson<keyof TSample> |IVoid = IVoid >(db_prismaClient : any , db_name : TDbName ,db_id : TColId , time_db_date :TColDate , rows: TSample[] ,fk : FK, time_period : ReturnType<typeof  hours.getTimeNow> ):t_AHA_Service_ParamSavePage<TSample , TDbName , TColId , TColDate,FK>{
            return {
                //...this.getServiceParam(req,res),
                database:{
                    prismaClient:db_prismaClient,
                    name: db_name,
                    id: db_id,
                },
                time : {
                    date: time_db_date,
                    period:time_period 
                },
                rows:rows,
                fk:fk
            }
        }
        //TODO : allow array , atm on peut pas array sur sqlite car c purement relationnel donc il faut créer une relation , il faut modifier cette fonction pour que quand elle detecte que c'est un array elle creer tous les samples dans la remote database en le likant a l'objet courant 
        static async _save_serviceFunction <TSample extends IJson ,TDbName extends string , TColId extends keyof TSample , TColDate extends keyof TSample , FK extends IJson = IVoid >(param : t_AHA_Service_ParamSavePage<TSample , TDbName , TColId , TColDate,FK>){ /*console.log("DEBUG_ME",getCurrentLine());*/
                
            const {prismaClient,name:database_name ,id:strId} = param.database
            const {date:strDate,period} = param.time
            const {rows,fk} = param

            type T_id = TSample[TColId] 
            const arr_productType = rows.map((sample)=>sample[strId]) as T_id[] 

            const arr_existingSamples : TSample[] = await prismaClient[database_name].findMany({
                where: {
                [strId]: {
                    in: arr_productType,
                },
                },
            })
            
            // For a quick lookup
            let existingSamples : {[k in T_id]:TSample}=  {} as any 
            
            existingSamples = arr_existingSamples.reduce((_existingSamples,_existingSample) => 
            { 
                const id : string = _existingSample[strId]
                if(!_existingSamples.hasOwnProperty(id))_existingSamples[id]=_existingSample
                else throw Error(`id ${id} is duplicate`)
                return _existingSamples
            }
            ,existingSamples)
            
            let createAndUpdateArr: t_saved<TSample> = buildSaved()

            const fct_shortCut_nested = (sample , op : enum_prisma_op ) => Object.keys(sample).reduce((acc,key_sample)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                const cur = sample[key_sample] 
                acc[key_sample]= isArray(cur) ? isNullArray(cur) ? null : {[op] : cur} : cur
                if(acc[key_sample] === null)delete acc[key_sample]
                return acc
            },{})

            createAndUpdateArr = rows.reduce((_createAndUpdateArr,sample) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                const existingSample = existingSamples[sample[strId]]
                if(existingSample ){ /*console.log("DEBUG_ME",getCurrentLine());*/
                    if(_isNullOrUndefined(period) || existingSample[strDate] + period >= sample[strDate] ){
                        _createAndUpdateArr["update"].push(fct_shortCut_nested(sample,enum_prisma_op["update"]) as TSample)
                    }
                }else {
                    _createAndUpdateArr["create"].push(fct_shortCut_nested(sample,enum_prisma_op["create"]) as TSample)
                }
                return _createAndUpdateArr
            },createAndUpdateArr)


            const _getEmptyArrPromiseAwaited = () => [_getAwaitedEmptyPromise()]
            const _getEmptyArrPromise = () => _getEmptyArrPromiseAwaited().map((e)=>Promise.resolve(e))
            const _isEmptyAwaitedPromise = (arr) => arr.length === 1 && arrayIsEqual(arr,_getEmptyArrPromiseAwaited()) ? true : false

            createAndUpdateArr["create"] = 
                createAndUpdateArr["create"].length ? 
                //prismaClient[database_name].createMany({data: createAndUpdateArr["create"]}) 
                createAndUpdateArr["create"].map((sample)=>
                    prismaClient[database_name].create({
                            data: sample,
                    })
                ) 
                : _getEmptyArrPromise()

                createAndUpdateArr["update"] = createAndUpdateArr["update"].length ? createAndUpdateArr["update"].map((sample)=>
                prismaClient[database_name].update({
                        where: {
                            [strId]: sample[strId],
                        },
                        data: sample,
                    })
            ) : _getEmptyArrPromise()

            createAndUpdateArr['create'].map((_e)=>_e.catch(async(e)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                console.log("create EEE3",e)
                 fs.appendFile("create_error.txt",e, function (err) { /*console.log("DEBUG_ME",getCurrentLine());*/
                    if (err) throw err;
                    console.log('Saved!');
                  });
 
             }))
             createAndUpdateArr['update'].map((_e)=>_e.catch((e)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                console.log("update EEE3",e)
                
 
             }))
            //TODO-IMP createMany dont work in SQLite 
            return Promise.all([Promise.all(createAndUpdateArr['create']),Promise.all(createAndUpdateArr['update'])]).then((_arr)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/

                const arr = _arr.map((elm)=>_isEmptyAwaitedPromise(elm) ? [] : elm)
                return buildSaved(...arr)
            })

        }

        static embedItems <T extends IJson ,TUrl extends string , ItemField extends string =null  >(_json:T,url_toScrap:TUrl,item_field:ItemField=null){ /*console.log("DEBUG_ME",getCurrentLine());*/
            const _date = _json[date_field]
            let json = _isNullOrUndefined(item_field) ? _json :_json[url_toScrap] 
            if(_isNullOrUndefined(item_field)){
                json[url_toScrap] = {...json[url_toScrap],[date_field] : _date}
            }else {
                const {bodyUrl,paramsUrl} = getBodyUrlAndParamsReq(url_toScrap)
                //TODO extract add req_param 
                json[item_field]= json[item_field].reduce((acc,e,idx)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/return {...acc, [getUrlToScrapItem(bodyUrl,paramsUrl,idx)]:{...e,[date_field] : _date}}},{})//A FAIRE : extract 
               
            }
            delete json[date_field]
            return json
            
        }
     
}



