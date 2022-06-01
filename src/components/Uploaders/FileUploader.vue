<template>
  <v-col cols="12">
    <v-row>
      <v-col cols="3" class="d-flex align-center">
        <p class="fs-normal greyBold--text mb-0">{{ label }}</p>
      </v-col>
      <v-col cols="9">
        <input
          @change="uploadFile"
          :id="id"
          type="file"
          name="file"
          class="d-none"
          multiple
        />
        <div class="mt-2 mb-2" v-if="files.length > 0">
          <a
            v-for="(file, idx) in files"
            :key="`select-id-${idx}${file.name.split('.')[0].toString()}`"
            :href="file.publicUrl"
            class="d-block text-decoration-none"
          >
            {{ file.name }}
            <v-icon @click.prevent="$emit('del', file.id)"> mdi-delete </v-icon>
          </a>
        </div>
        <v-btn>
          <label class="mb-0" :for="id">Select file</label>
        </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
  import * as uuid from 'uuid/v4';
  import axios from 'axios';
  import config from '@/config';
  import { mapMutations } from 'vuex';

  export default {
    name: 'fileUploader',
    props: {
      id: {
        type: String,
      },
      label: {
        type: String,
      },
      files: {
        type: Array,
      },
      url: {
        type: String,
      },
    },
    emits: ['del', 'change'],
    computed: {
      fileList() {
        if (!this.files.length) return [];
        return this.files.map((item) => ({
          id: item.id || undefined,
          name: item.name,
          status: 'done',
          publicUrl: item.publicUrl,
        }));
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
        const publicUrl = `${config.baseURLApi}/file/download?privateUrl=products/image/${id}.${extension}`;
        formData.append('file', file);
        formData.append('filename', `${id}.${extension}`);
        try {
          await axios.post(`/file/upload/${this.url}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          this.showSnackbar('File has been uploaded');

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
