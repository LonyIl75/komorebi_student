import { IJson, IVoid, t_getAllMethodsOfObject } from "@shared/m_object.js"
import { Apply, Args, Fn, isEqual, makeOptional, t_JoinChar, t_function } from "@shared/type.js"

//TODO readonly , private ; public , protected : all modifier of a class
export type t_staticEmebedding< T extends string > = `static ${T}`
export type t_fctEmebedding< T extends string > = `${T}`|`async ${T}`


//TODO find a way to refactor 
export interface FnStaticMb extends Fn<[string,string]> {
    return : _fnStaticMb<Args<this>>
}
type _fnStaticMb <_Args extends readonly string[]>=_Args extends readonly [string,string] ? t_staticEmebedding<`${_Args[0]}${_Args[1]}`> :never

export interface FnStaticMbFct extends Fn<[string,string]> {
    return : _fnStaticMbFct<Args<this>>
}
type _fnStaticMbFct <_Args extends readonly string[]>=_Args extends readonly [string,string] ? t_staticEmebedding<t_fctEmebedding<`${_Args[0]}${_Args[1]}`>> :never

export interface FnMbFct extends Fn {

    return : _fnMbFct<Args<this>>
}
type _fnMbFct <_Args>=_Args extends readonly [string,string] ? t_fctEmebedding<`${_Args[0]}${_Args[1]}`> :never

export interface FnMb extends Fn {

    return : _fnMb<Args<this>>
}
type _fnMb <_Args>=_Args extends readonly [string,string] ? `${_Args[0]}${_Args[1]}` :never


export type t_function_codeGenerator<K extends string , _Fn extends Fn , T extends string = string > = ()=>Apply<_Fn,[K,T]> 

export type t_staticKeyEmbedding < K extends string > = `st_${K}`
type t_shortCut_keyEmbedding < K ,isStatic extends boolean= false  > = K extends string ? isStatic extends true ? `st_${K}` : K : never  

export type CodeGeneratorFcts < IC extends IJson<string>,_Fn extends Fn = FnMbFct  ,isStatic extends boolean= false  > =  t_getAllMethodsOfObject<IC> extends infer CF ? CF extends IJson<string> ? 
{[k in keyof IC as k extends keyof CF ?  t_shortCut_keyEmbedding<k ,isStatic> : never ]: k extends string ? t_function_codeGenerator<k,_Fn> :never }
: never : never

export type CodeGeneratorMbs < IC extends IJson<string>,_Fn extends Fn = FnMb ,isStatic extends boolean= false > = t_getAllMethodsOfObject<IC> extends infer CF ? CF extends IJson<string> ? 
{[k in keyof IC as k extends keyof CF ?  never : t_shortCut_keyEmbedding<k ,isStatic>]: k extends string ? t_function_codeGenerator<k,_Fn> :never }
: never : never

export const type_member  = `type` as  const 
export type t_type_member  = typeof type_member
export const value_member  = `value` as  const 
export type t_value_member = typeof value_member 
export type t_member< TType extends string  = string, TValue extends string = string > ={[type_member] : TType ,[value_member] ?: TValue }
export type t_getValue_member < T extends IJson<string,t_member> ,K extends string > = 
 K extends keyof T  ? t_value_member extends keyof T[K] ? T[K][t_value_member] : undefined : undefined
export type t_getType_member < T extends IJson<string,t_member> ,K extends string > =
    K extends keyof T  ? t_type_member extends keyof T[K] ? T[K][t_type_member] : never : never


export interface FnMbTyped<T extends IJson<string>,isStatic extends boolean > extends Fn {

    return : _fnMbTyped<T,isStatic,Args<this>>
}
type _fnMbTyped <T extends IJson<string>,isStatic extends boolean ,_Args>=
_Args extends readonly [string,string] ?
(_Args[0] extends keyof T ? 
 `${_Args[0]}:${t_getType_member<T,_Args[0]>}${
    t_getValue_member<T,_Args[0]> extends infer A ?  A extends string ? A extends undefined ? _Args[1] : `=${A}` :never :never}` 
:`${_Args[0]}${_Args[1]}`
 ) extends infer A ? 
    A extends string ? 
        isStatic extends true ? t_staticEmebedding<A> : A 
    :never 
:never 
:never

export type t_genericValue <  Id extends string = string , Generics extends readonly string[] = readonly string[] > = {id:Id,generics:Generics}

export const getGenericEmbedding = <T extends string >(str:T ) => `<${str}>` as const 
export type t_genericValueParamToString <Generics extends readonly string[] > = Generics extends readonly [any , infer _] ? `<${t_JoinChar<Generics, ",">}>` : ""
export const genericValueParamToString = <Generics extends readonly string[] >(arrGen:Generics) => {
    return (arrGen.length > 0 ? getGenericEmbedding((arrGen.join(",") as t_JoinChar<Generics,",">))  : "") as t_genericValueParamToString<Generics>
}

export const genericValueToString = <Id extends string , Generics extends readonly string[] >(gv : t_genericValue<Id,Generics>) => {
    const genericStr = genericValueParamToString(gv.generics)
    return `${gv.id}${genericStr}` as const 
}



export type CodeGenerator < IC extends {_:IJson<string>,static:IJson<string>} , category extends "class"|"namespace"|"codeBlock" ="codeBlock",
 T extends {_:IJson<string,t_member>,static:IJson<string,t_member>} = {_:IVoid,static:IVoid} , _isAbstract extends boolean = false > =  
category extends "codeBlock" ? {getFile():string} :
CodeGeneratorFcts<IC["_"]> & CodeGeneratorMbs<IC["_"], FnMbTyped<T["_"],false>,false> & CodeGeneratorFcts<IC["static"],FnStaticMbFct,true> & CodeGeneratorMbs<IC["static"], FnMbTyped<T["static"],true>,true> &
(category extends "class"|"interface" ?
{generics : readonly {id:string,extends:string}[]} &(category extends "class" ? {extends : t_genericValue} : {extends : readonly t_genericValue[]})
: IVoid ) &
(category extends "class" ?
({st_constructor:()=>`constructor${string}`} extends infer Cst ? Cst extends IJson ? 
_isAbstract extends true ? makeOptional<Cst> : Cst : never : never) &
{   implements : t_genericValue[],
    isAbstract : _isAbstract,
    
}: IVoid ) &  ({name:string})

