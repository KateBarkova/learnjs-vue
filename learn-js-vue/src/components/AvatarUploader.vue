<template>
  <div ref="imagezone">
    <p>
      <img
        class="img-thumbnail"
        :src="picture"
        width="200px"
        height="200px"
        alt="Photo"
      >
    </p>
    <div class="row">
      <div class="col-md-2">
        <input
          type="file"
          ref="image"
          class="hidden"
          @change="upload" >
        <button
          class="btn btn-primary btn-block"
          @click="selectNewImage">Выбрать</button>
      </div>
      <div class="col-md-10">
        <input
          type="text"
          class="form-control"
          v-model="picture"
          readonly >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios.js";
import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'

export default {
  name: "AvatarUploader",
  model: {
    prop: 'picture'
  },
  props: {
    picture: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.initDropzone()
  },

  methods: {
    // Показать окно выбора файла
    selectNewImage() {
      this.$refs.image.click()
    },
    setNewAvatar(picture) {
      this.$emit('input', picture)
    },
    upload() {
      const url = "https://api.imgur.com/3/image";
      const config = {
        headers: {
          Authorization: "Client-ID 0cc86f7041975f3"
        }
      };
      const data = new FormData();
      data.append("image", this.$refs.image.files[0]);
      axios
        .post(url, data, config)
        .then(response => response.data)
        .then(response => {
          this.setNewAvatar(response.data.link)
          this.$refs.image.value = ''
        })
        .catch(error => {
          console.error(error);
        });
    },
    initDropzone() {
      /* eslint-disable no-new */
      new Dropzone(this.$refs.imagezone, {
        url: 'https://api.imgur.com/3/image',
        paramName: 'image',
        acceptedFiles: 'image/*',
        method: 'post',
        headers: {
          'Cache-Control': null,
          'X-Requested-With': null,
          Authorization: 'Client-ID 0cc86f7041975f3'
        },
        createImageThumbnails: false,
        previewTemplate: '<div style="display:none"></div>',
        success: (file, response) => {
          this.setNewAvatar(response.data.link)
          this.$refs.image.value = ''
        }
      })
    }
  }
};
</script>

<style lang="scss">
.hidden {
  display: none;
}
</style>
