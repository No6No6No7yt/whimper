const path = require('path');

module.exports = {
  webpack: (config) => {
    // Resolves '@' to the root of your project
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
