<template>
  <div>
    <label>Url фото</label>
    <input v-model="value" type="text" class="form-control" />
    <input ref="file" type="file" class="hidden" @change="upload" />
    <button class="btn btn-primary" @click="selectFile">Select file</button>
  </div>
</template>

<script>
import axios from "@/axios.js";

export default {
  name: "AvatarUploader",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    selectFile() {
      this.$refs.file.click();
    },
    upload() {
      const url = "https://api.imgur.com/3/image";
      const config = {
        headers: {
          Authorization: "Client-ID 0cc86f7041975f3"
        }
      };
      const data = new FormData();
      data.append("image", this.$refs.file.files[0]);
      axios
        .post(url, data, config)
        .then(response => response.data)
        .then(response => {
          this.$emit("input", response.data.link);
          this.$refs.file.value = "";
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style lang="scss">
.hidden {
  display: none;
}
</style>
