import { type Configuration as WebpackConfiguration } from "webpack"

/**
 * Whether the built application targets a production environment.
 */
const isProduction = process.env.NODE_ENV === "production"

/**
 * Configure bundling of applications and libraries with Webpack.
 * This function is intended to be called by the NestJS CLI.
 *
 * @param defaults Default configuration produced by the NestJS CLI.
 * @param webpack Whole webpack module.
 * @returns Webpack configuration to be used.
 */
export default (defaults: WebpackConfiguration): WebpackConfiguration => ({
  ...defaults,
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "source-map" : defaults.devtool,
})
