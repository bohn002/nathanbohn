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
			<br /><br />
			Here is a random photo.
		</svelte:fragment>
	</HeroHeader>
	<HeroBody>
		<svelte:fragment slot="head">
			<div class="flex justify-center pt-5 w-800">
				<img src="https://picsum.photos/800?grayscale" alt="a pretty placeholder" />
			</div>
		</svelte:fragment>
	</HeroBody>
</Section>
