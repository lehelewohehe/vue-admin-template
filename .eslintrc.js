module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-recommended', // 继承eslint-vue-plugin中的vue3-recommended的rules
    'plugin:@typescript-eslint/recommended',
    'standard', // JavaScript书写规范中的一种
    'prettier', // prettier的规范，目的是防止prettier和eslint其他的rules冲突，当冲突时，以prettier的为准
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    'semi-style': 'error',
    'comma-dangle': 'off',
    'vue/html-self-closing': 'off',
  },
};
