// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: {
        importHelpers: true,
        isolatedModules: false
      }
    }
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "./test/setup.js",
    "@testing-library/jest-dom/extend-expect"
  ],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$"],
  moduleNameMapper: {
    "@mt/student-exam/(.*)$": "<rootDir>/packages/student-exam/src/$1",
    "@mt/question-template/(.*)$":
      "<rootDir>/packages/question-template/src/$1",
    "@mt/student-remediation/(.*)$":
      "<rootDir>/packages/student-remediation/src/$1",
    "^mock(.*)$": "<rootDir>/mock$1",
    "^src(.*)$": "<rootDir>/src$1",
    "^config(.*)$": "<rootDir>/config$1",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/assetsTransformer.js",
    "\\.(css|less)$": "<rootDir>/assetsTransformer.js"
  },
  verbose: true,
  roots: [process.cwd()]
};
