import MRegExp, { t_regexpFlags, t_strRegex } from "./_regexp.js"
import { _isFunction, _isNullOrUndefined } from "./m_primitives.js"
import { convertStrToRegexStr, t_convertStrToRegexStr, t_transformRegexOrStrWithPreSelectTransform } from "./m_regex.js"
import { embedBeginAndEndOfLineStrOrRegex, embedCapturingGroupStrOrRegex } from "./m_regex_prefixAndSuffix.js"
import { isStrEmptyOrNullOrUndefined, t_isStrEmptyOrNullOrUndefined } from "./m_string.js"
import { Fn, t_functionFn } from "./type.js"


const getValueBetweenEnclosingCharsParamDf = <T extends string >(closingCharRegex:T)=> new MRegExp(embedCapturingGroupStrOrRegex(`[^${closingCharRegex}]+`,true))
type t_getValueBetweenEnclosingCharsParamDf<T extends string > = ReturnType<typeof getValueBetweenEnclosingCharsParamDf<T>>

type t__encloseStr<T extends EnclosingChars<t_open, t_close>,t_open extends string , t_close extends string , B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string  , _F extends t_regexpFlags> = 
_T extends MRegExp<_S,_F> ?  MRegExp<`${t_open}${_T["source"]}${t_close}`,_F>: _T extends string ? `${t_open}${_T}${t_close}` :never 

type t_ret_encloseStr<T extends EnclosingChars<t_open, t_close>,t_open extends string,t_close extends string,  B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined    >  =  _T extends string ? 
t_isStrEmptyOrNullOrUndefined<_T> extends true ? "" : t__encloseStr<T,t_open,t_close,B,_T,_S,_F> 
:t__encloseStr<T,t_open,t_close,B,_T,_S,_F> 

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
        return this.enclosingPair.map((_str) => convertStrToRegexStr(_str) )  as [t_convertStrToRegexStr<t_open> ,t_convertStrToRegexStr<t_close> ]
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
    
    enclose<B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string = undefined , _F extends t_regexpFlags = undefined    > (str:_T,isStr : B ) {
        
        type t__encloseStr<B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string  , _F extends t_regexpFlags   ,_t_open extends string = string, _t_close extends string = string> = 
        _T extends MRegExp<_S,_F> ?  MRegExp<`${_t_open}${_T["source"]}${_t_close}`,_F>: _T extends string ? `${_t_open}${_T}${_t_close}` :never 
        
        const _enclose = <B extends boolean,_T extends (B extends true ? string : MRegExp<_S,_F>) , _S extends string  , _F extends t_regexpFlags   ,_t_open extends string = string, _t_close extends string = string>
        (_strOrRegex:_T, isStr : B,_open : _t_open , _close : _t_close ) => {
            const _str = isStr ? _strOrRegex as string : (_strOrRegex as MRegExp<_S,_F>).source
            const _res = `${_open}${_str}${_close}` as const 
            return isStr ? _res : new MRegExp<typeof _res , _F>(_res,(_strOrRegex as MRegExp<_S,_F>).flags ) as t__encloseStr< B,_T,_S,_F,_t_open,_t_close> 
        }
        
        const rest_param = (isStr ? [true,this.openingChar,this.closingChar] : [false,this.openingCharRegex,this.closingCharRegex]) as [B, t_open , t_close]
        return ( isStr && isStrEmptyOrNullOrUndefined(str as string ) ? "" : _enclose<B,_T,_S,_F,t_open,t_close>(str,...rest_param) ) as t_ret_encloseStr< this,t_open,t_close,B,_T,_S,_F>
    }
    encloseStr<_T extends string >(str :_T) {
        return this.enclose<true,_T>(str,true)
    }
    encloseRegex<_T extends MRegExp<_S,_F> ,_S extends string = undefined , _F extends t_regexpFlags = undefined  > (regex :_T) {
        return this.enclose<false,_T,_S,_F>(regex,false)
    }

    //A FAIRE : add type 
    //and also do FctChange = typeof embedBeginAndEndOfLineStrOrRegex
    //@ts-ignore
   getValueBetweenEnclosingChars<T extends string ,FctChange extends t_transformRegexOrStrWithPreSelectTransform<false,MRegExp<string,string>,_Fn,Fct,string,string> , _Fn extends Fn<[string],string> ,Fct extends t_functionFn<_Fn>, R extends MRegExp<_S,_F> = t_getValueBetweenEnclosingCharsParamDf<t_close> , _S extends string =t_close, _F extends string = undefined > (str :T , fct_change_regex : FctChange = embedBeginAndEndOfLineStrOrRegex as any , _getGroupRegex :R = getValueBetweenEnclosingCharsParamDf(this.closingCharRegex) as R ) {
        const replace_regex = this.encloseRegex<R,_S,_F>(_getGroupRegex)
        let _res 
        if (!_isNullOrUndefined(fct_change_regex)) _res = fct_change_regex(replace_regex, false)
        return str.replace(this.encloseRegex(_res), "$1")
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
