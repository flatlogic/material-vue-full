<template>
  <v-container fluid class="pagination-pages mt-3">
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1">
          <v-card-title class="pa-5 pb-3">
            <p>Pagination Example</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                  </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in menu"
                  :key="i"
                  @click="() => {}"
                >
                    <v-list-item-title >{{ item }}</v-list-item-title>
                  </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal greyBold--text mb-5">The <code>v-pagination</code> component is used to separate
              long sets of data so that it is easier for a user to consume information.</p>
            <div class="text-center">
              <v-pagination
                class="pagination-example"
                v-model="page"
                :length="6"
              ></v-pagination>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1">
            <v-card-title class="pa-5 pb-3">
              <p>Pagination Length</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, i) in menu"
                      :key="i"
                      @click="() => {}"
                    >
                        <v-list-item-title >{{ item }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <p class="fs-normal greyBold--text mb-5">Using the <code>length</code> prop you can set the length of <code>v-pagination</code>, if the number of
                page buttons exceeds the parent container, it will truncate the list.</p>
              <div class="text-center">
                <v-container>
                  <v-row no-gutters justify="center">
                    <v-col cols="8">
                      <v-container class="max-width">
                        <v-pagination
                          class="pagination-length"
                          v-model="pageLong"
                          :length="15"
                          color="secondary"
                        ></v-pagination>
                      </v-container>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-card-text>
          </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Circle</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in menu"
                    :key="i"
                    @click="() => {}"
                  >
                    <v-list-item-title >{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal greyBold--text mb-5">The <code>circle</code> prop gives you an alternate style for pagination buttons.</p>
            <div class="text-center">
              <v-pagination
                class="pagination-circle"
                v-model="pageCircle"
                :length="4"
                circle
                color="warning"
              ></v-pagination>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Disabled</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in menu"
                  :key="i"
                  @click="() => {}"
                >
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal greyBold--text mb-5">Pagination items can be manually deactivated using the <code>disabled</code> prop.</p>
            <div class="text-center">
              <v-pagination
                :length="3"
                class="pagination-disabled"
              ></v-pagination>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Pagination',
    data () {
      return {
        menu: [
          'Edit',
          'Copy',
          'Delete',
          'Print'
        ],
        page: 1,
        pageLong: 1,
        pageCircle: 1,
      }
    }
  }

</script>

<style src="./Pagination.scss" lang="scss"></style>
