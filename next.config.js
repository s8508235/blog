module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    loader: 'imgix',
    path: 'https://s8508235.github.io/blog',
  },
};
