import typescript from '@rollup/plugin-typescript';

const production = false;
import _output from './output.js';

export default {
    input: 'src/database/scraping-services/index.ts',
    output: {
      sourcemap: !production,
      file: _output.file,
      format: 'esm',
    },
    plugins: [
      typescript({
          sourceMap: !production,
          inlineSources: !production
      })
    ]
  };