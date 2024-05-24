import getCurrentLine from "get-current-line"
import { CodeGenerator } from "@/generator/utils/types.js"
import { IVoid } from "@shared/m_object.js"
import { majFirstChar } from "@shared/m_string.js"

export type IHelpersData<SN extends string > = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

export const routename = "helpers" as const

class HelpersData<SN extends string> implements IHelpersData<SN>{
    _serviceName :SN
    _routeName = routename

    constructor(_serviceName:SN){ /*console.log("DEBUG_ME",getCurrentLine());*/
        this._serviceName = _serviceName
    }
    
    getFile(){
        return `const _embed_${this._serviceName}_style_str = <Enum extends t_enum>(str_enum :  Enum[keyof Enum] ):\`\${ Enum[keyof Enum]}\` => \`\${str_enum}\`
        type t_ret_embed_${this._serviceName}_style_str<Enum extends t_enum> = ReturnType<typeof _embed_${this._serviceName}_style_str<Enum>>

        export const enum_${this._serviceName}_style = {
            ...strVoidEnumFct${majFirstChar(this._routeName)}
        }
        export type t_enum_${this._serviceName}_style = typeof enum_${this._serviceName}_style


        export const get${majFirstChar(this._serviceName)}${majFirstChar(this._routeName)} = <U extends string ,UEnum extends t_strEnumFct${majFirstChar(this._routeName)}  = t_enum_${this._serviceName}_style , RU extends string = t_ret_embed_${this._serviceName}_style_str<UEnum>  >
        (fct: (t_fct_cst_getFct${majFirstChar(this._routeName)}<UEnum,RU>|typeof _embed_${this._serviceName}_style_str) = _embed_${this._serviceName}_style_str  ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/

            type t_validateUEnum = UEnum
            type t_validateRU = RU

            type t_validateFct = t_fct_cst_getFct${majFirstChar(this._routeName)}<t_validateUEnum,t_validateRU>

            return cst_getFct${majFirstChar(this._routeName)}<U,t_validateUEnum,t_validateRU>(fct as t_validateFct )
        }` as const
    }
}