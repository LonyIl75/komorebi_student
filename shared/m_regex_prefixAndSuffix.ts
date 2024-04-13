import { regex_charUnionStr, sourceRegexToStrRegex, str_beginOfLine_regex, str_endOfLine_regex, t_regex_charUnionStr, transformRegexOrStr, validateIsRegexFlags } from "./m_regex.js"

export class PrefixAndSuffix< P extends string =string, S extends string =""> {

    readonly _prefix:P 
    readonly _suffix:S

    static _valPrefixOrSuffix <T extends string > (prefixOrSuffix :T) {
        return sourceRegexToStrRegex(prefixOrSuffix) as T|""
    }

    constructor(prefix :P = "" as P, suffix : S = "" as S  ) {
        this._prefix = PrefixAndSuffix._valPrefixOrSuffix<P>(prefix) as P
        this._suffix = PrefixAndSuffix._valPrefixOrSuffix<S>(suffix) as S
    }

    static cstFromObj< P extends string =string, S extends string ="">(obj_prefixAndSuffix:PrefixAndSuffix<P,S>) {
        return new PrefixAndSuffix<P,S>(obj_prefixAndSuffix.prefix, obj_prefixAndSuffix.suffix)
    }

    get prefix() {
        return this._prefix
    }

    get suffix() {
        return this._suffix
    }

    encloseStr<T extends string >(str : T ) {
        return this.prefix + str + this.suffix as `${P}${T}${S}`
    }
}

export type t_PrefixAndSuffix = PrefixAndSuffix<string,string>

export const concatStrFct = < P extends string =string, S extends string ="">(prefixAndSuffix:PrefixAndSuffix<P,S>)  => {
    return <T extends string > (str:T) => prefixAndSuffix.encloseStr<T>(str)
}


export const concatRegex = (...argsRegExp: RegExp[]) => joinRegexWithJoinStr("", ...argsRegExp)

export const joinRegexWithJoinStr = (joinStr : string , ...argsRegExp : RegExp[]) => argsRegExp.reduce((acc: RegExp, elm:RegExp) => addStrToRegexOrStr(elm, new PrefixAndSuffix<string>(acc.source + joinStr), false), new RegExp(""))


export const unionRegex = <T extends RegExp[] , JoinChar extends string = t_regex_charUnionStr > (arr_regex : T , joinStr:JoinChar = regex_charUnionStr as JoinChar) => {
    return joinRegexWithJoinStr(joinStr, ...arr_regex)
}

export const addStrToRegexOrStr = <B extends boolean = true , F extends string = undefined,_T extends (B extends true ? string : RegExp) = (B extends true ? string : RegExp) >(param_regexOrStr :_T , prefixAndSuffix : t_PrefixAndSuffix, isStr :B = true as B , flags :validateIsRegexFlags<F> = undefined) => {
    return transformRegexOrStr<B,F,_T>(param_regexOrStr, concatStrFct(prefixAndSuffix), isStr, flags)
  }




//TODO : json config with all common prefix and suffix as we did with enclosingChar + refactor functions 
const prefixAndSuffix_group = new PrefixAndSuffix("(", ")")
const prefixAndSuffix_nonCapturingGroup = new PrefixAndSuffix(prefixAndSuffix_group.prefix + "?:", prefixAndSuffix_group.suffix)
const prefixAndSuffix_optional = new PrefixAndSuffix("", "?")
const prefixAndSuffix_beginOfLine = new PrefixAndSuffix(str_beginOfLine_regex, "")
const prefixAndSuffix_endOfLine = new PrefixAndSuffix("", str_endOfLine_regex)
const prefixAndSuffix_beginAndEndOfLine = new PrefixAndSuffix(str_beginOfLine_regex, str_endOfLine_regex)


export const regexOrStrToBeginOfLine = <B extends boolean = true ,_T extends (B extends true ? string : RegExp)  = (B extends true ? string : RegExp) > (param_regexOrStr: _T, isStr : B= true as B) => {
    return addStrToRegexOrStr(param_regexOrStr, prefixAndSuffix_beginOfLine, isStr)
}

export const regexOrStrToEndOfLine = <B extends boolean = true ,_T extends (B extends true ? string : RegExp)  = (B extends true ? string : RegExp) > (param_regexOrStr: _T, isStr : B= true as B) => {
    return addStrToRegexOrStr(param_regexOrStr,prefixAndSuffix_endOfLine, isStr)
}

export const regexOrStrToBeginAndEndOfLine = <B extends boolean = true ,_T extends (B extends true ? string : RegExp)  = (B extends true ? string : RegExp) > (param_regexOrStr: _T, isStr : B= true as B) => {
    return addStrToRegexOrStr<B,undefined,_T>(param_regexOrStr, prefixAndSuffix_beginAndEndOfLine, isStr)
}

export const regexOrStrToCapturingGroup = <B extends boolean = true ,_T extends (B extends true ? string : RegExp)  = (B extends true ? string : RegExp) >(param_regexOrStr: _T, isStr : B = true as B) => {
    return addStrToRegexOrStr<B,undefined,_T>(param_regexOrStr, prefixAndSuffix_group, isStr)
}

export const regexOrStrToOptional = <B extends boolean = true ,_T extends (B extends true ? string : RegExp)  = (B extends true ? string : RegExp) > (param_regexOrStr: _T, isStr : B= true as B) => {
    return addStrToRegexOrStr(param_regexOrStr, prefixAndSuffix_optional, isStr)
}
export const regexOrStrToNonCapturingGroup = <B extends boolean = true ,_T extends (B extends true ? string : RegExp)  = (B extends true ? string : RegExp) > (param_regexOrStr: _T, isStr : B= true as B) => {
    return addStrToRegexOrStr(param_regexOrStr, prefixAndSuffix_nonCapturingGroup, isStr)
}


//A FAIRE créer autre fichier : m_regex_main.ts 
export const majMinFirstCharStrRegex = <T extends string , F extends string = undefined >(_str:T, flags:validateIsRegexFlags<F> = undefined) => new RegExp(`[${_str[0].toUpperCase()}${_str[0].toLowerCase()}]${_str.substring(1, _str.length)}`, flags)
export const isBeginWith = <B extends boolean = true ,_T extends (B extends true ? string : RegExp)  = (B extends true ? string : RegExp) > (_str : string , param_regexOrStr: _T, isStr : B= true as B) =>{
    let regexOrStr = regexOrStrToBeginOfLine(addStrToRegexOrStr(param_regexOrStr, new PrefixAndSuffix("", "(.*)"), isStr), isStr)
    return (isStr ? new RegExp(regexOrStr as string ) : regexOrStr as RegExp).test(_str)
}