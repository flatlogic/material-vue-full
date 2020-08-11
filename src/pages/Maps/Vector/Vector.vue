<template>

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

</template>

<script>
export default {
  name: 'VectorMap',
};
</script>

<style src="./Vector.scss" lang="scss" scoped/>
