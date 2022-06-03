<template>
  <v-container fluid class="detail-page mt-6 px-2">
    <v-card>
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-img height="475" :src="mainInfo.image"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <div class="pa-3">
            <v-card-title class="d-flex align-center mb-3">
              <h2 class="mb-0">{{ mainInfo.title }}</h2>
              <span class="warning--text fs-lg ml-5">{{ mainInfo.rating }} </span><v-icon color="warning">mdi-star</v-icon>
            </v-card-title>
            <v-card-subtitle>
              {{ mainInfo.subtitle}}
            </v-card-subtitle>
            <v-card-text>
              <h3>{{'$' +  mainInfo.price }}</h3>
              <p>Size guide</p>
              <v-row>
                <v-col cols="6">
                  <v-select :items="selectItems" :value="selectItems[3]" label="Select size" outlined></v-select>
                </v-col>
                <v-col cols="6">
                  <v-select :items="selectItems" :value="selectItems[3]" label="Select number" outlined></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-btn block color="primary" class="button-shadow">
                    Add to bag
                    <v-icon class="ml-3">mdi-cart</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" md="6">
                  <v-btn block color="error" class="button-shadow">
                    Add to wishlist
                    <v-icon class="ml-3">mdi-heart</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-img class="d-inline-block mr-2"
                    src="../../../assets/img/e-commerce/pay/mastercard.png"
                    width="50"
                    height="30"
                  >
                  </v-img>
                  <v-img class="d-inline-block mr-2"
                    src="../../../assets/img/e-commerce/pay/visa.png"
                    width="50"
                    height="30"
                  >
                  </v-img>
                  <v-img class="d-inline-block mr-2"
                    src="../../../assets/img/e-commerce/pay/paypal.png"
                    width="50"
                    height="30"
                  >
                  </v-img>
                </v-col>
              </v-row>
              <p class="mb-0">FREE Delivery & Returns</p>
            </v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-10">
      <v-card-title>
        <p>Product Info</p>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <h3>Product Description</h3>
            <ul>
              <li>Sneakers (also known as athletic shoes, tennis shoes,gym shoes,
                runners, takkies, or trainers) are shoes primarily designed for
                sports or other forms of physical exercise, but which are now also
                often used for everyday wear.</li>
              <li>
                The term generally describes a type of footwear with a flexible sole
                made of rubber or synthetic material and an upper part made of leather
                or synthetic materials.
              </li>
            </ul>
          </v-col>
          <v-col cols="12" md="7" offset-lg="1">
            <v-row no-gutters>
              <v-col cols="12" md="6">
                <h3>Product Code</h3>
                <p>135234</p>
              </v-col>
              <v-col cols="12" md="6" class="mb-3">
                <h3>Share</h3>
                <p>Share photo with a tag <a href="#">#whitetrainers</a></p>
                <v-btn icon  class="mr-3">
                  <v-icon small>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon class="mr-3">
                  <v-icon small>mdi-instagram</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon small>mdi-twitter</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="6">
                <h3>Technology</h3>
                <ul>
                  <li>Ollie patch</li>
                  <li>Cup soles</li>
                  <li>Vulcanized rubber soles</li>
                </ul>
              </v-col>
              <v-col cols="6">
                <h3 class="mb-0">Rating & Reviews</h3>
                <div class="d-flex align-center my-4">

                  <span class="warning--text" style="font-size: 1.5rem">4.6</span><v-icon color="warning">mdi-star</v-icon>
                </div>

                <p>32 Reviews</p>
                <a href="">Read All</a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-row no-gutters class="d-flex mt-12 mb-0">
      <h3 class="greyTint--text">You may also like</h3>
    </v-row>
    <v-row>
      <template v-for="(card, i) in cards">
        <v-col
          cols="12"
          md="6"
          lg="3"
          :key="i">
          <v-card
            class="mx-1 mb-1"
            link
            replace
            :key="i">
            <v-img
              height="200"
              :src="card.src"
            ></v-img>
            <v-chip v-if="card.badge"
              :color="card.badge.color"
            >
              {{ card.badge.content }}
            </v-chip>
            <v-card-title>
              {{ card.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ card.subtitle }}
            </v-card-subtitle>
            <v-card-actions class="pa-4">
              <span>{{ '$' + card.price }}</span>
              <v-spacer></v-spacer>
              <div class="d-flex align-center">
                <span class="warning--text" style="font-size: 1rem">{{ card.rating }}&#160;&#160;</span>
                <v-icon color="warning">mdi-star</v-icon>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      mainInfo: {
        image: require('@/assets/img/e-commerce/large/1.png'),
        title: 'TRAINERS',
        rating: '4,6',
        subtitle: 'Trainers in white',
        price: '80',
      },
      selectItems: [
          1,2,3,4,5
      ],
      cards: [
        {
          id: 1,
          title: 'Trainers',
          subtitle: 'Trainers in white',
          src: require('@/assets/img/e-commerce/medium/1.png'),
          price: '48',
          rating: '4.6',
          badge: {
            color: 'primary',
            content: 'New'
          }
        },
        {
          id: 2,
          title: 'Boots',
          subtitle: 'Trainers in blue',
          src: require('@/assets/img/e-commerce/medium/2.png'),
          price: '69',
          rating: '4.6',
          badge: {
            color: 'secondary',
            content: 'Sale'
          }
        },
        {
          id: 3,
          title: 'Flat sandals',
          subtitle: 'Trainers in white',
          src: require('@/assets/img/e-commerce/medium/3.png'),
          price: '78',
          rating: '4.6',
        },
        {
          id: 4,
          title: 'Trainers',
          subtitle: 'Trainers in blue',
          src: require('@/assets/img/e-commerce/medium/4.png'),
          price: '78',
          rating: '4.6',
          badge: {
            color: 'primary',
            content: 'New'
          }
        }
      ],
    }
  }
}

</script>

<style src="./ProductDetail.scss" lang="scss"></style>
