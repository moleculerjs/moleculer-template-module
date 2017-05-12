"use strict";

let { ServiceBroker } = require("moleculer");

// Create broker
let broker = new ServiceBroker({
	logger: console,
	logLevel: process.env.LOG_LEVEL || "info"
});

// Load my service
broker.loadServices("./services");

// Start server
broker.start().then(() => {

	// Call action
	broker
		.call("test.greeter", { name: "John Doe" })
		.then(broker.logger.info)
		.catch(broker.logger.error);

	broker
		.call("math.add", { a: 5, b: 2 })
		.then(res => broker.logger.info(" 5 + 2 =", res))
		.catch(broker.logger.error);

});

module.exports = broker;