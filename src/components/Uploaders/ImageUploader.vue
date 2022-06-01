<template>
  <v-col cols="12">
    <CoolLightBox
      :items="coolLightBoxItems"
      :index="coolLightBoxIdx"
      @close="coolLightBoxIdx = null"
    >
    </CoolLightBox>
    <v-row>
      <v-col cols="3" class="d-flex align-center">
        <p class="fs-normal greyBold--text mb-0">{{ label }}</p>
      </v-col>
      <v-col cols="9">
        <input
          accept="image/*"
          @change="uploadFile"
          :ref="id"
          :id="id"
          type="file"
          name="file"
          class="d-none"
        />

        <div class="d-flex flex-wrap" v-if="images.length">
          <div
            v-for="(image, idx) in images"
            :key="'img' + idx"
            class="mb-2 mr-2 img-thumbnail-wrapper"
          >
            <img class="thumbnail" :src="image.publicUrl" />
            <div class="img-buttons">
              <button
                class="btn px-1 py-0"
                type="button"
                @click="coolLightBoxIdx = idx"
              >
                <v-icon color="white" small> mdi-magnify </v-icon>
              </button>
              <button
                class="btn px-1 py-0"
                type="button"
                @click="$emit('del', image.id)"
              >
                <v-icon color="white" small> mdi-delete </v-icon>
              </button>
            </div>
          </div>
        </div>
        <div>
          <v-btn type="button" @click="$refs[id].click()"> Select image </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
  import * as uuid from 'uuid/v4';
  import axios from 'axios';
  import config from '@/config';
  import CoolLightBox from 'vue-cool-lightbox';
  import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';
  import { mapMutations } from 'vuex';

  export default {
    components: { CoolLightBox },
    props: {
      id: {
        type: String,
      },
      label: {
        type: String,
      },
      images: {
        type: Array,
      },
      url: {
        type: String,
      },
    },
    emits: ['del', 'change'],
    data() {
      return {
        coolLightBoxIdx: null,
      };
    },
    computed: {
      fileList() {
        if (!this.images.length) return [];
        return this.images.map((item) => ({
          id: item.id || undefined,
          name: item.name,
          status: 'done',
          publicUrl: item.publicUrl,
        }));
      },
      coolLightBoxItems() {
        return this.images.map((item) => item.publicUrl);
      },
    },
    methods: {
      ...mapMutations({
        showSnackbar: 'snackbar/showSnackbar',
      }),
      async uploadFile(event) {
        const formData = new FormData();
        const files = event.target.files;
        if (!files || !files.length) {
          return;
        }
        let file = files[0];
        const extension = this.extractExtensionFrom(file.name);
        const id = uuid();
        const privateUrl = `/products/image/${id}.${extension}`;
        const publicUrl = `${config.baseURLApi}/file/download?privateUrl=${this.url}/${id}.${extension}`;
        formData.append('file', file);
        formData.append('filename', `${id}.${extension}`);

        try {
          await axios.post(`/file/upload/${this.url}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          this.showSnackbar('Image has been uploaded');

          this.$emit('change', {
            id,
            name: file.name,
            sizeInBytes: file.size,
            privateUrl,
            publicUrl,
            new: true,
          });
        } catch (e) {
          this.showSnackbar(e);
        }
      },
      extractExtensionFrom(filename) {
        if (!filename) {
          return null;
        }

        const regex = /(?:\.([^.]+))?$/;
        return regex.exec(filename)[1];
      },
    },
  };
</script>

<style scoped>
  .img-thumbnail-wrapper {
    position: relative;
    width: 100px;
    height: 100px;
  }
  .thumbnail {
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    background-color: #f9fbfd;
    border: 1px solid #d6dee5;
  }
  .img-buttons {
    display: none;
    position: absolute;
    bottom: 15px;
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .img-thumbnail-wrapper:hover .img-buttons {
    display: block;
  }
  .img-buttons * {
    color: #fff;
    cursor: pointer;
  }
</style>
