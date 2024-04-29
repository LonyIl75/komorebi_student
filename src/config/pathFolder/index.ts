import { join_underscore_lowercase } from '@shared/m_string.js';
import { joinFilePath } from '@shared/m_file.js';

import { convertStrToRegexStr } from '@shared/m_regex.js';
import {t_enum_level_0, t_repertory_category, t_repertory_category_database, t_repertory_category_scrapingService} from './enum_path.js';

import * as otherPath from './otherPath.js';
import * as srcPath from './srcPath.js';
import * as testPath from './testPath.js';
import { t_strRegex } from '@shared/_regexp.js';



//repertory_root (?category) filename (?category) feature_debugged_name

const rest_file = "/*"
type t_category_path = {[k in t_strRegex ] : string }

const category_path_routes: t_category_path = {
	//#ADD NEW SERVICE HERE
    [convertStrToRegexStr(joinFilePath(srcPath.getScrapingServicePath(t_enum_level_0.routes),t_repertory_category_scrapingService.MainService)+rest_file)] :join_underscore_lowercase(t_enum_level_0.routes,t_repertory_category_scrapingService.MainService),
    [convertStrToRegexStr(joinFilePath(srcPath.getScrapingServicePath(t_enum_level_0.routes),t_repertory_category.class)+rest_file)] :join_underscore_lowercase(t_enum_level_0.routes,t_repertory_category.class),
    
}

const category_path_service_database: t_category_path = {
   //#ADD NEW SERVICE HERE
}


const category_path_service_controller: t_category_path = {

	//#ADD NEW SERVICE HERE
    [convertStrToRegexStr(joinFilePath(srcPath.getScrapingServicePath(t_enum_level_0.controller),t_repertory_category_scrapingService.MainService)+rest_file)] :join_underscore_lowercase(t_enum_level_0.controller,t_repertory_category_scrapingService.MainService),
    [convertStrToRegexStr(joinFilePath(srcPath.getScrapingServicePath(t_enum_level_0.controller),t_repertory_category.class)+rest_file)] :join_underscore_lowercase(t_enum_level_0.controller,t_repertory_category.class)
}


const category_path:t_category_path = {
    ...category_path_routes,
    ...category_path_service_database,
    ...category_path_service_controller

}


const df_id_debug = "debug"

export const getCategoryDebugFromPath = (str_path :string ,json : t_category_path= category_path  ) :string|"debug" => {
    let regex : RegExp ;
    let found : RegExpExecArray ;
    for(const key_str_regex in json){
        regex = new RegExp(key_str_regex)
            if((found=regex.exec(str_path))) {
                return json[key_str_regex]
            }
    }
    return df_id_debug
}