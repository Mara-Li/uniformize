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
		return text.replace(/(^\p{L}{1})|(\s+\p{L}{1})/gu, (char: string) => char.toUpperCase());
	};

String.prototype.subText = function (query?: string | null, strict?: boolean) {
	if (query ==null) return false;
	if (strict) return this.standardize() === query.standardize();
	return this.standardize().includes(query.standardize());
};

String.prototype.unidecode = function (keepAccent?: boolean) {
		const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]\s*/gu ;
		const decoded = this.replace(emojiRegex, "").trim();
		if (keepAccent) return decoded;
		return decoded.standardize();
	};

String.prototype.removeBacktick = function () {
	return this.replace(/`/g, "");
};
