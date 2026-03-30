"use strict";

const { ServiceBroker } = require("moleculer");
const MyService = require("../../index");

// Create broker
const broker = new ServiceBroker({
	logger: console
});

// Load my service
broker.createService(MyService);

// Start server
broker.start().then(() => {

	// Call action
	broker
		.call("{{serviceName}}.test", { name: "John Doe" })
		.then(broker.logger.info)
		.catch(broker.logger.error);

});
