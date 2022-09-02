module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/object-curly-spacing': [2, 'always'],
        'vue/html-closing-bracket-spacing': [
            2,
            {
                selfClosingTag: 'always',
            },
        ],
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: {
                    max: 2,
                },
                multiline: {
                    max: 2,
                },
            },
        ],
        semi: [2, 'always'],
    },
};
