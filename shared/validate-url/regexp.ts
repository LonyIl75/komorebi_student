// Validate url with the following regex :
/*
(https?):\/\/((?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b)

(?:\/([-a-zA-Z0-9%_\.~]+\/?)+)?

(?:\?((?:[-a-zA-Z0-9%_\.~]+=[-a-zA-Z0-9%_\.~]+\&?)+))?
*/

import { CompositeRegexp, t_CompositeRegexp_getJsonFctEmbeds } from "@shared/m_regexpComposite.js";


const regex_head_http_https = "https?" as const;
const regex_www = "www"  as const ;
const regex_subdomain = "[-a-zA-Z0-9@:%_\\+~#=]{1,256}"  as const
const regex_sld = "[-a-zA-Z0-9@:%_\\+~#=]{1,256}"  as const
const regex_domain_tld = "[a-zA-Z0-9()]{1,6}" as const ;

const _arrKeys_domain = ["subdomain","sld","tld"] as const
const _regex_domain   = [
    {regex:regex_subdomain,name:_arrKeys_domain[0]},
    {regex:regex_sld,name:_arrKeys_domain[1],joinChar:"\\."},
    {regex:regex_domain_tld,name:_arrKeys_domain[2],joinChar:"\\."}
] as const

/*type regex_domain = CompositeRegexp<["subdomain","sld","tld"],t_terz,t_df_t_merge_dfTe>

type t_supTerz =  [
  {
   regex : regex_domain 
   name : "sub",
   arr_keys :  ["subdomain","sld","tld"]
  },
  {
     regex : regex_domain
     name : "a",
     arr_keys :  ["subdomain","sld","tld"]
  }]

type regex_sup_domain = ReturnType<typeof CompositeRegexp.st_buildGroupRegexp<["sub","a"],t_supTerz,t_df_t_merge_dfTe,
  {
    sub:{
      childs:{subdomain: {_:t_embedGroupStrRegex}}
    },
    a:{
      _:t_embedGroupStrRegex
    }
    
  }
>>*/

const regex_domain = new CompositeRegexp<typeof _arrKeys_domain,typeof _regex_domain >(_regex_domain ,_arrKeys_domain)

const _arrKeys_wwwsDomain = ["head_http_https","www","domain"] as const

const _regex_wwwsDomain = [
    {regex:`${regex_head_http_https}:\\/\\/`,name:_arrKeys_wwwsDomain[0]},
    {regex:`${regex_www}\\.`,name :_arrKeys_wwwsDomain[1] ,operator:"?"},
    {regex:regex_domain,name:_arrKeys_wwwsDomain[2],arr_keys:_arrKeys_domain}] as const 


const regex_wwwsDomain = new CompositeRegexp<typeof _arrKeys_wwwsDomain,typeof _regex_wwwsDomain  >(_regex_wwwsDomain ,_arrKeys_wwwsDomain)
//const regex_wwwsDomain = `${embedCapturingGroupStrOrRegex(regex_head_http_https)}:\\/\\/${embedNonCapturingGroupStrOrRegex(`${embedCapturingGroupStrOrRegex(regex_www)}\\.`)}?${embedCapturingGroupStrOrRegex(regex_domain)}\\b` as const;


/*type regex_sup_domain = ReturnType<typeof CompositeRegexp.st_buildGroupRegexp<typeof _arrKeys_wwwsDomain,typeof _regex_wwwsDomain,t_df_t_merge_dfTe,
  {
    domain:{
     childs:{
        subdomain: {_:t_embedGroupStrRegex}
        tld: {_:t_embedGroupStrRegex}
     }
    },
    head_http_https:{
      _:t_embedGroupStrRegex
    },
  }
>>*/

const regex_str_url = "[-a-zA-Z0-9%_\.~]+" as const 
const regex_param_body = regex_str_url

const _arrKeys_regex_params_body =["param_1","param_i"] as const
const _regex_params_body = [{
        regex:regex_param_body,
        name:"param_1"
    },{
        regex:`\\/${regex_param_body}`,
        name:"param_i",
        operator:"*"
    }
] as const 
const regex_params_body = new CompositeRegexp<typeof _arrKeys_regex_params_body,typeof _regex_params_body >(_regex_params_body ,_arrKeys_regex_params_body)
//const regex_params_body = `${regex_param_body}${embedNonCapturingGroupStrOrRegex(`\\/${regex_param_body}`)}*` as const;

const _arrKeys_regex_bodyUrl =["wwwsDomain","params_body"] as const
const _regex_bodyUrl = [{
        regex:regex_wwwsDomain,
        name:"wwwsDomain",
        arr_keys:_arrKeys_wwwsDomain
    },{
        regex:regex_params_body,
        name:"params_body",
        arr_keys:_arrKeys_regex_params_body,
        joinChar:"\\/"
    }
] as const 

const regex_bodyUrl = new CompositeRegexp<typeof _arrKeys_regex_bodyUrl,typeof _regex_bodyUrl >(_regex_bodyUrl ,_arrKeys_regex_bodyUrl)
//const regex_bodyUrl = `${embedCapturingGroupStrOrRegex(regex_wwwsDomain)}\\/${embedCapturingGroupStrOrRegex(regex_params_body)}` as const;

const regex_param_req = `${regex_str_url}=${regex_str_url}` as const

const _arrKeys_regex_params_req =["req_param_1","req_param_i"] as const
const _regex_params_req = [{
        regex:regex_param_req,
        name:"req_param_1"
    },{
        regex:`\\&${regex_param_req}`,
        name:"req_param_i",
        operator:"*"
    }
] as const

const regex_params_req = new CompositeRegexp<typeof _arrKeys_regex_params_req,typeof _regex_params_req >(_regex_params_req ,_arrKeys_regex_params_req)
//const regex_params_req = `${regex_param_req}${embedNonCapturingGroupStrOrRegex(`\\&${regex_param_req}`)}*` as const;

const _arrKeys_embedOpt_regex_param =  ["embedding","body"] as const
const _regex_embedOpt_regex_param = [
    {
      regex:"\\?",
      name:"embedding",
    },{
        regex:regex_params_req,
        name:"body",
        arr_keys:_arrKeys_regex_params_req
    }
] as const
const regex_embedOpt_regex_param = new CompositeRegexp<typeof _arrKeys_embedOpt_regex_param,typeof _regex_embedOpt_regex_param >(_regex_embedOpt_regex_param ,_arrKeys_embedOpt_regex_param)

const _arrKeys_regex_url =["bodyUrl","params_req"] as const
const _regex_regex_url = [{
        regex:regex_bodyUrl,
        name:"bodyUrl",
        arr_keys:_arrKeys_regex_bodyUrl
    },{
        regex:regex_embedOpt_regex_param,
        arr_keys : _arrKeys_embedOpt_regex_param,
        name:"params_req",
        operator:"?"
    }
] as const


const regex_url = new CompositeRegexp<typeof _arrKeys_regex_url,typeof _regex_regex_url >(_regex_regex_url ,_arrKeys_regex_url)
//const regex_url = `${embedCapturingGroupStrOrRegex(regex_bodyUrl)}\\?${embedCapturingGroupStrOrRegex(regex_params_req)}?` as const;

/*type regex_sup_domain = ReturnType<typeof CompositeRegexp.st_buildGroupRegexp<typeof _arrKeys_regex_url,typeof _regex_regex_url,t_df_t_merge_dfTe,
  {
    bodyUrl:{
        childs:{
            wwwsDomain:{
                childs:{domain:{
                    childs:{
                        tld:{
                            _:t_embedGroupStrRegex
                        }
                    }
                }
            }
        }
        
    }
  }
}
>>*/

export type t_regex_url_fctEmbeds = t_CompositeRegexp_getJsonFctEmbeds<typeof regex_url>
export default regex_url