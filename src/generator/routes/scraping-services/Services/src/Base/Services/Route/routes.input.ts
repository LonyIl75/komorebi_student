import getCurrentLine from "get-current-line"
import { CodeGenerator, genericValueToString} from "@/generator/utils/types.js";
import { AAServiceRequest, t_st_AServiceRequest } from "@/routes/scraping-services/class/utils/Data/ServiceRoute.js";
import { IVoid } from "@shared/m_object.js";


type IRouteService< TBd extends string ="ServiceRequestBodyBase", Thd extends string ="ServiceRequestHeaderBase" >  = 
//CodeGeneratorMbs<t_st_AServiceRequest,FnStaticMb,true>  & CodeGeneratorFcts<t_st_AServiceRequest,FnStaticMbFct,true> & 
CodeGenerator<{_:AAServiceRequest,static:t_st_AServiceRequest},"class",
{_:{body:{type:TBd},header:{type:Thd}},static:IVoid}> 



export class reqOrRes_route<SN extends string , R extends string ,Ext extends string = "AServiceRequest" , TBd extends string ="ServiceRequestBodyBase", Thd extends string ="ServiceRequestHeaderBase"  > implements IRouteService<string,string> {

    _serviceName : SN 
    _routeName : R
    _body : TBd
    _header : Thd

    name : string  

    generics: readonly { id: string; extends: string }[]
    extends: { id: Ext; generics: readonly string[] }
    implements: {id:string,generics:readonly string[]}[]
    isAbstract: false

    constructor(reqOrRes : "req"|"res", _serviceName:SN,_routeName:R,_body:TBd,_header:Thd,ext_id : Ext = "AServiceRequest" as any,ext_generics: readonly string[] = []){ 
        this._serviceName = _serviceName
        this._routeName = _routeName
        this.name = `${reqOrRes}_${this._routeName}`
        this._body = _body
        this._header = _header
        this.extends = {id:ext_id,generics:ext_generics}
    }
    st_constructor(){
        return `constructor(header : ${this._header}= new ${this._header}(),body : ${this._body} = new ${this._body}()) {
            super(header,body,_${this.name}.fromJson);
            
        }`as const 
    }

    body(){
        return `body:${this._body}` as const 
    }
    header(){
        return `header:${this._header}` as const 
    }

    st_emptyObject(){
        return `static emptyObject : EmptyInit<${genericValueToString(this.extends)}>  = new EmptyInit<${genericValueToString(this.extends)}>(_${this.name})` as const 
    }
    st_toJson(){
        return `static toJson = ${this.name}.toJson`as const 
    }

    st_getEmptyInit (){
        return`static getEmptyInit: () =>${genericValueToString(this.extends)}= () =>{ 
            return ${this.name}.emptyObject.emptyInit() ;
        }` as const
    }

    getEmptyInit(){
        return`getEmptyInit: () => ${genericValueToString(this.extends)}= () =>{ 
            return ${this.name}.getEmptyInit() ;
        }`as const 
    }

    st_isTypeof(){
        return `static isTypeof: (obj: AHaveSerializer<${genericValueToString(this.extends)}>) => boolean = (obj:AHaveSerializer<${genericValueToString(this.extends)}>)=>{ 
            return haveSerializerAndEmptyInit._isTypeof(${this.name}.getEmptyInit(),obj)
        }`  as const 
    }

    isTypeof(){ 
        return `isTypeof = ${this.name}.isTypeof` as const 
    }
    st_fromJson(){
        return `static fromJson = (json: IJson) : ${genericValueToString(this.extends)} =>{ 
            return ${genericValueToString(this.extends)}.abstract_fromJson<${this._body},${this._header}>(json,${this.name})
        }` as const 
    }
}

export class req_route<SN extends string , R extends string ,Ext extends string = "AServiceRequest" , TBd extends string ="ServiceRequestBodyBase", Thd extends string ="ServiceRequestHeaderBase"  > extends reqOrRes_route<SN,R,Ext,TBd,Thd> {
    constructor(_serviceName:SN,_routeName:R,_body:TBd,_header:Thd,ext_id : Ext = "AServiceRequest" as any,ext_generics: readonly string[] = []){ 
        super("req",_serviceName,_routeName,_body,_header,ext_id,ext_generics)
    }
}

export class res_route<SN extends string , R extends string ,Ext extends string = "AServiceRequest" , TBd extends string ="ServiceRequestBodyBase", Thd extends string ="ServiceRequestHeaderBase"  > extends reqOrRes_route<SN,R,Ext,TBd,Thd> {
    constructor(_serviceName:SN,_routeName:R,_body:TBd,_header:Thd,ext_id : Ext = "AServiceRequest" as any,ext_generics: readonly string[] = []){ 
        super("res",_serviceName,_routeName,_body,_header,ext_id,ext_generics)
    }
}




export class req_login<SN extends string , R extends string ,Ext extends string = "AServiceRequest<req_body_login<any,any>>" , TBd extends string ="req_body_login<L,P>", Thd extends string ="ServiceRequestHeaderBase"  > extends req_route<SN,R,Ext,TBd,Thd> implements IRouteService<string,string> {
    _serviceName : SN 
    _routeName : R
    _body : TBd
    _header : Thd

    name : string  

    generics: readonly { id: string; extends: string }[]
    extends: { id: Ext; generics: readonly string[] }
    implements: {id:string,generics:readonly string[]}[]
    isAbstract: false

    constructor(_serviceName:SN,_routeName:R,_body:TBd,_header:Thd,ext_id : Ext = "AServiceRequest<req_body_login<any,any>>" as any,ext_generics: readonly string[] = []){ 
        super(_serviceName,_routeName,_body,_header,ext_id,ext_generics)
    }
}
