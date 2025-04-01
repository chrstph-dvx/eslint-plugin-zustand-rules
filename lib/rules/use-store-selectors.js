module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Ensure selectors are used with useStore to improve performance.',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.type !== 'Identifier') { return }

        if (node.callee.name.startsWith('use') && node.callee.name.endsWith('Store')) {
          const args = node.arguments;

          if (args.length === 0) {
            context.report({
              node,
              message: 'You should use selectors when calling useStore to improve performance.',
            });
          }

          if (args.length === 1 && args[0].body.type === 'ObjectExpression') {
            context.report({
              node,
              message: 'You should use `shallow` as a second parameter when returning object.'
            })
          }
        }
      }
    };
  }
};
