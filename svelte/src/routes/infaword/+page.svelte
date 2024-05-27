<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/words.json');
		const words = await response.json();
		const randomWord = words[Math.floor(Math.random() * words.length)];
		return { word: randomWord, words: words };
	}
</script>

<script>
	export let data;
	let { word: targetWord, words: validWords } = data;
	let currentGuess = '';
	let guesses = [];
	let message = '';

	function handleInput(event) {
		currentGuess = event.target.value.toLowerCase();
	}

	function submitGuess() {
		if (currentGuess.length !== 5) {
			message = 'Guess must be 5 letters';
			return;
		}

		if (!validWords.includes(currentGuess)) {
			message = 'Invalid word';
			return;
		}

		guesses = [...guesses, evaluateGuess(currentGuess)];
		currentGuess = '';
		message = '';

		if (currentGuess === targetWord) {
			message = 'You guessed the word!';
		} else if (guesses.length === 6) {
			message = `Game over! The word was ${targetWord}`;
		}
	}

	function evaluateGuess(guess) {
		return guess.split('').map((letter, index) => {
			if (letter === targetWord[index]) {
				return { letter, color: 'green' };
			} else if (targetWord.includes(letter)) {
				return { letter, color: 'yellow' };
			} else {
				return { letter, color: 'grey' };
			}
		});
	}

	function restartGame() {
		guesses = [];
		currentGuess = '';
		message = '';
		targetWord = validWords[Math.floor(Math.random() * validWords.length)];
	}
</script>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
    }
    .cell {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
    }
    .green {
        background-color: green;
        color: white;
    }
    .yellow {
        background-color: yellow;
        color: black;
    }
    .grey {
        background-color: grey;
        color: white;
    }
</style>

<div>
	<h1>InfaWord</h1>
	<input
		type="text"
		value={currentGuess}
		on:input={handleInput}
		maxlength="5"
		placeholder="Enter your guess"
	/>
	<button on:click={submitGuess}>Submit Guess</button>
	<button on:click={restartGame}>Restart Game</button>
	<p>{message}</p>
	<div>
		{#each guesses as guess}
			<div class="grid">
				{#each guess as { letter, color }}
					<div class="cell {color}">{letter}</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
