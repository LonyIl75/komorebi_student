import getCurrentLine from "get-current-line"
import { getDirname,getDistDirname ,getTestDirname} from "./rootPath.js";
import {_getPublicDirName,_getSharedDirName ,_getLogFolderPath,_getErrorLogFile,_getReqLogFile, _getModelsDirName} from "../envVar.js";
import { joinFilePath } from "../../../shared/m_file.js";


export const getLocalTestRessourcePath = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath(getTestDirname(), "ressource");
}

export const getSharedPath = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath( getDistDirname(), _getSharedDirName());
};

export const getModelPath = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return  joinFilePath(getSharedPath(),_getModelsDirName());
};

export const getPublicPath = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath( getDistDirname(),_getPublicDirName());
}

export const getLogFolderPath = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath(getDistDirname(),_getLogFolderPath());
}

export const getLogErrorPath = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath(getLogFolderPath(),_getErrorLogFile());
}

export const getLogReqPath = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath(getLogFolderPath(),_getReqLogFile());
}

export const getCookiesPath = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath(getDirname(), "Cookies");
}
