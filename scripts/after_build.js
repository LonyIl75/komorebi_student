//TODO refactor with ./src/config/* path 

import fs from 'fs-extra';
import {getDistDirname} from '../dist/src/config/pathFolder/rootPath.js'
import { getPackageDependencies } from '../dist/src/config/pathFolder/srcPath.js';
import { EXIT_FAILURE } from '../dist/shared/m_error.js';


if(!fs.existsSync(getDistDirname())) {
    console.error("Error: dist folder not found, )please run 'npm run build' before 'npm run after_build'");
    process.exit(EXIT_FAILURE);
}
const packageJson = JSON.parse(fs.readFileSync('./package.json',{ encoding: 'utf8', flag: 'r' }));

let all_dependencies = Object.keys(packageJson.dependencies).concat(Object.keys(packageJson.devDependencies))
all_dependencies = all_dependencies.map((val)=>val.replace("@types/",""))

fs.writeFileSync(getPackageDependencies(), "export default " + JSON.stringify(all_dependencies, null, 2) +"\n //# sourceMappingURL=dependencies.js.map");

console.log("End after_build")