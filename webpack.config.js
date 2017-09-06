var webpack = require('webpack');
const path = require('path');

module.exports = {
	context: __dirname,
	entry: {
		js: './index.js',
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'app.min.js'
	},
	resolve: {
		extensions: ['.js']
	},
	stats: {
        color: true,
		reasons: true
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			},
        }]
    }
};