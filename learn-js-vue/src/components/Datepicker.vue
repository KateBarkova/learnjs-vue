<template>
  <div>
    <input ref="picker" type="text" class="form-control" :value="value" />
  </div>
</template>

<script>
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

export default {
  name: "Datepicker",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => {
    null;
  },
  watch: {
    value: "updateDatepicker"
  },
  mounted() {
    this.initDatapicker();
  },
  beforeDestroy() {
    if (this.fp) {
      this.fp.destroy();
    }
  },
  methods: {
    initDatapicker() {
      this.fp = flatpickr(this.$refs.picker, {
        dateFormat: "d.m.Y",
        onChange: (selectedDates, dateStr) => {
          this.$emit("input", dateStr);
        }
      });
    },
    updateDatepicker() {
      if (this.fp) {
        this.fp.setDate(this.value);
      }
    }
  }
};
</script>
