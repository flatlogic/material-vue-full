<template>
  <v-container fluid class="gallery-page">
    <v-row no-gutters class="d-flex mt-10 mb-6">
      <h1 class="page-title">Products Grid</h1>
    </v-row>
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
  name: 'ProductsGrid',
  data(){
    return {
      cards: [
        {
          id: 1,
          src: require('@/assets/img/e-commerce/1.png')
        },
        {
          id: 2,
          src: require('@/assets/img/e-commerce/2.png')
        },
        {
          id: 3,
          src: require('@/assets/img/e-commerce/3.png')
        },
        {
          id: 4,
          src: require('@/assets/img/e-commerce/4.png')
        },
        {
          id: 5,
          src: require('@/assets/img/e-commerce/5.png')
        },
        {
          id: 6,
          src: require('@/assets/img/e-commerce/6.png')
        },
        {
          id: 7,
          src: require('@/assets/img/e-commerce/1.png')
        },
        {
          id: 8,
          src: require('@/assets/img/e-commerce/2.png')
        },
        {
          id: 9,
          src: require('@/assets/img/e-commerce/3.png')
        },
        {
          id: 10,
          src: require('@/assets/img/e-commerce/4.png')
        },
        {
          id: 11,
          src: require('@/assets/img/e-commerce/5.png')
        },
        {
          id: 12,
          src: require('@/assets/img/e-commerce/6.png')
        },
      ]
    }
  }
}

</script>
