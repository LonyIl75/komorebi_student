
import { MapRegexToIdPath, t_arrPathToPathId } from "@shared/m_regexMapping.js"
import { t_agreg_path } from "@shared/routePath.js"
import { arrToUnion} from "@shared/type.js"
import { INodeComponent, NodeComponent, NodeComponentValue, _t_NodeComponentValue_getJsonValue } from "./NodeComponent.js"
import { _isNullOrUndefined } from "@shared/m_primitives.js"
import { IJson, entryGetKey, entryGetValue, isEmptyJson, isNotEmptyJson, isObject } from "@shared/m_object.js"
import { deepCloneJson, getSubsetJsonFromPredicate } from "@shared/m_json.js"
import { isNoneCompClassName, t_noneCompClassName } from "../TypeChilds/types.js"
import { t_strRegex } from "@shared/_regexp.js"


//TODO-IMP REFACTOR 
type t_tree_jsonValue <unionPathId extends string>  = {[key in unionPathId]?:t_tree_jsonValue<unionPathId> | string}

type t_recur_param<unionPathId extends string ,ArrUnionClassNameType extends readonly string[],unionClassname extends arrToUnion<ArrUnionClassNameType>> = {
  cur_node : INodeComponent<unionPathId,ArrUnionClassNameType,unionClassname>,
  cur_idx : number,
  cur_trad_paths: unionPathId[] | arrToUnion<ArrUnionClassNameType>[]
}
export const str_json_value = "json_value" as const
type t_str_json_value = typeof str_json_value
export const isGetValue = (jsonValue : IJson<any>) => jsonValue.hasOwnProperty(str_json_value)


export const getRootPropFromResValue = <TProp extends string,isGetValue extends boolean = boolean > (prop : TProp , json : {[k in TProp]:t_resValue<TProp,isGetValue>})=> {
  const elm = json[prop]
  return isGetValue(elm) ? elm[str_json_value][prop] : elm 
}

export const getRootPropFromValue = <TProp extends string ,isGetValue extends boolean = boolean > (prop : TProp , json_or_value : {[k in TProp]:t_resValue<TProp,isGetValue>}|string)=> {
  if(!isObject(json_or_value)) return json_or_value
  return getRootPropFromResValue<TProp>(prop,json_or_value as {[k in TProp]:t_resValue<TProp,false>} )
}


type t_nodeComponentValue <unionPathId extends string ,ArrUnionClassNameType extends readonly string[],unionClassname extends arrToUnion<ArrUnionClassNameType>>=  INodeComponent<unionPathId,ArrUnionClassNameType,unionClassname>["nodeValue"]

const _isDefinedVal = <unionPathId extends string ,ArrUnionClassNameType extends readonly string[],unionClassname extends arrToUnion<ArrUnionClassNameType>> (nodeValue : {value:t_nodeComponentValue<unionPathId,ArrUnionClassNameType,unionClassname>["value"]}&{[k in string] :any }) =>  !NodeComponent.isDfProp<"value">(nodeValue,"value")

const isDefinedValFromNotIsGetValue = <unionPathId extends string ,ArrUnionClassNameType extends readonly string[],  T extends unionPathId | arrToUnion<ArrUnionClassNameType>| "" >(val : t_resValue<T,false>,idPath : T ) =>  {
  let _b =  val.hasOwnProperty(idPath)?_isDefinedVal({value:val[idPath]}) : false 
  if(!_b)_b = isNotEmptyJson(getSubsetJsonFromPredicate(val, (entry) => entryGetKey(entry) !== idPath && entryGetValue(entry) !== undefined))
  return _b
}

const isDefinedVal =<unionPathId extends string ,ArrUnionClassNameType extends readonly string[] , T extends unionPathId | arrToUnion<ArrUnionClassNameType> , t_isGetValue extends boolean = boolean > (_val : t_resValue<T,t_isGetValue>,idPath : T  ) => {
  const val : t_resValue<T,false> = isGetValue(_val) ? _val[str_json_value] : _val
  return isDefinedValFromNotIsGetValue<unionPathId,ArrUnionClassNameType,T>(val ,idPath)
}

type t_jsonValueToJsonStoredValue <TP extends string,t_value_Key = string >= ReturnType<typeof NodeComponentValue.jsonValueToJsonStoredValue<TP,t_value_Key>> 

export type t_resValue <Key extends string ,t_isGetValue extends boolean = boolean,t_value_Key = string ,
_t_resValue extends t_jsonValueToJsonStoredValue<Key,t_value_Key> = t_jsonValueToJsonStoredValue<Key,t_value_Key>
 >  =  
boolean extends t_isGetValue ? (NodeComponentValue & {[str_json_value] :_t_resValue}) | _t_resValue :
t_isGetValue extends true ? NodeComponentValue & {[str_json_value] :_t_resValue} :_t_resValue


type t_invalid_getJsonValue = null
const invalid_getJsonValue :t_invalid_getJsonValue = null 


type t_getJsonValue<unionPathId extends  string,
ArrUnionClassNameType extends readonly string[]  , 
unionClassname extends arrToUnion<ArrUnionClassNameType> , 
t_isGetValue extends boolean = boolean, isOne extends boolean = boolean > = 
 
{res_childs : (IJson< unionClassname, isOne extends true ? IJson : IJson[]> 
  & 
  IJson< unionPathId , t_resValue<unionPathId,t_isGetValue> >//Childs value
  )|{}
  res_value :t_resValue<unionPathId,t_isGetValue> }|t_invalid_getJsonValue //Current value 



const buildGetJsonValueRecurParam = <unionPathId extends string ,ArrUnionClassNameType extends readonly string[]  , unionClassname extends arrToUnion<ArrUnionClassNameType>=arrToUnion<ArrUnionClassNameType>> (tree:mTree<unionPathId ,ArrUnionClassNameType , unionClassname > , trad_map : MapRegexToIdPath< t_strRegex , unionPathId ,ArrUnionClassNameType,unionClassname >,cur_recur?:t_recur_param<unionPathId ,ArrUnionClassNameType,unionClassname >)=>{

      let _cur_node,_cur_idx,_cur_trad_paths
      if(cur_recur === undefined) {
        _cur_node = tree.nodes[tree.root_id]
        if(isNoneCompClassName(_cur_node.className)) return invalid_getJsonValue
        const tmp = MapRegexToIdPath.arrPathToPathId<t_strRegex, unionPathId,ArrUnionClassNameType,unionClassname> (trad_map,_cur_node.compo_path,_cur_node.className,0)
        if(_isNullOrUndefined(tmp)) return invalid_getJsonValue
        _cur_idx = tmp.regex_idx
        _cur_trad_paths = tmp.group_idx
      }else{
        _cur_node = cur_recur.cur_node
        _cur_idx = cur_recur.cur_idx
        _cur_trad_paths = cur_recur.cur_trad_paths
      }
      return {cur_node: _cur_node,cur_idx:_cur_idx,cur_trad_paths:_cur_trad_paths} as t_recur_param<unionPathId ,ArrUnionClassNameType,unionClassname >

}

type t_ret_getChildsIdPath <unionPathId extends string ,ArrUnionClassNameType extends readonly string[]  , unionClassname extends arrToUnion<ArrUnionClassNameType> = arrToUnion<ArrUnionClassNameType> , T extends unionClassname = unionClassname, TPath extends t_agreg_path<unionClassname>  =t_agreg_path<unionClassname>   > = 
{[k in number]: {type_node:T ,_path : TPath } & t_arrPathToPathId<unionPathId,ArrUnionClassNameType,unionClassname> }

export default class mTree<unionPathId extends string ,ArrUnionClassNameType extends readonly string[]  , unionClassname extends arrToUnion<ArrUnionClassNameType>> {
    nodes :  {[k in number ] : INodeComponent<unionPathId,ArrUnionClassNameType,unionClassname >} = {} 
    root_id : number = 0
    len : number = 0
    constructor (root_id : number= NodeComponent.getEmptyId() , nodes : {[k in number ] : INodeComponent<unionPathId,ArrUnionClassNameType,unionClassname >} = {} , len : number = undefined ){
      this.root_id = root_id
      this.nodes = nodes
      this.len = len === undefined ? Object.keys(nodes).length : len
      //this.jsonValue = {} as t_tree_jsonValue<unionPathId>
    }
  
    //jsonValue : t_tree_jsonValue<unionPathId> 
  
    addNode (node : INodeComponent<unionPathId,ArrUnionClassNameType,unionClassname>){
      this.nodes[node.id] = node
      this.len += 1
    }

    static  getChildsIdPath <unionPathId extends string ,ArrUnionClassNameType extends readonly string[]  , unionClassname extends arrToUnion<ArrUnionClassNameType>=arrToUnion<ArrUnionClassNameType>> (cur_node : INodeComponent<unionPathId,ArrUnionClassNameType,unionClassname> ,cur_idx : number , _trad_map : MapRegexToIdPath< t_strRegex , unionPathId ,ArrUnionClassNameType,unionClassname >){
      let path : t_agreg_path<unionClassname>  = cur_node.compo_path
      let cur_path: t_agreg_path<unionClassname>  = null 
      let type_node : unionClassname = null
      let cur_idxPath_s : t_ret_getChildsIdPath<unionPathId,ArrUnionClassNameType,unionClassname,typeof type_node , typeof cur_path>={}
      for (let i = 0 ; i <cur_node.key_set.length ; i++){
        type_node = cur_node.key_set[i] as unionClassname
        cur_path = NodeComponent.nextAgregPath<unionClassname|t_noneCompClassName ,unionClassname>(type_node,path )
        let _res = MapRegexToIdPath.arrPathToPathId<t_strRegex, unionPathId,ArrUnionClassNameType,unionClassname> (_trad_map,cur_path,type_node,cur_idx)
        if(!_isNullOrUndefined(_res)) cur_idxPath_s[i]={type_node:type_node,_path:cur_path,..._res}
      }
      return cur_idxPath_s
    }
  
    getJsonValue<t_isGetValue extends boolean= false >(trad_map : MapRegexToIdPath< t_strRegex , unionPathId ,ArrUnionClassNameType,unionClassname >, cur_recur?:t_recur_param<unionPathId ,ArrUnionClassNameType,unionClassname >,var_isGetValue : t_isGetValue = false  as any )
    :(t_getJsonValue<unionPathId,ArrUnionClassNameType,unionClassname ,t_isGetValue>| null){
  
      class SetCond {
        _b : boolean 
        constructor(){
          this._b = false
        }
        setSetCond = () => this._b = true  
        unsetSetCond = () => this._b = false
        issetSetCond = () => this._b === true 
        set_b = (b : boolean) => this._b = b
      }


      type t_res<isLeaf extends boolean = boolean , isOne extends boolean = boolean > = 
      boolean extends isLeaf ? {res_childs:{} ,_b:SetCond ,res_value:t_resValue<unionPathId,t_isGetValue> } |t_getJsonValue<unionPathId,ArrUnionClassNameType,unionClassname , t_isGetValue,isOne> & {_b :SetCond }
      : isLeaf extends true ? {res_childs:{} ,_b:SetCond ,res_value:t_resValue<unionPathId,t_isGetValue> }  
      :t_getJsonValue<unionPathId,ArrUnionClassNameType,unionClassname , t_isGetValue,isOne> & {_b :SetCond }

      const isDefinedChilds = (childs : any) => childs 

      
      type t_invalid_childs = null
      const invalid_childs : t_invalid_childs = null 
      

      const  {cur_node,cur_idx,cur_trad_paths} = buildGetJsonValueRecurParam(this,trad_map,cur_recur)

      let cur_idxPath_s = mTree.getChildsIdPath<unionPathId,ArrUnionClassNameType>(cur_node,cur_idx,trad_map)

      const cur_jsonValue =  NodeComponentValue.jsonValueToJsonStoredValue( cur_trad_paths[0] ,NodeComponentValue.getJsonValue( cur_node.nodeValue))

      let res_value = (var_isGetValue ? ({...cur_node.nodeValue,[str_json_value] : cur_jsonValue} ) :  cur_jsonValue ) 

      let _b = new SetCond()
      let res : t_res
      //@ts-ignore
      res = {res_childs:{}  ,_b,res_value:res_value }



      type t_arr_res<isLeaf extends boolean = boolean , isOne extends boolean = boolean > = {[k in Exclude<keyof t_res<isLeaf,isOne>,"_b">]: t_res<isLeaf,isOne>[k]} []

      let arr_res :t_arr_res= []
      let cur_idxPath : t_ret_getChildsIdPath<unionPathId,ArrUnionClassNameType>[keyof t_ret_getChildsIdPath<unionPathId,ArrUnionClassNameType>] 
      let id_childs : number[] = []

      let trad_paths : typeof cur_idxPath.group_idx  

      type t__path = typeof cur_idxPath.type_node 
      type t_trad_path = typeof trad_paths[number]

      for (const id_child in  cur_idxPath_s){

        arr_res = []
        id_childs =  cur_node.childs[id_child].ids

        cur_idxPath = cur_idxPath_s[id_child]
        trad_paths = cur_idxPath.group_idx

        let _path: t__path = cur_idxPath.type_node
        let trad_path :t_trad_path = trad_paths[0]
        
        for (const id of id_childs) {
          arr_res.push(this.getJsonValue(trad_map,{cur_node : this.nodes[id],cur_idx : cur_idxPath.regex_idx,cur_trad_paths:[trad_paths[0]]},var_isGetValue))// cur_idxPath[2] : current id regex
        }
        //cur_node.className == "BooksProductDetails"
        arr_res = arr_res.filter((res)=>res!==null)

        const fct_onlyOne =  <_isOne extends true = true ,_TChild extends t_res<_isOne>["res_childs"] =t_res<_isOne>["res_childs"] > (arr_res :t_arr_res ,acc : _TChild, ... args:[{_path:t__path,trad_path:t_trad_path,}] ) => {
          type t_isOne =   true
          

          if(arr_res.length !== 1) throw new Error('arr_res.length !== 1')

          const res = arr_res[0]
          const {res_value,res_childs} = res
          const {trad_path,_path} = args[0]

          if(isDefinedChilds(res_childs)) {
            if(trad_path === _path) acc= {...res_childs,...acc}
            else {
              const c_acc : IJson< unionClassname, t_isOne extends true ? IJson :IJson[] >   = acc as any 
              c_acc[_path] = c_acc?.[_path] ? {...c_acc[_path],...res_childs}:res_childs
            }
          }

          if(isDefinedVal(res_value,trad_path)) {
            const c_acc : IJson< unionPathId | unionClassname, t_resValue<unionPathId,t_isGetValue> > = acc as any 
            if(isGetValue(res_value))c_acc[trad_path]=res_value
            else acc={...acc ,...res_value}
            
          }
            
          if(!isDefinedChilds(res_childs) && !isDefinedVal(res_value  ,trad_path)){
            return invalid_childs
          }

          return acc
        }

        const fct_moreThenOne = <_isOne extends false = false  ,_TChild extends t_res<_isOne>["res_childs"] =t_res<_isOne>["res_childs"] > 
        (arr_res : t_arr_res,acc : _TChild , ... args:[{_path:t__path,trad_path:t_trad_path,},...[_TChild[t__path],...any[]]]   ) => {

          type t_isOne = false

          const init_value = args.length > 1 ?args[1]:[]
          const {trad_path,_path} = args[0]

          const c_acc : IJson< unionClassname, t_isOne extends true ? IJson :IJson[] >   = acc as any 
          c_acc[_path] = [...init_value]

          for( const _res of arr_res){
            const {res_value,res_childs} = _res
            if(isGetValue(res_value))c_acc[_path].push(isDefinedVal(res_value,trad_path) ? {[trad_path]:res_value,...res_childs} : res_childs)
            else c_acc[_path].push(isDefinedVal(res_value,trad_path) ? {...res_value ,...res_childs} : res_childs) 

          }

          return acc
        }

        const fct_body = (arr_res : t_arr_res,res : t_res , ... args:[{trad_path:any,_path:any}]) => {

          const embed_fct = <_isOne extends boolean = boolean  , _TRes extends t_res<_isOne> = t_res<_isOne> > 
          (_arr_res : t_arr_res,res:_TRes , fct :(arr_res : t_arr_res,acc : _TRes["res_childs"] ,...args:any[])=>_TRes["res_childs"] , ...args:any[]  ) => {
            
            res._b.setSetCond()
            const r = fct(_arr_res,deepCloneJson(res.res_childs),...args)
            if(r===invalid_childs) _b.unsetSetCond()
            else res.res_childs = r
            return res
          }

          if(arr_res.length == 1 ){
            return embed_fct(arr_res,res,fct_onlyOne,...args)
          }
          else if(arr_res.length > 0) {
            return embed_fct(arr_res,res,fct_moreThenOne,...args,[])
          }

          return res

        
        }
        const prev_b = res._b.issetSetCond()
        res = fct_body(arr_res,res, {trad_path,_path})
        res._b.set_b(prev_b||res._b.issetSetCond())
      }
    
      if(!res._b.issetSetCond()) res.res_childs = invalid_childs
      //@ts-ignore
      return res_value || isNotEmptyJson(res.res_childs) ? {res_value:res_value , res_childs : res.res_childs} : invalid_getJsonValue 
  
    }
  
    }
  