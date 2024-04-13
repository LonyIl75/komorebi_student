import slash from "slash";
import path from "path";

import { joinFilePath } from "@shared/m_file.js";
import { _getOutputDirName, _getSrcDirName , _getTestDirName } from "../envVar.js";
import {nameFile as nameFile_m_debug} from "@shared/m_debug.js"
import {nameFile as nameFile_envVar} from "../envVar.js"
import {nameFile as nameFile_str_debug} from "@shared/str_debug.js"
//Acessors of path relative variables 

const __dirname = (process.platform === 'win32'?slash(path.resolve()) : path.resolve()) ;
const dist_dirname = joinFilePath(__dirname,_getOutputDirName()).replaceAll(/['"]/g, "");

const dev_src_dirname = joinFilePath(__dirname,_getSrcDirName()).replaceAll(/['"]/g, "");
const dev_test_dirname = joinFilePath(__dirname,_getTestDirName()).replaceAll(/['"]/g, "");

const src_dirname = joinFilePath(dist_dirname,_getSrcDirName()).replaceAll(/['"]/g, "");
const test_dirname = joinFilePath(dist_dirname,_getTestDirName()).replaceAll(/['"]/g, "");


console.log("dirname_2",__dirname);
console.log("dist_dirname_2",dist_dirname);
console.log("src_dirname_2",src_dirname);

export const getIgnoredFilesDebug = ():string[]=>[nameFile_m_debug,nameFile_envVar,nameFile_str_debug];

export const getDirname = () : string => __dirname;
export const getDevSrcDirname = () : string => dev_src_dirname;
export const getDevTestDirname = () : string => dev_test_dirname;
export const getDistDirname = () : string => dist_dirname;
export const getSrcDirname = () : string => src_dirname;
export const getTestDirname = () : string => test_dirname;