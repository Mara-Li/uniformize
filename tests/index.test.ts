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
		expect("hello🤖world".unidecode()).toBe("helloworld");
		expect("💻🦇■∎◉◻⌋▰⌈×↪".unidecode()).toBe("■∎◉◻⌋▰⌈×↪");
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
	test("Prénom-nom → Prénom-Nom", () => {
		expect("Prénom-nom".capitalize()).toBe("Prénom-Nom");
	});
	test("1 hello world → 1 Hello World", () => {
		expect("1 hello world".capitalize()).toBe("1 Hello World");
	});
	test("éden bonne-étoile → Éden Bonne-Étoile", () => {
		expect("éden bonne-étoile".capitalize()).toBe("Éden Bonne-Étoile");
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

describe("trim all", () =>{
	test("hello world", () =>{
		expect("hello world".trimAll()).toBe("helloworld");
	});
	test("hello world ", () =>{
		expect("hello world ".trimAll()).toBe("helloworld");
	});
	test(" hello world", () =>{
		expect(" hello world".trimAll()).toBe("helloworld");
	});
	test(" hello world ", () =>{
		expect(" hello world ".trimAll()).toBe("helloworld");
	});
})

describe("decode", () => {
  test("should remove non-alphanumeric characters", () => {
    expect("Hello, World!".decode()).toBe("Hello World");
  });

  test("should keep emojis, spaces, underscores, and hyphens", () => {
    expect("Hello 🤖_World-".decode()).toBe("Hello 🤖_World-");
  });

  test("should remove accents + lowercase if standardize is true", () => {
    expect("Café".decode(false, true)).toBe("cafe");
  });

  test("should keep accents if standardize is false", () => {
    expect("Café".decode(false, false)).toBe("Café");
  });

  test("should not trim if noTrim is true", () => {
    expect("  Hello World  ".decode(true)).toBe("  Hello World  ");
  });

  test("should trim if noTrim is false", () => {
    expect("  Hello World  ".decode()).toBe("Hello World");
  });
});

describe('escapeRegex', () => {
	test("should escape characters", () => {
		expect("Hello.world*".escapeRegex()).toBe("Hello\\.world\\*");
	})
	test("Should be keep as it", ()=>{
		expect("HelloWorld".escapeRegex()).toBe("HelloWorld");
	})
});