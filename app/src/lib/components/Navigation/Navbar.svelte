<script>
	import { DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';
</script>

<Navbar let:hidden let:toggle rounded color="form">
	<NavBrand href="/">
		<img src="img/beard_orange.svg" class="mr-3 h-10 w-10 sm:h-9 sm:w-9" alt="Logo" />
		<span class="self-center whitespace-nowrap text-4xl font-semibold dark:text-red"
			>Nate Bohn</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} ulClass="md:hidden">
		<NavLi href="/">Home</NavLi>
		<NavLi href="/3d-printing">3D Printing</NavLi>
		<NavLi href="/links">Nifty Links</NavLi>
	</NavUl>
	<NavUl
		{hidden}
		ulClass="flex flex-row p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
		<NavLi
			href="https://www.linkedin.com/in/nathanbohn/"
			target="_blank"
			activeClass="w-1/3"
			nonActiveClass="w-1/3">
			<Icon icon="devicon:linkedin" class="w-10 h-10 text-primary-800 dark:text-white inline" />
		</NavLi>
		<NavLi
			href="https://github.com/bohn002"
			target="_blank"
			activeClass="w-1/3"
			nonActiveClass="w-1/3">
			<Icon icon="devicon:github" class="w-10 h-10 text-primary-800 dark:text-white inline" />
		</NavLi>
		<NavLi
			href="https://www.last.fm/user/bohn002"
			target="_blank"
			activeClass="w-1/3"
			nonActiveClass="w-1/3">
			<Icon
				icon="fa-brands:lastfm"
				color="#ae110c"
				class="w-10 h-10 text-primary-800 dark:text-white inline" />
		</NavLi>
		<NavLi><DarkMode size="lg" /></NavLi>
	</NavUl>
</Navbar>
