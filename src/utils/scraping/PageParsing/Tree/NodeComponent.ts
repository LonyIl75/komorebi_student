import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule, str_idRouteAndRemoteAddresss, concatNameModuleAndDebug } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector_pageParsing","nodeComponent")
const debug_pageParsing_nodeComponent : Debugger = debug(name_module)

import {IJson} from "@shared/m_object.js";
import { arrToUnion, joinCharKeyJson, json_ExactlyOne, param_jsonAsForEach, reshapeObject, t_join_underscore } from "@shared/type.js";
import { char_join_pathRoutes,  createAddressBis,  t_agreg_path, t_char_join_pathRoutes } from "@shared/routePath.js";
import { EmptyInit, deepCloneJson, functionError_RetPromDfEmpty, haveSerializer, haveSerializerAndEmptyInit, t_j } from '@shared/m_json.js';
import { selectors, t_ElementHN, t_pageOrElementHN } from '../../DOMElements/Selector/_Selector/type.js';
import ChildAttributeType, { IChildAttributeType } from '../Schema/_Component/ChildAttributeType/ChildAttributeType.js';
import { getTextContent } from '../../primitives/misc.js';
import { err_function } from '@shared/m_function.js';
import { Page } from 'puppeteer';
import { noFieldName } from '@shared/m_primitives.js';
import {str_config_value, t_union_attribute_name__val_strict, t_union_attribute_name_val_strict} from '../Schema/_Component/ChildAttributeType/types.js';
import { join_underscore } from '@shared/m_string.js';
import { getElmFromArrSelector } from '../../DOMElements/Selector/main.js';
import { ITypeChilds, TypeChilds } from '../TypeChilds/TypeChilds.js';
import { StrChildType, t_noneCompClassName, noneCompClassName } from '../TypeChilds/types.js';
import { ChildAttributeTypeValue } from '../Schema/_Component/ChildAttributeType/ChildAttributeTypeValue.js';
import { isNilValue } from '../Schema/_Component/types.js';
import { Component, IComponent } from '../Schema/Component/Component.js';
import { str_joinChar_group, str_value, str_value_init, str_value_validation_strRegex } from '../Schema/_Component/ValTextContent/types.js';
import { getRegexGS, getRegexGM, isEmptyStrRegex } from '@shared/m_regex.js';
import { getMatchAndPosFromRegexMatchingInterval } from '@shared/m_regex_matchObject.js';
import { t_strRegex } from '@shared/_regexp.js';

export const str_attributes = "attributes"

export interface INodeComponentValue{
    value : string //[str_value] : string 
    proper_value:string
    description:(selectors[])|null
    objectId:string|null
    [str_attributes]?:Array<ChildAttributeTypeValue>
}

export type _t_NodeComponentValue_getJsonValue = 
arrToUnion<param_jsonAsForEach<{[k in t_union_attribute_name__val_strict]:string}>>



export type t_NodeComponentValue_getJsonValue = {
    [noFieldName] : string }
&  _t_NodeComponentValue_getJsonValue


export class NodeComponentValue extends haveSerializerAndEmptyInit<NodeComponentValue>  implements INodeComponentValue {
    value : string  //[str_value] : string 
    proper_value:string
    description:(selectors[])|null
    objectId:string|null
    [str_attributes]?:Array<ChildAttributeTypeValue>//13/03/24 ChildAttributeType &{[str_value]:string} 

    static getJsonValue(nodeValue : INodeComponentValue){
        let json = {} as any 
        if(nodeValue.proper_value !== undefined )json[noFieldName] = nodeValue.proper_value
        for( const attr of nodeValue[str_attributes]){
            json=  {...json,...attr.value}
        }
        return json as t_NodeComponentValue_getJsonValue
        
    }

    static getNameFieldOfJsonStoredValue = <idPath extends string , attribute_name extends string >(_idPath : idPath , key : attribute_name) => {
        return join_underscore(_idPath ,key)
    }

    static jsonValueToJsonStoredValue = <idPath extends string ,t_value_idPath = string >
      (trad_path : idPath, _jsonValue : t_NodeComponentValue_getJsonValue) => {
       const _obj  = {} as any
        for (const entry of Object.entries(_jsonValue)) {
          const [key,value] = entry
          if(key === noFieldName) _obj[trad_path] = value
          else _obj[NodeComponentValue.getNameFieldOfJsonStoredValue(trad_path ,key)] = value
         }
         return _obj as joinCharKeyJson<idPath,t_join_underscore , _t_NodeComponentValue_getJsonValue> & json_ExactlyOne<{[k in idPath]:t_value_idPath}>
      }


    static emptyObject : EmptyInit<NodeComponentValue>  = new EmptyInit<NodeComponentValue>(NodeComponentValue) ;
    static _getEmptyInit: () => NodeComponentValue = () => {
        return NodeComponentValue.emptyObject.emptyInit() ;
    }

    static getElmOfNodeComponentValue=(nodeComponentValue : INodeComponentValue ,page:Page)=>{
        const description :selectors[] = nodeComponentValue.description
        return getElmFromArrSelector(page,description)
    }

    getEmptyInit: () => NodeComponentValue = () => {
        return NodeComponentValue._getEmptyInit() ;
    }

    static isTypeof: (obj: haveSerializer<NodeComponentValue>) => boolean = (obj:haveSerializer<NodeComponentValue>)=>{
        return haveSerializerAndEmptyInit.st_isTypeof(NodeComponentValue._getEmptyInit(),obj)
    }

    isTypeof = NodeComponentValue.isTypeof

    static toJson = (nodeComponentValue:NodeComponentValue) => 
    {
        return {value:nodeComponentValue.value,proper_value:nodeComponentValue.proper_value,description:nodeComponentValue.description,objectId:nodeComponentValue.objectId,attributes:nodeComponentValue.attributes?.map((attribute) => attribute.toJson())} as const
    }

    static fromJson = (json: IJson) : NodeComponentValue => {
        return new NodeComponentValue(json.value,json.proper_value,json.description,json.objectId,json.attributes)
    }

    constructor(value : string =undefined ,proper_value:string =undefined, description:(selectors[])|null = null ,objectId:string|null = null , attributes?:Array<ChildAttributeTypeValue>){
        super({toJson:NodeComponentValue.toJson , fromJson:NodeComponentValue.fromJson});
        this.value = value
        this.proper_value = proper_value
        this.description = description
        this.objectId = objectId
        this.attributes = attributes
    }

    static async cst_fromElement_securized <unionclassname extends string = string ,UnionChilds extends string = string> (page_or_element : t_pageOrElementHN,component :IComponent<unionclassname,UnionChilds> ,arr_selectors : selectors[],selectors :selectors  ){
        if(page_or_element instanceof   Page) throw new Error("page_or_element instanceof   Page")
        return NodeComponentValue.cst_fromElement(page_or_element, component,arr_selectors ,selectors)
    }

    // TODO : to include : element._remoteObject.description // can it serve ? objectId // what is this ?className
    static async cst_fromElement <unionclassname extends string = string ,UnionChilds extends string = string> (element : t_ElementHN,component :IComponent<unionclassname,UnionChilds> ,arr_selectors : selectors[],selectors ?:selectors   ){
        
        const value_init = component[str_value_init]
        let p_str_content_element =  Promise.resolve(value_init) 
        if(!isNilValue(value_init)){
            const validation_strRegex = component[str_value_validation_strRegex]
            if(!isEmptyStrRegex(validation_strRegex)){
                p_str_content_element = ((validation_regex : RegExp )=> getTextContent(element,selectors).then((text:string)=> {
                    const arr_matching_regex = getMatchAndPosFromRegexMatchingInterval(text,validation_regex,[1]).reduce((_acc,_el)=>_el?._match ? [..._acc,_el._match] : _acc ,[])
                    const arr_res = value_init ? ([value_init,...arr_matching_regex]) : arr_matching_regex
                    return (arr_res).join(component[str_joinChar_group] ?? Component.df[str_joinChar_group] )
                }))(getRegexGS(validation_strRegex))
            }
        }
        
        const n_arr_selectors = selectors ? [...arr_selectors,selectors] : arr_selectors 
        console.log("text ", await element.evaluate((e:any)=>e.outerHTML))
        return p_str_content_element.then((str_content_element)=>new NodeComponentValue(str_content_element, str_content_element ,n_arr_selectors,element.remoteObject().objectId))
    }

    

    


}
type t_any_nodeComponent = NodeComponent<any,any,any>
type t_any_INodeComponent = INodeComponent<any,any,any,any>


export type t_NodeComponentValueEmpty =  ReturnType<typeof NodeComponentValue._getEmptyInit>
export type  t_nodeComponent_values = (NodeComponentValue)[]  ;

export function  err_function_retPromfEmptyNodeComponent<unionPathId extends string , ArrUnionClassName extends readonly string[] ,unionclassname  extends arrToUnion<ArrUnionClassName>,unionChildClassname extends unionclassname>( className: unionclassname ,   agreg_path :t_agreg_path<unionclassname>,_cur_node_value : reshapeObject<INodeComponentValue>,  message ?: string ): err_function<Promise<IJson>>  {
    //A FAIRE : "any" not sure why 
    return functionError_RetPromDfEmpty<t_any_nodeComponent>(NodeComponent.createAndAffectAgregPath<unionPathId ,ArrUnionClassName , unionclassname ,unionChildClassname> (className,agreg_path,_cur_node_value)  , message)
  }
  

export interface INodeComponent<unionPathId extends string ,ArrUnionClassName extends readonly string[], unionClassname extends arrToUnion<ArrUnionClassName> ,unionChildClassname extends unionClassname  =unionClassname > {
    
    id:number
    childs : Array<ITypeChilds<unionChildClassname>> //!= map because childs_components aren't maps 

    nodeValue : NodeComponentValue 
    //idPath : unionPathId[] | typeof NodeComponent.df_idPath
    compo_path : t_agreg_path<unionClassname> 
    key_set : Array<StrChildType.t_childType<unionChildClassname>> // to speed up debugging 

    className : unionClassname| typeof NodeComponent.df_className

}
// TODO-IMP : haveSerializerAndEmptyInit<t_any_nodeComponent,t_any_INodeComponent>
export class NodeComponent< unionPathId extends string ,ArrUnionClassName extends readonly string[], unionClassname extends arrToUnion<ArrUnionClassName> ,unionChildClassname extends unionClassname  =unionClassname   > extends haveSerializerAndEmptyInit<t_any_nodeComponent> {
    
    

    id:number
    childs : Array<TypeChilds<unionChildClassname>> //!= map because childs_components aren't maps 

    nodeValue : NodeComponentValue 
    //idPath : unionPathId[] | typeof NodeComponent.df_idPath
    compo_path : t_agreg_path<unionClassname> 
    key_set : Array<StrChildType.t_childType<unionChildClassname>> // to speed up debugging 

    className : unionClassname| typeof NodeComponent.df_className
    
    // TODO > type.ts with df
    //static df_idPath = null 
    static df_compoPath : t_char_join_pathRoutes = char_join_pathRoutes
    static df_className : t_noneCompClassName = noneCompClassName
    static dfValue : NodeComponentValue = NodeComponentValue._getEmptyInit()

    static isDfProp = <K extends keyof INodeComponentValue = keyof INodeComponentValue > (node_val:reshapeObject<INodeComponentValue,K>, name_prop : K) => {
        return (node_val as any)[name_prop] == NodeComponent.dfValue[name_prop]
    }

    static isDfValue = (node_val:t_nodeComponent_values[number]) => {
        for( const key in node_val){
            if(!NodeComponent.isDfProp(node_val,key as keyof INodeComponentValue))return false
        }
        return true 
    }



    constructor( className : (unionClassname|t_noneCompClassName) = NodeComponent.df_className , type_childs : Array<StrChildType.t_childType<unionChildClassname>> =[],id:number =NodeComponent.getEmptyId(), _nodeValue:INodeComponentValue = deepCloneJson(NodeComponent.dfValue), compo_path: t_agreg_path<unionClassname> =NodeComponent.df_compoPath  ){
 
        super({toJson:NodeComponent.toJson , fromJson:NodeComponent.fromJson});

        this.id = id;
        this.childs =  [] as Array<TypeChilds<unionChildClassname>>;
        this.className = className;

        this.key_set = [] as Array<StrChildType.t_childType<unionChildClassname>>;

        for (const type_child of type_childs) {
            this.addChilds(new TypeChilds<unionChildClassname>(type_child as  StrChildType.t_childType<unionChildClassname> ))
        }
        this.nodeValue = NodeComponentValue.fromJson(_nodeValue);

        this.compo_path = compo_path
    }
    static emptyObject : EmptyInit<t_any_nodeComponent>  = new EmptyInit<t_any_nodeComponent>(NodeComponent) ;

    static _getEmptyInit: () => t_any_nodeComponent = () => {
        return NodeComponent.emptyObject.emptyInit() ;
    }

    /*isNotSetIdPath = () : boolean => {
        return this.idPath === NodeComponent.df_idPath
    }*/

    isNotSetCompoPath = () : boolean => {
        return this.compo_path === NodeComponent.df_compoPath
    }

    getEmptyInit: () => t_any_nodeComponent = () => {
        return NodeComponent._getEmptyInit() ;
    }

    static isTypeof: (obj: haveSerializer<t_any_nodeComponent>) => boolean = (obj:haveSerializer<t_any_nodeComponent>)=>{
        return haveSerializerAndEmptyInit.st_isTypeof(NodeComponent._getEmptyInit(),obj)
    }
    isTypeof = NodeComponent.isTypeof

    static fromJson = (json : IJson) : t_any_nodeComponent => {
        return new NodeComponent(json.className ,  
            json.childs.map( (child : ReturnType< typeof TypeChilds.toJson> ) => TypeChilds.fromJson(child) ) , 
            json.id , 
            NodeComponentValue.fromJson(json.nodeValue), 
            json.compo_path)
    }

    static toJson = (nodeComponent : t_any_nodeComponent)  => {
        return {
            className : nodeComponent.className,
            childs : nodeComponent.childs.map( (child : TypeChilds<any>) => child.toJson() ),
            key_set : [...nodeComponent.key_set],
            id : nodeComponent.id,
            nodeValue : nodeComponent.nodeValue.toJson(),
            compo_path : nodeComponent.compo_path
        } as const 
    }


    static getIncrementId = () :number => {
        return ++NodeComponent.auto_id ;
        }

        
    static cst <unionPathId extends string ,ArrUnionClassName extends readonly string[], unionClassname extends arrToUnion<ArrUnionClassName> ,unionChildClassname extends unionClassname  =unionClassname  > 
    (  className : unionClassname , type_childs : Readonly<Array<TypeChilds<unionChildClassname>>> = [] , value:reshapeObject<INodeComponentValue>, id:number = NodeComponent.getIncrementId()  ) 
    : NodeComponent<unionPathId,ArrUnionClassName,unionClassname,unionChildClassname> {
        let _obj :NodeComponent<unionPathId,ArrUnionClassName,unionClassname,unionChildClassname> = 
        new NodeComponent<unionPathId,ArrUnionClassName,unionClassname,unionChildClassname>(  className, type_childs.map( (_child : TypeChilds<unionChildClassname>) => _child.type ) as any  , id , NodeComponent.completeNodeValue(value))
        for( let i = 0 ; i < type_childs.length ; i++){
            if(_obj.childs.length < i )_obj.childs[i]=TypeChilds.cst_cpy(type_childs[i]) //TODO : just that is enough no need cond 
            else _obj.childs[i].ids = type_childs[i].ids
        }
        return _obj
    }
    

    static nextAgregPath<unionclassname extends string,classname extends unionclassname, R extends t_agreg_path<unionclassname> = t_agreg_path<unionclassname>>
    (p_prop_base :classname,p_agreg_path:R = NodeComponent.df_compoPath as any ) :t_agreg_path<unionclassname>
    {

        return createAddressBis<unionclassname,classname,R>(p_agreg_path  ,p_prop_base)
    
    }


    static createAndAffectAgregPath <unionPathId extends string ,ArrUnionClassName extends readonly string[], unionClassname extends arrToUnion<ArrUnionClassName> ,unionChildClassname extends unionClassname  =unionClassname  >
    (className : unionClassname , agreg_path :t_agreg_path<unionClassname> ,value : reshapeObject<INodeComponentValue> , childs_components : Readonly<Array<TypeChilds<unionChildClassname>>> = [] ) 
    : NodeComponent<unionPathId,ArrUnionClassName,unionClassname,unionChildClassname>  {
        let mres : NodeComponent<unionPathId,ArrUnionClassName,unionClassname,unionChildClassname> = NodeComponent.cst<unionPathId,ArrUnionClassName,unionClassname,unionChildClassname>(className,childs_components,value  )
        mres.compo_path = agreg_path
        return mres
        }

        

    static getEmptyId = () :number => {
        return -1 ;
      }

    static auto_id :number = NodeComponent.getEmptyId()

    addChilds( typeChild:TypeChilds<unionChildClassname>){
        let idx = this.key_set.indexOf(typeChild.type )
        if( idx == -1 ){
            this.childs.push(typeChild)
            this.key_set.push(typeChild.type)
        }
        else {
            this.childs[idx].ids = [...this.childs[idx].ids , ...typeChild.ids]
        }
    }

    static completeNodeValue = (nodeValue:reshapeObject<INodeComponentValue>):INodeComponentValue => {
        return {...NodeComponent.dfValue,...nodeValue}
    }

    setNodeValueFromArrChildsValAndArrAttributes(arr_arr_nodeValue_childs :readonly (NodeComponentValue[])[] ,isMergedByValues : boolean = true ,  _attributes ?:Array<ChildAttributeTypeValue>  ){
        const isMergedByAttributes = !isMergedByValues
        if(_attributes !== undefined)this.nodeValue.attributes = [..._attributes]
        if(isMergedByValues){
            const joinCharOfSameSelectors = " "
            const joinCharOfDifferentSelectors = "\n"
            let tmp = arr_arr_nodeValue_childs.map((arr_nodeValue_childs) => 
            arr_nodeValue_childs.filter((nodeValue)=>nodeValue.proper_value!== undefined).map((nodeValue) => {
                return nodeValue.proper_value
            }))
            tmp = tmp.filter((arr) => arr.length > 0)
            this.nodeValue.value = tmp.length >0 ? tmp.map((elm)=>elm.join(joinCharOfSameSelectors)).join(joinCharOfDifferentSelectors) : undefined
        }
        if(!isMergedByValues || this.nodeValue[str_value] == "") {//isMergedByAttributes

            const joinCharOfAttributes = " "
            let tmp = _attributes.filter((attribute) => attribute[str_value] !== undefined).map((attribute) => attribute[str_value])
            this.nodeValue.value = tmp.length >0 ? tmp.join(joinCharOfAttributes) : undefined 
        }

    }

    
    setNodeValueProperValue(_properValue:string){
        this.nodeValue.proper_value = _properValue;
    }


    


    /*setIdPath (trad_map : MapRegexToIdPath< t_strRegex , unionPathId ,ArrUnionClassName,unionClassname > ){
        this.idPath =  MapRegexToIdPath.arrPathToPathId<t_strRegex, unionPathId,ArrUnionClassNameType,unionClassNameType>.arrPathToPathId (trad_map,this.compo_path)
    }*/



    
}