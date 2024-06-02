<script>
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rubik+Broken+Fax&display=swap');

    .outer-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container {
        margin-bottom: 1rem; /* Add some spacing between button sets */
        display: flex;
        gap: 1rem; /* Add spacing between buttons in the same container */
    }
</style>

<Header text="Welcome" font="Rubik Broken Fax" color="#ffffff" />
<div class="outer-container">
	<div class="container">
		<LinkButton href="https://github.com/koldorney" image="ghub.png" text="Github" color="#000000" outlineColor="grey"/>
		<LinkButton href="/blog" text="Blog" color="#9c2020"/>
	</div>
</div>


