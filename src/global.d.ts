declare global {
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
		 * @example "hello world".toTitle() // "Hello world"
		 */
		toTitle(): string;
		/**
		 * Search for a substring in a string, standardized, trimmed and lowercased.
		 * @param {string|null} search  The substring to search for.
		 * @param {boolean} strict  If true, the search will be strict (strict equality).
		 * @returns {boolean}
		 */
		subText(query?: string | null, strict?: boolean): boolean;
		/**
		 * Capitalize the first letter of each word in a string.
		 */
		capitalize(): string;
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
}

//biome-ignore lint/style/useExportType: This is a declaration file, no need to export as type.
export {};
