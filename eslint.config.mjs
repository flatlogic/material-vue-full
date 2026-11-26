import vue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  ...vue.configs['flat/essential'],
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-components': 'off',
      'vue/valid-v-slot': ['error', { allowModifiers: true }],
    },
  },
];
