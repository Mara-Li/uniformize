# Uniformize

Got bored because we should be able to uniformize quickly string without a function, and I made this.

It extends the `String` Prototype with different methods to uniformize strings and compare them.

## Installation

```bash
npm install uniformize
bun install uniformize
yarn add uniformize
pnpm add uniformize
```

## Usage

As already said, it extends the `String` prototype, so you can use it like this:

```ts
import 'uniformize';

const str = "Je suis écrit en français, avec plein d'accents relou !";
const uniformized = str.standardize();
// uniformized === 'je suis ecrit en francais, avec plein d'accents relou !'
```

## Methods
### `removeAccents(): string`
Removes accents from a string.

**Example:**
```javascript
const str = "Café";
const result = str.removeAccents();
console.log(result); // "Cafe"
```

### `standardize(trim?: boolean): string`
Removes accents from a string, standardizes it (lowercase), and optionally trims it.

- **trim** (optional): If `true`, the string will be trimmed.

**Example:**
```javascript
const str = "  Café au lait  ";
const result = str.standardize(true);
console.log(result); // "cafe au lait"
```

### `toTitle(): string`
Capitalizes the first letter of a string.

**Example:**
```javascript
const str = "hello world";
const result = str.toTitle();
console.log(result); // "Hello world"
```

### `subText(query?: string | null, strict?: boolean): boolean`
Searches for a substring within a string, standardizes, trims, and lowercases both the string and the search query.

- **query** (optional): The substring to search for.
- **strict** (optional): If `true`, the search will be a strict equality check, instead of inclusion.

**Example:**
```javascript
const str = "Hello World";
const result = str.subText("hello");
console.log(result); // true
```

### `capitalize(): string`
Capitalizes the first letter of each word in a string.

**Example:**
```javascript
const str = "hello world";
const result = str.capitalize();
console.log(result); // "Hello World"
```

### `unidecode(keepAccent?: boolean): string`
Removes emojis from a string.

- **keepAccent** (optional): If `true`, accents will be kept; otherwise, they will be removed along with emojis.

**Example:**
```javascript
const str = "Hello 😊";
const result = str.unidecode();
console.log(result); // "Hello "
```

### `removeBacktick(): string`
Removes backticks from a string.

**Example:**
```javascript
const str = "`Hello` World";
const result = str.removeBacktick();
console.log(result); // "Hello World"
```
