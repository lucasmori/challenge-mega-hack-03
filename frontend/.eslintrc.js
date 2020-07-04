module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier/@typescript-eslint",
    'prettier/react',
    'prettier',

  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        'tsx': 'never'
      }
    ],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['jsx', 'js', 'tsx'] }
    ],
    'import/prefer-default-export': 'off'
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
};
