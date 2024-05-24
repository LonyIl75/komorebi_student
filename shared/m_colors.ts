import { debug,debug_join,debug_with_curLine,debug_start_with_curLine,debug_end_with_curLine, debug_with_curLine_isresult} from "./m_debug.js";
import getCurrentLine from 'get-current-line'
import{Debugger} from 'debug';
import { concatNameModuleAndDebug } from "./str_debug.js";

const name_module :string = "m_colors"


import { nullOrUndefined } from "./m_primitives.js";

export type arr_hsl = [number,number,number]

export function rgbToHsl(r :number, g:number, b:number) : arr_hsl  {
    r /= 255;
    g /= 255;
    b /= 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
  
    let h, s, l = (max + min) / 2;
  
    if (max === min) { 
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
  
      h /= 6;
    }
  
    return [h, s, l];
  }


export function getRgbFromRgbString(str_color :string , regex ?:RegExp   ) : [number,number,number] | nullOrUndefined {
    if (regex == undefined) regex =  /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;

    const matches = regex.exec(str_color);
        if (matches) { 
            return [parseInt(matches[1]),parseInt(matches[2]),parseInt(matches[3])]
        }
        else return null
}
export function isColorFromStr(str_color :string , color:enum_color , regex?:RegExp  ){  //, threshold :number = 250/6){ 
    const rgb = getRgbFromRgbString( str_color , regex )
    if(rgb == null) {  console.log("Format de couleur invalide."); return false}
    else return isColor(...rgb ,  color)
}

export enum enum_color {
     Black = "Black" , 
     Gray = "Gray" , 
     Blue = "Blue" , 
     Other = "Other"
    }


    function getColorFromRgb(r :number, g:number, b:number) : enum_color {
        const [h, s, l] : arr_hsl  = rgbToHsl(r, g, b);
  
        let  detected_color =  enum_color.Other ; 
        if (s < 0.1) { 
          if (l < 0.25) { 
            detected_color = enum_color.Black;
          } else {
            detected_color = enum_color.Gray;
          }
        } else if (h > 0.55 && h < 0.65) { 
            detected_color = enum_color.Blue;
        } else {
            detected_color =  enum_color.Other ;
        }
        console.log("detected_color",detected_color)
        return detected_color
    }

export function isColor(r :number, g:number, b:number ,  _color : enum_color ) : boolean {
    return getColorFromRgb(r, g, b) == _color ;

  }
