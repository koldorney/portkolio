<script>
	export let href = "#"; // Default href if none provided
	export let text = "Click Here"; // Default text if none provided
</script>

<style>
    .btn {
        transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        cursor: pointer;
        display: inline-flex;
        align-items: center; /* Align content vertically */
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        background-color: #8294C2; /* Creamy blue color */
        color: white;
        text-decoration: none;
        position: relative;
        overflow: hidden;
        border: none;
        font-weight: 600;
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
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .btn:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.6); /* subtle focus outline */
    }

    .btn img {
        margin-right: 0.5rem; /* Space between the image and the text */
        height: 24px; /* Adjust the size as needed */
    }
</style>

<a class="btn" href={href}>
	<img src="/images/book.png" alt="Book Icon">
	{text}
</a>
