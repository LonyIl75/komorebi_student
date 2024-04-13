import { FrameAddScriptTagOptions,Page } from "puppeteer";
import { ExposeFunction } from "./ExposeFunction.js";

export type t_expsAndScript = [Array<ExposeFunction> , FrameAddScriptTagOptions]


export const exposeFunctionsIfNotInWindow = async (page:Page ,  map_nameFunctionsAndFunction:Map<string,Function>) => {//TODO : remplacer par mPage 

    console.log("map_nameFunctionsAndFunction",map_nameFunctionsAndFunction)
    const to_exposeFunctions = await page.evaluate((arr_functions) => {
        console.log("arr_functions",arr_functions)  
        let to_exposes = []
        for(const nameFunction of arr_functions){// A FAIRE typeof nameFunction === 'function'  ? extract 
           if(typeof nameFunction === 'function' || window[nameFunction] )continue // ? typeof nameFunction === 'function'  // (functionName in service_functions  && typeof service_functions[functionName] === 'function') 
           else  to_exposes.push(nameFunction)
        }
        return to_exposes;
      }, Array.from(map_nameFunctionsAndFunction.keys()));
 
      for(const nameFunction of to_exposeFunctions){
        await page.exposeFunction(nameFunction, map_nameFunctionsAndFunction.get(nameFunction));
        }
    }