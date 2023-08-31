<script>
	import { DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<Navbar let:hidden let:toggle rounded color="form">
	<NavBrand href="/">
		<img src="img/beard_orange.svg" class="mr-3 h-10 sm:h-9" alt="Logo" />
		<span class="self-center whitespace-nowrap text-4xl font-semibold dark:text-red"
			>Nate Bohn</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<div class="flex">
		<DarkMode size="lg" />
	</div>
	<NavUl {hidden}>
		<NavLi href="https://www.linkedin.com/in/nathanbohn/" target="_blank">
			<Icon name="linkedin-solid" class="w-10 h-10 text-primary-800 dark:text-white inline" />
		</NavLi>
		<NavLi href="https://github.com/bohn002" target="_blank">
			<Icon name="github-solid" class="w-10 h-10 text-primary-800 dark:text-white inline" />
		</NavLi>
	</NavUl>
</Navbar>
