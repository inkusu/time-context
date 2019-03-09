// リファレンス -> https://jestjs.io/docs/en/configuration.html

module.exports = {
  "moduleFileExtensions": [
    "js",
    "ts",
  ],
  // Indicates whether the coverage information should be collected while executing the test
  coverageDirectory: './coverage',
  // "collectCoverage": true,
  "collectCoverageFrom": [
    "**/src/**/*.ts",
    "!**/node_modules/**",
    "!**/build/**",
    "!**/coverage/**"
  ],
  "transform": {
    "\\.ts$": "ts-jest"
  },
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/build/",
    "/coverage/"
  ]
}