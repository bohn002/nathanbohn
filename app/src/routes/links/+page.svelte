<script>
	import Timeline from '$lib/components/Timeline.svelte';
	import { TimelineData } from '$lib/data/Timeline';
</script>

<Timeline order="vertical" data={TimelineData.reverse()} />
