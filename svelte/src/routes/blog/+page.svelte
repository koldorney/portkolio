<script>
	export let data = { posts: [] };
	$: posts = data.posts || [];
	$: console.log("Current posts state:", posts);  // Log posts state after initialization or update
</script>

<main>
	<h1>Blog Posts</h1>
	{#if posts.length > 0}
		<ul>
			{#each posts as post}
				<li>
					<a href={`/blog/${post}`}>{post}</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No posts found.</p>
	{/if}
</main>

