module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
		'vue/setup-compiler-macros': true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended'
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@babel/eslint-parser',
		ecmaVersion: 'latest',
		sourceType: 'module',
		requireConfigFile: false,
		babelOptions: {
			configFile: './babel.config.js'
		}
	},
	plugins: ['vue'],
	rules: {
		'vue/multi-word-component-names': 'off',
		'vue/require-default-prop': 'off',
		'no-unused-vars': 'off',
		'vue/valid-attribute-name': 'off'
	},
	overrides: [{
		files: ['*.vue'],
		parser: 'vue-eslint-parser',
		parserOptions: {
			parser: '@babel/eslint-parser',
			sourceType: 'module'
		}
	}]
}
