<script>
	import '../app.css';
	import Navbar from '../lib/components/Navigation/Navbar.svelte';
	import Sidebar from '../lib/components/Navigation/Sidebar.svelte';
</script>

<div class="flex flex-col h-screen">
	<!-- Navigation -->
	<div class="w-full">
		<Navbar />
	</div>

	<!-- Main Content -->
	<div class="flex flex-row flex-1">
		<!-- Sidebar -->
		<div class="w-1/5">
			<Sidebar />
		</div>

		<!-- Main Content -->
		<div
			class="w-4/5 p-8 m-4 text-base font-normal text-primary-900 bg-gray-100 dark:bg-gray-800 rounded-lg dark:text-white"
		>
			<slot />
		</div>
	</div>
</div>
