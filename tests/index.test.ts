import {describe, expect, test} from "bun:test";
import "src";

describe("standardize", () => {
	test('Héllô Wôrld → hello world', () => {
		expect("Héllô Wôrld".standardize()).toBe("hello world");
	});
	test("should keep number", () => {
		expect("1hello world".standardize()).toBe("1hello world");
	})
});

describe("unidecode", () => {
	test("should keep number", () => {
		expect("1hello world".unidecode()).toBe("1hello world");
	});
	test("should remove emoji", () => {
		expect("hello 😄world".unidecode()).toBe("hello world");
	});
});

describe("capitalize", () => {
	test("été ⇒ Été", () =>{
		expect("été".capitalize()).toBe("Été");
	});
	test("hello world → Hello World", () => {
		expect("hello world".capitalize()).toBe("Hello World");
	});
	test("1hello world → 1hello World", () => {
		expect("1hello world".capitalize()).toBe("1hello World");
	});
});

describe('toTitle', () => {
	test('hello world → Hello world', () => {
		expect("hello world".toTitle()).toBe("Hello world");
	});
});

describe("Subtext", () =>{
	test("hello world ⇒ (Hello) ⇒ True", () =>{
		expect("Hello World".subText("Hello")).toBe(true);
	});
	test("discord channel subtext", () =>{
		expect("-# ↪ https://discord.com/channels/1295390060828616961/1295390188229652837/1295390616847472181".subText("-# ↪ https://discord.com/channels/1295390060828616961")).toBe(true);
	});
	test("empty query", () =>{
		expect("Hello World".subText("")).toBe(true);
	});
	test("null query", () =>{
		expect("Hello World".subText(null)).toBe(false);
	});
	test("null ⇒ false", () =>{
		expect("hello".subText(null)).toBe(false);
	});
	test("undef ⇒ false", () =>{
		expect("hello".subText(undefined)).toBe(false);
	});
	test("empty ⇒ true", () =>{
		expect("hello".subText("")).toBe(true);
	});
})
