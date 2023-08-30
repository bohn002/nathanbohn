<script>
	import { Section, HeroHeader, HeroBody } from 'flowbite-svelte-blocks';
	import { Button, Span } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<Section name="heroDefault">
	<HeroHeader>
		<svelte:fragment slot="h1">Hi! I'm <Span gradient>Nate Bohn!</Span></svelte:fragment>
		<svelte:fragment slot="paragraph"
			>I am a Full-Stack/DevOps/Platform Engineer who really enjoys Beards, Root Beer, Food, Tech,
			Dad-jokes and 3d-printing!
		</svelte:fragment>
	</HeroHeader>
	<HeroBody>
		<svelte:fragment slot="head">Current Things Of Interest</svelte:fragment>
	</HeroBody>
</Section>
