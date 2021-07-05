const path = require('path');
const NodeExternals = require('webpack-node-externals');

module.exports = {
	mode: 'production',
	target: 'node',
	entry: './index.js',
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		}
	},
	externals: [NodeExternals()],
	module: {
		rules: [
			{
				test: /\.svelte$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						compilerOptions: {
							dev: false,
							immutable: true,
							generate: 'ssr',
							css: false,
							hydratable: true
						}
					}
				}
			},
			{
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false
				}
			}
		]
	}
};