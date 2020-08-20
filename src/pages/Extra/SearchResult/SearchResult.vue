<template>
  <v-container fluid class="search-result-page">
    <v-row no-gutters class="d-flex mt-10 mb-6">
      <h1 class="page-title">Search Result</h1>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-inline-flex">
          <v-select
            style="width: 150px"
            :items="items"
            class="mr-3"
            value="Popular"
            solo
            label="Standard"
          ></v-select>
          <v-select
            style="width: 150px"
            solo
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
      <v-col cols="8">
        <v-row no-gutters>
          <v-col cols="12">
            <v-row no-gutters>
              <v-card class="mb-5 d-flex" max-height="160">
                <v-col cols="2" class="pa-0">
                  <v-img
                    src="@/assets/img/serch-result/1.png"
                    width="150"
                    min-height="160"
                    class="ma-0 rounded rounded-r-0"
                  ></v-img>
                </v-col>
                <v-col cols="6" md="7" xl="8" class="pt-5">
                  <a class="text-h5">Next generation admin template</a>
                  <p class="subtitle-1">New York, NY 2018</p>
                  <p class="text-truncate">Not just usual Metro. But something bigger. Not just usual widgets, but real widgets. Not just yet another admin template, but next generation admin template.</p>
                </v-col>
                <v-col cols="4" md="3" xl="2" class="pt-5 pl-5">
                  <h4>$9700</h4>
                  <p>per week</p>
                  <v-btn small color="primary">Learn more</v-btn>
                </v-col>
              </v-card>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row no-gutters>
              <v-card class="mb-5 d-flex" max-height="160">
                <v-col cols="2" class="pa-0">
                  <v-img
                      src="@/assets/img/serch-result/1.png"
                      width="150"
                      min-height="160"
                      class="ma-0 rounded rounded-r-0"
                  ></v-img>
                </v-col>
                <v-col cols="6" md="7" xl="8" class="pt-5">
                  <a class="text-h5">Next generation admin template</a>
                  <p class="subtitle-1">New York, NY 2018</p>
                  <p class="text-truncate">Not just usual Metro. But something bigger. Not just usual widgets, but real widgets. Not just yet another admin template, but next generation admin template.</p>
                </v-col>
                <v-col cols="4" md="3" xl="2" class="pt-5 pl-5">
                  <h4>$9700</h4>
                  <p>per week</p>
                  <v-btn small color="primary">Learn more</v-btn>
                </v-col>
              </v-card>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row no-gutters>
              <v-card class="mb-5 d-flex" max-height="160">
                <v-col cols="2" class="pa-0">
                  <v-img
                      src="@/assets/img/serch-result/1.png"
                      width="150"
                      min-height="160"
                      class="ma-0 rounded rounded-r-0"
                  ></v-img>
                </v-col>
                <v-col cols="6" md="7" xl="8" class="pt-5">
                  <a class="text-h5">Next generation admin template</a>
                  <p class="subtitle-1">New York, NY 2018</p>
                  <p class="text-truncate">Not just usual Metro. But something bigger. Not just usual widgets, but real widgets. Not just yet another admin template, but next generation admin template.</p>
                </v-col>
                <v-col cols="4" md="3" xl="2" class="pt-5 pl-5">
                  <h4>$9700</h4>
                  <p>per week</p>
                  <v-btn small color="primary">Learn more</v-btn>
                </v-col>
              </v-card>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row no-gutters>
              <v-card class="mb-5 d-flex" max-height="160">
                <v-col cols="2" class="pa-0">
                  <v-img
                      src="@/assets/img/serch-result/1.png"
                      width="150"
                      min-height="160"
                      class="ma-0 rounded rounded-r-0"
                  ></v-img>
                </v-col>
                <v-col cols="6" md="7" xl="8" class="pt-5">
                  <a class="text-h5">Next generation admin template</a>
                  <p class="subtitle-1">New York, NY 2018</p>
                  <p class="text-truncate">Not just usual Metro. But something bigger. Not just usual widgets, but real widgets. Not just yet another admin template, but next generation admin template.</p>
                </v-col>
                <v-col cols="4" md="3" xl="2" class="pt-5 pl-5">
                  <h4>$9700</h4>
                  <p>per week</p>
                  <v-btn small color="primary">Learn more</v-btn>
                </v-col>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <p class="text-h4">Results Filtering</p>
        <p class="subtitle-1">Listed content is categorized by the following groups:</p>
        <v-list
        color="transparent"
        >
          <v-list-item
            v-for="item in filtering"
            :key="item.id"
            link
          >
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
        ]
    }),
  }
</script>

<style>
  .search-result-page.v-list-item:hover {
    background-color: #B1BCFF;
  }
</style>
