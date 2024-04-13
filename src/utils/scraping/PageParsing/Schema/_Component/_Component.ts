
import { deepCloneJson } from "@shared/m_json.js";
import { selectors } from "../../../DOMElements/Selector/_Selector/type.js";
import { IChildAttributeType } from "./ChildAttributeType/ChildAttributeType.js";
import { IValTextContent, ValTextContent, t_cst_args } from "./ValTextContent/ValTextContent.js";
import { str_value_init, t_value_init, str_value_validation_strRegex, t_value_validation_strRegex } from "./ValTextContent/types.js";
import { df,str_childs_selectors, t_childsSelectors, str_childs_attributes, str_selectors, str_isScoped } from "./types.js";


export interface _IComponent extends IValTextContent {
    [str_selectors] ?: selectors  ;
    [str_childs_selectors]  : t_childsSelectors ;
    [str_childs_attributes]?: IChildAttributeType[] ;
    [str_isScoped] ?: boolean;

}

export class _Component implements _IComponent {
    [str_selectors]?: selectors;

    [str_childs_selectors]: t_childsSelectors;

    [str_childs_attributes]?: IChildAttributeType[];
    [str_isScoped] ?: boolean;
    [str_value_init] :   t_value_init
    [str_value_validation_strRegex] : t_value_validation_strRegex

    static df = df 
    
    constructor(selectors: selectors = df[str_selectors], childs_selectors: t_childsSelectors  = df[str_childs_selectors],isScoped : boolean = df[str_isScoped], valContentArgs : t_cst_args = deepCloneJson(ValTextContent.dfArgsCst),  childs_attributes:  IChildAttributeType[]= df[str_childs_attributes]) {
        this.selectors = selectors;
        this.isScoped = isScoped;
        this.childs_selectors = childs_selectors;
        ValTextContent.setArgsForCst(this,...valContentArgs)
        this.childs_attributes = childs_attributes;
    }

}


