// src/routes/blog/+page.absurd-sql.js
import {getAllBlogTitles} from "$lib/absurd-sql/database.js";

export async function load() {
    try {
        const posts = await getAllBlogTitles();
        return {
            posts
        }
    } catch (err) {
        return { status: 500, props: { posts: [] } };
    }
}

