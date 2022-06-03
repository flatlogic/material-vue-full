<template>
  <v-container fluid class="product-grid-page mt-5 px-0 px-md-2">
    <v-row class="mb-n3">
      <v-col
        v-for="(select, i) in selects"
        :key="i"
        class="d-flex" cols="12" sm="6" md="4" lg="2">
        <v-select
          :key="i"
          :items="select.items"
          :label="select.type"
          :value="select.items[0]"
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <template v-for="(card, i) in cards">
        <v-col
          cols="12"
          md="6"
          lg="3"
          :key="i">
          <v-card
            class="ma-1"
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
                <v-icon size="20" color="warning">mdi-star</v-icon>
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
  name: 'ProductsGrid',
  data(){
    return {
      cards: [
        {
          id: 1,
          title: 'Trainers',
          subtitle: 'Trainers in white',
          src: require('@/assets/img/e-commerce/medium/1.png'),
          price: '78',
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
          price: '78',
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
        },
        {
          id: 5,
          title: 'Flat sandals',
          subtitle: 'Trainers in white',
          src: require('@/assets/img/e-commerce/medium/5.png'),
          price: '78',
          rating: '4.6',
          badge: {
            color: 'primary',
            content: 'New'
          }
        },
        {
          id: 6,
          title: 'Flat sandals',
          subtitle: 'Trainers in white',
          src: require('@/assets/img/e-commerce/medium/6.png'),
          price: '78',
          rating: '4.6',
          badge: {
            color: 'secondary',
            content: 'Sale'
          }
        },
        {
          id: 7,
          title: 'Trainers',
          subtitle: 'Trainers in white',
          src: require('@/assets/img/e-commerce/medium/1.png'),
          price: '78',
          rating: '4.6',
          badge: {
            color: 'primary',
            content: 'New'
          }
        },
        {
          id: 8,
          title: 'Boots',
          subtitle: 'Trainers in blue',
          src: require('@/assets/img/e-commerce/medium/2.png'),
          price: '78',
          rating: '4.6',
        },
        {
          id: 9,
          title: 'Flat sandals',
          subtitle: 'Trainers in white',
          src: require('@/assets/img/e-commerce/medium/3.png'),
          price: '78',
          rating: '4.6',
          badge: {
            color: 'primary',
            content: 'New'
          }
        },
        {
          id: 10,
          title: 'Flat sandals',
          subtitle: 'Trainers in white',
          src: require('@/assets/img/e-commerce/medium/4.png'),
          price: '78',
          rating: '4.6',
        },
        {
          id: 11,
          title: 'Boots',
          subtitle: 'Trainers in blue',
          src: require('@/assets/img/e-commerce/medium/5.png'),
          price: '78',
          rating: '4.6',
        },
        {
          id: 12,
          title: 'Boots',
          subtitle: 'Trainers in blue',
          src: require('@/assets/img/e-commerce/medium/6.png'),
          price: '78',
          rating: '4.6',
          badge: {
            color: 'secondary',
            content: 'Sale'
          }
        }
      ],
      selects: [
          {
            type: 'Type',
            items: ['Shoes', 'Boots', 'Trainers'],
          },
          {
            type: 'Brands',
            items: ['All', 'Nike', 'Adidas']
          },
          {
            type: 'Size',
            items: ['7', '8', '9', '10', '11']
          },
          {
            type: 'Color',
            items: ['All', 'White', 'Black']
          },
          {
            type: 'Range',
            items: ['All', '-', 'None']
          },
          {
            type: 'Sort',
            items: ['Favorite', 'Price', 'Popular']
          },
      ],
    }
  }
}

</script>

<style src="./ProductGrid.scss" lang="scss"></style>
