<template>
  <v-container fluid class="mt-3">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text class="rounded overflow-hidden">
            <div id="chartdiv"></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core"
    import * as am4maps from "@amcharts/amcharts4/maps"

    import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow"

export default {
  name: 'VectorMap',
    mounted() {
        let map = am4core.create("chartdiv", am4maps.MapChart);
        map.geodata = am4geodata_worldLow;
        map.projection = new am4maps.projections.Miller();
        let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.exclude = ["AQ"];
        polygonSeries.useGeodata = true;


        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color('rgba(83, 109, 254, 0.2)');

        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = map.colors.getIndex(0);
        hs.properties.fill = am4core.color('#536DFE');

        let imageSeries = map.series.push(new am4maps.MapImageSeries());
        imageSeries.mapImages.template.propertyFields.longitude = "longitude";
        imageSeries.mapImages.template.propertyFields.latitude = "latitude";
        imageSeries.mapImages.template.tooltipText = "{title}";
        imageSeries.mapImages.template.propertyFields.url = "url";
    },
    beforeDestroy() {
        if (this.map) {
            this.map.dispose()
        }
    }
};
</script>

<style src="./Vector.scss" lang="scss" scoped/>
