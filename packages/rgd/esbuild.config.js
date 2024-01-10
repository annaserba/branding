import esbuild from 'esbuild'
import copyStaticFiles from "esbuild-copy-static-files"
import { htmlPlugin } from 'esbuild-html-plugin'

const name = 'rgd';
const enviroments=['desktop','mobile']

enviroments.forEach(async (env) => {
    await esbuild.build({
    entryPoints: [`./src/${env}/gen_${name}.jsx`],
    bundle: true,
    outfile: `../../public/${name}/${env}/${name}.js`,
    metafile: true,
    plugins: [
      htmlPlugin({
        outfile: `index.html`,
        createHeadElements: (outputUrls) => [
          `<meta charset="utf-8" />`,
          `<meta name="viewport" content="width=device-width, initial-scale=1" />`,
          `<link rel="preload" href="/style.css" />`,
        ],
        createBodyElements: (outputUrls) =>
          outputUrls
            .filter((outputUrl) => outputUrl.endsWith(`.js`))
            .map((outputUrl) => `
            <div id='${name}_prod'
              style="max-width: ${env === "desktop"?"1444":"768"}px;
              margin:0 auto;
              width: 100%;
              position: relative;
              border: 1px solid #000;
              overflow: hidden;">
            </div>
            <script src="/${name}/${env}${outputUrl}"></script>`),
      }),
      copyStaticFiles({
        src: `./src/${env}/img`,
        dest: `../../public/${name}/${env}/img`,
        dereference: true,
      }),
    ],
  });
})


