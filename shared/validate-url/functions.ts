import getCurrentLine from "get-current-line"
import { EmbeddingPASGroup } from "@shared/m_regex_prefixAndSuffix.js"
import regex_url, { str_protocolAndDomain } from "./regexp.js"
import { str_bodyUrl, str_domain, str_head_http_https, str_paramsUrl, str_sld, str_subdomain } from "./_types.js"
import { joinEndParamUrl, t_end_paramUrl } from "./types.js"
import { filterNotElmArr, removeFirstArray } from "@shared/type.js"
import { nullOrUndefined, t__isNullOrUndefined } from "@shared/m_primitives.js"

export const getBodyUrlAndParamsReq = <T extends string>(url:T)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const strRegex_match_bodyAndReq = regex_url.buildGroupRegexp({
        [str_bodyUrl]: { 
            _:EmbeddingPASGroup.name
        },
        [str_paramsUrl]:{
            childs:{
                [`_${str_paramsUrl}` as const ]:{
                    _:EmbeddingPASGroup.name
                }

        }
        }
    } as const )
    const match_bodyAndReq = url.match(new RegExp(strRegex_match_bodyAndReq))
    const [_bodyUrl,_paramsUrl] = [match_bodyAndReq[1],match_bodyAndReq[2]]
    return {bodyUrl:_bodyUrl,paramsUrl:_paramsUrl}
}

export const getProtocolAndDomain= <T extends string>(url:T)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const strRegex_match_protocolAndDomain = regex_url.buildGroupRegexp({
        [str_bodyUrl]: { 
            childs:{
                [str_protocolAndDomain ]:{
                    childs: {
                        [str_head_http_https]:{
                            _:EmbeddingPASGroup.name
                        } ,
                        [str_domain]:{
                            _:EmbeddingPASGroup.name
                        }
                    }
                }
            }
        }
    } as const )
    const match_protocolAndDomain = url.match(new RegExp(strRegex_match_protocolAndDomain))
    const [_protocol,_domain] = [match_protocolAndDomain[1],match_protocolAndDomain[2]]
    return {protocolUrl:_protocol,domainUrl:_domain}
}

export const getSubDomainAndSld= <T extends string>(url:T)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const strRegex_match_protocolAndDomain = regex_url.buildGroupRegexp({
        [str_bodyUrl]: { 
            childs:{
                [str_protocolAndDomain ]:{
                    childs: {
                        [str_domain]:{
                            childs : {
                                [str_subdomain]:{
                                    _:EmbeddingPASGroup.name
                                },
                                [str_sld]:{
                                    _:EmbeddingPASGroup.name
                                }
                            }
                        }
                    }
                }
            }
        }
    } as const )
    const match_protocolAndDomain = url.match(new RegExp(strRegex_match_protocolAndDomain))
    const [subdomain,sld] = [match_protocolAndDomain[1],match_protocolAndDomain[2]]
    return {subdomainUrl : subdomain , sldUrl:sld}
}


type _t_joinEndParamUrlIfNotEmpty  <Params extends readonly string[], Acc extends string = ""> = 
Params extends readonly [infer A ,...infer R] ? R extends readonly string[] ? A extends string ?
 _t_joinEndParamUrlIfNotEmpty<removeFirstArray<R>,t_end_paramUrl<Acc,A>>  : never: never : Acc

export type t_joinEndParamUrlIfNotEmpty <Params extends readonly string[]>= filterNotElmArr<Params,""|nullOrUndefined> extends infer R ?
R extends readonly string[] ? _t_joinEndParamUrlIfNotEmpty<removeFirstArray<R>,R[0]> : never : ""

export const joinEndParamUrlIfNotEmpty = <Params extends readonly string[]> (..._params:Params) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const params = _params.filter((param)=>param) as filterNotElmArr<Params,""|nullOrUndefined>
    return params.length ? params.reduce((_str,cur_str)=>joinEndParamUrl(_str,cur_str)) : ""  as t_joinEndParamUrlIfNotEmpty<Params>
}
