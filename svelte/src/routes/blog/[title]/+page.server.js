// src/routes/blog/[title]/+page.absurd-sql.js
import {getBlogByTitle} from '$lib/absurd-sql/database';
import {error} from '@sveltejs/kit';

export async function load({ params }) {
    const { title } = params;
    try {
        const post = await getBlogByTitle(title);
        return {
            post
        }
    } catch (err) {
        return { status: 500, };
    }
}
