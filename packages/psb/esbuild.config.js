import esbuild from 'esbuild'
import copyStaticFiles from "esbuild-copy-static-files"

await esbuild.build({
  entryPoints: ['src/psb.tsx'],
  bundle: true,
  outfile: '../../public/psb/psb.js',
  metafile: true,
  plugins: [
    copyStaticFiles({
      src: './src/img',
      dest: '../../public/psb/img',
      dereference: true,
    })
  ]
});
