import { t_serviceName_entreprise_ } from "@/controller/scraping-services/Services/Config/entreprise_/config.js"
import { DatabaseLocalAndRemote } from "@shared/m_database.js"
import HA_Entreprise_ServiceMain , { t_str_main, str_main } from "./human-actions.js"
import pipelineBuilder from "./pipeline.js"
import { req_main, res_main } from "./routes.input.js"
import { Entreprise_Service, IAService_3 } from "../../class/AService.js"
import { getRouteRemoteAddressFromServiceNameAndIdRoute } from "@/controller/scraping-services/Services/Config/types.js"
import {  t_verifyStatic } from "@shared/type.js"
import { t_st_service_3 } from "@/routes/scraping-services/Services/class/AService.js"
import { t_st_AService } from "@/routes/scraping-services/class/Services/AService.js"


export abstract class _st_Entreprise_ServiceMain extends Entreprise_Service<t_str_main> {
    static address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_entreprise_ , t_str_main > = undefined 
    static databaseLocalAndRemote : DatabaseLocalAndRemote<t_serviceName_entreprise_>  
}


type IStEntreprise_ServiceMain = t_verifyStatic<typeof _st_Entreprise_ServiceMain ,t_st_service_3<t_serviceName_entreprise_>,true> 
& t_verifyStatic<typeof _st_Entreprise_ServiceMain ,t_st_AService<t_serviceName_entreprise_>,true>  

const _Entreprise_ServiceMain = _st_Entreprise_ServiceMain as {
    new (...args:ConstructorParameters<typeof Entreprise_Service<t_str_main>>): Entreprise_Service<t_str_main>
} & IStEntreprise_ServiceMain


export class Entreprise_ServiceMain extends _Entreprise_ServiceMain implements IAService_3<t_str_main> {

    constructor(_address:getRouteRemoteAddressFromServiceNameAndIdRoute <t_serviceName_entreprise_ , t_str_main > = Entreprise_ServiceMain.address ,_databaseLocalAndRemote :DatabaseLocalAndRemote<t_serviceName_entreprise_>  = Entreprise_ServiceMain.databaseLocalAndRemote) {
        if(Entreprise_ServiceMain.address === undefined )Entreprise_ServiceMain.address = _address
        if(_address == undefined) throw new Error("address is undefined")

        if(Entreprise_ServiceMain.databaseLocalAndRemote === undefined ){
            Entreprise_ServiceMain.databaseLocalAndRemote = _databaseLocalAndRemote
            HA_Entreprise_ServiceMain.getDatabaseLocalAndRemote = ()=>Entreprise_ServiceMain.databaseLocalAndRemote
        }
        if(_databaseLocalAndRemote == undefined) throw new Error("address is undefined")

        super(str_main,_address,_databaseLocalAndRemote);
    }

    getNamesOfPipelineFunction() {
        return [...HA_Entreprise_ServiceMain.namesOfPipelineFunction()] as const
    }

    getLocalPipelineFunction(req : req_main,res:res_main )  {
        return null 
    }

    getServicePipelineFunction(req : req_main,res:res_main )  {
        type t_arr_fcts = ReturnType< typeof this.getNamesOfPipelineFunction>
        return pipelineBuilder.createPipeline<t_arr_fcts> (req.body.pipeline.body as any ,req.body.pipeline.op as any)
    }

}
