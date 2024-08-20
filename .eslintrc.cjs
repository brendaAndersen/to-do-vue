/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'vue/no-side-effects-in-computed-properties'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
