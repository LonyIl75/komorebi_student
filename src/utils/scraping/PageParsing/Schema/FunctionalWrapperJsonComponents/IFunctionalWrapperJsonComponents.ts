import getCurrentLine from "get-current-line"
import { IFunctionalWrapperIJson, getConfig, t_IFunctionalWrapperIJson_getConfig } from "@shared/m_json.js"
import { t_agreg_path } from "@shared/routePath.js"
import { arrToUnion, NestedArray, t_function, t_function_staticToMember, t_this_get_function, t_this_set_function } from "@shared/type.js"
import { Component } from "../Component/Component.js"
import { FunctionalWrapperJsonComponent } from "./FunctionalWrapperJsonComponents.js"
import { str_get_map_compoIdToChildIds, str_map_compoIdToChildIds, str_set_map_compoIdToChildIds, t_map_compoIdToChildIds } from "./types.js"
import { IJsonComponents } from "./JsonComponents/JsonComponents.js"
import { t_cst_buildFromFWJson, t_cst_jsonComponent } from "./JsonComponents/buildProvider.js"
import { getSuperArrClassname, getSuperUnionclassname, getSuperArrArr, getSuper_IJsonComponent, fieldName_st_cst_jsonComponent, fieldName_st_cst_buildFromFWJson, str_get_jsonArr_component_json, str_jsonArr_component_json, str_get_arrClassNameAndChildsComponents, str_arrClassNameAndChildsComponents, str_get_arrClassName, str_arrClassName, str_set_jsonArr_component_json, str_set_arrClassNameAndChildsComponents, str_set_arrClassName, getSubArrComponent } from "./JsonComponents/types.js"
import { _IJsonComponents } from "./_JsonComponents/_JsonComponents.js"
import { t_arr_component, t_getClassNameTypeFromArrComponent, t_rootClassName } from "../../types.js"
import { t_childsSelectors, t_str_childs_selectors } from "../_Component/types.js"
import { timer_human_isdebugging } from "@/utils/scraping/primitives/timer_human_actions.js"
import { IVoid, createJsonFromMap } from "@shared/m_object.js"


type _t_st_cst_buildFromFWJson<ArrUnionClassNameType extends readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType>, ArrArr extends t_arr_component<unionClassNameType> ,  
T extends _IJsonComponents<unionClassNameType>>= 
<ArrUnionClassNameType_2 extends readonly string[],unionClassNameType_2 extends arrToUnion<ArrUnionClassNameType_2> ,ArrArr_2 extends t_arr_component<unionClassNameType_2,string> , T_2 extends _IJsonComponents<unionClassNameType_2 > >
(...args:Parameters<t_cst_buildFromFWJson<ArrUnionClassNameType_2,unionClassNameType_2,ArrArr_2,T_2,ArrUnionClassNameType,unionClassNameType,ArrArr,T>>)=>
ReturnType<t_cst_buildFromFWJson<ArrUnionClassNameType_2,unionClassNameType_2,ArrArr_2,T_2,ArrUnionClassNameType,unionClassNameType,ArrArr,T>>

type t_st_cst_buildFromFWJson<ArrUnionClassNameType extends readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType>, ArrArr extends t_arr_component<unionClassNameType> ,  
T extends _IJsonComponents<unionClassNameType>>= 
_t_st_cst_buildFromFWJson<ArrUnionClassNameType,unionClassNameType,ArrArr,T>


export type t_st_cst_buildFromFWJson_toClassMember<ArrUnionClassNameType extends readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType>, ArrArr extends t_arr_component<unionClassNameType> ,  
T extends _IJsonComponents< unionClassNameType>> = 
t_st_cst_buildFromFWJson<ArrUnionClassNameType,unionClassNameType,ArrArr,T> extends infer A ? A extends t_function ? 
t_function_staticToMember<A>
:never : never 


type t_ret_value_findPathOfIdComponent<ArrUnionClassNameType extends readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType>> = (t_agreg_path<unionClassNameType,unionClassNameType>| undefined)
export type t_ret__findPathOfIdComponent<ArrUnionClassNameType extends readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType>> = NestedArray<t_ret_value_findPathOfIdComponent<ArrUnionClassNameType,unionClassNameType> >
export type t_ret_findPathOfIdComponent<ArrUnionClassNameType extends readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType>> = Array<Exclude<t_ret_value_findPathOfIdComponent<ArrUnionClassNameType,unionClassNameType>,""|undefined> >



export type getSuperFwJsonComponent<
unionClassNameType extends arrToUnion<ArrUnionClassNameType> , 
unionClassNameTypeSup extends arrToUnion<ArrUnionClassNameTypeSup> ,
ArrUnionClassNameType extends readonly string[],
ArrUnionClassNameTypeSup extends readonly string[] ,
ArrArr extends t_arr_component<unionClassNameType,string> ,
ArrArr_2 extends t_arr_component<unionClassNameTypeSup,string> ,
T extends _IJsonComponents<unionClassNameType> ,
T_2 extends _IJsonComponents<unionClassNameTypeSup> ,
ArrUnionClassNameType3 extends readonly string[] =getSuperArrClassname<ArrUnionClassNameType,ArrUnionClassNameTypeSup>,
unionClassNameType3 extends arrToUnion<ArrUnionClassNameType3> = getSuperUnionclassname<unionClassNameType ,unionClassNameTypeSup ,ArrUnionClassNameType,ArrUnionClassNameTypeSup>,
_ArrArr_3 extends t_arr_component<unionClassNameType3> = null ,
T_3 extends _IJsonComponents< unionClassNameType3 > = getSuper_IJsonComponent< unionClassNameType,unionClassNameTypeSup,ArrUnionClassNameType,ArrUnionClassNameTypeSup,T,T_2> 
>  = (null extends _ArrArr_3?getSuperArrArr<unionClassNameType,unionClassNameTypeSup,ArrUnionClassNameType,ArrUnionClassNameTypeSup,ArrArr,ArrArr_2> :_ArrArr_3) extends infer ArrArr_3?
ArrArr_3 extends t_arr_component<unionClassNameType3>?
IFunctionalWrapperJsonComponent<ArrUnionClassNameType3,unionClassNameType3,ArrArr_3,T_3>
:never :never


export type t_subJsonComponent <ArrUnionClassNameType extends readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType> , 
ArrUnionClassNameType_2 extends readonly unionClassNameType[] , ArrArr extends t_arr_component<unionClassNameType>,
unionClassNameType_2 extends arrToUnion<ArrUnionClassNameType_2>  =   arrToUnion<ArrUnionClassNameType_2>  ,
arrChilds_2 extends t_arr_component<unionClassNameType_2> = getSubArrComponent<ArrUnionClassNameType,ArrUnionClassNameType_2,ArrArr>  
>  = 
/*ArrUnionClassNameType_2 extends [] ?
FunctionalWrapperJsonComponent<ArrUnionClassNameType_2,never,[],IVoid>:*/
FunctionalWrapperJsonComponent<ArrUnionClassNameType_2,unionClassNameType_2,arrChilds_2,_IJsonComponents< unionClassNameType_2>>



type t_getAddedJsonComponent <ArrUnionClassNameType extends readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType>, ArrArr extends t_arr_component<unionClassNameType> ,  
T extends _IJsonComponents< unionClassNameType>> =
<ArrUnionClassNameType_2 extends readonly string[],unionClassNameType_2 extends arrToUnion<ArrUnionClassNameType_2> ,ArrArr_2 extends t_arr_component<unionClassNameType_2> , T_2 extends _IJsonComponents< unionClassNameType_2> > 
(toAddJsonComponent : FunctionalWrapperJsonComponent <ArrUnionClassNameType_2,unionClassNameType_2 , ArrArr_2,  T_2> )=> getSuperFwJsonComponent< unionClassNameType , unionClassNameType_2 , ArrUnionClassNameType ,ArrUnionClassNameType_2 , ArrArr , ArrArr_2 ,T,T_2 > 


export const str_map_compoIdToChildIds_toJson =  `${str_map_compoIdToChildIds}ToJson`as const 
export type t_fct_mapCompoIdToChildsIds_toJson<unionClassNameType extends string>  = ReturnType<typeof createJsonFromMap<unionClassNameType,unionClassNameType[]>>


type fdxcfv = t_this_get_function< t_IFunctionalWrapperIJson_getConfig<IFunctionalWrapperIJson < any ,{[str_jsonArr_component_json]:number} >>,
typeof str_jsonArr_component_json>

export interface IFunctionalWrapperJsonComponent<ArrUnionClassNameType extends readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType>, ArrArr extends t_arr_component<unionClassNameType> ,  
T extends _IJsonComponents< unionClassNameType> , _J extends IJsonComponents<ArrUnionClassNameType,unionClassNameType,ArrArr> =  IJsonComponents<ArrUnionClassNameType,unionClassNameType,ArrArr>
, _C extends FunctionalWrapperJsonComponentConfig<ArrUnionClassNameType,unionClassNameType,ArrArr,T> =  FunctionalWrapperJsonComponentConfig<ArrUnionClassNameType,unionClassNameType,ArrArr,T> 
> extends IFunctionalWrapperIJson <  IJsonComponents<ArrUnionClassNameType,unionClassNameType,ArrArr> ,_C > {
    //cst_jsonComponent<unionClassNameType extends  string, T extends t_arr_component<unionClassNameType> >(jsonArr_component_json:_IJsonComponents<unionClassNameType>,arrClassNameAndChildsComponents : T) :IJsonComponents< t_getClassNameTypeFromArrComponent<unionClassNameType,T>, t_getChildTypeFromArrComponent<  unionClassNameType,T>>
    [fieldName_st_cst_jsonComponent] :t_cst_jsonComponent<ArrUnionClassNameType,unionClassNameType,ArrArr,T>
    
    [fieldName_st_cst_buildFromFWJson]:<ArrUnionClassNameType_2 extends readonly string[],unionClassNameType_2 extends arrToUnion<ArrUnionClassNameType_2>, ArrArr_2 extends t_arr_component<unionClassNameType_2,string> , T_2 extends _IJsonComponents<unionClassNameType_2 >>
    ( before_this :FunctionalWrapperJsonComponentConfig <ArrUnionClassNameType_2 ,unionClassNameType_2, ArrArr_2,T_2>)=>ReturnType<t_cst_buildFromFWJson<ArrUnionClassNameType_2,unionClassNameType_2,ArrArr_2,T_2,ArrUnionClassNameType,unionClassNameType,ArrArr,T>>
    
    //t_st_cst_buildFromFWJson_toClassMember<ArrUnionClassNameType, unionClassNameType, ArrArr, T>;

    getArrChildsSelectorsFromArrKey (arr_path_className ?: ArrUnionClassNameType):t_childsSelectors|typeof Component.df[t_str_childs_selectors]

    _findPathOfIdComponent(id_component : unionClassNameType,_rootClassName?:unionClassNameType|t_rootClassName) : t_ret__findPathOfIdComponent<ArrUnionClassNameType,unionClassNameType>
    findPathOfIdComponent(id_component : unionClassNameType,_rootClassName?:unionClassNameType|t_rootClassName) : t_ret_findPathOfIdComponent<ArrUnionClassNameType,unionClassNameType>

    getSelectorAndAttributeComponentFromPaths(paths_to_nextComponent :  t_ret_findPathOfIdComponent<ArrUnionClassNameType,unionClassNameType>)

    getSelectorAndAttributeComponentFromId(_id_component : unionClassNameType,_rootClassName?:unionClassNameType|t_rootClassName)


    rootClassName : t_rootClassName //TODO 
    [str_map_compoIdToChildIds]:t_map_compoIdToChildIds<unionClassNameType>
    [str_get_map_compoIdToChildIds]:()=>t_map_compoIdToChildIds<unionClassNameType>
    [str_set_map_compoIdToChildIds]:(arg:t_map_compoIdToChildIds<unionClassNameType>)=>void
    [str_map_compoIdToChildIds_toJson] :()=>t_fct_mapCompoIdToChildsIds_toJson<unionClassNameType>

    [str_get_jsonArr_component_json]:t_this_get_function< t_IFunctionalWrapperIJson_getConfig<IFunctionalWrapperIJson < _J ,_C >>,
    typeof str_jsonArr_component_json>
    [str_get_arrClassNameAndChildsComponents]:t_this_get_function<t_IFunctionalWrapperIJson_getConfig<IFunctionalWrapperIJson < _J ,_C >>,
    typeof str_arrClassNameAndChildsComponents>
    [str_get_arrClassName]:t_this_get_function<t_IFunctionalWrapperIJson_getConfig<IFunctionalWrapperIJson < _J ,_C >>,
    typeof str_arrClassName>
    

    //getElementFromMapCompoIdToChildIds:t_map_get_function<this["map_compoIdToChildIds"]>

    [str_set_jsonArr_component_json]:t_this_set_function<t_IFunctionalWrapperIJson_getConfig<IFunctionalWrapperIJson < _J ,_C >>,
    typeof str_jsonArr_component_json>
    [str_set_arrClassNameAndChildsComponents]:t_this_set_function<t_IFunctionalWrapperIJson_getConfig<IFunctionalWrapperIJson < _J ,_C >>,
    typeof str_arrClassNameAndChildsComponents>
    [str_set_arrClassName]:t_this_set_function<t_IFunctionalWrapperIJson_getConfig<IFunctionalWrapperIJson < _J ,_C >>,
    typeof str_arrClassName>

    //getElementFromMapCompoIdToChildIds:t_map_get_function<this["map_compoIdToChildIds"]>


    getAddedJsonComponent : t_getAddedJsonComponent<ArrUnionClassNameType,unionClassNameType,ArrArr,T>
    
    getSubJsonComponent< ArrUnionClassNameType_2 extends  readonly unionClassNameType[]   > (_listOfComponent : ArrUnionClassNameType_2  ):t_subJsonComponent <ArrUnionClassNameType ,unionClassNameType ,ArrUnionClassNameType_2 , ArrArr > 

    getAddedSubJsonComponent <ArrUnionClassNameType_2 extends  readonly string[],
    unionClassNameType_2 extends arrToUnion<ArrUnionClassNameType_2> ,
    ArrArr_2 extends t_arr_component<unionClassNameType_2> ,
    T_2 extends _IJsonComponents< unionClassNameType_2>,
    t_subsetList extends readonly unionClassNameType_2[] >
    ( listOfComponent : t_subsetList,jsonComponentBis : FunctionalWrapperJsonComponent <ArrUnionClassNameType_2,unionClassNameType_2 , ArrArr_2,  T_2> )

    toJson:()=>(IJsonComponents<ArrUnionClassNameType,unionClassNameType,ArrArr> & FunctionalWrapperJsonComponentConfig<ArrUnionClassNameType,unionClassNameType,ArrArr,T>) & {[str_map_compoIdToChildIds]:t_fct_mapCompoIdToChildsIds_toJson<unionClassNameType>}
}


export type t_FunctionalWrapperJsonComponentConfig_any  = FunctionalWrapperJsonComponentConfig<any,any,any,any> 

export class FunctionalWrapperJsonComponentConfig <ArrUnionClassNameType extends readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,
ArrArr extends t_arr_component<unionClassNameType,string> , T extends _IJsonComponents<unionClassNameType> >{
    jsonArr_component_json:T
    arrClassName : ArrUnionClassNameType 
    arrClassNameAndChildsComponents : ArrArr
 
    constructor(arrClassName : ArrUnionClassNameType ,arrClassNameAndChildsComponents : ArrArr,jsonArr_component_json:T){ /*console.log("DEBUG_ME",getCurrentLine());*/
        this.arrClassName = arrClassName
        this.arrClassNameAndChildsComponents =arrClassNameAndChildsComponents 
        this.jsonArr_component_json =jsonArr_component_json
    }
}

export type t_key_FunctionalWrapperJsonComponentConfig = keyof t_FunctionalWrapperJsonComponentConfig_any
