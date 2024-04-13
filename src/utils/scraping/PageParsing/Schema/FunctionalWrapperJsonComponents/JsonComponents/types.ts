import { getCstPrefixName, getDfPrefixName, getGetterPrefixName, getSetterPrefixName, getStPrefixName } from "@shared/m_string.js"
import { arrToUnion, isEqual, removeElementsFromArr, t_empty1DArray } from "@shared/type.js"
import { t_arr_component, t_getClassNameTypeFromArrComponent, t_component } from "../../../types.js"
import { _IJsonComponents } from "../_JsonComponents/_JsonComponents.js"
import { IJsonComponents } from "./JsonComponents.js"


export const fieldName_cst_jsonComponents = getCstPrefixName("jsonComponents")  
export type t_fieldName_cst_jsonComponents = typeof fieldName_cst_jsonComponents
export const fieldName_df_cst_jsonComponents = getDfPrefixName(fieldName_cst_jsonComponents)
export const fieldName_st_cst_jsonComponent = getStPrefixName(fieldName_cst_jsonComponents)


export const fieldName_cst_buildFromFWJson = getCstPrefixName("buildFromFWJson")
export type t_fieldName_cst_buildFromFWJson = typeof fieldName_cst_buildFromFWJson
export const fieldName_df_cst_buildFromFWJson = getDfPrefixName(fieldName_cst_buildFromFWJson)
export const fieldName_st_cst_buildFromFWJson = getStPrefixName(fieldName_cst_buildFromFWJson)


export type getSuperArrArr <
unionClassNameType extends arrToUnion<ArrUnionClassNameType> , 
unionClassNameTypeSup extends arrToUnion<ArrUnionClassNameTypeSup> ,
ArrUnionClassNameType extends readonly string[],
ArrUnionClassNameTypeSup extends readonly string[] ,
ArrArr extends t_arr_component<unionClassNameType,string> ,
ArrArr_2 extends t_arr_component<unionClassNameTypeSup,string> ,
unionClassNameType_3 extends getSuperUnionclassname<unionClassNameType,unionClassNameTypeSup,ArrUnionClassNameType,ArrUnionClassNameTypeSup> = getSuperUnionclassname<unionClassNameType,unionClassNameTypeSup,ArrUnionClassNameType,ArrUnionClassNameTypeSup>
> =  [...ArrArr , ...ArrArr_2 ]   extends infer ArrArr_3 ? ArrArr_3 extends t_arr_component<unionClassNameType_3> ? ArrArr_3 : never : never 

 
export type getSuperUnionclassname <unionClassNameType extends arrToUnion<ArrUnionClassNameType> , 
unionClassNameTypeSup extends arrToUnion<ArrUnionClassNameTypeSup> ,
ArrUnionClassNameType extends readonly string[],
ArrUnionClassNameTypeSup extends readonly string[] > = unionClassNameType | unionClassNameTypeSup extends infer unionClassNameType_3 ?
getSuperArrClassname<ArrUnionClassNameType,ArrUnionClassNameTypeSup> extends infer ArrUnionClassNameType_3 ?
ArrUnionClassNameType_3 extends readonly string[] ? unionClassNameType_3 extends arrToUnion<ArrUnionClassNameType_3> ? //isEqual dont work even if its correct
unionClassNameType_3 : never :never :never :never 

 
export type getSuperArrClassname <ArrUnionClassNameType extends readonly string[],
ArrUnionClassNameTypeSup extends readonly string[] > =  [...ArrUnionClassNameType , ...ArrUnionClassNameTypeSup ]

 
export type getSuper_IJsonComponent<
unionClassNameType extends arrToUnion<ArrUnionClassNameType> , 
unionClassNameTypeSup extends arrToUnion<ArrUnionClassNameTypeSup> ,
ArrUnionClassNameType extends readonly string[],
ArrUnionClassNameTypeSup extends readonly string[] ,
T extends _IJsonComponents<unionClassNameType>,
T_2 extends _IJsonComponents<unionClassNameTypeSup>,
unionClassNameType_3 extends getSuperUnionclassname<unionClassNameType,unionClassNameTypeSup,ArrUnionClassNameType,ArrUnionClassNameTypeSup> = getSuperUnionclassname<unionClassNameType,unionClassNameTypeSup,ArrUnionClassNameType,ArrUnionClassNameTypeSup>
>  = (T & T_2) extends infer T_3 ? T_3 extends _IJsonComponents<unionClassNameType_3> ? T_3 : never : never 



export const str_arrClassName="arrClassName" as const 
export const str_get_arrClassName = getGetterPrefixName(str_arrClassName)
export const str_set_arrClassName = getSetterPrefixName(str_arrClassName)

export const str_arrClassNameAndChildsComponents="arrClassNameAndChildsComponents" as const 
export const str_get_arrClassNameAndChildsComponents = getGetterPrefixName(str_arrClassNameAndChildsComponents)
export const str_set_arrClassNameAndChildsComponents = getSetterPrefixName(str_arrClassNameAndChildsComponents)


export const str_jsonArr_component_json="jsonArr_component_json" as const 
export const str_get_jsonArr_component_json = getGetterPrefixName(str_jsonArr_component_json)
export const str_set_jsonArr_component_json = getSetterPrefixName(str_jsonArr_component_json)


export type h_rt < ArrUnionClassNameType extends readonly string[],unionClassNameType extends arrToUnion<ArrUnionClassNameType> , ArrArr extends t_arr_component<unionClassNameType> > 
= IJsonComponents< t_getClassNameTypeFromArrComponent<unionClassNameType,ArrArr>, unionClassNameType , ArrArr>
type h_rt_f  = <ArrUnionClassNameType extends readonly string[],unionClassNameType extends  arrToUnion<ArrUnionClassNameType>, ArrArr extends t_arr_component<unionClassNameType> ,T extends h_rt<ArrUnionClassNameType,unionClassNameType,ArrArr>>(jsonArr_component_json:_IJsonComponents<arrToUnion<ArrUnionClassNameType>>,arrClassNameAndChildsComponents : ArrArr) => T

export type getSubArrComponent<
ArrUnionClassNameType extends readonly string[],
ArrUnionClassNameTypeSup extends readonly arrToUnion<ArrUnionClassNameType>[] ,
ArrArr extends t_arr_component<string> ,
Acc extends t_arr_component<string> =  [] ,
unionClassNameType extends string =  arrToUnion<ArrUnionClassNameType> , 
unionSubClassNameType extends string = arrToUnion<ArrUnionClassNameTypeSup> > 
= ArrArr extends readonly [infer Atm ,...infer Rest] ? 
        Atm extends t_component<unionClassNameType> ? 
            t_getClassNameTypeFromArrComponent<unionClassNameType,[Atm]>[0] extends infer R ? 
                Readonly<removeElementsFromArr<ArrUnionClassNameType,[R]>> extends infer restUnion ? 
                    restUnion extends readonly string[] ? 
                        R extends unionSubClassNameType ? 
                            Readonly<removeElementsFromArr<ArrUnionClassNameTypeSup,[R]>> extends infer restSubUnion? 
                                restSubUnion extends readonly any[] ? 
                                    arrToUnion<restSubUnion> extends arrToUnion<restSubUnion> ?
                                            Rest extends t_arr_component<string> ?
                                                Atm extends t_component<string> ? getSubArrComponent<restUnion,restSubUnion,Rest,  [...Acc,Atm]>
                                                :never
                                            :never
                                        :never
                                    :never
                                :never
                        : Rest extends t_arr_component<string> ?
                            getSubArrComponent<restUnion,ArrUnionClassNameTypeSup,Rest, Acc>
                        :never 
                    :never
                :never
            :never
        :never 
:ArrUnionClassNameTypeSup extends Readonly<t_empty1DArray> ? Acc : never 

