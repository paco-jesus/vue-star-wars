module.exports = {
    root: true,
    env: {
      node: true,
      jest: true,
    },
    extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
    ],
    globals: {
      _: true,
      axios: true,
      moment: true,
      expect: true,
    },
    rules: {
      'vue/html-closing-bracket-newline': 0,
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: [
            'state',
          ],
        },
      ],
      'import/extensions': ['error', {
        js: 'never',
        vue: 'never',
      }],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
};
