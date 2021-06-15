const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          // Compiles Sass to CSS
          loader: "sass-loader",
          options: {
            additionalData: `@import "./assets/scss/app.scss";`,
            sassOptions: {
              includePaths: [__dirname, "./assets/**/*"],
            }
          },
      }],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "assets"),
          "~": path.resolve(__dirname, "assets"),  // point these to where you need it to go
        },
      },
    });

    // Return the altered config
    return config;
  },
}
