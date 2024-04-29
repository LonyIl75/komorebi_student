import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule, str_idRouteAndRemoteAddresss, concatNameModuleAndDebug } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector_pageParsing","mPageParsing")
const debug_pageParsing_mPageParsing : Debugger = debug(name_module)


import {mPage} from "../PageEvaluate/mPage.js";
import {  t_ParsingTree } from "./TreeParsing.js";
import { arrToUnion } from "@shared/type.js";
import { t_arr_component, t_getClassNameTypeFromArrComponent, t_rootClassName } from "./types.js";
import { IJsonWithScrapingComponents } from './ComponentObject.js';
import { IJsonComponents } from './Schema/FunctionalWrapperJsonComponents/JsonComponents/JsonComponents.js';
import { _IJsonComponents } from './Schema/FunctionalWrapperJsonComponents/_JsonComponents/_JsonComponents.js';
import { t_strRegex } from '@shared/_regexp.js';




export class mPageParsing<UnionRegex  extends t_strRegex ,UnionIdPath  extends string ,ArrUnionClassName extends readonly [t_rootClassName , ...readonly string [] ],unionClassNameType extends arrToUnion<ArrUnionClassName>
, t_arrrArrUnion_page_childsClassName extends t_arr_component<unionClassNameType>,T extends _IJsonComponents< unionClassNameType> > 
extends mPage<UnionRegex,UnionIdPath,ArrUnionClassName,unionClassNameType,t_arrrArrUnion_page_childsClassName,T> {

    parsing_tree : t_ParsingTree<arrToUnion<ArrUnionClassName>> ;
    
    constructor(json:IJsonWithScrapingComponents<UnionRegex,UnionIdPath,ArrUnionClassName,unionClassNameType,t_arrrArrUnion_page_childsClassName,T>){
        super(json);
        this.parsing_tree = {} as t_ParsingTree<arrToUnion<ArrUnionClassName>>;
    }
    
    async destroy(){
        return ((obj,fct)=>{
            return fct().then((_)=>{;
                obj.parsing_tree = null;
            })
        })(this,super.destroy)
    }

    setParsingTree(parsing_tree:t_ParsingTree<arrToUnion<ArrUnionClassName>>){
        this.parsing_tree = parsing_tree;
    }

    /*initParsingTree(){
        this.setParsingTree(base_getParsingTree( this.page  ))
    }*/

    getParsingTree(){
        return this.parsing_tree;
    }

}