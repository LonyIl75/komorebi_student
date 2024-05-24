
import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = "argumentConverter"
const debug_argumentConverter : Debugger = debug(getNameDebugAllNameModule(name_module))



import { IJson } from "@/../shared/m_object.js";
import { EmptyInit, AHaveSerializer, haveSerializerAndEmptyInit, t_serializer } from '@shared/m_json.js';

type transformFunction = (value:any ) => string;

export interface IArgumentConverter {
    sep_arg :string ;
    sep_keyVal :string;
}

export abstract class AArgumentConverter<T extends AArgumentConverter<any>=AArgumentConverter<any>> extends haveSerializerAndEmptyInit<T> implements IArgumentConverter {

    sep_arg :string ;
    sep_keyVal :string;

    constructor(obj_serializer : t_serializer<T>,sep_arg :string = " " , sep_keyVal :string = "=" ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        super(obj_serializer )

        this.sep_arg = sep_arg;
        this.sep_keyVal = sep_keyVal;
    }

    static toJson(obj: AArgumentConverter<any>) { /*console.log("DEBUG_ME",getCurrentLine());*/
        return {sep_arg : obj.sep_arg , sep_keyVal : obj.sep_keyVal} as const 
    }

    static df_getArgListFromObject< F extends haveSerializerAndEmptyInit<F>   >(  obj: F  ,  argC : AArgumentConverter ,  key_functionTransform ?: Map<string, transformFunction>   ) :string {
        let arg_list : Array<string> = [];

        let  arr_entries : [string, unknown][] = Object.entries(obj).filter(([key, value]) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            if(key in obj.getSerializer().toJson( obj.getEmptyInit())) return true;
            else return false ; 
        });

        let value_str : string = "";
        let cur_functTransform : transformFunction = null as transformFunction;


        for (const [key, value] of  arr_entries) { /*console.log("DEBUG_ME",getCurrentLine());*/
            if (
            !key.startsWith("__") && //A FAIRE : what is "__"  
            typeof value !== "function"
            ) {
                if( (cur_functTransform=key_functionTransform?.get(key)) == undefined  ) cur_functTransform = (value:any ) => value.toString();

                value_str = cur_functTransform(value)

                if(value_str != "")arg_list.push([key,  value_str ].join(argC.sep_keyVal));
            }
        }

        return '['+arg_list.reduce((r_str, _str) => r_str + '"' + _str + '"' + ',', '').slice(0, -1)+']';
    }


    getArgListFromObject < F extends haveSerializerAndEmptyInit<F> & AArgumentConverter  > (  ) :string {
        return AArgumentConverter.df_getArgListFromObject< F >(this as unknown as F ,  this );
    }

    //-----------------------------------------------------------------------------


    //to override 
    convertToArgList < F extends haveSerializerAndEmptyInit<F> & AArgumentConverter  >(  )
    {
        return this.getArgListFromObject< F >();
    }

} 