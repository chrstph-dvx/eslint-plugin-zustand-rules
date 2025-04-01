const { RuleTester } = require('eslint');
const rule = require('../lib/rules/use-store-selectors');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
});
ruleTester.run('use-store-selectors', rule, {
  valid: [
    'count = useStore(state => state.count);',
    'count = useCountStore(state => state.count);',
    'const { count, increment } = useStore(state => ({ count: state.count, increment: state.increment }), shallow);',
    'const { count, increment } = useCountStore(state => ({ count: state.count, increment: state.increment }), shallow);'
  ],
  invalid: [
    {
      code: 'count = useStore();',
      errors: [{ message: 'You should use selectors when calling useStore to improve performance.' }]
    },
    {
      code: 'count = useCountStore();',
      errors: [{ message: 'You should use selectors when calling useStore to improve performance.' }]
    },
    {
      code: 'count = useStore(state => ({ count: state.count }));',
      errors: [{ message: 'You should use `shallow` as a second parameter when returning object.' }]
    },
    {
      code: 'count = useCountStore(state => ({ count: state.count }));',
      errors: [{ message: 'You should use `shallow` as a second parameter when returning object.' }]
    }
  ]
});
