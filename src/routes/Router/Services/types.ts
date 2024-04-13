import { json_ServiceRoutes } from "./main.js";

export type t_json_ServiceRoutes= typeof json_ServiceRoutes

export type t_serviceName_ServiceRoutes = keyof t_json_ServiceRoutes;

export type getPropsFromServiceName_ServiceRoutes<SN extends t_serviceName_ServiceRoutes> = t_json_ServiceRoutes[SN] 

