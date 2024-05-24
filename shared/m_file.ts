import getCurrentLine from "get-current-line"
import path from "path";
import fs from "fs";
import { IJson ,getEmptyJson} from "./m_object.js";
import { printError } from "./m_function.js";
import { convertStrToRegexStr, t_convertStrToRegexStr } from "./m_regex.js";
import MRegExp from "./_regexp.js";
import { t_alphabetMaj, t_strApplyReplaceIfExtends } from "./type.js";

const extensionJs = "js" as const

export const concatExtension= <T extends string , Ext extends string  > (str:T,ext:Ext) => (`${str}.${ext}` as const )
export const concatExtensionJs = <T extends string  > (str:T) => concatExtension(str,extensionJs)

export function getFilename(_str:string){ /*console.log("DEBUG_ME",getCurrentLine());*/
    return _str.replace(/^.*[\\\/]/, '')
  }
  
export function getFilenameWithoutExtension(_str:string){ /*console.log("DEBUG_ME",getCurrentLine());*/
    return getFilename(_str).replace(/\.[^.]+$/, '');
}


export const getExtFileName = (full_filename :string ):string =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return path.extname(full_filename);
}

export const getBaseFileName = (full_filename :string  , withExtension : boolean = false ):string =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return withExtension ?  path.basename(full_filename ) : path.basename(full_filename , getExtFileName(full_filename));
}

export const getDirectoryPathFromFilePath = (full_filename :string ):string =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return path.dirname(full_filename);
}

type _t_removeExtension<T extends string, Acc extends string =""> = T extends `${infer A}.${infer R}` ? A extends string ? _t_removeExtension<R,`${Acc}.${A}`> : never : Acc
type t_removeExtension<T extends string> = T extends `${infer A}.${infer R}` ? _t_removeExtension<R,A> : T
export const removeExtension = < T extends string >(full_filename :T ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return full_filename.replace(/\.[^/.]+$/, "") as t_removeExtension<T>
}

export type t_removeDrive < T extends string > = T extends `${t_alphabetMaj}:${typeof path.sep}${infer R}` ? R : T
export function removeDrive<T extends string>(filePath:T) { /*console.log("DEBUG_ME",getCurrentLine());*/
    const regex_drive = new MRegExp(`^[a-zA-Z]:${convertStrToRegexStr(path.sep)}`,"g")
    const match = filePath.match(regex_drive) 
    let res 
    if (match) { /*console.log("DEBUG_ME",getCurrentLine());*/
        res = filePath.substring(match[0].length);
    } else {
        res = filePath;
    }
    return res as t_removeDrive<T>
}


export type t_pathToJoinCharFileName <T extends string, JoinChar extends string ="." > = t_removeExtension<t_removeDrive<T>> extends infer R ? 
R extends string ? t_strApplyReplaceIfExtends <R ,typeof path.sep , JoinChar> : never : never 
export function pathToJoinCharFileName<T extends string, JoinChar extends string ="." >(filePath : T , joinChar : JoinChar ="." as any ) { /*console.log("DEBUG_ME",getCurrentLine());*/
    const  f_path = removeExtension(removeDrive(filePath));
    return f_path.replace(new MRegExp(convertStrToRegexStr(path.sep),"g"),joinChar) as t_pathToJoinCharFileName<T,JoinChar>
}

const prefix_file = "file:" as const
type t_prefix_file = typeof prefix_file

export const toPrefixFile = <T extends string>(file_path:T) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return `${prefix_file}${file_path}` as const ;
}

export const toFilePath = <T extends string>(file_path:T) : `${t_prefix_file}//${T}`=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return toPrefixFile(`//${file_path}`);
}

export const joinFilePath = (...paths : string[]):string =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return path.join(...paths);
}
//A FAIRE-MATCHERS : ?isinstanceof
export const isValidPathSyntax = (_path :string ):boolean =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ 
    const pathRegex = /^(?:[A-Z]:)?[\/\\]{0,2}(?:[.\/\\ ](?![.\/\\\n])|[^<>:"|?*.\/\\ \n])+$/;
    return pathRegex.test(_path);
}

//A FAIRE: typing all function below 
export  const getInvalid_File_Read = ()=> null 
export const isInvalid_File_Read = (data : t_strFile ):boolean => data === getInvalid_File_Read() ? true : false

export  type t_readFileSync_options = {encoding: BufferEncoding;flag?: string;}
export  type t_strFile = ReturnType<typeof getInvalid_File_Read > | string ;


export const mreadFile = ( path_toFeatureFile : string , options:t_readFileSync_options={ encoding: 'utf8' } ):string =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ 
    const data = fs.readFileSync(path_toFeatureFile, options)
    return data;
}

export const mwriteFile = ( path_toFeatureFile : string , data:string , options:fs.WriteFileOptions={ encoding: 'utf8' } ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ 
   return fs.writeFileSync(path_toFeatureFile,data, options)
}

export function mwriteFileExtra(...args: Parameters<typeof mwriteFile>) { /*console.log("DEBUG_ME",getCurrentLine());*/
    const file_path = args[0];const dir_path = getDirectoryPathFromFilePath(file_path);
    if(!isFolderExist(dir_path))fs.mkdirSync(dir_path, {recursive: true})
    return mwriteFile(...args)
}

export const isFileExist = (full_path :fs.PathLike ):boolean =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return fs.existsSync(full_path)
}

export const isFolderExist = (full_path :fs.PathLike ):boolean =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return isFileExist(full_path)
}

export const ifFileExistRetReadData = (full_path :string , options:t_readFileSync_options={ encoding: 'utf8' }  ): t_strFile =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    //const options : t_readFileSync_options= _options==undefined ? { encoding: 'utf8' } :_options ;  
    const data =isFileExist(full_path) ? fs.readFileSync(full_path, options ) : getInvalid_File_Read();
    return data;
}

export const strFileToJson = (str : ReturnType<typeof ifFileExistRetReadData>  ):IJson =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return isInvalid_File_Read(str) ? getEmptyJson() : JSON.parse(str);
}

export const ifFileExistRetReadDataJSON = (full_path :string , options:t_readFileSync_options={ encoding: 'utf8' }  ):IJson =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    //const options : t_readFileSync_options= _options==undefined ? { encoding: 'utf8' } :_options ;  
    const data =ifFileExistRetReadData(full_path , options ) ;
    return JSON.parse(data );
}


export type t_fileLock = number 
const okLock :t_fileLock = 1
//TODO : 
export const releaseFileLock = (lock:t_fileLock) : void =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ return ; }
export const getFileLock = async (fileFullPath : string ) : Promise<t_fileLock> =>{ /*console.log("DEBUG_ME",getCurrentLine());*/ return Promise.resolve(okLock) ; }


export type t_functionNeedFile_fileAdrAndLock <T extends  IJson> = (full_fileAddress :string , lock :t_fileLock ) => Promise<T> 
export type t_functionNeedFile_clientIDAndSN <T extends  IJson> = (client_id:string , service_name :string ) => Promise<T>
export type t_functionNeedFile<T extends  IJson> =  (t_functionNeedFile_clientIDAndSN <T>) ;//(t_functionNeedFile_fileAdrAndLock<T> )  ;
  

export abstract class ImFileStream<T extends IJson > {
    file_path!: string;
    
    
    content!: { json?: T; str?: string; };

    static setter<T extends IJson > (obj:ImFileStream<T> , _file_path : string ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        obj.file_path = _file_path;
        obj.content = {} as {json:T ,str ?: string} ;
    }


    strToContent (content_str : string ) : T {
        return JSON.parse(content_str) as T
    }

    contentToStr (content_json : T ) : string {
        return JSON.stringify(content_json)
    }

    setContent (_str :string ){ /*console.log("DEBUG_ME",getCurrentLine());*/
        this.content.str = _str;
        this.content.json = this.strToContent(_str);
    }

    read ?: () => Promise<string> ;
    readSync() :string {
        this.setContent(mreadFile(this.file_path,{ encoding: 'utf8', flag: 'r' }));
        return this.content.str as string; 
    }

    write ?: (content : string ) => Promise<void> ;

    jsonWriteSync (json: T ): void  {
        return this.writeSync(this.contentToStr(json))
    }

    writeSync (new_file_str: string= this.getContent() ): void  {
        try{
            mwriteFile(this.file_path, new_file_str);
            this.setContent(new_file_str); 
        }catch(e ){ /*console.log("DEBUG_ME",getCurrentLine());*/
            printError(this,e)
            throw e
        }

    }


    getContent() : string {
        if(this.content == undefined) this.readSync()
        return this.content as string
    }
    getContentJson() : T {
        return JSON.parse(this.getContent())
    }
}
