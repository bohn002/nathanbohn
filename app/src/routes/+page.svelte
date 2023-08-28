<script>
	import { Section, News, HeroHeader, HeroBody } from 'flowbite-svelte-blocks';
	import { Button } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<Section name="heroDefault">
	<HeroHeader>
		<svelte:fragment slot="h1">Hi! I'm Nate!</svelte:fragment>
		<svelte:fragment slot="paragraph"
			>I am a Full-Stack/DevOps/Platform Engineer who really enjoys Beards, Root Beer, Food, Tech,
			Dad-jokes and 3d-printing!
		</svelte:fragment>
	</HeroHeader>
	<HeroBody>
		<svelte:fragment slot="head">Current Things Of Interest</svelte:fragment>

		<div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
			<a href="/" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"> YT </a>
			<a href="/" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"> PH </a>
			<a href="/" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"> R </a>
		</div>
	</HeroBody>
</Section>
