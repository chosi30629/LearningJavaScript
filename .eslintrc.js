module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            0,
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            0,
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off"
    }
};