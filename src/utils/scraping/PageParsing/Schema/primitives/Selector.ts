
import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("components","page_selectors")
const debug_page_selectors : Debugger = debug(name_module)

import { StrChildType } from '../../TypeChilds/types.js';

type t_HTMLTagg_incr<T extends string , Nb extends number,_Arr extends any[] = []> = _Arr['length'] extends Nb ? `${T}${_Arr['length']}` : `${T}${_Arr['length']}`|t_HTMLTagg_incr<T,Nb,[..._Arr,""]>
export type t_HTMLTagg = "a"|"abbr"|"acronym"|"address"|"applet"|"area"|"article"|"aside"|"audio"|"b"|"base"|"basefont"|"bdi"|"bdo"|"big"|"blockquote"|"body"|"br"|"button"|"canvas"|"caption"|"center"|"cite"|"code"|"col"|"colgroup"|"data"|"datalist"|"dd"|"del"|"details"|"dfn"|"dialog"|"dir"|"div"|"dl"|"dt"|"em"|"embed"|"fieldset"|"figcaption"|"figure"|"font"|"footer"|"form"|"frame"|"frameset"|"h1"|"h6"|"head"|"header"|"hgroup"|"hr"|"html"|"i"|"iframe"|"img"|"input"|"ins"|"kbd"|"label"|"legend"|"li"|"link"|"main"|"map"|"mark"|"menu"|"meta"|"meter"|"nav"|"noframes"|"noscript"|"object"|"ol"|"optgroup"|"option"|"output"|"p"|"param"|"picture"|"pre"|"progress"|"q"|"rp"|"rt"|"ruby"|"s"|"samp"|"script"|"search"|"section"|"select"|"small"|"source"|"span"|"strike"|"strong"|"style"|"sub"|"summary"|"sup"|"svg"|"table"|"tbody"|"td"|"template"|"textarea"|"tfoot"|"th"|"thead"|"time"|"title"|"tr"|"track"|"tt"|"u"|"ul"|"var"|"video"|"wbr"|t_HTMLTagg_incr<"h",5> 

export const classProp = "class" as const
export const idProp = "id" as const
export type t_property = typeof idProp |typeof classProp | string 

const noOp = "" as const 
export const containOp = "*=" as const 

export type t_operator = typeof noOp |"="|"~="|"|="|"^="|"$="|typeof containOp 

export const char_child = ">" as const
export type t_char_child = typeof char_child

export const fct_mod_has = <T extends string > (str : T ) => (`:has(${str})` as const )
export const fct_mod_directChild = <T1 extends string =string>(str : T1 )  => (`${char_child}${str}` as const)
export const fct_mod_hasDirectChild = <T1 extends string =string>(str : T1 )  => fct_mod_has(fct_mod_directChild<T1>(str))
export const fct_mod_not =  <T extends string > (str : T ) => (`:not(${str})` as const )

export const fct_joinChild = (es:readonly string[]) => {
    return (es.slice(1)).reduce((acc,e)=>acc+fct_mod_directChild(e),es[0])
}

export class PropertyAndOperator{
    prop:t_property
    op:t_operator
    value : string 

    static df  = {
        op: noOp 
    }

    constructor(prop : t_property,value : string , op : t_operator = PropertyAndOperator.df.op){
        if(!prop && (value || op )) throw new Error("PropertyAndOperator constructor : prop or value or op is undefined")
        if(!(value && op) && (value || op )) throw new Error("PropertyAndOperator constructor : prop or value or op is undefined")
        this.prop = prop
        this.op = op
        this.value = value
    }
    toString(){
        return this.prop && this.value ? `[${this.prop}${this.op}\"${this.value}\"]` :""
    }

    setProp(prop : t_property){
        this.prop = prop
    }
    setValue(value : string){
        this.value = value
    }
    setOp(op : t_operator){
        this.op = op
    }
}

export type t_fct_modSelectorProp = (str : string ) => string

export class SelectorProp {
    fct_mod : t_fct_modSelectorProp
    prop : PropertyAndOperator


    static df_fct_mod : t_fct_modSelectorProp = (str : string ) => str

    constructor( prop : PropertyAndOperator,fct_mod : t_fct_modSelectorProp = SelectorProp.df_fct_mod){
        this.fct_mod = fct_mod
        this.prop = prop
    }

    static cst_val (prop : t_property,value : string , op : t_operator = PropertyAndOperator.df.op , fct_mod ?: t_fct_modSelectorProp ){
        return new SelectorProp(new PropertyAndOperator(prop,value,op),fct_mod)
    }

    toString(){
        return this.fct_mod(this.prop.toString())
    }

    setProp(value ?: string , op ?: t_operator, prop ?: t_property ){
        if(prop) this.prop.setProp(prop)
        if(value) this.prop.setValue(value)
        if(op) this.prop.setOp(op)

    }

    replaceValue(fct_new_value : (value : string ) => string ){
        this.prop.setValue(fct_new_value(this.prop.value))

    }

}
interface ISelector<T extends t_HTMLTagg =t_df_tagg>  {
    properties: SelectorProp[]
    tagg: T
}

type t_df_tagg = "div"

export class Selector implements ISelector<t_HTMLTagg>{
    properties: SelectorProp[]
    tagg: t_HTMLTagg


    static df :ISelector= {
        tagg : "div",
        properties:[]
    }

    constructor(properties_ : SelectorProp[] = Selector.df.properties , tagg : t_HTMLTagg = Selector.df.tagg ){
        this.properties = properties_
        this.tagg = tagg
    }
    static cst_oneProp(prop : t_property,value : string , op : t_operator = PropertyAndOperator.df.op , fct_mod ?: t_fct_modSelectorProp , tagg : t_HTMLTagg = Selector.df.tagg){
        return new Selector([new SelectorProp(new PropertyAndOperator(prop,value,op),fct_mod)],tagg)
    }

    static cst_onePropAndTagg(prop : t_property,value : string , tagg : t_HTMLTagg = Selector.df.tagg, op : t_operator = PropertyAndOperator.df.op , fct_mod ?: t_fct_modSelectorProp ){
        return new Selector([new SelectorProp(new PropertyAndOperator(prop,value,op),fct_mod)],tagg)
    }

    static cst_multPropAndTagg(prop : t_property,values : string[] , tagg : t_HTMLTagg = Selector.df.tagg, op : t_operator = PropertyAndOperator.df.op , fct_mods ?: t_fct_modSelectorProp[] ){
        let selector_props = []
        let last_fct_mod = fct_mods?.length ? fct_mods[0] : SelectorProp.df_fct_mod
        for (let i = 0; i < values.length; i++) {
            const fct_mod = fct_mods?.length ? fct_mods.length > i ? fct_mods[i] : last_fct_mod : SelectorProp.df_fct_mod
            selector_props.push(new SelectorProp(new PropertyAndOperator(prop,values[i],op),fct_mod))
        }
        
        return new Selector(selector_props,tagg)
    }

    setTagg(tagg : t_HTMLTagg){
        this.tagg = tagg
    }

    addProperty(prop : PropertyAndOperator , fct_mod ?: t_fct_modSelectorProp ){
        this.properties.push(new SelectorProp(prop,fct_mod))
    }

    toString(){
        let str = ""
        str = this.tagg
        for (let i = 0; i < this.properties.length; i++) {
            str = [str,this.properties[i].toString()].join("")
        } 
        return str
    }

    getProperty(idx:number){
        return this.properties[idx]
    }

    
}


export const strToSelectorProp = <T extends string > (name:T,isClassName : boolean = true,  prop: t_property = classProp , op : t_operator =containOp, fct_mod?: t_fct_modSelectorProp ):SelectorProp  => {
    let _str : StrChildType.t_childType<T> = (isClassName ? StrChildType.compClassnameToChildType(name) : name) as unknown as StrChildType.t_childType<T>
    return new SelectorProp(new PropertyAndOperator(prop,_str,op),fct_mod)
}

export const strToSelector = <T extends string > (name:T,isClassName : boolean = true,  prop?: t_property, op?: t_operator ,tagg ?: t_HTMLTagg , fct_mod?: t_fct_modSelectorProp):Selector  => {
    let obj_select : SelectorProp = strToSelectorProp(name,isClassName,prop,op,fct_mod)
    return new Selector([obj_select],tagg)
}

export const strToSelector_str = <T extends string > (name:T,isClassName : boolean = true,  prop?: t_property, op?: t_operator , tagg ?: t_HTMLTagg , fct_mod?: t_fct_modSelectorProp):string  => {
    return strToSelector(name,isClassName,prop,op,tagg,fct_mod).toString()
}