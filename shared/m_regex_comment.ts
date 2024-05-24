import getCurrentLine from "get-current-line"
import { getRegexGM, end_line_js} from "./m_regex.js";
import { getUnionNonMatchingGroups, embedNonCapturingGroupStrOrRegex } from "./m_regex_prefixAndSuffix.js";

export const import_str_regex = `\\s*import\\s*(?!type\\b)(?:(?:(?:[\\w\\s,]*?)?(?:\\{\\s*(?:[\\w\\s,]*?)\\s*\\}\\s*))|(?:(?:\\{\\s*(?:[\\w\\s,]*?)\\s*\\})?(?:[*,\\w\\s]*?))|(?:\\*\\s+as\\s+[\\w]*?\\s*))from\\s+(?:(?:"([^']*?)")|(?:'([^']*?)'))${end_line_js}`;

export const deb_commentary ="\\/\\/";

const _function_name_str_regex = `\\s*(?:(?:async\\s+)?function)\\s+(\\w+)\\s*\\(.*?\\)\\s*(?::\\s*\\S+)?\\s*\\{`
const _arrowFunction_name_str_regex = `\\s*(?:const|let|var)\\s+(\\w+)\\s*=\\s*\\(.*?\\)\\s*(?::\\s*\\S+)?\\s*=>\\s*\\S+\\s*\\{?`
const _variable_name_str_regex = `\\s*(?:const|let|var)\\s+(\\w+)\\s*=\\s*\\S+`


const export_str_regex = `\\s*(?:export\\s+)`
const export_default_str_regex = `\\s*(?:export\\s+default\\s+)`

//(?:(?:export\\s+default\\s+)|(?:export\\s+))

const _class_name_str_regex =`\\s*(?:class)\\s+(\\w+)\\s*(?:extends(?:[^\\S\\n]+\\S+)*)?(?:implements(?:[^\\S\\n]+\\S+)*)?\\s*\\{`

export const classname_export_str_regex =  export_str_regex +_class_name_str_regex

export const classname_exports_str_regex =  '(?:'+export_default_str_regex +`|` + export_str_regex +')' + _class_name_str_regex //A FAIRE - : add function to clean up 

export const function_name_str_regex = export_str_regex+`?`+_function_name_str_regex
export const function_export_name_str_regex = export_str_regex+_function_name_str_regex

export const arrowFunction_export_name_str_regex = export_str_regex+_arrowFunction_name_str_regex
export const arrowFunction_name_str_regex = export_str_regex+`?`+_arrowFunction_name_str_regex


export const variable_export_name_str_regex = export_str_regex +_variable_name_str_regex
export const variable_name_str_regex = export_str_regex+`?`+_variable_name_str_regex

export function getNameOfExportedSet(_str:string) :string[] |undefined {
    const ll = /\s*export\s+\{(\s*\w+\s*,?)+\}\s*(?:;\s*)?/;
    let matches = ll.exec(_str);
    
    let all_class_arr =[]

    if(!matches) return undefined 
    
    do {
        
      const capturedNames = matches.slice(1);
      const capturedIndex = matches.index + matches[0].indexOf(capturedNames[0]);
      _str=_str.substring(0,capturedIndex)+_str.substring(capturedIndex+capturedNames[0].length,_str.length)
      all_class_arr=all_class_arr.concat(capturedNames)
      matches = ll.exec(_str);
      
    }while (matches) 


    return all_class_arr.map((_str)=> /\s*(\w+)\s*,?/.exec(_str)[1])

}

export function isAVariableRegex(_str:string){ /*console.log("DEBUG_ME",getCurrentLine());*/    
    return getRegexGM(getUnionNonMatchingGroups(variable_name_str_regex,variable_export_name_str_regex)).test(_str)
}

export function getVariableNameRegex(_str:string){ /*console.log("DEBUG_ME",getCurrentLine());*/
let res = getRegexGM(getUnionNonMatchingGroups(variable_name_str_regex,variable_export_name_str_regex)).exec(_str)
return res? res[1] : undefined;
}


export function isAFunctionRegex(_str:string){ /*console.log("DEBUG_ME",getCurrentLine());*/
  return getRegexGM(getUnionNonMatchingGroups(function_name_str_regex,arrowFunction_name_str_regex)).test(_str)
}

export function getFunctionNameRegex(_str:string){ /*console.log("DEBUG_ME",getCurrentLine());*/
  let res=getRegexGM(getUnionNonMatchingGroups(function_name_str_regex,arrowFunction_name_str_regex)).exec(_str)
  return res? res[1] : undefined;
}

export function getExportedFunctionNameRegex(_str:string){ /*console.log("DEBUG_ME",getCurrentLine());*/
  let res=getRegexGM(`${embedNonCapturingGroupStrOrRegex(function_export_name_str_regex,true)}|${embedNonCapturingGroupStrOrRegex(arrowFunction_export_name_str_regex,true)}`).exec(_str)
  return res? res[1] : undefined;
}

export function getExportedClassNameRegex(_str:string){ /*console.log("DEBUG_ME",getCurrentLine());*/
    let res=getRegexGM(`${classname_exports_str_regex}`).exec(_str)
    return res? res[1] : undefined;
}


export function getCommentRegex() {
    return `(?:${deb_commentary}[^\n\r]*)\\s*`;
}

export function removeCommentRegex(_str:string,to_ignore_comment ?: string ){ /*console.log("DEBUG_ME",getCurrentLine());*/
    let res =_str
    if(to_ignore_comment==undefined)res= _str.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
    else res= _str.replace(getRegexGM(`\\/\\*[\\s\\S]*?\\*\\/|([^\\\\:]|^)\\/\\/(?![^\\S\\n]*${to_ignore_comment}).*$`), '$1');
    return res
}
