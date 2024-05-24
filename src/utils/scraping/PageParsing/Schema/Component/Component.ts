import getCurrentLine from "get-current-line"
import { deepCloneJson, AHaveSerializer } from "@shared/m_json.js";
import { IJson } from "@shared/m_object.js";
import { _notFoundIdx } from "@shared/type.js";
import ChildAttributeType, { IChildAttributeType } from "../_Component/ChildAttributeType/ChildAttributeType.js";
import { _IComponent } from "../_Component/_Component.js";
import { str_childs_selectors, t_childsSelectors, str_childs_attributes, t_str_childs_selectors, t_str_childs_attributes, isEmptyChildSelectors, str_isScoped, t_str_isScoped} from "../_Component/types.js";
import { str_type, str_childs_components, t_childs_components, str_class_name, df, t_str_type, t_str_childs_components, t_str_class_name, isEmptyChildsComponents, t_child_component} from "./types.js";
import { TypeChilds, ITypeChilds } from "../../TypeChilds/TypeChilds.js";
import { StrChildType } from "../../TypeChilds/types.js";
import { str_value_init, t_value_init, str_value_validation_strRegex, t_value_validation_strRegex } from "../_Component/ValTextContent/types.js";
import { ValTextContent, t_cst_args } from "../_Component/ValTextContent/ValTextContent.js";


export interface IComponent <unionclassname  extends string , UnionChildsClassName extends string  = unionclassname > extends _IComponent {
    [str_type]:StrChildType.t_childType<unionclassname>  ; 
    [str_childs_components] : t_childs_components<UnionChildsClassName> ; 
    [str_class_name] : unionclassname ; //ici 18/08
    //[str_isScoped] : boolean ;
}

//type t_childs_components < UnionChildsClassName extends string > = UnionChildsClassName  extends t_component_empty_childs[0] ? t_component_empty_childs :  TypeChilds<UnionChildsClassName>[] ; 
export class Component<unionclassname  extends string , UnionChildsClassName extends string = unionclassname > extends AHaveSerializer<Component<unionclassname,UnionChildsClassName>> implements IComponent<unionclassname,UnionChildsClassName> {
    [str_type]:StrChildType.t_childType<unionclassname>  ; 
    [str_childs_selectors] :t_childsSelectors ;

    [str_childs_components] : t_childs_components<UnionChildsClassName>; 
    [str_class_name] : unionclassname ;
    [str_childs_attributes]?: Array<ChildAttributeType> ;
    [str_isScoped] : boolean ;

    [str_value_init] :   t_value_init
    [str_value_validation_strRegex] : t_value_validation_strRegex

    static df = df//TDOO are you sure that value = not set value is a good idea ?

    static toJson = (compJson:Component<any,any>)  =>
    {
        return {
            [str_type]:compJson[str_type] , 
            [str_childs_selectors]:compJson.childs_selectors , 
            [str_childs_components]:compJson.childs_components.map(TypeChilds.toJson) ,
            [str_class_name]:compJson.class_name , 
            ...ValTextContent.toJson(compJson),
            [str_isScoped] : compJson.isScoped,

            [str_childs_attributes]:compJson.childs_attributes?.map(ChildAttributeType.toJson)} as const 
    } 

    static fromJson = (json: IJson) : Component<any,any> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return new Component(json.class_name , json[str_type] , json.childs_selectors , json.childs_components.map(TypeChilds.fromJson) ,json.isScoped,ValTextContent.getArgsForCst(json),json.childs_attributes?.map(ChildAttributeType.fromJson))
    }


    constructor (
        class_name : unionclassname =Component.df[str_class_name]  as any  , 
        type:StrChildType.t_childType<unionclassname>  = Component.df[str_type] as any ,  
        childs_selectors : t_childsSelectors =Component.df[str_childs_selectors] ,
        childs_components :  t_childs_components<UnionChildsClassName> = Component.df[str_childs_components]  ,
        isScoped : boolean = Component.df[str_isScoped],
        valContentArgs : t_cst_args = [...ValTextContent.dfArgsCst],
        childs_attributes: Array<ChildAttributeType>  =Component.df[str_childs_attributes] ,
         ){
        super( {toJson:Component.toJson , fromJson:Component.fromJson});
        this.type = type;
        this.childs_selectors = childs_selectors;
        this.isScoped = isScoped;
        this.childs_components = childs_components;
        this.class_name = class_name;
        this.childs_attributes = childs_attributes;
        ValTextContent.setArgsForCst(this,...valContentArgs)
    }



    get getChilds_selectors() : t_childsSelectors{
        return this.childs_selectors;
    }
    get getChilds_components() : t_childs_components<UnionChildsClassName>{
        return this.childs_components;
    }

    get getClass_name() : unionclassname{
        return this.class_name;
    }

    get getChilds_attributes() : Array<ChildAttributeType>|undefined {
        return this.childs_attributes;
    }

    static getType = 
    <unionclassname  extends string,  UnionChildsClassName extends string = unionclassname ,TJson extends IComponent<unionclassname,UnionChildsClassName> = IComponent<unionclassname,UnionChildsClassName> , R extends StrChildType.t_childType<unionclassname> =  TJson[t_str_type] >(_json :  TJson) : R =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return (_json as any)[str_type]
    }
    static getIScoped = 
    <unionclassname  extends string,  UnionChildsClassName extends string = unionclassname ,TJson extends IComponent<unionclassname,UnionChildsClassName> = IComponent<unionclassname,UnionChildsClassName> , R extends boolean =  TJson[t_str_isScoped] >(_json :  TJson) : R =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return (_json as any)[str_isScoped]
    }
    static getChilds_selectors = <unionclassname  extends string = string ,  UnionChildsClassName extends string = unionclassname, TJson extends IComponent<unionclassname,UnionChildsClassName> = IComponent<unionclassname,UnionChildsClassName> ,R extends t_childsSelectors|(typeof Component.df[t_str_childs_selectors]) = TJson[t_str_childs_selectors] >(_json : TJson) : R =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return (_json as any)[str_childs_selectors]
    }
    static getChilds_components = <unionclassname  extends string  , UnionChildsClassName extends string , TJson extends IComponent<unionclassname,UnionChildsClassName> = IComponent<unionclassname,UnionChildsClassName> ,  R extends t_childs_components<UnionChildsClassName>|(typeof Component.df[t_str_childs_components])  =  TJson[t_str_childs_components]  >(_json : IComponent<unionclassname,UnionChildsClassName>) : R=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return (_json as any)[str_childs_components]
    }
    static getClass_name = <unionclassname  extends string  ,  UnionChildsClassName extends string= unionclassname , TJson extends IComponent<unionclassname,UnionChildsClassName> = IComponent<unionclassname,UnionChildsClassName> , R extends unionclassname|(typeof Component.df[t_str_class_name])  = TJson[t_str_class_name] >(_json : TJson) : R =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return (_json as any)[str_class_name]
    }
    static getChilds_attributes = <unionclassname  extends string = string ,  UnionChildsClassName extends string = unionclassname , TJson extends IComponent<unionclassname,UnionChildsClassName> = IComponent<unionclassname,UnionChildsClassName> , R extends (readonly IChildAttributeType[] ) = TJson[t_str_childs_attributes] >(_json : TJson) : R =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return (_json as any)[str_childs_attributes]
    }

    static isEmptyChilds_components = <unionclassname  extends string  ,  UnionChildsClassName extends string   >(_json : IComponent<unionclassname,UnionChildsClassName>) :boolean =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return isEmptyChildsComponents(Component.getChilds_components<unionclassname,UnionChildsClassName>(_json)) ; //replace by : == component_empty_childs //A FAIRE 
    }
    static isEmptyChilds_attributes = <unionclassname  extends string = string ,  UnionChildsClassName extends string = unionclassname > (_json :IComponent<unionclassname,UnionChildsClassName>) : boolean =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return Component.getChilds_attributes<unionclassname,UnionChildsClassName>(_json) == undefined //replace by : === // A FAIRE 
    }
    static isEmptyChilds_selectors = <unionclassname  extends string = string ,  UnionChildsClassName extends string = unionclassname > (_json : IComponent<unionclassname,UnionChildsClassName>) : boolean =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return isEmptyChildSelectors(Component.getChilds_selectors<unionclassname,UnionChildsClassName>(_json) )
    }
    static isScoped = <unionclassname  extends string = string ,  UnionChildsClassName extends string = unionclassname > (_json : IComponent<unionclassname,UnionChildsClassName>) : boolean =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return Component.getIScoped<unionclassname,  UnionChildsClassName >(_json)
    }

    static getChilds_components_idx = <unionclassname  extends string  ,  UnionChildsClassName extends string   > (_json : IComponent<unionclassname,UnionChildsClassName> , idx:number) : ITypeChilds<UnionChildsClassName> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        if(Component.isEmptyChilds_components(_json)) throw new Error("Childs_components is empty")
        
        let res : t_child_component<UnionChildsClassName>[] = Component.getChilds_components<unionclassname,UnionChildsClassName>(_json)
        return res [idx];
    }

    static getIndexOfChildClassName =   <unionclassname  extends string  ,  UnionChildsClassName extends string   > 
    (_json : IComponent<unionclassname,UnionChildsClassName> ,  childClassName : string ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        const arrChildsClassName : ITypeChilds<UnionChildsClassName>[] = Component.getChilds_components(_json)
        const foundSubarray = arrChildsClassName.find((child :ITypeChilds<UnionChildsClassName> ) =>  
            TypeChilds.getType(child)=== childClassName);
        if (foundSubarray) { /*console.log("DEBUG_ME",getCurrentLine());*/
            return arrChildsClassName.indexOf(foundSubarray);
        } else {
            return _notFoundIdx();  // Return -1 if no subarray with the target string as the first element is found
        }
    }

} 
export type componentToJson = ReturnType<typeof Component.toJson>
