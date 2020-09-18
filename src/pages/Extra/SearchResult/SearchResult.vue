<template>
  <v-container fluid class="search-result-page mt-6 mx-1">
    <v-row>
      <v-col>
        <div class="d-inline-flex">
          <v-select
            style="width: 150px"
            :items="items"
            class="mr-3"
            value="Popular"
            outlined
            single-line
          ></v-select>
          <v-select
            style="width: 150px"
            outlined
            single-line
            value="All Time"
            :items="itemsSec"
            label="Standard"
          ></v-select>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <p>About 94 700 000 (0.39 sec.) results</p>
    </v-row>
    <v-row>
      <v-col cols="12" md="8" order="2" order-md="1"  >
        <v-row no-gutters>
          <v-col :key="i" v-for="(item, i) in searchResult">
            <v-row no-gutters>
              <v-card class="mb-5 d-flex" max-height="160">
                <v-col cols="2" sm="3" md="2" lg="3" xl="2" class="pa-0">
                  <v-img
                    :src=item.img
                    width="150"
                    min-height="160"
                    class="ma-0 rounded rounded-r-0"
                  ></v-img>
                </v-col>
                <v-col cols="5" sm="6" md="7" lg="6" xl="8" class="pt-5">
                  <a><h4 class="primaryConst--text mb-1 font-weight-bold">{{ item.title }}</h4></a>
                  <p class="fs-medium">{{ item.subtitle }}</p>
                  <p class="text-truncate d-none d-sm-block">{{ item.text }}</p>
                </v-col>
                <v-col cols="5" sm="3" md="3" lg="3" xl="2" class="pt-5 pl-5">
                  <h4>{{ item.price }}</h4>
                  <p>per week</p>
                  <v-btn small class="button-shadow" color="primary">Learn more</v-btn>
                </v-col>
              </v-card>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-pagination
              class="main-pagination"
              v-model="page"
              :length="4"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" order="1" order-md="2">
        <p class="text-h4">Results Filtering</p>
        <p class="subtitle-1">Listed content is categorized by the following groups:</p>
        <v-list color="transparent">
          <v-list-item
            v-for="item in filtering"
            :key="item.id"
            link>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-badge
                :color="item.color"
                :content="item.count"
              ></v-badge>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'SearchResult',
      data: () => ({
        items: ['All', 'Popular', 'Interesting', 'Latest'],
        itemsSec: ['All Time', 'Last 24 h', 'Last Month', 'Last Year', 'Latest'],
        filtering: [
          {
            id: 1, title: 'Hot Ideas', color: 'primary', count: '34'
          },
          {
            id: 2, title: 'Latest Pictures', color: 'secondary', count: '9'
          },
          {
            id: 3, title: 'Labels of Day', color: null, count: null
          },
          {
            id: 4, title: 'Resent Movies', color: null, count: null
          },
          {
            id: 5, title: 'Globals', color: 'warning', count: 18
          },
        ],
        searchResult: [
          {
            img: require('@/assets/img/e-commerce/medium/1.png'),
            title: 'Next generation admin template',
            subtitle: 'New York, NY 2018',
            text: 'Not just usual Metro. But something bigger. Not just usual widgets, but real widgets. Not just yet another admin template, but next generation admin template.',
            price: '$9700'
          },
          {
            img: require('@/assets/img/e-commerce/medium/2.png'),
            title: 'Try. Posted by Okendoken',
            subtitle: 'Los Angeles, NY 20188',
            text: 'You will never know exactly how something will go until you try it. You can think three hundred times and still have no precise result.',
            price: '$10300'
          },
          {
            img: require('@/assets/img/e-commerce/medium/3.png'),
            title: 'Vitaut the Great',
            subtitle: 'New York, NY 20188',
            text: 'The Great Prince of the Grand Duchy of Lithuania he had stopped the invasion to Europe of Timur (Tamerlan) from Asia heading a big Army of Belarusians, Lithuanians.',
            price: '$3200'
          },
          {
            img: require('@/assets/img/e-commerce/medium/4.png'),
            title: 'Can I use CSS3 Radial-Gradient?',
            subtitle: 'Minsk, NY 20188',
            text: 'Yes you can! Further more, you should! It let\'s you create really beautiful images either for elements or for the entire background.',
            price: '$2400'
          },
        ],
        page: 1
    }),
  }
</script>

<style src="./SearchResult.scss" lang="scss"></style>
