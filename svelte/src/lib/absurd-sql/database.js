import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

/**
 * Opens the SQLite database with initialization to ensure the 'posts' table exists.
 * @returns {Promise<sqlite.Database>} The database connection.
 */
async function openDb() {
    const db = await open({
        filename: 'portfolio.db',
        driver: sqlite3.Database
    });

    const query = `
        BEGIN TRANSACTION;

        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL
        );

        -- Insert a dummy entry only if the table is empty
        INSERT INTO posts (title, content)
        SELECT 'Sample Post', 'This is a sample post to demonstrate inserting a dummy record into the database.'
        WHERE NOT EXISTS (SELECT 1 FROM posts);

        COMMIT;
    `;
    await db.exec(query);

    return db;
}

/**
 * Fetches all blog titles from the 'posts' table.
 * @returns {Promise<Array>} An array of posts.
 */
async function getAllBlogTitles() {
    const db = await openDb();
    try {
        const rows = await db.all('SELECT id, title FROM posts');
        //console.log('Fetched rows:', rows);
        return rows;
    } catch (err) {
        console.error("Error fetching blog titles:", err);
        return [];
    } finally {
        await db.close();
    }
}

/**
 * Fetches a single blog post by its Title.
 * @param {string} title - The title of the blog post.
 * @returns {Promise<Object|null>} The blog post or null if not found.
 */
async function getBlogByTitle(title) {
    const db = await openDb();
    try {
        const row = await db.get('SELECT title, content FROM posts WHERE title = ?', [title]);
        console.log("blogbyid row:", row);
        return row;
    } catch (err) {
        console.error("Error fetching blog post:", err);
        throw err; // Best to throw the error after logging it.
    } finally {
        await db.close();
    }
}

/**
 * Creates a new article in the 'posts' table.
 * @param {string} title - The title of the article.
 * @param {string} content - The content of the article.
 * @returns {Promise<Object>} The result of the insertion with success status and ID of the new row.
 */
async function createArticle(title, content) {
    const db = await openDb();
    try {
        const result = await db.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content]);
        return { success: true, id: result.lastID };
    } catch (err) {
        console.error("Error creating article:", err);
        return { success: false, error: err.message };
    } finally {
        await db.close();
    }
}

async function deleteArticle(title) {
    const db = await openDb();
    try{
        const result = await db.run('DELETE FROM posts WHERE title = ?', [title]);
        return { success: true, id: result.lastID };
    } catch (err) {
        console.error("Error deleting article:", err);
        return { success: false, error: err.message };
    } finally{
        await db.close();
    }
}

export { getAllBlogTitles, getBlogByTitle, createArticle, deleteArticle };
