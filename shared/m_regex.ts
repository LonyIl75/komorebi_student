import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_regex"

import { IsUnion, UnionToArray, arrToUnion, char_join_pipe, getReqAndOptFromArr, removeLastArray, repeat, stringToArray, t_JoinChar, t_JoinChar_pipe, t_alphaNumeriChar, t_alphabet, t_char_number, t_function_removeReqOpParam, validateStrIsInAllPermutation } from "./type.js";
import { joinArray_with_char } from "./m_array.js";
import { emptyStr, t_emptyStr, toPlural,putSuffix } from "./m_string.js";


export const str_beginOfLine_regex = "^"
export const str_endOfLine_regex = "$"

export const match_balanced_parantheses_str_regex =`\\((?:[^)(]|\\((?:[^)(]|\\((?:[^)(]|\\([^)(]*\\))*\\))*\\))*\\)`;

export const end_line_js = "\\s*;?\\s*"


export const spaceStrRegexWithoutLineBreak = `[^\\S\\n]`
export const notSpaceStrRegex = `\\S`
export const allStr = `[\\S\\s]`
export const allStrBeg = `${allStr}*?`
export const allStrEnd = `${allStr}*`
export const moreThenOneStrRegex = "(?:[2-9])|(?:\\d\\d+)" as const

export const pluralOpt = "s?" as  const 
export type t_pluralOpt = typeof pluralOpt
export const strRegexToMaybePluralStrRegex = <T extends string> (str_regex:T) => putSuffix<T,t_pluralOpt>(str_regex,pluralOpt) //`${toPlural(str_regex)}?` as const

export const getSizedWordStrRegex = <TArrMinMax extends readonly [number,number]|readonly [number]> (arr_size:TArrMinMax)=>
{
    if(arr_size.length===1) return `(?:\\w{${arr_size[0]}})` as const 

    const [min,max] = [arr_size[0],arr_size[1]]
    if(!(min<max)) throw new Error("arr_size[0]<arr_size[1]")
    return `(?:\\w{${arr_size[0]},${arr_size[1]}})` as const
}
const veryShortWordSizeInterval = [1,4] as const
export const veryShortWordStrRegex = getSizedWordStrRegex<typeof veryShortWordSizeInterval>(veryShortWordSizeInterval)
export const articleStrRegex = veryShortWordStrRegex  
export const ordinalSuffixRegex = veryShortWordStrRegex  

//TODO replace by prefix and suffix

export function embedBeginLineRegexStr<T extends string > (str_regex:T){
  return `${str_beginOfLine_regex}${str_regex}` as const 
}
export function embedEndLineRegexStr<T extends string > (str_regex:T){
  return `${str_regex}${str_endOfLine_regex}` as const 
}
export function embedBeginAndEndLineRegexStr<T extends string > (str_regex:T):`${typeof str_beginOfLine_regex}${T}${typeof str_endOfLine_regex}`{
  return embedEndLineRegexStr(embedBeginLineRegexStr(str_regex))
}

//TODO replace by regexOrStrToCapturingGroup and redo all with prefix and suffix 

export function embedGroupStrRegex<T extends string = string >(str_regex:T){
    return `(${str_regex})` as const 
}
export function embedOptional<T extends string = string >(str_regex:T){
  return `${str_regex}?` as const 
}
export function embedOptionalGroupStrRegex<T extends string = string >(str_regex:T){
  return embedOptional(embedGroupStrRegex(str_regex)) 
}
export function embedNonCampturingGroupStrRegex<T extends string = string >(str_regex:T){
  return `(?:${str_regex})` as const 
}
export function embedOptionalNonCampturingGroupStrRegex<T extends string = string >(str_regex:T){
  return embedOptional(embedNonCampturingGroupStrRegex(str_regex))
}
export type t_arr_embedNonCampturingGroupStrRegex < TArr extends readonly string[]> = 
    TArr extends readonly [infer A,...infer B] ? 
        A extends string ? 
            B extends readonly string[] ? 
                [ReturnType<typeof embedNonCampturingGroupStrRegex<A>>,...t_arr_embedNonCampturingGroupStrRegex<B>] : never : never : []

export function unionRegexs< T extends readonly string[] = string[]> (...str_regex:T): t_JoinChar_pipe<T>{
  return str_regex.join(char_join_pipe) as t_JoinChar_pipe<T>
}

export function getUnionNonMatchingGroups < T extends readonly string[] = string[]> (...str_regex:T){
  type t_< T extends readonly string[] = string[]> = 
      T extends readonly [infer A,...infer B] ?
          A extends string ? 
              B extends readonly string[] ? 
                  [ReturnType<typeof embedNonCampturingGroupStrRegex<A>>,...t_<B>] : never : never : []

  return unionRegexs(...str_regex.map((_str)=>embedNonCampturingGroupStrRegex(_str)) as t_<T>)
}

export function getUnionStrRegex< T extends readonly string[] = string[]> (str_regex:T){
    return embedGroupStrRegex(unionRegexs(...str_regex))
}


export function getRegexGM(str_regex:string){
    return new RegExp(str_regex,"gm")
}
export function getRegexG(str_regex:string){
  return new RegExp(str_regex,"g")
}
export function getRegexGS(str_regex:string){
  return new RegExp(str_regex,"gs")
}


export const isAssignationRegex = `[^;]*?=\\s+`


export function notPatternLookahead(str_regex:string){
    return `(?!${str_regex})` as const 
}


export type t_specialChar_regex = "."|"^"| "$"|"*"|"+"|"?"|"|"|"\\"

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

export type t_regex_base_char = UnionToArray<t_specialChar_regex|t_char_number|'('|')'|':'|'='|'<'|'>'|'!'/*_t_matching_pattern_regex[number][number]*/|_t_pattern_class_regex[number][number]|t_count_regex>

export type t_regex_all_char = [...t_regex_base_char,...UnionToArray<t_modifiers_regex|t_builtInClass_regex>]

export type t_regex_array < T extends string > =  (t_regex_all_char[number]|T)[]

export type outChar < S extends string , C extends string , AccC extends string = ""> = 
S extends `${C}${infer R}` ?outChar < R , C , `${C}${AccC}`> :[AccC,S]


export type t_begin_ismatching_pattern_regex < A extends string  , char_u extends string  > =
A extends `${char_u}${infer T}`? T : undefined 


      
export type t_strRegex = ReturnType < typeof RegExp.toString > 

export const ju_escapeRegex = /[\-(){}\[\]*+?.,\\\^$|#\s]/g 
export const arr_regex_flag = ["i","g","m","s","u","y"] as const 
type t_arr_arr_regex_flag = typeof arr_regex_flag
export type t_regex_flag = typeof arr_regex_flag[number]



export type validateIsRegexFlags < T extends string>  = T  extends undefined ? undefined : validateStrIsInAllPermutation<T , t_regex_flag>

export const regexToStr = (regex:RegExp) => regex.source

export const convertStrToRegexStr = (paramStr :string ) :t_strRegex => paramStr?.replace(ju_escapeRegex, "\\$&")

export const createRegex_from_str = <T extends string > (paramStr:string, strFlags_for_RegexCst : validateIsRegexFlags<T>  = undefined) => new RegExp(convertStrToRegexStr(paramStr), strFlags_for_RegexCst)

export const countOfElementThatMatchRegexInArray = (paramArray : readonly string[], paramRegex :RegExp ) :number => paramArray.reduce((acc, elm) => (paramRegex.test(elm) ? acc + 1 : acc), 0)

export type t_transformRegexOrStr <B extends boolean = true , F extends string = undefined ,_T extends (B extends true ? string : RegExp) = (B extends true ? string : RegExp)  > = (param_regexOrStr : _T , fct_transform_str : (arg:string)=>string, isStr ?:B , flags ?:validateIsRegexFlags<F> ) => _T

export const transformRegexOrStr = 
<B extends boolean = true , F extends string = undefined ,_T extends (B extends true ? string : RegExp) = (B extends true ? string : RegExp)  > (param_regexOrStr : _T , fct_transform_str : (arg:string)=>string, isStr :B = true as B, flags :validateIsRegexFlags<F> = undefined) => {
  
  type t_res< _B extends boolean = boolean > = _B extends true ? string : RegExp
  let res : t_res 

  if(isStr){
    const c_pram_regexOrStr = param_regexOrStr as string
    res = fct_transform_str(c_pram_regexOrStr)
  }else {
    const c_pram_regexOrStr = param_regexOrStr as RegExp
    res = new RegExp(fct_transform_str(c_pram_regexOrStr.source), flags || c_pram_regexOrStr.flags)  
  }

  return res  as t_res<B>
}

export const emptyStrRegex = "(?:)" as const
type t_emptyStrRegex = typeof emptyStrRegex
export type t_isEmptyStrRegex <T extends string> = T extends t_emptyStrRegex ? true : false
export const isEmptyStrRegex = <T extends string> (str : T) => ((str === emptyStrRegex) as t_isEmptyStrRegex<T>)

export const emptyRegex = new RegExp(emptyStrRegex) 

export type t_sourceRegexToStrRegex < T extends string > = t_isEmptyStrRegex<T> extends true ? t_emptyStr : T
export const sourceRegexToStrRegex =< T extends string >(src_regex : T) => (isEmptyStrRegex(src_regex) ? emptyStr : src_regex) as t_sourceRegexToStrRegex<T>

export type t_transformRegexOrStrWithPreSelectTransform <B extends boolean = true , F extends string = undefined ,_T extends (B extends true ? string : RegExp) = (B extends true ? string : RegExp)  > = 
t_function_removeReqOpParam<typeof transformRegexOrStr <B,F,_T> ,[0,1]>

type t_isRegExp <T> = T extends RegExp ? true : false 
export const isRegExp = <T>(arg:T) => (arg instanceof RegExp) as t_isRegExp<T>


export const regex_charUnionStr  = "|" as const 
export type t_regex_charUnionStr = typeof regex_charUnionStr 
export const deleteMatchedStr = (str : string , regex:RegExp) => str.replace(regex, "")
export const unionStrRegex = <T extends RegExp[]>(arr_strRegex:T) => joinArray_with_char(arr_strRegex, regex_charUnionStr)

export const replaceIfMatched = (str : string , regex:RegExp, replace_str : string = "") :[string,boolean]=> {
  let matched = str.match(regex)
  if(!matched) return [str,false] 
  else {
      const matched_len = matched[0].length
      const subStr = str.substring(0,matched.index) + replace_str + str.substring(matched.index + matched_len)
      return [subStr,true]
  }
}