module.exports = {
	mode: 'production',
	target: 'node',
	entry: './index.js',
	module: {
		rules: [
			{
				test: /\.svelte$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						dev: false,
						immutable: true,
						generate: 'ssr',
						emitCss: false,
						hydratable: true
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