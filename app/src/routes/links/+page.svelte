<script>
	import Timeline from '$lib/components/Timeline.svelte';
	import { TimelineData } from '$lib/data/Timeline';
	import { Heading, Span } from 'flowbite-svelte';
</script>

<Heading tag="h1" class="mb-10" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl">
	<Span gradient>Nifty Links</Span>
</Heading>

<Timeline order="vertical" data={TimelineData.reverse()} />
