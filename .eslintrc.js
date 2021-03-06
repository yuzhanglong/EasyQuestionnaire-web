module.exports = {
  'parser': '@typescript-eslint/parser',
  'extends': [
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:lint-md/recommend'
  ],
  overrides: [
    {
      files: ['*.md'],
      parser: 'eslint-plugin-lint-md/src/parser',
      rules: {
        'lint-md/no-long-code': [2, {
          'length': 1000,
          'exclude': []
        }]
      }
    }
  ],
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-unresolved': 'off',
    'no-multiple-empty-lines': 1,
    'import/order': 'warn',
    'max-lines-per-function': [
      'warn',
      {
        'max': 80,
        'skipComments': true,
        'skipBlankLines': true
      }
    ]
  },
  'env': {
    'node': true,
    'browser': false
  },
  'ignorePatterns': [
    'playground',
    'bin',
    'templates'
  ]
}
