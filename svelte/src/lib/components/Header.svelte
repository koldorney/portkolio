<script>
	import { onMount } from 'svelte';

	export let text = "Hello, I'm Kol";
	export let font = "Arial, sans-serif"; // Default font
	export let color = "#ffffff"; // Default color

	let words = [];

	onMount(() => {
		words = text.split(' ');
	});
</script>

<style>
    .header-container {
        width: 100%;
        text-align: center;
        position: relative;
        padding-top: 1rem; /* Adjust as needed for spacing from the top */
    }

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        font-family: var(--font);
        color: var(--color);
    }

    .word {
        display: inline-block;
        opacity: 0;
        transform: translateY(-100px);
        animation: stamp 0.5s forwards;
        margin: 0 0.1rem; /* Slight margin between words */
        font-size: 200%; /* Increase font size by 30% */
    }

    @keyframes stamp {
        0% {
            opacity: 0;
            transform: translateY(-100px);
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.7)
        ;
        }
        50% {
            opacity: 1;
            transform: translateY(10px);
            text-shadow: 0 10px 20px rgba(255, 255, 255, 0.3)
        ;
        }
        100% {
            opacity: 1;
            transform: translateY(0);
            text-shadow: 0 5px 15px rgba(255, 255, 255, 0.1)
        ;
        }
    }
</style>

<div class="header-container" style="--font: {font}; --color: {color}">
	<h1 class="header">
		{#each words as word, i}
			<span class="word" style="animation-delay: {i * 0.3}s">{word}&nbsp;</span>
		{/each}
	</h1>
</div>
