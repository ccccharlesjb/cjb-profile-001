<footer class="footer">
	<div class="credit-container">
		<span class="copyright"
			>© {new Date().getFullYear()} <strong>Charles Jethro Belamide</strong></span
		>

		<span class="separator">//</span>

		<span class="port-credit">
			Developed & Ported to
			<a href="https://svelte.dev" target="_blank" class="svelte-link">SvelteKit</a>
			from <a href="https://github.com/manuelernestog/astrofy" target="_blank">Astrofy</a>
		</span>
	</div>
</footer>

<style>
	.footer {
		padding: 2rem;
		text-align: center;
		border-top: 1px solid #eaeaea;
		color: #555;
		font-size: 0.9rem;
	}

	.separator {
		margin: 0 10px;
		color: #ff3e00; /* Svelte Orange */
		font-weight: bold;
	}

	.svelte-link {
		color: #ff3e00;
		font-weight: 600;
		text-decoration: none;
	}

	.svelte-link:hover {
		text-decoration: underline;
	}

	a {
		color: inherit;
		text-decoration-style: dotted;
	}
</style>
