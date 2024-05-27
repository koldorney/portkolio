<style>
    :global(body) {
        background-color: black;
        color: white; /* Ensures the text is readable on a black background */
        margin: 0;
        padding: 0;
        font-family: system-ui, sans-serif; /* Set a default font */
    }

    .layout {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start; /* Ensure content starts at the top */
        position: relative;
    }

    .logo-container {
        position: absolute;
        top: 20px;
        left: 20px;
    }

    .logo {
				width: 100px;
				height: auto;
    }
</style>

<main class="layout">
	<div class="logo-container">
		<a href="/">
			<img src="/images/logo.png" alt="Logo" class="logo" />
		</a>
	</div>
	<slot />
</main>