import { t_matching_pattern_regex_closing, t_pattern_class_regex_closing, t_count_regex, t_begin_ismatching_pattern_regex, t_matching_patternLook_opening, t_maching_patternGroup_regex, t_pattern_class_regex_opening, t_strRegex, t_regex_base_char, ju_escapeRegex } from "./_regexp.js"
import { countArray } from "./m_json.js"
import { IJson } from "./m_object.js"
import { is_notFound, nullOrUndefined, val_null_nullOrUndefined } from "./m_primitives.js"
import { convertStrToRegexStr} from "./m_regex.js"
import { embedCapturingGroupStrOrRegex, embedNonCapturingGroupStrOrRegex, embedOptCapturingGroupStrOrRegex } from "./m_regex_prefixAndSuffix.js"
import { char_join_pathRoutes, createAddressBis, t_agreg_path, t_char_join_pathRoutes } from "./routePath.js"
import { EnumerateUnion, IsUnion, PopUnion, _Enumerate, _countAndRemoveElmInElms, arrArrFromArrAndArr, arrToUnion, countAndRemoveElmInElms, getIndexOfElement, t_getLastElementArr, jsonObjectToArrKey, removeFirstArray, repeat, t_JoinChar_pipe, t_indexable_key, insArray } from "./type.js"




export const embedVar = <T extends string | number | bigint | boolean >(val : T ) => `\$\{${val}\}` as const
export type t_ret_embedVar <T extends string | number | bigint | boolean > = ReturnType<typeof embedVar<T>>

const [openEmbedVar2,closeEmbedVar2] = ['(?:',')?'] as const 
type t_openEmbedVar2 = typeof openEmbedVar2
type t_closeEmbedVar2 = typeof closeEmbedVar2

type _t_ret_embedVar2 <T extends readonly string[] ,S extends string ="" ,acc extends string[]=[] > = 
    T extends readonly [infer A,...infer R] ? 
        A extends string ? R extends readonly string[] ? 
            `${t_openEmbedVar2}${t_char_join_pathRoutes}${A}${_t_ret_embedVar2<R,S,[A,...acc]>}`//TODO ${ReturnType<typeof createAddressBis<A,A>>}
        : never : never
    : `${S}${repeat<t_closeEmbedVar2,acc>}`

type t_join_regexOptGroup < T extends readonly string[]> = 
    T extends readonly [infer A,...infer R] ? 
        A extends string ? R extends readonly string[] ? 
            `${ReturnType<typeof embedOptCapturingGroupStrOrRegex<true,A>>}${t_join_regexOptGroup<R>}`
        : never : never
    : ""

type t_input_ret_embedVar2< T extends string = string> =readonly[...readonly T[],readonly T[]]

type t_repeatGroupParanthesis< Elm extends string , ArrN extends readonly any[] , Str extends string = Elm> = 
     ArrN extends readonly [any,...infer R ] ?  R extends readonly any[] ?
    t_repeatGroupParanthesis<Elm , R , ReturnType<typeof embedCapturingGroupStrOrRegex<true,Str>>> : never: Str

    
type _t_embedVarGroupParanthesis_ <  ArrKey extends readonly string[] , J extends {[k in ArrKey[number] ] :any[]} > =
    ArrKey extends readonly [infer K,...infer R] ?R extends readonly string[]  ? 
         K extends ((keyof  J) & string) ? J[K] extends infer A  ?  A  extends readonly any[] ?
                [t_repeatGroupParanthesis<`${t_char_join_pathRoutes}${K}`,A>//TODO ReturnType<typeof createAddressBis<K,K>>,A>
                    ,..._t_embedVarGroupParanthesis_<R,{[k in R[number]] : J[k]}>]
            : never: never: never
    : never : []
    
    

type _t_embedVarGroupParanthesis<  ArrKey extends readonly string[] , J extends {[k in ArrKey[number] ] :any[]} > =
    _t_embedVarGroupParanthesis_<ArrKey, J> extends infer A ? A extends readonly string[] ? `${ReturnType<typeof embedNonCapturingGroupStrOrRegex<true,t_JoinChar_pipe<A>>>}?` : never: never

type t_embedVarGroupParanthesis< T extends t_getLastElementArr<t_input_ret_embedVar2>> = 
    {[ k in T[number] ] : _countAndRemoveElmInElms<T,k>[1] } extends infer JsonCounter ? 
        JsonCounter extends IJson<T[number],any[]> ? 
            jsonObjectToArrKey<JsonCounter> extends infer A ?  A extends readonly string[] ? 
            _t_embedVarGroupParanthesis<A,JsonCounter> : never 
        : never: never: never

export type t_ret_embedVar2 <T extends t_input_ret_embedVar2  > = 
    T extends readonly [...infer R,infer A ] ? 
        A extends readonly string[] ? R extends readonly string[] ? 
            _t_ret_embedVar2<R,t_embedVarGroupParanthesis<A>>
        : never : never
    :never

//TODO IMP : for now we need to declare same type in order for example ["a","a","b","b","c"] and not ["a","b","b","a","c"] to be valid , if we dont do that thing will be messed up but there isn't any error/warning ( for example type === never)
//+ we need to declare prefix lastly for example ["za","z"] and not ["z","za"] to be valid
type fdsfds = t_ret_embedVar2<readonly ["Page", "PageCatalogue", "CatalogueGrid", "CatalogueList", "CatalogueItem", "CatalogueProductInfo", "CatalogueProductImageLinked", "CatalogueProductImage", readonly ["CatalogueProductImageValue","CatalogueProductImageValue","CatalogueProductImageValuegfd"]]>


export const embedVar_strRegex = <T extends string | number | bigint | boolean >(val : T ) => `\\$\\{${val}\\}` as const
const str_regex_getVar_embedVar = "(\\\\\\$\\\\\\{([\\w\\-\\_]+)\\\\\\})" as const

type t_pattern_base = "ROOT"


type t_valid_helper_ismatching_pattern_regex = "" 

type t_helper_ismatching_pattern_regex < A extends string  , t_atom extends string ,c_context extends t_matching_pattern_regex_closing |t_pattern_class_regex_closing|t_pattern_base = t_pattern_base, t_singop extends string ="*"|"+"|"?"|"|"| t_count_regex > =
    A extends "" ? c_context extends t_pattern_base ? t_valid_helper_ismatching_pattern_regex : never : 
            t_begin_ismatching_pattern_regex<A,t_matching_patternLook_opening> extends infer T ? 
                T extends undefined ? 
                    t_begin_ismatching_pattern_regex<A,t_maching_patternGroup_regex> extends infer T_2 ?
                        T_2 extends undefined ? 
                            t_begin_ismatching_pattern_regex<A,t_pattern_class_regex_opening> extends infer T_3 ? 
                                T_3 extends undefined ?
                                    A extends `${t_atom}${infer R}` ? 
                                        R extends string ? 
                                            R extends `${t_singop}${infer R_2}` ? 
                                                R_2 extends string ? t_helper_ismatching_pattern_regex<R_2,t_atom,c_context,t_singop> : never
                                            : R extends string ? t_helper_ismatching_pattern_regex<R,t_atom,c_context,t_singop> : never
                                        :never
                                    : c_context extends t_pattern_base ? never : 
                                            A extends `${c_context}${infer R}` ? R : 
                                                A extends `${c_context}` ? t_valid_helper_ismatching_pattern_regex : never 
                                : T_3 extends string ?
                                        t_helper_ismatching_pattern_regex<T_3,t_atom,t_pattern_class_regex_closing,t_singop> extends infer R ? 
                                            R extends string ?  t_helper_ismatching_pattern_regex<R,t_atom,c_context,t_singop> : never//undefined 
                                        : never
                                : never
                            :never
                        :T_2 extends string ? 
                                t_helper_ismatching_pattern_regex<T_2,t_atom,t_matching_pattern_regex_closing,t_singop> extends infer R ? 
                                    R extends string ?  t_helper_ismatching_pattern_regex<R,t_atom,c_context,t_singop> : never//undefined 
                                : never
                        : never
                    : never 
                :T extends string ? 
                        t_helper_ismatching_pattern_regex<T,t_atom,t_matching_pattern_regex_closing,t_singop> extends infer R ? 
                            R extends string ? t_helper_ismatching_pattern_regex<R,t_atom,c_context,t_singop>: never//undefined 
                        :never
                : never
            : never


export type t_ismatching_pattern_regex<A extends string  , t_atom extends string ,c_context extends t_matching_pattern_regex_closing |t_pattern_class_regex_closing |t_pattern_base =t_pattern_base, t_singop extends string ="*"|"+"|"?"|"|"| t_count_regex > =
t_helper_ismatching_pattern_regex<A,t_atom  ,c_context ,t_singop > extends never ? false : true 

  

export type t_mapRegexToIdPath< 
UnionIdPath extends string ,
_TKey extends t_strRegex ,
ArrUnionClassNameType extends readonly string[]
> = readonly ([_TKey,readonly UnionIdPath[]])[]
//_t_mapRegexToIdPath<UnionIdPath,t_ismatching_pattern_regex<_TKey,t_ret_embedVar<EnumerateUnion<ArrUnionClassNameType['length']>>> extends true ? _TKey : never >

type t_arrRegexToIdPath<UnionIdPath extends string,unionclassname extends string> = readonly [t_input_ret_embedVar2<unionclassname>,readonly UnionIdPath[]]
export type arrArrRegexToIdPath<UnionIdPath extends string,unionclassname extends string> = readonly t_arrRegexToIdPath<UnionIdPath,unionclassname >[]
//export type _t_mapRegexToIdPath< UnionIdPath extends string ,TKey extends t_strRegex > = readonly ([TKey,readonly UnionIdPath[]])[]
export type t_mapRegexToIdPathFromArrArr<
UnionIdPath extends string ,
ArrUnionClassNameType extends readonly string[],
ArrArr extends arrArrRegexToIdPath<UnionIdPath,unionclassname>,
unionclassname extends arrToUnion<ArrUnionClassNameType> = arrToUnion<ArrUnionClassNameType>
>  = 
ArrArr extends readonly [infer A , ...infer R] ?  
    A extends t_arrRegexToIdPath<UnionIdPath,unionclassname> ? 
        ReturnType<typeof MapRegexToIdPath.convertArrKeyInRegexKey<unionclassname,A[0]>> extends infer A_2 ? 
            R extends arrArrRegexToIdPath<UnionIdPath,unionclassname> ? 
                [[A_2, A[1]],...t_mapRegexToIdPathFromArrArr<UnionIdPath,ArrUnionClassNameType,R,unionclassname>]
            :[[A_2, A[1]]]
        :never
    :never
:[]

//[key in  TKey] : UnionIdPath
type t_str_id = `${number}`


type t_factorizedRegex <T extends string , ArrUnionClassNameType extends readonly string[] ,
unionClassNameType extends arrToUnion<ArrUnionClassNameType>=arrToUnion<ArrUnionClassNameType>,
ArrCharIgnore extends readonly string[] =t_regex_base_char,AccStr extends string = ""
,CharIgnore extends arrToUnion<ArrCharIgnore> = arrToUnion<ArrCharIgnore> >
 =  T extends "" ? AccStr 
    :T extends `${t_ret_embedVar<infer A>}${infer R}` ? 
            A extends unionClassNameType ?
                getIndexOfElement<A,ArrUnionClassNameType> extends infer Idx ? 
                    Idx extends number ? 
                        t_factorizedRegex<R,ArrUnionClassNameType,unionClassNameType,ArrCharIgnore,`${AccStr}${t_ret_embedVar<Idx>}`,CharIgnore> 
                    : never
                : never 
            :never
        :T extends `${CharIgnore}${infer R}` ?
            T extends `${infer A}${R}` ?
                t_factorizedRegex<R,ArrUnionClassNameType,unionClassNameType,ArrCharIgnore,`${AccStr}${A}`,CharIgnore> 
            :never
        : never

//let fdsffds : t_factorizedRegex<`(?:\$\{${"Title"}\})+\$\{Title2\}`,["Title","Title2"]> 


type t_UMapRegexToIdPath< UnionRegex extends t_strRegex , UnionIdPath  extends string ,ArrUnionClassNameType extends readonly string[]> = 
{mapRegexToIdPath : t_mapRegexToIdPath< UnionIdPath,UnionRegex, ArrUnionClassNameType> } |{_mapRegexToIdPath : t_mapRegexToIdPath< UnionIdPath,UnionRegex, ArrUnionClassNameType> } 


type t_mapclassNameToId <ArrUnionClassNameType extends readonly string[]> = Map<arrToUnion<ArrUnionClassNameType>,EnumerateUnion<ArrUnionClassNameType['length']>>
//isRepetitivePatternStr < T extends string , pattern extends string , joinChar extends string ="">

export type t_arrPathToPathId <UnionIdPath extends string,ArrUnionClassNameType extends readonly string[]  , unionClassNameType extends arrToUnion<ArrUnionClassNameType> >  = ({regex_idx:number,group_idx:UnionIdPath[]|unionClassNameType[]}|nullOrUndefined) 
export const str_Pagination = "Pagination" as const
export const pagination_field = [`Next${str_Pagination}`,`Selected${str_Pagination}`] as const
export type t_pagination_field = typeof pagination_field
export type t_union_pagination_field = t_pagination_field[number]

export const date_field = "date" as const
export type t_date_field = typeof date_field

export const item_field = "Item" as const
export type t_item_field = typeof item_field

export const required_field = [...pagination_field,item_field] as const 
export type t_required_field = typeof required_field
export type t_union_required_field = t_required_field[number]

export type t_ArrClassNameType <  ArrClassNameType extends readonly string[]> = insArray<ArrClassNameType,t_required_field > extends true ? ArrClassNameType : never
/*
ArrClassNameType extends readonly [infer A , ...infer R] ? A extends string ? R extends readonly string[] ? 
[Capitalize<Lowercase<A>>,...t_ArrClassNameType<R>] : never : never : []
*/

export class MapRegexToIdPath< UnionRegex extends t_strRegex , UnionIdPath extends string ,ArrUnionClassNameType extends readonly string[]  , unionClassNameType extends arrToUnion<ArrUnionClassNameType> > {
     mapRegexToIdPath : t_mapRegexToIdPath< UnionIdPath,UnionRegex, ArrUnionClassNameType> 
     classNameToId :t_mapclassNameToId <ArrUnionClassNameType>

    constructor( u_classname : {arrClassname : t_mapclassNameToId <ArrUnionClassNameType> }|{_arrClassname : ArrUnionClassNameType} ,
        u_mapRegexToIdPath : t_UMapRegexToIdPath< UnionRegex,UnionIdPath, ArrUnionClassNameType>  ){
       
        if(!(u_classname?.["arrClassname"] || u_classname?.["_arrClassname"])) throw new Error("arrClassname or _arrClassname must be defined")
        if(!(u_mapRegexToIdPath?.["mapRegexToIdPath"] || u_mapRegexToIdPath?.["_mapRegexToIdPath"])) throw new Error("mapRegexToIdPath or _mapRegexToIdPath must be defined")

        this.classNameToId = u_classname?.["arrClassname"] || MapRegexToIdPath.create_arrClassNameToId(u_classname?.["_arrClassname"])
        this.mapRegexToIdPath = u_mapRegexToIdPath?.["mapRegexToIdPath"] ||  /*MapRegexToIdPath.factorizedRegexs<ArrUnionClassNameType,UnionRegex,UnionIdPath>(*/u_mapRegexToIdPath?.["_mapRegexToIdPath"]//,this.classNameToId)
    }

    static create_arrClassNameToId < ArrUnionClassNameType extends readonly string[] >(arrClassname : ArrUnionClassNameType) :t_mapclassNameToId <ArrUnionClassNameType>{
        let arrArrBeforeMap  = arrClassname.map((className,idx) => [className,idx] ) as arrArrFromArrAndArr<ArrUnionClassNameType, number,_Enumerate<ArrUnionClassNameType['length']>>
        return new Map(arrArrBeforeMap)
    }

    static convertArrKeyInRegexKey = < T extends string , Arr extends t_input_ret_embedVar2<T>  >(arr : Arr) : t_ret_embedVar2<Arr> =>{

        const embed = (str:string) => convertStrToRegexStr(char_join_pathRoutes+str) //convertStrToRegexStr(createAddressBis<string,string>(char_join_pathRoutes,str))//convertStrToRegexStr(createAddressBis())+embedVar_strRegex(str)
        let len = arr.length - 1
        let res_regex =arr.slice(0,len).map((e:T)=>'(?:'+embed(e)).join('')
        let json_counter = countArray<T,t_getLastElementArr<Arr>>(arr[len] as t_getLastElementArr<Arr>) 
        res_regex+='(?:'+((arr[len] as T[]).map((e)=>
        {
            let _str = ""
            if( json_counter.hasOwnProperty(e) && json_counter[e] > 0){
                _str = embed(e)
                for(let i =0 ; i < json_counter[e] ; i++) _str = embedCapturingGroupStrOrRegex(_str,true)
                delete json_counter[e] 
               
            }
            return _str

        }).filter((e)=>e).join('|'))
        return  res_regex + ')?'.repeat(len+1) as t_ret_embedVar2<Arr>
    }

    static factorizedRegexs< ArrUnionClassNameType extends readonly string[] , _UnionRegex extends t_strRegex , UnionIdPath extends string  >
    ( _regexJson : {[key in _UnionRegex] : readonly UnionIdPath[] } ,classNameToId :Map<arrToUnion<ArrUnionClassNameType>,EnumerateUnion<ArrUnionClassNameType['length']>> )  {
        let regexJson ={} as IJson 
        const regex_getVar_embedVar = new RegExp(str_regex_getVar_embedVar)

        const _factorizedRegex = (_str_regex : _UnionRegex,idx:number)  : []|[string,string] =>{
            let re = regex_getVar_embedVar.exec(_str_regex)
            if(re == null) return []
            let _str_rest = _str_regex.substring(re.index+re[1].length)
            let found_idx = classNameToId.get(re[2] as any )
            if(is_notFound(found_idx)) throw new Error(`Element :${re[2]} not include in array : ${Object.keys(classNameToId)} \n(in regex num ${idx} ${_str_regex})`)
            let var_str = re[2] as arrToUnion<ArrUnionClassNameType>
            let _str_treated = re[1].replace(var_str, `${found_idx}`)
            return [_str_rest,_str_regex.substring(0,re.index)+_str_treated] 
        }

        const init_strR_strT = ["",""] as const
        let res_strR_strT :[string,string]| [] = ["",""]
        type valid_res = Exclude<typeof res_strR_strT,[]> 
        let [str_rest,str_treated] = res_strR_strT as valid_res

        let idx = 0 

        for(const [str_regex,value] of Object.entries(_regexJson)) {
            str_treated = init_strR_strT[1]
            str_rest=str_regex
            while(str_rest.length > 0){
                res_strR_strT = _factorizedRegex(str_rest as _UnionRegex ,idx )
                if(res_strR_strT.length == 0 ) 
                {
                    let isErr =str_rest.replace(ju_escapeRegex,"")
                    if(isErr.length)throw new Error(`Regex num ${idx} (: ${str_regex}) is not valid (not matching with ${regex_getVar_embedVar.source})`)
                    //@ts-ignore
                    res_strR_strT[0] = isErr ;res_strR_strT[1] = str_rest

                }
                str_rest = (res_strR_strT as valid_res )[0]
                str_treated += (res_strR_strT as valid_res )[1]
            }

            regexJson[str_treated] = value
            idx++

        }

        return regexJson as {[key in t_factorizedRegex<_UnionRegex,ArrUnionClassNameType>]: readonly UnionIdPath[] }
    }



    static arrPathToPathId <  UnionRegex extends t_strRegex ,UnionIdPath extends string  , ArrUnionClassNameType extends readonly string[], unionClassNameType extends arrToUnion<ArrUnionClassNameType> =arrToUnion<ArrUnionClassNameType>   >
    ( _this :MapRegexToIdPath<UnionRegex ,UnionIdPath,ArrUnionClassNameType,unionClassNameType>,str_path : t_agreg_path<unionClassNameType>,str_type:unionClassNameType, idx:number = 0):t_arrPathToPathId<UnionIdPath,ArrUnionClassNameType,unionClassNameType>{

        let regex : RegExp ;
        let found : RegExpExecArray ;
        let arr_id : UnionIdPath[] |unionClassNameType[] = []

        let i = 0;
        
        for (const elem of _this.mapRegexToIdPath.slice(idx)) {
            const [testRegex, value] = elem
            arr_id = []
            regex = new RegExp(testRegex)
            if((found=regex.exec(str_path))) {
                for (let k = 1; k < found.length; k++) {
                    if(found[k] !== undefined && found[0].length == str_path.length ) {
                        (arr_id as UnionIdPath[]).push(value[k-1] )
                    }
                }
                if(arr_id.length == 0 &&found.index === 0 && found[0].length == str_path.length) return {regex_idx:idx+i,group_idx:[str_type]}
            }
            if(arr_id.length > 0 ) {
                //json[i] = [...arr_id]
                return {regex_idx: idx+i,group_idx:arr_id}
            }
            i++
        }
        return val_null_nullOrUndefined
        //return json


    }

}