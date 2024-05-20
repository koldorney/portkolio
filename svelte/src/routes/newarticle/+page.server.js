// src/routes/newarticle/+page.absurd-sql.js
import { createArticle } from '$lib/absurd-sql/database';
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const title = formData.get('title');
        const content = formData.get('content');

        if (title && content) {
            await createArticle(title, content);
            throw redirect(303, '/blog');
        } else {
            return { errors: { message: 'Failed to create post. Please try again.' } };
        }
    }
};
