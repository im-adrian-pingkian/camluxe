<script>
  let showGalleryDropdown = false;

  const toggleGalleryDropdown = () => {
    showGalleryDropdown = !showGalleryDropdown;
  };

  const handleClickOutside = (event) => {
    if (
      showGalleryDropdown &&
      !event.target.closest(".gallery-dropdown-container")
    ) {
      showGalleryDropdown = false;
    }
  };
</script>

<svelte:window on:click={handleClickOutside} />

<nav class="h-[75px] border-b border-[#A39B91] bg-white dark:bg-neutral-900">
  <div class="page-container h-full flex items-center justify-between">
    <div class="flex items-center space-x-6">
      <a href="/" class="flex items-center">
        <img src="/images/camluxe-logo.png" alt="Camluxe Logo" class="h-10" />
      </a>

      <a
        href="/"
        class="text-text-color hover:text-accent-color transition-colors"
        >Home</a
      >

      <div class="relative gallery-dropdown-container">
        <button
          on:click|stopPropagation={toggleGalleryDropdown}
          class=" text-text-color hover:text-accent-color transition-colors flex items-center font-paragraph text-base font-semibold uppercase antialiased"
        >
          Gallery
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {#if showGalleryDropdown}
          <div
            class="absolute top-full left-0 mt-1 bg-white dark:bg-neutral-800 shadow-md rounded-md py-2 w-40 z-50"
          >
            <a
              href="/gallery/portraits"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700"
              >Portraits</a
            >
            <a
              href="/gallery/landscapes"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700"
              >Landscapes</a
            >
            <a
              href="/gallery/events"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700"
              >Events</a
            >
          </div>
        {/if}
      </div>

      <a
        href="/lensman"
        class="text-text-color hover:text-accent-color transition-colors"
        >Lensman</a
      >
    </div>

    <div class="flex items-center space-x-6">
      <a
        href="/blog"
        class="text-text-color hover:text-accent-color transition-colors"
        >Blog</a
      >
      <a
        href="/contact"
        class="text-text-color hover:text-accent-color transition-colors"
        >Contact</a
      >
      <a
        href="/register"
        class="bg-accent-color hover:bg-accent-color/80 text-white px-4 py-2 rounded-md transition-colors"
        >Register</a
      >
    </div>
  </div>
</nav>

<style>
  a {
    @apply font-paragraph text-base font-semibold uppercase antialiased;
  }
</style>
