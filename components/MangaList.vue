<template>
  <div>
    <div class="mangalist">
      <h1>Find the latest Black Clover releases</h1>
    </div>

    <div class="container" @scroll="onScroll">
      <div class="chapter" v-for="(chapter, id) in all" :key="chapter + id">
        <NuxtLink
          :to="`${id
            .replace(/ /g, '_')
            .toLowerCase()
            .replace('black_clover,_', '')}`"
          >{{ id }}</NuxtLink
        >
        <span class="subs">{{ chapter.chapter_name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import d from '~/static/black_clover_mangas.json'
export default {
  name: 'MangaList',
  data() {
    return {
      data: d,
      all: {},
      current: {},
      pointer: 10,
    }
  },
  methods: {
    sortArr() {
      this.all = Object.fromEntries(
        Object.entries(d).sort((a, b) => {
          return (
            b[0].replace('Black Clover, Chapter ', '') -
            a[0].replace('Black Clover, Chapter ', '')
          )
        })
      )

      this.current = Object.fromEntries(Object.entries(this.all).slice(0, 10))
    },
    loadMorePosts() {
      this.current = Object.fromEntries(
        Object.entries(this.all).slice(0, this.pointer)
      )
      this.pointer = this.pointer + 10
    },
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      console.log('scroll')
      if (scrollTop + clientHeight >= scrollHeight) {
        this.loadMorePosts()
      }
    },
  },
  created() {
    this.sortArr()
  },
}
</script>

<style>
.container {
  height: 49vh;
  overflow: auto;
  margin-bottom: 20px;
}
</style>
