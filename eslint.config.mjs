import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module"
            },
            globals: {
                ...globals.node,
                ...globals.browser
            }
        },
        rules: {
            semi: [1, "always"],
            "no-var": 1,
            "prefer-const": 1,
            "no-const-assign": 1,
            "no-new-object": 1,
            "no-array-constructor": 1,
            "object-shorthand": 1,
            "quote-props": [1, "as-needed"],
            "prefer-object-spread": 1,
            "array-callback-return": 1,
            "no-useless-escape": 1,
            "no-loop-func": 2,
            "default-param-last": 2,
            "space-before-blocks": 1,
            "prefer-arrow-callback": 1,
            "brace-style": [1, "1tbs", { allowSingleLine: true }],
            "arrow-body-style": [1, "as-needed"],
            "implicit-arrow-linebreak": [1, "beside"],
            "no-useless-constructor": 2,
            "no-dupe-class-members": 2,
            "no-duplicate-imports": 2,
            "generator-star-spacing": [1, { before: false, after: true }],
            "dot-notation": 1,
            "no-undef": 2,
            "no-unused-vars": 2,
            "no-nested-ternary": 1,
            "no-unneeded-ternary": 1,
            "no-mixed-operators": 0,
            "nonblock-statement-body-position": 1,
            "no-else-return": 1,
            "spaced-comment": 1,
            indent: ["off"],
            "keyword-spacing": 1,
            "space-infix-ops": 1,
            "no-whitespace-before-property": 1,
            "padded-blocks": [1, "never"],
            "no-multiple-empty-lines": 1,
            "object-curly-spacing": [1, "always"],
            "block-spacing": [1, "always"],
            "func-call-spacing": [1, "never"],
            "key-spacing": [1, { beforeColon: false }],
            "comma-spacing": 1,
            "comma-style": [1, "last"],
            "comma-dangle": [1, "never"],
            "no-new-wrappers": 1,
            "vue/html-indent": 0,
            "vue/html-self-closing": 0,
            "vue/max-attributes-per-line": 0,
            "vue/singleline-html-element-content-newline": 0,
            "vue/multiline-html-element-content-newline": 0
        }
    }
];
