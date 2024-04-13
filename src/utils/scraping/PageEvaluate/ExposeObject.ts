
import { FrameAddScriptTagOptions} from "puppeteer";
import {ExposeObjectOrFunction} from "./ExposeObjectOrFunction.js";
import { haveSerializerAndEmptyInit } from "@shared/m_json.js";


export type t_exposeObject<T> =haveSerializerAndEmptyInit<T>   ;
    
    export class ExposeObject<T extends t_exposeObject<T>> extends ExposeObjectOrFunction<T> {
        
        constructor(_obj:T , classType : { new (): T } ,required?:FrameAddScriptTagOptions[], scriptTag?:FrameAddScriptTagOptions , name ?: string){
            if(scriptTag == undefined && classType!== undefined ) scriptTag = {content : classType.toString() }
            else if( scriptTag == undefined && classType == undefined ) throw new Error("scriptTag == undefined && classType == undefined"); 
            super(_obj,name,scriptTag,required);

        }


        static emptyObject :  ExposeObject<any>  = null ;
        static isEmptyObject(obj:ExposeObject<any>):boolean{
            return obj == ExposeObject.emptyObject;
        }

        
    };


 