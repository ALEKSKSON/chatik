module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'prettier'],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
    },
}