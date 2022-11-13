<template>
  <div class="route">
    <Header />
    <div class="title">{{ title }}</div>

    <div class="images" v-for="(chapter, index) in chapters" :key="index">
      <!-- {{ chapter }} -->
      <img :src="chapter.src" />
    </div>
  </div>
</template>

<script>
import d from '~/static/black_clover_mangas.json'
export default {
  async asyncData({ params, redirect }) {
    const filteredChapter = Object.entries(d).find(
      (el) => el[0].toLowerCase() === params.chapter
    )
    if (filteredChapter) {
      return {
        chapters: filteredChapter[1],
        title: filteredChapter[0],
      }
    } else {
      redirect('/')
    }
  },
}
</script>

<style></style>
