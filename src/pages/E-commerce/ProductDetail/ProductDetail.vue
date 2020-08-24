<template>
  <v-container fluid class="detail-page">
    <v-row no-gutters class="d-flex mt-10 mb-6">
      <h1 class="page-title">Product Detail</h1>
    </v-row>
    <v-card>
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-img height="475" :src="mainInfo.image"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <div class="pa-3">
            <v-card-title class="d-flex align-center mb-3">
              <h2 class="mb-0">{{ mainInfo.title }}</h2>
              <span class="warning--text ml-5" style="font-size: 1.5rem">{{ mainInfo.rating }} </span><v-icon color="warning">mdi-star</v-icon>
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
                  <v-select :items="selectItems" :value="selectItems[3]"></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-btn block color="primary">Add to bag
                  <v-icon class="ml-3">mdi-cart</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" md="6">
                  <v-btn block color="error">
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
          <v-col cols="12" md="4">
            <h3>Product Code</h3>
            <p>135234</p>
            <h3>Technology</h3>
            <ul>
              <li>Ollie patch</li>
              <li>Cup soles</li>
              <li>Vulcanized rubber soles</li>
            </ul>
          </v-col>
          <v-col cols="12" md="4"></v-col>
        </v-row>
      </v-card-text>
    </v-card>
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
      ]
    }
  }
}

</script>

<style src="./ProductDetail.scss" lang="scss"></style>
