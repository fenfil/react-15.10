const path = require('path');
const extractText = require('extract-text-webpack-plugin');
const html = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src', 'index.jsx')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      containers: path.resolve(__dirname, 'src', 'containers'),
    }
  },
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.sass$/,
				exclude: /node_modules/,
				use: extractText.extract({
					fallback: 'style-loader',
					use: ['css-loader', {loader: 'sass-loader', options: {outputStyle: "compressed"}}]
				})
			}
		]
	},
	plugins: [
		new extractText({filename: 'style.css'}),
		new html({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html'
		})
	]
}
