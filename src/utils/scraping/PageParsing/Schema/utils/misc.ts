import getCurrentLine from "get-current-line"
import { selector, selectors } from "@/utils/scraping/DOMElements/Selector/_Selector/type.js"
import { rootClassName } from "../../types.js"
import { convertStrToRegexStr, deleteMatchedStr, replaceIfMatched } from "@shared/m_regex.js"
import { PropertyAndOperator, char_child, classProp, containOp, idProp, t_HTMLTagg, t_PropertyAndOperator_toString, t_operator, t_property } from "../primitives/Selector.js"

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
export const identifierProp = [idProp,classProp] as const
export type t_identifierProp = typeof identifierProp
export type t_getIdentifierPropertyFromTagg < T extends t_HTMLTagg , Op extends t_operator = typeof containOp, ArrProp extends readonly t_property[] = t_identifierProp> = T extends undefined ? never : ArrProp extends readonly [infer A , ... infer R ] ? A extends t_property ? R extends readonly t_property[]  ? [t_PropertyAndOperator_toString<A,Op,T> , ...t_getIdentifierPropertyFromTagg<T,Op,R>] : never : never : []
export const getIdentifierPropertyFromTagg = <T extends t_HTMLTagg , Op extends t_operator = typeof containOp , ArrProp extends readonly t_property[] = t_identifierProp> (tagg:T,op:Op = containOp  as Op ,arr_prop :ArrProp = identifierProp as any ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return  arr_prop.map((_prop)=>new PropertyAndOperator(_prop,tagg,op).toString()) as t_getIdentifierPropertyFromTagg<T,Op,ArrProp>
}

export const getElmSelectorFromTagg = <T extends t_HTMLTagg> (tagg:T) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return [tagg,...getIdentifierPropertyFromTagg<T>(tagg ,containOp)] as const 
}

export const str_footer = "footer" as const
export const str_header = "header" as const
export const str_script = "script" as const

const selector_script = [str_script,"noscript","style"] as const 


export const elem_selector = {
    [str_footer] : getElmSelectorFromTagg(str_footer),
    [str_header]: [...getElmSelectorFromTagg(str_header),...getElmSelectorFromTagg("menu"),...getElmSelectorFromTagg("nav")] as const ,
    [str_script] : selector_script,
}
