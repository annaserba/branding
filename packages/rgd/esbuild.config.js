import esbuild from 'esbuild'
import copyStaticFiles from "esbuild-copy-static-files"

const name = 'rgd';
const enviroments=['desktop','mobile']

enviroments.forEach(async (env) => {
    await esbuild.build({
    entryPoints: [`./src/${env}/gen_${name}.jsx`],
    bundle: true,
    outfile: `../../public/${name}/${env}/${name}.js`,
    metafile: true,
    plugins: [
      copyStaticFiles({
        src: `./src/${env}/img`,
        dest: `../../public/${name}/${env}/img`,
        dereference: true,
      }),
    ]
  });
})


