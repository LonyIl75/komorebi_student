import getCurrentLine from "get-current-line"
import { DatabaseAndPrismaMeta, DatabaseLocalAndRemote, DatabaseMeta, IDatabaseMetaDB, t_local_typeDatabase, t_remote_typeDatabase } from "@shared/m_database.js";
import {json_localAndRemoteDatabase} from "./Services/main.js";
import { getServicePathClientPrisma } from "./utils/prisma.js";
import { fp_writeMergedServiceSchema } from "./utils/prismaService.js";


var args = process.argv.slice(2);
const main = async (service_names :  string[]) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    let json_result= {
        resolved_bdd : [],
        unresolved_bdd : [],
        waiting : []

    }
    let cur_elm : any = {}
    const _isDev = true 
    for (const _serviceName of service_names) { /*console.log("DEBUG_ME",getCurrentLine());*/
        const serviceName = _serviceName as keyof typeof json_localAndRemoteDatabase
        cur_elm = json_localAndRemoteDatabase[serviceName]
        if(cur_elm){ /*console.log("DEBUG_ME",getCurrentLine());*/
            cur_elm= DatabaseLocalAndRemote.fromRemoteLocalAndPrismasJson(serviceName,DatabaseAndPrismaMeta.toJson<t_remote_typeDatabase,DatabaseMeta & IDatabaseMetaDB<t_remote_typeDatabase>>(cur_elm.remoteDatabase),DatabaseAndPrismaMeta.toJson<t_local_typeDatabase,DatabaseMeta & IDatabaseMetaDB<t_local_typeDatabase>>(cur_elm.localDatabase),cur_elm.prisma_meta,_isDev)
            cur_elm.remoteDatabase.init_function = fp_writeMergedServiceSchema<typeof serviceName,false>(cur_elm.serviceName,false,_isDev)
            cur_elm.localDatabase.init_function = fp_writeMergedServiceSchema<typeof serviceName,true>(cur_elm.serviceName,true,_isDev)
            let r = ["remoteDatabase","localDatabase"].map((k)=>cur_elm[k].initConnection().then((_r)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                json_result.resolved_bdd.push(serviceName)
            }).catch((_e)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                console.log("error",_e)
                json_result.unresolved_bdd.push(serviceName)
            }))
            json_result.waiting.push(...r)
        }else{
            json_result.unresolved_bdd.push(serviceName)
        }
    }
    return Promise.all(json_result.waiting).then(()=>json_result)
}

const result =  await main(args).then((json_result)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    if(json_result.unresolved_bdd.length){ /*console.log("DEBUG_ME",getCurrentLine());*/
        throw new Error("unresolved_bdd :"+JSON.stringify(json_result.unresolved_bdd))
    }
    return json_result.resolved_bdd
})

console.log("resolved_bdd :"+JSON.stringify(result))
