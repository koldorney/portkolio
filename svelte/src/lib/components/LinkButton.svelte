<script>
	export let href = "#"; // Default href if none provided
	export let text = "Click Here"; // Default text if none provided
	export let color = "#8294c2"; // Default background color
	export let outlineColor = color; // Default outline color
	export let outlineRadius = "0.5rem"; // Default border radius
	export let font = "Arial, sans-serif"; // Default font
	export let image = "book.png"
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rubik+Broken+Fax&display=swap');

    .btn {
        transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        cursor: pointer;
        display: inline-flex;
        align-items: center; /* Align content vertically */
        padding: 2rem 3rem;
        font-size: 2rem;
        color: white;
        text-decoration: none;
        position: relative;
        overflow: hidden;
        border: none;
        font-weight: 600;
        background-color: var(--btn-bg-color);
        border: 3px solid var(--btn-outline-color);
        border-radius: var(--btn-outline-radius);
        font-family: var(--font); /* Use the font variable */
    }

    .btn::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300%;
        height: 300%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 40%);
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.6s ease;
        opacity: 0.5;
    }

    .btn:hover::after {
        transform: translate(-50%, -50%) scale(1);
    }

    .btn:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.5);
    }

    .btn:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.6); /* subtle focus outline */
    }

    .btn img {
        margin-right: 0.5rem; /* Space between the image and the text */
        height: 50px; /* Adjust the size as needed */
    }
</style>

<a
		class="btn"
		href={href}
		style="
			--font: {font};
      --btn-bg-color: {color};
      --btn-outline-color: {outlineColor};
      --btn-outline-radius: {outlineRadius};
    "
	>
		<img src="/images/{image}" alt="Book Icon">
		<span>{text}</span>
</a>
