
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';

import pkg from './package.json';

const config = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
      name: 'Wasabi',
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      name: 'Wasabi',
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      name: 'Wasabi',
    },
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
  ],
  plugins: [
    peerDepsExternal(),
    postcss({ extract: true, plugins: [autoprefixer] }),
    babel({ exclude: 'node_modules/**', runtimeHelpers: true }),
    localResolve(),
    resolve(),
    commonjs(),
    filesize(),
  ],
};

export default config;
