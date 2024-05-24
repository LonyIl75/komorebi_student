import { _validateRemoteAddress } from "@/controller/scraping-services/class/constraints.js"
import { CodeGenerator} from "@/generator/utils/types.js"
import { IAService_3} from "@/routes/scraping-services/class/Services/AService.js"
import { IVoid } from "@shared/m_object.js"
import { majFirstChar } from "@shared/m_string.js"


type IRouteService <SN extends string , R extends string  > = CodeGenerator<{_:IAService_3<SN,R>,static:IVoid},"class">

export class RouteService<SN extends string , R extends string  > implements IRouteService<string,string>{

    generics: readonly { id: string; extends: string }[]
    extends: { id: string; generics: readonly string[] }
    implements: {id:string,generics:readonly string[]}[]
    isAbstract: false
    name: string

    _routeName :R 
    _serviceName :SN

    st_constructor(){
        return `constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_${this._serviceName} , t_str_${this._routeName} > = ${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_${this._serviceName}>  = ${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}.databaseLocalAndRemote) {
            if(${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}.address === undefined )${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}.address = _address
            if(_address == undefined) throw new Error("address is undefined")
    
            if(${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}.databaseLocalAndRemote === undefined ){
                ${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}.databaseLocalAndRemote = _databaseLocalAndRemote
                HA_LespepitestechServiceStartupsMtp.getDatabaseLocalAndRemote = ()=>${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}.databaseLocalAndRemote
            }
            if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")
    
            super(str_${this._routeName},_address,_databaseLocalAndRemote);
        }` as const 
    }

    getNamesOfPipelineFunction() {
        return `getNamesOfPipelineFunction() {
            return [...HA_${majFirstChar(this._serviceName)}Service${majFirstChar(this._routeName)}.namesOfPipelineFunction()] as const
        }` as const 
    }
    getLocalPipelineFunction() {
        return `getLocalPipelineFunction(req : req_${this._routeName},res:res_${this._routeName} )  { 
            return null 
        }` as const 
    }
    getServicePipelineFunction() {
        return `getServicePipelineFunction(req : req_${this._routeName},res:res_${this._routeName} )  { 
            type t_arr_fcts = ReturnType< typeof this.getNamesOfPipelineFunction>
            return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
        }` as const 
    }
    
}
