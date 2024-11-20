import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: false,
    quotes: 'single'
  },
  yaml: false
}, {
  rules: {
    'no-console': ['warn'],
    'antfu/no-top-level-await': ['off'],
    'node/prefer-global/process': ['off'],
    'node/no-process-env': ['error'],
    'style/comma-dangle': ['error', 'never'],
    'style/object-curly-spacing': ['error', 'never'],
    'antfu/top-level-function': ['off']
  }
})
