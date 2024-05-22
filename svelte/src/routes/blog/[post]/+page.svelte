<script>
	export let data = {content: []};
	console.log("heyy", data);
	$: content = data.content;
</script>

<main>
	{@html content}
</main>

