import pluginVue from 'eslint-plugin-vue'
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import eslintConfigPrettier from 'eslint-config-prettier'
import js from "@eslint/js"

export default [
    ...pluginVue.configs['flat/essential'],
    js.configs.recommended,
    eslintPluginPrettierRecommended,
    eslintConfigPrettier,
    {
      files: ["src/**/*.js"],
      ignores: ["**/*.config.js"]
    },
    {
        files: ["src/**/*.vue"],
        rules: {
            'vue/html-end-tags': 'error',
            'vue/mustache-interpolation-spacing': ['error', 'always']
        }
    },
    {
        rules: {
            'prettier/prettier': ['error', {
                printWidth: 100,
                tabWidth: 2,
                useTabs: false,
                semi: false,
                singleQuote: true,
                trailingComma: 'none',
                bracketSpacing: true,
                arrowParens: 'always',
                proseWrap: 'preserve',
                endOfLines: 'lf',
                singleAttributePerLine: true
            }]
        }
    }
]