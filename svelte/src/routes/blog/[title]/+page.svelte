<script>
    // This script receives the props from the load function in +page.absurd-sql.js
    export let data = {post : []};
    console.log("this is the post:", data);
    $: post = data.post
</script>

<article>
    <h1>{post.title}</h1>
    <div>
        {post.content}
    </div>
</article>

