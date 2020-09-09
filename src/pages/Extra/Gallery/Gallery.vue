<template>
  <v-container fluid class="gallery-page mt-6">
    <v-row>
      <template v-for="card in cards">
        <v-col
          cols="12"
          md="6"
          lg="3"
          :key="card.id"
          >
          <v-card
            class="mx-1 mb-1"
            link
            :ripple="{class: 'ripple-color' }"
            replace
            :key="card.id"
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
        src: require('@/assets/img/gallery/1.png'),
      },
      {
        id: 2,
        src: require('@/assets/img/gallery/2.png'),
      },
      {
        id: 3,
        src: require('@/assets/img/gallery/3.png'),
      },
      {
        id: 4,
        src: require('@/assets/img/gallery/4.png'),
      },
      {
        id: 5,
        src: require('@/assets/img/gallery/5.png'),
      },
      {
        id: 6,
        src: require('@/assets/img/gallery/6.png'),
      },
      {
        id: 7,
        src: require('@/assets/img/gallery/7.png'),
      },
      {
        id: 8,
        src: require('@/assets/img/gallery/8.png'),
      },
      {
        id: 9,
        src: require('@/assets/img/gallery/9.png'),
      },
      {
        id: 10,
        src: require('@/assets/img/gallery/10.png'),
      },
      {
        id: 11,
        src: require('@/assets/img/gallery/11.png'),
      },
      {
        id: 12,
        src: require('@/assets/img/gallery/12.png'),
      },
    ]
  }),
}

</script>

<style src="./Gallery.scss" lang="scss"></style>
