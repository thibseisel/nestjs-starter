/**
 * @typedef {import("webpack").Configuration} WebpackConfiguration
 */
/**
 * Configure bundling of applications and libraries with Webpack.
 * This function is intended to be called by the NestJS CLI.
 *
 * @param {WebpackConfiguration} defaults Default configuration produced by the
 * NestJS CLI.
 * @param {import("webpack")} webpack Whole webpack module.
 * @returns {WebpackConfiguration} Webpack configuration to be used.
 */
module.exports = (defaults) => defaults
