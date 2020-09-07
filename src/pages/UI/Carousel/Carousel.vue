<template>
  <v-container fluid class="carousel-page mt-3">
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-text class="pa-0">
            <v-carousel
              cycle
              height="315"
              hide-delimiter-background
              show-arrows-on-hover
              >
                <v-carousel-item
                  v-for="(slide, i) in secondSlideShow.items"
                  :key="i"
                  :src="slide.src"
                >
                </v-carousel-item>
              </v-carousel>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-text class="pa-0">
            <v-carousel hide-delimiters height="315">
                <v-carousel-item
                  v-for="(item,i) in secondSlideShow.items"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
              </v-carousel>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-text class="pa-0">
            <v-carousel
              cycle
              height="315"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item
                v-for="(slide, i) in thirdSlideShow.items"
                :key="i"
                :src="slide.src"
              >
                <v-row class="fill-height">
                  <div class="fs-lg pt-5 pl-10">{{ slide.text }}</div>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      menu: [
        'Edit',
        'Copy',
        'Delete',
        'Print'
      ],
      secondSlideShow: {
        items: [
          {
            src: require('@/assets/img/carusel/small-1.png'),
          },
          {
            src: require('@/assets/img/carusel/small-2.png'),
          },
          {
            src: require('@/assets/img/carusel/small-3.png'),
          },
        ]
      },
      thirdSlideShow: {
        items: [
          {
            text: 'Alaska - Glacier Bay National Park, United States',
            src: require('@/assets/img/carusel/big-1.png'),
          },
          {
            text: 'San Francisco – Oakland Bay Bridge, United States',
            src: require('@/assets/img/carusel/big-2.png'),
          },
          {
            text: 'Bali, Indonesia',
            src: require('@/assets/img/carusel/big-3.png'),
          },
        ]
      }
    }
  }
}
</script>

<style src="./Carousel.scss" lang="scss"/>
