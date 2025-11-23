import { describe, expect, it } from "vitest";
import { trimText } from "./helpers";

describe("trimText", () => {
	it("should return the input if shorter than maxLength", () => {
		expect(trimText("hello", 10)).toBe("hello");
	});

	it("should trim and add ellipsis if longer", () => {
		expect(trimText("hello world this is long", 10)).toBe("hello w...");
	});
});
