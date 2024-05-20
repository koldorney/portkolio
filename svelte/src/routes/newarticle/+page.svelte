<!-- src/routes/newarticle/+page.svelte -->
<form method="POST">
    <label for="title">Title</label>
    <input id="title" name="title" type="text" required>

    <label for="content">Content</label>
    <textarea id="content" name="content" required></textarea>

    <button type="submit">Create Article</button>
</form>

