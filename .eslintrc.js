module.exports = {
  root: true,
  extends: [
    '@react-native-community', // This is the standard config for React Native
    'plugin:@typescript-eslint/recommended', // Adds TypeScript-specific rules
    'react-app', // If you're using Create React App
  ],
  parser: '@typescript-eslint/parser', // Uses TypeScript-aware parser
  plugins: ['@typescript-eslint'], // Enables TypeScript plugin
  settings: {
    react: {
      version: 'detect', // Automatically detects React version
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
