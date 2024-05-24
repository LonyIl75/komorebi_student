
import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("components","page_selectors")
const debug_page_selectors : Debugger = debug(name_module)



import { t_enum, t_strEnum } from "@shared/type.js"
import { Selector, t_fct_modSelectorProp, t_operator, t_HTMLTagg, SelectorProp, t_property, fct_mod_has, fct_mod_hasDirectChild, fct_mod_not, fct_mod_directChild, fct_joinChild, classProp, containOp, strToSelectorProp, strToSelector_str } from "../primitives/Selector.js"
import { StrChildType} from '../../TypeChilds/types.js';
import { _IComponent, _Component } from '../_Component/_Component.js';

type selectorEmbedInStrDebEnd = {selector :Selector,strDebRest?:[string,string]}


export const strVoidEnumFctHelpers = {
    empty :""
} as const 

type t_isEmptyEnumValue <T extends t_enum[keyof t_enum]> = T extends t_strEnum[keyof t_strEnum] ? true : false
const isEmptyEnumValue = <T extends t_enum[keyof t_enum ]> (val:T) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return (val === strVoidEnumFctHelpers.empty) as t_isEmptyEnumValue<T>

}

type t_strVoidEnumFctHelpers = typeof strVoidEnumFctHelpers

export type t_strEnumFctHelpers =t_strVoidEnumFctHelpers& t_enum



interface IGetFctHelpers <U extends string , UEnum extends t_strEnumFctHelpers , RU extends string> {

    has : (e:string)=>t_fct_modSelectorProp
    directChild : (e:string)=>t_fct_modSelectorProp
    hasDirectChild : (e:string)=>t_fct_modSelectorProp
    not : (e:string)=>t_fct_modSelectorProp

    arr_selector : <T extends (readonly Selector[]) | (readonly string[]) >(arr_selectors :  T ,fct_str :(str_selector:string)=>string ) => string[]
    arrArr_selector : <T extends (readonly Selector[])[] | (readonly string[])[] >(arr_selectors :  T ,fct_str :(str_selector:string)=>string ) =>  readonly string[][]
    arr_selector_join(arrArr_selectors : readonly selectorEmbedInStrDebEnd [],fct_join ?:(arr_str:readonly string[])=>string) : string 
    arr_selector_join_arr(arrArr_selectors : readonly (readonly selectorEmbedInStrDebEnd[])[],fct_join ?:(arr_str:readonly string[])=>string ) : readonly string[]
    arr_selector_join_arrArr : (arr_selectors : readonly( readonly (readonly selectorEmbedInStrDebEnd[])[])[],fct_join?:(arr_str:readonly string[])=>string) =>  readonly (readonly string[]) []
    map_selector : <T extends U , Enum extends UEnum[keyof UEnum] > (  enum_prop : Enum ,className: T, arr : readonly string[] , fct_sup_mod?: (e:string) => t_fct_modSelectorProp  ,  prop?: string, op?: t_operator ,tagg ?: t_HTMLTagg   )  => string[]
    val_selector : <T extends U > (className : T , prop?: string , op?: t_operator  , fct_mod?: t_fct_modSelectorProp, tagg?: t_HTMLTagg  )  => Selector
    val_selectorProp : <T extends U , Enum extends UEnum[keyof UEnum] > (className : T ,fct_mod?: t_fct_modSelectorProp, prop?: string , op?: t_operator   )  => SelectorProp
    selector : <T extends U , Enum extends UEnum[keyof UEnum] > (enum_prop : Enum ,className : T , prop?: string , op?: t_operator  , tagg?: t_HTMLTagg  ,fct_mod?: t_fct_modSelectorProp) => Selector
    selector_str : <T extends U , Enum extends UEnum[keyof UEnum] > (enum_prop : Enum ,className : T , prop?: string , op?: t_operator  , tagg?: t_HTMLTagg ,fct_mod?: t_fct_modSelectorProp ) => string

    embed_service_selectorProp <T extends U , Enum extends UEnum[keyof UEnum]> (enum_prop : Enum ,name:T,isClassName : boolean, prop?: t_property, op?: t_operator, fct_mod?: t_fct_modSelectorProp  ):SelectorProp 
    _embed_service_selector < T extends U ,Enum extends UEnum[keyof UEnum]>(obj_select : Selector ,enum_prop : Enum ,  idx :number ):void
    embed_service_selector <T extends U ,  Enum extends UEnum[keyof UEnum]> (enum_prop : Enum ,name:T,isClassName : boolean , prop?: t_property, op?: t_operator , tagg ?: t_HTMLTagg, fct_mod?: t_fct_modSelectorProp  ):Selector 
    embed_service_str <T extends U , Enum extends UEnum[keyof UEnum] > (enum_prop : Enum ,name:T,isClassName : boolean , prop?: t_property, op?: t_operator , tagg ?: t_HTMLTagg , fct_mod?: t_fct_modSelectorProp) 
    service_ComponentJsonFromStr <T extends U , Enum extends UEnum[keyof UEnum]> (enum_prop : Enum ,name:T,isClassName : boolean , prop?: t_property, op?: t_operator , tagg ?: t_HTMLTagg , fct_mod?: t_fct_modSelectorProp ) :_IComponent

    _embed_service_style_str <Enum extends UEnum[keyof UEnum]>(str_enum : Enum ):RU
    _embed_service_enumStyle_str <T extends U , TC extends StrChildType.t_childType<U> , Enum extends UEnum[keyof UEnum]> (str_enum : Enum,_str : TC ) :  `${RU} ${TC}`

}

export class GetFctHelpers<U extends string  , UEnum extends t_strEnumFctHelpers , RU extends string > implements IGetFctHelpers<U, UEnum ,RU> {

    has(e:string){ /*console.log("DEBUG_ME",getCurrentLine());*/
        return (_str:string)=>_str+fct_mod_has(e)
    }
    hasDirectChild(e:string){ /*console.log("DEBUG_ME",getCurrentLine());*/
        return (_str:string)=>_str+fct_mod_hasDirectChild(e)
    }
    not(e:string){ /*console.log("DEBUG_ME",getCurrentLine());*/
        return (str : string ) => fct_mod_not(str)
    }
    directChild(e:string){ /*console.log("DEBUG_ME",getCurrentLine());*/
        return (_str:string)=>_str+fct_mod_directChild(e)
    }

    joinChild(...es:readonly string[])  { /*console.log("DEBUG_ME",getCurrentLine());*/
        return (es.slice(1)).reduce((acc,e)=>acc+fct_mod_directChild(e),es[0])
    }

    arr_selector_join(arrArr_selectors : readonly (selectorEmbedInStrDebEnd)[],fct_join :(arr_str:readonly string[])=>string = fct_joinChild) : string {
        return fct_join(arrArr_selectors.map((e:selectorEmbedInStrDebEnd)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                        let res = e.selector.toString()
                        if(e?.strDebRest){ /*console.log("DEBUG_ME",getCurrentLine());*/
                            res = e.strDebRest[0]+res+e.strDebRest[1]
                        }
                        return res
                    }))
                       
    }

    arr_selector_join_arr(arrArr_selectors : readonly (readonly selectorEmbedInStrDebEnd[])[],fct_join :(arr_str:readonly string[])=>string = fct_joinChild) : readonly string[] {
        return (arrArr_selectors.map(
            (es)=>this.arr_selector_join(es,fct_join)
                )
            )
    }

    arr_selector_join_arrArr(arrArr_selectors : readonly( readonly (readonly selectorEmbedInStrDebEnd[])[])[],fct_join :(arr_str:readonly string[])=>string = fct_joinChild) : readonly (readonly string[]) [] {
        return (arrArr_selectors.map(
            (ess)=>this.arr_selector_join_arr(ess,fct_join)
        )
        )
    }
    arr_selector <T extends (readonly Selector[])> (arr_selectors : T ,fct_str :(str_selector:string)=>string ) : string[]
    arr_selector <T extends (readonly string[])>  (arr_selectors : T ,fct_str :(str_selector:string)=>string ) :  string[]
    arr_selector (arr_selectors :  (readonly Selector[]) | (readonly string[]) ,fct_str :(str_selector:string)=>string ) : string[] {
        return arr_selectors.map(
            (e)=>fct_str( e.toString() )
        )

    }

    arrArr_selector <T extends (readonly Selector[])[]> (arr_selectors : T ,fct_str :(str_selector:string)=>string ) :  readonly string[][]
    arrArr_selector <T extends readonly (readonly string[])[]>  (arr_selectors : T ,fct_str :(str_selector:string)=>string ) :  readonly string[][] 
    arrArr_selector (arr_selectors :  (readonly Selector[])[] | (readonly string[])[] ,fct_str :(str_selector:string)=>string ) :  readonly string[][] {
            return  arr_selectors.map(
                (es)=>this.arr_selector(es,fct_str)
                )

        }
    


    val_selector <T extends U > (className : T , prop: string = classProp, op: t_operator = containOp , fct_mod?: t_fct_modSelectorProp, tagg?: t_HTMLTagg  ) : Selector  {
        const childName = StrChildType.compClassnameToChildType(className)
        return Selector.cst_oneProp(prop,childName,op,fct_mod,tagg)
    }

    val_selectorProp <T extends U > (className : T ,fct_mod?: t_fct_modSelectorProp , prop: string = classProp, op: t_operator = containOp  ) : SelectorProp  {
        const childName = StrChildType.compClassnameToChildType(className)
        return SelectorProp.cst_val(prop,childName,op,fct_mod)
    }
    

    map_selector<T extends U , Enum extends UEnum[keyof UEnum] > ( enum_prop : Enum ,className: T , arr : readonly string[],fct_sup_mod?: (e:string) => t_fct_modSelectorProp, prop: string= classProp,  op: t_operator = containOp,tagg ?: t_HTMLTagg , fct_mod?: t_fct_modSelectorProp  ) : string[]  {
            //const childName = StrChildType.compClassnameToChildType(className) // A FAIRE .embed_service_selectorProp<T,Enum>(enum_prop,childName,false,prop,op,fct_mod) 
            return arr.map(
                (e :string )=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                    let _tmp :SelectorProp = this.embed_service_selectorProp<T,Enum>(enum_prop,className,true,prop,op,fct_mod) 
                    _tmp.fct_mod = fct_sup_mod(e)
                    return new Selector([_tmp], tagg ).toString()
                }
            )
        
        }

    selector <T extends U , Enum extends UEnum[keyof UEnum]> ( enum_prop : Enum ,className : T , prop: string = classProp, op: t_operator = containOp , tagg?: t_HTMLTagg , fct_mod?: t_fct_modSelectorProp ) : Selector  { 
        return this.embed_service_selector<T,Enum>(enum_prop,className,true,prop,op,tagg,fct_mod)
    }
    
    selector_str <T extends U , Enum extends UEnum[keyof UEnum]> (enum_prop : Enum ,className : T , prop: string = classProp, op: t_operator = containOp , tagg?: t_HTMLTagg , fct_mod?: t_fct_modSelectorProp  ) : string  {
        return this.selector<T,Enum>(enum_prop,className,prop,op,tagg,fct_mod).toString()
    }

    _embed_service_selector < T extends U ,Enum extends UEnum[keyof UEnum]>(obj_select : Selector ,enum_prop : Enum ,  idx :number =0) { /*console.log("DEBUG_ME",getCurrentLine());*/
        type t_str = StrChildType.t_childType<T>
        obj_select.getProperty(idx).replaceValue((_str: t_str)=>this._embed_service_enumStyle_str<T,t_str,Enum>(enum_prop,_str))
    }
    
    embed_service_selectorProp <T extends U , Enum extends UEnum[keyof UEnum]> (enum_prop : Enum ,name:T,isClassName : boolean = true, prop?: t_property, op?: t_operator, fct_mod?: t_fct_modSelectorProp  ):SelectorProp {
        let obj_selectProp = strToSelectorProp(name,isClassName,prop,op,fct_mod)
        if(!isEmptyEnumValue(enum_prop))obj_selectProp.replaceValue((_str:StrChildType.t_childType<T>)=>this._embed_service_enumStyle_str<T,StrChildType.t_childType<T>,Enum>(enum_prop,_str))
        return obj_selectProp
    }

    embed_service_selector <T extends U ,  Enum extends UEnum[keyof UEnum]> (enum_prop : Enum ,name:T,isClassName : boolean = true, prop?: t_property, op?: t_operator , tagg ?: t_HTMLTagg, fct_mod?: t_fct_modSelectorProp  ):Selector {
        let obj_selectProp = this.embed_service_selectorProp<T, Enum>(enum_prop,name,isClassName,prop,op,fct_mod)
        return new Selector([obj_selectProp],tagg)
    }
    
    embed_service_str <T extends U , Enum extends UEnum[keyof UEnum] > (enum_prop : Enum ,name:T,isClassName : boolean = true, prop?: t_property, op?: t_operator , tagg ?: t_HTMLTagg , fct_mod?: t_fct_modSelectorProp) { /*console.log("DEBUG_ME",getCurrentLine());*/
        return this.embed_service_selector<T, Enum>(enum_prop,name,isClassName,prop,op,tagg,fct_mod).toString()
    }
    
    service_ComponentJsonFromStr <T extends U , Enum extends UEnum[keyof UEnum]> (enum_prop : Enum ,name:T,isClassName : boolean = true, prop?: t_property, op?: t_operator , tagg ?: t_HTMLTagg , fct_mod?: t_fct_modSelectorProp ) :_IComponent {
        const selectors = [this.embed_service_str<T,Enum>(enum_prop,name,isClassName,prop,op,tagg,fct_mod)]
        const childs_selectors = [[strToSelector_str<T>(name,isClassName,prop,op,tagg,fct_mod)]]
        return new _Component(selectors,childs_selectors)
    }
    _embed_service_enumStyle_str <T extends U , TC extends StrChildType.t_childType<T> , Enum extends UEnum[keyof UEnum]> (str_enum : Enum,_str : TC )  { /*console.log("DEBUG_ME",getCurrentLine());*/
        return `${this._embed_service_style_str<Enum>(str_enum)} ${_str}` as `${ReturnType<typeof this._embed_service_style_str<Enum>>} ${TC}`
    }

    _embed_service_style_str <Enum extends UEnum[keyof UEnum]>(str_enum : Enum ):RU {
        throw new Error("Method not implemented.")
    }

    constructor(fct : (str_enum : UEnum[keyof UEnum] )=> RU){
        this._embed_service_style_str = fct
    }


}


export type t_fct_cst_getFctHelpers <UEnum extends t_strEnumFctHelpers , RU extends string > = ((str_enum : UEnum[keyof UEnum] )=> RU)
export const cst_getFctHelpers = <U extends string  , UEnum extends t_strEnumFctHelpers , RU extends string > (fct : t_fct_cst_getFctHelpers<UEnum,RU> )  : GetFctHelpers<U,UEnum,RU> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return new GetFctHelpers<U,UEnum,RU>(fct)
}
