<template>
  <v-container fluid class="badge-page mt-3">
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Badge Example</p>
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
            <p class="fs-normal greyBold--text mb-10">Badge generates a small badge to the top-right of its child(ren)</p>
            <template v-for="badge in badgeExample" >
              <v-badge
                  :color="badge.content.toLocaleLowerCase()"
                  :content="badge.content"
                  :key="badge.id"
                  class="mb-2"
              >
                <div v-html="badge.html"></div>
              </v-badge>
              <br :key="badge.content">
            </template>
            <p class="fs-normal greyBold--text mb-4">Badges can be used as part of links or buttons to provide a counter.</p>
            <div class="w-100 d-flex justify-center">
              <v-badge
                  color="success"
                  :content="btnBudge"
                  overlap
              >
                <v-btn
                    @click="btnBudge++"
                    color="primary"
                >
                  New Messages
                </v-btn>
              </v-badge>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Icon Badges</p>
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
            <p class="fs-normal greyBold--text">Badge can also be used as a parent of a icon</p>
            <div class="d-flex justify-center mb-6">
              <template v-for="icon in iconBadges" >
                <v-badge
                    overlap
                    :color="icon.color"
                    :content="icon.content"
                    :key="icon.id"
                    class="mr-4"
                >
                  <v-icon large> {{ icon.name }} </v-icon>
                </v-badge>
              </template>
            </div>
            <template >
              <v-toolbar class="mb-8">
                <v-tabs
                    grow
                    dark
                    background-color="primary"
                >
                  <v-tab>
                    <v-badge
                        color="pink"
                        dot
                    >
                      Item One
                    </v-badge>
                  </v-tab>

                  <v-tab>
                    <v-badge
                        color="success"
                        content="6"
                    >
                      Item Two
                    </v-badge>
                  </v-tab>

                  <v-tab>
                    <v-badge
                        color="info"
                        icon="mdi-bell"
                    >
                      Item Three
                    </v-badge>
                  </v-tab>
                </v-tabs>
              </v-toolbar>
            </template>
            <p class="fs-normal greyBold--text">You may to use dot badge via <code>dot</code> props</p>
            <div class="d-flex justify-center mb-8">
              <template v-for="icon in dotBadges" >
                <v-badge
                    dot
                    overlap
                    :color="icon.color"
                    :content="icon.content"
                    :key="icon.id"
                    class="mr-4"
                >
                  <v-icon large> {{ icon.name }} </v-icon>
                </v-badge>
              </template>
            </div>
            <p class="fs-normal greyBold--text">You can use the <code>bottom/top</code> and <code>left/right</code> properties to
              move the badge to any corner of the wrapped element.</p>
            <div class="d-flex justify-center mb-2 ">
              <template v-for="badge in positionBadges" >
                <v-badge
                    dot
                    overlap
                    :bottom="badge.position.bottom"
                    :left="badge.position.left"
                    :color="badge.color"
                    :content="badge.content"
                    :key="badge.id"
                    class="mr-4"
                >
                  <v-icon large> {{ badge.name }} </v-icon>
                </v-badge>
              </template>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Chips</p>
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
            <p class="fs-normal greyBold--text">Chips allow users to enter information, make selections, filter content, or trigger actions.</p>
            <div class="text-center mb-8">
              <template v-for="chip in chips">
                <v-chip
                    :key="chip.id"
                    :color="chip.color"
                    class="ma-2"
                >
                  {{ chip.title }}
                </v-chip>
            </template>
            </div>
            <p class="fs-normal greyBold--text">Chips can use text or any icon available in the Material Icons font library.</p>
            <div class="text-center">
              <template v-for="chip in chipsWithIcons">
                <v-chip
                    :key="chip.id"
                    class="ma-2"
                    :color="chip.color"
                >
                  <v-icon
                      :left="chip.position.left"
                      :right="chip.position.right"
                  >{{ chip.icon }}</v-icon>
                  {{ chip.title}}
                </v-chip>
            </template>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Badges',
    data () {
      return {
        menu: [
          'Edit',
          'Copy',
          'Delete',
          'Print'
        ],
        btnBudge: 2,
        badgeExample: [
          {
            id: 1,
            content: 'Primary',
            html: '<h1>Example heading</h1>'
          },
          {
            id: 2,
            content: 'Secondary',
            html: '<h2>Example heading</h2>'
          },
          {
            id: 3,
            content: 'Warning',
            html: '<h3>Example heading</h3>'
          },
          {
            id: 4,
            content: 'Info',
            html: '<h4>Example heading</h4>'
          },
          {
            id: 5,
            content: 'Success',
            html: '<h5>Example heading</h5>'
          },
        ],
        iconBadges: [
          {
            id: 1,
            content: 2,
            name: 'mdi-email',
            color: 'primary'
          },
          {
            id: 2,
            content: 5,
            name: 'mdi-bell',
            color: 'secondary'
          },
          {
            id: 3,
            content: 3,
            name: 'mdi-account',
            color: 'warning'
          },
        ],
        dotBadges: [
          {
            id: 1,
            content: 2,
            name: 'mdi-cart',
            color: 'primary'
          },
          {
            id: 2,
            content: 5,
            name: 'mdi-bell',
            color: 'secondary'
          },
          {
            id: 3,
            content: 3,
            name: 'mdi-email',
            color: 'warning'
          },
        ],
        positionBadges: [
          {
            id: 1,
            content: 2,
            position: {
              left: false,
              bottom: false
            },
            name: 'mdi-chat',
            color: 'error'
          },
          {
            id: 2,
            content: 5,
            position: {
              left: false,
              bottom: true
            },
            name: 'mdi-alarm',
            color: 'primary'
          },
          {
            id: 3,
            content: 3,
            position: {
              left: true,
              bottom: false
            },
            name: 'mdi-git',
            color: 'success'
          },
        ],
        chips: [
          {
            id: 1,
            title: 'Default',
            color: ''
          },
          {
            id: 2,
            title: 'Primary',
            color: 'primary'
          },
          {
            id: 3,
            title: 'Secondary',
            color: 'secondary'
          },
          {
            id: 4,
            title: 'Info',
            color: 'info'
          },
          {
            id: 5,
            title: 'Success',
            color: 'success'
          },
          {
            id: 6,
            title: 'Warning',
            color: 'warning'
          },
        ],
        chipsWithIcons: [
          {
            id: 1,
            title: 'Premium',
            color: 'primary',
            position: {
              left: true,
              right: false
            },
            icon: 'mdi-star'
          },
          {
            id: 2,
            title: '1 Year',
            color: 'secondary',
            position: {
              left: true,
              right: false
            },
            icon: 'mdi-cake-variant'
          },
          {
            id: 3,
            title: 'Info',
            color: 'info',
            position: {
              left: true,
              right: false
            },
            icon: 'mdi-checkbox-marked-circle'
          },
          {
            id: 4,
            title: 'Confirmed',
            color: 'success',
            position: {
              left: true,
              right: false
            },
            icon: 'mdi-checkbox-marked-circle'
          }
        ],
      }
    }
  }
</script>

<style src="./Badges.scss" lang="scss"/>
