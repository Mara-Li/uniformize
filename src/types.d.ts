interface String {
		/**
		 * Remove accents from a string.
		 * @returns {string}
		 */
		removeAccents(): string;
		/**
		 * Remove accents from a string, standardize, trim and lowercased.
		 * @param noTrim {boolean} If false, the string won't be trimmed.
		 */
		standardize(noTrim?: boolean): string;
		/**
		 * Capitalize the first letter of a string.
		 * @param toLowerCase {boolean} If true, the string will be lowercased first.
		 * @example "hello world".toTitle() // "Hello world"
		 */
		toTitle(toLowerCase?: boolean): string;
		/**
		 * Search for a substring in a string, standardized, trimmed and lowercased.
		 * @param {string} query  The substring to search for.
		 * @param {boolean} strict  If true, the search will be strict (strict equality).
		 * @returns {boolean}
		 */
		subText(query: string, strict?: boolean): boolean;
		/**
		 * Capitalize the first letter of each word in a string.
		 * toLowerCase {boolean} If true, the string will be lowercased first.
		 */
		capitalize(toLowerCase?: boolean): string;
		/**
		 * Remove emoji from a string.
		 * @param {boolean} keepAccent  If true, the accents will be kept.
		 */
		unidecode(keepAccent?: boolean): string;
		/**
		 * Remove backtick from a string.
		 */
		removeBacktick(): string;
}
