<template>
  <v-container fluid class="mt-3">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text class="pa-0 rounded overflow-hidden">
            <div class="mapContainer">
              <GmapMap
                      :center="{lat: -37.813179, lng: 144.950259}"
                      :zoom="12"
                      style="width: 100%; height: inherit"
              >
                <GmapMarker
                        :position="{lat: -37.813179, lng: 144.950259}"
                />
              </GmapMap>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'GoogleMap',
};
</script>

<style src="./Google.scss" lang="scss" scoped/>
