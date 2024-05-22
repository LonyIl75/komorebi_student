import { routename as routenameHelpers } from "../../util/helpers.js"

import { CodeGenerator } from "@/generator/utils/types.js"
import { IVoid } from "@shared/m_object.js"
import { majFirstChar } from "@shared/m_string.js"

export type IRouteData<SN extends string , R extends string > = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

class RouteData<SN extends string , R extends string > implements IRouteData<SN,R>{
    _serviceName :SN
    _routeName :R 

    constructor(_serviceName:SN,_routeName:R){
        this._serviceName = _serviceName
        this._routeName = _routeName
    }
    
    getFile(){
        return `const _arr_classNameType_${this._serviceName}_${this._routeName} = [
            rootClassName,"ContainerGrid","Grid",
            "ContainerPagination","Pagination","SelectedPagination","NextPagination",
            _id_item,"Type"
        ] as const  
        
        export const arr_classNameType_${this._serviceName}_${this._routeName} = buildArrClassNameType(str_${majFirstChar(this._routeName)},_arr_classNameType_${this._serviceName}_${this._routeName})
        export type t_arr_classNameType_${this._serviceName}_${this._routeName} = typeof arr_classNameType_${this._serviceName}_${this._routeName}
        
        export type t_union_classNameType_${this._serviceName}_${this._routeName} = arrToUnion<t_arr_classNameType_${this._serviceName}_${this._routeName}>
        
        const imported_classNameTypeParent_${this._serviceName}_main =  [] as const
        type t_imported_classNameTypeParent_${this._serviceName}_main = typeof imported_classNameTypeParent_${this._serviceName}_main
        const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_${this._serviceName}_main,t_IJsonComponents_${this._serviceName}_utilMain>(json_${this._serviceName}_utilMain,imported_classNameTypeParent_${this._serviceName}_main)
        
        const imported_classNameTypeParent_${this._serviceName}_text = [] as const
        type t_imported_classNameTypeParent_${this._serviceName}_text = typeof imported_classNameTypeParent_${this._serviceName}_text
        const [] = getTypesFromImportedComponentAndFct<t_imported_classNameTypeParent_${this._serviceName}_text,t_IJsonComponents_${this._serviceName}_utilText>(json_${this._serviceName}_utilText,imported_classNameTypeParent_${this._serviceName}_text)
        
        
        export const arr_${this._serviceName}_${this._routeName}  = 
            [
                getChildArr<t_arr_classNameType_${this._serviceName}_${this._routeName},0,[1]>(arr_classNameType_${this._serviceName}_${this._routeName},0,[1]),
                getChildArr<t_arr_classNameType_${this._serviceName}_${this._routeName},1,[2,4]>(arr_classNameType_${this._serviceName}_${this._routeName},1,[2,4]),
                getChildArr<t_arr_classNameType_${this._serviceName}_${this._routeName},4,[5]>(arr_classNameType_${this._serviceName}_${this._routeName},4,[5]),
                getChildArr<t_arr_classNameType_${this._serviceName}_${this._routeName},5,[6,7]>(arr_classNameType_${this._serviceName}_${this._routeName},5,[6,7]),
                getChildArr<t_arr_classNameType_${this._serviceName}_${this._routeName},6>(arr_classNameType_${this._serviceName}_${this._routeName},6),
                getChildArr<t_arr_classNameType_${this._serviceName}_${this._routeName},7>(arr_classNameType_${this._serviceName}_${this._routeName},7),
                getChildArr<t_arr_classNameType_${this._serviceName}_${this._routeName},2,[3]>(arr_classNameType_${this._serviceName}_${this._routeName},2,[3]),
                getChildArr<t_arr_classNameType_${this._serviceName}_${this._routeName},3,[8]>(arr_classNameType_${this._serviceName}_${this._routeName},3,[8]),
                getChildArr<t_arr_classNameType_${this._serviceName}_${this._routeName},8,[9]>(arr_classNameType_${this._serviceName}_${this._routeName},8,[9]),
                getChildArr<t_arr_classNameType_${this._serviceName}_${this._routeName},9>(arr_classNameType_${this._serviceName}_${this._routeName},9),
            ] as const
        
        export type t_arr_${this._serviceName}_${this._routeName} = typeof arr_${this._serviceName}_${this._routeName}
        
        type t_classNameType_leaf_${this._serviceName}_${this._routeName} =  t_getLeaf < t_union_classNameType_${this._serviceName}_${this._routeName}, t_arr_${this._serviceName}_${this._routeName}> 
        
        const imported_classNameType_${this._serviceName}_main = [] as const 
        type t_imported_classNameType_${this._serviceName}_main = typeof imported_classNameType_${this._serviceName}_main
        
        
        const imported_classNameType_${this._serviceName}_text = [] as const 
        type t_imported_classNameType_${this._serviceName}_text = typeof imported_classNameType_${this._serviceName}_text
        
        type _t_union_notSpecified_classNameType = 'Container' 
        
        type t_classNameType_notSpecified_union_text = removePrefix<t_str_${majFirstChar(this._routeName)},t_union_classNameType_${this._serviceName}_${this._routeName}|_t_union_notSpecified_classNameType> extends infer A ?
         A extends string ? addSuffix <A,'Text'> extends infer B ? B : never : never :never 
        
        type t_union_notSpecified_classNameType = _t_union_notSpecified_classNameType| t_classNameType_notSpecified_union_text
        
        type t_classNameType_${this._serviceName}_${this._routeName} = t_union_classNameType_${this._serviceName}_${this._routeName}|t_imported_classNameType_${this._serviceName}_main[number]|t_imported_classNameType_${this._serviceName}_text[number]|t_union_notSpecified_classNameType
        const ${this._serviceName}_${this._routeName}_${routenameHelpers} = get${majFirstChar(this._serviceName)}${majFirstChar(routenameHelpers)}<t_classNameType_${this._serviceName}_${this._routeName}>()
        
        
        const __IJsonComponents_leaf_${this._serviceName}_${this._routeName} : _IJsonComponents<t_classNameType_leaf_${this._serviceName}_${this._routeName}> = {
         
            [arr_classNameType_${this._serviceName}_${this._routeName}[6]]:{
                childs_selectors : Component.df[str_childs_selectors],
                value_validation_strRegex : embedCapturingGroupStrOrRegex("\\S[\\S ]+\\S",true)
            },
            [arr_classNameType_${this._serviceName}_${this._routeName}[7]]:{
                childs_selectors : Component.df[str_childs_selectors],
                childs_attributes : [{[str_attribute_name] : "href"}],
            },
            [arr_classNameType_${this._serviceName}_${this._routeName}[9]]:{
                childs_selectors : Component.df[str_childs_selectors],
            }
        }
        
        const __IJsonComponents_${this._serviceName}_${this._routeName} : _IJsonComponents<t_union_classNameType_${this._serviceName}_${this._routeName}> = {
        
            ...__IJsonComponents_leaf_${this._serviceName}_${this._routeName},
        
            [rootClassName]:{
                ...${this._serviceName}_${this._routeName}_mainOfComponents
            },
            [${this._serviceName}_${this._routeName}_rootClassName] :{
                childs_selectors : [...${this._serviceName}_${this._routeName}_${routenameHelpers}.arrArr_selector(${this._serviceName}_${this._routeName}_${routenameHelpers}.arr_selector_join_arrArr(
                                        [
        
                                            [[
                                                    {selector:Selector.cst_onePropAndTagg(classProp,'row',"ol",containOp)}
                                            ],[
                                                    {selector:Selector.cst_onePropAndTagg(classProp,'u-grid',"article",containOp)}
                                            ]],
        
                                            [[
                                                    {selector:Selector.cst_onePropAndTagg("",'',"div")},
                                                    {selector:Selector.cst_onePropAndTagg(classProp,"pager","ul",containOp)}
                                            ],[
                                                    {selector:Selector.cst_onePropAndTagg("",'',"div")},
                                                    {selector:Selector.cst_onePropAndTagg(classProp,"pagination","ul",containOp)}
                                            ]]
        
                                        ],(arr:string[])=>arr.join(char_child)
                                    ),(str_selector)=>Selector.cst_onePropAndTagg("",'',"div").toString() + fct_mod_hasDirectChild(str_selector))
                                ],
                isScoped : false
            },
            ${majFirstChar(this._routeName)}ContainerGrid:{
                childs_selectors : 
                    [
                        [Selector.cst_onePropAndTagg(classProp,'row',"ol",containOp).toString(),Selector.cst_onePropAndTagg(classProp,'u-grid',"article",containOp).toString()]
                    ]
        
            },
            ${majFirstChar(this._routeName)}Grid:{
                childs_selectors : [...${this._serviceName}_${this._routeName}_${routenameHelpers}.arr_selector_join_arrArr(
                    [
                        [[
                                {selector:Selector.cst_onePropAndTagg("",'',"li")},
                                {selector:Selector.cst_onePropAndTagg(classProp,'product_pod',"article",containOp)}
                        ],[
                                {selector:Selector.cst_onePropAndTagg(classProp,'card-product',"div",containOp)}
                        ]]
                    ],
                    (arr:string[])=>arr.join(char_child)
                )]
            },
            ${majFirstChar(this._routeName)}Item:{
                childs_selectors : [
                    [
                        Selector.cst_onePropAndTagg("",'',"h3").toString(), 
                        Selector.cst_onePropAndTagg(classProp,'card-product-container',"article",containOp).toString()
                    ]
                    
                ]
            },
        
            ${majFirstChar(this._routeName)}ContainerPagination :{
                childs_selectors : [...${this._serviceName}_${this._routeName}_${routenameHelpers}.arr_selector_join_arrArr(
                    [
                        [[
                                {selector:Selector.cst_onePropAndTagg("",'',"div")},
                                {selector:Selector.cst_onePropAndTagg(classProp,"pager","ul",containOp)}
                        ],[
                                {selector:Selector.cst_onePropAndTagg("",'',"div")},
                                {selector:Selector.cst_onePropAndTagg(classProp,"pagination","ul",containOp)}
                        ]]
                ],(arr:string[])=>arr.join(char_child))]
            },
            ${majFirstChar(this._routeName)}Pagination:{
                childs_selectors : [
                    [
                        Selector.cst_onePropAndTagg(classProp,'active',"li",containOp).toString(),
                        Selector.cst_onePropAndTagg(classProp,'current',"li",containOp).toString(),
                        Selector.cst_onePropAndTagg(classProp,'selected',"li",containOp).toString(),
                    ],
                    ${this._serviceName}_${this._routeName}_${routenameHelpers}.arr_selector([
                        Selector.cst_multPropAndTagg(classProp,['active','current','selected','previous'],"li",containOp,[fct_mod_not]).toString(),
                    ],
                    (str_selector)=> str_selector + char_child + Selector.cst_onePropAndTagg("",'',"a").toString()
                    )
                ]
        
            }
        }
        
        
        export type t__IJsonComponents_${this._serviceName}_${this._routeName} = typeof __IJsonComponents_leaf_${this._serviceName}_${this._routeName}
        
        const imported_fjson_${this._serviceName}_utilMain = fjson_${this._serviceName}_utilMain.getSubJsonComponent<t_imported_classNameType_${this._serviceName}_main>(imported_classNameType_${this._serviceName}_main)
        const imported_fjson_${this._serviceName}_${this._routeName} = imported_fjson_${this._serviceName}_utilMain.getAddedSubJsonComponent< t_arr_classNameType_${this._serviceName}_utilText,t_union_classNameType_${this._serviceName}_utilText,t_arr_${this._serviceName}_utilText,t__IJsonComponents_${this._serviceName}_utilText,t_imported_classNameType_${this._serviceName}_text>(imported_classNameType_${this._serviceName}_text,fjson_${this._serviceName}_utilText)
        
        type t_imported_fjson_${this._serviceName}_${this._routeName} = typeof imported_fjson_${this._serviceName}_${this._routeName}
        
        type t_arrClassName_import = t_imported_fjson_${this._serviceName}_${this._routeName} extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
        type t_unionClassName_import = t_imported_fjson_${this._serviceName}_${this._routeName} extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
        type t_arrChilds_imported_${this._routeName} = t_imported_fjson_${this._serviceName}_${this._routeName} extends IFunctionalWrapperJsonComponent <any,any,infer A , any >? A : never 
        type t__IJsonComponent_imported_${this._routeName} = t_imported_fjson_${this._serviceName}_${this._routeName} extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never
        
        export const fjson_${this._serviceName}_${this._routeName}  = imported_fjson_${this._serviceName}_${this._routeName}[fieldName_st_cst_buildFromFWJson](
            new FunctionalWrapperJsonComponentConfig(arr_classNameType_${this._serviceName}_${this._routeName},arr_${this._serviceName}_${this._routeName},__IJsonComponents_${this._serviceName}_${this._routeName})
        )
        
        type t_fjson_${this._serviceName}_${this._routeName} = typeof fjson_${this._serviceName}_${this._routeName}
        
        
        export type t_arrClassName_${this._routeName} = t_fjson_${this._serviceName}_${this._routeName} extends IFunctionalWrapperJsonComponent <infer A , any , any ,any> ? A : never
        export type t_unionClassName_${this._routeName} = t_fjson_${this._serviceName}_${this._routeName} extends IFunctionalWrapperJsonComponent <any,infer A ,any, any >? A : never
        export type t_arrChilds_${this._routeName} = t_fjson_${this._serviceName}_${this._routeName} extends IFunctionalWrapperJsonComponent <any,any, infer A ,any >? A : never 
        export type t_IJsonComponent_${this._routeName} = t_fjson_${this._serviceName}_${this._routeName} extends IFunctionalWrapperJsonComponent <any,any,any,infer A >? A : never
        
        
        export const configJson_${this._serviceName}_${this._routeName}  = fjson_${this._serviceName}_${this._routeName}[getConfig]()
        export type t_configJson_${this._serviceName}_${this._routeName} = typeof configJson_${this._serviceName}_${this._routeName}
        
        export const json_${this._serviceName}_${this._routeName}  = fjson_${this._serviceName}_${this._routeName}["toJson"]()
        export type t_json_${this._serviceName}_${this._routeName} = typeof json_${this._serviceName}_${this._routeName}
        
        export const id_field = \`\${str_${majFirstChar(this._routeName)}}Type\` as const 
        const required_field = [] as const 
        const optional_field = [] as const
        
        const arr_pathId = [id_field,...required_field,...optional_field,...pagination_field] as const 
        type t_arr_pathId =  typeof arr_pathId
        type t_path_id = t_arr_pathId[number]
        
        export type t_resParsing = {
            [r_k in typeof required_field[number]] : string
        } 
        &{
            [key in t_path_id] ?: string
        }
        
        const _mapRegexPathIds_${this._serviceName}_${this._routeName} = [
            [[rootClassName,${this._serviceName}_${this._routeName}_rootClassName,"${majFirstChar(this._routeName)}ContainerGrid","${majFirstChar(this._routeName)}Grid","${majFirstChar(this._routeName)}Item",["${majFirstChar(this._routeName)}Type"]],["${majFirstChar(this._routeName)}Type"]],
            [[rootClassName,${this._serviceName}_${this._routeName}_rootClassName,"${majFirstChar(this._routeName)}ContainerPagination","${majFirstChar(this._routeName)}Pagination",["${majFirstChar(this._routeName)}NextPagination"]],[pagination_field[0]]],
            [[rootClassName,${this._serviceName}_${this._routeName}_rootClassName,"${majFirstChar(this._routeName)}ContainerPagination","${majFirstChar(this._routeName)}Pagination",["${majFirstChar(this._routeName)}SelectedPagination"]],[pagination_field[1]]],
         ] as const 
        
        
        
        const mapRegexPathIds_${this._serviceName}_${this._routeName} = _mapRegexPathIds_${this._serviceName}_${this._routeName}.map((e)=> [MapRegexToIdPath.convertArrKeyInRegexKey(e[0]),e[1]]) as unknown   as t_mapRegexToIdPathFromArrArr<t_path_id,t_arrClassName_${this._routeName},typeof _mapRegexPathIds_${this._serviceName}_${this._routeName} >
        type t_mapRegexPathIds_${this._serviceName}_${this._routeName} = typeof mapRegexPathIds_${this._serviceName}_${this._routeName}
        
        type t_unionRegex_mapRegexPathIds_${this._serviceName}_${this._routeName} = arrToUnion<ApplyGetElementNumberIArrArr<[t_mapRegexPathIds_${this._serviceName}_${this._routeName}],0>[0]>
        
        const mapRegex_${this._serviceName}_${this._routeName} = new MapRegexToIdPath<t_unionRegex_mapRegexPathIds_${this._serviceName}_${this._routeName},t_path_id,t_arrClassName_${this._routeName},t_unionClassName_${this._routeName}>( {_arrClassname : fjson_${this._serviceName}_${this._routeName}[str_get_arrClassName]()} , { _mapRegexToIdPath : mapRegexPathIds_${this._serviceName}_${this._routeName} } ) 
        
        export type t_unionRegex_mapRegex_${this._serviceName}_${this._routeName} = typeof mapRegex_${this._serviceName}_${this._routeName} extends MapRegexToIdPath<infer A , any , any, any  > ? A : never
        export type t_unionIdPath_mapRegex_${this._serviceName}_${this._routeName} = typeof mapRegex_${this._serviceName}_${this._routeName} extends MapRegexToIdPath<any , infer A , any, any  > ? A : never
        
        
        export const scrapingComponent_${this._serviceName}_${this._routeName} = new ScrapingComponent<t_unionRegex_mapRegex_${this._serviceName}_${this._routeName},t_unionIdPath_mapRegex_${this._serviceName}_${this._routeName},t_arrClassName_${this._routeName},t_unionClassName_${this._routeName},t_arrChilds_${this._routeName},t_IJsonComponent_${this._routeName}>( mapRegex_${this._serviceName}_${this._routeName} , fjson_${this._serviceName}_${this._routeName}  )
        export type t_scrapingComponent_${this._serviceName}_${this._routeName} = typeof scrapingComponent_${this._serviceName}_${this._routeName}` as const 
    }
}