import { expect, test } from "bun:test";
import "src/index.ts";

test('standardize', () => {
	console.log("Je suis écrit en français, avec plein d'accents relou !".standardize());
	expect("Héllô Wôrld".standardize()).toBe("hello world");
});

