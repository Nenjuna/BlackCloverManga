<template>
  <div>
    <div class="mangalist">
      <h1>Find the latest Black Clover releases</h1>
    </div>

    <div class="container">
      <div
        class="chapter"
        v-for="(chapter, id) in sortArr()"
        :key="chapter + id"
      >
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
    }
  },
  methods: {
    sortArr() {
      return Object.fromEntries(
        Object.entries(d).sort((a, b) => {
          return (
            b[0].replace('Black Clover, Chapter ', '') -
            a[0].replace('Black Clover, Chapter ', '')
          )
        })
      )
    },
  },
}
</script>

<style></style>
