<script lang="ts">
	import { base } from '$app/paths';
</script>

<main>
	<h1>This is Page B</h1>
	<div class="centered-container">
		<p class="text-2xl">Hey there 👋</p>
		<h1 class="mb-2 text-4xl font-bold">I'm Charles Jethro Belamide</h1>
		<h2 class="mb-3 text-3xl font-bold">Software Engineer</h2>

		<p class="text-2xl">
			I work creating software that solve problems in a simple way and sharing what I learn along
			the way. I like minimalism, Open-Source and good music. You can find me mostly on Twitter.
		</p>
		<a href="{base}/"> Let's Connect </a>

		<a href="{base}/"> Contact </a>
	</div>
</main>

<style>
	.centered-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 1.5rem;
		width: 100%;
	}

	/* Responsive padding adjustments */
	@media (max-width: 768px) {
		.centered-container {
			padding: 0 1rem;
		}
	}
</style>
