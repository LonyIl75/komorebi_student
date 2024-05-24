import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("service_utils","HA")
const debug_service_HA : Debugger = debug(name_module)

import { IJson } from "@shared/m_object.js"
import { t_function } from "@shared/type.js"
import { _notFound, isRetFunctionisNothing, nullOrUndefined } from "@shared/m_primitives.js"
import { df_waitForOptions } from '@/utils/scraping/DOMElements/Selector/_Selector/options.js';
import { Page, WaitForOptions, HTTPResponse } from 'puppeteer';
import { ReqAndResType } from './Data/ReqResRoute.js';
import { isCategoryLayerNeedEmbed, t_embed_lib_retReqRes } from '../Config/Pipeline/types.js';
import { t_req_any, t_res_any } from '@/controller/scraping-services/class/constraints.js';

export function df_transformAfterGetServiceFunction<TReq  extends t_req_any , TRes extends t_res_any , Result extends IJson > (req:TReq , res : TRes ,json:Result){ /*console.log("DEBUG_ME",getCurrentLine());*/
        res.body.result = res.body?.result ?{...res.body.result,...json} : json
        return [req,res] as ReqAndResType<TReq , TRes>
}


export function embed_lib_retReqRes <KCategory extends string , KFct extends string , TL extends { [k in KFct]:t_function}, MCF extends {readonly [kc in KCategory] : readonly KFct[]} >
(lib_pipeline :  TL , map_pipeline: MCF){ /*console.log("DEBUG_ME",getCurrentLine());*/
    let new_lib = {} as any
    for(const category in map_pipeline){ /*console.log("DEBUG_ME",getCurrentLine());*/
        for(const fct of map_pipeline[category]){ /*console.log("DEBUG_ME",getCurrentLine());*/
            new_lib[fct] = isCategoryLayerNeedEmbed(category)?async (...args:any[])=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                let res = await lib_pipeline[fct](...args)
                return isRetFunctionisNothing(res) ? [...args] : [...args,res]
            }:lib_pipeline[fct]
        }
    }
    return new_lib as t_embed_lib_retReqRes<KCategory,KFct,TL,MCF>

}

const verify_url = (url:string):boolean =>{ /*console.log("DEBUG_ME",getCurrentLine());*/return true;} //TODO

export const goto_verified_url = async (page:Page ,url:string , waitForOptions ?: WaitForOptions  ): Promise<HTTPResponse | nullOrUndefined  > =>{ /*console.log("DEBUG_ME",getCurrentLine());*/

    if( verify_url ) { /*console.log("DEBUG_ME",getCurrentLine());*/
        if( !waitForOptions ) waitForOptions = df_waitForOptions;
        await page.goto(url , waitForOptions);
    }
    else return _notFound()
}