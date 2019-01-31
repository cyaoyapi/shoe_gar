const path = require('path');

module.exports = {
	mode: "production",
	entry: {
		polyfill: "babel-polyfill",
		functions:"./functions.js",
		app: "./blog.js"
	},
	output: {
		filename: "[name].bundle.js",
		path:path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude : /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}

			},
			{
				test: /\.css$/,
				use: ["style-loader","css-loader"],
			},
			{
				test: /\.(html)$/,
				use: {
					loader: "html-loader",
					options: {
						attrs: [":data-src"]
					}
				}
			}
			,
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					'url-loader?limit=10000',
					'img-loader'
				]
			}
		]
	}
};