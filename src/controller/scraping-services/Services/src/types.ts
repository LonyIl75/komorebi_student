import { json_MainService } from "./main.js";

export type t_json_MainService= typeof json_MainService

export type t_serviceName_MainService = keyof t_json_MainService;

export type getPropsFromServiceName_MainService<SN extends t_serviceName_MainService> = t_json_MainService[SN] 

import { json_doService } from "./main.js";

export type t_json_doService= typeof json_doService

export type t_serviceName_doService = keyof t_json_doService;

export type getPropsFromServiceName_doService<SN extends t_serviceName_doService> = t_json_doService[SN] 
