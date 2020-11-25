const path = require("path");
// const modifyVars = require('../src/config/antd.vars');

const webpackFinal = async (config, { configType }) => {
  // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  const oneOfRules = config.module.rules.find((rule) => rule.oneOf !== undefined).oneOf;

  // Add less support
  const cssModuleRule = oneOfRules.find((rule) => rule.test.toString() == /\.module\.css$/);
  oneOfRules.splice(oneOfRules.indexOf(cssModuleRule), 0, {
    test: /\.less$/,
    exclude: /\.module\.less$/,
    use: [
      require.resolve("style-loader"),
      {
        loader: require.resolve("css-loader"),
        options: { importLoaders: 3, sourceMap: true },
      },
      {
        loader: require.resolve("less-loader"),
        options: {
          sourceMap: true,
          lessOptions: {
            // modifyVars,
            javascriptEnabled: true,
          },
        },
      },
    ],
  });
  // console.dir(config.module.rules, {depth: 10});
  // process.exit(1);

  config.resolve.alias["src"] = path.resolve(__dirname, "..", "src/");
  // console.dir(config.resolve.alias);
  // process.exit(1);

  // Return the altered config
  return config;
};

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app"],
  webpackFinal,
};
