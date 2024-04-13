import { concatArraysAndRemoveDuplicates, joinArray_with_char } from "@shared/m_array.js"
import { IJson } from "@shared/m_object.js"
import { _isNullOrUndefined } from "@shared/m_primitives.js"
import { convertStrToRegexStr, countOfElementThatMatchRegexInArray, createRegex_from_str } from "@shared/m_regex.js"
import { concatRegex, regexOrStrToBeginAndEndOfLine } from "@shared/m_regex_prefixAndSuffix.js"
import { getSetOfKeys } from "./m_json.js"



export namespace m_regex_getContext {
        
    const df_getIthContextSuffix_joinChar = ""
    const df_getIthContextSuffix_fct_join_nameAndContext = (args:string[],joinChar:string)=>joinArray_with_char(args,joinChar)
    const df_getIthContextSuffix_fct_join_nameAndContextAndNumber = (_context : string , _name:string ,num_context : number , joinChar_nameAndContext : string =df_getIthContextSuffix_joinChar , fct_join_nameAndContext : (args:string[],joinChar:string)=> string = df_getIthContextSuffix_fct_join_nameAndContext ) =>{
        const str_num_context : `${number}`|""= num_context ==0  ? "" : `${num_context}`
        const prefix : string =  str_num_context === "" ? "" : joinArray_with_char([_context , str_num_context],"" ) 
        return fct_join_nameAndContext([_name, prefix],joinChar_nameAndContext)

    }

    const ithContextRegex = /\d+/

    export const getCurNumContext= (_context : string , _name:string , obj : IJson<string,any>,joinChar_nameAndContext: string = df_getIthContextSuffix_joinChar,fct_join_nameAndContext :(args:string[],joinChar:string)=> string  = df_getIthContextSuffix_fct_join_nameAndContext)=> {
        
        
        const setOfKeys_in_DepsAndDeclarations = getSetOfKeys(obj)
        
        let src_beg_regex = _name
        
        if (_name === undefined || _name === null) {
            src_beg_regex = _context
            _name = ""
        } else {
            src_beg_regex = fct_join_nameAndContext([_name, _context],joinChar_nameAndContext)//is url_base 
        }
        const _ithContextRegex = ithContextRegex //is regex that match rest of url (without url_base)
        const beg_regex = createRegex_from_str(src_beg_regex)

        let str_regex_opt = convertStrToRegexStr(_name)
        str_regex_opt =  str_regex_opt ? joinChar_nameAndContext ? str_regex_opt + convertStrToRegexStr(joinChar_nameAndContext) + "?" : str_regex_opt :"" 

        const isZeroContext = str_regex_opt ? countOfElementThatMatchRegexInArray(setOfKeys_in_DepsAndDeclarations, new RegExp(regexOrStrToBeginAndEndOfLine<true,string>( str_regex_opt,true  ))) : 0

        const regex = regexOrStrToBeginAndEndOfLine<false,RegExp>(concatRegex(beg_regex, _ithContextRegex),false)

        const contextNum = countOfElementThatMatchRegexInArray(setOfKeys_in_DepsAndDeclarations, regex) 
        
        return contextNum ? contextNum + 1 : isZeroContext 
    }


    export function getIthContextSuffix(_context:string , _name:string , obj : IJson<string,any>,joinChar_nameAndContext: string = df_getIthContextSuffix_joinChar , 
    fct_join_nameAndContext :(args:string[],joinChar:string)=> string  = df_getIthContextSuffix_fct_join_nameAndContext,
    fct_join_nameAndContextAndNumber :(_context : string , _name:string ,num_context : number , joinChar_nameAndContext : string , fct_join_nameAndContext : (args:string[],joinChar:string)=> string ) => string =df_getIthContextSuffix_fct_join_nameAndContextAndNumber ) {

        const cur_num_context : number = getCurNumContext(_context, _name,obj,joinChar_nameAndContext,fct_join_nameAndContext)
        return fct_join_nameAndContextAndNumber(_context, _name, cur_num_context,joinChar_nameAndContext, fct_join_nameAndContext)
    }

}