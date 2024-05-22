
import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("database","prismaService_prismaService_utils")
const debug_prismaService_utils : Debugger = debug(name_module)




import writeMergedSchema ,{t_arr_key_1,t_arr_key_2,t_val_leaf,t_json_replaceOrStrRegex, t_jsonReplaceValue} from "./prisma.js"
import { str_idRoutes, str_idRoute_home } from '@/controller/scraping-services/class/Config/types.js';
import { IJson, createJsonAsForEach } from '@shared/m_object.js';
import { t_JoinChar_underscore } from '@shared/type.js';
import { t_serviceName_MainService } from '@/controller/scraping-services/Services/Config/types.js';
import { json_ConfigService } from '@/controller/scraping-services/Services/Config/main.js';
import { t_getLocalName, toLocalOrNot } from '@shared/routePath.js';
import { transformRootIdIfAny } from '@/controller/scraping-services/class/Config/IJson_ServiceConfig.js';

async function writeMergedServiceSchema  <SN extends t_serviceName_MainService,
TKJV extends  SN|t_JoinChar_underscore<[SN,string]> =SN|t_JoinChar_underscore<[SN,string]>, 
TK1 extends t_arr_key_1[number]=t_arr_key_1[number] , TK2 extends t_arr_key_2[number]=t_arr_key_2[number], 
V extends t_val_leaf= t_val_leaf, isRegex extends  0|1 = 0, 
JR extends t_json_replaceOrStrRegex<isRegex,TK1> = t_json_replaceOrStrRegex<isRegex,TK1>,
JV extends t_jsonReplaceValue<SN,TKJV,TK1> = t_jsonReplaceValue<SN,TKJV,TK1> >
(service_name:SN ,isLocal:boolean,isDev:boolean,renames_prismaFile ?: TKJV[] , json_value ?:IJson, json_replace_value ?:JR ){
    const idRoutes = json_ConfigService[service_name][str_idRoutes]
    let idRoute_home = json_ConfigService[service_name][str_idRoute_home]
    //@ts-ignore //ts bug 
    const nw_idRoutes : string[] = idRoutes.reduce((acc,idRoute) =>[...acc, transformRootIdIfAny(idRoute ,idRoute_home)],[]) 
    return writeMergedSchema<SN,TKJV,TK1,TK2,V,isRegex,JR,JV>(service_name ,isLocal,isDev,nw_idRoutes,renames_prismaFile , json_value,json_replace_value)
}

export  function f_writeMergedServiceSchema  <SN extends t_serviceName_MainService,
TKJV extends SN|t_JoinChar_underscore<[SN,string]>=SN|t_JoinChar_underscore<[SN,string]> ,TK1 extends t_arr_key_1[number]=t_arr_key_1[number] , TK2 extends t_arr_key_2[number]=t_arr_key_2[number], V extends t_val_leaf= t_val_leaf, isRegex extends  0|1 = 0, 
JR extends t_json_replaceOrStrRegex<isRegex,TK1> = t_json_replaceOrStrRegex<isRegex,TK1>,
JV extends t_jsonReplaceValue<SN,TKJV> = t_jsonReplaceValue<SN,TKJV> >
( service_name:SN ,isLocal:boolean,isDev:boolean,renames_prismaFile ?: TKJV[]){
    return (_json_value ?:IJson, json_replace_value ?:JR) =>  {
        const json_value = createJsonAsForEach(renames_prismaFile.map((rename_prismaFile) => {return {[rename_prismaFile]:{..._json_value}}})) as unknown as JV
        return writeMergedServiceSchema<SN,TKJV,TK1,TK2,V,isRegex,JR,JV>(service_name,isLocal,isDev,[],json_value,json_replace_value)
    }
}

export  function fp_writeMergedServiceSchema  <SN extends t_serviceName_MainService, B extends boolean >
( service_name:SN ,isLocal:B,isDev:boolean){
    type TKJV = B extends true ? t_getLocalName<SN> & t_JoinChar_underscore<[SN,string]> : SN 
    const rename_prismaFile = toLocalOrNot(isLocal,service_name) as TKJV 
    return (json_value :IJson) =>  writeMergedServiceSchema<SN,TKJV>(service_name,isLocal,isDev,[],{[rename_prismaFile]:json_value}) 
}

export default writeMergedServiceSchema