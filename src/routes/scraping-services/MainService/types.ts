import { t_serviceName_MainService} from "@/controller/scraping-services/Services/Config/types.js";
import { json_serviceRoute } from "./main.js";
import { t_str_login } from "@/controller/scraping-services/class/Config/types.js";

export type t_json_service = typeof json_serviceRoute

export type getPropsFromServiceName_ServiceRoute<SN extends t_serviceName_MainService, R extends (keyof t_json_service[SN])> = 
t_json_service[SN] extends infer A ? R extends keyof A ? A[R] : never: never

export type t_ServiceLogin<SN extends t_serviceName_MainService> = getPropsFromServiceName_ServiceRoute<SN,t_str_login>

export type t_union_routeService =  getPropsFromServiceName_ServiceRoute<t_serviceName_MainService,keyof t_json_service[t_serviceName_MainService]>;

export type t_serviceFromServiceNameAndRoute<SN extends t_serviceName_MainService , R extends (keyof t_json_service[SN])> = getPropsFromServiceName_ServiceRoute<SN,R>
