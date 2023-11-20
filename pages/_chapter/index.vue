<template>
  <div>
    <Header />
    <div class="title">
      <h1 class="p-4 pb-0 text-slate-200 font-medium text-center">
        {{ title }}
      </h1>
      <h2 class="p-4 pt-0 text-slate-400 font-small text-center">
        {{ subtitle }}
      </h2>
    </div>
    <div class="flex justify-between">
      <button
        class="bg-blue-500 p-4 m-4 rounded-md shadow-lg shadow-blue-500/50 text-white text-xs"
      >
        <NuxtLink :to="`chapter_${currentchapter - 1}`"
          >Prev (CH# {{ currentchapter - 1 }})</NuxtLink
        >
      </button>
      <button
        class="bg-blue-500 p-4 m-4 rounded-md shadow-lg shadow-blue-500/50 text-white text-xs"
      >
        <NuxtLink :to="`chapter_${currentchapter + 1}`"
          >Next (CH# {{ currentchapter + 1 }})</NuxtLink
        >
      </button>
    </div>

    <section>
      <div class="flex items-center flex-col align-middle">
        <div class="images" v-for="(chapter, index) in chapters" :key="index">
          <img :src="chapter.src" :alt="chapter.id" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import d from '~/static/black_clover_mangas.json'
export default {
  data() {
    return {
      chapters: '',
      title: '',
      subtitle: '',
      keyword: '',
      nextchapter: '',
      previouschapter: '',
      currentchapter: '',
    }
  },
  async asyncData({ params, redirect }) {
    const filteredChapter = Object.entries(d).find(
      (el) =>
        el[0].replace(/ /g, '_').toLowerCase().replace('black_clover,_', '') ===
        params.chapter
    )
    if (filteredChapter) {
      return {
        chapters: filteredChapter[1].chapters,
        title: filteredChapter[0],
        subtitle: filteredChapter[1].chapter_name,
        keyword: filteredChapter[0].split(', ')[1],
        currentchapter: parseInt(
          filteredChapter[0]
            .replace(/ /g, '_')
            .toLowerCase()
            .replace('black_clover,_', '')
            .replace('chapter_', '')
        ),
        // nextchapter: currentchapter + 1,
      }
    } else {
      redirect('/')
    }
  },

  head() {
    return {
      title: this.title + ' - ' + this.subtitle,
      // keyword: this.title.split(', ')[1],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Read ${this.title} for Free - ${this.subtitle} | Free Manga Reader | ReadBlackClover.vercel.app`,
        },
        {
          name: 'keywords',
          content: `Read ${this.keyword}, ${this.title} free manga, Read ${this.keyword} from Black Clover for free, Free Manga Reader | ReadBlackClover.vercel.app`,
        },
      ],
    }
  },
}
</script>

<style>
.wrapper {
  flex-direction: column;
}
</style>
