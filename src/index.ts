String.prototype.removeAccents = function () {
	return this.normalize("NFD").replace(/\p{Diacritic}/gu, "");
};

String.prototype.standardize = function (noTrim?: boolean) {
	if (!noTrim) return this.removeAccents().toLowerCase();
	return this.removeAccents().toLowerCase().trim();
};

String.prototype.toTitle = function (toLowerCase?: boolean) {
		const text = toLowerCase ? this.toLowerCase() : this;
		return text.charAt(0).toUpperCase() + text.slice(1);
	};

String.prototype.capitalize = function (toLowerCase?: boolean) {
		const text = toLowerCase ? this.toLowerCase() : this;
		return text.replace(/(^\w{1})|(\s+\w{1})/g, (char: string) => char.toUpperCase());
	};

String.prototype.subText = function (query?: string | null, strict?: boolean) {
	if (query ==null) return false;
	if (strict) return this.standardize() === query.standardize();
	return this.standardize().includes(query.standardize());
};

String.prototype.unidecode = function (keepAccent?: boolean) {
		const emojiRegex = /[\p{Emoji}]/gu;
		const decoded = this.replace(emojiRegex, "").trim();
		if (keepAccent) return decoded;
		return decoded.standardize();
	};

String.prototype.removeBacktick = function () {
	return this.replace(/`/g, "");
};
