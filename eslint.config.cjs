const globals = require("globals");
const pluginJs = require("@eslint/js");
const tseslint = require("typescript-eslint");
const pluginVue = require("eslint-plugin-vue");
const prettier = require("eslint-config-prettier");

module.exports = [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"], languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        definePageMeta: "readonly",
        useDevice: "readonly"
      }
    },
    rules: {
      "indent": ["error", 4],
      // vue
      "vue/multi-word-component-names": "off", // Отключает правило
      "vue/no-v-text-v-html-on-component": "off",
      "vue/max-attributes-per-line": ["error", {
        "singleline": 4, // Максимум 3 атрибута на одной строке для однострочных тегов
        "multiline": 1  // Для многострочных тегов — не более 1 атрибута на строку
      }],
      "vue/html-indent": ["error", "tab", {
        "baseIndent": 1, // Указывает базовый уровень отступа для вложенных элементов
        "alignAttributesVertically": true, // Выравнивание атрибутов по вертикали
        "ignores": [] // Можно указать атрибуты, которые будут игнорироваться при проверке отступов
      }],
      "vue/multiline-html-element-content-newline": ["error", {
        "allowEmptyLines": false // Запрещает пустые строки перед закрывающим тегом
      }],
      // ts
      "space-infix-ops": ["error", { "int32Hint": false }],
      "space-before-function-paren": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
      "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "no-var": "error", // Запрещать использование var
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "comma-dangle": ["error", "always-multiline"],
      "semi": ["error", "always"],
      "no-undef": "off",
      "object-curly-newline": ["error", {
        "ObjectExpression": {
          "multiline": true, // Объекты должны быть на новой строке
          "minProperties": 2 // Объекты должны быть многострочными, если у них 2 или более свойств
        },
        "ObjectPattern": {
          "multiline": true // Также применяем правило к деструктуризации объектов
      }
      }]
    }
  },
  {
    ignores: [
        "node_modules/*",
        ".nuxt/*",
        "eslint.config.cjs",
        "nuxt.config.ts",
        "tsconfig.json",
        "vite.config.js"
    ]
  }
];
