// vue.config.js

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  ident: 'postcss',
                  plugins: [require('tailwindcss')('./tailwind.config.js')],
                },
              },
            },
          ],
        },
      ],
    },
  },
};
