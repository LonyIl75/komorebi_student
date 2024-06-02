import { getBaseFileName } from "@shared/m_file.js";
export const nameFile = "envVar"//TODO = getBaseFileName(__filename)


import dotenv from "dotenv";
dotenv.config();


//Accessor of env variables

export const c_clientBackendBaseUrl :"http://localhost:5172"  = "http://localhost:5172";
export type t_clientBackendBaseUrl  = typeof c_clientBackendBaseUrl ;


export const _getPort = ():number => parseInt(process.env.PORT);
export const _getIsLocal = ():boolean => process.env.IS_LOCAL === "true" ;
export const _getClientBackendBaseUrl = ():string => process.env.CLIENT_BACKEND_BASE_URL ;
export const _getClientFrontendBaseUrl = ():string => process.env.CLIENT_FRONTEND_BASE_URL;
export const _getLogFolderPath = ():string => process.env.LOG_FOLDER_PATH;
export const _getErrorLogFile = ():string => process.env.ERROR_LOG_FILE;
export const _getReqLogFile = ():string => process.env.REQ_LOG_FILE;
export const _getAccessTokenSecret = ():string => process.env.ACCESS_TOKEN_SECRET;
export const _getRefreshTokenSecret = ():string => process.env.REFRESH_TOKEN_SECRET;
export const _getOutputDirName = ():string => process.env.OUTPUT_DIR_NAME;
export const _getSrcDirName = ():string => process.env.SRC_DIR_NAME;
export const _getSharedDirName = ():string => process.env.SHARED_DIR_NAME;
export const _getTestDirName = ():string => process.env.TEST_DIR_NAME;
export const _getPublicDirName = ()  => process.env.PUBLIC_DIR_NAME;
export const _getDependenciesFileName = ():string => process.env.DEPENDENCIES_FILE_NAME || "dependencies.js";
export const _getModelsDirName = ():string => process.env.MODELS_DIR_NAME;
export const _getFolderHttpCert = () => process.env.HTTPCERT_FOLDER;
export const _getHttpCert = ()  => process.env.HTTPCERT_FILE ;
export const _getHttpKeyCert = ()  => process.env.HTTPCERT_KEY_FILE;

export const _getMongoDBSuffix = ():string => process.env.MONGO_URL_SUFFIX || "retryWrites=true&w=majority"

export const _getMongoDBClusterKOBUrl = ():string => process.env.MONGO_CLUSTER_KOB_URL;
export const _getMongoDBClusterKOBSuffix = ():string => process.env.MONGO_URL_KOB_SUFFIX || _getMongoDBSuffix(); 

//#ADD NEW SERVICE HERE

export const  _getLespepitestechDatabaseName =  ():string => process.env.DATABASE_MONGO_LESPEPITESTECH;
export const  _getEntreprise_DatabaseName =  ():string => process.env.DATABASE_MONGO_MDSCANDIDATURE;
export const  _getForinovDatabaseName =  ():string => process.env.DATABASE_MONGO_FORINOV;