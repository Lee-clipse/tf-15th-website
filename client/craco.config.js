const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@common": path.resolve(__dirname, "src/common"),
      "@components": path.resolve(__dirname, "src/component"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@stores": path.resolve(__dirname, "src/stores"),
      "@services": path.resolve(__dirname, "src/services"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
};
