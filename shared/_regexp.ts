import { t_alphabet, t_alphaNumeriChar, UnionToArray, t_char_number, validateStrIsInAllPermutation } from "./type.js"

export type t_specialChar_regex = "("|")"|"{"|"}"|"["|"]"|"*"|"+"|"?"|"."|"\\"|"^"|"$"|"|"
export type t_specialChar_regex_withoutPattern = "."|"^"| "$"|"*"|"+"|"?"|"|"|"\\"

export  type t_count_regex = `{${number}}`|`{${number},}` |`{${number},${number}}`

export type t_modifiers_regex = 
`(?${t_alphabet})`|`(?-${t_alphabet})` //Modifiers 

export type t_builtInClass_regex = `\\${t_alphaNumeriChar}` 

export type _t_matching_pattern_regex = [["(?:",")"],["(?=",")"],["(?<=",")"],["(?<!",")"],["(",")"]]

export type t_matching_pattern_regex_opening = _t_matching_pattern_regex[number][0]
export type t_matching_pattern_regex_closing = _t_matching_pattern_regex[number][1]

export type t_maching_patternGroup_regex  ="("
export type t_matching_patternLook_opening = Exclude< t_matching_pattern_regex_opening ,t_maching_patternGroup_regex>

export type _t_pattern_class_regex = [["[","]"]]

export type t_pattern_class_regex_opening = _t_pattern_class_regex[number][0]
export type t_pattern_class_regex_closing = _t_pattern_class_regex[number][1]

/*type t_matching_pattern_regex<Grammar extends readonly string[] , nestedLevel extends readonly number []= readonly [] > =
isInferior<nestedLevel['length'] ,2> extends true ?
arrToUnion<Grammar> extends infer G ? G extends string ? 
[...Grammar,`(${G})` ,`[${G}]`,`(?:${G})` ,`(?=${G})`,`(?<=${G})`,`(?<!${G})`,`(?<!${G})`] extends infer NG ? 
NG extends readonly string[] ? `${arrToUnion<NG>}${t_matching_pattern_regex< NG, [...nestedLevel,nestedLevel['length']]>}${arrToUnion<NG>}` : never  : never :
never : never :arrToUnion<Grammar>*/

export type t_regex_base_char = UnionToArray<t_specialChar_regex_withoutPattern|t_char_number|'('|')'|':'|'='|'<'|'>'|'!'/*_t_matching_pattern_regex[number][number]*/|_t_pattern_class_regex[number][number]|t_count_regex>

export type t_regex_all_char = [...t_regex_base_char,...UnionToArray<t_modifiers_regex|t_builtInClass_regex>]

export type t_regex_array < T extends string > =  (t_regex_all_char[number]|T)[]

export type outChar < S extends string , C extends string , AccC extends string = ""> = 
S extends `${C}${infer R}` ?outChar < R , C , `${C}${AccC}`> :[AccC,S]


export type t_begin_ismatching_pattern_regex < A extends string  , char_u extends string  > =
A extends `${char_u}${infer T}`? T : undefined 

      
export type t_strRegex = ReturnType < typeof RegExp.toString > 

export const ju_escapeRegex = /[(){}\[\]*+?.\\\^$|]/g 
export const arr_regex_flag = ["i","g","m","s","u","y"] as const 
type t_arr_arr_regex_flag = typeof arr_regex_flag
export type t_regex_flag = typeof arr_regex_flag[number]

export type validateIsRegexFlags < T extends string>  = T  extends undefined ? undefined : validateStrIsInAllPermutation<T , t_regex_flag>
export type t_regexpFlags = string 

export default class MRegExp<T extends string , F extends t_regexpFlags = undefined >  extends RegExp {

    source : T
    flags : F

    constructor(source : T , flags : F = undefined ) {
        super(source, flags)
    }

}

export type get_SFromMRegExp<T extends MRegExp<string,string> >  = T extends MRegExp<infer S ,string > ? S : never
export type get_FFromMRegExp<T extends MRegExp<string,string> >  = T extends MRegExp<string ,infer F > ? F : never