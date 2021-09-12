// import the plugins for Rollup
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/pkg.main',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [nodeResolve(), commonjs(), typescript(), terser()],
  external: ['react', 'react-dom', 'fs'],
};