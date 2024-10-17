import {describe, expect, test} from "bun:test";
import "src";

describe("standardize", () => {
	test('simple', () => {
		expect("Héllô Wôrld".standardize()).toBe("hello world");
	});
});

describe("Subtext", () =>{
	test("simple subtext", () =>{
		expect("Hello World".subText("Hello")).toBe(true);
	});
	test("with number", () =>{
		expect("-# ↪ https://discord.com/channels/1295390060828616961/1295390188229652837/1295390616847472181".subText("-# ↪ https://discord.com/channels/1295390060828616961")).toBe(true);
	});
	test("empty query", () =>{
		expect("Hello World".subText("")).toBe(true);
	});
	test("null query", () =>{
		expect("Hello World".subText(null)).toBe(false);
	});
})
