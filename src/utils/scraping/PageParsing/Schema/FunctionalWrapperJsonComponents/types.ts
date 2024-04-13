import { getGetterPrefixName, getSetterPrefixName } from "@shared/m_string.js"

export const str_map_compoIdToChildIds="map_compoIdToChildIds" as const 
export const str_get_map_compoIdToChildIds = getGetterPrefixName(str_map_compoIdToChildIds)
export const str_set_map_compoIdToChildIds = getSetterPrefixName(str_map_compoIdToChildIds)


export type t_map_compoIdToChildIds<unionClassNameType extends string > = Map<unionClassNameType,unionClassNameType[]>