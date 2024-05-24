import getCurrentLine from "get-current-line"
import { joinFilePath } from "../../../shared/m_file.js";
import { _getTestDirName } from "../envVar.js";
import { getTestDirname } from "./rootPath.js";

export const getTestScrapingPath = () =>{ /*console.log("DEBUG_ME",getCurrentLine());*/
    return joinFilePath( getTestDirname(), "scraping");
};
