const { join } = require("path")
const { pathsToModuleNameMapper } = require("ts-jest")
const { baseUrl, paths } = require("./tsconfig.json").compilerOptions

/**
 * @type {import("ts-jest").JestConfigWithTsJest}
 */
module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.ts$": ["ts-jest", { isolatedModules: true }],
  },
  collectCoverageFrom: ["**/*.ts"],
  coverageDirectory: "./coverage",
  testEnvironment: "node",
  roots: ["<rootDir>/libs/", "<rootDir>/apps/"],
  moduleNameMapper: pathsToModuleNameMapper(paths, {
    prefix: join("<rootDir>", baseUrl),
  }),
}
