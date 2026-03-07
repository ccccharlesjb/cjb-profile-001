<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

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

	<a
		href="https://www.linkedin.com/in/cjb4000/"
		class="text-xl font-semibold transition-opacity hover:opacity-80"
	>
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
			class="rounded-full object-cover ring-1 ring-white/10 ring-inset"
			alt="Profile"
			width="140"
			height="140"
			src="{base}/assets/profile_image.webp"
		/>
	</div>

	<nav class="flex flex-col gap-2">
		<a href="{base}/" class="nav-link" class:active={$page.url.pathname === base + `/`}>Home</a>
		<a
			href="{base}/Projects"
			class="nav-link"
			class:active={$page.url.pathname === base + `/Projects`}>Projects</a
		>
		<a href="{base}/CV" class="nav-link" class:active={$page.url.pathname === base + `/CV`}>CV</a>
		<a
			href="mailto:charlesbelamide@yahoo.com"
			class="nav-link"
			class:active={$page.url.pathname === base + `/Contact`}>Contact</a
		>
	</nav>
	<div class="social-icons mt-auto flex items-center">
		<a
			href="https://github.com/ccccharlesjb"
			target="_blank"
			aria-label="GitHub"
			class="flex items-center gap-2 border-r-2 border-gray-600 px-5 py-2.5 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				style="fill:currentColor"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
				/>
			</svg>
			GitHub
		</a>

		<a
			href="https://www.linkedin.com/in/cjb4000/"
			target="_blank"
			aria-label="LinkedIn"
			class="flex items-center gap-2 px-5 py-2.5 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				style="fill:currentColor"
			>
				<circle cx="4.983" cy="5.009" r="2.188" />
				<path
					d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
				/>
			</svg>
			LinkedIn
		</a>
	</div>
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
