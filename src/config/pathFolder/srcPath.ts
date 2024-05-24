import getCurrentLine from "get-current-line"
import { joinFilePath } from "@/../shared/m_file.js";
import { getDevSrcDirname, getDirname, getSrcDirname } from "./rootPath.js";
import { _getDependenciesFileName } from "../envVar.js";
import { join_underscore, join_hyphen_lowercase, majFirstChar } from "@shared/m_string.js";
import { t_enum_level_0, t_repertory_category, t_repertory_category_database, t_repertory_category_scrapingService } from "./enum_path.js";
import { toLocalOrNot } from "@shared/routePath.js";

export const str_scraping = "scraping"
export const str_scrapingService = join_hyphen_lowercase(str_scraping,t_repertory_category_scrapingService.Services)
const joinPathScrapingService = (path : string) => joinFilePath(path,str_scrapingService)
const joinPathServices = (path : string) => joinFilePath(path,t_repertory_category_scrapingService.Services)


export const getViewsPath = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath( getSrcDirname(), "views");
};

const _h_isDev = (isDev : boolean = false) => isDev ? getDevSrcDirname() : getSrcDirname()

export const getScrapingServicePath = (enum_src_type : t_enum_level_0 = t_enum_level_0.controller,isDev : boolean = false ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    const path =  joinFilePath( _h_isDev(isDev),enum_src_type )
    if(path === undefined) throw new Error("enum_src_type not found")
    return joinPathScrapingService( path);
};


export const getScrapingServicePathServices = (enum_src_type ?: t_enum_level_0 ,isDev?: boolean ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinPathServices( getScrapingServicePath(enum_src_type,isDev));
};

export const getUtilsScraping = (isDev?: boolean ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath(_h_isDev(isDev),t_repertory_category.utils)
};


export const getScrapingHelpersPath = (isDev?: boolean ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath( getUtilsScraping(isDev),str_scraping);
};

export const getPathPageParsing = (isDev?: boolean ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath( getScrapingHelpersPath(isDev), "PageParsing");
};

const getPathDatabaseScrapingServices = (isDev?: boolean ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return getScrapingServicePath(t_enum_level_0.database,isDev)
}

const getPathDatabaseScrapingServicesS = (service_name : string,isLocal : boolean, isDev?: boolean  ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return  joinFilePath(joinPathServices(getPathDatabaseScrapingServices(isDev)),/*majFirstChar(*/toLocalOrNot(isLocal,service_name)/*)*/)
}


export const getPathSchemaPrisma =(service_name : string ,isLocal : boolean,isDev?: boolean) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath( getPathDatabaseScrapingServicesS(service_name,isLocal,isDev),t_repertory_category_database.Schema);
}

export const getPathServiceSchemaPrisma =(service_name : string ,isLocal : boolean,isDev?: boolean , isRaw :boolean = false) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath( getPathSchemaPrisma(service_name,isLocal,isDev),(isRaw ? "_" :"" )+"prisma" );
}

export const getDevPathClientPrisma =( service_name : string,isLocal : boolean,isDev?: boolean) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath( getPathServiceSchemaPrisma(service_name,isLocal,isDev),"Client");
}

export const getPathServiceClientPrisma =(service_name : string ,isLocal : boolean,isDev?: boolean) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath( getDevPathClientPrisma(service_name,isLocal,isDev),/*majFirstChar(*/toLocalOrNot(isLocal,service_name)/*) */);
}


export const getPathServiceLocalDb = (service_name : string ) =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath(getDirname(),"db",/*majFirstChar(*/service_name/*)*/)
}

//for dynamic import 
export const getConfigPath = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath( getSrcDirname() , t_enum_level_0.config);
};

export const getPackageDependencies = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath(getConfigPath(),_getDependenciesFileName());
}

export const getPythonPath =()=>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath(getSrcDirname(), t_enum_level_0.python);
}

