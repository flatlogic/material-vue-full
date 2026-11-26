<template>
  <v-container fluid class="timeline-title-page mt-6">
    <v-timeline align="start" :side="$vuetify.display.smAndDown ? 'end' : undefined">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.subColor"
        fill-dot>
        <template #opposite><span v-html="item.opposite"></span></template>
        <template #icon>
          <v-responsive
            :class="'text-center ' + item.color + ' rounded-circle d-inline-flex align-center justify-center'"
            height="28"
            width="28">
            <v-icon :size="item.iconSize" :color="item.icon" class="text-white">{{ item.icon }}</v-icon>
        </v-responsive>
        </template>
        <v-card>
          <v-card-title class="py-1">
            <v-list-item inactive class="pl-0">
              <template #prepend><v-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-avatar></template>
              <div>
                <v-list-item-title>
                  <h6 :class="item.color + '--text mb-1'">{{ item.title }} <span class="text-greyBold">{{ item.nick }}</span> </h6>
                </v-list-item-title>
                <v-list-item-subtitle><span v-html="item.subtitle"></span></v-list-item-subtitle>
              </div>
            </v-list-item>
          </v-card-title>
          <v-card-text class="text--primary px-0">
            <p class="mx-5 mb-0"> {{ item.content.text }} </p>
            <VueGoogleMap :api-key="$googleMapsKey" v-if="item.content.googleMap"
              :center="{lat: -37.813179, lng: 144.950259}"
              :zoom="12"
              style="width: 100%; height: 200px"
            >
              <MapMarker
                  :options="{ position: {lat: -37.813179, lng: 144.950259} }"
              />
            </VueGoogleMap>
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
            <template v-for="(item, index) in item.comments" :key="index">
              <v-divider
                v-if="item.divider"
              ></v-divider>
              <v-list-item
              >
                <template #prepend><v-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-avatar></template>

                <div>
                  <v-list-item-title><span v-html="item.title"></span></v-list-item-title>
                  <v-list-item-subtitle><span v-html="item.subtitle"></span></v-list-item-subtitle>
                </div>
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
