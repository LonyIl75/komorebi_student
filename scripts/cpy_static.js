//TODO refactor with ./src/config/* path 

import fs from 'fs-extra';
fs.copySync('test/ressource', 'dist/test/ressource');
fs.copySync('public', 'dist/public');
fs.copySync('src/views', 'dist/src/views');

const packageJson = JSON.parse(fs.readFileSync('./package.json',{ encoding: 'utf8', flag: 'r' }));
