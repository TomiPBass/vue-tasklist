/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        'no-unused-vars': 'warn',
        'indent': ['warn', 4],
        'vue/html-indent': ['warn', 4],
        'no-unexpected-multiline': 'warn'
    }
};
