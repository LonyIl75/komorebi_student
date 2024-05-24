import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_regex"

import { Apply,Args, Fn, t_functionFn, t_function_removeReqOpParam, t_strApplyFnIfExtends} from "./type.js";
import { emptyStr, t_emptyStr, toPlural,putSuffix } from "./m_string.js";
import { _isFunction } from "./m_primitives.js";
import MRegExp, { ju_escapeRegex, t_regexpFlags, t_specialChar_regex, t_strRegex, validateIsRegexFlags } from "./_regexp.js";


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


export const fct_escape =<T extends string =""> ( str : T ="" as T)=>{ 
  return `\\${str}` as const 
}
export interface FnEscape extends Fn<[string],string> {
  return: _fnEscape<Args<this>>
}
type _fnEscape<Args extends [string] > = ReturnType<typeof fct_escape<Args[0]>> 

export type t_convertStrToRegexStr <T extends string> = t_strApplyFnIfExtends<T,t_specialChar_regex,FnEscape>

export const convertStrToRegexStr = <T extends string >(paramStr :T ) => paramStr?.replace(ju_escapeRegex, fct_escape("$&")) as t_convertStrToRegexStr<T>

export const createRegex_from_str = <T extends string , F extends t_regexpFlags = undefined > (paramStr:T, strFlags_for_RegexCst : F/*validateIsRegexFlags<T>*/  = undefined) => 
  new MRegExp(convertStrToRegexStr(paramStr), strFlags_for_RegexCst)

export const countOfElementThatMatchRegexInArray = (paramArray : readonly string[], paramRegex :RegExp ) :number => 
  paramArray.reduce((acc, elm) => (paramRegex.test(elm) ? acc + 1 : acc), 0)

export type t_transformRegexOrStr <B extends boolean,_T extends (B extends true ? string : MRegExp<S,F>),_Fn extends Fn<[string],string> , S extends string = undefined , F extends t_regexpFlags = undefined , _F extends t_regexpFlags = undefined  > =
_T extends string ? Apply<_Fn,[_T]> : MRegExp<Apply<_Fn,[S]>,F extends undefined ? _F : F >

export const transformRegexOrStr = 
<B extends boolean,_T extends (B extends true ? string : MRegExp<S,F>),_Fn extends Fn<[string],string> , Fct extends t_functionFn<_Fn>, S extends string = undefined , F extends t_regexpFlags = undefined  , _F extends t_regexpFlags = undefined >(param_regexOrStr : _T, isStr :B , fct_transform_str : Fct , flags :_F = undefined) =>{ 
  
  let res : any 

  if(isStr){ 
    const c_pram_regexOrStr = param_regexOrStr as string
    res = fct_transform_str(c_pram_regexOrStr)
  }else {
    const c_pram_regexOrStr = param_regexOrStr as MRegExp<S,F>
    res = new MRegExp(fct_transform_str(c_pram_regexOrStr.source), flags || c_pram_regexOrStr.flags)  
  }

  return res  as t_transformRegexOrStr<B,_T,_Fn,S,F,_F>
}
//TODO redo with MRegExp
export const emptyStrRegex = "(?:)" as const
type t_emptyStrRegex = typeof emptyStrRegex
export type t_isEmptyStrRegex <T extends string> = T extends t_emptyStrRegex ? true : false
export const isEmptyStrRegex = <T extends string> (str : T) => ((str === emptyStrRegex) as t_isEmptyStrRegex<T>)

export const emptyRegex = new RegExp(emptyStrRegex) 

export type t_sourceRegexToStrRegex < T extends string > = t_isEmptyStrRegex<T> extends true ? t_emptyStr : T
export const sourceRegexToStrRegex =< T extends string >(src_regex : T) => (isEmptyStrRegex(src_regex) ? emptyStr : src_regex) as t_sourceRegexToStrRegex<T>

export type t_transformRegexOrStrWithPreSelectTransform <B extends boolean, _T extends (B extends true ? string : MRegExp<S,F>),_Fn extends Fn<[string],string> ,Fct extends t_functionFn<_Fn>, S extends string = undefined , F extends t_regexpFlags = undefined   > = 
t_function_removeReqOpParam<typeof transformRegexOrStr <B,_T,_Fn,Fct,S,F> ,[0,1]>

type t_isRegExp <T> = T extends RegExp ? true : false 
export const isRegExp = <T>(arg:T) => (arg instanceof RegExp) as t_isRegExp<T>


export const regex_charUnionStr  = "|" as const 
export type t_regex_charUnionStr = typeof regex_charUnionStr 
export const deleteMatchedStr = (str : string , regex:RegExp) => str.replace(regex, "")

export const replaceIfMatched = (str : string , regex:RegExp, replace_str : string = "") :[string,boolean]=>{ 
  let matched = str.match(regex)
  if(!matched) return [str,false] 
  else {
      const matched_len = matched[0].length
      const subStr = str.substring(0,matched.index) + replace_str + str.substring(matched.index + matched_len)
      return [subStr,true]
  }
}