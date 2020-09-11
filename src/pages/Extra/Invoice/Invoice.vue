<template>
  <v-container class="mt-4 mx-1">
    <v-row>
      <v-col cols="12">
        <v-row class="invoice-page">
          <v-col cols="12">
            <v-card>
              <v-card-text class="invoiceBody">
                <v-row justify="space-between">
                  <v-col md="6" cols="12">
                    <img src="../../../assets/img/logo.jpg" alt="Logo" class='invoiceLogo rounded' />
                  </v-col>
                  <v-col md="3" cols="12">
                    <h4 class="text-left">
                      <span class="greyBold--text font-weight-bold fs-base">#9.45613 </span><span class="greyBold--text fs-base">/ 17 May 2014</span>
                    </h4>
                    <div class="text-left fs-base greyBold--text">
                      Some Invoice number description or whatever
                    </div>
                  </v-col>
                </v-row>
                <v-row class="mb-5 greyBold--text">
                  <v-col cols="6">
                    <h4 class="ma-0">Company Information</h4>
                    <h5 class="mt-5">
                      Flatlogic LLC
                    </h5>
                    <address>
                      <strong>2 Infinite Loop</strong><br />
                      Minsk, Belarus 220004<br />
                      088.253.5345<br />
                      <abbr title="Work email">e-mail: </abbr>
                      <a href="mailto:#">email@example.com</a><br />
                      <abbr title="Work Phone">phone:</abbr> (012) 345-678-901<br />
                      <abbr title="Work Fax">fax:</abbr> (012) 678-132-901
                    </address>
                  </v-col>

                  <v-col cols="6" class="text-right">
                    <h4 class="ma-0">Client Information</h4>
                    <h6 class="client-name mt-5">
                      Veronica Niasvizhskaja
                    </h6>
                    <address>
                      <strong>Consultant</strong> at
                      <a href="#">Allspana</a><br />
                      <abbr title="Work email">e-mail: </abbr>
                      <a href="mailto:#">maryna@allspana.by</a><br />
                      <abbr title="Work Phone">phone:</abbr> (012) 345-678-901<br />
                      <abbr title="Work Fax">fax:</abbr> (012) 678-132-901
                      <p class="no-margin"><strong>Note:</strong></p>
                      <p class="text-muted">Some nights I stay up cashing in my bad luck.
                        Some nights I call it a draw</p>
                    </address>
                  </v-col>
                </v-row>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th class="text-left">#</th>
                      <th class="text-left">Item</th>
                      <th class="text-left">Description</th>
                      <th class="text-left">Quantity</th>
                      <th class="text-left">Price per Unit</th>
                      <th class="text-left">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>Brand-new 27 monitor</td>
                      <td>
                        2,560x1,440-pixel (WQHD) resolution supported!
                      </td>
                      <td>2</td>
                      <td>700</td>
                      <td>1,400.00</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Domain: okendoken.com</td>
                      <td>6-month registration</td>
                      <td>1</td>
                      <td>10.99</td>
                      <td>21.88</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Atlas Shrugged</td>
                      <td>
                        Novel by Ayn Rand, first published in 1957 in the United States
                      </td>
                      <td>5</td>
                      <td>35</td>
                      <td>175.00</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>New Song by Dr. Pre</td>
                      <td>
                        Lyrics: praesent blandit augue non sapien ornare
                        imperdiet
                      </td>
                      <td>1</td>
                      <td>2</td>
                      <td>2.00</td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>

                <v-row>
                  <v-col cols="12" md="8">
                    <p>
                      <strong>Note:</strong>
                      Thank you for your business. Keep in mind,
                      sometimes bad things happen. But it&#39;s just
                      sometimes.
                    </p>
                  </v-col>
                  <v-col md="4" cols="12">
                    <v-row justify="end" class="text-right">
                      <v-col cols="6" />
                      <v-col cols="3">
                        <p>Subtotal</p>
                        <p>Tax(10%)</p>
                        <p class="ma-0"><strong>Total</strong></p>
                      </v-col>
                      <v-col cols="3">
                        <p>1,598.88</p>
                        <p>159.89</p>
                        <p class="ma-0"><strong>1,758.77</strong></p>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <p class="text-right mt-5 mb-1">
                  Marketing Consultant
                </p>
                <p class="text-right">
                  <span class="font-weight-bold">Bob Smith</span>
                </p>
                <v-card-actions class="mt-5">
                  <v-row justify="end" no-gutters >
                    <v-btn color="default" class="button-shadow mb-2 mr-0 mr-sm-2">
                      <v-icon class="mr-2">mdi-printer</v-icon>
                      &nbsp;&nbsp;
                      Print
                    </v-btn>
                    <v-btn color="success" class="button-shadow">
                      <v-icon class="mr-2">mdi-arrow-right</v-icon>
                      Proceed with Payment
                      &nbsp;

                    </v-btn>
                  </v-row>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
    export default {
        name: 'InvoicePage',
    };
</script>

<style src="./Invoice.scss" lang="scss" scoped />
