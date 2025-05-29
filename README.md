# Unicode Fonts

Convert regular text to stylized Unicode font variants such as **bold**, _italic_, `monospace`, **𝟏𝟐𝟑** numbers, Thai digits, and more.

## ✨ Features

- Supports converting `A-Z`, `a-z`, and `0-9` characters.
- Multiple styles like bold, italic, monospace, sans-serif, and Thai digits.
- Lightweight, fast, and dependency-free.
- Optimized with no memory leaks.

## 📦 Installation

```bash
npm install @loybung/unicode-fonts

```

## 🚀 Usage

```js
const { toUnicodeVariant } = require("@loybung/unicode-fonts");

console.log(toUnicodeVariant("Hello 123", "bold"));
// Output: 𝐇𝐞𝐥𝐥𝐨 𝟏𝟐𝟑

console.log(toUnicodeVariant("1234567890", "thai"));
// Output: ๑๒๓๔๕๖๗๘๙๐
```

## 🎨 Supported Styles

| Style        | Description           |
| ------------ | --------------------- |
| `bold`       | Bold style (𝐀𝐁𝐂𝐃…)    |
| `italic`     | Italic style (𝐴𝐵𝐶𝐷…)  |
| `boldItalic` | Bold + Italic (𝑨𝑩𝑪𝑫…) |
| `thaiNumber` | Thai numerals (๑๒๓…)  |

> **Note:** Some styles may not support uppercase letters or digits.

## 🧠 API

### `toUnicodeVariant(text: string, style?: Style): string`

Converts regular text into the specified Unicode font style.

#### Parameters

- `text`: The input string to be converted.
- `style`: A style name from the `Style` type.

#### Returns

The transformed Unicode string.
