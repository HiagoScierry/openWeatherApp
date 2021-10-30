module.exports = {
  "env": {
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb"
  ],
  "parser": "@typescript-eslint/parser",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "__DEV__": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier",
    "react-hooks",
    "@typescript-eslint"
  ],
  "rules": {
    "operator-linebreak": "off",
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/prop-types": "off",
    "no-undef": "off",
    "react/jsx-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
    "quote-props": "off",
    "no-confusing-arrow": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".tsx"
        ]
      }
    ],
    "import/prefer-default-export": "off",
    "object-curly-newline": "off",
    "no-unused-expressions": "off",
    "no-use-before-define": "off",
    "no-unused-vars": "off",
    "no-shadow": "off",
    "no-useless-return": "off",
    "sort-imports": [
      "error",
      {
        "ignoreDeclarationSort": true
      }
    ],
    "import/order": [
      "error",
      {
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "~/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "@*/**",
            "group": "external",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": [
          "react"
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  }
}
