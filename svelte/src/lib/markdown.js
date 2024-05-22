import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';

const contentDir = path.resolve('static/content');

/**
 * Get Markdown content as HTML
 * @param {string} fileName - The name of the Markdown file (without extension)
 * @returns {Promise<string>} - The HTML content
 * @throws {Error} - If the file cannot be read
 */
export async function getMarkdownContent(fileName) {
	const filePath = path.join(contentDir, `${fileName}.md`);
	const fileContent = await fs.readFile(filePath, 'utf-8');
	const htmlContent = marked(fileContent);
	return htmlContent;
}

/**
 * Get all post filenames without extensions
 * @returns {Promise<string[]>} - An array of post filenames
 */
export async function getAllPosts() {
	try {
		const files = await fs.readdir(contentDir);
		return files
			.filter(file => file.endsWith('.md'))
			.map(file => file.replace('.md', ''));
	} catch (error) {
		console.error('Error reading posts:', error);
		return [];
	}
}
