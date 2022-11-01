module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended"
    ],
    "parserOptions": {
        "parser": "@babel/eslint-parser"
    },
    "rules": {
        "vue/multi-word-component-names": ["error", { //이름 한단어로 짓지말라는거 없애기
            "ignores": ['Main', "Login"]
        }]
    }
}