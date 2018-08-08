// rollup.config.js
import babel from 'rollup-plugin-babel'
import sass from 'rollup-plugin-sass'

export default [
  // script
  {
    input: 'scripts/index.js',
    output: {
      file: './dist/bundle.js',
      format: 'cjs'
    },
    plugins: [
      babel({
        runtimeHelpers: true,
        include: 'scripts/**',
        exclude: 'node_modules/**'
      }),
      // TODO: autoprefixer & postcss
      sass({
        output: './dist/style.css'
      })
    ]
  }
]
