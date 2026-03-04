<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex">
	<Navbar />
	<!-- <main class="ml-64 flex-1"> -->
	<main class="flex-1 lg:ml-64">
		{@render children()}
		<Footer />
	</main>
</div>
