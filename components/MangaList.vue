<template>
  <div>
    <div class="mangalist">Find the latest manga releases</div>

    <div class="chapter" v-for="(chapter, id) in sortArr()" :key="id">
      {{ id }}
    </div>
    <!-- {{ sortArr() }} -->
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
            // a - b
            a[0].replace('Black Clover, Chapter ', '') -
            b[0].replace('Black Clover, Chapter ', '')
          )
        })
      )
    },
  },
}
</script>

<style></style>
