const { join } = require("path")
const { pathsToModuleNameMapper } = require("ts-jest")
const { baseUrl, paths } = require("./tsconfig.json").compilerOptions

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
  moduleNameMapper: pathsToModuleNameMapper(paths, {
    prefix: join("<rootDir>", baseUrl),
  }),
}
