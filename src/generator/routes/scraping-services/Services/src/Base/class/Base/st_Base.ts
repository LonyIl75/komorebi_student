import { CodeGenerator, t_member} from "@/generator/utils/types.js"
import { _AService, t_st_service_2 } from "@/routes/scraping-services/class/Services/AService.js"
import { IVoid } from "@shared/m_object.js"
import { majFirstChar } from "@shared/m_string.js"


type IStService<SN extends string , R extends string  > = 
 CodeGenerator<{_:IVoid , static : t_st_service_2<string>},"class",{
    _: IVoid, 
    static :{service:t_member<`_AService<t_serviceName_${SN}>`,`new _AService<t_serviceName_${SN}>(serviceName_${SN})>`>}
},true>


export abstract class st_Service<SN extends string , R extends string> implements IStService<string,string>{

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
    
    st_service(){
        return `static service:_AService<t_serviceName_${this._serviceName}>=new _AService<t_serviceName_${this._serviceName}>(serviceName_${this._serviceName})>` as const
    }

    
}
