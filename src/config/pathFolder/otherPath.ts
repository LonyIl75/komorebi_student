import getCurrentLine from "get-current-line"
import { getDirname,getDistDirname ,getTestDirname} from "./rootPath.js";
import {_getPublicDirName,_getSharedDirName ,_getLogFolderPath,_getErrorLogFile,_getReqLogFile, _getModelsDirName} from "../envVar.js";
import { joinFilePath } from "../../../shared/m_file.js";


export const getLocalTestRessourcePath = () =>{ 
    return joinFilePath(getTestDirname(), "ressource");
}

export const getSharedPath = () =>{ 
    return joinFilePath( getDistDirname(), _getSharedDirName());
};

export const getModelPath = () =>{ 
    return  joinFilePath(getSharedPath(),_getModelsDirName());
};

export const getPublicPath = () =>{ 
    return joinFilePath( getDistDirname(),_getPublicDirName());
}

export const getLogFolderPath = () =>{ 
    return joinFilePath(getDistDirname(),_getLogFolderPath());
}

export const getLogErrorPath = () =>{ 
    return joinFilePath(getLogFolderPath(),_getErrorLogFile());
}

export const getLogReqPath = () =>{ 
    return joinFilePath(getLogFolderPath(),_getReqLogFile());
}

export const getCookiesPath = () =>{ 
    return joinFilePath(getDirname(), "Cookies");
}
