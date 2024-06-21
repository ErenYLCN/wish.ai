// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "eslint:recommended", "plugin:import/recommended"],
  rules: {
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "always", children: "always" },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
