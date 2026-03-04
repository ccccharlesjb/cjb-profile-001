<script lang="ts">
	import { page } from '$app/stores';

	let drawerOpen = $state(false);

	// Close drawer on navigation (only affects mobile)
	$effect(() => {
		$page.url.pathname;
		drawerOpen = false;
	});
</script>

<div
	class="fixed top-0 right-0 left-0 z-40 flex h-14 items-center justify-between bg-[#2a545f] px-4 text-white shadow-md lg:hidden"
>
	<button
		class="rounded p-2 transition-colors hover:bg-[#1e3f47]"
		onclick={() => (drawerOpen = true)}
		aria-label="Open menu"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="h-6 w-6 stroke-current"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>

	<a href="/" class="text-xl font-semibold transition-opacity hover:opacity-80">
		Charles Jethro Belamide ⚡️
	</a>
	<div class="w-10"></div>
</div>

{#if drawerOpen}
	<div
		class="fixed inset-0 z-50 bg-black/50 lg:hidden"
		onclick={() => (drawerOpen = false)}
		onkeydown={(e) => e.key === 'Escape' && (drawerOpen = false)}
		role="button"
		tabindex="0"
		aria-label="Close menu"
	></div>
{/if}

<div
	class="fixed top-0 left-0 z-50 flex h-full w-64 flex-col bg-[#2a545f] p-4 text-white shadow-xl transition-transform duration-300
    lg:translate-x-0 lg:shadow-none {drawerOpen ? 'translate-x-0' : '-translate-x-full'}"
>
	<div class="mb-4 flex justify-end lg:hidden"></div>

	<div class="mb-8 flex flex-col items-center justify-center gap-4">
		<img
			class="rounded-full border-2 border-white/20"
			alt="Profile"
			width="140"
			height="140"
			src="/assets/profile_image.webp"
		/>
	</div>

	<nav class="flex flex-col gap-2">
		<a href="/" class="nav-link" class:active={$page.url.pathname === '/'}>Home</a>
		<a href="/Projects" class="nav-link" class:active={$page.url.pathname === '/Projects'}
			>Projects</a
		>
		<a href="/CV" class="nav-link" class:active={$page.url.pathname === '/CV'}>CV</a>
		<a href="/Contact" class="nav-link" class:active={$page.url.pathname === '/Contact'}>Contact</a>
	</nav>
</div>

<style>
	.nav-link {
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		text-decoration: none;
		color: white;
		transition: all 0.2s ease;
	}

	.nav-link:hover {
		background-color: #e6e5e5;
		color: black;
	}

	.nav-link.active {
		background-color: #b9b8b8;
		color: black;
		font-weight: 600;
	}
</style>
