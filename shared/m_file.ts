import path from "path";
import fs from "fs";
import { IJson ,getEmptyJson} from "./m_object.js";
import { printError } from "./m_function.js";
import { convertStrToRegexStr } from "./m_regex.js";

const extensionJs = "js" as const

export const concatExtension= <T extends string , Ext extends string  > (str:T,ext:Ext) => (`${str}.${ext}` as const )
export const concatExtensionJs = <T extends string  > (str:T) => concatExtension(str,extensionJs)

export function getFilename(_str:string){
    return _str.replace(/^.*[\\\/]/, '')
  }
  
export function getFilenameWithoutExtension(_str:string){
    return getFilename(_str).replace(/\.[^.]+$/, '');
}


export const getExtFileName = (full_filename :string ):string => {
    return path.extname(full_filename);
}

export const getBaseFileName = (full_filename :string  , withExtension : boolean = false ):string => {
    return withExtension ?  path.basename(full_filename ) : path.basename(full_filename , getExtFileName(full_filename));
}

export const getDirectoryPathFromFilePath = (full_filename :string ):string => {
    return path.dirname(full_filename);
}
 
export const removeExtension = (full_filename :string ):string => {
    return full_filename.replace(/\.[^/.]+$/, "")
}

export function removeDrive(filePath) {
    const regex_drive = new RegExp(`^[a-zA-Z]:${convertStrToRegexStr(path.sep)}`,"g")
    const match = filePath.match(regex_drive) 
    if (match) {
        return filePath.substring(match[0].length);
    } else {
        return filePath;
    }
}

//A FAIRE : typing 
export function pathToJoinCharFileName(filePath , joinChar ='.') {
    let f_path = removeDrive(filePath);
    f_path = removeExtension(f_path);
    f_path = f_path.replace(new RegExp(convertStrToRegexStr(path.sep),"g"),joinChar)
    return f_path;
}

const prefix_file = "file:" as const
type t_prefix_file = typeof prefix_file

export const toPrefixFile = <T extends string>(file_path:T) => {
    return `${prefix_file}${file_path}` as const ;
}

export const toFilePath = <T extends string>(file_path:T) : `${t_prefix_file}//${T}`=> {
    return toPrefixFile(`//${file_path}`);
}

export const joinFilePath = (...paths : string[]):string => {
    return path.join(...paths);
}
//A FAIRE-MATCHERS : ?isinstanceof
export const isValidPathSyntax = (_path :string ):boolean => { 
    const pathRegex = /^(?:[A-Z]:)?[\/\\]{0,2}(?:[.\/\\ ](?![.\/\\\n])|[^<>:"|?*.\/\\ \n])+$/;
    return pathRegex.test(_path);
}

export  const getInvalid_File_Read = ()=> null 
export const isInvalid_File_Read = (data : t_strFile ):boolean => data === getInvalid_File_Read() ? true : false

export  type t_readFileSync_options = {encoding: BufferEncoding;flag?: string;}
export  type t_strFile = ReturnType<typeof getInvalid_File_Read > | string ;


export const mreadFile = ( path_toFeatureFile : string , options:t_readFileSync_options={ encoding: 'utf8' } ):string => { 
    const data = fs.readFileSync(path_toFeatureFile, options)
    return data;
}

export const mwriteFile = ( path_toFeatureFile : string , data:string , options:fs.WriteFileOptions={ encoding: 'utf8' } ) => { 
   return fs.writeFileSync(path_toFeatureFile,data, options)
}

export function mwriteFileExtra(...args: Parameters<typeof mwriteFile>) {
    const file_path = args[0];const dir_path = getDirectoryPathFromFilePath(file_path);
    if(!isFolderExist(dir_path))fs.mkdirSync(dir_path, {recursive: true})
    return mwriteFile(...args)
}

export const isFileExist = (full_path :fs.PathLike ):boolean => {
    return fs.existsSync(full_path)
}

export const isFolderExist = (full_path :fs.PathLike ):boolean => {
    return isFileExist(full_path)
}

export const ifFileExistRetReadData = (full_path :string , options:t_readFileSync_options={ encoding: 'utf8' }  ): t_strFile => {
    //const options : t_readFileSync_options= _options==undefined ? { encoding: 'utf8' } :_options ;  
    const data =isFileExist(full_path) ? fs.readFileSync(full_path, options ) : getInvalid_File_Read();
    return data;
}

export const strFileToJson = (str : ReturnType<typeof ifFileExistRetReadData>  ):IJson => {
    return isInvalid_File_Read(str) ? getEmptyJson() : JSON.parse(str);
}

export const ifFileExistRetReadDataJSON = (full_path :string , options:t_readFileSync_options={ encoding: 'utf8' }  ):IJson => {
    //const options : t_readFileSync_options= _options==undefined ? { encoding: 'utf8' } :_options ;  
    const data =ifFileExistRetReadData(full_path , options ) ;
    return JSON.parse(data );
}


export type t_fileLock = number 
const okLock :t_fileLock = 1
//TODO : 
export const releaseFileLock = (lock:t_fileLock) : void => { return ; }
export const getFileLock = async (fileFullPath : string ) : Promise<t_fileLock> => { return Promise.resolve(okLock) ; }


export type t_functionNeedFile_fileAdrAndLock <T extends  IJson> = (full_fileAddress :string , lock :t_fileLock ) => Promise<T> 
export type t_functionNeedFile_clientIDAndSN <T extends  IJson> = (client_id:string , service_name :string ) => Promise<T>
export type t_functionNeedFile<T extends  IJson> =  (t_functionNeedFile_clientIDAndSN <T>) ;//(t_functionNeedFile_fileAdrAndLock<T> )  ;
  

export abstract class ImFileStream<T extends IJson > {
    file_path!: string;
    
    
    content!: { json?: T; str?: string; };

    static setter<T extends IJson > (obj:ImFileStream<T> , _file_path : string ){
        obj.file_path = _file_path;
        obj.content = {} as {json:T ,str ?: string} ;
    }


    strToContent (content_str : string ) : T {
        return JSON.parse(content_str) as T
    }

    contentToStr (content_json : T ) : string {
        return JSON.stringify(content_json)
    }

    setContent (_str :string ){
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
        }catch(e ){
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
