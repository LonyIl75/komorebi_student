import getCurrentLine from "get-current-line"
import { arrToUnion } from "@shared/type.js";
import { FunctionalWrapperJsonComponent } from "../FunctionalWrapperJsonComponents.js";
import { FunctionalWrapperJsonComponentConfig, getSuperFwJsonComponent } from "../IFunctionalWrapperJsonComponents.js";
import { h_rt, getSuperUnionclassname, getSuperArrClassname, getSuperArrArr, getSuper_IJsonComponent, str_get_arrClassName, str_get_arrClassNameAndChildsComponents, str_get_jsonArr_component_json, fieldName_cst_jsonComponents, fieldName_df_cst_jsonComponents, fieldName_cst_buildFromFWJson, fieldName_df_cst_buildFromFWJson } from "./types.js";
import { _IJsonComponents } from "../_JsonComponents/_JsonComponents.js";
import { t_arr_component, t_getClassNameTypeFromArrComponent, t_getChildTypeFromArrComponent, getIdxComponentClassName, getIdxComponentChild } from "../../../types.js";
import { _IComponent } from "../../_Component/_Component.js";
import { Component } from "../../Component/Component.js";
import { StrChildType, empty_ids } from "../../../TypeChilds/types.js";

//TODO h_rt 
const fct_df_cst_jsonComponents = <ArrUnionClassNameType extends  readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType>, ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents<unionClassNameType >>
(jsonArr_component_json:_IJsonComponents<arrToUnion<ArrUnionClassNameType>>,arrClassNameAndChildsComponents : ArrArr) :h_rt<ArrUnionClassNameType,unionClassNameType,ArrArr> =>{ 
    type t_classNameType_components = t_getClassNameTypeFromArrComponent<unionClassNameType,ArrArr>
    type t_childType_components = t_getChildTypeFromArrComponent<unionClassNameType,ArrArr>

    let arr_jsonComponent = {} as any 
    //13/03/24
    for (let index = 0; index < arrClassNameAndChildsComponents.length; index++) { 
        const classNameAndChildsSelectors = arrClassNameAndChildsComponents[index];
        const className = classNameAndChildsSelectors[getIdxComponentClassName]
        const rest_element:_IComponent = jsonArr_component_json[className];
        const type_child_components = classNameAndChildsSelectors[getIdxComponentChild]
        const type  = StrChildType.compClassnameToChildType(className)
        /*:StrChildType.t_childType< typeof className>*/
        const to_add_element  = {
            ... Component.df,
            type : type,
            class_name : className,
            childs_components : type_child_components.map((type_child_component)=>{ 
                return {type:type_child_component , ids:empty_ids}
            }),
            ...rest_element
        }
        //@ts-ignore
        arr_jsonComponent[className] = to_add_element
        
    }
    return arr_jsonComponent
    
}


const fct_df_cst_buildFromFWJson = <ArrUnionClassNameType extends  readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType,string> ,  T extends  _IJsonComponents<unionClassNameType >,ArrUnionClassNameType_2 extends  readonly string[],unionClassNameType_2 extends arrToUnion<ArrUnionClassNameType_2> ,ArrArr_2 extends t_arr_component<unionClassNameType_2> , T_2 extends _IJsonComponents< unionClassNameType_2 >>
(  toAddJsonComponent : FunctionalWrapperJsonComponent <ArrUnionClassNameType_2,unionClassNameType_2 , ArrArr_2,  T_2>,_before_this : FunctionalWrapperJsonComponentConfig <ArrUnionClassNameType ,unionClassNameType, ArrArr,T>):getSuperFwJsonComponent<unionClassNameType,unionClassNameType_2,ArrUnionClassNameType,ArrUnionClassNameType_2,ArrArr,ArrArr_2,T,T_2>=>{ 

    type unionClassNameType_3 = getSuperUnionclassname<unionClassNameType,unionClassNameType_2,ArrUnionClassNameType,ArrUnionClassNameType_2>
    type ArrUnionClassNameType_3 =getSuperArrClassname<ArrUnionClassNameType,ArrUnionClassNameType_2>
    type ArrArr_3 = getSuperArrArr<unionClassNameType,unionClassNameType_2,ArrUnionClassNameType,ArrUnionClassNameType_2,ArrArr ,ArrArr_2 > 
    type T_3 = getSuper_IJsonComponent<unionClassNameType,unionClassNameType_2,ArrUnionClassNameType,ArrUnionClassNameType_2,T,T_2 >

    let nw_arrClassName : ArrUnionClassNameType_3 = [..._before_this.arrClassName,...toAddJsonComponent[str_get_arrClassName]()]
    let nw_arrClassNameAndChildsComponents : ArrArr_3  = [..._before_this.arrClassNameAndChildsComponents,...toAddJsonComponent[str_get_arrClassNameAndChildsComponents]()] as any
    
    
    let nw_jsonArr_component_json :T_3 = {..._before_this.jsonArr_component_json,...toAddJsonComponent[str_get_jsonArr_component_json]()} as any 

    let res = new FunctionalWrapperJsonComponent<ArrUnionClassNameType_3 ,unionClassNameType_3, ArrArr_3 ,T_3>  (nw_arrClassName,nw_arrClassNameAndChildsComponents,nw_jsonArr_component_json)
    return res  as any 
}

export default class S_FunctionalWrapperJsonComponent {

    [fieldName_cst_jsonComponents]: typeof S_FunctionalWrapperJsonComponent[typeof fieldName_df_cst_jsonComponents]
    [fieldName_cst_buildFromFWJson]:typeof S_FunctionalWrapperJsonComponent[typeof fieldName_df_cst_buildFromFWJson]

    constructor(_cst_jsonComponent = S_FunctionalWrapperJsonComponent[fieldName_df_cst_jsonComponents],_cst_buildFromFWJson = S_FunctionalWrapperJsonComponent[fieldName_df_cst_buildFromFWJson]){ 
        this[fieldName_cst_jsonComponents] = _cst_jsonComponent  
        this[fieldName_cst_buildFromFWJson] = _cst_buildFromFWJson
    }

   //build jsonComponents
    static [fieldName_df_cst_jsonComponents] = fct_df_cst_jsonComponents

    static [fieldName_df_cst_buildFromFWJson]= fct_df_cst_buildFromFWJson

    static df_provider = new S_FunctionalWrapperJsonComponent()

}

export type t_SFunctionalWrapperJsonComponent_df_provider  = typeof S_FunctionalWrapperJsonComponent.df_provider


export type t_cst_jsonComponent<ArrUnionClassNameType extends  readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType>, ArrArr extends t_arr_component<unionClassNameType> ,  T extends _IJsonComponents<unionClassNameType >> 
=  typeof fct_df_cst_jsonComponents<ArrUnionClassNameType ,unionClassNameType , ArrArr  ,  T >

export type t_cst_buildFromFWJson <ArrUnionClassNameType extends  readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType> ,ArrArr extends t_arr_component<unionClassNameType,string> ,  T extends  _IJsonComponents<unionClassNameType >,ArrUnionClassNameType_2 extends  readonly string[],unionClassNameType_2 extends arrToUnion<ArrUnionClassNameType_2> ,ArrArr_2 extends t_arr_component<unionClassNameType_2> , T_2 extends _IJsonComponents< unionClassNameType_2>>
=  typeof fct_df_cst_buildFromFWJson <ArrUnionClassNameType ,unionClassNameType , ArrArr  ,  T,ArrUnionClassNameType_2,unionClassNameType_2,ArrArr_2,T_2 >

