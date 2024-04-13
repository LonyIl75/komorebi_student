import {json_localAndRemoteDatabase} from "./main.js";

export type t_json_localAndRemoteDatabase= typeof json_localAndRemoteDatabase

export type t_serviceName_localAndRemoteDatabase = keyof t_json_localAndRemoteDatabase;

export type getPropsFromServiceName_localAndRemoteDatabase<SN extends t_serviceName_localAndRemoteDatabase> = t_json_localAndRemoteDatabase[SN]