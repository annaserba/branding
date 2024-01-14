const fs = require('fs')
const path = require('path');
const esbuild = require('esbuild');
const reactPlugin = require('./react-plugin');
const copyStaticFiles = require("esbuild-copy-static-files")

const isProduction = process.env.NODE_ENV === 'production'


new Promise(async () => {
  const names = ['example', 'rgd'];
  const enviroments = ['desktop', 'mobile']
  names.forEach(async (name) => {
    enviroments.forEach(async (env) => {
      await buildServer(name,env);
      await buildClient(name,env);
      await buildHtml(name,env);
      await buildJson(name,env);
    })
  })
})

async function buildClient(name, env) {
  await esbuild.build({
    entryPoints: [path.join(__dirname, `../src/${name}/${env}/client_${name}.jsx`)],
    bundle: true,
    outdir: `../../public/${name}/${env}`,
    minify: isProduction,
    define: {'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')},
    tsconfig: path.join(__dirname, '../tsconfig.json'),
    plugins: [
        reactPlugin,
        copyStaticFiles({
          src: `./src/${name}/${env}/img`,
          dest: `../../public/${name}/${env}/img`,
          dereference: true,
        }),
      ],
  })
}

async function buildServer(name, env) {
  await esbuild.build({
    entryPoints: [path.join(__dirname, `../src/${name}/${env}/server_${name}.jsx`)],
    bundle: true,
    outdir: `dist/${name}/${env}`,
    format: 'cjs',
    define: {'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')},
    tsconfig: path.join(__dirname, '../tsconfig.json')
  })
}


const style = (env) => {
  return `style="max-width:${env==="desktop"?"1440px":"768px"}; margin:0 auto;width: 100%;position: relative;border: 1px solid;"`
}

async function buildHtml(name, env) {
  const {render, styles} = require(path.join(__dirname, `../dist/${name}/${env}/server_${name}.js`))
  let html = await fs.readFileSync(path.join(__dirname, '../public/index.html'))
  html = html.toString().replace(`</head>`, `${styles()}</head>`)
  html = html.toString().replace(`<div id=""></div>`, `<div id="${name}_prod" ${style(env)}>${render()}</div>`)
  html = html.replace('</body>', `<script async defer src="client_${name}.js"></script></body>`)
  await fs.writeFileSync(path.join(__dirname,`../../../public/${name}/${env}/index.html`), html)
}

async function buildJson(name, env) {
  const { render, styles } = require(path.join(__dirname, `../dist/${name}/${env}/server_${name}.js`))
  const html = `{"css":"${styles().replace(/\n/g,'').replace(/"/g, "'")}","html":"${render().replace(/"/g, "'")}"}`
  await fs.writeFileSync(path.join(__dirname, `../../../public/${name}/${env}/index.json`), html)
}

