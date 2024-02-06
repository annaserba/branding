const esbuild = require('esbuild');
const fs = require('fs')
const path = require('path');
const reactPlugin = require('./react-plugin');
const env = process.env.NODE_ENV
const name = process.env.NODE_NAME

new Promise(async () => {
  console.log(`${env} ${name}`)
  await buildClient(name,env);
})
async function buildClient(name, env) {
  let ctx = await esbuild.context({
    entryPoints: [path.join(__dirname, `../src/${name}/${env}/client_${name}.jsx`)],
    bundle: true,
    outdir: `public/${name}/${env}`,
    minify: false,
    define: { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') },
    tsconfig: path.join(__dirname, '../tsconfig.json'),
    plugins: [
      reactPlugin
    ],
  })

  let { host, port } = await ctx.serve({
    servedir: 'public',
  })
  console.log(`post ${port}`)
}