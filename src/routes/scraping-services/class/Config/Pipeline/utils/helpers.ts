export const embedCategory  = <C extends string> (cate : C) : ['(','?',':',C,')'] => ['(','?',':',cate ,')'] 
export type t_embedCategory < A extends string > = ReturnType<typeof embedCategory<A>>

export type t_embedCategories < C extends string , Arr extends readonly C[] > = Arr extends readonly [ infer A , ... infer R ] ?
    R extends readonly C[] ? A extends C ?  [t_embedCategory<A>,...t_embedCategories <C,R>] : never : never : []
