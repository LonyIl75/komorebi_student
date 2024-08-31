import getCurrentLine from "get-current-line"
import { cst_getFctHelpers, strVoidEnumFctHelpers, t_fct_cst_getFctHelpers, t_strEnumFctHelpers } from "@/utils/scraping/PageParsing/Schema/utils/GetFctHelpers.js";
import {  t_enum, t_strEnum } from "@shared/type.js";


const _embed_societeTech_style_str = <Enum extends t_enum>(str_enum :  Enum[keyof Enum] ):`${ Enum[keyof Enum]}` => `${str_enum}`
type t_ret_embed_societeTech_style_str<Enum extends t_enum> = ReturnType<typeof _embed_societeTech_style_str<Enum>>

export const enum_societeTech_style = {
    ...strVoidEnumFctHelpers
}
export type t_enum_societeTech_style = typeof enum_societeTech_style


export const getSocieteTechHelpers = <U extends string ,UEnum extends t_strEnumFctHelpers  = t_enum_societeTech_style , RU extends string = t_ret_embed_societeTech_style_str<UEnum>  >
(fct: (t_fct_cst_getFctHelpers<UEnum,RU>|typeof _embed_societeTech_style_str) = _embed_societeTech_style_str  ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/

    type t_validateUEnum = UEnum //(typeof fct) extends ((str_enum : infer _UEnum ) => infer _) ? isEqual<UEnum ,_UEnum> extends true ? _UEnum : never : never
    type t_validateRU = RU //(typeof fct) extends ((str_enum : t_validateUEnum ) => infer _RU) ? isEqual<RU,_RU> extends true ? _RU : never : never

    type t_validateFct = t_fct_cst_getFctHelpers<t_validateUEnum,t_validateRU>

    return cst_getFctHelpers<U,t_validateUEnum,t_validateRU>(fct as t_validateFct )
}