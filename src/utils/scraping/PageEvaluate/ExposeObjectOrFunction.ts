import getCurrentLine from "get-current-line"
import type { FrameAddScriptTagOptions } from "puppeteer";
import type { t_exposeObject } from "./ExposeObject.js";
import type { t_exposeFunction } from "./ExposeFunction.js";
import { pathToJoinCharFileName, toFilePath } from "@shared/m_file.js";


export abstract class ExposeObjectOrFunction<T extends t_exposeObject<T> | t_exposeFunction    >  {
    obj : Promise<T>;
    scriptsTag ?:FrameAddScriptTagOptions
    required : FrameAddScriptTagOptions[] = [];
    name :string ;
    use_doc : boolean = false; //use document in param  => expose function + add script tag


    constructor(objOrFunct:T, name ?: string ,scriptTag ?:FrameAddScriptTagOptions, required ?: FrameAddScriptTagOptions[]){ 

        if(objOrFunct === undefined &&  (scriptTag?.path ==undefined || name==undefined)   ) {
            console.log("objOrFunct",objOrFunct, "scriptTag",scriptTag, "name",name)
            throw new Error("objOrFunct == undefined &&  scriptTag?.path  ==undefined ")
        }


        //null ignored because null => empty object <=> declarative object 
        
        this.obj = objOrFunct != undefined?  Promise.resolve(objOrFunct) : (async (name , path ) =>await import (toFilePath(path)).then( module => module[name]) )(name, scriptTag!.path);
        
        //console.log("ExposeObjectOrFunction ",this.obj)
        this.name = name==undefined ?(objOrFunct instanceof Function? objOrFunct.name: objOrFunct.constructor.name ) : name;
        //console.log("objOrFunct ", objOrFunct, this.obj)

        if(scriptTag != undefined) { 
            if(scriptTag.id==undefined ) scriptTag.id =  scriptTag.path ? pathToJoinCharFileName(scriptTag.path,"."):this.name;//TODO 23/02/24
            if(objOrFunct !==null && scriptTag.content == undefined && scriptTag.path  == undefined ) { 
                console.log("scriptTag",JSON.stringify(scriptTag))
                throw new Error("scriptTag.content == undefined && scriptTag.path  == undefined")
            }
            
            this.scriptsTag = scriptTag;
        }
        if(required !== undefined){ 
            this.required = [...required];
        }
    }

    static emptyObject ; 

    getScriptsTag():FrameAddScriptTagOptions{
        return this.scriptsTag;
    }

    getRequired():FrameAddScriptTagOptions[]{
        return this.required;
    }
    
    
    getName():string{
        return this.name;
    }

    async getObj(): Promise<T>{
        return await this.obj;
    }


    // getFunct ():Function |undefined {
    //     return this.obj instanceof Function ? this.obj : undefined }
    //resp for object <=> C union with accessor but not with member 


}
