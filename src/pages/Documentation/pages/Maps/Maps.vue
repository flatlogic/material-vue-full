<template>
  <v-container fluid class="docs mt-4">
    <v-row>
      <v-col cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-text class="pa-5">
            <p class="text-h5">Google Maps</p>
            <p>Run the following command first:</p>
            <code class="d-flex">
              yarn add vue2-google-maps
            </code>
            <p>If you are using Webpack and Vue file components, just add the following to your code!</p>
            <pre>&lt;<span class="pl-ent">GmapMap</span>
  :<span class="pl-e">center</span>=<span class="pl-s1"><span class="pl-pds">"</span>{lat<span class="pl-k">:</span><span class="pl-c1">10</span>, lng<span class="pl-k">:</span><span class="pl-c1">10</span>}<span class="pl-pds">"</span></span>
  :<span class="pl-e">zoom</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">7</span><span class="pl-pds">"</span></span>
  <span class="pl-e">map-type-id</span>=<span class="pl-s"><span class="pl-pds">"</span>terrain<span class="pl-pds">"</span></span>
  <span class="pl-e">style</span>=<span class="pl-s"><span class="pl-pds">"</span>width: 500px; height: 300px<span class="pl-pds">"</span></span>
&gt;
  &lt;<span class="pl-ent">GmapMarker</span>
    :<span class="pl-e">key</span>=<span class="pl-s1"><span class="pl-pds">"</span>index<span class="pl-pds">"</span></span>
    <span class="pl-e">v-for</span>=<span class="pl-s1"><span class="pl-pds">"</span>(m, index) <span class="pl-k">in</span> markers<span class="pl-pds">"</span></span>
    :<span class="pl-e">position</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-smi">m</span>.<span class="pl-smi">position</span><span class="pl-pds">"</span></span>
    :<span class="pl-e">clickable</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">true</span><span class="pl-pds">"</span></span>
    :<span class="pl-e">draggable</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">true</span><span class="pl-pds">"</span></span>
    @<span class="pl-e">click</span>=<span class="pl-s1"><span class="pl-pds">"</span>center<span class="pl-k">=</span><span class="pl-smi">m</span>.<span class="pl-smi">position</span><span class="pl-pds">"</span></span>
  /&gt;
&lt;/<span class="pl-ent">GmapMap</span>&gt;</pre>
            <v-btn text to="/maps/google" class="text-capitalize font-weight-regular">Example</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-text class="pa-5">
            <p class="text-h5">Vector Map</p>
            <p>Run the following command first:</p>
            <code class="d-flex">
              yarn add @amcharts/amcharts4
              <br>
              yarn add @amcharts/amcharts4-geodata
            </code>
            <p>If you are using Webpack and Vue file components, just add the following to your code!</p>
            <pre id="demo-code-javascript" class="code-HTML code-label-JavaScript code" style="display: block;"><code class="pre-scrollable HTML hljs"><span class="hljs-comment">&lt;!-- Styles --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-selector-id">#chartdiv</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">500px</span>;
  <span class="hljs-attribute">overflow</span>: hidden;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-comment">&lt;!-- Resources --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.amcharts.com/lib/4/core.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.amcharts.com/lib/4/maps.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.amcharts.com/lib/4/geodata/worldLow.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.amcharts.com/lib/4/themes/animated.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-comment">&lt;!-- Chart code --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
am4core.ready(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{

<span class="hljs-comment">// Themes begin</span>
am4core.useTheme(am4themes_animated);
<span class="hljs-comment">// Themes end</span>

<span class="hljs-comment">// Create map instance</span>
<span class="hljs-keyword">var</span> chart = am4core.create(<span class="hljs-string">"chartdiv"</span>, am4maps.MapChart);

<span class="hljs-comment">// Set map definition</span>
chart.geodata = am4geodata_worldLow;

<span class="hljs-comment">// Set projection</span>
chart.projection = <span class="hljs-keyword">new</span> am4maps.projections.Miller();

<span class="hljs-comment">// Create map polygon series</span>
<span class="hljs-keyword">var</span> polygonSeries = chart.series.push(<span class="hljs-keyword">new</span> am4maps.MapPolygonSeries());

<span class="hljs-comment">// Exclude Antartica</span>
polygonSeries.exclude = [<span class="hljs-string">"AQ"</span>];

<span class="hljs-comment">// Make map load polygon (like country names) data from GeoJSON</span>
polygonSeries.useGeodata = <span class="hljs-literal">true</span>;

<span class="hljs-comment">// Configure series</span>
<span class="hljs-keyword">var</span> polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = <span class="hljs-string">"{name}"</span>;
polygonTemplate.polygon.fillOpacity = <span class="hljs-number">0.6</span>;


<span class="hljs-comment">// Create hover state and set alternative fill color</span>
<span class="hljs-keyword">var</span> hs = polygonTemplate.states.create(<span class="hljs-string">"hover"</span>);
hs.properties.fill = chart.colors.getIndex(<span class="hljs-number">0</span>);

<span class="hljs-keyword">var</span> colorSet = <span class="hljs-keyword">new</span> am4core.ColorSet();

}); <span class="hljs-comment">// end am4core.ready()</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-comment">&lt;!-- HTML --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"chartdiv"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
            <v-btn text to="/maps/vector" class="text-capitalize font-weight-regular">Example</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


