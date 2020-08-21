<template>
  <v-container fluid class="timeline-title-page">
    <v-row no-gutters class="d-flex mt-10 mb-6">
      <h1 class="page-title">Time Line</h1>
    </v-row>
    <v-timeline reverse align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
      ><span v-html="item.opposite" slot="opposite"></span>
        <v-card color="white">
          <v-card-title class="pb-0">
            <v-list-item inactive class="pl-0">
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-title>
          <v-card-text class="white text--primary px-0">
            <p class="mx-5 mb-0"> {{ item.content.text }} </p>
            <GmapMap v-if="item.content.googleMap"
              :center="{lat: -37.813179, lng: 144.950259}"
              :zoom="12"
              style="width: 100%; height: 200px"
            >
              <GmapMarker
                  :position="{lat: -37.813179, lng: 144.950259}"
              />
            </GmapMap>
            <v-img v-else-if="item.content.image" src="@/assets/img/time-line/mountains.jpeg"></v-img>
          </v-card-text>
          <v-card-text class="white text--primary py-0">
            <v-btn icon class="mr-3" >
              <v-icon :color="'rgba(110, 110, 110, 0.6)'">mdi-heart</v-icon>
            </v-btn>
            <v-btn icon >
              <v-icon :color="'rgba(110, 110, 110, 0.6)'">mdi-message-text</v-icon>
            </v-btn>
          </v-card-text>
          <v-list two-line>
            <template v-for="(item, index) in item.comments">

              <v-divider
                  v-if="item.divider"
                  :key="index"
              ></v-divider>
              <v-list-item
                  :key="item.title"
              >
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

            </template>
            <v-divider></v-divider>
            <v-list-item class="mt-2">
              <v-btn
                fab
                small
                color="primary"
                elevation="0"
                class="mr-3"
              >P</v-btn>
              <v-text-field
                dense
                label="Write your comment..."
              ></v-text-field>
            </v-list-item>

          </v-list>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import mock from "@/pages/Extra/TimeLine/mock";
export default {
  name: 'TimeLine',
  data: () => ({
    mock,
    items: mock.items,
  }),
}
</script>

<style src="./Timeline.scss" lang="scss"/>
