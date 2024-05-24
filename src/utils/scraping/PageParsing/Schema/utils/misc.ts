import getCurrentLine from "get-current-line"
import { selector, selectors } from "@/utils/scraping/DOMElements/Selector/_Selector/type.js"
import { rootClassName } from "../../types.js"
import { convertStrToRegexStr, deleteMatchedStr, replaceIfMatched } from "@shared/m_regex.js"
import { char_child } from "../primitives/Selector.js"

const selector_scope =  `:scope >` as const
type t_selector_scope = typeof selector_scope
const regex_selectorScoped = new RegExp(`^${convertStrToRegexStr(selector_scope)}`)

export const embedding_selector_scope = <T extends selector> (_selector:T)  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return `${selector_scope}${_selector}` as `${t_selector_scope}${T}`
}

export const unEmbedding_selector_scope = <T extends selector> (_selector:T)  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return deleteMatchedStr(_selector,regex_selectorScoped)
}

//TODO near the function _getElmOfNodeComponentValue create function that assemble selector in nodeComponentValue.description , if isScoped then unScoped and replace by char_child
export const join_selectorScoped = <T1 extends selector,T2 extends selector> (prev_selector:T1, _selector:T2,notScopedJoin :string = " ")  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    let [res,_b]=replaceIfMatched(_selector,regex_selectorScoped,"")
    if(!_b)return prev_selector + notScopedJoin + res
    else return prev_selector + char_child + res
}

export const embedding_selectors_scope = <componentClassNameType extends string >(_classname : componentClassNameType ,_selectors: Readonly<selectors> , root_classname : string = rootClassName) : Readonly<selectors> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return _classname!=root_classname ? _selectors.map((select:selector)=>embedding_selector_scope(select)) : _selectors
}