<template>
  <nav class="bg-gray-800" data-headlessui-state="">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- <button
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            id="headlessui-disclosure-button-:R2mla:"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span class="absolute -inset-0.5"></span
            ><span class="sr-only">Open main menu</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="block h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button> -->
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <a href="/">
              <img
                alt="ReadManga.co.in"
                loading="lazy"
                width="190"
                height="190"
                decoding="async"
                data-nimg="1"
                class="h-8 w-auto"
                style="color: transparent"
                src="../assets/logo.svg"
              />
            </a>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                href="/"
                class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
                >Black Clover Manga</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <a href="/">Black Cover Manga</a>
      <div class="subheading">
        Read Black Clover Manga in English in Online for Free at
        ReadBlackClover.Vercel.App
      </div>
    </div>
  </nav> -->
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>
<style>
.header {
  display: flex;
  flex-direction: column;
}
</style>
