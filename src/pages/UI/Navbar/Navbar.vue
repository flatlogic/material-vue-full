<template>
  <v-container fluid class="navbar-page mt-4">
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
            <p>Navbar Example</p>
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
          <v-card-text class="overflow-x-auto pa-6 pt-0">
            <p class="fs-normal greyBold--text mb-5">App bar displays yours app links by importing and inserting AppBar component.
              To swap links style add attribute within Button component.</p>
            <v-app-bar
              flat
              color="primaryConst"
              dark
              class="mb-10">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Navbar</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn text>
                  Link
                </v-btn>

                <v-btn text>
                  link 2
                </v-btn>

                <v-btn text disabled>
                  Disabled link
                </v-btn>

              </v-app-bar>
            <p class="fs-normal greyBold--text mb-5">With menu</p>
            <v-app-bar
              flat
              color="secondary"
              dark
              class="mb-6">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
              <v-toolbar-title>Navbar menu</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu
                left
                bottom
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                      v-for="n in 5"
                      :key="n"
                      @click="() => {}"
                  >
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-app-bar>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
            <p>Navbar Search</p>
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
          <v-card-text class="pa-6 pt-0">
            <p class="fs-normal greyBold--text mb-5">Search icon makes UX more flexible. To start using search icon,
              make sure you got all relative functions.</p>
            <v-app-bar
              color="primaryConst"
              flat
              dark
              class="mb-10">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>Navbar search</v-toolbar-title>
                <v-spacer></v-spacer>
                <Search />
              </v-app-bar>
            <p class="fs-normal greyBold--text mb-5">Navbar can contain background images. You can set source via the src prop.</p>
            <v-app-bar
              flat
              color="primary"
              dark
              class="mb-6"
              src="https://picsum.photos/1920/1080?random">
              <template v-slot:img="{ props }">
                <v-img
                  v-bind="props"
                  gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
                ></v-img>
              </template>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
              <v-toolbar-title>Navbar with image</v-toolbar-title>
              <v-spacer></v-spacer>
              <Search />
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-menu
                  left
                  bottom
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                      v-for="n in 5"
                      :key="n"
                      @click="() => {}"
                  >
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-app-bar>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Search from "@/components/Search/Search"

export default {
  name: 'Navbar',
  components: { Search },
  data () {
    return {
      menu: [
        'Edit',
        'Copy',
        'Delete',
        'Print'
      ]
    }
  }
}
</script>
