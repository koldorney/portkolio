<script>
    import axios from 'axios';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let title = "";
    let content = "";

    async function saveArticle() {
        await axios.post('http://localhost:3000/articles', { title, content });
        dispatch('done');
    }
</script>

<div>
    <input type="text" bind:value={title} placeholder="Title" />
    <textarea bind:value={content} placeholder="Content"></textarea>
    <button on:click={saveArticle}>Save Article</button>
</div>
