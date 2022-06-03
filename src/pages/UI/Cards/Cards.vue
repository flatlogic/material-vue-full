<template>
  <v-container fluid class="cards-page mt-3">
    <v-row>
      <v-col cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-img
            :src="cards[0].src"
            class="white--text align-start"
            gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="500">
            <v-card-text class="pa-5">
              <h5>13 Mar</h5>
              <h2>Lifestyle brand</h2>
              <p>A lifestyle brand is a company that markets its products or services to embody the interests, attitudes,
                and opinions of a group or a culture. Lifestyle brands seek to inspire, guide, and motivate people, with
                the goal of their products contributing to the definition of the consumer's way of life.</p>
              <v-btn
                color="primary"
                dark
                class="button-shadow">
                Learn More
              </v-btn>
            </v-card-text>

          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="overflow-hidden mx-1">
          <v-img
            :src="cards[1].src"
            class="white--text align-end"
            height="215"
          ></v-img>
          <v-card-text class="pa-5">
            <h3 class="greyBold--text">Lizard</h3>
            <p class="greyBold--text">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica</p>
          </v-card-text>
          <v-card-actions class="ma-2">
            <v-btn
              color="primary"
              class="button-shadow"
            >
              Share
            </v-btn>
            <v-btn
              color="error"
              class="button-shadow"
            >
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="overflow-hidden mx-1 mb-8">
          <v-card-title>
            <span class="success--text mr-2">Avr Rating</span>
            <span>All Time</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="">
            <v-row>
              <v-col cols="6">
                <template v-for="n in 5">
                  <v-icon :key="n" color="warning">mdi-star</v-icon>
                </template>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="6" class="text-right">
                <span class="body-1 text-capitalize">342 review</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <span class="body-1 success--text">69%</span> of customers recommend this product
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="ma-2">
            <v-btn
                color="success"
                class="button-shadow"
            >
              Write a review
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-text class="pa-0">
            <v-list-item class="grow">
              <v-list-item-avatar>
                <v-avatar color="primary" size="36">
                  <span class="white--text fs-large">R</span>
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Weekly Inspiration</v-list-item-title>
                <v-list-item-subtitle>September 14, 2016</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
          <v-img
            :src="cards[2].src"
            class="white--text align-end"
            height="215"
          >
          </v-img>
          <v-card-text class="pa-5 pb-0">
            <p class="greyBold--text">There are at least 109 mountains on Earts with elevations greeter than 7,200 meters</p>
          </v-card-text>
          <v-card-actions class="pa-5 pt-0">
            <v-btn icon>
              <v-icon color="greyTint">mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="greyTint">mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-img
            :src="cards[3].src"
            class="white--text align-end"
            height="215"
          ></v-img>
          <v-card-title>Technologies</v-card-title>
          <v-card-subtitle class="greyBold--text">React Native Starter</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-actions class="ma-2">
            <p class="mb-0">from $49.95</p>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              class="button-shadow">
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Cards',
  data () {
    return {
      menu: [
        'Edit',
        'Copy',
        'Delete',
        'Print'
      ],
      cards: [
        { title: 'Pre-fab homes', src: require('@/assets/img/cards/mac.png'), flex: 12 },
        { title: 'Lizard', src: require('@/assets/img/cards/candy.png'), flex: 6 },
        { title: 'Best airlines', src: require('@/assets/img/cards/city.png'), flex: 6 },
        { title: 'Best airlines', src: require('@/assets/img/cards/rns.png'), flex: 6 },
      ],
    }
  }
}
</script>

<style src="./Cards.scss" lang="scss"/>
