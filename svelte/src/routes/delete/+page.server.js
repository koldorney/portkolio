// src/routes/delete/+page.absurd-sql.js
import { deleteArticle } from '$lib/absurd-sql/database';
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const title = formData.get('title');

        if (title) {
            await deleteArticle(title);
            throw redirect(303, '/blog');
        } else {
            return { errors: { message: 'Title is required.' } };
        }
    }
};
