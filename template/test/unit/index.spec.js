"use strict";

const { ServiceBroker } = require("moleculer");
const MyService = require("../../src");

describe("Test MyService", () => {
	const broker = new ServiceBroker({ logger: false });
	const service = broker.createService(MyService);

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	it("should be created", () => {
		expect(service).toBeDefined();
	});

	it("should return with 'Hello Anonymous'", async () => {
		const res = await broker.call("{{serviceName}}.test");
		expect(res).toBe("Hello Anonymous");
	});

	it("should return with 'Hello John'", async () => {
		const res = await broker.call("{{serviceName}}.test", { name: "John" });
		expect(res).toBe("Hello John");
	});
});
