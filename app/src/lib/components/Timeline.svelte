<script lang="ts">
	import { Button, Timeline, TimelineItem } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';

	import type { TimelineItemData } from '$lib/types/TimelineType';

	export let order: 'vertical' | 'horizontal' = 'vertical';
	export let data: TimelineItemData[];
</script>

<Timeline {order}>
	{#each data as item (item.id)}
		<TimelineItem title={item.title} date={item.date}>
			<svelte:fragment slot="icon">
				<span
					class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
				>
					<Icon name={item.icon} class="w-3 h-3 text-primary-600 dark:text-primary-400" />
				</span>
			</svelte:fragment>
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				{item.description}
			</p>
			<Button color="alternative" href={item.url} target="_blank">
				Visit<Icon name="arrow-right-outline" class="ml-2 w-3 h-3" />
			</Button>
		</TimelineItem>
	{/each}
</Timeline>
