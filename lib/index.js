'use strict';

module.exports.rules = {
  'enforce-slices-when-large-state': require('./rules/enforce-slices-when-large-state'),
  'enforce-state-before-actions': require('./rules/enforce-state-before-actions'),
  'enforce-use-setstate': require('./rules/enforce-use-setstate'),
  'enforce-no-multiple-stores': require('./rules/enforce-no-multiple-stores'),
  'enforce-no-state-mutation': require('./rules/enforce-no-state-mutation'),
  'use-store-selectors': require('./rules/use-store-selectors'),

}

module.exports.configs = {
  recommended: {
    plugins: ['zustand-rules'],
    rules: {
      'zustand-rules/enforce-slices-when-large-state': 'warn',
      'zustand-rules/use-store-selectors': 'error',
      'zustand-rules/no-state-mutation': 'error',
      'zustand-rules/enforce-use-setstate': 'error',
      'zustand-rules/enforce-state-before-actions': 'error'
    }
  }
};