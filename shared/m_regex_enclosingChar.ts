import { _isFunction, _isNullOrUndefined } from "./m_primitives.js"
import { convertStrToRegexStr, t_strRegex, t_transformRegexOrStrWithPreSelectTransform, validateIsRegexFlags } from "./m_regex.js"
import { regexOrStrToBeginAndEndOfLine, regexOrStrToCapturingGroup } from "./m_regex_prefixAndSuffix.js"
import { isStrEmptyOrNullOrUndefined, t_isStrEmptyOrNullOrUndefined } from "./m_string.js"



export class EnclosingChars<t_open extends string = string, t_close extends string = string> {
    static idx_open :0 = 0
    static idx_close : 1= 1

    _enclosingPairRegex:[t_strRegex,t_strRegex]
    enclosingPair:[t_open,t_close]

    constructor(open :t_open , close:t_close) {
        this._enclosingPairRegex = null
        this.enclosingPair = [open, close]
    }

    _toStrRegex() {
        return this.enclosingPair.map((_str) => convertStrToRegexStr(_str) )  as [t_strRegex,t_strRegex]
    }

    get openingChar() {
        return this.enclosingPair[EnclosingChars.idx_open]
    }

    get closingChar() {
        return this.enclosingPair[EnclosingChars.idx_close]
    }

    get openingCharRegex() {
        return this.enclosingPairRegex[EnclosingChars.idx_open]
    }

    get closingCharRegex() {
        return this.enclosingPairRegex[EnclosingChars.idx_close]
    }


    get enclosingPairRegex() {
        if (!this._enclosingPairRegex) this._enclosingPairRegex = this._toStrRegex()
        return this._enclosingPairRegex
    }
    
    encloseStr<T extends string > (str:T) {
        type t_enclose <_T extends string> = `${t_open}${_T}${t_close}`
        type t_ret_encloseStr<_T extends string> = string extends _T ? t_enclose<_T> : t_isStrEmptyOrNullOrUndefined<_T> extends true ? '' : t_enclose<_T>
        return (isStrEmptyOrNullOrUndefined(str ) ? "" : this.openingChar + str + this.closingChar ) as t_ret_encloseStr <T>
    }

    encloseRegex<F extends string = undefined > (regex :RegExp , flags : validateIsRegexFlags<F> = undefined) {
        return new RegExp(this.openingCharRegex + regex.source + this.closingCharRegex, flags || regex.flags) 
    }

    getValueBetweenEnclosingChars(str :string , fct_change_regex : t_transformRegexOrStrWithPreSelectTransform<false,undefined,RegExp> = regexOrStrToBeginAndEndOfLine, _getGroupRegex :RegExp = new RegExp(regexOrStrToCapturingGroup(`[^${this.closingCharRegex}]+`,true))) {
        let replace_regex : RegExp = this.encloseRegex(_getGroupRegex)
        if (_isFunction(fct_change_regex)) replace_regex = fct_change_regex(replace_regex, false)
        return str.replace(this.encloseRegex(replace_regex), "$1")
    }
}

//TODO : json config better then array ?
export const pairsOfEnclosingChars = [
    new EnclosingChars("(", ")"), new EnclosingChars("[", "]"),
    new EnclosingChars("{", "}"), new EnclosingChars("<", ">"), new EnclosingChars("`", "`"),
    new EnclosingChars("'", "'"), new EnclosingChars("\"", "\"")] as const 

const replaceEnclosingCharIfExist = (paramStr : string , paramPairsEnclosingChars : EnclosingChars[] , paramPairChars: EnclosingChars ) => {
    let [beg_idx, end_idx] = [0, paramStr.length - 1]
    return paramPairsEnclosingChars.some((pair) => new RegExp(pair.openingCharRegex).test(paramStr[beg_idx]) && new RegExp(pair.closingCharRegex).test(paramStr[end_idx])) 
    ? paramPairChars.encloseStr(paramStr.substring(beg_idx + 1, end_idx)) 
    : paramStr
}

export const removeEnclosingChars = (paramStr: string, paramPairsEnclosingChars?: EnclosingChars[]) => {
    if (_isNullOrUndefined(paramPairsEnclosingChars)) paramPairsEnclosingChars = [...pairsOfEnclosingChars]
    return replaceEnclosingCharIfExist(paramStr, paramPairsEnclosingChars, new EnclosingChars("", ""))
}

export function enclosingChars_openingChars(arr_enclosingChars: EnclosingChars[]) {
    return arr_enclosingChars.map((enclosingChars) => enclosingChars.openingChar)
}

export function enclosingChars_closingChars(arr_enclosingChars: EnclosingChars[]) {
    return arr_enclosingChars.map((enclosingChars) => enclosingChars.closingChar)
}
