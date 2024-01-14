const path = require('path');
const esbuild = require('esbuild');

esbuild.serve({servedir: path.join(__dirname, '../dist')}, {}).then(ret => console.log(ret));
