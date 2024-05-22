import { getMarkdownContent } from '$lib/markdown';

export async function load({ params }) {
	const { post } = params;
	console.log("post data", post);
	try {
		const content = await getMarkdownContent(post);
		console.log("html post", content);
		return {
				content
		}
	} catch (error) {
		return {
			status: 404,
			error: new Error('Post not found')
		};
	}
}
