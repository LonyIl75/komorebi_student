//TODO refactor with ./src/config/* path 

import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const packageJson = JSON.parse(fs.readFileSync('./package.json',{ encoding: 'utf8', flag: 'r' }));

let sep =packageJson.config.debug_sep
let arr_debug_cmd = []
let debug_cmd =""

let config_json ={} ;

for (var key in packageJson.config) {
    if( key.startsWith("debug") && key !== "debug_sep"){
    arr_debug_cmd = []
      for (var debugFeature of packageJson.config[key].debugFeatures){
          if( debugFeature.functions.length == 0 ) {
              arr_debug_cmd.push([debugFeature.name,"*"].join(sep))
          }
          else{
              arr_debug_cmd =arr_debug_cmd.concat(debugFeature.functions.map((val)=>[debugFeature.name,val].join(sep)))
          }
          
      }
      debug_cmd=arr_debug_cmd.toString()
      
      let script_value = packageJson.scripts[packageJson.config[key].script] 
      packageJson.scripts[key] = debug_embedding(debug_cmd , script_value )

    }else{
        config_json[key] = packageJson.config[key]
    }
   }
   



if( debug_cmd.length > 0)fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

fs.writeFileSync('./src/data/config.ts', "export default " + JSON.stringify(config_json, null, 2) +" as const \n //# sourceMappingURL=config.js.map");

