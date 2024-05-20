<script>
    import { page } from '$app/stores';

    // Data from the absurd-sql-side load function should already contain the posts directly
    export let data = { posts: [] };

    // Log the initial data received
    console.log("Initial data received:", data);

    // Ensure posts is always an array
    $: posts = data.posts || [];
    $: console.log("Current posts state:", posts);  // Log posts state after initialization or update

    // Check if there are no posts
    $: noPosts = posts.length === 0;
</script>

<h1>Blog Feed</h1>

{#if noPosts}
    <p>No posts available.</p>
{:else}
    <ul>
        {#each posts as post}
            <li><a href={`/blog/${post.title}`}>{post.title}</a></li>
        {/each}
    </ul>
{/if}
