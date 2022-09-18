/**
 * @typedef {import("webpack").Configuration} WebpackConfiguration
 */

/**
 * Whether the built application targets a production environment.
 */
const isProduction = process.env.NODE_ENV === "production"

/**
 * Configure bundling of applications and libraries with Webpack.
 * This function is intended to be called by the NestJS CLI.
 *
 * @param {WebpackConfiguration} defaults Default configuration produced by the
 * NestJS CLI.
 * @param {import("webpack")} webpack Whole webpack module.
 * @returns {WebpackConfiguration} Webpack configuration to be used.
 */
module.exports = (defaults) => ({
  ...defaults,
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "source-map" : defaults.devtool,
})
