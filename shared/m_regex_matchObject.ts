import getCurrentLine from "get-current-line"
import { isEndIdx } from "./type.js"

const getInvalidMatchObject = () => null
export type t_invalid_MatchObject = ReturnType<typeof getInvalidMatchObject>

export class MatchObject {

    static df  ={
        match : null,
        beg : 0,
        end : -1
    }as const 

    static getNotFoundMatch = getInvalidMatchObject 

    static isNotFoundMatch(obj:t_matchObject) { 
        return obj === MatchObject.getNotFoundMatch() || obj.match === MatchObject.getNotFoundMatch()
    }

    _match : string|t_invalid_MatchObject
    _beg : number 
    _end : number 

    constructor(match : string|t_invalid_MatchObject = MatchObject.df.match, beg: number = MatchObject.df.beg, end : number = MatchObject.df.end) { 
        this._match = match
        this._beg = beg
        this._end = end
    }

    get match() {
        return this._match
    }

    get beg() {
        return this._beg
    }

    get end() {
        return this._end
    }

    
}

type t_matchObject = MatchObject | t_invalid_MatchObject

export const getMatchAndPosFromRegexMatching = (_str : string , regex : RegExp , num_groups : number[]= [0]) =>{ 
    const res = regex.exec(_str)
    return _getMatchAndPosFromRegexMatching(res, num_groups)
}


export const getMatchAndPosFromRegexMatchingInterval = (_str : string , regex : RegExp , interval_num_groups ?: [arg_beg:number,arg_end?:number]) =>{ 
    const res = regex.exec(_str)
    if(res) {  
        if(interval_num_groups === undefined) interval_num_groups = [0]
        if(interval_num_groups.length == 1 || isEndIdx(interval_num_groups[1]) ) interval_num_groups = [interval_num_groups[0],res.length-1]
    }
    let num_groups = []
    for (let i = interval_num_groups[0]; i <= interval_num_groups[1]; i++)  num_groups.push(i)

    return _getMatchAndPosFromRegexMatching(res,num_groups)
}

const _getMatchAndPosFromRegexMatching = (res : RegExpMatchArray , num_groups : number[]= [0]) =>{ 
    let res_arr : t_matchObject[] = []
    if (res) { 
        let start_idx = res.index
        let res_group = null
        for (const num_group of num_groups) { 
            res_group = res[num_group]
            res_arr.push(res_group ? new MatchObject(res_group, start_idx, start_idx + res_group.length) : MatchObject.getNotFoundMatch())
        }
    }
    return res_arr
}

export const getMatchAndPosFromRegexMatchingFullMatch = (_str : string , regex : RegExp) => getMatchAndPosFromRegexMatching(_str, regex, [0])[0]
export const getArrMatchFromRegexMatching = (_str : string , regex : RegExp, num_groups : number[] = [0]) => getMatchAndPosFromRegexMatching(_str, regex, num_groups).map((elm) => elm.match)
