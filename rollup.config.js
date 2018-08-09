// rollup.config.js
import babel from 'rollup-plugin-babel'
import sass from 'rollup-plugin-sass'
import ts from 'rollup-plugin-typescript'

export default [
  // script
  {
    input: 'scripts/index.js',
    output: {
      file: './dist/bundle.js',
      format: 'cjs'
    },
    plugins: [
      ts(),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**'
      })
      // TODO: autoprefixer & postcss
      // sass({
      //   output: './dist/style.css'
      // })
    ]
  }
]
