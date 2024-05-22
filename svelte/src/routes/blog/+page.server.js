import { getAllPosts } from '$lib/markdown';

export async function load() {
	try {
		const posts = await getAllPosts();
		console.log("logging in page.server", posts);
		return {
			posts
		}
	} catch (err) {return { status: 500, props: { posts: [] } };}
}
