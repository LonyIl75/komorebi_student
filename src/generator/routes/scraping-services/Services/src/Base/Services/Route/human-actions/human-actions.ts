import { CodeGenerator} from "@/generator/utils/types.js";
import { t_IAHA_Service_any } from "@/routes/scraping-services/class/Config/Pipeline/HA/Pipeline.js";
import { str_getLocalFunction, str_getServiceFunction, t_df_arr_fct_name } from "@/routes/scraping-services/class/Config/Pipeline/HA/types.js";
import { t_df_arr_fct_name_withNextPage } from "@/routes/scraping-services/class/Config/Pipeline/config_actionNext.js";
import { t_df_arr_fct_name_withSavePage } from "@/routes/scraping-services/class/Config/Pipeline/config_save.js";
import { IVoid } from "@shared/m_object.js";
import { pagination_field } from "@shared/m_regexMapping.js";
import { majFirstChar } from "@shared/m_string.js";

export type IHA<SN extends string , R extends string , arr_fcts extends readonly string[]> = CodeGenerator<{_:t_IAHA_Service_any<arr_fcts>,static:IVoid},"class",{
    _:{routeName:{type:R},serviceName:{type:SN}},
    static:IVoid
}>


const HABaseServiceRoute_arr_fct_name = "df_arr_fct_name" as const
type t_HABaseServiceRoute_arr_fct_name = typeof HABaseServiceRoute_arr_fct_name
export class HABaseServiceRoute<SN extends string , R extends string , t_str_arr_fct extends string = t_HABaseServiceRoute_arr_fct_name, arr_fct extends readonly [...t_df_arr_fct_name,...string[]] = t_df_arr_fct_name,  _Parent extends "AHA_Service" = "AHA_Service"> implements IHA<string,string,t_df_arr_fct_name> {

    //TODO 
    provider(){
        return `static provider = new HA_${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}()` as const 
    }

    //TODO export / export default 
    name : string 
    _routeName: R;
    _serviceName: SN;
    
    generics: readonly { id: string; extends: string }[]
    extends: {id:_Parent,generics:readonly [`t_serviceName_${SN}`,`t_str_${R}`,`req_${R}`,`res_${R}`,`t_unionRegex_mapRegex_${SN}_${R}` ,`t_unionIdPath_mapRegex_${SN}_${R}` , `t_arrClassName_${R}`,`t_unionClassName_${R}` ,`t_arrChilds_${R}` ,  `t_IJsonComponent_${R}`,`t_${t_str_arr_fct}`]}
    implements: [{id:`t_I${_Parent}`,generics:readonly [`t_serviceName_${SN}`,`t_str_${R}`,`req_${R}`,`res_${R}`,`t_unionRegex_mapRegex_${SN}_${R}` ,`t_unionIdPath_mapRegex_${SN}_${R}` , `t_arrClassName_${R}`,`t_unionClassName_${R}` ,`t_arrChilds_${R}` ,  `t_IJsonComponent_${R}`,`t_${t_str_arr_fct}`]}]
    isAbstract: false

    constructor (_serviceName:SN,_routeName : R ,  str_arr_fct : t_str_arr_fct = HABaseServiceRoute_arr_fct_name as any ){
        this._routeName = _routeName
        this._serviceName = _serviceName
        this.name = majFirstChar(this._serviceName)
        this.extends =  {id:("AHA_Service" as _Parent),generics:[`t_serviceName_${this._serviceName}`,`t_str_${this._routeName}`,`req_${this._routeName}`,`res_${this._routeName}`,`t_unionRegex_mapRegex_${this._serviceName}_${this._routeName}` ,`t_unionIdPath_mapRegex_${this._serviceName}_${this._routeName}` , `t_arrClassName_${this._routeName}`,`t_unionClassName_${this._routeName}` ,`t_arrChilds_${this._routeName}` ,  `t_IJsonComponent_${this._routeName}`,`t_${str_arr_fct}`]} as const 
        this.implements = [{id:`t_I${this.extends.id}`,generics:[...this.extends.generics]}]
    }

    st_constructor(){
        return `constructor() {
            super()
        }` as const 
    }

    routeName(){
        return `routeName:${this._routeName}` as const 
    }
    serviceName(){
        return `serviceName:${this._serviceName}` as const 
    }


    
    
    getServiceParam() {
        return `getServiceParam (req:req_${this._routeName} , res : res_${this._routeName}):t_${this.extends.id}_Param<t_serviceName_${this._serviceName},t_str_${this._routeName}>{
            return ${this.extends.id}.getServiceParam<t_serviceName_${this._serviceName},t_str_${this._routeName},req_${this._routeName},res_${this._routeName}>(req,res)
        }` as const
    }

    //TODO blockCode t_1
    getTreeParam() {
        return `getTreeParam< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_${this._routeName} , res : res_${this._routeName},_args:reshapeObject< t_${this.extends.id}_ArgsGetTree<t_serviceName_${this._serviceName},t_str_${this._routeName},BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ):Parameters<typeof ${this.extends.id}._getTree<t_serviceName_${this._serviceName},t_str_${this._routeName},BaseElement,  t_unionRegex_mapRegex_${this._serviceName}_${this._routeName} ,t_unionIdPath_mapRegex_${this._serviceName}_${this._routeName} , t_arrClassName_${this._routeName},t_unionClassName_${this._routeName} ,t_arrChilds_${this._routeName} ,  t_IJsonComponent_${this._routeName}>> { 
            const args = {
                ...HA_${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}.getDfArgsGetTree(),
                ..._args
            } as t_args_getTree<BaseElement>
    
            const param :t_${this.extends.id}_ParamGetTree<t_serviceName_${this._serviceName},t_str_${this._routeName}, BaseElement, t_unionRegex_mapRegex_${this._serviceName}_${this._routeName} ,t_unionIdPath_mapRegex_${this._serviceName}_${this._routeName} , t_arrClassName_${this._routeName},t_unionClassName_${this._routeName} ,t_arrChilds_${this._routeName} ,  t_IJsonComponent_${this._routeName}> = {
                ...this.getServiceParam(req,res),
                ...args.params
            }
            const fct_loading = {
                ...args.fct_loading
            }
            return [param,fct_loading]
        }` as const 
    }
    getTree() {
        return `getTree< BaseElement extends unionClassNameType  ,  UnionRegex  extends t_1  ,UnionIdPath  extends t_2 , ArrUnionClassNameType extends t_3 ,unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType> & t_5  ,  T extends _IJsonComponents< unionClassNameType> & t_6  >(req:req_${this._routeName} , res : res_${this._routeName},_args:reshapeObject< t_${this.extends.id}_ArgsGetTree<t_serviceName_${this._serviceName},t_str_${this._routeName}, BaseElement,UnionRegex ,UnionIdPath , ArrUnionClassNameType,unionClassNameType ,ArrArr ,  T>>= {}  ){
            const params = this.getTreeParam(req,res,_args)
            return ${this.extends.id}._getTree<t_serviceName_${this._serviceName}, t_str_${this._routeName},  BaseElement,t_unionRegex_mapRegex_${this._serviceName}_${this._routeName} ,t_unionIdPath_mapRegex_${this._serviceName}_${this._routeName} , t_arrClassName_${this._routeName},t_unionClassName_${this._routeName} ,t_arrChilds_${this._routeName} ,  t_IJsonComponent_${this._routeName}>(...params)
        }` as const 
    }
    namesOfPipelineFunction() {
        return `namesOfPipelineFunction(){
            return [...${HABaseServiceRoute_arr_fct_name}] as const 
        }`as `namesOfPipelineFunction${string}`  
    }
    [str_getServiceFunction]() {
        return `async ${str_getServiceFunction}( req:req_${this._routeName} , res : res_${this._routeName}  ): t_ha_res{
            const url_toScrap =  req.header.url_toScrap || req.header.url
            const tree = await this.getTree<t_${this._serviceName}_${this._routeName}_rootClassName,t_unionRegex_mapRegex_${this._serviceName}_${this._routeName} ,t_unionIdPath_mapRegex_${this._serviceName}_${this._routeName} , t_arrClassName_${this._routeName},t_unionClassName_${this._routeName} ,t_arrChilds_${this._routeName} ,  t_IJsonComponent_${this._routeName}>(req,res)
            const _date = hours.getTimeNow()
            const mpage = await getBrowsers().then((brwsrsP:BrowsersPool)=>brwsrsP.getMPageFromTargetIdx(req.body.browserId,req.body.targetId))
            const scrapingComponent  = mpage.getScrapingComponent()
            let json = tree.getJsonValue(scrapingComponent.getMapPathPatternToId())
            json = json.res_childs as any
            return {[url_toScrap]:json,[date_field]:_date}
        }` as const 
    }
    [str_getLocalFunction]() {
        return `${str_getLocalFunction}( req:req_${this._routeName} , res : res_${this._routeName}  ): t_ha_res {
            return AService.df_localFunction()
        }` as const 
    }
    transformAfterGetServiceFunction() {
        return `transformAfterGetServiceFunction(req:req_${this._routeName} , res : res_${this._routeName}, _json:Awaited<ReturnType< typeof HA_${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}.provider[t_str_getServiceFunction]>> )  {
            const url_toScrap = req.header.url_toScrap || req.header.url
            let json = ${this.extends.id}.embedItems(_json,url_toScrap,this.getIdRequiredField(item_field))
            res.body.result[url_toScrap] = {...res.body?.result?.[url_toScrap] || {},...json}
            else res.body.result = json
            res.body.nexts=${this.extends.id}._bodyNextsJson(json,this.getIdRequiredField(pagination_field[0]),this.getIdRequiredField(pagination_field[1]))
            return [req,res]as ReqAndResType<req_${this._routeName} , res_${this._routeName}>
        }` as const 
    }

}

const HABaseServiceRoutePage_arr_fct_name = "df_arr_fct_name_withSavePage" as const
type t_HABaseServiceRoutePage_arr_fct_name = typeof HABaseServiceRoutePage_arr_fct_name
export class HABaseServiceRoutePage<SN extends string , R extends string, t_str_arr_fct extends string = t_HABaseServiceRoutePage_arr_fct_name, arr_fct extends readonly [...t_df_arr_fct_name_withSavePage,...string[]] = t_df_arr_fct_name_withSavePage> extends HABaseServiceRoute<SN,R,t_str_arr_fct,arr_fct> implements IHA<string,string,t_df_arr_fct_name_withSavePage> {
    constructor (_serviceName:SN,_routeName : R ,  str_arr_fct : t_str_arr_fct = HABaseServiceRoutePage_arr_fct_name as any ){
        super(_serviceName,_routeName,str_arr_fct)
    }
    
    save_serviceFunction() {
        return `async save_serviceFunction ( req:req_${this._routeName} , res : res_${this._routeName}  )  {
            if(!req.header.isStreaming){

                const prismaClient = this.getDatabaseLocalAndRemote()[AService.getPropsDBFromHeader(req)].getConnection()

                let result : Awaited<ReturnType< typeof HA_${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}.provider[t_str_getServiceFunction]>> = res.body.result
                const url_toScrap = req.header.url_toScrap || req.header.url
                if(AService.isValidResult(result[url_toScrap])) {
                    result = deepCloneJson(result[url_toScrap])
                    type TSample = (IJson & {[id_field]:string} & {[date_field]:string})
                    const rows :TSample[] = Object.values(result[this.getIdRequiredField(item_field)])

                    const param = ${this.extends.id}.getSavePageParam(prismaClient , str_${this._routeName} ,id_field, date_field , rows , req.header.needUpdate )
                    await ${this.extends.id}._save_serviceFunction(param)
                }   
            }    
    }`as const 
    }
    namesOfPipelineFunction() {
        return `namesOfPipelineFunction(){
            return [...${HABaseServiceRoutePage_arr_fct_name}] as const 
        }`as `namesOfPipelineFunction${string}`
    }
}

const HAServiceNextPage_arr_fct_name = "df_arr_fct_name_withNextPage" as const
type t_HAServiceNextPage_arr_fct_name = typeof HAServiceNextPage_arr_fct_name
export class HAServiceNextPage<SN extends string , R extends string, t_str_arr_fct extends string = t_HAServiceNextPage_arr_fct_name, arr_fct extends readonly [...t_df_arr_fct_name_withNextPage,...string[]] =t_df_arr_fct_name_withNextPage > extends HABaseServiceRoutePage<SN,R,t_str_arr_fct,arr_fct> implements IHA<string,string,t_df_arr_fct_name_withNextPage> {
    constructor (_serviceName:SN,_routeName : R ,  str_arr_fct : t_str_arr_fct = HAServiceNextPage_arr_fct_name as any ){
        super(_serviceName,_routeName,str_arr_fct)
    }
    
    getNextPage() {
        return `async getNextPage(req:req_${this._routeName} , res : res_${this._routeName}): t_ha_res{
            return ${this.extends.id}._getNextPage <t_serviceName_${this._serviceName},t_str_${this._routeName}, t_concatRouteNameClassName<t_str_${this._routeName},t_rootClassName>  ,t_unionRegex_mapRegex_${this._serviceName}_${this._routeName} ,t_unionIdPath_mapRegex_${this._serviceName}_${this._routeName} , t_arrClassName_${this._routeName},t_unionClassName_${this._routeName} ,t_arrChilds_${this._routeName} ,  t_IJsonComponent_${this._routeName}>(
            ...this.getTreeParam<t_${this._serviceName}_${this._routeName}_rootClassName,  t_unionRegex_mapRegex_${this._serviceName}_${this._routeName} ,t_unionIdPath_mapRegex_${this._serviceName}_${this._routeName} , t_arrClassName_${this._routeName},t_unionClassName_${this._routeName} ,t_arrChilds_${this._routeName} ,  t_IJsonComponent_${this._routeName}>(req,res))
        }`as const 
    }
    nextPage() {
        return `async nextPage(req:req_${this._routeName} , res : res_${this._routeName} )  {
            return ${this.extends.id}._nextPage(this.getNextPageParam(req,res))
        }`as const 
    }
    transformAfterNextPage(){
        return `transformAfterNextPage(req:req_${this._routeName} , res : res_${this._routeName}, json:Awaited<ReturnType< typeof HA_${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}.provider[t_str_nextPage]>> )  { 
            res.body.nexts = json.nexts 
            let new_req = deepCloneJson(req)
            new_req.header.url = json.url
            new_req.header.url_toScrap = json.url_toScrap
            return [new_req,res]as ReqAndResType<req_${this._routeName} , res_${this._routeName}>
        }` as const 
    
    }
    transformAfterGetNextPage(){
        return `transformAfterGetNextPage(req:req_${this._routeName} , res : res_${this._routeName}, json:Awaited<ReturnType< typeof HA_${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}.provider[t_str_getNextPage]>> )  {
            const url_toScrap = req.header.url_toScrap || req.header.url
            res.body.nexts = ${this.extends.id}._bodyNextsJson(json[url_toScrap]],this.getIdRequiredField(pagination_field[0]),this.getIdRequiredField(pagination_field[1]))
            return [req,res]as ReqAndResType<req_${this._routeName} , res_${this._routeName}>
        }`as const 
    }
    getNextPageParam() {
        return `getNextPageParam(req:req_${this._routeName} , res : res_${this._routeName}){
            return ${this.extends.id}.getNextPageParam<t_serviceName_${this._serviceName},t_str_${this._routeName},req_${this._routeName},res_${this._routeName}>(req,res)
        }` as const 
    }
    namesOfPipelineFunction() {
        return `namesOfPipelineFunction(){
            return [...${HAServiceNextPage_arr_fct_name}] as const 
        }`as `namesOfPipelineFunction${string}`
    }

}
