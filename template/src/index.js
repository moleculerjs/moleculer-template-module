/*
 * {{projectName}}
 * Copyright (c) {{year}} {{fullName}} (https://github.com/{{username}}/{{projectName}})
 * MIT Licensed
 */

"use strict";

module.exports = {

	name: "{{serviceName}}",

	/**
	 * Default settings
	 */
	settings: {

	},

	/**
	 * Actions
	 */
	actions: {
		test: {
			params: {
				name: { type: "string", optional: true }
			},
			handler(ctx) {
				return "Hello " + (ctx.params.name || "Anonymous");
			}
		}
	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};