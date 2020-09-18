<template>
  <v-container fluid class="timeline-title-page mt-6">
    <v-timeline reverse align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.subColor"
        fill-dot>
        <span v-html="item.opposite" slot="opposite"></span>
        <span slot="icon">
          <v-responsive
            :class="'text-center ' + item.color + ' rounded-circle d-inline-flex align-center justify-center'"
            height="28"
            width="28">
            <v-icon :size="item.iconSize" :color="item.icon" class="white--text">{{ item.icon }}</v-icon>
        </v-responsive>
        </span>
        <v-card>
          <v-card-title class="py-1">
            <v-list-item inactive class="pl-0">
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <h6 :class="item.color + '--text mb-1'">{{ item.title }} <span class="greyBold--text">{{ item.nick }}</span> </h6>
                </v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-title>
          <v-card-text class="text--primary px-0">
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
            <v-img
              v-else-if="item.content.image"
              class="mt-2"
              src="@/assets/img/time-line/mountains.jpeg">
            </v-img>
          </v-card-text>
          <v-card-text class="text--primary py-0">
            <v-btn icon class="mr-3" >
              <v-icon color="greyTint">mdi-heart</v-icon>
            </v-btn>
            <v-btn icon >
              <v-icon color="greyTint">mdi-message-text</v-icon>
            </v-btn>
          </v-card-text>
          <v-list two-line>
            <template v-for="(item, index) in item.comments">
              <v-divider
                v-if="item.divider"
                :key="index"
              ></v-divider>
              <v-list-item
                :key="(index + 1) * 2"
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
                class="fs-large mr-3"
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
