Object.defineProperty(String.prototype, "removeAccents", {
	value: function () {
		return this.normalize("NFD").replace(/\p{Diacritic}/gu, "");
	},
	enumerable: false,
});

Object.defineProperty(String.prototype, "standardize", {
	value: function (noTrim?: boolean) {
		if (!noTrim) return this.removeAccents().toLowerCase();
		return this.removeAccents().toLowerCase().trim();
	},
	enumerable: false,
});

Object.defineProperty(String.prototype, "toTitle", {
	value: function () {
		return this.charAt(0).toUpperCase() + this.slice(1);
	},
	enumerable: false,
});

Object.defineProperty(String.prototype, "capitalize", {
	value: function () {
		return this.replace(/(^\p{L})|(\s\p{L})/giu, (char: string) => char.toUpperCase());
	},
	enumerable: false,
});

Object.defineProperty(String.prototype, "subText", {
	value: function (query?: string | null, strict?: boolean) {
		if (strict) return this.standardize() === query?.standardize();
		return this.standardize().includes(query?.standardize());
	},
	enumerable: false,
});

Object.defineProperty(String.prototype, "unidecode", {
	value: function (keepAccent?: boolean) {
		const emojiRegex = /[\p{Emoji}]/gu;
		const decoded = this.replace(emojiRegex, "").trim();
		if (keepAccent) return decoded;
		return decoded.standardize();
	},
	enumerable: false,
});

Object.defineProperty(String.prototype, "removeBacktick", {
	value: function () {
		return this.replace(/`/g, "");
	},
	enumerable: false,
});