<template>
  <v-container fluid class="grid-page mt-3">
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="mb-4 mr-4">
          <v-card-title class="pa-5 pb-4">
            <p>How it works</p>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal greyBold--text mb-5">Vuetify's grid system uses a series of containers, rows, and
              columns to layout and align content. It’s built with flexbox and is fully responsive.</p>
            <v-row justify="space-between">
              <v-col cols="3" class="primary rounded ma-2 d-flex justify-center">
                <h6 class="white--text mb-0">One of three</h6>
              </v-col>
              <v-col cols="3" class="secondary rounded ma-2 d-flex justify-center">
                <h6 class="white--text mb-0">One of three</h6>
              </v-col>
              <v-col cols="3" class="warning rounded ma-2 d-flex justify-center">
                <h6 class="white--text mb-0">One of three</h6>
              </v-col>
              <v-col cols="12" class="mt-3">
                            <pre>
<span class="primaryConst--text">&lt;v-row justify="space-between"&gt;</span>
  <span class="secondaryConst--text">&lt;v-col cols="3" class="primary"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      One of three
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;v-col&gt;</span>

  <span class="secondaryConst--text">&lt;v-col cols="3" class="secondary"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      One of three
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;v-col&gt;</span>

  <span class="secondaryConst--text">&lt;v-col cols="3" class="warning"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      One of three
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;v-col&gt;</span>
<span class="primaryConst--text">&lt;/v-row&gt;</span></pre>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mb-4">
          <v-card-title class="pa-5 pb-4">
            <p>Equal width</p>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal greyBold--text mb-5">For example, here are two grid layouts that apply to every device
              and viewport, from xs to xl. Add any number of unit-less classes for each breakpoint you need and every
              column will be the same width.</p>
            <v-row justify="space-between">
              <v-col cols="5" class="primary rounded ma-2 d-flex justify-center">
                <h6 class="white--text mb-0">1 of 2</h6>
              </v-col>
              <v-col cols="5" class="secondary rounded ma-2 d-flex justify-center">
                <h6 class="white--text mb-0">1 of 2</h6>
              </v-col>
              <v-col cols="12" class="mt-3">
                            <pre>
<span class="primaryConst--text">&lt;v-row justify="space-between"&gt;</span>
  <span class="secondaryConst--text">&lt;v-col cols="3" class="primary"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      1 of 2
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;/v-col&gt;</span>

  <span class="secondaryConst--text">&lt;v-col cols="3" class="secondary"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      1 of 2
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;/v-col&gt;</span>
<span class="primaryConst--text">&lt;/v-row&gt;</span></pre>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=12>
        <v-card class="mx-1 mb-4">
          <v-card-title class="pa-5 pb-3">
            <p>Grid options</p>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal greyBold--text mb-3">While Material UI grid uses ems or rems for defining most sizes, pxs are used for grid breakpoints and
              container widths. This is because the viewport width is in pixels and does not change with the font size.
              See how aspects of the Material UI grid system work across multiple devices with a handy table.</p>
            <div class="mb-6 v-sheet v-sheet--outlined">
              <div class="v-data-table">
                <div class="v-data-table__wrapper">
                  <table>
                    <caption class="pa-4">Material Design Viewport Breakpoints</caption>
                    <thead>
                    <tr class="text-left">
                      <th>Device</th>
                      <th>Code</th>
                      <th>Types</th>
                      <th>Range</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-cellphone-iphone"></i>
                        <span>Extra small</span>
                      </td>
                      <td>
                        <strong>xs</strong>
                      </td>
                      <td>small to large handset</td>
                      <td>&lt; 600px</td>
                    </tr>
                    <tr>
                      <td>
                        <i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-tablet"></i>
                        <span>Small</span>
                      </td>
                      <td>
                        <strong>sm</strong>
                      </td>
                      <td>small to medium tablet</td>
                      <td>600px &gt; &lt; 960px</td>
                    </tr>
                    <tr>
                      <td>
                        <i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-laptop"></i>
                        <span>Medium</span>
                      </td>
                      <td>
                        <strong>md</strong>
                      </td>
                      <td>large tablet to laptop</td>
                      <td>960px &gt; &lt; 1264px*</td>
                    </tr>
                    <tr>
                      <td>
                        <i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-monitor"></i>
                        <span>Large</span>
                      </td>
                      <td>
                        <strong>lg</strong>
                      </td>
                      <td>desktop</td>
                      <td>1264px* &gt; &lt; 1904px*</td>
                    </tr>
                    <tr>
                      <td>
                        <i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-television"></i>
                        <span>Extra large</span>
                      </td>
                      <td>
                        <strong>xl</strong>
                      </td>
                      <td>4k and ultra-wides</td>
                      <td>&gt; 1904px*</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                      <td colspan="4" class="text-center">
                        <small>
                          <em class="grey--text">* -16px on Desktop</em>
                        </small>
                      </td>
                    </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-4 mr-4">
          <v-card-title class="pa-5 pb-3">
            <p>Vertical Alignment</p>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal greyBold--text mb-10">Use flexbox alignment utilities to vertically and horizontally align columns.</p>
            <v-row justify="start">
              <v-col cols="3" class="primary rounded ma-2 d-flex justify-center">
                <h6 class="white--text mb-0">Start</h6>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="3" class="secondary rounded ma-2 d-flex justify-center">
                <h6 class="white--text mb-0">Center</h6>
              </v-col>
            </v-row>
            <v-row justify="end">
              <v-col cols="3" class="warning rounded ma-2 d-flex justify-center">
                <h6 class="white--text mb-0">End</h6>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="mt-3">
                            <pre>
<span class="primaryConst--text">&lt;v-row justify="start"&gt;</span>
  <span class="secondaryConst--text">&lt;v-col cols="3" class="primary"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      Start
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;v-col&gt;</span>
<span class="primaryConst--text">&lt;/v-row&gt;</span>

<span class="primaryConst--text">&lt;v-row justify="center"&gt;</span>
  <span class="secondaryConst--text">&lt;v-col cols="3" class="secondary"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      Center
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;v-col&gt;</span>
<span class="primaryConst--text">&lt;/v-row&gt;</span>

<span class="primaryConst--text">&lt;v-row justify="end"&gt;</span>
  <span class="secondaryConst--text">&lt;v-col cols="3" class="warning"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      End
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;v-col&gt;</span>
<span class="primaryConst--text">&lt;/v-row&gt;</span></pre>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Vertical Alignment</p>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal greyBold--text mb-10">Use flexbox alignment utilities to vertically and horizontally align columns.</p>
            <v-row justify="end">
              <v-col cols="3" class="primary rounded ma-2 d-flex justify-center">
                <h6 class="white--text mb-0">1</h6>
              </v-col>
              <v-col cols="3" class="secondary rounded ma-2 d-flex justify-center">
                <h6 class="white--text mb-0">2</h6>
              </v-col>
            </v-row>
            <v-row justify="space-around">
              <v-col cols="3" class="primary rounded ma-2 d-flex justify-center">
                <h6 class="white--text mb-0">1</h6>
              </v-col>
              <v-col cols="3" class="secondary rounded ma-2 d-flex justify-center">
                <h6 class="white--text mb-0">2</h6>
              </v-col>
            </v-row>
            <v-row justify="space-between">
              <v-col cols="3" class="primary rounded ma-2 d-flex justify-center" >
                <h6 class="white--text mb-0">1</h6>
              </v-col>
              <v-col cols="3" class="secondary rounded ma-2 d-flex justify-center" >
                <h6 class="white--text mb-0">2</h6>
              </v-col>
              <v-col cols="3" class="warning rounded ma-2 d-flex justify-center" >
                <h6 class="white--text mb-0">3</h6>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="mt-3">
                            <pre>
<span class="primaryConst--text">&lt;v-row justify="end"&gt;</span>
  <span class="secondaryConst--text">&lt;v-col cols="3" class="primary"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      1
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;v-col&gt;</span>

   <span class="secondaryConst--text">&lt;v-col cols="3" class="primary"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      2
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;v-col&gt;</span>
<span class="primaryConst--text">&lt;/v-row&gt;</span>

<span class="primaryConst--text">&lt;v-row justify="space-around"&gt;</span>
  <span class="secondaryConst--text">&lt;v-col cols="3" class="primary"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      1
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;v-col&gt;</span>

   <span class="secondaryConst--text">&lt;v-col cols="3" class="primary"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      2
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;v-col&gt;</span>
<span class="primaryConst--text">&lt;/v-row&gt;</span>

<span class="primaryConst--text">&lt;v-row justify="space-between"&gt;</span>
  <span class="secondaryConst--text">&lt;v-col cols="3" class="primary"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      1
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;v-col&gt;</span>

   <span class="secondaryConst--text">&lt;v-col cols="3" class="primary"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      2
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;v-col&gt;</span>

   <span class="secondaryConst--text">&lt;v-col cols="3" class="warning"&gt;</span>
    <span class="info--text">&lt;h6 class="white--text"&gt;</span>
      3
    <span class="info--text">&lt;/h6&gt;</span>
  <span class="secondaryConst--text">&lt;v-col&gt;</span>
<span class="primaryConst--text">&lt;/v-row&gt;</span>
</pre>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Grid',
};
</script>
