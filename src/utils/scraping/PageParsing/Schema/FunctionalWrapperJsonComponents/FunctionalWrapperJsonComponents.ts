import getCurrentLine from "get-current-line"
import {FunctionalWrapperJson, getConfigPropName, setConfig, setJson, getJson, getConfig } from "@shared/m_json.js"
import { IVoid, createJsonFromMap, createMapFromArrArr, getEmptyJson, revertMap } from "@shared/m_object.js"
import { isNotFoundIdx } from "@shared/m_primitives.js"
import { createAddressBis, char_join_pathRoutes, unjoin_pathRoutes, t_char_join_pathRoutes } from "@shared/routePath.js"
import { arrToUnion, arrArrToUnion, _notFoundIdx, t_notFoundIdx } from "@shared/type.js"
import { Component } from "../Component/Component.js"

import { str_get_map_compoIdToChildIds, str_map_compoIdToChildIds, str_set_map_compoIdToChildIds, t_map_compoIdToChildIds } from "./types.js"
import { IFunctionalWrapperJsonComponent, getSuperFwJsonComponent, FunctionalWrapperJsonComponentConfig, t_ret__findPathOfIdComponent, t_ret_findPathOfIdComponent, t_st_cst_buildFromFWJson_toClassMember, t_subJsonComponent, str_map_compoIdToChildIds_toJson } from "./IFunctionalWrapperJsonComponents.js"
import { IJsonComponents, t_union_IComponent } from "./JsonComponents/JsonComponents.js"
import S_FunctionalWrapperJsonComponent, { t_cst_buildFromFWJson, t_cst_jsonComponent } from "./JsonComponents/buildProvider.js"
import { fieldName_st_cst_jsonComponent, fieldName_st_cst_buildFromFWJson, str_get_jsonArr_component_json, str_jsonArr_component_json, str_get_arrClassNameAndChildsComponents, str_arrClassNameAndChildsComponents, str_get_arrClassName, str_arrClassName, str_set_jsonArr_component_json, str_set_arrClassNameAndChildsComponents, str_set_arrClassName, fieldName_cst_jsonComponents, fieldName_cst_buildFromFWJson, getSubArrComponent, getSuperArrClassname, getSuperArrArr, getSuper_IJsonComponent } from "./JsonComponents/types.js"
import { _IJsonComponents } from "./_JsonComponents/_JsonComponents.js"
import { selectors } from "@/utils/scraping/DOMElements/Selector/_Selector/type.js"
import ChildAttributeType from "../_Component/ChildAttributeType/ChildAttributeType.js"
import { _IComponent } from "../_Component/_Component.js"
import { t_childsSelectors, t_str_childs_selectors, t_childSelector, str_childs_selectors } from "../_Component/types.js"
import { StrChildType } from "../../TypeChilds/types.js"
import { t_arr_component, t_rootClassName, rootClassName, isInvalidClassName, t_getChildTypeFromArrComponent, getIdxComponentClassName } from "../../types.js"


export type t_FunctionalWrapperJsonComponent_any = FunctionalWrapperJsonComponent<any,any,any,any>


export class FunctionalWrapperJsonComponent <ArrUnionClassNameType extends  readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,
 ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents<unionClassNameType>,
 _C extends FunctionalWrapperJsonComponentConfig<ArrUnionClassNameType,unionClassNameType,ArrArr,T> =  FunctionalWrapperJsonComponentConfig<ArrUnionClassNameType,unionClassNameType,ArrArr,T> 
 
 > 
 
extends FunctionalWrapperJson < IJsonComponents<ArrUnionClassNameType,unionClassNameType,ArrArr>,_C >  implements  IFunctionalWrapperJsonComponent < ArrUnionClassNameType,unionClassNameType , ArrArr , T > {

    [fieldName_st_cst_jsonComponent]: t_cst_jsonComponent<ArrUnionClassNameType, unionClassNameType, ArrArr, T>;
    [fieldName_st_cst_buildFromFWJson]: <ArrUnionClassNameType_2 extends readonly string[],unionClassNameType_2 extends arrToUnion<ArrUnionClassNameType_2>, ArrArr_2 extends t_arr_component<unionClassNameType_2,string> , T_2 extends _IJsonComponents<unionClassNameType_2 >>
    ( before_this :FunctionalWrapperJsonComponentConfig <ArrUnionClassNameType_2 ,unionClassNameType_2, ArrArr_2,T_2>)=>ReturnType<t_cst_buildFromFWJson<ArrUnionClassNameType_2,unionClassNameType_2,ArrArr_2,T_2,ArrUnionClassNameType,unionClassNameType,ArrArr,T>>
    
    [str_get_jsonArr_component_json](){
       return this[getConfigPropName](str_jsonArr_component_json)
    }
    [str_get_arrClassNameAndChildsComponents](){
        return this[getConfigPropName](str_arrClassNameAndChildsComponents)
    }
    [str_get_arrClassName](){
        return this[getConfigPropName](str_arrClassName)
    }
    [str_get_map_compoIdToChildIds](){
        return this[str_map_compoIdToChildIds] 
    }

    [str_set_jsonArr_component_json](_jsonArr_component_json:T){ 
        this[setConfig](str_jsonArr_component_json,_jsonArr_component_json)
    }
    [str_set_arrClassNameAndChildsComponents](_arrClassNameAndChildsComponents : ArrArr ){ 
        this[setConfig](str_arrClassNameAndChildsComponents,_arrClassNameAndChildsComponents)
    }
    [str_set_arrClassName](_arrClassName : ArrUnionClassNameType){ 
        this[setConfig](str_arrClassName,_arrClassName)
    }


    toJson(){
        return {
            ...super.toJson(),
            [str_map_compoIdToChildIds]: {...this[str_map_compoIdToChildIds_toJson]()}
        }

    }
    rootClassName:t_rootClassName
    
    [str_map_compoIdToChildIds] : t_map_compoIdToChildIds<unionClassNameType>
    [str_set_map_compoIdToChildIds](_map_compoIdToChildIds:t_map_compoIdToChildIds<unionClassNameType>){ 
        this[str_map_compoIdToChildIds] = _map_compoIdToChildIds
    }
    [str_map_compoIdToChildIds_toJson](){
        return createJsonFromMap(this[str_get_map_compoIdToChildIds]()) 
    }


    constructor(_arrClassName: ArrUnionClassNameType ,_arrClassNameAndChildsComponents : ArrArr,_jsonArr_component_json:T,_cst_jsonComponent ?:t_cst_jsonComponent<ArrUnionClassNameType,unionClassNameType,ArrArr,T>,_cst_buildFromFWJson ?: <ArrUnionClassNameType_2 extends readonly string[],unionClassNameType_2 extends arrToUnion<ArrUnionClassNameType_2>, ArrArr_2 extends t_arr_component<unionClassNameType_2,string> , T_2 extends _IJsonComponents<unionClassNameType_2 >>( before_this :FunctionalWrapperJsonComponentConfig <ArrUnionClassNameType_2 ,unionClassNameType_2, ArrArr_2,T_2>)=> ReturnType<t_cst_buildFromFWJson<ArrUnionClassNameType_2,unionClassNameType_2,ArrArr_2,T_2,ArrUnionClassNameType,unionClassNameType,ArrArr,T>>){
        super()
        this[fieldName_st_cst_jsonComponent] = _cst_jsonComponent ? _cst_jsonComponent : S_FunctionalWrapperJsonComponent.df_provider[fieldName_cst_jsonComponents]
        
        this[fieldName_st_cst_buildFromFWJson] =  _cst_buildFromFWJson ?_cst_buildFromFWJson : <ArrUnionClassNameType_2 extends readonly string[],unionClassNameType_2 extends arrToUnion<ArrUnionClassNameType_2>, ArrArr_2 extends t_arr_component<unionClassNameType_2,string> , T_2 extends _IJsonComponents<unionClassNameType_2 >>( before_this :FunctionalWrapperJsonComponentConfig <ArrUnionClassNameType_2 ,unionClassNameType_2, ArrArr_2,T_2>)=>S_FunctionalWrapperJsonComponent.df_provider[fieldName_cst_buildFromFWJson](this,before_this)

        this[str_set_arrClassName](_arrClassName)
        this[str_set_arrClassNameAndChildsComponents]( _arrClassNameAndChildsComponents)
        this[str_set_jsonArr_component_json] (_jsonArr_component_json)
        const iJsonComponent = this[fieldName_st_cst_jsonComponent](this[str_get_jsonArr_component_json](),this[str_get_arrClassNameAndChildsComponents]() )
        this[setJson](iJsonComponent)

        let _ma = createMapFromArrArr<readonly (StrChildType.t_childType<unionClassNameType>|undefined)[],ArrArr,unionClassNameType,unionClassNameType>(this[str_get_arrClassNameAndChildsComponents](),
            (key:any,val:any)=>{ 
                return val? val[0] !== undefined ? val.map((_val)=>StrChildType._childTypeToCompClassname<StrChildType.t_childType<unionClassNameType>>(_val)) : val :val 
                }
             )
        let ma = revertMap<unionClassNameType,unionClassNameType>(_ma)

        this[str_set_map_compoIdToChildIds](ma)
        this.rootClassName = rootClassName 
    
    }

    _findPathOfIdComponent(id_component : unionClassNameType,_rootClassName ?: unionClassNameType|t_rootClassName ) : t_ret__findPathOfIdComponent<ArrUnionClassNameType,unionClassNameType>{

        if(_rootClassName== undefined) _rootClassName=this.rootClassName
        if(isInvalidClassName(_rootClassName))throw new Error(`rootClassName ${_rootClassName} is invalidClassName`)
        const recur = (id_comp_toFind : unionClassNameType ,rootClassName : unionClassNameType|t_rootClassName , path : string ="") =>{  
            const n_path = createAddressBis<string,string,unionClassNameType>(id_comp_toFind,path as any )
            if(id_comp_toFind === rootClassName) return  createAddressBis<typeof n_path , typeof n_path , t_char_join_pathRoutes> (char_join_pathRoutes,n_path) //this.arrClassName[0] === rootClassName
            const parents_found = this[str_get_map_compoIdToChildIds]().get(id_comp_toFind)  
            if(parents_found === undefined) return undefined
            return (Array.isArray(parents_found)? parents_found : [parents_found]).map((parent_found)=>{ 
                    return recur(parent_found,rootClassName,n_path)
            })
            
        }
        return recur(id_component,_rootClassName)
    }
    findPathOfIdComponent(id_component : unionClassNameType,_rootClassName ?: unionClassNameType|t_rootClassName) :t_ret_findPathOfIdComponent<ArrUnionClassNameType,unionClassNameType> {
        //@ts-ignore
        return this. _findPathOfIdComponent(id_component,_rootClassName).flat(Infinity).filter((_)=>_) 
        
    }

    getSelectorAndAttributeComponentFromPaths(paths_to_nextComponent :  t_ret_findPathOfIdComponent<ArrUnionClassNameType,unionClassNameType>){ 

        type _t = {class_name : unionClassNameType , selectors:selectors,attributes?:Array<ChildAttributeType>}

        let arrArrSelector : (_t [])[] = []

        for( const path_to_nextComponent of paths_to_nextComponent){ 
            const componentsIds = unjoin_pathRoutes<unionClassNameType>(path_to_nextComponent)
            let _arrArrSelector : _t [] = []
            for( let i =0 ;i < componentsIds.length ; i++){ 
                const componentId = componentsIds[i]
                const childId  =  StrChildType.compClassnameToChildType(componentsIds[i+1]) 
                const idx_child = i+1 == componentsIds.length ? 0 : Component.getIndexOfChildClassName(this[getJson]()[componentId],childId)
                const selector_child = ((this[getJson]()[componentId]) as Component<unionClassNameType>).childs_selectors[idx_child] 
                const attributes_child = ((this[getJson]()[componentId]) as Component<unionClassNameType>).childs_attributes //TODO-IMP : childs_attributes est utilisé dans la classe Component a la place de attributes clarifier 
                _arrArrSelector.push(attributes_child ?  {class_name : componentId,selectors:selector_child,attributes:attributes_child} :  {class_name : componentId, selectors:selector_child}  )
            }
            if(_arrArrSelector.length)arrArrSelector.push(_arrArrSelector)
        }

        return arrArrSelector
    }

    getSelectorAndAttributeComponentFromId(_id_component : unionClassNameType,_rootClassName ?: unionClassNameType|t_rootClassName){ 
        const paths_to_nextComponent = this.findPathOfIdComponent(_id_component,_rootClassName)
        return this.getSelectorAndAttributeComponentFromPaths(paths_to_nextComponent)
    }

    getArrChildsSelectorsFromArrKey (arr_path_className ?: ArrUnionClassNameType):t_childsSelectors|typeof Component.df[t_str_childs_selectors] {


        type unionChilds = arrArrToUnion<t_getChildTypeFromArrComponent<unionClassNameType,ArrArr>> extends infer R1 ? R1 extends unionClassNameType ? R1 : never : never 
        
        if(arr_path_className === undefined )arr_path_className = this[str_get_arrClassName]()
        
        let key = arr_path_className[0]
        let child_selectors :[ ... readonly t_childSelector[] ]  = []
        let element : t_union_IComponent<unionClassNameType , unionChilds> = {} as  t_union_IComponent<unionClassNameType, unionClassNameType>
        let idx_element :number  = _notFoundIdx()

        for (let idx = 0 ; idx < arr_path_className.length -1 ; idx++) { 
            key = arr_path_className[idx]
            element = this[getJson]()[key]
            idx_element = Component.getIndexOfChildClassName(element,StrChildType.compClassnameToChildType(arr_path_className[idx+1]))
            if(isNotFoundIdx(idx_element)) return Component.df[str_childs_selectors]
            child_selectors.push(Component.getChilds_selectors(element)[idx_element])
        } 
    
        return child_selectors as typeof child_selectors
  
    }

    getAddedJsonComponent 
    <ArrUnionClassNameType_2 extends  readonly string[],unionClassNameType_2 extends arrToUnion<ArrUnionClassNameType_2> ,ArrArr_2 extends t_arr_component<unionClassNameType_2> , T_2 extends _IJsonComponents< unionClassNameType_2 >>
    (toAddJsonComponent : FunctionalWrapperJsonComponent <ArrUnionClassNameType_2,unionClassNameType_2 , ArrArr_2,  T_2> ): getSuperFwJsonComponent< unionClassNameType , unionClassNameType_2 , ArrUnionClassNameType ,ArrUnionClassNameType_2 , ArrArr , ArrArr_2,T,T_2  >  
    {

        type ArrUnionClassNameType_3= getSuperArrClassname<ArrUnionClassNameType,ArrUnionClassNameType_2> 
        type unionClassNameType_3 =arrToUnion<ArrUnionClassNameType_3>
        type ArrArr_3 = getSuperArrArr<unionClassNameType,unionClassNameType_2,ArrUnionClassNameType,ArrUnionClassNameType_2,ArrArr ,ArrArr_2 > extends infer AA ? AA extends t_arr_component<unionClassNameType_3> ? AA :never :never 
        type T_3 =getSuper_IJsonComponent<unionClassNameType,unionClassNameType_2,ArrUnionClassNameType,ArrUnionClassNameType_2,T,T_2>
        
        let nw_arrClassName  : ArrUnionClassNameType_3 = [...this[str_get_arrClassName](),...toAddJsonComponent[str_get_arrClassName]()]
        let nw_arrClassNameAndChildsComponents : ArrArr_3  = [...this[str_get_arrClassNameAndChildsComponents](),...toAddJsonComponent[str_get_arrClassNameAndChildsComponents]()] as any  
        
        
        let nw_jsonArr_component_json :T_3 = {...this[str_get_jsonArr_component_json](),...toAddJsonComponent[str_get_jsonArr_component_json]()} as any

        let res = new FunctionalWrapperJsonComponent<ArrUnionClassNameType_3,unionClassNameType_3,ArrArr_3,T_3>(nw_arrClassName,nw_arrClassNameAndChildsComponents,nw_jsonArr_component_json)
        return res  as any 

    }

    //TODO : NewRoot type FunctionalWrapper 
    getSubJsonComponent< ArrUnionClassNameType_2 extends  readonly unionClassNameType[]   > (listOfComponent : ArrUnionClassNameType_2  )
    :t_subJsonComponent <ArrUnionClassNameType ,unionClassNameType ,  ArrUnionClassNameType_2  , ArrArr > 

    {

        //if(listOfComponent.length == 0) { 
            //return  new FunctionalWrapperJsonComponent<ArrUnionClassNameType_2,never,[],IVoid>(listOfComponent,[],getEmptyJson()) as any // as t_subJsonComponent<ArrUnionClassNameType ,unionClassNameType ,[], ArrArr > 
        //}

        type unionClassNameType_2 = arrToUnion<ArrUnionClassNameType_2>
        type ArrArr_2 = getSubArrComponent<ArrUnionClassNameType,ArrUnionClassNameType_2,ArrArr>    
        type T_2 = _IJsonComponents<  unionClassNameType_2>

        

        const fct_getMonoClassNameAndChildsComponents = (idx : number , fct_test: (className : unionClassNameType)=> boolean )=>{ 
            let cur   = this[str_get_arrClassNameAndChildsComponents]()[idx] 
            let curClassName = cur[getIdxComponentClassName]
            if(fct_test(curClassName)) return {className : curClassName, arrChilds : cur }
            else return _notFoundIdx()
        }

        const fct_getMonoJsonArrComponent = (curClassName : unionClassNameType)=>{ 
            return this[getJson]()[curClassName]
        }       

        let [acc_arrClassName , acc_jsonArr_component_json ] =  [[] as any  , {}as any ]
        let tmp_arrChilds : ReturnType<typeof fct_getMonoClassNameAndChildsComponents>  
        let convert_tmp_arrChilds : Exclude<typeof tmp_arrChilds, t_notFoundIdx> = {} as any
        tmp_arrChilds = _notFoundIdx()
        let tmp_json : _IComponent = undefined 
        let cur_className : unionClassNameType = undefined as any

        let idx : number = 0  
        for (; idx <this[str_get_arrClassNameAndChildsComponents]().length ; idx++) {
            tmp_arrChilds = fct_getMonoClassNameAndChildsComponents(idx,(curClassName : unionClassNameType ) => !isNotFoundIdx(listOfComponent.indexOf(curClassName)))
            if(!isNotFoundIdx(tmp_arrChilds as any )) {
                convert_tmp_arrChilds = tmp_arrChilds as typeof convert_tmp_arrChilds
                cur_className = convert_tmp_arrChilds.className
                acc_arrClassName.push(convert_tmp_arrChilds.arrChilds)
                tmp_json = fct_getMonoJsonArrComponent(cur_className)
                //if(!tmp_json) tmp_json = {} as _IComponent // A FAIRE : empty _IComponent
                acc_jsonArr_component_json = {...acc_jsonArr_component_json , [cur_className] : tmp_json}
            }
        }
        
        if(!(idx <this[str_get_arrClassNameAndChildsComponents]().length)) {
            return  new FunctionalWrapperJsonComponent<ArrUnionClassNameType_2,unionClassNameType_2,ArrArr_2,T_2>(listOfComponent,acc_arrClassName,acc_jsonArr_component_json) 
        
        }
        else return undefined 
    }

    getAddedSubJsonComponent 
    <
    ArrUnionClassNameType_2 extends  readonly string[],
    unionClassNameType_2 extends arrToUnion<ArrUnionClassNameType_2> ,
    ArrArr_2 extends t_arr_component<unionClassNameType_2> ,
    T_2 extends _IJsonComponents< unionClassNameType_2>,
    t_subsetList extends readonly unionClassNameType_2[] >
    ( listOfComponent : t_subsetList,jsonComponentBis : FunctionalWrapperJsonComponent <ArrUnionClassNameType_2,unionClassNameType_2 , ArrArr_2,  T_2> ){ 
            let t_subJsonComponent : t_subJsonComponent<ArrUnionClassNameType_2, unionClassNameType_2, t_subsetList, ArrArr_2> = jsonComponentBis.getSubJsonComponent<t_subsetList>(listOfComponent)
            if(t_subJsonComponent) { 
                let res = this.getAddedJsonComponent(t_subJsonComponent)
                return res 
            }
            else return undefined
    }


}

