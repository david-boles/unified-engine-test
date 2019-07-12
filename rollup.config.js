import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'

export default [
	{
		input: 'index.js',
		output: {
			name: 'my_bundle',
			file: 'my_bundle.js',
			format: 'cjs',
		},
		plugins: [
			resolve(),
			babel({
				exclude: ['node_modules/**']
			}),
			commonjs({
			  include: ['node_modules/**'],
			  sourceMap: false
			}),
			json()
		]
	}
];