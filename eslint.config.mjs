'use strict';

import configStandard from 'eslint-config-standard';
import configStandardJSX from 'eslint-config-standard-jsx';
import globals from 'globals';
import parserTypeScript from '@typescript-eslint/parser';
import pluginEtc from 'eslint-plugin-etc';
import pluginFunctional from 'eslint-plugin-functional';
import pluginImport from 'eslint-plugin-import';
import pluginJSDoc from 'eslint-plugin-jsdoc';
import pluginJSXAccessibility from 'eslint-plugin-jsx-a11y';
import pluginNode from 'eslint-plugin-n';
import pluginPromise from 'eslint-plugin-promise';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginRxJS from 'eslint-plugin-rxjs';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

/** @type {Partial<import('@types/eslint/rules').ESLintRules> & Record<string, 0 | 1 | 2 | 'off' | 'warn' | 'error' | Array>} */
const jsRules = {
    'array-bracket-spacing': 'off',
    'arrow-body-style': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'class-methods-use-this': 'off',
    curly: [
        'error',
        'multi'
    ],
    'dot-notation': 'off',
    'generator-star-spacing': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-unresolved': 'error',
    indent: [
        'error',
        4,
        {
            SwitchCase: 1
        }
    ],
    'jsdoc/require-jsdoc': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-quotes': [
        'error',
        'prefer-double'
    ],
    'keyword-spacing': [
        'error',
        {
            after: false,
            before: true,
            overrides: {
                case: {
                    after: true
                },
                const: {
                    after: true
                },
                default: {
                    after: true
                },
                else: {
                    after: true
                },
                from: {
                    after: true
                },
                import: {
                    after: true
                },
                return: {
                    after: true
                },
                try: {
                    after: true
                }
            }
        }
    ],
    'lines-around-comment': 'off',
    'max-len': 'off',
    'multiline-ternary': 'off',
    'no-case-declarations': 'off',
    'no-confusing-arrow': 'off',
    'no-duplicate-imports': 'error',
    'no-multiple-empty-lines': [
        'error',
        {
            max: 2,
            maxBOF: 0,
            maxEOF: 1
        }
    ],
    'no-undefined': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'object-shorthand': 'error',
    'padding-line-between-statements': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    quotes: [
        'error',
        'single',
        {
            allowTemplateLiterals: true,
            avoidEscape: true
        }
    ],
    'react/jsx-closing-bracket-location': [
        'error',
        'after-props'
    ],
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-first-prop-new-line': [
        'error',
        'never'
    ],
    'react/jsx-handler-names': 'off',
    'react/jsx-indent': [
        'error',
        4,
        {
            checkAttributes: true,
            indentLogicalExpressions: true
        }
    ],
    'react/no-unknown-property': 'off',
    'react/react-in-jsx-scope': 'off',
    'rest-spread-spacing': 'error',
    semi: [
        'error',
        'always'
    ],
    'space-before-function-paren': [
        'error',
        {
            anonymous: 'never',
            asyncArrow: 'always',
            named: 'never'
        }
    ],
    'spaced-comment': 'off',
    strict: 'off',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error'
};
/** @type {Record<string, 0 | 1 | 2 | 'off' | 'warn' | 'error' | Array>} */
const tsRules = {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off'
};

// noinspection JSUnresolvedVariable
/** @type {import('eslint/lib/config/flat-config-array').FlatConfigArray} */
const config = [
    {
        ignores: [
            '**/node_modules/**/*.cjs',
            '**/node_modules/**/*.js',
            '**/node_modules/**/*.jsx',
            '**/node_modules/**/*.mjs',
            '**/node_modules/**/*.ts',
            '**/node_modules/**/*.tsx',
            'node_modules/**/*.cjs',
            'node_modules/**/*.js',
            'node_modules/**/*.jsx',
            'node_modules/**/*.mjs',
            'node_modules/**/*.ts',
            'node_modules/**/*.tsx'
        ]
    },
    ...compat.extends('eslint'),
    configStandard,
    configStandardJSX,
    pluginTypeScript.configs.recommended,
    pluginTypeScript.configs['recommended-requiring-type-checking'],
    pluginEtc.configs.recommended,
    pluginFunctional.configs.recommended,
    pluginFunctional.configs['external-typescript-recommended'],
    pluginImport.configs.recommended,
    pluginImport.configs.react,
    pluginImport.configs.typescript,
    pluginJSDoc.configs.recommended,
    pluginJSXAccessibility.configs.recommended,
    pluginNode.configs.recommended,
    pluginPromise.configs.recommended,
    pluginReact.configs.recommended,
    pluginReact.configs['jsx-runtime'],
    pluginReactHooks.configs.recommended,
    pluginRxJS.configs.recommended,
    {
        files: [
            '**/*.cjs',
            '**/*.js',
            '**/*.jsx',
            '**/*.mjs',
            '**/*.ts',
            '**/*.tsx'
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                ...globals.browser,
                ...globals.es2015,
                ...globals.es2017,
                ...globals.es2020,
                ...globals.es2021,
                ...globals.es5
            },
            sourceType: 'module'
        },
        plugins: [
            pluginEtc,
            pluginFunctional,
            pluginImport,
            pluginJSDoc,
            pluginJSXAccessibility,
            pluginNode,
            pluginPromise,
            pluginReact,
            pluginReactHooks,
            pluginRxJS,
            pluginTypeScript
        ],
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': [
                    '.ts',
                    '.tsx'
                ]
            },
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json'
                }
            },
            propWrapperFunctions: [
                'forbidExtraProps',
                {
                    object: 'Object',
                    property: 'freeze'
                },
                {
                    exact: true,
                    property: 'forbidExtraProps'
                }
            ],
            react: {
                createClass: 'createReactClass',
                flowVersion: '0.53',
                fragment: 'Fragment',
                pragma: 'React',
                version: 'detect'
            }
        }
    },
    {
        files: [
            '**/*.cjs',
            '**/*.js',
            '**/*.jsx',
            '**/*.mjs'
        ],
        rules: jsRules
    },
    {
        files: [
            '**/*.ts',
            '**/*.tsx'
        ],
        languageOptions: {
            parser: parserTypeScript,
            /** @type {import('@typescript-eslint/types').ParserOptions} */
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                ecmaVersion: 'latest',
                project: './tsconfig.json',
                sourceType: 'module'
            }
        },
        rules: {
            ...jsRules,
            ...tsRules
        }
    }
];

export default config;
