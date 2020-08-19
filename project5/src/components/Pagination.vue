<template>
  <nav aria-label="Page navigation example">
<ul class="pagination">
    <li class="page-item" :class="{'disabled' :pages.current_page === 1}">
      <a class="page-link" href="#" @click.prevent="updatePages(pages.current_page -1)">Previous</a>
    </li>

    <li class="page-item" v-for="(item ,index) in pages.total_pages" :class="{'active': item === pages.current_page}" :key="index">
     <a class="page-link"  href="#" @click.prevent="updatePages(item)">{{ item }}</a>
    </li>

    <li class="page-item" :class="{'disabled' :pages.current_page === pages.total_pages}">
       <a class="page-link" href="#" @click.prevent="updatePages(pages.current_page +1)">Next</a>
    </li>
</ul>
</nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    updatePages (page) {
      this.$emit('update', page)
    }
  }
}
</script>
