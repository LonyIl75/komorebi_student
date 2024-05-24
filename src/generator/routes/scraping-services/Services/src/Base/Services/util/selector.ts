import getCurrentLine from "get-current-line"
import { CodeGenerator } from "@/generator/utils/types.js"
import { IVoid } from "@shared/m_object.js"
import { majFirstChar } from "@shared/m_string.js"

export type IServiceSelectors<SN extends string > = CodeGenerator<{ _: IVoid,static:IVoid},"codeBlock">

export const name = "selectors" as const

class ServiceSelectors<SN extends string> implements IServiceSelectors<SN>{
    _serviceName :SN
    _name = name

    constructor(_serviceName:SN){ 
        this._serviceName = _serviceName
    }
    
    getFile(){
        return `export const ${this._serviceName}_loadingElements${this._name} = ['[class*="pvs-loader"]','[aria-busy=*="true"]'] as const 


        const page${majFirstChar(this._serviceName)}_fct_getLoadingElements = page_fct_getLoadingElements(${this._serviceName}_loadingElements${this._name})


        const page${majFirstChar(this._serviceName)}_fct_waitForPageFullLoading = page_fct_waitForPageFullLoading(page${majFirstChar(this._serviceName)}_fct_getLoadingElements)

        export function waitFor${majFirstChar(this._serviceName)}PageFullLoading (page:t_pageOrElementHN , maxTime ?: number, sz_epoch?:number ) : Promise<boolean> {

        return page${majFirstChar(this._serviceName)}_fct_waitForPageFullLoading(page,maxTime,sz_epoch)
        }

        export const ${this._serviceName}_mainComponent${this._name} = [Selector.cst_onePropAndTagg(classProp,'page_inner',"div",containOp).toString(),] as const

        const page${majFirstChar(this._serviceName)}_fct_getMainComponent = page_fct_getMainComponent(${this._serviceName}_mainComponent${this._name})

        export const get${majFirstChar(this._serviceName)}MainComponent = (page:t_pageOrElementHN , s_option ?:selectorsOptions )   =>{ 
            return page${majFirstChar(this._serviceName)}_fct_getMainComponent(page,s_option)
        }



        export const waitFor${majFirstChar(this._serviceName)}PageLoading = (page:t_pageOrElementHN, s_option ?:selectorsOptions ) : Promise<ElementHandle<Node>> =>{ 
            return get${majFirstChar(this._serviceName)}MainComponent(page,s_option)
        }


        const ${this._serviceName}_loaded${this._name} : selectors = [
            get${majFirstChar(this._serviceName)}Helpers<string>().arr_selector_join(
                [
                    {selector:Selector.cst_oneProp(classProp,'page_inner',containOp)},
                    {selector:Selector.cst_oneProp(classProp,'row',containOp)},
                    {selector:Selector.cst_oneProp(classProp,'col',containOp)}
                ]
            ),
        ] 

        const page${majFirstChar(this._serviceName)}_fct_isLoaded = page_fct_isLoaded( ${this._serviceName}_loaded${this._name} )

        export const isLoaded_${this._serviceName}Page =  (page:Page) :Promise<boolean>  =>{ 
            return page${majFirstChar(this._serviceName)}_fct_isLoaded( page )

        }` as const 
    }
}