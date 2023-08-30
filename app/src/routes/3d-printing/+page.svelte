<script lang="ts">
	import { A, Card, Button, Heading, P, Span } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';

	const cards = [
		{
			title: 'Current Printer - Elegoo Neptune 3 Plus',
			body: 'Seems to be much better than my previous Creality CR-SE 6.',
			url: 'https://www.elegoo.com',
			image: 'img/3dprinter.webp',
		},
		{
			title: 'Current Slicer - PrusaSlicer',
			body: 'I switched from Cura to PrusaSlicer after they added Tree Supports and have not looked back!',
			url: 'https://www.prusa3d.com/prusaslicer/',
			image: 'img/prusaSlicer.webp',
		},
		{
			title: 'Current Print Manager - OctoPrint',
			body: 'I have been using OctoPrint since the beginning of my printing journey and it is still my go-to for managing my prints.',
			url: 'https://octoprint.org/',
			image: 'img/octoprint.webp',
		},
		{
			title: 'Current Print Observer - Obico',
			body: 'I have been using Obico to monitor my prints and it has been great! The software has been great and the ability to review each print for qa has been a huge help.',
			url: 'https://obico.io/',
			image: 'img/obico.webp',
		},
		{
			title: 'STL Search - Thangs',
			body: 'I have been using Thangs to search for STLs and it has been great! The ability to search for STLs across multiple sites is awesome.',
			url: 'https://thangs.com/',
			image: 'img/thangs.webp',
		},
	];
</script>

<Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl">
	<Span gradient>3D Printing</Span> Make something cool
</Heading>
<P>
	A friend conned me into 3d Printing and I have been hooked ever since. Started with a Monoprice
	Select Mini V2 and currently on my 3rd printer. I have learned a lot and have made both useful and
	useless things. I have also learned a lot about 3d modeling and have been able to create some of
	my own models. I usually order my filament from <A
		href="https://www.matterhackers.com/"
		target="_blank">MatterHackers</A> or Amazon.
</P>
<div class="mt-10 flex flex-wrap justify-center">
	{#each cards as card}
		<Card img={card.image} href="/" horizontal class="mb-4">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{card.title}
			</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				{card.body}
			</p>
			<Button href={card.url} target="_blank">
				View &nbsp;
				<Icon name="arrow-right-outline" class="w-3 h-3 text-primary-600 dark:text-primary-400" />
			</Button>
		</Card>
	{/each}
</div>
