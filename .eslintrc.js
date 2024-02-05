module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        getNode: true,
        getNodes: true,
        getAttr: true,
        setAttr: true,
        attr: true,
        insertLast: true,
        getCss: true,
        setCss: true,
        css: true,
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars":"off"
    }
}
