<script>
  import axios from 'axios';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import ArticleForm from './lib/ArticleForm.svelte';

  const articles = writable([]);

  onMount(async () => {
    const response = await axios.get('http://localhost:3000/articles');
    articles.set(response.data.data);
  });

  let addingArticle = false;

  function toggleForm() {
    addingArticle = !addingArticle;
  }
</script>

<h1>Blog Articles</h1>
{#if addingArticle}
  <ArticleForm on:done={toggleForm} />
{:else}
  <button on:click={toggleForm}>New Article</button>
{/if}

<ul>
  {#each $articles as article}
    <li>{article.title} - {article.content}</li>
  {/each}
</ul>

