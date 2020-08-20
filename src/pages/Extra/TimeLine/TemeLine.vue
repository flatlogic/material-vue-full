<template>
  <v-container fluid class="timeline-title-page">
    <v-row no-gutters class="d-flex mt-10 mb-6">
      <h1 class="timeline-title">Time Line</h1>
    </v-row>
    <v-timeline reverse align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
      ><span v-html="item.opposite" slot="opposite"></span>
        <v-card color="white">
          <v-card-title>
            <v-list-item inactive>
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
            <GmapMap v-if="item.content.googleMap"
              :center="{lat: -37.813179, lng: 144.950259}"
              :zoom="12"
              style="width: 100%; height: 200px"
            >
              <GmapMarker
                  :position="{lat: -37.813179, lng: 144.950259}"
              />
            </GmapMap>
          </v-card-text>
          <v-card-text class="white text--primary">
            <v-btn icon class="mr-3">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-message-text</v-icon>
            </v-btn>
            <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
            <v-btn
              :color="item.color"
              class="mx-0"
              outlined
            >
              Button
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: 'TimeLine',
  data: () => ({
    items: [
      {
        color: 'secondary',
        icon: 'mdi-navigation',
        opposite: 'yesterday<h5>8:03 pm</h5>',
        title: 'Jessica Nilson @jess',
        subtitle: '10:12 am - Publicly near Minsk',
        content: {
          googleMap: true
        }
      },
      {
        color: 'info',
        icon: 'mdi-message',
        opposite: 'yesterday<h5>8:03 pm</h5>',
        title: 'Jessica Nilson @jess',
        subtitle: '10:12 am - Publicly near Minsk',
        content: ''
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-coffee',
        opposite: 'yesterday<h5>8:03 pm</h5>',
        title: 'Jessica Nilson @jess',
        subtitle: '10:12 am - Publicly near Minsk',
        content: ''
      },
      {
        color: 'indigo',
        icon: 'mdi-alpha-j',
        opposite: 'yesterday<h5>8:03 pm</h5>',
        title: 'Jessica Nilson @jess',
        subtitle: '10:12 am - Publicly near Minsk',
        content: ''
      },
    ],
  }),
}
</script>

<style>
.timeline-title-page .v-timeline-item__opposite {
    align-self: self-start;
}

</style>
