import { VARIANTS } from "../constants";
import { Style } from "../types";

export function toUnicodeVariant(text: string, style?: Style): string {
	if (!text || !style || !VARIANTS[style]) return text;

	const v = VARIANTS[style];
	const result: string[] = [];

	for (let i = 0; i < text.length; i++) {
		const c = text[i];
		const code = c.charCodeAt(0);

		if (code >= 97 && code <= 122 && v.l) {
			result.push(String.fromCodePoint(v.l + (code - 97)));
		} else if (code >= 65 && code <= 90 && v.u) {
			result.push(String.fromCodePoint(v.u + (code - 65)));
		} else if (code >= 48 && code <= 57 && v.n) {
			result.push(String.fromCodePoint(v.n + (code - 48)));
		} else {
			result.push(c);
		}
	}

	return result.join("");
}
