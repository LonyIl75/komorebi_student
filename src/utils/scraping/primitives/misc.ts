import getCurrentLine from "get-current-line"
import {  selectors, t_pageOrElementHN } from "../DOMElements/Selector/_Selector/type.js";
import { applyFunctionNextToTrySelectorF, getPropertyPageOrElementHN, trySelectors_any } from "../DOMElements/Selector/main.js";

export const colorIfBool = async (_node:t_pageOrElementHN , str_color:string , is_test : boolean = true , selectors ?: Readonly<selectors>  ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const node = await (selectors !== undefined ?  trySelectors_any(_node,selectors): Promise.resolve([_node]) )
      if(node.length === 0)  throw new Error("colorIfBool | node.length === 0")
      return (_node as any).evaluate((e:any,_is_test:boolean,_str_color:string) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ 
      if(_is_test)e.style.backgroundColor = _str_color ;
      },node[0],is_test,str_color) 
  
  }

export const getPropertyTF =(_node:t_pageOrElementHN , str_property :string , _selectors ?: Readonly<selectors>) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const funct = getPropertyPageOrElementHN(str_property)
    return applyFunctionNextToTrySelectorF(trySelectors_any,funct, _node ,_selectors )
}


export const getAttributeTF =(_node:t_pageOrElementHN , str_attribute :string , _selectors ?: Readonly<selectors>) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
  const funct = getPropertyPageOrElementHN(str_attribute)
  return applyFunctionNextToTrySelectorF(trySelectors_any,funct, _node ,_selectors )
}


export const getTextContent =(_node:t_pageOrElementHN , _selectors ?: Readonly<selectors>) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return getPropertyTF(_node,"textContent",_selectors)
  }
