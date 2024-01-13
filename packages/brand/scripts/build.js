const fs = require('fs')
const path = require('path');
const esbuild = require('esbuild');
const reactPlugin = require('./react-plugin');

const isProduction = process.env.NODE_ENV === 'production'
const contents = `window.React = require('react')
window.ReactDOM = require('react-dom')`

new Promise(async () => {
  await buildReact();
  await buildServer();
  await buildClient();
  await buildHtml();
})

async function buildClient() {
  await esbuild.build({
    entryPoints: [path.join(__dirname, '../src/client.tsx')],
    bundle: true,
    outdir: 'dist',
    minify: isProduction,
    define: {'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')},
    plugins: [reactPlugin],
    tsconfig: path.join(__dirname, '../tsconfig.json')
  })
}

async function buildServer() {
  await esbuild.build({
    entryPoints: [path.join(__dirname, '../src/server.tsx')],
    bundle: true,
    outdir: 'dist',
    format: 'cjs',
    define: {'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')},
    tsconfig: path.join(__dirname, '../tsconfig.json')
  })
}

async function buildReact() {
  await esbuild.buildSync({
    stdin: {
      contents,
      sourcefile: 'react-build.js',
      loader: 'js',
      resolveDir: __dirname
    },
    define: {'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')},
    bundle: true,
    format: 'iife',
    minify: isProduction,
    sourcemap: false,
    target: ['chrome58'],
    outfile: './dist/react.js',
  })
}

async function buildHtml() {
  const {render} = require(path.join(__dirname, '../dist/server.js'))
  let html = await fs.readFileSync(path.join(__dirname, '../public/index.html'))
  html = html.toString().replace('<div id="app"></div>', `<div id="app">${render()}</div>`)
  html = html.replace('</body>', '<script src="react.js"></script><script src="client.js"></script></body>')
  await fs.writeFileSync(path.join(__dirname, '../dist/index.html'), html)
}
