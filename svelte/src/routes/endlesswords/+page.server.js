import fs from 'fs';
import path from 'path';

export async function load() {
	// Read the words.json file from the static directory
	const filePath = path.join(process.cwd(), 'static', 'words', 'fives.json');
	const data = fs.readFileSync(filePath, 'utf-8');
	const words = JSON.parse(data);

	// Pick a random word from the array
	const randomWord = words[Math.floor(Math.random() * words.length)];

	return {
		word: randomWord,
		words: words
	};
}
