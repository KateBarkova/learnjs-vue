module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "@vue/prettier", "plugin:vue-libs/recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  plugins: [
    'eslint-plugin'
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6
  }
};