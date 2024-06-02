<script>
	export let data = {posts: []};
	$: posts = data.posts;
	$: console.log("Current posts state:", posts);  // Log posts state after initialization or update
</script>

<style>
    ul {
        list-style-type: none;
        padding: 0;
    }

    .post-box {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 15px 0;
        background: #f9f9f9;
        border-radius: 5px;
        max-height: 200px; /* Adjust height as needed */
        overflow: hidden;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: black;
    }

    .post-title {
        font-weight: bold;
        margin-bottom: 5px;
    }

    .post-content {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 8; /* Adjust line-clamp as needed */
    }
</style>

<main>
	<h1>Blog Posts</h1>
	{#if posts.length > 0}
		<ul>
			{#each posts as post}
				<li>
					<a href={`/blog/${post.id}`} class="post-box">
						<div class="post-content">
							{@html post.content}
						</div>
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No posts found.</p>
	{/if}
</main>