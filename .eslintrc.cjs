/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'vue/no-side-effects-in-computed-properties'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
