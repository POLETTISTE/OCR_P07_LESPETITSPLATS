module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    "eqeqeq": "warn",
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "multiline-ternary": ["warn", "always-multiline"],
    "no-undef": "off",
    "no-unused-vars": "off",
  }
};
