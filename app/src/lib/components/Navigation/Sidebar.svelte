<script>
	import { page } from '$app/stores';
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	$: activeUrl = $page.url.pathname;
	let activeClass =
		'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
	let nonActiveClass =
		'flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700';
</script>

<Sidebar {activeUrl} {activeClass} {nonActiveClass}>
	<SidebarWrapper>
		<SidebarGroup>
			<SidebarItem label="Home" href="/">
				<svelte:fragment slot="icon">
					<Icon name="home-solid" class="w-5 h-5" />
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="Resume" href="/resume">
				<svelte:fragment slot="icon">
					<Icon name="briefcase-solid" class="w-5 h-5" />
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="3D Printing" href="/3d-printing">
				<svelte:fragment slot="icon">
					<Icon name="draw-square-solid" class="w-5 h-5" />
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="Notes" href="/notes">
				<svelte:fragment slot="icon">
					<Icon name="message-caption-solid" class="w-5 h-5" />
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="Nifty Links" href="/links">
				<svelte:fragment slot="icon">
					<Icon name="link-solid" class="w-5 h-5" />
				</svelte:fragment>
			</SidebarItem>
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
