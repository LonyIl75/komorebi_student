import getCurrentLine from "get-current-line"
import { EmptyInit, AHaveSerializer, haveSerializerAndEmptyInit, t_j } from "@shared/m_json.js";
import {AArgumentConverter,IArgumentConverter} from "../ArgumentConverter.js"; 
import { IJson } from "@shared/m_object.js";


export interface IArgTranslate  extends IArgumentConverter{
    query_text :string ,
    to_language :string ,
    translator ?:string ,
    from_language ?:string 
}

export class ArgTranslate extends AArgumentConverter<ArgTranslate>  implements  IArgTranslate   {


    query_text :string ;
    to_language :string ;
    translator ?:string ;
    from_language ?:string ;


    static isTypeof: (obj: AHaveSerializer<ArgTranslate>) => boolean = (obj:AHaveSerializer<ArgTranslate>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return haveSerializerAndEmptyInit._isTypeof(ArgTranslate.getEmptyInit(),obj)
    }

    isTypeof = ArgTranslate.isTypeof    

    static emptyObject : EmptyInit<ArgTranslate>  = new EmptyInit<ArgTranslate>(ArgTranslate) ;

    static getEmptyInit: () => ArgTranslate = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return ArgTranslate.emptyObject.emptyInit() ;
    }

    getEmptyInit: () => ArgTranslate = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return ArgTranslate.getEmptyInit() ;
    }
    

    setSerializer() {
        throw new Error("Method not implemented.");
    }


    static toJson = (obj:ArgTranslate)  =>
    {
        return {...AArgumentConverter.toJson(obj),query_text:obj.query_text , to_language:obj.to_language,translator:obj.translator,from_language:obj.from_language} as const 
    }

    static fromJson = (json: IJson) : ArgTranslate =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return new ArgTranslate(json.query_text,json.to_language,json.translator,json.from_language)
    }

    constructor(query_text:string ="",to_language:string="",translator ?:string,from_language ?:string){ /*console.log("DEBUG_ME",getCurrentLine());*/
        super({toJson:ArgTranslate.toJson, fromJson : ArgTranslate.fromJson });
        this.query_text = query_text;
        this.to_language = to_language;
        this.translator = translator;
        this.from_language = from_language;
    }
         
}