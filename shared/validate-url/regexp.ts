// Validate url with the following regex :
/*
(https?):\/\/((?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b)

(?:\/([-a-zA-Z0-9%_\.~]+\/?)+)?

(?:\?((?:[-a-zA-Z0-9%_\.~]+=[-a-zA-Z0-9%_\.~]+\&?)+))?
*/

import { CompositeRegexp, t_CompositeRegexp_getJsonFctEmbeds } from "@shared/m_regexpComposite.js";
import { str_head_http_https, str_sld, str_subdomain, str_tld ,str_domain, str_bodyUrl, str_paramsUrl, t_str_domain, t_str_bodyUrl, t_str_paramsUrl} from "./_types.js";
import { char_headQuery, char_join_paramAssign, str_http, str_https, str_join_protocol } from "./types.js";
import { getUnionNonMatchingGroups } from "@shared/m_regex_prefixAndSuffix.js";
import { convertStrToRegexStr } from "@shared/m_regex.js";

const protocols = [str_http,str_https] as const
const regex_head_http_https = getUnionNonMatchingGroups(...protocols) ;
const regex_subdomain = "[-a-zA-Z0-9@:%_\\+~#=]{1,256}\." as const
const regex_sld = "[-a-zA-Z0-9@:%_\\+~#=]{1,256}"  as const
const regex_domain_tld = "[a-zA-Z0-9()]{1,6}" as const ;

const arrKeys_domain = [str_subdomain,str_sld,str_tld] as const
const regex_schema_domain   = [
    {regex:regex_subdomain,name: arrKeys_domain[0],op:"?"},
    {regex:regex_sld,name: arrKeys_domain[1],joinChar:""},
    {regex:regex_domain_tld,name: arrKeys_domain[2],joinChar:"\\."}
] as const

const regex_domain = new CompositeRegexp<t_str_domain,typeof arrKeys_domain,typeof regex_schema_domain >(str_domain , regex_schema_domain , arrKeys_domain)

const arrKeys_protocolAndDomain = [str_head_http_https/*,"www"*/,str_domain] as const

const regex_schema_protocolAndDomain = [
    {regex:`${regex_head_http_https}${convertStrToRegexStr(str_join_protocol)}`,name: arrKeys_protocolAndDomain[0]},
    //{regex:`${regex_www}\\.`,name : arrKeys_wwwsDomain[1] ,operator:"?"},
    {regex:regex_domain}] as const 

  
export const str_protocolAndDomain = "protocolAndDomain" as const
export type t_str_protocolAndDomain = typeof str_protocolAndDomain
const regex_protocolAndDomain = new CompositeRegexp<t_str_protocolAndDomain , typeof arrKeys_protocolAndDomain,typeof regex_schema_protocolAndDomain  >(str_protocolAndDomain , regex_schema_protocolAndDomain , arrKeys_protocolAndDomain)


const regex_str_url = "[-a-zA-Z0-9%_\.~]+" as const 
const regex_param_body = regex_str_url

const arrKeys_regex_params_body =["param_1","param_i"] as const
const regex_schema_params_body = [{
        regex:regex_param_body,
        name:"param_1"
    },{
        regex:`\\/${regex_param_body}`,
        name:"param_i",
        operator:"*"
    }
] as const
const str_params_body = "params_body" as const
type t_str_params_body = typeof str_params_body 
const regex_params_body = new CompositeRegexp<t_str_params_body, typeof arrKeys_regex_params_body,typeof regex_schema_params_body >(str_params_body , regex_schema_params_body , arrKeys_regex_params_body)

const arrKeys_regex_bodyUrl =[str_protocolAndDomain,str_params_body] as const
const regex_schema_bodyUrl = [{
        regex:regex_protocolAndDomain,
    },{
        regex:regex_params_body,
        joinChar:"\\/"
    }
] as const 


const regex_bodyUrl = new CompositeRegexp<t_str_bodyUrl,typeof arrKeys_regex_bodyUrl,typeof regex_schema_bodyUrl >(str_bodyUrl , regex_schema_bodyUrl , arrKeys_regex_bodyUrl)


const regex_param = `${regex_str_url}=${regex_str_url}` as const

const __arrKeys_regex_paramsUrl =["paramUrl_1","paramUrl_i"] as const
const __regex_paramsUrl = [{
        regex:regex_param,
        name:"paramUrl_1"
    },{
        regex:`${convertStrToRegexStr(char_join_paramAssign)}${regex_param}`,
        name:"paramUrl_i",
        operator:"*"
    }
] as const


const regex_schema_params_req = new CompositeRegexp<`_paramsUrl`,typeof __arrKeys_regex_paramsUrl ,typeof __regex_paramsUrl  >(`_paramsUrl`,__regex_paramsUrl  ,__arrKeys_regex_paramsUrl )


const arrKeys_embedOpt_regex_paramsUrl =  ["embedding",`_paramsUrl`] as const
const regex_schema_embedOpt_regex_paramsUrl = [
    {
      regex:convertStrToRegexStr(char_headQuery),
      name:"embedding",
    },{
        regex: regex_schema_params_req,
    }
] as const
export const regex_embedOpt_regex_paramUrl = new CompositeRegexp<t_str_paramsUrl,typeof arrKeys_embedOpt_regex_paramsUrl,typeof regex_schema_embedOpt_regex_paramsUrl >(str_paramsUrl , regex_schema_embedOpt_regex_paramsUrl , arrKeys_embedOpt_regex_paramsUrl)

const arrKeys_regex_url =[str_bodyUrl,str_paramsUrl] as const
const regex_schema_regex_url = [{
        regex:regex_bodyUrl,
    },{
        regex:regex_embedOpt_regex_paramUrl,
        operator:"?"
    }
] as const


const str_url = "url" as const
type t_str_url = typeof str_url
const regex_url = new CompositeRegexp<t_str_url,typeof arrKeys_regex_url,typeof regex_schema_regex_url >(str_url , regex_schema_regex_url ,arrKeys_regex_url)


export type t_regex_url_fctEmbeds = t_CompositeRegexp_getJsonFctEmbeds<typeof regex_url>
export default regex_url