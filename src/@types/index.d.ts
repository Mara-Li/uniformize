interface String {
	/**
	 * Remove accents from a string.
	 * @returns {string}
	 */
	removeAccents(): string;
	/**
	 * Remove accents from a string, standardize, trim and lowercased.
	 * @param trim {boolean} If true, the string will be trimmed.
	 */
	standardize(trim?: boolean): string;
	/**
	 * Capitalize the first letter of a string.
	 */
	toTitle(): string;
	/**
	 * Search for a substring in a string, standardized, trimmed and lowercased.
	 * @param search {string} The substring to search for.
	 * @returns {boolean}
	 */
	subText(query?: string | null, strict?: boolean): boolean;
	/**
	 * Capitalize the first letter of each word in a string.
	 */
	capitalize(): string;
	/**
	 * Remove emoji from a string.
	 */
	unidecode(keepAccent?: boolean): string;
	/**
	 * Remove backtick from a string.
	 */
	removeBacktick(): string;
}