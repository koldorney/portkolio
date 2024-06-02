<script>
	export let post;
</script>

<style>
    .post-preview {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px 0;
        background: #f9f9f9;
    }
</style>

<div class="post-preview">
	<h2>{post.title}</h2>
	<p>{post.content.split(' ').slice(0, 20).join(' ')}...</p>
</div>
