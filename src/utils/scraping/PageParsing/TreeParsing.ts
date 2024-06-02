import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule, concatNameModuleAndDebug, take_screenshot } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector_pageParsing","treeParsing")
const debug_pageParsing_treeParsing : Debugger = debug(name_module)



import {INodeComponent, NodeComponent, NodeComponentValue, err_function_retPromfEmptyNodeComponent, t_nodeComponent_values} from "./Tree/NodeComponent.js"
import {IJson,cst_entry, entryGetValue, getFristEntryFromJson, pop_map, t_Entry} from "@shared/m_object.js";
import { XOR, arrToUnion, reshapeObject} from "@shared/type.js"
import { TypeChilds, err_function_retPromNullTypeChild, t_emptyTypeChilds} from "./TypeChilds/TypeChilds.js"
import { rootClassName, t_arr_component, t_getChildTypeFromArrComponent, t_getClassNameTypeFromArrComponent, t_rootClassName} from "./types.js"
import { t_agreg_path } from "@shared/routePath.js"
import { trySelectors_any_all, waitSelectors} from "../DOMElements/Selector/main.js"
import {  Page } from 'puppeteer';
import { t_pageOrElementHN, selectors, t_resSelector, t_ElementHN } from '../DOMElements/Selector/_Selector/type.js';
import { Component, IComponent } from './Schema/Component/Component.js';
import { t_union_IComponent } from './Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js';
import ChildAttributeType, {  IChildAttributeType } from './Schema/_Component/ChildAttributeType/ChildAttributeType.js';
import { t_childsSelectors } from './Schema/_Component/types.js';
import mTree from './Tree/TreeComponent.js';
import { attribute_name_all, df_fct_attribute_name, str_attribute_name, str_config_value, str_selector, t_Object_withAttributeName, t_function_attribute_name_super, t_union_attributeName_, t_union_attribute_name_val_strict } from './Schema/_Component/ChildAttributeType/types.js';
import { _isNullOrUndefined, nullOrUndefined } from '@shared/m_primitives.js';
import { colorIfBool } from '../primitives/misc.js';
import { str_type } from './Schema/Component/types.js';
import { embedding_selector_scope } from './Schema/utils/misc.js';
import { MapRegexToIdPath } from '@shared/m_regexMapping.js';
import { t_strRegex } from '@shared/_regexp.js';
import { noneChildType } from './TypeChilds/types.js';
import { ChildAttributeTypeValue } from './Schema/_Component/ChildAttributeType/ChildAttributeTypeValue.js';
import { str_joinChar_group, str_value, str_value_init, str_value_validation_strRegex } from './Schema/_Component/ValTextContent/types.js';
import { getRegexGS, isEmptyStrRegex } from '@shared/m_regex.js';
import { getMatchAndPosFromRegexMatchingInterval } from '@shared/m_regex_matchObject.js';


const parent_component_color = "red"
const child_component_color = "yellow"

const getInvalidValueGetAttributesValues_elem = () :[]=> [] 
type t_invalidValueGetAttributesValues_elem = ReturnType<typeof getInvalidValueGetAttributesValues_elem>
type t_validValueGetAttributesValues_elem = [t_union_attribute_name_val_strict,ChildAttributeTypeValue]

const getInvalidValueGetAttributesValues = () :[]=> [] 
type t_invalidValueGetAttributesValues = ReturnType<typeof getInvalidValueGetAttributesValues>


export type t_ret_getAttributesValues_elem_awaited = t_validValueGetAttributesValues_elem|t_invalidValueGetAttributesValues_elem

export type t_ret_getAttributesValues_elem  =  Promise<t_ret_getAttributesValues_elem_awaited>
export type t_ret_AttributeValue = Promise<(t_ret_getAttributesValues_elem_awaited[])|t_invalidValueGetAttributesValues>

export const getAttributesValues  = async (page_or_element : t_pageOrElementHN , jsonComponent: t_union_IComponent<any,any> ):t_ret_AttributeValue  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
  return Component.isEmptyChilds_attributes(jsonComponent) ? Promise.resolve(getInvalidValueGetAttributesValues())
    : Promise.all(Component.getChilds_attributes(jsonComponent).map(  async(json_attr :  IJson  ):t_ret_getAttributesValues_elem =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
          //await (element as any).evaluate((elem:any)=>elem.innerHTML))
          
              let attr = ChildAttributeType.fromJson(json_attr as any )
              let elem =  attr?.[str_selector] ? await page_or_element.$(attr[str_selector]) : page_or_element
           


              const getCurValueOfNode =async (attributeValue :ChildAttributeType, _node:any)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                type t_obj = t_Object_withAttributeName<false,true,false> 
                const fs : t_obj  = 
                {
                  ...ChildAttributeType.df_functions,
                  [str_attribute_name]:{
                    ...ChildAttributeType.df_functions[str_attribute_name],
                    [attribute_name_all]: df_fct_attribute_name(attributeValue)
                  }
                }
                let value = await ChildAttributeTypeValue.execFunctionAttributeName<t_function_attribute_name_super, t_obj> (attributeValue,fs, _node,attributeValue?.args_setting) 
                
                //TODO : to extract + refactor (see NodeComponent function)
                
                let res = {[str_value]:value}
                if( !_isNullOrUndefined(attributeValue?.[str_value_validation_strRegex]) && !isEmptyStrRegex(attributeValue[str_value_validation_strRegex])){
                  let [name,text] = getFristEntryFromJson(value) // assume that only one attribute per execFunctionAttributeName
                  const value_init = attributeValue[str_value_init]
                  const validation_regex = getRegexGS(attributeValue[str_value_validation_strRegex])
                  const arr_matching_regex = getMatchAndPosFromRegexMatchingInterval(text,validation_regex,[1]).reduce((_acc,_el)=>_el?._match ? [..._acc,_el._match] : _acc ,[])
                  const arr_res = value_init ? ([value_init,...arr_matching_regex]) : arr_matching_regex
                  text =  (arr_res).join(attributeValue[str_joinChar_group] ?? Component.df[str_joinChar_group] )
                  res = text ? {[str_value]:{[name]:text}} : null 
                }
                return res
              }

              
              const getNewEntry = async (_attr_1 :ChildAttributeType, _node:any)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/

                const key = _attr_1[str_type]
                const _attr_2 = await getCurValueOfNode(_attr_1,_node)
                if(_attr_2 === null) return getInvalidValueGetAttributesValues_elem()
                let new_value :ChildAttributeTypeValue =  ChildAttributeTypeValue.cst_fromValueAndChildAttributeType(_attr_2[str_value],_attr_1) 
                
                return cst_entry(new_value[str_config_value][key]  ,new_value) as t_ret_getAttributesValues_elem_awaited //TODO 

              }

              return getNewEntry(attr ,elem).then((r)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                return r 
              }).catch((err)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                console.log("error",err)
                throw new Error("error")
              })

          
          }))
          

}


const getCpyNumber = (num:number) : number =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
  const k = num
  return k
  }



export type t_ParsingTree<unionClassname extends string >  = {root_id:number, mTree:unionClassname[]}

export async function base_getParsingTree<
  unionPathId extends string ,ArrUnionClassName extends readonly string[] ,unionclassname  extends arrToUnion<ArrUnionClassName>  , ArrArr extends  t_arr_component<unionclassname>, 
  classname  extends unionclassname = t_rootClassName extends unionclassname ? t_rootClassName : unionclassname,
  ArrUnionChilds extends  getArrUnionChilds<ArrUnionClassName,unionclassname,ArrArr,classname> =getArrUnionChilds<ArrUnionClassName,unionclassname,ArrArr,classname>, 
  unionRegex extends t_strRegex = t_strRegex 
   > 
  ( gl_page: any  , prop_base :classname = rootClassName as unionclassname,mapFilter ?: MapRegexToIdPath<unionRegex, unionPathId, ArrUnionClassName ,unionclassname > , is_test:boolean =false):Promise<mTree<unionPathId,ArrUnionClassName,unionclassname>> { // = root_profilePage_classname
    type t_unionClassname = arrToUnion<ArrUnionClassName>
    let _mTree :mTree<unionPathId,ArrUnionClassName,unionclassname> = new mTree<unionPathId,ArrUnionClassName,unionclassname>()
    let root:NodeComponent<t_unionClassname ,ArrUnionClassName, t_unionClassname> = NodeComponent.fromJson(await 
        _buildParsingTree<unionPathId ,ArrUnionClassName,unionclassname,ArrArr, classname,ArrUnionChilds,unionRegex>(
          gl_page.page,gl_page.getScrapingComponent(),mapFilter== undefined ? gl_page.getScrapingComponent().getMapPathPatternToId() : mapFilter,_mTree,prop_base,NodeComponent.df_compoPath,[],0,[],is_test)
      )
    _mTree.root_id = root.id
    return _mTree
  }
  


type getArrUnionChilds <ArrUnionClassName extends readonly string[] ,unionclassname  extends arrToUnion<ArrUnionClassName>  , ArrArr extends  t_arr_component<unionclassname>,classname  extends unionclassname  >
= ArrArr extends readonly [infer A,...infer R] ? 
  A extends t_arr_component<unionclassname> ? 
      t_getClassNameTypeFromArrComponent<unionclassname,A> extends infer B ? 
        B extends classname ? 
          t_getChildTypeFromArrComponent<unionclassname,A> 
        :R extends t_arr_component<unionclassname> ? getArrUnionChilds<ArrUnionClassName,unionclassname,R,classname> : never 
      : never 
    : never 
  : never


//TODO 
//Components : IJsonComponents
//RE typing 
export async function _buildParsingTree<
  unionPathId extends string ,ArrUnionClassName extends readonly string[] ,unionclassname  extends arrToUnion<ArrUnionClassName>  , ArrArr extends  t_arr_component<unionclassname>, //general
  classname  extends unionclassname   , //specific 
  ArrUnionChilds extends  getArrUnionChilds<ArrUnionClassName,unionclassname,ArrArr,classname> =getArrUnionChilds<ArrUnionClassName,unionclassname,ArrArr,classname>  //calculated
  ,unionRegex extends t_strRegex = t_strRegex
   >
 (p_page_or_element: t_pageOrElementHN  , ScrapingComponent : any ,mapFilter : MapRegexToIdPath<unionRegex, unionPathId, ArrUnionClassName ,unionclassname > ,  _mTree :mTree<unionPathId,ArrUnionClassName,unionclassname> ,
   p_prop_base :classname   , p_agreg_path : t_agreg_path<unionclassname> ,p_agreg_selector : selectors[] =[], p_path_regex_idx : number  = 0 ,  p_agreg_category : ([t_union_attributeName_,string])[] =[], is_test:boolean = false ):Promise<IJson> {


      type t_rien = nullOrUndefined
      const rien :t_rien  = null 
      const isRien = _isNullOrUndefined

      type UnionChilds = arrToUnion<ArrUnionChilds>
      type _t_typeChild=TypeChilds<UnionChilds>
      type _t_nodeComponent = NodeComponent<unionPathId,ArrUnionClassName,unionclassname , UnionChilds >
      type _t_nodeComponent_json = INodeComponent<unionPathId,ArrUnionClassName,unionclassname , UnionChilds >
      type _t_nodeComponentValue =  _t_nodeComponent["nodeValue"]
      type _t_nodeComponentValueWithRien = _t_nodeComponentValue|t_rien
      type t_typeChildWithEmpty = _t_typeChild|t_emptyTypeChilds


      type t_res_1 = (_t_nodeComponentValue[]|t_typeChildWithEmpty)
      type t_res_2 = ([t_rien] | [_t_nodeComponentValue])
      type t_res = t_res_1| t_res_2


      const leaf_getNodeComponentValue = (page_or_element: t_pageOrElementHN , v :IComponent<unionclassname,UnionChilds> , agreg_selector:selectors[] ,selectors ?:selectors , is_test : boolean =false ,fct_catch : (err)=> t_rien = (err)=> rien ): Promise<_t_nodeComponentValueWithRien>=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        if(page_or_element instanceof   Page) throw new Error("page_or_element instanceof   Page")
        //colorIfBool(page_or_element,child_component_color,is_test)
        return NodeComponentValue.cst_fromElement(page_or_element ,v,[...agreg_selector],selectors ).catch(fct_catch)
      }
      

      type t_childs_nodesOrValuesWithRien =  XOR<[(_t_nodeComponent|t_rien) , _t_nodeComponentValueWithRien ]>
      type t_childs_nodesOrValues =  XOR<[_t_nodeComponent , _t_nodeComponentValue ]>

      let f_arr_res : Promise<t_res>[] = [] 
    
      const _v : IComponent<unionclassname,UnionChilds>  = (ScrapingComponent.getFwJsonComponent().json[p_prop_base] as any)//TODO we remove getComponent cause not class but json 

      console.log('_v',_v)
      if(!_v) return Promise.reject(NodeComponent.getEmptyInit())
      let mres : _t_nodeComponent = NodeComponent.getEmptyInit()
    if(p_prop_base == "StartupOccitanieProfilHeader"){
      console.log("StartupOccitanieProfilHeader" , await (p_page_or_element as any).evaluate((elem:any)=>elem.outerHTML))
      
    }

      let _isALeaf : boolean = Component.isEmptyChilds_components(_v)

      //A FAIRE :t_agreg_list sans apres faire  convert unknown 
      let _agreg_path : t_agreg_path<unionclassname>  =  NodeComponent.nextAgregPath<unionclassname,classname>(p_prop_base,p_agreg_path) 
        

          let childs_selectors:t_childsSelectors = Component.getChilds_selectors<unionclassname,UnionChilds>(_v)
          

          //let res_arr_attributes : [string,string][] =  await getAttributesValues(p_page_or_element,_v) //TODO : TO PUT FIRST TO FILTER IF VALUE SATISFY FILTER CONDITION stop recursion 

          const map_attribute : Map<t_validValueGetAttributesValues_elem[0] , t_validValueGetAttributesValues_elem[1]> =  new Map(
            await getAttributesValues(p_page_or_element,_v).then(
              (arr:Awaited<t_ret_AttributeValue>)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                return arr.filter((elem:t_ret_getAttributesValues_elem_awaited)=>elem.length) as t_validValueGetAttributesValues_elem[] 
              }
          ))

          
          //const id_attribtues : ChildAttributeType =  pop_map<t_union_attribute_name_val_strict,ChildAttributeType>(map_attribute,"id")  
          //if(id_attribtues!==undefined){ /*console.log("DEBUG_ME",getCurrentLine());*/
          //  p_agreg_category.push(["id",id_attribtues[str_value]])// A FAIRE : atm not used 
          //}
          
          
          type t_arr_values_attributesMap = Array<t_Entry<t_union_attribute_name_val_strict, ChildAttributeType>>
          /*const arr_attributes :t_arr_values_attributesMap =  [...map_attribute.entries()]*/
          let cur_node_value :reshapeObject<_t_nodeComponentValue>= null 
              try {
                cur_node_value = (p_page_or_element instanceof   Page ? {} : {description:[...p_agreg_selector],objectId:p_page_or_element.remoteObject().objectId})
                //On essaye de trouver chaque childs_components avec son tableau de selecteur 
              } catch (error) { /*console.log("DEBUG_ME",getCurrentLine());*/
                console.log("error_cur_node_value",error)
              }


                      if(!Component.isEmptyChilds_selectors(_v)){
                          for (let _idx = 0; _idx < childs_selectors.length; _idx++){ /*console.log("DEBUG_ME",getCurrentLine());*/
                          //tente de trouver le fils 
                          
                          let _selectors = childs_selectors[_idx]
                          if(_v.isScoped)_selectors=_selectors.map((child_selector)=>embedding_selector_scope(child_selector)) 

                                const p_nodeOrValues : Promise<t_res_1> = (async (idx:number,selectors:selectors,prop_base : unionclassname ,  component :IComponent<unionclassname,UnionChilds>,  agreg_path : t_agreg_path<unionclassname> , agreg_selector  : selectors[] ,  path_regex_idx :number , agreg_category :   ([t_union_attributeName_,string])[] ,isALeaf:boolean ,is_test :boolean )=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                                  return trySelectors_any_all(p_page_or_element, selectors).then((arr_of_elements : Awaited<ReturnType<typeof trySelectors_any_all>> ) : Promise<t_res_1> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                                  
                                    let i_child : readonly t_resSelector[] 
                                    //@ts-ignore
                                    i_child= arr_of_elements.flat()
                                    console.log("i_child",JSON.stringify(i_child))

                                    if(i_child.length>0){ /*console.log("DEBUG_ME",getCurrentLine());*/
                                                    type t_unionclassnameOfChild = ReturnType<typeof TypeChilds.childTypeTocompClassname<UnionChilds>>
                                                    let unionclassnameOfChild :t_unionclassnameOfChild = !isALeaf  ? TypeChilds.childTypeTocompClassname(Component.getChilds_components_idx(component,idx)) : noneChildType as any //TODO : clean 
                                                    let childs_nodesOrValues : Promise<t_childs_nodesOrValuesWithRien>[] = !isALeaf ? 

                                                            i_child.map( (element): Promise<_t_nodeComponent>  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                                                                //colorIfBool(element,parent_component_color,is_test,["p"])//redo with diff selector div for example
                                                                //[... operator] to provide a copy for each promise child 

                                                                let _res = MapRegexToIdPath.arrPathToPathId<unionRegex, unionPathId,ArrUnionClassName,unionclassname> (mapFilter,agreg_path,prop_base,path_regex_idx)
                                                                
                                                                if(_isNullOrUndefined(_res)) return Promise.resolve(rien)   
                                                                else return _buildParsingTree<unionPathId,ArrUnionClassName ,unionclassname,ArrArr,t_unionclassnameOfChild >(element, ScrapingComponent,mapFilter,_mTree,unionclassnameOfChild,agreg_path , [...agreg_selector,selectors], _res.regex_idx , [...agreg_category],is_test).then( (node_json:IJson) :_t_nodeComponent =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                                                                      return NodeComponent.fromJson(node_json) 
                                                                })
                                                            
                                                            }) 

                                                            : i_child.map( async (element) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                                                              return  leaf_getNodeComponentValue(element,component,agreg_selector,selectors,is_test)
                                                            }) 

                                                    let nodesIdsOrNodeValues : Promise<Array<number>|_t_nodeComponentValue[]>= Promise.all(childs_nodesOrValues.map(promise => promise.catch(error =>{ /*console.log("DEBUG_ME",getCurrentLine());*/return rien ;  /*NodeComponent.getEmptyInit() console.log("errorCHILDS",error);return error*/}))).then( //type : null
                                                        (_arr_res:t_childs_nodesOrValuesWithRien[]   )=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                                                                
                                                          let arr_res :t_childs_nodesOrValues[]  = (_arr_res as any[] ).filter((_res:any )=> !isRien(_res) ) as Exclude<t_childs_nodesOrValuesWithRien,t_rien>[] as any 
                                                                
                                                          if(!isALeaf){ /*console.log("DEBUG_ME",getCurrentLine());*/
                                                            return ((arr_res as _t_nodeComponent[] ).map((nodeComponent:_t_nodeComponent) => nodeComponent.id != NodeComponent.getEmptyId() ? nodeComponent.id : NodeComponent.getEmptyId() ) as Array<number>)
                                                          } 
                                                          else { 
                                                            return arr_res as _t_nodeComponentValue[] 
                                                          }
                                                                
                                                        })

                                                return (async (_unionclassnameOfChild , _nodesIdsOrNodeValues ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                                                    return !isALeaf ? new TypeChilds<arrToUnion<ArrUnionChilds>>(_unionclassnameOfChild, await _nodesIdsOrNodeValues as Array<number>) : await _nodesIdsOrNodeValues as _t_nodeComponentValue[] 
                                                  })(unionclassnameOfChild ,nodesIdsOrNodeValues)
    
                                    }
                                    return  Promise.resolve( TypeChilds.getEmptyInit()  ) 

                                  }).catch(async (err)=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
                                    return err_function_retPromNullTypeChild( `Error p_nodeOrValue ${JSON.stringify( Component.getChilds_components(component))} index_type : ${idx} on ${prop_base}` )(err)
                                })

                                })(getCpyNumber(_idx), [..._selectors],p_prop_base, {..._v} ,_agreg_path  ,[...p_agreg_selector],getCpyNumber(p_path_regex_idx),  [... p_agreg_category] ,_isALeaf ,is_test )
                            
                            f_arr_res.push(p_nodeOrValues )
                        }
                      }
                      else {
                        const p_nodeOrValues : Promise<t_res_2> = leaf_getNodeComponentValue(p_page_or_element,_v,p_agreg_selector,undefined,is_test).then((res:_t_nodeComponentValueWithRien)=>[res])
                        f_arr_res.push(p_nodeOrValues )
                      }
            

      return ( (_cur_node_value :reshapeObject<_t_nodeComponentValue> , _map_attributes : Map<t_validValueGetAttributesValues_elem[0] , t_validValueGetAttributesValues_elem[1]>   ,prop_base :unionclassname , v :IComponent<unionclassname,UnionChilds>  ,agreg_path : t_agreg_path<unionclassname> ,agreg_category :   ([t_union_attributeName_,string])[],isALeaf:boolean   ) => Promise.all(f_arr_res.map(promise => promise.catch(error =>{ /*console.log("DEBUG_ME",getCurrentLine());*/console.log("errorFUNCTALL",error);return error}))).then( 
        async(_arr_res: t_res  [] )=>{ /*console.log("DEBUG_ME",getCurrentLine());*/

            type t_elmArr_res = Exclude<t_res,t_rien>
            let arr_res : t_elmArr_res []= _arr_res.filter((_res:t_res)=> !isRien(_res))
             

            const isNodeComponentValueWithEmptyArray =(_res :any )=>Array.isArray(_res)
            const isTypeChildWithEmpty = (_res :any )=>TypeChilds.isTypeof(_res)

            const isEmptyTypeChilds = (_res :any )=>TypeChilds.isEmpty(_res)
           
            let _typeChilds_arr : t_typeChildWithEmpty[]= (arr_res as any[]).filter((_res:t_elmArr_res )=> !isNodeComponentValueWithEmptyArray(_res) && isTypeChildWithEmpty(_res as Exclude<t_elmArr_res,_t_nodeComponentValue[]>) ) as (Exclude<t_elmArr_res,_t_nodeComponentValue[]> & t_typeChildWithEmpty) [] //Exclude<t_res,NodeComponentValue> 
            let typeChilds_arr : _t_typeChild []= _typeChilds_arr.filter((_res:t_typeChildWithEmpty )=> !isEmptyTypeChilds(_res)  ) as Exclude<t_typeChildWithEmpty,t_emptyTypeChilds>[] //Exclude<t_res,NodeComponentValue>
            
            let arr_res_arr_value :(_t_nodeComponentValue[])[] = (arr_res as any[]).filter((_res :t_elmArr_res)=>  isNodeComponentValueWithEmptyArray(_res)  ) as Exclude<t_elmArr_res,t_typeChildWithEmpty>[]

            const arr_attributes : ChildAttributeTypeValue[] = [..._map_attributes.values()] //13/03/24

            mres= !isALeaf?
            NodeComponent.createAndAffectAgregPath<unionPathId,ArrUnionClassName,unionclassname , UnionChilds >( prop_base,agreg_path   ,_cur_node_value ,typeChilds_arr   ) 
            : NodeComponent.createAndAffectAgregPath<unionPathId,ArrUnionClassName,unionclassname , UnionChilds >( prop_base,agreg_path ,{...arr_res_arr_value[0][0].toJson(),..._cur_node_value}, [] ) //A FAIRE : auto_increment_id => JSHandle@Node .id 

            mres.setNodeValueFromArrChildsValAndArrAttributes(arr_res_arr_value,isALeaf && (arr_res_arr_value.length != 0),arr_attributes)
            
            //A FAIRE : 
            let mres_json = mres.toJson() as unknown as  _t_nodeComponent_json
            _mTree.addNode(mres_json) 

            return mres_json
  
          }).catch(
            (err)=>
            err_function_retPromfEmptyNodeComponent<unionPathId,ArrUnionClassName,unionclassname,UnionChilds>(p_prop_base,agreg_path,_cur_node_value,"Error nfunctionError components: " + JSON.stringify(v) + " prop_base" + prop_base + " agreg_path" + agreg_path)(err)
          
          ))({...cur_node_value},new Map(map_attribute), p_prop_base ,  {..._v} ,_agreg_path  ,[...p_agreg_category] , _isALeaf)
   
      }