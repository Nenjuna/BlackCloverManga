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
      }
    } else {
      redirect('/')
    }
  },
}
</script>

<style>
.wrapper {
  flex-direction: column;
}
</style>
