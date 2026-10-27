import { describe, expect, it } from "vitest";
import { formatParisTime, trimText } from "./helpers";

describe("trimText", () => {
	it("should return the input if shorter than maxLength", () => {
		expect(trimText("hello", 10)).toBe("hello");
	});

	it("should trim and add ellipsis if longer", () => {
		expect(trimText("hello world this is long", 10)).toBe("hello w...");
	});
});

describe("formatParisTime", () => {
	it("uses Paris summer time (CEST) regardless of the host time zone", () => {
		expect(formatParisTime(new Date("2026-07-01T12:00:00Z"))).toMatch(
			/^2:00:00\sPM CEST$/,
		);
	});

	it("uses Paris winter time (CET)", () => {
		expect(formatParisTime(new Date("2026-01-15T08:30:05Z"))).toMatch(
			/^9:30:05\sAM CET$/,
		);
	});
});
