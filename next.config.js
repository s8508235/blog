const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const debug = process.env.NODE_ENV !== "production"
module.exports = withPlugins(
    [optimizedImages],
    {
        assetPrefix: !debug ? "/blog/" : "",
    }
);
