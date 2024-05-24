
import { debug_join, debug_start_with_curLine, debug_with_curLine, debug_with_curLine_isresult } from '@/../shared/m_debug.js';
import debug, { Debugger } from 'debug';
import getCurrentLine from 'get-current-line';
import { getNameModule,getNameDebugAllNameModule } from '@/../shared/str_debug.js';

const name_module :string  = getNameModule("python","scripts_python")
const debug_scripts_python : Debugger = debug(name_module)

import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import type { json_messages } from "@/python/print_debug.js"
import {print_debug} from "@/python/print_debug.js"
import JSON5 from 'json5';
import { getPythonPath } from '@/config/pathFolder/srcPath.js';
import { getBaseFileName, joinFilePath } from '@/../shared/m_file.js';


export const processPythOutput : python_scripts = { 
    main : joinFilePath( getPythonPath(),"main_processPythOutput.py"), 
    lib: joinFilePath( getPythonPath(),"lib_processPythOutput.py") 
} ;

//ALL FEATURES IN PYTHON PATH 
export const translatePythonPath : python_scripts = { 
    main : joinFilePath( getPythonPath(),"translate" , "main_translate.py")
};


export type python_scripts = { main: string , lib?: string };

export class argPython {
    module_path : string ;
    function_name?:string ;
    list_prefix ?: string ;
    list_kwargs ?: string 
    constructor(module_path : string , list_kwargs ?: string  , function_name?:string , list_prefix ?: string ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        this.module_path = module_path;
        this.function_name = function_name;
        this.list_prefix = (list_prefix==undefined? '["debug","err","result"]' :list_prefix);
        this.list_kwargs = list_kwargs;
    }

    
    argPythonToArr = (): string[] =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const arr: string[] = [];
  
    for (const [key , value ] of Object.entries(this)) {
        if (typeof value !=="function" && typeof value =="string" && value != undefined) { /*console.log("DEBUG_ME",getCurrentLine());*/
            arr.push(`--${key}`);
            console.log(`--${key}` + JSON.stringify(value))
            arr.push(value);
        }
    }
  
    return arr;
  };
 };
 export class  execPython { 
    script_path : string  ;
    args : argPython ;
    process : ChildProcessWithoutNullStreams ;
 
    constructor( args : argPython , script_path : string =  processPythOutput.main , process : ChildProcessWithoutNullStreams = null as ChildProcessWithoutNullStreams){ /*console.log("DEBUG_ME",getCurrentLine());*/
        this.script_path = script_path;
        this.args = args;
        this.process = process;
    }

    static cst_fullParam(module_path : string , list_kwargs ?: string  , function_name?:string , list_prefix ?: string , script_path ?: string  ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        return new execPython(  new argPython(module_path , list_kwargs , function_name , list_prefix  ) , script_path );
    }

    getModuleName = ():string =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        return getBaseFileName(this.script_path );
    }
    launch_DebugPython = async () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        console.log("spawn" , [this.script_path, ...this.args.argPythonToArr()])
        try {
            this.process =  spawn('python', [this.script_path, ...this.args.argPythonToArr()]);
        
        }
        catch(err){ /*console.log("DEBUG_ME",getCurrentLine());*/
            console.log(JSON.stringify(err))

        }
        const prefix_messages:json_messages = await this.getPrefixMessages();
        print_debug(this.getModuleName() , prefix_messages); 
    }
    

    
    getPrefixMessages = (): Promise<json_messages> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
        let prefix_messages:json_messages  = { debug: [], err: [], result: [] };
        let cur_data : any = {};
        return new Promise<json_messages>((resolve, reject) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/

        this.process.stdout.on('data', function(data : string ) { /*console.log("DEBUG_ME",getCurrentLine());*/

            console.log("JSONDATA" +data)
            cur_data=JSON5.parse(data);
            console.log("CURDATA" +JSON.stringify(cur_data))
            for (const [key, value] of Object.entries(cur_data)) {
                //@ts-ignore
                prefix_messages[key]=prefix_messages[key].concat(value);
            }
        });
        this.process.stdout.on('close', function() { /*console.log("DEBUG_ME",getCurrentLine());*/
            resolve(prefix_messages);
        });
        this.process.stdout.on('error', (error: Error) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
            reject(error);
          });
        });
    }
    

}





    



/*

import sys
sys.path.append('/path/to/module_folder')  # Add the path to the module folder


*/