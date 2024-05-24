import getCurrentLine from "get-current-line"
import { isNumeric } from "@shared/m_primitives.js";
import { t_joinHyphen_to_joinMaj, t_joinMaj_to_joinHyphen } from "@shared/type.js";


export namespace StrChildType{ 

    export const child_type_sep ="-"  

    export  const compClassnameToChildType  = <T extends string > (str:T):t_joinMaj_to_joinHyphen<T>  =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        if(!str?.length)return "" as t_joinMaj_to_joinHyphen<T>
        let ca =str[0].toLowerCase()
        var i=1;
        for(; i<str.length;i++) { /*console.log("DEBUG_ME",getCurrentLine());*/
            if(isNumeric(str[i])){
                ca+=child_type_sep
                while(i < str.length && isNumeric(str[i]))ca+=str[i++]
                --i
            }
            else if (str[i] === str[i].toUpperCase() ){
            ca+=child_type_sep
            ca+=str[i].toLowerCase()
            }
            else {
            ca+=str[i]
            }
        }
        return ca as t_joinMaj_to_joinHyphen<T>
    }

    export type t_childType<unionType extends string > = 
    string extends unionType ? string : 
    unionType extends t_noneCompClassName ? t_noneChildType:
    ReturnType<typeof compClassnameToChildType<unionType>>


    export const _childTypeToCompClassname = <T extends t_childType<string> > (str:T) : t_joinHyphen_to_joinMaj<T>=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        let ca =str[0].toUpperCase()
        var i=1;
        for(; i<str.length-1;i++) { /*console.log("DEBUG_ME",getCurrentLine());*/
            if (str[i] === child_type_sep ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            ca+=str[i+1].toUpperCase()
            i++
            }
            else {
            ca+=str[i]
            }
        }
        if(str[i])ca+=str[i]
    return ca  as t_joinHyphen_to_joinMaj<T>
    }


    export const isChildType =  <T extends string > (str:unknown ) : str is t_childType<T> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return compClassnameToChildType<T>(str as T ) === str
    }
}



export  const noneCompClassName :"None"  = "None"
export type t_noneCompClassName = typeof noneCompClassName
export const isNoneCompClassName = (classname : any) : classname is t_noneCompClassName => classname ===  noneCompClassName

export const noneChildType :ReturnType<typeof StrChildType.compClassnameToChildType<t_noneCompClassName>> =  StrChildType.compClassnameToChildType(noneCompClassName) 
export type t_noneChildType = typeof noneChildType
export const isNoneChildType = (childType : any) : childType is t_noneChildType => childType ===  noneChildType


export  const empty_ids :  [] = []; //Array<number>
export type t_empty_ids = typeof empty_ids
type t_isEmptyIds <T extends readonly number []> = T extends t_empty_ids ? true : false 
export const isEmptyIds = <T extends readonly number []>( ids :  T) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return (ids.length == 0) as t_isEmptyIds<T>
}