/**
 * @type import("jest").Config
 */
module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "./coverage",
  testEnvironment: "node",
  roots: ["<rootDir>/libs/", "<rootDir>/apps/"],
  moduleNameMapper: {
    "^@libs/core(|/.*)$": "<rootDir>/libs/core/src/$1",
  },
}
