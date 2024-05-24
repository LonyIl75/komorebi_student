import { DebuggingOptions, debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule, concatNameModuleAndDebug } from '@shared/str_debug.js';


const name_module :string =  getNameModule("scraping_selector_pageParsing","subsetPage")
const debug_pageParsing_subsetPage : Debugger = debug(name_module)

import { ExposeFunction, getPathFromExpAndScript } from "../PageEvaluate/ExposeFunction.js";
import path from "path"
import { arrID_to_selector, node_to_selector } from "./utils.js";
import { t_expsAndScript } from "../PageEvaluate/todo.js";
import { getBaseFileName, joinFilePath } from '@shared/m_file.js';
import { ExpFunct_components } from './types.js';
import { getPathPageParsing } from '@/config/pathFolder/srcPath.js';


export async function _getAllParents( element : Element , doc_element : Element, index_empty ?:number[]  ){ 
    let unique_element_id :string =  await node_to_selector(element )
    let unique_document_id :string = await  node_to_selector(doc_element)
    return getAllParents( [unique_document_id] , [unique_element_id], index_empty )
    }

    //A FAIRE t_elementSelectors  ,t_elementSelectors 
export function getAllParents( doc_selector:string[] ,elem_selectors:string[]  ,index_empty :number[] =[]  ) :string {


        let doc =  document.querySelector(doc_selector[0]);
        for(let i = 1 ;  ! doc && i < doc_selector.length ;i++){ 
            doc = document.querySelector(doc_selector[i]) as any ;
        } 


        let arr_elements = []
        let res = [] as any
        let res_2 = [] as any
            for(let i = 0 ; i < elem_selectors.length ;i++){ 
                res =  document.querySelectorAll(elem_selectors[i])
                
            if(index_empty.length && index_empty.indexOf(i)!=-1){
                res_2 = []
                res.forEach(el=>{ 
                    if(!(el?.innerHTML.replace(/\s+/g," ").trim().length))res_2.push(el)
                })
            }else{
                res_2=res
            }
            arr_elements.push(res_2)
        }


        let m_map = new Map<string,Element>()

        
    
        
        let root = null ; 
        for(const elements of arr_elements)
        { 
            for (const element  of elements) { 
            let cur_element: any = element; // Définissez l'élément actuel sur l'élément à récupérer
            let cur_container  = null;
                   
            let clone  = null;
            let tmp  = null ; 
            let b=true
            

            // Parcourez tous les parents de l'élément jusqu'à atteindre la racine de la page
            while (cur_element!== null && b && cur_element !== document.documentElement) { 
                let unique_cur_element_id  = arrID_to_selector([cur_element?.tagName ,cur_element?.className , cur_element?.id].map((e:string)=>e.replace(/\s+/g," ").trim()))//.join("_")
                //@ts-ignore
                if( (tmp =  m_map.get(unique_cur_element_id) )) {
                    clone = tmp 
                    b=false
                }
                else{

                    clone= cur_element.cloneNode(false);
                    //@ts-ignore
                    m_map.set(unique_cur_element_id,clone); //A FAIRE : replace by map  cf. test_map_serelization.js : DONE ? evalute (( arrArr_map ) =>{ ...},Array.from(map_nameFunctionsAndFunction.keys())
                    const test_elem = document.createElement("p")   
                    test_elem.textContent = "test"
                    clone.appendChild(test_elem)
                }
                if(cur_container != null ) clone.appendChild(cur_container);

                cur_container=clone; // Ajoutez chaque parent trouvé au début du conteneur
                if(cur_element.parentElement == document.documentElement ) root=cur_container
                cur_element = cur_element.parentElement;
            }

            //console.log("elements",JSON.stringify(elements))
        }
    }

        return root.outerHTML;

    
       
}

    

        const subsetPage_functions : ExposeFunction[] = [
            new ExposeFunction(getAllParents,getAllParents.name,[/*addMapInPage (  getAllParents.name  , ["arr_idsElement"]  ,"arr_Elements" ) ,*/{id:"node_to_arrID",path:getPathFromExpAndScript( ExpFunct_components )}   ] ),
            //new ExposeFunction ( _getAllParents , _getAllParents.name , [{id:"getAllParents",path:subsetPage_path}] ) // can't be used in page.evaluate context because of non serializable parameters 
    
    ]
        
export const ExpFunct_subsetPage = [subsetPage_functions ,{
    id:"subsetPage",//TODO getBaseFileName(__filename,true),
    path: joinFilePath(getPathPageParsing() ,joinFilePath(getPathPageParsing() , "subsetPage.js"))//getBaseFileName(__filename))
}  ] as t_expsAndScript


//map seems to be not working

// A FAIRE : script to autogenerate map of map 
// A FAIRE : voir si une classe marcherait si oui faire une classe pour les maps