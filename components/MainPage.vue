<!-- Please remove this file from your project -->
<template>
  <section class="bg-slate-900 text-slate-500">
    <!-- <div class="introduction">
      <img src="/black_clover.png" format="webp" />
      <div class="details">
        <table>
          <tr>
            <td class="heading">Rating</td>
            <td class="content">Average 4.8/5</td>
          </tr>
          <tr>
            <td class="heading">Rank</td>
            <td class="content">1st, having more than 15.6M views</td>
          </tr>
          <tr>
            <td class="heading">Alternative</td>
            <td class="content">Black Clover, ブラッククローバー</td>
          </tr>
          <tr>
            <td class="heading">Author</td>
            <td class="content">TABATA Yuuki</td>
          </tr>
          <tr>
            <td class="heading">Genre</td>
            <td class="content">Action, Adventure, Drama, Fantasy, Shounen</td>
          </tr>
          <tr>
            <td class="heading">Type</td>
            <td class="content">Manga</td>
          </tr>
        </table>
      </div>
    </div> -->
    <div
      class="flex flex-col m-2 md:flex-row mb-4 content-center md:justify-center md:mt-4 md:items-stretch md:space-x-9 sm:flex-wrap sm:flex-col sm:align-middle"
    >
      <div
        class="flex-1 md:max-w-sm rounded overflow-hidden shadow-lg max-h-fit"
      >
        <img src="/black_clover.png" format="webp" class="w-full" />
      </div>
      <div
        class="flex-1 not-prose relative rounded-xl overflow-hidde md:max-w-sm bg-slate-800/25"
      >
        <table class="table-fixed">
          <thead>
            <th
              colspan="2"
              class="border-slate-400/20 border-b p-4 text-slate-200 font-medium"
            >
              Black Clover Details
            </th>
          </thead>
          <tbody class="bg-white dark:bg-slate-800">
            <tr>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                Rating
              </td>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                Average 4.8/5
              </td>
            </tr>
            <tr>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                Rank
              </td>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                1st, having more than 15.6M views
              </td>
            </tr>
            <tr>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                Alternative
              </td>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                Black Clover, ブラッククローバー
              </td>
            </tr>
            <tr>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                Author
              </td>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                TABATA Yuuki
              </td>
            </tr>
            <tr>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                Genre
              </td>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                Action, Adventure, Drama, Fantasy, Shounen
              </td>
            </tr>
            <tr>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                Type
              </td>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                Manga
              </td>
            </tr>
            <tr>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                Status
              </td>
              <td class="text-slate-400 border-b border-slate-700 p-4 pl-8">
                Running
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="wrapper"><MangaList /></div>
  </section>
</template>

<script>
export default {
  name: 'NuxtTutorial',
}
</script>
