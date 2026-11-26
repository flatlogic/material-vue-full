<template>
  <v-container fluid class="gallery-page mt-6">
    <v-row>
      <template v-for="card in cards" :key="card.id">
        <v-col
          cols="12"
          md="6"
          lg="3"
          >
          <v-card
            class="mx-1 mb-1"
            link
            :ripple="{class: 'ripple-color' }"
            replace
              >
            <v-img
              height="200"
              :src="card.src"
            ></v-img>

            <v-card-text>
              Visit ten places on our planet that are undergoing the biggest changes today.
            </v-card-text>
            <v-card-actions>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-comment</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Gallery',
  data: () => ({
    cards: [
      {
        id: 1,
        src: new URL('../../../assets/img/gallery/1.png', import.meta.url).href,
      },
      {
        id: 2,
        src: new URL('../../../assets/img/gallery/2.png', import.meta.url).href,
      },
      {
        id: 3,
        src: new URL('../../../assets/img/gallery/3.png', import.meta.url).href,
      },
      {
        id: 4,
        src: new URL('../../../assets/img/gallery/4.png', import.meta.url).href,
      },
      {
        id: 5,
        src: new URL('../../../assets/img/gallery/5.png', import.meta.url).href,
      },
      {
        id: 6,
        src: new URL('../../../assets/img/gallery/6.png', import.meta.url).href,
      },
      {
        id: 7,
        src: new URL('../../../assets/img/gallery/7.png', import.meta.url).href,
      },
      {
        id: 8,
        src: new URL('../../../assets/img/gallery/8.png', import.meta.url).href,
      },
      {
        id: 9,
        src: new URL('../../../assets/img/gallery/9.png', import.meta.url).href,
      },
      {
        id: 10,
        src: new URL('../../../assets/img/gallery/10.png', import.meta.url).href,
      },
      {
        id: 11,
        src: new URL('../../../assets/img/gallery/11.png', import.meta.url).href,
      },
      {
        id: 12,
        src: new URL('../../../assets/img/gallery/12.png', import.meta.url).href,
      },
    ]
  }),
}

</script>

<style src="./Gallery.scss" lang="scss"></style>
