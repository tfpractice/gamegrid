import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import nodeResolve from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import visualizer from 'rollup-plugin-visualizer';

export default {
    entry: 'src/index.js',
    dest: 'dist/bundle.es6.js',
    format: 'es',
    moduleId: 'game-grid',
    moduleName: 'game-grid',
    exports: 'named',
    external: [ 'graph-curry', 'fenugreek-collections' ],
    sourceMap: true,
    plugins: [
      progress({ clearLine: false, }),
      filesize(),
      nodeResolve(),
      commonjs(),
      visualizer({ filename: 'stats.es6.html', }),
      babel({
        exclude: 'node_modules/**',
        plugins:  [ 'external-helpers' ],
      }), ],
};
