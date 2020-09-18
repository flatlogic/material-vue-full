<template>
  <v-container fluid class="elements-page mt-3">
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Inputs</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in menu"
                  :key="i"
                  @click="() => {}"
                >
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal greyBold--text mb-5">A simple text field with placeholder and/or label.</p>
            <v-form ref="form">
              <v-row>
                <v-col cols="5" class="d-flex align-center">
                  <p class="fs-normal greyBold--text mb-0">Normal field</p>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    label="Name"
                ></v-text-field>
                </v-col>
                <v-col cols="5" class="d-flex align-center">
                  <p class="fs-normal greyBold--text mb-0">Label hint</p>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    hint="Some important helper text"
                    persistent-hint
                    label="Input with  hint"
                ></v-text-field>
                </v-col>
                <v-col cols="5" class="d-flex align-center">
                  <p class="fs-normal greyBold--text mb-0">Disable input</p>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    disabled
                    label="Disable"
                ></v-text-field></v-col>
                <v-col cols="5" class="d-flex align-center">
                  <p class="fs-normal greyBold--text mb-0">Prepended input</p>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                      label="Username"
                      prepend-icon="mdi-account"
                  ></v-text-field>
                </v-col>
                <v-col cols="5" class="d-flex align-center">
                  <p class="fs-normal greyBold--text mb-0">Password</p>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                      type="password"
                      label="Password"
                      prepend-icon="mdi-lock"
                  ></v-text-field>
                </v-col>
                <v-col cols="5" class="d-flex align-center">
                  <p class="fs-normal greyBold--text mb-0">Appended input</p>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    label="Append"
                    append-icon="mdi-map-marker"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Dense</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                    v-for="(item, i) in menu"
                    :key="i"
                    @click="() => {}"
                >
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal greyBold--text mb-5">You can reduces the text field height with <code>dense</code> prop.</p>
            <v-row>
              <v-col cols="5" class="d-flex align-center">
                <p class="fs-normal greyBold--text mb-0">Normal field</p>
              </v-col>
              <v-col cols="7">
                <v-text-field
                  dense
                  label="Regular"
                ></v-text-field>
              </v-col>
              <v-col cols="5" class="d-flex align-center">
                <p class="fs-normal greyBold--text mb-0">Filled field</p>
              </v-col>
              <v-col cols="7">
                <v-text-field
                  label="Filled"
                  filled
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="5" class="d-flex align-center">
                <p class="fs-normal greyBold--text mb-0">Dense & Rounded</p>
              </v-col>
              <v-col cols="7">
                <v-text-field
                  label="Filled"
                  placeholder="Dense & Rounded"
                  filled
                  rounded
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="5" class="d-flex align-center">
                <p class="fs-normal greyBold--text mb-0">Solo</p>
              </v-col>
              <v-col cols="7">
                <v-text-field
                  class="dense-elements"
                  label="Solo"
                  solo
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="5" class="d-flex align-center">
                <p class="fs-normal greyBold--text mb-0">Outlined</p>
              </v-col>
              <v-col cols="7">
                <v-text-field
                  label="Outlined"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="5" class="d-flex align-center">
                <p class="fs-normal greyBold--text mb-0">Outlined</p>
              </v-col>
              <v-col cols="7">
                <v-text-field
                  label="Outlined"
                  placeholder="Placeholder"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1">
          <v-card-title class="pa-5 pb-3">
            <p>Selects</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                    v-for="(item, i) in menu"
                    :key="i"
                    @click="() => {}"
                >
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <v-row align="center">
              <v-col class="d-flex" cols="12" sm="6">
                <v-select
                  :items="items"
                  label="Standard"
                ></v-select>
              </v-col>

              <v-col class="d-flex" cols="12" sm="6">
                <v-select
                  :items="items"
                  filled
                  label="Filled style"
                ></v-select>
              </v-col>

              <v-col class="d-flex" cols="12" sm="6">
                <v-select
                  :items="items"
                  label="Outlined style"
                  outlined
                ></v-select>
              </v-col>

              <v-col class="solo-select d-flex" cols="12" sm="6">
                <v-select
                  :items="items"
                  label="Solo field"
                  solo
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Input Variants</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in menu"
                  :key="i"
                  @click="() => {}"
                >
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <v-row>
              <template v-for="item in checkbox">
                <v-col cols="12" sm="4" md="4" :key="item">
                  <v-checkbox
                    v-model="checkboxModel"
                    :key="item"
                    :label="item"
                    :color="item.toLocaleLowerCase()"
                    :value="item"
                    hide-details
                  ></v-checkbox>
                </v-col>
              </template>
            </v-row>
            <v-row>
              <v-radio-group v-model="radioModel" row>
                <template v-for="item in radio">
                  <v-col cols="12" sm="4" md="4" :key="item">
                    <v-radio
                      :label="item"
                      :color="item.toLocaleLowerCase()"
                      :value="item"
                    ></v-radio>
                  </v-col>
                </template>
              </v-radio-group>
            </v-row>
            <v-row align="center" class="mx-0">
              <v-checkbox
                v-model="enabled"
                hide-details
                class="shrink mr-2 mt-0"
              ></v-checkbox>
              <v-text-field
                :disabled="!enabled"
                label="I only work if you check the box"
              ></v-text-field>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=12>
        <v-card class="text-area-card mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Textareas</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on">
                  <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in menu"
                  :key="i"
                  @click="() => {}">
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <v-row>
              <v-col cols="12" md="6">
                <v-textarea
                  class=" pt-1 mb-4"
                  label="Default style"
                  value="Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”"
                  hint="Hint text"
                  hide-details
                ></v-textarea>
              </v-col>
              <v-col cols="12" md="6">
                <v-textarea
                  class="mb-4"
                  hide-details
                  solo
                  value="“What a curious feeling!” said Alice; “I must be shutting up like a telescope.”"
                  label="Solo textarea"
                ></v-textarea>
              </v-col>
              <v-col cols="12" md="6">
                <v-textarea
                  hide-details
                  filled
                  label="Filled textarea"
                  value="And so it was indeed: she was now only ten inches high, and her face brightened up at the thought that she was now the right size for going through the little door into that lovely garden. First, however, she waited for a few minutes to see if she was going to shrink any further: she felt a little nervous about this; “for it might end, you know,” said Alice to herself, “in my going out altogether, like a candle. I wonder what I should be like then?”"
                ></v-textarea>
              </v-col>
              <v-col cols="12" md="6">
                <v-textarea
                  outlined
                  height="166"
                  hide-details
                  label="Outlined textarea"
                  value="Soon her eye fell on a little glass box that was lying under the table: she opened it, and found in it a very small cake, on which the words “EAT ME” were beautifully marked in currants. “Well, I’ll eat it,” said Alice, “and if it makes me grow larger, I can reach the key; and if it makes me grow smaller, I can creep under the door; so either way I’ll get into the garden, and I don’t care which happens!”"
                ></v-textarea>
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
  name: 'FormsElements',
  data: () => ({
    menu: [
      'Edit',
      'Copy',
      'Delete',
      'Print'
    ],
    items: [
          'Actinium', 'Aluminum', 'Americium', 'Antimony', 'Argon', 'Arsenic', 'Astatine', 'Barium', 'Berkelium', 'Beryllium'
      ],
    checkbox: [ 'Primary', 'Secondary', 'Error' ],
    checkboxModel: [ 'Primary', 'Secondary', 'Error' ],
    radio: ['Warning', 'Success', 'Info'],
    radioModel: 'Success',
    enabled: false,
  }),
  methods: {

  },
}
</script>

<style src="./FormElements.scss" lang="scss"/>
