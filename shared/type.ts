import getCurrentLine from "get-current-line"

export const _notFoundIdx = ():-1 => -1
export type t_notFoundIdx = ReturnType<typeof _notFoundIdx>

export type t_isNullOrUndefined<T > = T extends null | undefined ? true : false

export type nb_topAndBotLimit = [number, number ] 

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type _XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

export type XOR<Args extends readonly any[]> 
= Args extends readonly [infer A, infer B, ...infer C]
? C extends readonly [] ? _XOR<A, B> : XOR<readonly [_XOR<A, B>,...C]>
: never;

export type NOT <T extends boolean > = T extends true ? false : true 

export  type NestedArray<T> = Array<T> | Array<NestedArray<T>>;

export type t_promiseAwaited<T> = Promise<Awaited<T>>// T extends Promise<infer U> ? U : T;


export type IFunctionPromiseType<P extends {[k in t_indexable_key] :any }, R> = {
  params: P
  response: Promise<R>
}

export type t_alphabet = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' |
  'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' |
  'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' |
  'y' | 'z'

export type t_alphabetMaj = Capitalize<t_alphabet>

export type t_char_number = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'| '9'

export type t_alphaNumeriChar = t_alphabet|t_alphabetMaj | t_char_number
export const none_attributeName : "__none__" = "__none__" 
export type t_none_attributeName = typeof none_attributeName 
export type t_isNoneAttributeName <T extends string> = T extends t_none_attributeName ? true : false 
export const isNoneAttributeName =<T extends string>(attr_name : any  ) : attr_name is t_none_attributeName =>{ 
  return (attr_name === none_attributeName) as t_isNoneAttributeName<T>
}
export const arr_attributeName = [none_attributeName,"id","src","alt","href","type","color","aria-label"] as const
type t_arr_attributeName = typeof arr_attributeName

export const arr_url_attributeName = ["src","href"] as const
export type t_arr_url_attributeName = typeof arr_url_attributeName

export type t_union_attributeName = arrToUnion<typeof arr_attributeName>
export type t_union_attributeName_strict = Exclude<t_union_attributeName,t_none_attributeName>

export const arr_attributeName_strict = arr_attributeName.slice(1) as removeFirstArray<t_arr_attributeName>
export type t_arr_attributeName_strict = typeof arr_attributeName_strict
export type t_attributeName_val <isStrict extends boolean = false  >= isStrict extends true ? t_union_attributeName_strict : t_union_attributeName 

export const validateAttributeNameValue = <t_isStrict extends boolean = boolean> (name : t_attributeName_val<t_isStrict> , isStrict?:t_isStrict ) =>{ 
  return isStrict === undefined ||isStrict === false ? arr_attributeName.includes(name)  : arr_attributeName_strict.includes(name as t_attributeName_val<true>)
}

export type FunctionPromiseType<P , R , T extends  IFunctionPromiseType<P, R> = IFunctionPromiseType<P, R>>=
T['params'] extends infer A ?  (( ...args: A extends readonly any[] ? A : jsonObjectToArrValue<A> ) => T['response'] ) :never  

export type t_arr_other_any<Arr extends readonly any[] ,isReadonly extends boolean = true > =isReadonly extends true ? readonly [...Arr,...any[]] : [...Arr,...any[]] 
//TODO : Tuple members must all have names or all not have names 
//work only for non optional ? 
export type t_parentFunction < F extends t_function > =t_function<ReturnType<F>,t_arr_other_any<Parameters<F>>>

//cannot use A must use Arr[0] because infer A ? A extends never => never whatever the following , maybe because "infer never"<=>"infer A"
export type firstNotNever < Arr extends readonly any[]> = 
Arr extends readonly [infer A , ... infer subArr] ? 
Arr[0] extends never ? subArr extends readonly any[] ?  firstNotNever < subArr> : never 
: Arr[0] : never 


export type getElementNumberI<I extends number , Arr extends  readonly [...readonly any[]] > = 
Arr extends readonly [infer A ,... infer subArr]  ? A extends readonly any[] ?subArr extends readonly [...readonly any[]] ? [A[I],...getElementNumberI<I,subArr>] : A[I] : [] : [] ;


export type allSubArray < T extends any[] , Acc extends any[] = []> = T extends [infer U, ...infer V] ? Acc | allSubArray<V, [U,...Acc]> : Acc ;

export type t_maxLengthOfTuplePlusOne = 6 ;

type _arrayOfEachUnion< T > = T extends any[] ? T['length'] extends 0 ? [T] : T[]  : T extends any ? T[] :never

export type arrayOfEachUnion <T > = IsUnion<T> extends true
?  _arrayOfEachUnion<PopUnion<T>> | arrayOfEachUnion<Exclude<T, PopUnion<T>>>
: _arrayOfEachUnion<T>;

export type arraySingleOfEachUnion <T > = IsUnion<T> extends true
?  [PopUnion<T>] | arraySingleOfEachUnion<Exclude<T, PopUnion<T>>>
: [T];

export type arrToSet <T extends readonly any[] , curUnion = never > =
T extends readonly [infer A , ... infer subArr] ?
 A extends curUnion ? arrToSet<subArr,curUnion> : [A,...arrToSet<subArr,curUnion|A>]
: []

export type getIndexOfElement<Elm,Arr extends readonly any[]> = 
  Arr extends readonly [...infer A , infer T]? 
    Elm extends T? A['length']: getIndexOfElement<Elm, A>
  : t_notFoundIdx;

export type _countAndRemoveElmInElms < Elms extends readonly any[] , Elm extends any , Acc extends any[] = []> =
  Elms extends readonly [infer A ,... infer subArr] ?
    subArr extends readonly any[] ?
      A extends Elm ? _countAndRemoveElmInElms < subArr ,Elm,[...Acc,A]>  :

      _countAndRemoveElmInElms < subArr ,Elm,Acc> extends infer Res ? Res extends [readonly any[],any[]] ?
      [[A  , ...Res[0]],Res[1]] :never :never 
    : A extends Elm ? [[],Acc] : [[A],Acc]
  :  [[],Acc]

export type countAndRemoveElmInElms< Elms extends readonly any[] , Elm extends any > = 
_countAndRemoveElmInElms<Elms,Elm> extends infer Res ? Res extends [readonly any[],any[]] ? [Res[0],Res[1]["length"]] :never :never

  export type fillArrayWithElm <Arr extends readonly any[] , Elm extends any , counter extends readonly any[] > =
  counter extends readonly [any , ... infer R ] ? 
    fillArrayWithElm<[...Arr,Elm],Elm,R>
  : Arr

  export type countAndRemoveElementsFromArr < Arr extends readonly any[] , Elms extends readonly any[] , Acc extends number[] = []> =
    Arr extends []? 
      Elms extends [] ? [[],Acc] :fillArrayWithElm<Acc,0,Elms>

    :Elms extends readonly [infer A ,... infer subArr] ?
        subArr extends readonly any[] ?
          countAndRemoveElmInElms<Arr,A> extends infer Res ? Res extends [readonly any[],number] ?
            countAndRemoveElementsFromArr<Res[0],subArr,[...Acc,Res[1]]> :never :never 
        :never 
    : [Arr,Acc]



export type isPositive<N extends number> =number extends N ? N : `${N}` extends `-${string}` ? never : N; //TODO , replace by : `-${number}`

export type _Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc
  : _Enumerate<N, [...Acc, Acc['length']]>



  export type Enumerate<End extends number , Beg extends number =  0 > = 
  _Enumerate<Beg> extends infer BegArr ? BegArr extends readonly number[] ?
  _Enumerate<End,[...BegArr]> extends infer A ? A extends readonly number[] ? A :never :never:never:never

export type EnumerateUnion <End extends number , Beg extends number =  0 > = Enumerate<End,Beg>[number]

export type isRepetitivePatternStr < T extends string , pattern extends string , joinChar extends string =""> = 
  T extends "" ? false : T extends `${pattern}${joinChar}${infer R}` ? 
  isRepetitivePatternStr<R,pattern,joinChar> :
  T extends `${pattern}` ? true : false


export type isRepetitiveUnion <  T extends string, pattern extends string , joinChar extends string ="" > = isRepetitivePatternStr<T,pattern,joinChar> extends true ? true : false 


type IntRange<F extends number, T extends number> = Exclude<EnumerateUnion<T>, EnumerateUnion<F>>

export type isInRange<x extends number ,bot extends number , top extends number > = x extends IntRange<bot, top> ? true : false 

export type isInferior <x extends number ,top extends number > = isInRange<x,0, top> 
export type isInArrayIdx <Idx extends number ,Arr extends readonly any[]> =isInferior<Idx , Arr['length']>

export type getFirstElementArr<Arr extends readonly any[]> = Arr extends readonly [infer T , ... infer _ ] ? T : never
export type t_getLastElementArr<Arr extends readonly any[]> = Arr extends readonly [...infer _ , infer T] ? T : any[] extends Arr ? Arr[number] : never

export type getElemAtIndex<Idx extends number , Arr extends readonly any[]> = 
  isPositive<Idx> extends never ? t_isEndIdx<Idx> extends true ? t_getLastElementArr<Arr> : never : 
  Idx extends t_notFoundIdx ? never  :
  isInArrayIdx<Idx , Arr> extends true ? Arr[Idx] : never


export type promisifyElmsInArr < T extends readonly any[] > = 
T extends readonly [infer A ,... infer subArr] ? subArr extends readonly any[] ? [Promise<A> , ...promisifyElmsInArr<subArr>] : [Promise<A>] : []

// A FAIRE : getIndexOfElement<...> extends notFoundIdx ? false : true 
export type inArray < Elms extends readonly any[] , Elm extends any > =
Elms extends readonly [infer A ,... infer subArr] ?
  subArr extends readonly any[] ?
    A extends Elm ? true : inArray<subArr,Elm>
  : A extends Elm ? true : false
: false


export type insArray < Arr extends readonly any[] , Elms extends  readonly any[] > =
Elms extends readonly [infer E ,... infer R] ?
  R extends readonly any[] ?
  inArray<Arr,E> extends true ? insArray<Arr,R>: false
  :never 
: true 


enum Comparison {
  Greater,
  Equal,
  Lower,
}


type Comparator<A extends number | string, B extends number | string>
  = `${A}` extends `-${infer AbsA}`
    ? `${B}` extends `-${infer AbsB}`
      ? ComparePositives<AbsB, AbsA>
      : Comparison.Lower
    : `${B}` extends `-${number}`
      ? Comparison.Greater
      : ComparePositives<`${A}`, `${B}`>

// Compares two positive long numbers
type ComparePositives<A extends string, B extends string, ByLength = CompareByLength<A, B>>
  = ByLength extends Comparison.Equal
    ? CompareByDigits<A, B>
    : ByLength

// Compares two strings by length
type CompareByLength<A extends string, B extends string>
  = A extends `${infer AF}${infer AR}`
    ? B extends `${infer BF}${infer BR}`
      ? CompareByLength<AR, BR>
      : Comparison.Greater
    : B extends `${infer BF}${infer BR}`
      ? Comparison.Lower
      : Comparison.Equal

// Compares two positive long numbers of the same length
type CompareByDigits<A extends string, B extends string>
  = `${A}|${B}` extends `${infer AF}${infer AR}|${infer BF}${infer BR}`
    ? CompareDigits<AF, BF> extends Comparison.Equal
      ? CompareByDigits<AR, BR>
      : CompareDigits<AF, BF>
    : Comparison.Equal

// Compares two digits
type CompareDigits<A extends string, B extends string>
  = A extends B
    ? Comparison.Equal
    : '0123456789' extends `${string}${A}${string}${B}${string}`
      ? Comparison.Lower
       : Comparison.Greater


type maxOfArr <Arr extends readonly (string|number)[], Cur extends Arr[number] = Arr[0]> =
Arr extends readonly [infer A ,... infer subArr] ? A extends string | number ? subArr extends readonly (string|number)[] ?
Comparator<A,Cur> extends Comparison.Greater ? maxOfArr<subArr,A> : maxOfArr<subArr,Cur> : never : never : Cur 


export type getNotOptionalArr <OptArr extends readonly any[], MaxIdxOfOptArr = maxOfArr<UnionToArray<OptArr['length']> extends infer A ? A extends readonly number[] ? A : never: never > , Acc extends any[] =[]> = 
MaxIdxOfOptArr extends Acc['length'] ? []:
[OptArr[Acc['length']],...getNotOptionalArr<OptArr,MaxIdxOfOptArr,[...Acc, ""]>]




type _getOptionalArr <T extends readonly any[],Acc extends any[] = []> =
T extends readonly [infer A , ... infer R] ? 
R extends readonly any[] ? 
_getOptionalArr<R,[...Acc, arg?:A]> 
: [...Acc, arg?:A]
: Acc

export type getOptionalArr <T extends readonly any[],Acc extends any[] = []> =
getReqAndOptFromArr<T> extends infer A ? 
  A extends readonly [ readonly any[] ,  readonly any[] ]  ? 
    [..._getOptionalArr<A[0]> ,...A[1]] 
  : never
:never 


//export type getOptionalArr <T extends any[]> = (...args:_getOptionalArr<T>)=>any 

export type removeElmInElms < Elms extends readonly any[] , Elm extends any > =
Elms extends readonly [infer A ,... infer subArr] ?
  subArr extends readonly any[] ?
    A extends Elm ? removeElmInElms < subArr ,Elm>  : [A  , ...removeElmInElms < subArr ,Elm>]
  : A extends Elm ? [] : [A]
: []

export type removeElmAtIndex <Arr extends readonly any[], Idx extends number , Acc extends any[] =[]> =
Arr extends readonly [infer A ,... infer subArr] ?
  subArr extends readonly any[] ?
    Idx extends Acc['length'] ? [...Acc,...subArr] : removeElmAtIndex<subArr,Idx,[...Acc,A]>
  : never 
  :[]

export type removeElementsFromArr < T extends readonly any[] , Elms extends  readonly any[] > = 
T extends readonly [infer Elm ,... infer subArr]  ?  
subArr extends readonly any[] ? 
  inArray<Elms,Elm> extends true ? removeElementsFromArr< subArr , removeElmInElms <Elms , Elm >  >: [Elm,...removeElementsFromArr< subArr ,Elms>]
: inArray<Elms,Elm> extends true ? [] : [Elm] 
: [] ;

export type removeElementsFromArrArr < T extends readonly [...readonly any[] ], Elms extends  readonly any[] > = T extends readonly [infer Elm ,... infer subArr]  ?
Elm extends readonly any[] ? subArr extends readonly [...readonly any[]] ?  [removeElementsFromArr <Elm,Elms> , ...removeElementsFromArrArr <subArr,Elms> ] : 
[removeElementsFromArr <Elm,Elms>] : [] :[] ;

export type Args<M extends Fn> = M["args"];

export type Fn<Args = unknown, Return = unknown> = {
    args: Args;
    return: Return;
}

export type Apply<F extends Fn, U extends Args<F>> = (F & { args: U })["return"];

interface FnGetElementNumberI<I extends number > extends Fn {
    return: _fngetElementNumberI<Args<this>,I>
}

type _fngetElementNumberI <T,I extends number > =T extends  readonly [...readonly any[]] ? Readonly<getElementNumberI<I,T>> : never

export type t_functionFn< F extends Fn > = F["args"] extends readonly any[] ? t_function<F["return"],F["args"]> : t_function<F["return"]> 


export type t_function<R = any , P extends readonly any[] = readonly any[]> = (...args:P)=> R
export type t_functionPromise < R = any , P extends readonly any[] = readonly any[]> = t_function<Promise<R>,P>
export type t_functionVoid < P extends readonly any[] = readonly any[]> = t_function<void,P>

export type t_functionSetter < P extends readonly any[] = readonly any[]> = t_functionVoid<P>
export type t_map_get_function <_map > = t_function<_map[keyof _map],[keyof _map]>


export type t_this_get_function < _this , PropName extends keyof _this > = t_function<_this[PropName],[]>
export type t_this_set_function < _this , PropName extends keyof _this > = t_function<void,[_this[PropName]]>


export type t_function_removeReqOpParam < F extends t_function , StartEndReq extends readonly number[] =[0,0] , StartEndOp extends readonly number[] = [0,0]> =
(StartEndReq extends [0,0] ? StartEndOp extends [0,0] ? true : false :false ) extends true ?  F :

(StartEndReq extends [number] ? [StartEndReq[0],0] : StartEndReq) extends infer StartEndReq ? StartEndReq extends readonly number[] ?
(StartEndOp extends [number] ? [StartEndOp[0],0] : StartEndOp) extends infer StartEndOp ? StartEndOp extends readonly number[] ?

Parameters<F> extends infer P ? P extends readonly any[] ?
getReqAndOptFromArr<P> extends infer ReqOpt ? ReqOpt extends readonly [readonly any[],readonly any[]] ?
getSubArray<ReqOpt[0],StartEndReq[0],StartEndReq[1]> extends infer Req ? Req extends readonly any[] ?
getNotOptionalArr<ReqOpt[1]> extends infer _notOpt ? _notOpt extends readonly any[] ?
getSubArray<_notOpt,StartEndOp[0],StartEndOp[1]> extends infer notOpt ? notOpt extends readonly any[] ?(...args:[...Req, ...getOptionalArr<notOpt>])=>ReturnType<F> :never :never :never :never :never :never :never :never:never:never:never:never:never:never

export type t_function_staticToMember < F extends t_function> = 
getReqAndOptFromArr<Parameters<F>> extends infer ReqOpt ? ReqOpt extends readonly [readonly any[],readonly any[]] ?
(ReqOpt[0] extends [] ? 
    (getNotOptionalArr<ReqOpt[1]> extends infer A ? A extends  readonly any[] ? getOptionalArr<removeFirstArray<A>> :never :never) 
: removeFirstArray<ReqOpt[0]>) extends infer Params ? 
    Params extends readonly any[] ? (...args:Params)=> ReturnType<F>  :never 
 :never 
:never :never 



export type ApplyGetElementNumberIArrArr<ArrArr extends readonly [...readonly any[]], I extends number > = 
ArrArr extends readonly [readonly any[],... infer R] ? R extends readonly any[] ? [Apply<FnGetElementNumberI<I>, ArrArr[0]> , ...ApplyGetElementNumberIArrArr<R,I>] : 
[Apply<FnGetElementNumberI<I>, ArrArr[0]>] : []

/*
type OptionalPropertyOf<T extends any[]> ={
    [K in keyof T]: T extends Record<K, T[K]>
      ? T[K]|undefined
      : T[K]
} */

//TODO : wtf is this maybe ? {[key in A[0] ]: any} & jsonType <R>  
export type jsonType < A extends readonly t_indexable_key[] > = {[key in A[0] ]: A extends readonly [infer _ ,...infer R] ? R extends readonly string[] ? jsonType <R> : any :any } 

export type findInJson <arr_keys extends readonly t_indexable_key[] , _json extends jsonType<arr_keys> , propName extends arr_keys[number] 
, propValue extends any , toSearch extends arr_keys[0] =arr_keys[0], cur_key = IsUnion<toSearch> extends true ?PopUnion<toSearch> : toSearch > =
cur_key extends keyof  _json ? _json[cur_key][propName] extends propValue ? _json[cur_key] : findInJson < arr_keys ,_json , propName , propValue , Exclude<toSearch,PopUnion<toSearch>>> : never

export type upsertInSimpleJson <_json extends {readonly [k in t_indexable_key]:any} , propName extends t_indexable_key , replaceValue extends any > =
{[key in keyof _json]: key extends propName ? replaceValue : _json[key]}


interface FnArrToUnion extends Fn {
  return: Args<this> extends readonly any[] ? arrToUnion<Args<this>> : never 
}

type _replaceOptional < TF extends t_function  > = 
TF extends  ((a:infer A,..._args: infer RP) => any ) ? 
(RP extends [] ? RP:_replaceOptional<t_function<any,RP>>) extends infer Res ? Res extends any[]?[A,...Res] :[]:[]
:[] 

export type replaceOptional < TF extends t_function  > = TF extends t_function< infer R > ? _replaceOptional<TF> extends infer AR ? AR extends any[] ? t_function<R,AR> : never: never  : never 

type _removeOptional < P extends readonly any [] =[] > =
P extends [] ? []:
P extends readonly [infer A ,...infer RP ] ?(RP extends [] ? [A] :[A,..._removeOptional<RP>])
:[]

export type removeOptional < TF extends t_function  > = 
_removeOptional<Parameters<TF>> extends infer AR ? AR extends readonly any[] ? t_function<ReturnType<TF>,AR> : never: never   


export type getReqAndOptFromArr<P extends readonly any[] , Req extends readonly any[] =[] > =
P extends  readonly [any,...infer R] ? getReqAndOptFromArr<R,[...Req,P[0]]> : [Req,P]
export type getReqAndOptFromFct <F extends t_function> =  getReqAndOptFromArr<Parameters<F>>

export type repeat < T extends string , Acc extends readonly string[]> = 
   Acc extends readonly [infer A ,... infer R] ? 
    R extends readonly string[] ? 
      `${T}${repeat<T,R>}` 
    : "" : ""


export type t_arrSameLength < Arr1 extends readonly any[] , Arr2 extends readonly any[]> = Arr1['length'] extends Arr2['length'] ? true : false
export type _constraintSameLengthArr < T extends any , N extends number ,Acc extends readonly T[] = readonly [] > =N extends Acc["length"] ? Acc : _constraintSameLengthArr<T,N,readonly  [T,...Acc]>
export type constraintSameLengthArr < Arr1 extends readonly any[] , T extends any = any > = _constraintSameLengthArr<T , Arr1['length']>



export type ApplyToArrArrUnion<ArrArr extends readonly [...readonly any[]]> = 
ArrArr extends readonly [readonly any[],... infer R] ? R extends readonly any[] ? [Apply<FnArrToUnion, ArrArr[0]> , ...ApplyToArrArrUnion<R>] : 
[Apply<FnArrToUnion, ArrArr[0]>] : []

export type addReadonlyArr<T> = {readonly [key in keyof T]: T[key]}
export type removeReadonlyArr<TArr >  = {-readonly [K in keyof TArr ]: TArr[K]}

export type addReadonlyArrArr< TArrArr extends any[] > = TArrArr extends [ TArrArr[0] ,... infer R] ? [addReadonlyArr<TArrArr[0]> ,...addReadonlyArrArr<R>] :[]
export type removeReadonlyArrArr<TArrArr extends any[] > = TArrArr extends [ TArrArr[0] ,... infer R] ? [removeReadonlyArr<TArrArr[0]> ,...removeReadonlyArrArr<R>] :[]

export type t_empty1DArray = []
export type t_empty2DArray = [t_empty1DArray]
export type t_emptyNDArray = t_empty1DArray | NestedArray<t_empty1DArray>


export type arrAdd < T extends readonly any[] , Add extends any  > = T extends  readonly [any,... infer R] ? [T[0],...arrAdd<R,Add>] :[] 

//TODO :
  type _arrToUnion_ <T extends readonly any[] > = T extends  readonly [any,... infer R] ? R extends readonly any[] ? T[0] | _arrToUnion_ <R> : never : T extends readonly string[] ? T[number] : never
  export type arrToUnion <T extends readonly any[]> =  T extends undefined ? never : 
  T extends  readonly [any,... infer R] ? R extends readonly any[] ? T[0] | arrToUnion <R> : never : 
  T[number] extends infer A ? A extends string ?  A  : never : never

export type arrToUnion_add <T extends readonly any[] , Add extends any  > = arrAdd <arrToUnion < T > , Add>

export type arrArrAdd < T extends readonly (readonly any[]) [] , Add extends readonly any[] =[] > = T extends  readonly [readonly any[],... infer R] ? R extends readonly any[] ? [[...Add,...T[0]],...arrArrAdd<R,Add>] :[] :[]
export type arrArrToUnion <T extends readonly (readonly any[]) [] > = T extends  readonly [readonly any[],... infer R] ? R extends readonly any[] ? [...T[0]] | arrArrToUnion <R> : never : never
export type arrArrToUnion_add <T extends readonly (readonly any[]) [] , Add extends readonly any[] =[] > = arrArrAdd <arrArrToUnion < T > , Add>

export type arrTypeOfUnion< U extends any , T = IsUnion<U> extends true ?PopUnion<U> : U  > = 
 U extends never ? U : arrTypeOfUnion<Exclude<U,T>> | (T extends t_emptyNDArray ? T : T extends readonly any[] ? deepArrToUnion <T> : T )

export type deepArrToUnion < T extends readonly any[]> = arrTypeOfUnion<arrToUnion<T> >


// convert a union to an intersection: X | Y | Z ==> X & Y & Z
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never;
  
  // credits goes to https://github.com/microsoft/TypeScript/issues/13298#issuecomment-468114901
  // convert a union to an overloaded function X | Y ==> ((x: X)=>void) & ((y:Y)=>void)
  export type UnionToOvlds<U> = UnionToIntersection<
    U extends any ? (f: U) => void : never
  >;
  
  // takes last from union
  export type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never;
  
  // credits goes to https://stackoverflow.com/questions/53953814/typescript-check-if-a-type-is-a-union#comment-94748994
  export type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;
  
export type UnionToArray<T, Accumulator extends unknown[] = []> = IsUnion<T> extends true
    ? UnionToArray<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...Accumulator]>
    : [T, ...Accumulator];


type json_Explode<T> = keyof T extends infer K? 
  K extends unknown? 
    { [I in keyof T]: I extends K ? T[I] : never }
  : never
: never; 

export type json_AtMostOne<T> = json_Explode<Partial<T>>;
export type json_AtLeastOne<T, U = {[K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U]
export type json_ExactlyOne<T> = json_AtMostOne<T> & json_AtLeastOne<T>

export type param_jsonAsForEach< T extends {[k in t_indexable_key] : any } , K extends keyof T = keyof T > = 
IsUnion<K> extends true ? 
  PopUnion<K> extends infer _K ?  
    _K extends keyof T ?
          [{[_k in _K ] : T[_k]},...param_jsonAsForEach<{[_k in Exclude<K,_K>]:T[_k]}> ]
        :never 
  :never
:[{[_k in K]: T[_k]}]

    
export type jsonObjectToArrKey < T > = T extends readonly any[] ?  UnionToArray<Exclude<keyof T , keyof any[]>> : UnionToArray<keyof T>

//TODO remove : 
export type _jsonObjectToArrValue_bis < T , arrKey extends Array<any> > = arrKey extends [] ? [] : [T[arrKey[0]] , ..._jsonObjectToArrValue<T, arrKey extends [any,... infer R] ? R : []>]
export type jsonObjectToArrValue_bis < T > = T extends {[key in keyof T]: any} ? _jsonObjectToArrValue_bis<T , jsonObjectToArrKey<T>> : never


export type getArrValuesFromArrKeys < Obj  extends  {[k in t_indexable_key] : any} , Arr extends readonly t_indexable_key[], Acc extends readonly any[] = []> = 
Arr extends readonly [infer cur_K,... infer R] ?
  cur_K extends keyof Obj ? R extends readonly t_indexable_key[] ? 
  getArrValuesFromArrKeys<Obj,R,[Obj[cur_K],...Acc]> 
    : never 
  : never
:Acc

export type getArrValuesOptionalKeys < Obj extends {[k in t_indexable_key] : any}>= UnionToArray<OptionalKeys<Obj>> extends infer arrKeys ? 
arrKeys extends [never] ? [] : arrKeys extends readonly t_indexable_key[] ? getArrValuesFromArrKeys<Obj,arrKeys>:never :never

export type getArrValuesNonOptionalKeys < Obj extends {[k in t_indexable_key] : any}>= 
UnionToArray<RequiredKeys<Obj>> extends infer arrKeys?
arrKeys extends [never] ? [] : arrKeys extends readonly t_indexable_key[] ?  getArrValuesFromArrKeys<Obj,arrKeys> :never:never

export type getArrValuesFromObject < Obj extends {[k in t_indexable_key] : any} > =
getArrValuesOptionalKeys<Obj> extends infer A ? getArrValuesNonOptionalKeys<Obj> extends infer B ? 
A extends readonly any[] ? B extends readonly any[] ? [...B,...getOptionalArr<A>] 
:getOptionalArr<A> :B extends readonly any[] ? B : never :never :never


export type _jsonObjectToArrValue < T , arrKey extends readonly any[] > =
arrKey extends readonly [infer cur_K,... infer R] ? 
  cur_K extends keyof T ? 
  [T[cur_K], ..._jsonObjectToArrValue<T,R>] 
  : never 
: arrKey extends [] ? [] : never 


export type jsonObjectToArrValue < T , _arrKey extends readonly (keyof T)[] = [] > = 
(_arrKey extends [] ? jsonObjectToArrKey<T>  : _arrKey) extends infer arrKey ? arrKey extends readonly any[] ?
T extends {[key in keyof T]: any} ? _jsonObjectToArrValue<T , arrKey> : never: never : never


export type joinCharKeyJson < Key extends string , joinChar extends string =t_join_underscore , Obj extends {[k in string]:any} ={[k in string]:string}, ArrKeyObj extends readonly string[] = jsonObjectToArrKey<Obj> > = 
    ArrKeyObj extends readonly [infer AKey,...infer Rest] ?
        AKey extends string ? Rest extends readonly string[] ?
            {[k in t_JoinChar<[Key,AKey],joinChar>] : Obj[AKey]} & joinCharKeyJson<Key,joinChar,Obj,Rest> 
        :never : never 
    :{}

//TODO : check if optional member work with current function using IJson ect as we did with optional parameters/tuple/arr
//type fdsfvcxv = [a:string,b?:number][jsonObjectToArrKey<[a:string,b?:number]>[number]]
export type _jsonObjectToArr < T , arrKey extends Array<any> > = arrKey extends [] ? [] : [...(arrKey[0] extends keyof T ? [[arrKey[0],T[arrKey[0]]]] :[]) , ..._jsonObjectToArr<T, arrKey extends [any,... infer R] ? R : []>]
export type jsonObjectToArr< T , arrKey extends Array<any> = jsonObjectToArrKey<T> > = T extends {[key in keyof T]: any} ? Exclude<_jsonObjectToArr<T , arrKey>,[]> : never

//get element in B that is at the same index of element T in A 
export type getPairedElement< TA , A extends readonly any[] , B extends readonly any[]  > = {[key in  Exclude<keyof A , keyof any[]>  as A[key] extends TA ? key : never ]:key extends keyof B ? B[key] :never }
export type _getPairedElement< TA , A extends readonly any[] , B extends readonly any[]  > = 
{[key in  Exclude<keyof A , keyof any[]>  as A[key] extends TA ? key : TA extends A[key] ? key : never ]:key extends keyof B ? B[key] :never }


export type getPairedElementValue< TA  , A extends readonly any[] , B extends readonly any[] , _ = jsonObjectToArrValue_bis < getPairedElement< TA ,A , B   >>  > = _ extends any[] ? _ extends []? never : _[0] : never
export type _getPairedElementValue< TA  , A extends readonly any[] , B extends readonly any[] , _ = jsonObjectToArrValue_bis < _getPairedElement< TA ,A , B   >>  > = _ extends any[] ? _ extends []? never : _[number] : never

//TA1 is in the same place in A than TA2 in A 
export type pairedElement_isSameIndex<TA1_B , B extends readonly any[] , TA2_C , C extends readonly any [] , A extends readonly any[] >  = keyof getPairedElement<TA1_B,B,A>  extends keyof getPairedElement<TA2_C,C,A> ? true :false
//TA1_B extends valuesOf B (?union valuesOf B) 
export type pairedElement_ret_SecondElement_if_isSameIndex < TA1_B , B extends readonly any[] , SecondElement, C extends readonly any [] , A extends readonly any[]  > = pairedElement_isSameIndex<TA1_B,B,SecondElement,C,A> extends true ? SecondElement : never

export type propsNotInObj < T , Obj > = {[k in keyof T as k extends keyof Obj ? never : k]:T[k]} 

export type ifNeverRetValueType < T , G > = T extends never ? G : T
export type ifNotExtendsRetValueType < T1 , T2 , G> = T1 extends T2 ? T1 : G


export type toReadonly <T> = Readonly<T> ;

export type t_JoinChar< T extends readonly string[],JoinChar extends string > =  
T extends [] ?"":
T extends readonly [infer A , ...infer R ] ? A extends string ? 
  R extends readonly string[] ? R extends readonly [] ? A  : `${A}${JoinChar}${t_JoinChar<R,JoinChar>}`: "" 
: "" : never 

type _Substring<
  S extends string,
  St extends number ,
  End extends number ,
  Acc extends  readonly string[] 
> = St extends endIdx ? End extends Acc['length'] ? Acc :
    S extends "" ? End extends endIdx ? Acc : End extends Acc['length'] ? Acc :never :
      S extends `${infer A }${infer R}` ? _Substring<R,St,End,[...Acc,A]>: never 
    : S extends `${string}${infer R}` ? 
      ["",...Acc] extends infer Acc?
        Acc extends string[]?
          St extends Acc['length'] ? _Substring<R,endIdx,End,[]> : _Substring<R,St,End,Acc> 
        :never
      :never
    :never

export type Substring <S extends string,
  St extends number ,End extends number = endIdx ,
  Acc extends  readonly string[] = []> = t_JoinChar<_Substring<S ,St extends 0 ? endIdx : St ,End , Acc>,"">


export type removePrefix <Prefix extends string ,T extends string > = T extends `${Prefix}${infer R}` ? R : T
export type addSuffix <T extends string,Suffix extends string  > = T|`${T}${Suffix}`


export const char_join_underscore = "_";
export type t_join_underscore = typeof char_join_underscore
export type t_JoinChar_underscore < T extends readonly string[] > = t_JoinChar<T,t_join_underscore>


export type arr_loweriseFirstChar < T extends readonly string[] > =
T extends readonly [infer A ,... infer R] ?
   A extends string ? R extends readonly string[] ? [Lowercase<A>,...arr_loweriseFirstChar<R>] : [Lowercase<A>] : never 
: []

export type t_JoinChar_underscore_lowercase < T extends readonly string[] > = t_JoinChar<arr_loweriseFirstChar<T>,t_join_underscore>



export const char_join_hyphen = "-";
export type t_join_hyphen = typeof char_join_hyphen
export type t_JoinChar_hyphen < T extends readonly string[] > = t_JoinChar<T,t_join_hyphen>




export const char_join_pipe = "|";
export type t_join_pipe = typeof char_join_pipe

export type t_JoinChar_pipe < T extends readonly string[] > = t_JoinChar<T,t_join_pipe>




type _t_joinCapitalize< Arr extends readonly string[]> = Arr extends readonly [infer A ,... infer B] ? 
A extends string ? 
        B extends readonly string[]? `${Capitalize<A>}${_t_joinCapitalize<B>}`:`${Capitalize<A>}`
: never
: ""

export  type t_joinCapitalize< Arr extends readonly string[]> = Arr extends readonly [infer A ,... infer B] ? 
A extends string ? 
      B extends readonly string[]? `${A}${_t_joinCapitalize<B>}` : never 
: never
: ""


export type t_joinUnderscore_to_joinMaj<T extends string> = t_joinChar_to_joinMaj<T,t_join_underscore>



//A FAIRE generalize with applyToArr

export  type t_joinHyphen_to_joinMaj<T extends string> = T extends `${infer A}${t_join_hyphen}${infer B}` ? t_joinChar_to_joinMaj<T,t_join_hyphen> : Capitalize<T>
export type t_joinChar_to_joinMaj <T extends string , joinChar extends string> = T extends `${infer A}${joinChar}${infer B}` ? t_joinCapitalize<[A, ...t_joinChar_to_joinMaj<B,joinChar>]> :[T] 

type isStrNumber <T extends string> = T extends `${number}` ? true : false
export type isCharNumber <T extends string> = T extends `${t_char_number}` ? true : false

export type majCuttingRetArr<T extends string , Buff extends string =""> =
  T extends `${infer A}${infer Rest}` ?
    A extends t_alphabetMaj ? 
      Buff extends "" ? 
        majCuttingRetArr<Rest,`${Lowercase<A>}`> 
        : isStrNumber<A> extends true ? 
          isStrNumber<Buff> extends true ? majCuttingRetArr<Rest,`${Buff}${A}`> : [Buff,...majCuttingRetArr<Rest,`${Lowercase<A>}`>] 
          :[Buff,...majCuttingRetArr<Rest,`${Lowercase<A>}`>]
  : majCuttingRetArr<Rest,`${Buff}${A}`>
  :[Buff]


export type t_joinMaj_to_joinChar <T extends string , joinChar extends string> =
T extends `${infer A}${infer Rest}` ?t_JoinChar<majCuttingRetArr<T>,joinChar>: ""

export type t_joinMaj_to_joinHyphen <T extends string > = t_joinMaj_to_joinChar<T,t_join_hyphen> 


export type t_strEnum = string
export type t_enum = {[key in t_strEnum]:t_strEnum}


export type t_booleanFunction <T extends readonly any[] =any[],_b extends boolean = boolean > = t_function<_b,T>

export type NoArgsConstructor<T> = new () => T;



export type t_indexable_key = (string | number | symbol) 

export type mapFromArrAndArr < Arr1 extends readonly t_indexable_key[]  ,  Arr2 extends readonly T[], T= any  > =
Arr1 extends readonly [infer A ,... infer R] ? A extends t_indexable_key ? R extends readonly t_indexable_key[] ? 
Arr2 extends readonly [infer B ,... infer R2] ? B extends T ? R2 extends readonly T[] ?
 {[k in A]:B} & mapFromArrAndArr <R,R2,T> : never : never : never : never : never :
 Arr2 extends readonly [infer B ,... infer R2] ? B extends T ? never : {} : 
 Arr2 extends readonly [infer B ,... infer R2] ? never : {} 


export type arrArrFromArrAndArr < Arr1 extends readonly t_indexable_key[] , T ,  Arr2 extends readonly T[] > =
Arr1 extends readonly [infer A ,... infer R] ? A extends t_indexable_key ? R extends readonly t_indexable_key[] ? 
Arr2 extends readonly [infer B ,... infer R2] ? B extends T ? R2 extends readonly T[] ?
readonly [[A,B],...arrArrFromArrAndArr <R,T,R2>] : never : never : never : never : never :
Arr2 extends readonly [infer B ,... infer R2] ? B extends T ? never : readonly [] : 
Arr2 extends readonly [infer B ,... infer R2] ? never : readonly []


export type jsonFromArrArr < UKey extends t_indexable_key , ArrArr extends readonly (readonly [ UKey , UVal]) [] , UVal = any , AccMap extends {[k in UKey] : UVal}|{} = {}> =
ArrArr extends readonly [infer A ,... infer R] ? R extends readonly (readonly [ UKey , any]) [] ? A extends readonly [infer K ,infer V] ? 
  K extends UKey ? V extends UVal ?  jsonFromArrArr<UKey,R,UVal,AccMap & {[k in K]:V}> : never  : never
: never : never :  AccMap 

export type getIntersectJson<TJson , _T extends  TJson > = {[k in (keyof _T & keyof TJson)]:_T[k]} extends infer T ? T:never 
export type t_concatJson <TJsons extends readonly any[] > = TJsons extends readonly [infer A ,... infer R ]? A & t_concatJson<R> : {}
export type getIntersectJsons<TJsons extends readonly any[] , _T  > = {[k in (keyof _T & keyof t_concatJson<TJsons>)]:_T[k]} extends infer T ? T:never 



export type getArrIdxAscOfArrElements < ArrElm extends readonly any[] , Arr extends readonly any[] > =
 ArrElm extends readonly [ ... infer R1 ,infer A1  ] ? Arr extends readonly [ ... infer R2 ,infer A2  ] ?
A1 extends A2 ? [...getArrIdxAscOfArrElements<R1,R2>,R2['length'] ] : getArrIdxAscOfArrElements<ArrElm,R2> : [never] : []


export type endIdx = -1
export const getEndIdx = () :endIdx  => -1
export type t_isEndIdx <T extends number> = T extends endIdx ? true : false
export const isEndIdx = <T extends number>(idx:T)  => ((idx === getEndIdx()) as t_isEndIdx<T>)

export type _getAscSubArray < Arr extends readonly any[] , StartIdx extends number , EndIdx extends number , ArrRes extends readonly any[]= []> =
Arr extends readonly [... infer R , infer _ ] ? isInferior<EndIdx,Arr['length'] > extends true ? _getAscSubArray<R , StartIdx , EndIdx  > :
isInferior<StartIdx , R['length']  > extends true ? _getAscSubArray<R , StartIdx , EndIdx , [_,...ArrRes] > : StartIdx extends R['length']  ? [_,...ArrRes]  : ArrRes : ArrRes

  
export type isEqual <A , B> = A extends B ? B extends A ? true : false : false

export type getAscSubArray < Arr extends readonly any[] , StartIdx extends number , EndIdx extends number = endIdx , EndIdxIsInArray extends boolean = boolArrUnion <[isEqual <EndIdx ,endIdx>, isEqual<EndIdx ,Arr['length']>]> extends true ? true :  isInArrayIdx<EndIdx , Arr>  > =
StartIdx extends Arr['length'] ? [] :isInArrayIdx<StartIdx , Arr> extends true ?EndIdxIsInArray extends true ? _getAscSubArray< Arr , StartIdx , isEqual <EndIdx ,endIdx> extends true ? Arr['length'] :  EndIdx > :  never :never

export type removeFirstArray < Arr extends readonly any[]>  = getAscSubArray<Arr,1> 


export type getDescSubArray < Arr extends readonly any[] ,NegEndIdx extends number, ArrRes extends readonly any[]= []> =
Arr extends readonly [... infer R , infer _ ] ? 
  isEqual<NegEndIdx,ArrRes['length'] > extends false ? getDescSubArray<R , NegEndIdx , [...ArrRes,""]  > : Arr:
[]

export type removeLastArray < Arr extends readonly any[]>  = getDescSubArray<Arr,1> 


export type getSubArray < Arr extends readonly any[] , StartIdx extends number , EndIdx extends number = 0 > =
EndIdx extends 0 ? StartIdx extends 0 ? Arr : getAscSubArray<Arr,StartIdx>:
StartIdx extends 0 ? getDescSubArray<Arr,EndIdx> : getDescSubArray<getAscSubArray<Arr,StartIdx>,EndIdx>


export type _boolArrIntersec < arr_bool extends readonly boolean[] > =  arr_bool extends readonly [infer A , ... infer R] ?  A extends false ? false : R extends readonly boolean[] ?  boolArrIntersec<R> : A : true
export type _boolArrUnion < arr_bool extends readonly boolean[] > =  arr_bool extends readonly [infer A , ... infer R] ?  A extends true ? true : R extends readonly boolean[] ?  boolArrUnion<R> : A : false

export type boolArrUnion < arr_bool extends readonly boolean[] > = arr_bool extends t_empty1DArray ? true : _boolArrUnion<arr_bool>
export type boolArrIntersec < arr_bool extends readonly boolean[] > = arr_bool extends t_empty1DArray ? true : _boolArrIntersec<arr_bool>


export type joinArr < Arr1 extends readonly any[] , Arr2 extends readonly any[]  > = [...Arr1,...Arr2]


export type t_Args < V , Idx extends number > = [V,Idx]//{value:V , idx:Idx}
export type getValueFromArgs < Args extends t_Args<any,any> > = Args[0]//Args['value']
export type getIdxFromArgs < Args extends t_Args<any,any> > = Args[1] //['idx']


export type ApplyFnToArr <funct extends Fn , Arr extends readonly any[] , Acc extends any[]= []  > = 
Arr extends readonly [infer _ ,... infer R] ? R extends readonly any[] ? [Apply<funct, t_Args<Arr[0],Acc['length']> > , ...ApplyFnToArr<funct,R,[never , ...Acc]>] :[Apply<funct, t_Args<Arr[0],Acc['length']>>]:[]



export type filterNotElmArr <  Arr extends readonly any[] ,US ,  Acc extends any[]= []> =
Arr extends readonly [infer A , ... infer R] ? 
  A extends US ? filterNotElmArr<R,Acc> : filterNotElmArr<R,[...Acc,A]>
: Acc

export type filterNotNullOrUndefinedArr <Arr extends readonly any[]> =filterNotElmArr< Arr ,null|undefined >


export type getPropFromArrOfObject < Arr extends readonly  {[k in t_indexable_key]:any}[] , propName extends t_indexable_key  , df_value = undefined > =
Arr extends readonly [infer A , ... infer R] ? A extends {[k in t_indexable_key]:any} ? R extends readonly  {[k in t_indexable_key]:any}[] ? 

(A extends {[k in propName] : any} ?  A[propName] :df_value ) extends infer V ? 
V extends undefined ? getPropFromArrOfObject<R,propName> : [V,...getPropFromArrOfObject<R,propName,df_value>]
: never
: never : never : []


interface IdentityFn extends Fn {
  return: Args<this> extends t_Args<any,any> ?   getValueFromArgs<Args<this>> :never 
}

export type _applyFunctAtIndexes < Idxs extends readonly number[] , Arr extends  readonly any[] ,funct extends Fn = IdentityFn ,Acc extends readonly any[] = []> =
Idxs extends [infer _ , ... infer RIdx ] ? Arr[Acc['length']] extends infer Elm ? 
Idxs[0] extends Acc['length'] ? RIdx extends readonly number[] ?  _applyFunctAtIndexes < RIdx , Arr ,funct,[...Acc,Apply<funct,t_Args<Elm,Acc['length']>>]> :[...Acc,Apply<funct,t_Args<Elm,Acc['length']>>] : _applyFunctAtIndexes < Idxs , Arr ,funct,[...Acc,Elm]> 
: Acc :Acc 


 export interface FnIsInArrayIdx < Arr extends readonly any[]> extends Fn {
  return: Args<this> extends t_Args<any,any> ?  getValueFromArgs<Args<this>> extends infer N ? N extends  number ? isInArrayIdx<N,Arr>  : false : false : false 
}


export type _replace < Idxs extends readonly number[] , Arr extends  readonly any[] ,  Result  > = 
boolArrIntersec <ApplyFnToArr<FnIsInArrayIdx<Arr>,Idxs>> extends true ? Result extends infer ArrRes ? 
ArrRes extends readonly any[] ? isInferior<ArrRes["length"] , Arr["length"]> extends true ? 
getAscSubArray<Arr,ArrRes["length"]> extends infer Rest ? Rest extends readonly any[]? 
joinArr<ArrRes,Rest> : ArrRes : ArrRes : ArrRes : never: never : never 

export type applyFunctAtIndexes < Idxs extends readonly number[] , Arr extends  readonly any[] , funct extends Fn = IdentityFn> =
boolArrIntersec <ApplyFnToArr<FnIsInArrayIdx<Arr>,Idxs>> extends true ? 
_applyFunctAtIndexes < Idxs , Arr , funct  > extends infer resReplace ? _replace < Idxs , Arr , resReplace > : never : never 


export type _alternateElementFromArrAndArr <Arr1 extends readonly any[] , Arr2 extends readonly any[]> = 
Arr1 extends readonly [infer _1 , ...infer R1] ? Arr2 extends readonly [infer _2,...infer R2] ? [Arr1[0],Arr2[0] ,..._alternateElementFromArrAndArr<R1,R2>] : [] : [] 


export type alternateElementFromArrAndArr <Arr1 extends readonly any[] , Arr2 extends readonly any[]> =
Arr1["length"] extends Arr2["length"] ? _alternateElementFromArrAndArr <Arr1 ,Arr2> : never 


export interface FnCreateRecordFromArrAndArr<I extends readonly any[] > extends Fn {
  return: Args<this> extends t_Args<any,any> ?   getValueFromArgs<Args<this>> extends infer Arr ? Arr extends readonly any[] ? createRecordFromArrAndArr<I , Arr> :{} :{}:{}
}

export type EmptyObject = {
  [K in any] : never
}
export type createRecordFromArrAndArr < K extends readonly string[] , V extends readonly any[] > =
K[0] extends string ? 
    V extends readonly [infer _1 , ...infer RV] ? 
        K extends readonly [infer _2 , ...infer RK] ? 
          RK extends string[] ? 
            RV extends any[] ? { [ k in K[0] ] : V[0] } &  createRecordFromArrAndArr < RK , RV > : {} 
          : {} 
        : {} 
    :{[ k in K[0] ] : V[0] } 
  :{} 


export type stringToArray<
  S extends string,
  Acc extends string[] = []
> = S extends `${infer B}${infer R}`
  ? stringToArray<R, [...Acc, B]> : Acc;

export type stringLengthInferiorTo<S extends string , N extends number> = isInArrayIdx<N, stringToArray<S>>;



export type t_strApplyFnIfExtends <T extends string , US extends string , _Fn extends Fn<[string],string>> = 
T extends `${infer _R}${US}${infer R}` ? 
  T extends `${_R}${infer A}${R}` ?
    Apply<_Fn,[A]>  extends infer A? 
  A extends string ? `${_R}${A}${t_strApplyFnIfExtends<R,US,_Fn>}`:A
  :never :never  
:T
interface FnStrReplace<S extends string> extends Fn<[string],string> {
  return: _fnStrReplace<Args<this>,S>
}
type _fnStrReplace < Args extends [string] , S extends string  > =   S

export type t_strApplyReplaceIfExtends <T extends string , US extends string, S extends string > =  t_strApplyFnIfExtends <T,US,FnStrReplace<S>>


export type t_getSubStrNotMatchUnionFromStr <S extends string , US extends string > =  
S extends `${infer Result}${US}${string}`? S extends `${Result}${infer Rest}` ? [Result,Rest] : never : [S,""]

export type t_getSubStrMatchUnionFromStr <S extends string , US extends string ,Acc extends string = "" > = 
S extends `${infer B}${infer R}`?
B extends US ?  t_getSubStrMatchUnionFromStr<R,US,`${Acc}${B}`> : [Acc,`${B}${R}`] : [Acc,""] ;




export type t_strDigit = "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"

export type removeKeysFromObj < T extends {[key in string]:any} , K extends keyof T >  =
  {
    [k in Exclude<keyof T,K>]:T[k]
  }

export type OptionalKeys<T extends object> = {
  [k in keyof T]: removeKeysFromObj<T,k> extends T ? k : never;
}[keyof T];

export type RequiredKeys<T extends object> = Exclude<keyof T, OptionalKeys<T>>;

export type makeOptionalIfNested< T > = {
  [P in keyof T]?: T[P] extends object ?  T[P] extends any[] ? T[P] extends Array<infer _T> ? makeOptionalIfNested<_T>[] : never : makeOptionalIfNested<T[P]> : T[P];
};

export type makeOptionalIfNested_top< T > = {
  [P in keyof T ] -?:  T[P] extends object ?makeOptionalIfNested<T[P]> : T[P];
}

export type makeRequired < T extends object , K extends keyof T =keyof T> = {[k in K]-?:T[k]} 
export type makeOptional < T extends object , K extends keyof T=keyof T > = {[k in K]?:T[k]} 

export type reshapeObject <  T extends object , KRq extends keyof T|null = null, KO extends keyof T|null = null> =
KRq extends null ? KO extends null ? 
  makeOptional<T,keyof T>
  : Exclude<keyof T,KO> extends infer KRq extends keyof T ? 
     makeRequired<T,KRq> & makeOptional<T,KO>
  : makeOptional<T,KO> 

: KO extends null ? 
Exclude<keyof T,KRq> extends infer KO extends keyof T? 
   makeRequired<T,KRq> & makeOptional<T,KO>
  : makeRequired<T,KRq>

:makeRequired<T,KRq>  & makeOptional<T,KO>
  

export type reshapeObjectIgnoreOpt <  T extends object , KRq extends keyof T|null = null, KO extends keyof T|null = null> =
OptionalKeys<T> extends infer A extends keyof T ? 
(KRq extends null ? Exclude<keyof T,A> : KRq )  extends infer KRq extends keyof T ? 
(KO extends null ? Exclude<keyof T ,KRq> : KO|A )  extends infer KO extends keyof T?
makeRequired<T,Exclude<KRq,KO>> & makeOptional<T,KO>: never : never : never 

export type t_filter_elemOfArr <T extends any[]> = Exclude<deepArrToUnion<T>,t_emptyNDArray> |[] 

export type t_filter< T extends any[]> = t_filter_elemOfArr <isInferior <T['length'],t_maxLengthOfTuplePlusOne> extends true ?  allSubArray<T> : T>[]

export  type t_filter_arrType <T extends any[]> = Exclude<T,t_emptyNDArray/*never[]|[[]]|[][]*/>|[]


type _Permutation <U , Arr extends readonly any[], K = U , Acc = []> =  Arr extends readonly [any, ... infer R] ?  IsUnion<U> extends false ?
R extends [] ? [U] : never  :
  K extends K ? [K,..._Permutation<Exclude<U,K>,R>] :never: []

export type PermutationArr < U , Arr extends readonly any[] > = _Permutation<U,Arr>
export type PermutationNb < U , N extends number > = _Permutation<U,Enumerate<N>>
export type PermutationU<T, K=T> =
[T] extends [never]
  ? []
  : K extends K
    ? [K, ...PermutationU<Exclude<T, K>>]
    : never

type _AllPermutation <T , K=T> = 
IsUnion<T> extends false ? never :
K extends K ? PermutationU<Exclude<T, K>>|_AllPermutation<Exclude<T, K>> : [] 
  
//TODO : to securized if to large 
export type AllPermutation <T> = PermutationU<T> | _AllPermutation<T>

export type validateStrIsInAllPermutation <V extends string , U extends string > = stringToArray<V> extends AllPermutation<U> ? V : never 


export type t_abs_constructor < P extends any[] = any[], R=any > = abstract new (...args: P) =>  R
export type t_constructor < P extends any[] = any[], R=any > =  new (...args: P) =>  R

type t_rest_classe<P=any > = {prototype: P}

export type t_class = t_constructor & t_rest_classe
export type t_class_abs = t_abs_constructor & t_rest_classe


export type getNameOfStaticFields<_this> = Exclude<keyof _this,"prototype">
export type t_typeofClass = {"prototype":any} & {[k in string]:any}

export type _t_verifyStatic<_this extends {[k in string]:any} ,staticType extends {[k in string]:any} >  = 
{[k in getNameOfStaticFields<_this> as k extends keyof staticType ? _this[k] extends staticType[k] ? k : never : k  ] : _this[k]}

export type t_verifyStatic<_this extends t_typeofClass ,staticType extends {[k in string]:any} , needisComplete extends boolean = false > = _t_verifyStatic<_this,staticType> extends infer A ?
A extends {[k in string]:any} ? 
needisComplete extends true ? keyof staticType extends keyof A ? A : never : A : never : never 



export type OmitAllStatics<T extends  t_class|t_class_abs > = 
(T extends t_class ? false : true) extends infer isAbs ? 
 T extends t_abs_constructor<infer A,infer R> & t_rest_classe<infer P> ?
        (isAbs extends false ? t_constructor<A,R>  :t_abs_constructor<A,R>) & t_rest_classe<P> :never 
        :never;

export type extJsonWithJson < J1 extends {[k in t_indexable_key] :any } , J2 extends {[k in t_indexable_key] :any } > = 
J1 & Omit<J2,keyof J1>




export type FixTuple<T> = Recompose<Decompose<T>>;

type Decompose<T> = {
    isReadonly: T extends unknown[] ? never : unknown,
    length: number,
    index: { [K in keyof T as K extends number ? K : never]: T[K] }[any],
    optional: OptionalIndices<T>
} & {
    [K in keyof T as K extends `${number}` | 'length' ? K : never]: T[K]
}

type OptionalIndices<T> = {
    [K in keyof T as {} extends { [P in K]: T[P]; } ? K : never]-?: K extends `${infer N extends number}` ? N : never
} extends infer U ? U[keyof U] : never

type Decomposed =  {
    length: number,
    index: unknown,
    isReadonly: unknown,
    optional: unknown
}

type Recompose<
    T extends Decomposed,
    I extends number = 0,
    R extends unknown[] = [],
    Values = never
> = T extends { [K in I]?: unknown }
    ? Recompose<
        T,
        Next<I>,
        I extends T['optional'] ? [...R, T[I]?] : [...R, T[I]],
        Values | T[I]
    >
    : HandleReadonly<T, HandleOpenEnded<T, R, Values>>

type HandleOpenEnded<T extends Decomposed, R extends unknown[], Values> =
    number extends T['length']
    ? [...R, ...Exclude<T['index'], Values>[]]
    : R;

type HandleReadonly<T extends Decomposed, R extends unknown[]> =
    [T['isReadonly']] extends [never] ? R : readonly [...R]


type Next<I extends number> =
    number extends I ? number
    : number & [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64][I];