import getCurrentLine from "get-current-line"
import { concatArraysAndRemoveDuplicates, joinArray_with_char } from "@shared/m_array.js"
import { IJson } from "@shared/m_object.js"
import { _isNullOrUndefined, t__isNullOrUndefined } from "@shared/m_primitives.js"
import { convertStrToRegexStr, countOfElementThatMatchRegexInArray, createRegex_from_str } from "@shared/m_regex.js"
import { concatRegex, embedBeginAndEndOfLineStrOrRegex } from "@shared/m_regex_prefixAndSuffix.js"
import { getSetOfKeys } from "./m_json.js"



export namespace m_regex_getContext {
        
    const df_getIthContextSuffix_joinChar = ""
    const df_getIthContextSuffix_fct_join_nameAndContext = <T extends  string[] , JoinChar extends string >(args:T,joinChar:JoinChar)=>joinArray_with_char<T,JoinChar>(args,joinChar)
    const df_getIthContextSuffix_fct_join_nameAndContextAndNumber = (_context : string , _name:string ,num_context : number , joinChar_nameAndContext : string =df_getIthContextSuffix_joinChar , fct_join_nameAndContext : (args:string[],joinChar:string)=> string = df_getIthContextSuffix_fct_join_nameAndContext ) =>{ 
        const str_num_context : `${number}`|""= num_context ==0  ? "" : `${num_context}`
        const prefix : string =  str_num_context === "" ? "" : joinArray_with_char([_context , str_num_context],"" ) 
        return fct_join_nameAndContext([_name, prefix],joinChar_nameAndContext)

    }

    const ithContextRegex = /\d+/

    export const getCurNumContext= <TContext extends string , TName extends string , Obj extends IJson<string,any> , JoinChar extends string =  typeof df_getIthContextSuffix_joinChar , _R extends string = ReturnType<typeof df_getIthContextSuffix_fct_join_nameAndContext<[TName,TContext],JoinChar>> > (_context : TContext , _name:TName , obj : Obj,joinChar_nameAndContext: JoinChar = df_getIthContextSuffix_joinChar as JoinChar,fct_join_nameAndContext :(args:string[],joinChar:string)=> _R  = df_getIthContextSuffix_fct_join_nameAndContext as any )=>{ 
        
        
        const setOfKeys_in_DepsAndDeclarations = getSetOfKeys(obj)
        
        let src_beg_regex :_R = fct_join_nameAndContext([_name, _context],joinChar_nameAndContext)
        let name : t__isNullOrUndefined<TName> extends true ? "" : TName = _isNullOrUndefined(_name) ? "":_name as any 
        const _ithContextRegex = ithContextRegex //is regex that match rest of url (without url_base)
        const beg_regex = createRegex_from_str(src_beg_regex)

        let str_regex_opt : string  = convertStrToRegexStr(name)
        str_regex_opt =  str_regex_opt ? joinChar_nameAndContext ? str_regex_opt + convertStrToRegexStr(joinChar_nameAndContext) + "?" : str_regex_opt :"" 

        const isZeroContext = str_regex_opt ? countOfElementThatMatchRegexInArray(setOfKeys_in_DepsAndDeclarations, new RegExp(embedBeginAndEndOfLineStrOrRegex<true,string>( str_regex_opt,true  ))) : 0

        //@ts-ignore
        const regex = embedBeginAndEndOfLineStrOrRegex(concatRegex([beg_regex, _ithContextRegex]),false)

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