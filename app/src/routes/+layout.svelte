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
		<div class="md:w-60 md:block hidden">
			<Sidebar />
		</div>

		<!-- Main Content -->
		<div
			class="w-full p-2 m-2 md:p-8 md:m-4 md:ml-12 text-base font-normal text-primary-900 bg-gray-100 dark:bg-gray-800 rounded-lg dark:text-white content-center">
			<slot />
		</div>
	</div>
</div>
