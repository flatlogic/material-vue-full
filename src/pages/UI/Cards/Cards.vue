<template>
  <v-container fluid class="cards-page">
    <v-row no-gutters class="d-flex mt-10 mb-6">
      <h1 class="page-title">Cards</h1>
    </v-row>
    <v-row>
      <v-col cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-img
              :src="cards[0].src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="250px"
          >
            <v-card-text class="pa-5">
              <h5>13 Mar</h5>
              <h2>Lifestyle brand</h2>
              <p>A lifestyle brand is a company that markets its products or services to embody the interests, attitudes,
                and opinions of a group or a culture. Lifestyle brands seek to inspire, guide, and motivate people, with
                the goal of their products contributing to the definition of the consumer's way of life.</p>
            </v-card-text>

            <v-card-actions>
              <v-btn
                text
                dark
              >
                Learn More
              </v-btn>

            </v-card-actions>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-img
              :src="cards[0].src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="140px"
          ></v-img>
          <v-card-title>Lifestyle brand</v-card-title>
          <v-card-text class="pa-5">
            <p>A lifestyle brand is a company that markets its products or services to embody the interests, attitudes,
              and opinions of a group or a culture. Lifestyle brands seek to inspire, guide, and motivate people, with
              the goal of their products contributing to the definition of the consumer's way of life.</p>
          </v-card-text>
          <v-card-actions class="ma-2">
            <v-btn
                color="primary"
            >
              Share
            </v-btn>
            <v-btn
                color="error"
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
            >
              Write a review
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-text class="pa-5">
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Weekly Inspiration</v-list-item-title>
                <v-list-item-subtitle>September 14, 2016</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
          <v-img
              :src="cards[0].src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="140px"
          >
          </v-img>
          <v-card-text class="pa-5">
            <p>There are at least 109 mountains on Earts with elevations greeter than 7,200 meters</p>
          </v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-img
              :src="cards[0].src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="140px"
          ></v-img>
          <v-card-title>Technologies</v-card-title>
          <v-card-subtitle>React Native Starter</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-actions class="ma-2">
            <p class="mb-0">from $49.95</p>
            <v-spacer></v-spacer>
            <v-btn
                color="success"
            >
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
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }
  }
}
</script>

<style src="./Cards.scss" lang="scss"/>
