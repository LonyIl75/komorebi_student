import { CodeGenerator } from "@/generator/utils/types.js"
import { IVoid } from "@shared/m_object.js"
import { majFirstChar } from "@shared/m_string.js"


export type IPipeline = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

class PipelineService implements IPipeline{
    _routeName :string 
    _serviceName :string
    
    getFile(){
        return `const ${this._serviceName}_ScrapingJsonTypeHome = {} as any;//main
         type t_${this._serviceName}_ScrapingJsonTypeHome = {} ;



         const arrOfScrapingJsonType_baseService_${this._serviceName}Route = [
            {} as any 
         ]  as const;

         type t_arrOfScrapingJsonType_baseService_${this._serviceName}Route = [
            {}
         ] ;


         const arrOfScrapingJsonType_only_${this._serviceName}Route = [scrapingComponent_${this._serviceName}_startupsMtp] as const 
         type t_arrOfScrapingJsonType_only_${this._serviceName}Route = [t_scrapingComponent_${this._serviceName}_startupsMtp]

         export const arrOfScrapingJsonType_${this._serviceName}Route = [...arrOfScrapingJsonType_baseService_${this._serviceName}Route,${this._serviceName}_ScrapingJsonTypeHome,...arrOfScrapingJsonType_only_${this._serviceName}Route] as const;
         type t_arrOfScrapingJsonType_${this._serviceName}Route = [...t_arrOfScrapingJsonType_baseService_${this._serviceName}Route,t_${this._serviceName}_ScrapingJsonTypeHome,...t_arrOfScrapingJsonType_only_${this._serviceName}Route];


         export type ${majFirstChar(this._serviceName)}ScrapingJsonType<T extends t_idRouteUnion_${this._serviceName} > = getPairedElementValue< T, t_idRoutes_${this._serviceName}, t_arrOfScrapingJsonType_${this._serviceName}Route> 


         export const json_${this._serviceName}ScrapingJsonType = {
            [idRoutes_${this._serviceName}[0]] : arrOfScrapingJsonType_${this._serviceName}Route[0],
            [idRoutes_${this._serviceName}[1]] : arrOfScrapingJsonType_${this._serviceName}Route[1],
            [idRoutes_${this._serviceName}[2]] : arrOfScrapingJsonType_${this._serviceName}Route[2]
         } as const ;

         export type t_json_${this._serviceName}ScrapingJsonType = typeof json_${this._serviceName}ScrapingJsonType ;` as const
      }
   }