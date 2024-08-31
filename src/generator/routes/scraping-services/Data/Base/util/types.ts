import { CodeGenerator } from "@/generator/utils/types.js";
import { IVoid } from "@shared/m_object.js";

export const embeddingUtil = <_R extends string>(route:_R)=> `util${route}` as const
export type t_embeddingUtil < _R extends string > = typeof embeddingUtil<_R>

export type IUtilData<SN extends string , _R extends string, R extends t_embeddingUtil<_R> = t_embeddingUtil<_R>  > = 
CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">
