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

        let circle = imageSeries.mapImages.template.createChild(am4core.Circle);
        circle.radius = 5;
        circle.strokeWidth = 2;
        circle.stroke = '#fff';
        circle.fill = '#536DFE';


        imageSeries.data = [ {
            "title": "Brussels",
            "latitude": 50.8371,
            "longitude": 4.3676,
        }, {
            "title": "Copenhagen",
            "latitude": 55.6763,
            "longitude": 12.5681,
        }, {
            "title": "Paris",
            "latitude": 48.8567,
            "longitude": 2.3510,
        }, {
            "title": "Reykjavik",
            "latitude": 64.1353,
            "longitude": -21.8952,
        }, {
            "title": "Moscow",
            "latitude": 55.7558,
            "longitude": 37.6176,
        }, {
            "title": "Madrid",
            "latitude": 40.4167,
            "longitude": -3.7033,
        }, {
            "title": "London",
            "latitude": 51.5002,
            "longitude": -0.1262,
        }, {
            "title": "Peking",
            "latitude": 39.9056,
            "longitude": 116.3958,
        }, {
            "title": "New Delhi",
            "latitude": 28.6353,
            "longitude": 77.2250,
        }, {
            "title": "Tokyo",
            "latitude": 35.6785,
            "longitude": 139.6823,
        }, {
            "title": "Ankara",
            "latitude": 39.9439,
            "longitude": 32.8560,
        }, {
            "title": "Buenos Aires",
            "latitude": -34.6118,
            "longitude": -58.4173,
        }, {
            "title": "Brasilia",
            "latitude": -15.7801,
            "longitude": -47.9292,
        }, {
            "title": "Ottawa",
            "latitude": 45.4235,
            "longitude": -75.6979,
        }, {
            "title": "Washington",
            "latitude": 38.8921,
            "longitude": -77.0241,
        }, {
            "title": "Kinshasa",
            "latitude": -4.3369,
            "longitude": 15.3271,
        }, {
            "title": "Cairo",
            "latitude": 30.0571,
            "longitude": 31.2272,
        }, {
            "title": "Pretoria",
            "latitude": -25.7463,
            "longitude": 28.1876,
        } ];
    },
    beforeDestroy() {
        if (this.map) {
            this.map.dispose()
        }
    }
};
</script>

<style src="./Vector.scss" lang="scss" scoped/>
