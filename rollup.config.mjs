import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input : 'main.js',
    output: {
        dir: 'out',
        format: 'cjs'
    },
    plugins: [nodeResolve(), commonjs()]
};
