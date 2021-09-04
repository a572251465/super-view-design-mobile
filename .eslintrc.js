module.exports = {
  root: true,
  env: {
    node: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js'
      }
    }
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'no-param-reassign': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'no-debugger': 'off'
  }
}
