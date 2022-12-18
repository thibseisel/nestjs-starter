import { join } from "path"
import { JestConfigWithTsJest, pathsToModuleNameMapper } from "ts-jest"

import * as tsconfig from "./tsconfig.json"
const { baseUrl, paths } = tsconfig.compilerOptions

const config: JestConfigWithTsJest = {
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
export default config
