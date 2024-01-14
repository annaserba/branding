const isProduction = process.env.NODE_ENV === 'production'
const esbuild = require('esbuild');
const contents = `window.React = require('react')
window.ReactDOM = require('react-dom')`

new Promise(async () => {
  await buildReact();
})
async function buildReact() {
    await esbuild.buildSync({
        stdin: {
            contents,
            sourcefile: 'react-build.js',
            loader: 'js',
            resolveDir: __dirname
        },
        define: { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') },
        bundle: true,
        format: 'iife',
        minify: isProduction,
        sourcemap: false,
        target: ['chrome58'],
        outfile: '../../public/react.js',
    })
}