<template>
  <select class="form-control" :value="value" @input="changed">
    <option v-for="item in list" :key="item" :value="item">
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  name: "ListPerPage",
  props: {
    value: {
      type: Number,
      required: true
    },
    list: {
      type: Array,
      default: () => [5, 10, 20, 50]
    }
  },
  methods: {
    changed(event) {
      const { target } = event;
      if (target) {
        const { value } = target;
        this.$emit("input", value);
      }
    }
  }
};
</script>
