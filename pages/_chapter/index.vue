<template>
  <div>
    <Header />
    <div class="title">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </div>

    <section>
      <div class="wrapper">
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
