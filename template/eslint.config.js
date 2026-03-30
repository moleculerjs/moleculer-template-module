"use strict";

const js = require("@eslint/js");
const globals = require("globals");
const security = require("eslint-plugin-security");

module.exports = [
	js.configs.recommended,
	security.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.commonjs,
				...globals.jest
			},
			ecmaVersion: 2024,
			sourceType: "commonjs"
		},
		rules: {
			quotes: ["warn", "double"],
			semi: ["error", "always"],
			"no-var": ["error"],
			"no-console": ["warn"],
			"no-unused-vars": ["warn"],
			"no-trailing-spaces": ["error"],
			"security/detect-object-injection": ["off"],
			"security/detect-non-literal-require": ["off"],
			"security/detect-non-literal-fs-filename": ["off"],
			"object-curly-spacing": ["warn", "always"]
		}
	}
];
