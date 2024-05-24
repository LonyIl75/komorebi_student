import getCurrentLine from "get-current-line"
import { CodeGenerator } from "@/generator/utils/types.js"
import { IAService_2, _AService, t_st_service_3 } from "@/routes/scraping-services/class/Services/AService.js"
import { IVoid } from "@shared/m_object.js"
import { majFirstChar } from "@shared/m_string.js"


type IService<SN extends string , R extends string  > = 
 CodeGenerator<{_:IAService_2<SN,R> , static : IVoid},"class",{
    _: IVoid, 
    static :IVoid
},true>



export abstract class Service<SN extends string , R extends string  >  implements IService<string,string>{

    name : string 
    _routeName: R;
    _serviceName: SN;
    
    generics: readonly { id: string; extends: string }[]
    extends: { id: string; generics: readonly string[] }
    implements: {id:string,generics:readonly string[]}[]
    isAbstract: true

    constructor (_serviceName:SN,_routeName : R){ 
        this._routeName = _routeName
        this._serviceName = _serviceName
        this.name = majFirstChar(this._serviceName)
    }

    getService(){
        return `getService() {
            return ${this.name}Service.service
        }` as const 
    }
    
}