
import { ExposeFunction } from "../PageEvaluate/ExposeFunction.js"
import { UnionToArray, arrToUnion, getElementNumberI, t_JoinChar_underscore } from "@shared/type.js"
import { arrID_to_selector, node_to_arrID, node_to_selector } from "./utils.js"
import { t_expsAndScript } from "../PageEvaluate/todo.js"
import { joinFilePath } from "@shared/m_file.js"
import { getPathPageParsing } from "@/config/pathFolder/srcPath.js"
import { noneCompClassName, isNoneCompClassName, StrChildType } from "./TypeChilds/types.js"


/*
export type t_componentClassName = [t_noneCompClassName,...string[]] 

export type t_map_noneCompClassNameAndNoneChildType = readonly [t_noneCompClassName , readonly [t_noneChildType] ]
export const map_noneCompClassNameAndNoneChildType :t_map_noneCompClassNameAndNoneChildType = [noneCompClassName , [noneChildType]] as const
*/

export const invalidClassName = noneCompClassName
export type t_invalidClassName = typeof invalidClassName 
export const isInvalidClassName = (classname : any ) : classname is t_invalidClassName => isNoneCompClassName(classname)

export const rootClassName :"Page" = "Page"
export const getRootType :StrChildType.t_childType<typeof rootClassName> = "page"
export type t_rootClassName = typeof rootClassName


export type t_arr_className<unionClassname extends string = string> = [t_rootClassName,...unionClassname[]] 

export const getIdxComponentClassName :0 = 0
export type idx_componentClassNameType = typeof getIdxComponentClassName

export const getIdxComponentChild :1 = 1
export  type idx_componentChildType = typeof getIdxComponentChild


export const component_empty_childs :  readonly undefined []  = [] //StrChildType.t_childType<string>
export type t_component_empty_childs = typeof component_empty_childs

export type t_component<componentClassNameType extends string , t_childs extends string = componentClassNameType  >  = 
readonly [componentClassNameType,(readonly StrChildType.t_childType<t_childs>[])|(t_component_empty_childs)]

export type t_component_any =  t_component<string,string>

export const getRootComponent = <T extends string > (childRoot: T) : readonly [t_rootClassName, readonly [T]] => [rootClassName , [childRoot]] as const
export type isComponentEmptyChilds < A extends t_component_any> = A[idx_componentChildType] extends t_component_empty_childs ? true : false 

export type t_arr_component <componentClassNameType extends string , t_childs extends string = componentClassNameType > = readonly t_component<componentClassNameType,t_childs>[]

export type t_getClassNameTypeFromArrComponent < T extends string , ArrComponent extends t_arr_component<T,_T> , _T extends string = string  > = getElementNumberI<idx_componentClassNameType , ArrComponent>
export type t_getChildTypeFromArrComponent< T extends string , ArrComponent extends t_arr_component<T,_T> , _T extends string = string> =  getElementNumberI<idx_componentChildType , ArrComponent>



export type t_getLeaf <  T extends string , ArrComponent extends t_arr_component<T,string>> = 
    ArrComponent extends readonly [infer A , ...infer R]?
      A extends t_component_any ?
      R extends readonly (readonly [T, readonly string[] | t_component_empty_childs])[] ? 
          t_getLeaf<T,R> | (isComponentEmptyChilds<A> extends true ? A[idx_componentClassNameType] : never )
      : never :never 
    :never 



export const getChildArr = <arrClassName extends readonly string[] ,  t_idx extends  number , t_childs_idx extends number[] =[] ,t_arr_ext extends readonly string [] = readonly [], _unionClassName extends arrToUnion<arrClassName> =arrToUnion<arrClassName> >(arr_component:arrClassName, idx:t_idx,childs_idx : t_childs_idx =[] as t_childs_idx , arr_ext : t_arr_ext = [] as any  ) => { 
  
  type t_childs = t_childs_idx[number] extends never ? undefined : arrClassName[t_childs_idx[number]] extends infer A ? A extends _unionClassName ? A : never : never
  type t_isUndefined = t_arr_ext[number] extends undefined ? t_childs extends undefined ? true : false :false
  
  const curClassName : arrClassName[t_idx] = arr_component[idx] 
  //A FAIRE : const/readonly conversion not allowed
  const arr_childs = childs_idx.length == 0 ? component_empty_childs : childs_idx.map((child_idx)=>StrChildType.compClassnameToChildType<t_childs>(arr_component[child_idx] as t_childs ))  //as readonly StrChildType.t_childType<t_childs>[] 
  const res = [curClassName,[...arr_childs,...arr_ext]]  as const 
  return res as readonly [typeof curClassName,   readonly [...( t_isUndefined extends true ? t_childs extends undefined ? t_component_empty_childs :[] :t_childs extends undefined ? [] :UnionToArray< StrChildType.t_childType<t_childs>>),...t_arr_ext] ] 

  //as  t_component<arrClassName[t_idx],t_childs> 
}






//A FAIRE : IDEA :
type prefix_getChildsSelectors = "getChildsSelectors"

export type t_IArrComponents<componentClassName extends string > ={
    [k in componentClassName as t_JoinChar_underscore <[prefix_getChildsSelectors,k]> ] : ()=> readonly [... readonly string[]] //`${prefix_getChildsSelectors}${k}`
}

//TODO : TO MOVE OR DELETE : 
const components_function : ExposeFunction[] = [node_to_selector, node_to_arrID ,arrID_to_selector].map((exposeFunction:Function) => { 
    return new ExposeFunction(exposeFunction)
  })


export const ExpFunct_components = [components_function ,
  {id:"Components",//TODO//getBaseFileName(__filename,true),
    path: joinFilePath(getPathPageParsing() , "Components.js")//getBaseFileName(__filename))
  }  ] as t_expsAndScript



