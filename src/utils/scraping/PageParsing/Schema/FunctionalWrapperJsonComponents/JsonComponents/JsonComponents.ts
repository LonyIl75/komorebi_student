import { IsUnion, PopUnion, arrToUnion, getPairedElementValue, joinHyphen_to_joinMaj } from "@shared/type.js"
import { IComponent } from "../../Component/Component.js"
import { t_arr_component, t_component_empty_childs } from "../../../types.js"


export type  t_union_IComponent<unionclassname  extends string , UnionChildsClassName extends string  = unionclassname > = 
/*IsUnion<unionclassname> extends false ? never : 
IsUnion<UnionChildsClassName> extends false ? never :*/
PopUnion<unionclassname> extends infer cunionclassname ?
(any extends UnionChildsClassName ? any : PopUnion<UnionChildsClassName>) extends infer cUnionChildsClassName ? 
cunionclassname extends string ? cUnionChildsClassName extends string ?
(IComponent<cunionclassname,cUnionChildsClassName> )|t_union_IComponent<Exclude<unionclassname,cunionclassname> , Exclude<UnionChildsClassName,cUnionChildsClassName>>:never 
:never :never : never 

export type IJsonComponents<ArrUnionString extends readonly string [] ,unionClassNameType extends arrToUnion<ArrUnionString> , ArrArrUnionChilds extends t_arr_component<unionClassNameType,_unionClassNameType> , _unionClassNameType extends string = string >  = {
    [key in unionClassNameType ] : key extends string ?  t_union_IComponent<  key ,  
        arrToUnion<
            getPairedElementValue<key , ArrUnionString ,ArrArrUnionChilds > extends infer B ? 
                B extends readonly [infer _ , infer BR] ?  BR extends t_component_empty_childs ? [t_component_empty_childs[0]] : BR : [""]  
            :[""]  
        >extends infer B ? B extends undefined ? B :  B extends string ? B extends "" ? never : joinHyphen_to_joinMaj<B> :never:never   >
: never 
}
