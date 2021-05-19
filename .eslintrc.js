module.exports = {
    extends: [
        'airbnb-base/legacy'
    ],
    plugins: [
        'es5'
    ],
    parserOptions: {
        ecmaVersion: 5,
        sourceType: 'script'
    },
    env: {
        node: false,
        browser: true,
        es6: false
    },
    globals: {
        module: true
    },
    rules: {
        'id-length': ['error', {min: 2}],

        'arrow-parens': ['error', 'as-needed'],

        'brace-style': ['error', 'stroustrup'],

        'comma-dangle': ['error', {
            arrays: 'never',
            objects: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'ignore'
        }],

        'func-names': 'off',

        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            CallExpression: {
                arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false
        }],

        'max-len': ['warn', {
            code: 120,
            tabWidth: 4,
            comments: 400
        }],

        'multiline-ternary': ['error', 'always-multiline'],

        'no-bitwise': 'warn',

        'no-console': 'off',

        'no-lonely-if': 'warn',

        'no-param-reassign': ['warn', {
            props: false
        }],

        'no-undefined': 'error',

        'no-underscore-dangle': 'off',

        'no-await-in-loop': 'off',

        'no-useless-return': 'off',
        'no-else-return': 'off',

        'no-void': 'off',

        'object-curly-newline': ['error', {
            ObjectExpression: {minProperties: 5, multiline: true, consistent: true},
            ObjectPattern: {minProperties: 5, multiline: true, consistent: true},
            ImportDeclaration: {minProperties: 5, multiline: true, consistent: true},
            ExportDeclaration: {minProperties: 5, multiline: true, consistent: true}
        }],

        'object-curly-spacing': ['error', 'never'],

        'operator-linebreak': ['error', 'after', {overrides: {'=': 'none'}}],

        'space-before-function-paren': ['error', 'always'],

        'import/no-absolute-path': 'off',

        'no-multiple-empty-lines': ['error', {max: 2, maxBOF: 1, maxEOF: 0}],

        strict: 0
    }
};
