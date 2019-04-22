<template>
  <ul class="pagination">
    <li class="page-item" :class="{ disabled: page === 1 }">
      <a
        href="#"
        class="page-link"
        title="Предыдущая страница"
        @click.prevent="prevPage"
      >
        <span>&laquo;</span>
      </a>
    </li>

    <li
      v-for="item in maxPages"
      :key="item"
      class="page-item"
      :class="{ active: page === item }"
    >
      <a href="#" class="page-link" @click.prevent="selectPage(item)">
        {{ item }}
      </a>
    </li>

    <li class="page-item" :class="{ disabled: page === maxPages }">
      <a
        href="#"
        class="page-link"
        title="Следующая страница"
        @click.prevent="nextPage"
      >
        <span>&raquo;</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  model: {
    prop: "page"
  },
  props: {
    page: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  data: () => ({}),
  computed: {
    maxPages() {
      return Math.ceil(this.total / this.perPage);
    }
  },
  methods: {
    prevPage() {
      const pageNum = this.page - 1;
      if (pageNum > 0) {
        this.selectPage(pageNum);
      }
    },
    nextPage() {
      const pageNum = this.page + 1;
      if (pageNum <= this.maxPages) {
        this.selectPage(pageNum);
      }
    },
    selectPage(page) {
      this.$emit("input", page);
    }
  }
};
</script>
